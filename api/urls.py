from django.urls import path, include
from . import views

urlpatterns = [
	path('get-self', views.GetSelfView.as_view()),
	path('get-matching-users', views.GetMatchingUsersView.as_view()),
	path('get-user', views.GetUserByUsernameView.as_view())
]