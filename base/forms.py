from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from base.models import Profile


class UserRegisterForm(UserCreationForm):

    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['first_name','last_name','email','username', 'password1', 'password2']


class ProfileRegisterForm(forms.ModelForm):

	genders = (
		(0, "Male"),
		(1, "Female"),
		(2, "Non-Binary")
	)

	races = (
		(0, "All Races"),
		(1, "Black or African American"),
		(2, "White"),
		(3, "Asian"),
		(4, "American Indian or Alaska Native"),
		(5, "Native Hawaiian or Pasific Islander")

	)

	gender = forms.ChoiceField(choices=genders)
	race = forms.ChoiceField(choices=races)
	mentor = forms.BooleanField(label="I am a mentor", required=False)
	visible = forms.BooleanField(label="Show my data on my profile", required=False)


	class Meta:
		model = Profile
		fields = ['avatar', 'gender', 'race', 'age', 'mentor', 'visible']