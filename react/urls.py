from django.contrib.auth import views as auth_views
from django.urls import path, include, re_path
from . import views

urlpatterns = [
	re_path(r"^.*", views.index)
]