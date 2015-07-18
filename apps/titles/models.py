__author__ = 'massa'

from django.db import models
from django.utils.translation import ugettext_lazy as _
from cms.models import CMSPlugin


class TitlePlugin(CMSPlugin):
    title = models.CharField(
        _("Title"),
        max_length=60,
        null=False,
        blank=False
    )

    subtitle = models.CharField(
        _("Subtitle"),
        max_length=220,
        null=True,
        blank=True
    )

    def __str__(self):
        return "%s" % self.title