from django.contrib.auth import views as auth_views
from django.urls import path, include
from . import views

urlpatterns = [
    path('login', auth_views.LoginView.as_view(template_name="base/login.html"), name="login"),
	path('register', views.register, name="register"),
	path('logout', auth_views.LogoutView.as_view(template_name="base/logout.html"), name="logout"),
	path('edit', views.UserUpdateView.as_view(), name="update"),
	path('api/', include('api.urls')),
	path('password-reset', auth_views.PasswordResetView.as_view(template_name="base/password-reset.html"), name="password-reset"),
	path('password-reset/done', auth_views.PasswordResetDoneView.as_view(template_name='base/password-reset-done.html'), name="password_reset_done"),
	path('password-reset-confirm/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(template_name='base/password-reset-confirm.html'), name="password_reset_confirm"),
	path('password-reset-complete/done', auth_views.PasswordResetCompleteView.as_view(template_name='base/password-reset-complete.html'), name="password_reset_complete"),
	path('', include('react.urls'))
]