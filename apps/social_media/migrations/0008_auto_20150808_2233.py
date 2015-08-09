# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0007_auto_20150808_2226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facebookpagepluginconfig',
            name='facebook_page',
            field=models.CharField(max_length=20, default='facebook', verbose_name='Facebook page', help_text='Insert only the facebook page slug.'),
        ),
    ]
