from django.contrib import admin
from fillform.models import userform

# Register your models here.
@admin.register(userform)
class showdata(admin.ModelAdmin):

    list_display= ('id' , 'name' , 'email')

