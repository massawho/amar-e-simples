__author__ = 'massa'
from ajaximage.widgets import AjaxImageWidget
from django import forms
from .models import Photo


class PhotoForm(forms.ModelForm):

    class Meta:
        model = Photo

    image = forms.CharField(widget=AjaxImageWidget(upload_to='form-uploads'))