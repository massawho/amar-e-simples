from ajaximage.widgets import AjaxImageWidget
from django import forms
from .models import Photo


class PhotoForm(forms.ModelForm):

    image = forms.CharField(widget=AjaxImageWidget(upload_to='form-uploads'))

    class Meta:
        model = Photo
        exclude = []
