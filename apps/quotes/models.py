from django.db import models
from django.utils.translation import ugettext_lazy as _


class Quote(models.Model):

    quote = models.TextField(
        _('Phrase'),
        null=False,
        blank=False
    )

    author = models.CharField(
        _('Author'),
        blank=False,
        null=False,
        max_length=60,
        help_text=_('Author\'s name')
    )

    active = models.BooleanField(
        _('Active?'),
        blank=False,
        null=False,
        default=True,
        help_text=_('Is this project still active?')
    )

    def __str__(self):
        return self.quote