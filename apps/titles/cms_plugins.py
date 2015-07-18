from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from .models import TitlePlugin
from django.utils.translation import ugettext_lazy as _


class TitlePlugin(CMSPluginBase):
    name = _("Title")
    module = _("Title")
    model = TitlePlugin
    render_template = "titles/_title.html"

    def render(self, context, instance, placeholder):
        context['title'] = instance.title
        context['subtitle'] = instance.subtitle
        return context

# Plugins registration
plugin_pool.register_plugin(TitlePlugin)