# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import embed_video.fields


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0005_remove_news_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsinvideo',
            name='video_link',
            field=embed_video.fields.EmbedVideoField(help_text='Copy here the link of your video from YouTube or Vimeo.', verbose_name='Link', null=True),
        ),
    ]
