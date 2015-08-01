from django.contrib.admin import widgets
from django import forms


class NewsForm(forms.ModelForm):

    class Meta:
        widgets = {
            'publication_date': widgets.AdminDateWidget(),
            'description': widgets.AdminTextareaWidget()
        }