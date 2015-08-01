# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='news',
            options={'verbose_name_plural': 'News'},
        ),
        migrations.AddField(
            model_name='news',
            name='publication_date',
            field=models.DateField(help_text='Date when this news was published.', default=datetime.datetime.now, verbose_name='Publication date'),
        ),
        migrations.AlterField(
            model_name='news',
            name='type',
            field=models.CharField(choices=[['audio', 'Audio'], ['text', 'Text'], ['video', 'Video']], max_length=10, verbose_name='Type'),
        ),
    ]
