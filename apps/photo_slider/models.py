from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.utils.translation import ugettext_lazy as _

from cms.models import CMSPlugin


# ************************************
#  Configuration of photo slider plugin
# ************************************
class SliderPluginConfig(CMSPlugin):
    def copy_relations(self, old_instance):
        for associated_item in old_instance.associated_item.all():
            associated_item.pk = None
            associated_item.plugin = self
            associated_item.save()

    def __str__(self):
        return "Photo slider"


# *************************
# Photo model definition
# *************************
class Photo(models.Model):

    class Meta:
        ordering = ['item_order']

    plugin = models.ForeignKey(
        SliderPluginConfig,
        related_name="associated_item"
    )

    description = models.CharField(
        _('Description'),
        max_length=60,
        help_text=_('Briefly, give a description of this photo.')
    )

    item_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False
    )

    image = ProcessedImageField(
        upload_to='photo_sliders/photos',
        processors=[ResizeToFill(360, 270)],
        format='JPEG',
        options={'quality': 90},
        help_text=_('Upload a photo. The photo must have at least 360x270px and will be cropped.')
    )