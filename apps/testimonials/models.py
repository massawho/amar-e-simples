from django.db import models
from cms.models import CMSPlugin
from django.utils.translation import ugettext_lazy as _


class TestimonialConfig(CMSPlugin):

    def copy_relations(self, old_instance):
        for associated_item in old_instance.associated_item.all():
            associated_item.pk = None
            associated_item.plugin = self
            associated_item.save()

    def __str__(self):
        return "Testimonials"


class Testimonial(models.Model):

    class Meta:
        ordering = ['item_order']

    name = models.CharField(_('Name'),
                            max_length=45,
                            null=False,
                            blank=False)

    role = models.CharField(_('Role'),
                            max_length=45,
                            null=False,
                            blank=False)

    testimonial = models.TextField(_('Testimonial'),
                                   null=False,
                                   blank=False)

    active = models.BooleanField(
        _('Active?'),
        blank=False,
        null=False,
        default=True,
        help_text=_('Is this testimonial still active?')
    )

    item_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False
    )

    def __str__(self):
        return "%s: %s" % (self.name, self.testimonial)