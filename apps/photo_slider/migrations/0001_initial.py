# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('description', models.CharField(verbose_name='Description', max_length=60, help_text='Briefly, give a description of this photo.')),
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
                ('cmsplugin_ptr', models.OneToOneField(to='cms.CMSPlugin', serialize=False, primary_key=True, parent_link=True, auto_created=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.AddField(
            model_name='photo',
            name='plugin',
            field=models.ForeignKey(related_name='associated_item', to='photo_slider.SliderPluginConfig'),
        ),
    ]
