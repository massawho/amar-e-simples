from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Quote


class QuotesPlugin(CMSPluginBase, ):
    name = _("Random quote")
    render_template = "quotes/_quote.html"

    def render(self, context, instance, placeholder):
        context['quote'] = Quote.objects.filter(active=True).order_by('?').first()
        return context


# Plugins registration
plugin_pool.register_plugin(QuotesPlugin)