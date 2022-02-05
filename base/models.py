from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)

	bio = models.CharField(max_length=1000)
	gender = models.CharField(max_length=20)
	race = models.CharField(max_length=30)
	age = models.IntegerField(max_length=3)
	mentor = models.BooleanField()
	avatar = models.ImageField(default="default.jpg", upload_to="pfps")
