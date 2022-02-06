from importlib.metadata import requires
from rest_framework.serializers import ModelSerializer, CharField
from base.models import Profile, Message
from django.contrib.auth.models import User


class PrivateProfileSerializer(ModelSerializer):
	username = CharField(source="user.username")

	class Meta:
		model = Profile
		fields = ('avatar', 'username')


class PublicProfileSerializer(ModelSerializer):
	username = CharField(source="user.username")

	class Meta:
		model = Profile
		fields = ('avatar', 'username', 'gender', 'age', 'race')

class MessageSerializer(ModelSerializer):

	sender = PublicProfileSerializer(required=True)
	receiver = PublicProfileSerializer(required=True)

	class Meta:
		model = Message
		fields = ('sender', 'receiver', 'message', 'sent_at')