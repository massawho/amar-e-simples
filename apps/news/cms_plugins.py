from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import News


class NewsPlugin(CMSPluginBase, ):
    module = _("News")
    name = _("List all news")
    render_template = "news/plugins/_list_all.html"

    def render(self, context, instance, placeholder):
        context['news'] = News.objects.all().order_by('-id')[:4]
        return context


class NewsWidgetPlugin(CMSPluginBase, ):
    module = _("Widgets")
    name = _("List news")
    render_template = "news/plugins/_widget_list_all.html"

    def render(self, context, instance, placeholder):
        context['news'] = News.objects.all().order_by('-publication_date')[:3]
        return context


# Plugins registration
plugin_pool.register_plugin(NewsPlugin)
plugin_pool.register_plugin(NewsWidgetPlugin)