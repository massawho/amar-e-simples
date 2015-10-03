from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Testimonial, TestimonialConfig


class TestimonialPlugin(CMSPluginBase):
    name = _("Testimonial list")
    render_template = "testimonials/_testimonial_list.html"

    def render(self, context, instance, placeholder):
        objs = Testimonial.objects.filter(active=True)
        context['testimonials'] = objs
        context['range'] = range(objs.size/2)
        return context

# Plugins registration
plugin_pool.register_plugin(TestimonialPlugin)