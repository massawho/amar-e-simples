from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from .models import SocialMediaConfig, SocialMediaLink


'''
'''


class SocialMediaLinkInline(admin.TabularInline):
    model = SocialMediaLink
    exclude = ['social_type']
    min_num = 1
    extra = 1

'''
'''


class SocialMediaPlugin(CMSPluginBase):
    name = _("Social Media Links Plugin")
    model = SocialMediaConfig
    module = _("Social Media")
    render_template = "social_media/_links_list.html"
    inlines = (SocialMediaLinkInline,)

    def render(self, context, instance, placeholder):
        context['title'] = instance.title
        context['social_links'] = instance.associated_item.all()
        return context

# Plugins registration
plugin_pool.register_plugin(SocialMediaPlugin)