from django.urls import path, include
from . import views

urlpatterns = [
	path('get-self/', views.GetSelfView.as_view())
]