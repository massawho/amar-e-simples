from django.conf.urls import patterns, url
from .views import send_email

urlpatterns = patterns('',
    url(r'^$', send_email, name='send_email'),
)