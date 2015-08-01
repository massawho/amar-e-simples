from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import News


class NewsPlugin(CMSPluginBase):
    module = _("News")
    name = _("List all news")
    render_template = "news/plugins/_list_all.html"

    def render(self, context, instance, placeholder):
        context['news'] = News.objects.all().order_by('-id')[:4]
        return context


# Plugins registration
plugin_pool.register_plugin(NewsPlugin)