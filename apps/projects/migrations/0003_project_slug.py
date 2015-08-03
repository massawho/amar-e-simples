# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20150720_2315'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default='no-slug', max_length=45, help_text='A unique name to identify this news.', verbose_name='Slug'),
            preserve_default=False,
        ),
    ]
