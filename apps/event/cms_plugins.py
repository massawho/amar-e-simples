from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Event


class EventPlugin(CMSPluginBase):
    name = _("Event plugin")
    module = _("Event")
    render_template = "event/_event_list.html"

    def render(self, context, instance, placeholder):
        context['max'] = instance.number_per_page
        context['events'] = Event.get_future_events
        return context

# Plugins registration
plugin_pool.register_plugin(EventPlugin)