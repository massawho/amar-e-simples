from django.http import HttpResponse
from django.views.generic import DetailView, ListView
from .models import News


class NewsListView(ListView):
    model = News
    queryset = News.objects.order_by('-publication_date')

    context_object_name = 'news'

    def head(self, *args, **kwargs):
        last_news = self.get_queryset().latest('id')
        response = HttpResponse('')
        # RFC 1123 date format
        response['Last-Modified'] = last_news.publication_date.strftime('%a, %d %b %Y %H:%M:%S GMT')
        return response


class ViewNews(DetailView):
    model = News
    context_object_name = 'item'