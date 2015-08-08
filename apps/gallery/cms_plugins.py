from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Gallery, LatestGalleryPluginConfiguration


class LatestGalleriesPlugin(CMSPluginBase):
    module = _("Gallery")
    name = _("Latest galleries")
    model = LatestGalleryPluginConfiguration
    render_template = "gallery/_gallery.html"

    def render(self, context, instance, placeholder):
        limit = instance.num_items
        context['galleries'] = Gallery.objects.order_by('created_at')[:limit]
        return context


# Plugins registration
plugin_pool.register_plugin(LatestGalleriesPlugin)