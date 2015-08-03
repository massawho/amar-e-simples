from django.conf.urls import patterns, url
from .views import ProjectsListView, ViewProject


urlpatterns = patterns(
    '',
    url(r'^$', ProjectsListView.as_view(), name='projects-list-all'),
    url(r'^(?P<slug>[0-9a-z-]+)/$', ViewProject.as_view(), name="project-show"),
)