# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_auto_20150730_2157'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsInText',
            fields=[
                ('news_ptr', models.OneToOneField(parent_link=True, primary_key=True, auto_created=True, serialize=False, to='news.News')),
            ],
            options={
                'verbose_name_plural': 'News in video',
            },
            bases=('news.news',),
        ),
        migrations.CreateModel(
            name='NewsInVideo',
            fields=[
                ('news_ptr', models.OneToOneField(parent_link=True, primary_key=True, auto_created=True, serialize=False, to='news.News')),
            ],
            options={
                'verbose_name_plural': 'News in video',
            },
            bases=('news.news',),
        ),
        migrations.AlterField(
            model_name='news',
            name='type',
            field=models.CharField(verbose_name='Type', max_length=10),
        ),
    ]
