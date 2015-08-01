# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('news', '0002_auto_20150726_2026'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsInAudio',
            fields=[
                ('news_ptr', models.OneToOneField(serialize=False, parent_link=True, auto_created=True, primary_key=True, to='news.News')),
            ],
            options={
                'verbose_name_plural': 'News in audio',
            },
            bases=('news.news',),
        ),
        migrations.AddField(
            model_name='news',
            name='polymorphic_ctype',
            field=models.ForeignKey(null=True, related_name='polymorphic_news.news_set+', to='contenttypes.ContentType', editable=False),
        ),
    ]
