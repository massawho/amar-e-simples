# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0003_gallery_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='latestgallerypluginconfiguration',
            name='rows',
        ),
        migrations.AlterField(
            model_name='latestgallerypluginconfiguration',
            name='num_items',
            field=models.PositiveIntegerField(help_text='Number of galleries that will be shown.', verbose_name='Number of galleries'),
        ),
    ]
