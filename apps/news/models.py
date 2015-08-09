from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.utils.translation import ugettext_lazy as _
from datetime import datetime
from polymorphic import PolymorphicModel
from embed_video.fields import EmbedVideoField
from cms.models.fields import PlaceholderField


# ********************************
# News class definition
# ********************************
class News(PolymorphicModel):

    class Meta:
        verbose_name_plural = 'News'

    content = PlaceholderField('news_app_post_content')

    title = models.CharField(
        _('Title'),
        max_length=40,
        null=False,
        blank=False,
        help_text=_('Title of this news.')
    )

    publication_date = models.DateField(
        _('Publication date'),
        null=False,
        blank=False,
        default=datetime.now,
        help_text=_('Date when this news was published.')
    )

    slug = models.SlugField(
        _('Slug'),
        max_length=40,
        null=False,
        blank=False,
        help_text=_('A unique name to identify this news.')
    )

    description = models.CharField(
        _('Description'),
        max_length=255,
        null=False,
        blank=False,
        help_text=_('Briefly describe this news.')
    )

    photo = models.ImageField(
        upload_to='news',
        null=False,
        blank=False,
    )

    photo_thumbnail = ImageSpecField(
        source='photo',
        processors=[ResizeToFill(555, 300)],
    )

    photo_display = ImageSpecField(
        source='photo',
        processors=[ResizeToFill(70, 70)],
    )

    photo_cover = ImageSpecField(
        source='photo',
        processors=[ResizeToFill(620, 330)],
    )

    def is_audio(self):
        return False

    def is_text(self):
        return False

    def is_video(self):
        return False

    def __str__(self):
        return self.title


# ********************************
# News in audio class definition
# ********************************
class NewsInAudio(News):

    class Meta:
        verbose_name_plural = 'News in audio'


    sound_cloud_link = EmbedVideoField(
        _('SoundCloud Link'),
        null=True,
        blank=False,
        help_text=_('Copy here the link of the audio from SoundCloud to embed the audio.')
    )
    def is_audio(self):
        return True


# ********************************
# News in video class definition
# ********************************
class NewsInVideo(News):

    class Meta:
        verbose_name_plural = 'News in video'

    video_link = EmbedVideoField(
        _('Link'),
        blank=False,
        null=True,
        help_text=_('Copy here the link of your video from YouTube or Vimeo.')
    )

    def is_video(self):
        return True


# ********************************
# News in video class definition
# ********************************
class NewsInText(News):

    class Meta:
        verbose_name_plural = 'News in video'

    def is_text(self):
        return True