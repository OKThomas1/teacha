from django.db.models import Q
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MessageSerializer, PublicProfileSerializer, PrivateProfileSerializer
from django.contrib.auth.models import User
from base.models import Swipe, Profile, Message
import requests

# Create your views here.

class GetSelfView(APIView):
	def get(self, request):
		if not request.user.is_authenticated:
			return Response({"error": "you are not authenticated"}, status=status.HTTP_400_BAD_REQUEST)
		profile = request.user.profile 
		data = PublicProfileSerializer(profile).data
		return Response(data, status=status.HTTP_200_OK)


def match_user_algorithm(user):
	return Profile.objects.exclude(mentor=user.profile.mentor, user=user)


class GetMatchingUsersView(APIView):
	def get(self, request):
		ip = request.META.get('REMOTE_ADDR', None)
		if ip and ip != "127.0.0.1":
			res = requests.get(f"https://geolocation-db.com/json/{ip}&position=true").json()
			lat = res['latitude']
			lng = res['longitude']
			if lat != request.user.profile.lat or lng != request.user.profile.lng:
				request.user.profile.update(lat=lat, lng=lng)
		
		users = match_user_algorithm(request.user)
		print(len(users))
		if len(users) > 0:
			serialized_users = []
			for user in users:
				if user.visible:
					data = PrivateProfileSerializer(user).data
					serialized_users.append(data)
				else:
					data = PublicProfileSerializer(user).data
					serialized_users.append(data)
			return Response(serialized_users, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not get users with algorithm"}, status=status.HTTP_400_BAD_REQUEST)

class GetUserByUsernameView(APIView):
	def get(self, request):
		username = request.headers['username']
		users = User.objects.filter(username=username)
		if len(users) > 0:
			user = users[0].profile
			if user.visible:
				data = PublicProfileSerializer(user).data
				return Response(data, status=status.HTTP_200_OK)
			else:
				data = PrivateProfileSerializer(user).data
				return Response(data, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not find user with provided username"}, status=status.HTTP_404_NOT_FOUND)

class SwipeLeftView(APIView):
	def post(self, request):
		swiper = request.user.profile
		swiped = Profile.objects.filter(user__username=request.data['username'])
		if len(swiped) > 0:
			swiped = swiped[0]
			if swiped.mentor == swiper.mentor:
				return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
			Swipe.objects.create(swiper=swiper, swiped=swiped, swipe_type="left")
			return Response({'success': 'successfully swiped left'}, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not get user with the provided username"}, status=status.HTTP_404_NOT_FOUND)

class SwipeRightView(APIView):
	def post(self, request):
		swiper = request.user.profile
		swiped = Profile.objects.filter(user__username=request.data['username'])
		if len(swiped) > 0:
			swiped = swiped[0]
			if swiped.mentor == swiper.mentor:
				return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
			Swipe.objects.create(swiper=swiper, swiped=swiped, swipe_type="right")
			return Response({'success': 'successfully swiped right'}, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not get user with the provided username"}, status=status.HTTP_404_NOT_FOUND)


class GetRightSwipesView(APIView):
	def get(self, request):
		swipes = Swipe.objects.filter(swiped=request.user.profile, swipe_type="right")
		if len(swipes) > 0:
			serialized_users = []
			for swipe in swipes:
				if swipe.swiper.visible:
					data = PrivateProfileSerializer(swipe.swiper).data
					serialized_users.append(data)
				else:
					data = PublicProfileSerializer(swipe.swiper).data
					serialized_users.append(data)
			return Response(serialized_users, status=status.HTTP_200_OK)
		else:
			return Response([], status=status.HTTP_200_OK)


class GetMatchedUsersView(APIView):
	def get(self, request):
		profile = request.user.profile
		received_swipes = Swipe.objects.filter(swiped=profile)
		if len(received_swipes) > 0:
			matched_swipers = []
			for swipe in received_swipes:
				sent_swipes = Swipe.objects.filter(swiped=swipe.swiper, swiper=profile)
				if len(sent_swipes) > 0:
					swipe = sent_swipes[0]
					if swipe.swiper.visible:
						data = PrivateProfileSerializer(swipe.swiper).data
						matched_swipers.append(data)
					else:
						data = PublicProfileSerializer(swipe.swiper).data
						matched_swipers.append(data)
			return Response(matched_swipers, status=status.HTTP_200_OK)
		else:
			return Response([], status=status.HTTP_200_OK)



class GetMessagesView(generics.ListAPIView):
	serializer_class = MessageSerializer

	def get_queryset(self):
		profile = self.request.user.profile
		return Message.objects.filter(Q(sender=profile) | Q(receiver=profile))


class SendMessageView(APIView):
	def post(self, request):
		profile = request.user.profile
		users = User.objects.filter(username=request.data['username'])
		if len(users) > 0:
			user = users[0].profile
			swipe1 = Swipe.objects.filter(swiper=profile, swiped=user, swipe_type="right")
			swipe2 = Swipe.objects.filter(swiper=user, swiped=profile, swipe_type="right")
			if len(swipe1) > 0 and len(swipe2) > 0:
				Message.objects.create(sender=profile, receiver=user, message=request.data['message'])
			else:
				return Response({"error": "both users have not swiped right, you cannot message this user"}, status=status.HTTP_401_UNAUTHORIZED)

		else: 
			return Response({"error": "could not find user with the provided username"}, status=status.HTTP_400_BAD_REQUEST)


def validate_profile_changes(changes):
	return []


class UpdateProfileView(APIView):
	def put(self, request):
		changes = request.data['changes']
		errors = validate_profile_changes(changes)
		if len(errors) > 0:
			return Response(errors, status=status.HTTP_400_BAD_REQUEST)
		request.user.profile.update(**changes)
		return Response({"success": "successfully updated user"}, status=status.HTTP_200_OK)

