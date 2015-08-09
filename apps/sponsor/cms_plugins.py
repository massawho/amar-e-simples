from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Sponsor


class SponsorPlugin(CMSPluginBase):
    name = _("Sponsor list")
    render_template = "sponsor/plugin/_list_sponsors.html"

    def render(self, context, instance, placeholder):
        context['sponsors'] = Sponsor.objects.filter(active=True)
        return context


# Plugins registration
plugin_pool.register_plugin(SponsorPlugin)