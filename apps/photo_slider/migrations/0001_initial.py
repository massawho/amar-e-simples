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
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=60, help_text='Briefly, give a description of this photo.', verbose_name='Description')),
                ('item_order', models.PositiveIntegerField(default=0)),
                ('image', imagekit.models.fields.ProcessedImageField(upload_to='photo_sliders/photos', help_text='Upload a photo. The photo must have at least 360x270px and will be cropped.')),
            ],
            options={
                'ordering': ['item_order'],
            },
        ),
        migrations.CreateModel(
            name='SliderPluginConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(to='cms.CMSPlugin', parent_link=True, auto_created=True, primary_key=True, serialize=False)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.AddField(
            model_name='photo',
            name='plugin',
            field=models.ForeignKey(to='photo_slider.SliderPluginConfig', related_name='associated_item'),
        ),
    ]
