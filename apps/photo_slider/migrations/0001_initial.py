# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0013_auto_20150717_2233'),
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('description', models.CharField(max_length=60, help_text='Briefly, give a description of this photo.', verbose_name='Description')),
                ('item_order', models.PositiveIntegerField(default=0)),
                ('image', imagekit.models.fields.ProcessedImageField(help_text='Upload a photo. The photo must have at least 360x270px and will be cropped.', upload_to='photo_sliders/photos')),
            ],
            options={
                'ordering': ['item_order'],
            },
        ),
        migrations.CreateModel(
            name='SliderPluginConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(primary_key=True, parent_link=True, serialize=False, auto_created=True, to='cms.CMSPlugin')),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.AddField(
            model_name='photo',
            name='plugin',
            field=models.ForeignKey(to='photo_slider.SliderPluginConfig'),
        ),
    ]
