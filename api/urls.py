from django.urls import path, include
from . import views

urlpatterns = [
    path('get-self', views.GetSelfView.as_view()),
    path('get-matching-users', views.GetMatchingUsersView.as_view()),
    path('get-user', views.GetUserByUsernameView.as_view()),
    path('swipe-left', views.SwipeLeftView.as_view()),
    path('swipe-right', views.SwipeRightView.as_view()),
    path('get-right-swipes', views.GetRightSwipesView.as_view()),
    path('get-messages', views.GetMessagesView.as_view())
]
