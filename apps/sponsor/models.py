from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from django.utils.translation import ugettext_lazy as _


class Sponsor(models.Model):

    class Meta:
        ordering = ['item_order']

    sponsor = models.CharField(
        _('Sponsor'),
        max_length=60,
        null=False,
        blank=False
    )

    sponsor_website = models.URLField(
        _('Sponsor\'s website'),
        blank=False,
        null=False,
        max_length=60,
        help_text=_('Sponsor\'s website')
    )

    sponsor_logo = ProcessedImageField(
        upload_to='photo_sliders/photos',
        processors=[ResizeToFit(width=243)],
        format='PNG',
        options={'quality': 90},
        help_text=_('Upload a photo. The photo must have at least 360x270px and will be cropped.')
    )

    active = models.BooleanField(
        _('Active?'),
        blank=False,
        null=False,
        default=True,
        help_text=_('Is this sponsor still active?')
    )

    item_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False
    )

    def __str__(self):
        return self.sponsor