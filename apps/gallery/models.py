from django.db import models
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _

from cms.models import CMSPlugin

from versatileimagefield.fields import VersatileImageField
from versatileimagefield.image_warmer import VersatileImageFieldWarmer


'''
    Gallery model definition
'''


class Gallery(models.Model):

    class Meta:
        verbose_name_plural = _('Galleries')

    slug = models.SlugField()

    title = models.CharField(
        _('Title'),
        max_length=60,
        help_text='Title of the gallery.'
    )

    description = models.CharField(
        _('Description'),
        max_length=60,
        help_text=_('Briefly describe this gallery.')
    )

    created_at = models.DateField(
        _('Created at'),
        auto_now_add=True
    )

    def __str__(self):
        return self.title


'''
    Function that sets the photo upload folder dynamically.
'''


def image_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'uploads/gallery_{0}/{1}'.format(instance.gallery.id, filename)


'''
    Photo model definition
'''


class Photo(models.Model):

    class Meta:
        ordering = ['item_order']

    gallery = models.ForeignKey(Gallery)

    description = models.CharField(
        _('Description'),
        max_length=60
    )

    item_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False
    )

    image = VersatileImageField(
        _('Photo'),
        upload_to=image_path,
    )


@receiver(models.signals.post_save, sender=Photo)
def warm_photo_images(sender, instance, **kwargs):

    photo_img_warmer = VersatileImageFieldWarmer(
        instance_or_queryset=instance,
        rendition_key_set='gallery_photo',
        image_attr='image'
    )
    photo_img_warmer.warm()


'''
    Gallery configuration model definition
'''


class LatestGalleryPluginConfiguration(CMSPlugin):

    num_items = models.PositiveIntegerField(
        'Number of galleries',
        help_text='Number of galleries that will be shown.'
    )