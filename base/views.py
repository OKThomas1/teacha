from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from django import forms as form
from . import forms
from django.contrib import messages
from base.models import Profile
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View

# Create your views here.

def register(request):
    if request.method == 'POST':
        user_form = forms.UserRegisterForm(request.POST)
        profile_form = forms.ProfileRegisterForm(request.POST, request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            for key, value in request.FILES.items():
                print(key)	
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


class ProfileUpdateForm(form.ModelForm):
	genders = (
		(0, "Male"),
		(1, "Female"),
		(2, "Non-Binary")
	)

	races = (
		(1, "Black or African American"),
		(2, "White"),
		(3, "Asian"),
		(4, "American Indian or Alaska Native"),
		(5, "Native Hawaiian or Pasific Islander")

	)

	gender = form.ChoiceField(choices=genders)
	race = form.ChoiceField(choices=races)
	mentor = form.BooleanField(label="I am a mentor", required=False)
	visible = form.BooleanField(label="Show my data on my profile", required=False)
	work = form.CharField()
	job_title = form.CharField()
	school = form.CharField()
	education_level = form.CharField()
	hometown = form.CharField()
	bio = form.CharField()

	class Meta:
		model = Profile
		fields = ['avatar', 'gender', 'race', 'age', 'mentor', 'visible', 'work', 'job_title', 'school', 'education_level', 'hometown', 'bio']


class UserUpdateView(View, LoginRequiredMixin):
	def get(self, request, *args, **kwargs):
		pform = ProfileUpdateForm(instance=request.user.profile)

		context = {
            "form": pform
        }

		return render(request, 'base/update.html', context)

	def post(self, request, *args, **kwargs):
		pform = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
		if pform.is_valid():
			pform.save(*args, **kwargs)
			messages.success(request, 'Your account has successfully been updated.')
			return redirect('update')
		else:
			context = {
                "form": pform
            }
			return render(request, 'base/update.html', context)
