from django.db import models
from django.utils.translation import ugettext_lazy as _
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Project(models.Model):

    class Meta:
        ordering = ['order']

    name = models.CharField(
        _('Name'),
        blank=False,
        null=False,
        max_length=45,
        help_text=_('Name of the project')
    )

    slug = models.SlugField(
        _('Slug'),
        max_length=45,
        null=False,
        blank=False,
        help_text=_('A unique name to identify this news.')
    )

    description = models.CharField(
        _('Description'),
        blank=False,
        null=False,
        max_length=255,
        help_text=_('Give a brief description for the project')
    )

    photo = models.ImageField(
        upload_to='project'
    )

    photo_thumbnail = ImageSpecField(
        source='photo',
        processors=[ResizeToFill(360, 180)],
    )

    text = models.TextField(
        _('Text'),
        blank=False,
        null=False,
        help_text=_('Describe the project.')
    )

    order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False
    )

    active = models.BooleanField(
        _('Active?'),
        blank=False,
        null=False,
        default=True,
        help_text=_('Is this project still active?')
    )

    def __str__(self):
        return self.name