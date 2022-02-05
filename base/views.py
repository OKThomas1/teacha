from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from . import forms
from django.contrib import messages

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = forms.UserRegisterForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                request, f'Welcome {username}! Your account has successfully been created. You may now login.')
            return redirect('login')
    else:
        form = forms.UserRegisterForm()
    return render(request, 'base/register.html', {'form': form})