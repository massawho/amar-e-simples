from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from adminsortable2.admin import SortableInlineAdminMixin
from django.contrib import admin
from .models import SliderPluginConfig, Photo


class PhotoInline(SortableInlineAdminMixin, admin.TabularInline):
    model = Photo
    exclude = ['order']
    min_num = 1
    extra = 1


class PhotoSliderPlugin(CMSPluginBase):
    module = _("Sliders")
    name = _("Photo slider")
    model = SliderPluginConfig
    render_template = "photo_slider/_slider.html"
    inlines = (PhotoInline,)

    def render(self, context, instance, placeholder):
        context['photos'] = instance.associated_item.all()
        return context


# Plugins registration
plugin_pool.register_plugin(PhotoSliderPlugin)