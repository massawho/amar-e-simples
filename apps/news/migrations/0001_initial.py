# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import embed_video.fields
import cms.models.fields
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0013_auto_20150717_2233'),
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40, help_text='Title of this news.', verbose_name='Title')),
                ('publication_date', models.DateField(default=datetime.datetime.now, help_text='Date when this news was published.', verbose_name='Publication date')),
                ('slug', models.SlugField(max_length=40, help_text='A unique name to identify this news.', verbose_name='Slug')),
                ('description', models.CharField(max_length=255, help_text='Briefly describe this news.', verbose_name='Description')),
                ('photo', models.ImageField(upload_to='news')),
            ],
            options={
                'verbose_name_plural': 'News',
            },
        ),
        migrations.CreateModel(
            name='NewsInAudio',
            fields=[
                ('news_ptr', models.OneToOneField(to='news.News', parent_link=True, auto_created=True, primary_key=True, serialize=False)),
                ('sound_cloud_link', embed_video.fields.EmbedVideoField(null=True, help_text='Copy here the link of the audio from SoundCloud to embed the audio.', verbose_name='SoundCloud Link')),
            ],
            options={
                'verbose_name_plural': 'News in audio',
            },
            bases=('news.news',),
        ),
        migrations.CreateModel(
            name='NewsInText',
            fields=[
                ('news_ptr', models.OneToOneField(to='news.News', parent_link=True, auto_created=True, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name_plural': 'News in video',
            },
            bases=('news.news',),
        ),
        migrations.CreateModel(
            name='NewsInVideo',
            fields=[
                ('news_ptr', models.OneToOneField(to='news.News', parent_link=True, auto_created=True, primary_key=True, serialize=False)),
                ('video_link', embed_video.fields.EmbedVideoField(null=True, help_text='Copy here the link of your video from YouTube or Vimeo.', verbose_name='Link')),
            ],
            options={
                'verbose_name_plural': 'News in video',
            },
            bases=('news.news',),
        ),
        migrations.AddField(
            model_name='news',
            name='content',
            field=cms.models.fields.PlaceholderField(null=True, slotname='news_app_post_content', to='cms.Placeholder', editable=False),
        ),
        migrations.AddField(
            model_name='news',
            name='polymorphic_ctype',
            field=models.ForeignKey(null=True, related_name='polymorphic_news.news_set+', to='contenttypes.ContentType', editable=False),
        ),
    ]
