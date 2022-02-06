from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")

	bio = models.CharField(max_length=1000)
	gender = models.CharField(max_length=20)
	race = models.CharField(max_length=30)
	age = models.IntegerField(null=True, blank=True)
	mentor = models.BooleanField(null=True, blank=True)
	avatar = models.ImageField(default="default.jpg", upload_to="pfps")
	visible = models.BooleanField(null=True, blank=True)


class Swipe(models.Model):
	swiper = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="swiper")
	swiped = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="swiped")
	swipe_type = models.CharField(max_length=5)


class Message(models.Model):
	sender = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="sender")
	receiver = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="receiver")
	message = models.CharField(max_length=1000)
	sent_at = models.DateTimeField(auto_now_add=True, blank=True)
