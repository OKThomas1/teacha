from django.db.models import Q
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MessageSerializer, PublicProfileSerializer, PrivateProfileSerializer
from django.contrib.auth.models import User
from base.models import Swipe, Profile, Message

# Create your views here.

class GetSelfView(APIView):
	def get(self, request):
		profile = Profile.objects.get(user=request.user)
		data = PublicProfileSerializer(profile)
		if data.is_valid():
			return Response(data.data, status=status.HTTP_200_OK)
		else:
			return Response({"error": "invalid"}, status=status.HTTP_400_BAD_REQUEST)


def match_user_algorithm(user):
	profile = Profile.objects.get(user=user)
	return Profile.objects.all().exclude(mentor=profile.mentor)


class GetMatchingUsersView(APIView):
	def get(self, request):
		users = match_user_algorithm(request.user)
		if len(users) > 0:
			serialized_users = []
			for user in users:
				if user.visible:
					data = PrivateProfileSerializer(user)
					if data.is_valid():
						serialized_users.append(data.data)
				else:
					data = PublicProfileSerializer(user)
					if data.is_valid():
						serialized_users.append(data.data)
			return Response(serialized_users, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not get users with algorithm"}, status=status.HTTP_400_BAD_REQUEST)

class GetUserByUsernameView(APIView):
	def get(self, request):
		username = request.data['username']
		users = User.objects.filter(username=username)
		if len(users) > 0:
			user = User.objects.get(user=users[0])
			if user.visible:
				data = PublicProfileSerializer(user)
				if data.is_valid():
					return Response(data.data, status=status.HTTP_200_OK)
				else:
					return Response({"error": "public profile is invalid"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
			else:
				data = PrivateProfileSerializer(user)
				if data.is_valid():
					return Response(data.data, status=status.HTTP_200_OK)
				else:
					return Response({"error": "private profile is invalid"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		else:
			return Response({"error": "could not find user with provided username"}, status=status.HTTP_404_NOT_FOUND)

class SwipeLeftView(APIView):
	def post(self, request):
		swiper = Profile.objects.get(user=request.user)
		swiped = Profile.objects.filter(user__username=request.data['username'])
		if len(swiped > 0):
			swiped = swiped[0]
			if swiped.mentor == swiper.mentor:
				return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
			Swipe.objects.create(swiper=swiper, swiped=swiped, swipe_type="left")
			return Response({'success': 'successfully swiped left'}, status=status.HTTP_200_OK)
		else:
			return Response({"error": "could not get user with the provided username"}, status=status.HTTP_404_NOT_FOUND)

class SwipeRightView(APIView):
	def post(self, request):
		swiper = Profile.objects.get(user=request.user)
		swiped = Profile.objects.filter(user__username=request.data['username'])
		if len(swiped > 0):
			swiped = swiped[0]
			if swiped.mentor == swiper.mentor:
				return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
			Swipe.objects.create(swiper=swiper, swiped=swiped, swipe_type="right")
			return Response({'success': 'successfully swiped right'}, status=status.http_200_ok)
		else:
			return Response({"error": "could not get user with the provided username"}, status=status.http_404_not_found)


class GetRightSwipesView(APIView):
	def get(self, request):
		swipes = Swipe.objects.filter(swiped__user=request.user, swipe_type="right")
		if len(swipes) > 0:
			serialized_users = []
			for swipe in swipes:
				if swipe.swiper.visible:
					data = PrivateProfileSerializer(swipe.swiper)
					if data.is_valid():
						serialized_users.append(data.data)
				else:
					data = PublicProfileSerializer(swipe.swiper)
					if data.is_valid():
						serialized_users.append(data.data)
			return Response(serialized_users, status=status.HTTP_200_OK)
		else:
			return Response([], status=status.HTTP_200_OK)


class GetMessages(generics.ListAPIView):
	serializer = MessageSerializer

	def get_queryset(self):
		user = Profile.objects.get(user=self.request.user)
		return Message.objects.filter(Q(sender=user) | Q(receiver=user))


