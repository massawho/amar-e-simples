# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45, help_text='Name of the project', verbose_name='Name')),
                ('slug', models.SlugField(max_length=45, help_text='A unique name to identify this news.', verbose_name='Slug')),
                ('description', models.CharField(max_length=255, help_text='Give a brief description for the project', verbose_name='Description')),
                ('photo', models.ImageField(upload_to='project')),
                ('text', models.TextField(help_text='Describe the project.', verbose_name='Text')),
                ('order', models.PositiveIntegerField(default=0)),
                ('active', models.BooleanField(default=True, help_text='Is this project still active?', verbose_name='Active?')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]
