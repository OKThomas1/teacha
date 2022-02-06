from django.shortcuts import redirect, render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
# Create your views here.

class Index(View, LoginRequiredMixin):
	def get(self, request):
		if not request.user.is_authenticated:
			return redirect('login')
		return render(request, 'react/index.html')