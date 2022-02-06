import profile
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
        if not request.user.is_authenticated:
            return Response({"error": "you are not authenticated"}, status=status.HTTP_400_BAD_REQUEST)
        profile = request.user.profile
        data = PublicProfileSerializer(profile).data
        return Response(data, status=status.HTTP_200_OK)


def match_user_algorithm(user):
    return Profile.objects.exclude(mentor=user.profile.mentor, user=user)


class GetMatchingUsersView(APIView):
    def get(self, request):
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
        swiped = Profile.objects.filter(
            user__username=request.data['username'])
        if len(swiped) > 0:
            swiped = swiped[0]
            if swiped.mentor == swiper.mentor:
                return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
            Swipe.objects.create(
                swiper=swiper, swiped=swiped, swipe_type="left")
            return Response({'success': 'successfully swiped left'}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "could not get user with the provided username"}, status=status.HTTP_404_NOT_FOUND)


class SwipeRightView(APIView):
    def post(self, request):
        swiper = request.user.profile
        swiped = Profile.objects.filter(
            user__username=request.data['username'])
        if len(swiped) > 0:
            swiped = swiped[0]
            if swiped.mentor == swiper.mentor:
                return Response({'error': 'cannot swipe on a user of the same type'}, status=status.HTTP_400_BAD_REQUEST)
            Swipe.objects.create(
                swiper=swiper, swiped=swiped, swipe_type="right")
            return Response({'success': 'successfully swiped right'}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "could not get user with the provided username"}, status=status.HTTP_404_NOT_FOUND)


class GetRightSwipesView(APIView):
    def get(self, request):
        swipes = Swipe.objects.filter(
            swiped=request.user.profile, swipe_type="right")
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


class GetMessagesView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        profile = self.request.user.profile
        return Message.objects.filter(Q(sender=profile) | Q(receiver=profile))
