# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import apps.gallery.models
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('slug', models.SlugField()),
                ('title', models.CharField(max_length=60, verbose_name='Title', help_text='Title of the gallery.')),
                ('created_at', models.DateField(verbose_name='Created at', auto_now_add=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('description', models.CharField(max_length=60, verbose_name='Description')),
                ('item_order', models.PositiveIntegerField(default=0)),
                ('image', versatileimagefield.fields.VersatileImageField(verbose_name='Photo', upload_to=apps.gallery.models.image_path)),
                ('gallery', models.ForeignKey(to='gallery.Gallery')),
            ],
            options={
                'ordering': ['item_order'],
            },
            bases=(models.Model,),
        ),
    ]
