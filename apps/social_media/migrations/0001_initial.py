# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0003_auto_20140926_2347'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialMediaConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, to='cms.CMSPlugin', serialize=False)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.CreateModel(
            name='SocialMediaLink',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('link', models.URLField(help_text='The link to your social media profile', verbose_name='Profile link')),
                ('type', models.CharField(max_length=15, choices=[('facebook', 'Facebook'), ('twitter', 'Twitter'), ('linkedin', 'Linkedin'), ('pinterest', 'Pinterest'), ('gplus', 'Google Plus')])),
                ('plugin', models.ForeignKey(to='social_media.SocialMediaConfig')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
