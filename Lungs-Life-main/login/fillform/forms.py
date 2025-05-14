from django import forms
from .models import userform
from django.core.exceptions import ValidationError

class userd(forms.ModelForm):
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Confirm Password'
        }),
        label="Confirm Password"
    )

    class Meta:
        model = userform

        fields = '__all__' 
        # fields =['confirm_password']

        labels = {
            'name' : 'Enter Name',
        }

        widgets = {
            'name':forms.TextInput(attrs={
                'class':'form-control'
            }),

            'email':forms.EmailInput(attrs={
                'class':'form-control'
            }),
           'state': forms.Select(attrs={  # Use forms.Select for dropdowns
            'class': 'form-control'
             }),
            'city': forms.TextInput(attrs={  # Add this
            'class': 'form-control'
             }),
             'password':forms.PasswordInput(attrs={
                 'class':'form-control'
             })
        }
        
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password != confirm_password:
            self.add_error('confirm_password', "Passwords do not match!")

      