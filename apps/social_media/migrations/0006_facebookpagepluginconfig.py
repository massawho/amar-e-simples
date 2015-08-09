# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0005_auto_20150802_2043'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacebookPagePluginConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(to='cms.CMSPlugin', auto_created=True, parent_link=True, primary_key=True, serialize=False)),
                ('page', models.CharField(max_length=20, help_text='Insert only the facebook page slug.', null=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
    ]
