# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import cms.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0013_auto_20150717_2233'),
        ('news', '0006_newsinvideo_video_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='content',
            field=cms.models.fields.PlaceholderField(editable=False, to='cms.Placeholder', slotname='news_app_post_content', null=True, related_name='news_app_posts'),
        ),
    ]
