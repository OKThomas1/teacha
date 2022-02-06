from importlib.metadata import requires
from rest_framework.serializers import ModelSerializer, CharField
from base.models import Profile, Message
from django.contrib.auth.models import User


class PrivateProfileSerializer(ModelSerializer):
	username = CharField(source="user.username")
	first_name = CharField(source="user.first_name")
	last_name = CharField(source="user.last_name")

	class Meta:
		model = Profile
		fields = ('avatar', 'username', 'first_name', 'last_name')


class PublicProfileSerializer(ModelSerializer):
	username = CharField(source="user.username")
	first_name = CharField(source="user.first_name")
	last_name = CharField(source="user.last_name")

	class Meta:
		model = Profile
		fields = ('avatar', 'username', 'gender', 'age', 'race', 'first_name', 'last_name')

class MessageSerializer(ModelSerializer):

	sender = PublicProfileSerializer(required=True)
	receiver = PublicProfileSerializer(required=True)

	class Meta:
		model = Message
		fields = ('sender', 'receiver', 'message', 'sent_at')