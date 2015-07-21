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
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('name', models.CharField(verbose_name='Name', max_length=45, help_text='Name of the project')),
                ('description', models.CharField(verbose_name='Description', max_length=255, help_text='Give a brief description for the project')),
                ('photo', models.ImageField(upload_to='project')),
                ('text', models.TextField(verbose_name='Text', help_text='Describe the project.')),
            ],
        ),
    ]
