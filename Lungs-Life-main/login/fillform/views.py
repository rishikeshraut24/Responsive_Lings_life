



from django.shortcuts import render
from .forms import userd
from django.http import HttpResponseRedirect
from .models import userform
# Create your views here.


def thankyou(request):
    return render(request , 'fillform/index.html')

def userdata(request):

    if request.method =="POST":
        fm=userd(request.POST , request.FILES)
        if fm.is_valid():
            student_instance = fm.save(commit=False)
            student_instance.save()
            return HttpResponseRedirect('/log/success')    
            
            
        else:
            print(fm.errors)
    else:

        fm = userd()
    return render(request, 'fillform/loginpage.html' , {'form' : fm})