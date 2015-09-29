# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0013_auto_20150717_2233'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacebookPagePluginConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(to='cms.CMSPlugin', primary_key=True, auto_created=True, parent_link=True, serialize=False)),
                ('facebook_page', models.CharField(help_text='Insert only the facebook page slug.', verbose_name='Facebook page', default='', max_length=20)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.CreateModel(
            name='SocialMediaConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(to='cms.CMSPlugin', primary_key=True, auto_created=True, parent_link=True, serialize=False)),
                ('title', models.CharField(blank=True, max_length=60, null=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.CreateModel(
            name='SocialMediaLink',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('item_order', models.PositiveIntegerField(default=0)),
                ('link', models.URLField(help_text='The link to your social media profile', verbose_name='Profile link')),
                ('social_type', models.CharField(max_length=15, choices=[('facebook', 'Facebook'), ('twitter', 'Twitter'), ('linkedin', 'Linkedin'), ('pinterest', 'Pinterest'), ('pinterest', 'Pinterest'), ('google-plus', 'Google Plus'), ('soundcloud', 'Sound Cloud'), ('instagram', 'Instagram')])),
                ('plugin', models.ForeignKey(to='social_media.SocialMediaConfig', related_name='associated_item')),
            ],
            options={
                'ordering': ('item_order',),
            },
        ),
    ]
