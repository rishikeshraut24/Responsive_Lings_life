from django.urls import path
from .import views

urlpatterns= [
    path('fill/' , views.userdata),
    path('success/' , views.thankyou),
   
    
]

