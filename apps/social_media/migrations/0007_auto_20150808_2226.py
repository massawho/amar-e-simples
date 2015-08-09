# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0006_facebookpagepluginconfig'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='facebookpagepluginconfig',
            name='page',
        ),
        migrations.AddField(
            model_name='facebookpagepluginconfig',
            name='facebook_page',
            field=models.CharField(max_length=20, null=True, help_text='Insert only the facebook page slug.', verbose_name='Facebook page'),
        ),
    ]
