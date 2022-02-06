from django.contrib import admin

# Register your models here.

from .models import Profile, Swipe, Message

admin.site.register(Profile)
admin.site.register(Message)
admin.site.register(Swipe)
