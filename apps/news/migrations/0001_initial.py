# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('title', models.CharField(verbose_name='Title', max_length=40, help_text='Title of this news.')),
                ('slug', models.SlugField(verbose_name='Slug', max_length=40, help_text='A unique name to identify this news.')),
                ('description', models.CharField(verbose_name='Description', max_length=255, help_text='Briefly describe this news.')),
                ('type', models.CharField(choices=[['video', 'Video']], max_length=10, verbose_name='Type')),
                ('photo', models.ImageField(upload_to='news')),
            ],
        ),
    ]
