from django.db import models
from django.utils.translation import ugettext_lazy as _
from versatileimagefield.fields import VersatileImageField
from django.dispatch import receiver
from versatileimagefield.image_warmer import VersatileImageFieldWarmer
import datetime


def image_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'uploads/event_{0}/{1}'.format(instance.event.id, filename)


class Event(models.Model):

    class Meta:
        ordering = ('due_date',)

    name = models.CharField(
        _('Name'),
        max_length=100,
        null=False,
        blank=False,
        help_text=_("Name of the event.")
    )

    photo = VersatileImageField(
        _('Photo'),
        upload_to=image_path,
    )

    address = models.CharField(
        _('Address'),
        max_length=180,
        null=True,
        blank=True,
        help_text=_("The address where the event will occur")
    )

    description = models.TextField(
        _('Description'),
        null=True,
        blank=True,
        help_text=_("Briefly describe the event.")
    )

    due_date = models.DateField(
        _('Date'),
        null=False,
        blank=False,
        help_text=_("When does it happen?")
    )

    time = models.TextField(
        _('Time'),
        null=True,
        blank=True,
        help_text=_("What time does it happen?")
    )

    @staticmethod
    def get_future_events():
        return Event.objects.filter(due_date__gt=datetime.datetime.now())

    def get_month(self):
        months = ('Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov',  'Dez')
        return months[self.due_date.month - 1]

    def __str__(self):
        return self.name

        return super(Event, self).clean()


@receiver(models.signals.post_save, sender=Event)
def warm_photo_images(sender, instance, **kwargs):

    photo_img_warmer = VersatileImageFieldWarmer(
        instance_or_queryset=instance,
        rendition_key_set='event',
        image_attr='image'
    )
    photo_img_warmer.warm()