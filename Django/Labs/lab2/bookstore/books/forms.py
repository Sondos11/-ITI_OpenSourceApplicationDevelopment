from django.forms import ModelForm
from .models import book


class bookForm(ModelForm):
    class Meta:
        model = book
        # fields = '__all__'
        fields = ['title', 'description', 'rate', 'views']