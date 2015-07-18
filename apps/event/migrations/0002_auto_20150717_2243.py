# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import versatileimagefield.fields
import apps.event.models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='photo',
            field=versatileimagefield.fields.VersatileImageField(default='no-photo', upload_to=apps.event.models.image_path, verbose_name='Photo'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='name',
            field=models.CharField(max_length=100, default='', help_text='Name of the event.', verbose_name='Name'),
        ),
    ]
