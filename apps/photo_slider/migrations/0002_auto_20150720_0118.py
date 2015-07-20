# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('photo_slider', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='plugin',
            field=models.ForeignKey(related_name='associated_item', to='photo_slider.SliderPluginConfig'),
        ),
    ]
