from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from . import forms
from django.contrib import messages

# Create your views here.

def register(request):
    if request.method == 'POST':
        user_form = forms.UserRegisterForm(request.POST)
        profile_form = forms.ProfileRegisterForm(request.POST, request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            profile = profile_form.save(commit=False)
            profile.user = user

            if 'avatar' in request.FILES:
                profile.avatar = request.FILES['avatar']
                print('yes')
            else:
                print('no')
            profile.save()

            username = user_form.cleaned_data.get('username')
            messages.success(
                request, f'Welcome {username}! Your account has successfully been created. You may now login.')
            return redirect('login')
    else:
        user_form = forms.UserRegisterForm()
        profile_form = forms.ProfileRegisterForm()
    return render(request, 'base/register.html', {'user_form': user_form, 'profile_form': profile_form})