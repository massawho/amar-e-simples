# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0003_auto_20140926_2347'),
    ]

    operations = [
        migrations.CreateModel(
            name='TitlePlugin',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(parent_link=True, serialize=False, auto_created=True, to='cms.CMSPlugin', primary_key=True)),
                ('title', models.CharField(max_length=60, verbose_name='Title')),
                ('subtitle', models.CharField(max_length=220, null=True, verbose_name='Subtitle', blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
    ]
