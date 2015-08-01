from django.conf.urls import patterns, url
from .views import NewsListView, ViewNews


urlpatterns = patterns(
    '',
    url(r'^$', NewsListView.as_view(), name='news-list-all'),
    url(r'^(?P<slug>[0-9a-z-]+)/$', ViewNews.as_view(), name="news-show"),
)