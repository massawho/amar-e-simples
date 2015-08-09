# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sponsor',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('sponsor', models.TextField(verbose_name='Sponsor')),
                ('sponsor_website', models.URLField(verbose_name="Sponsor's website", max_length=60, help_text="Sponsor's website")),
                ('sponsor_logo', imagekit.models.fields.ProcessedImageField(upload_to='photo_sliders/photos', help_text='Upload a photo. The photo must have at least 360x270px and will be cropped.')),
                ('active', models.BooleanField(verbose_name='Active?', default=True, help_text='Is this sponsor still active?')),
                ('item_order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'ordering': ['item_order'],
            },
        ),
    ]
