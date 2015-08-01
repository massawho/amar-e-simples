# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import embed_video.fields
import cms.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0007_news_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsinaudio',
            name='sound_cloud_link',
            field=embed_video.fields.EmbedVideoField(verbose_name='SoundCloud Link', null=True, help_text='Copy here the link of the audio from SoundCloud to embed the audio.'),
        ),
        migrations.AlterField(
            model_name='news',
            name='content',
            field=cms.models.fields.PlaceholderField(editable=False, slotname='news_app_post_content', null=True, to='cms.Placeholder'),
        ),
    ]
