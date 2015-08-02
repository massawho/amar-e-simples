from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from .forms import ContactForm
from django.utils.translation import ugettext_lazy as _


class ContactFormPlugin(CMSPluginBase):
    name = _("Contact Form")
    model = CMSPlugin
    render_template = "contact_form/_contact_form.html"

    def render(self, context, instance, placeholder):
        context['form'] = ContactForm()
        return context

# Plugins registration
plugin_pool.register_plugin(ContactFormPlugin)