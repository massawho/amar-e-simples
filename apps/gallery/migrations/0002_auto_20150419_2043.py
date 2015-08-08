# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0003_auto_20140926_2347'),
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LatestGalleryPluginConfiguration',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(auto_created=True, primary_key=True, parent_link=True, serialize=False, to='cms.CMSPlugin')),
                ('rows', models.PositiveSmallIntegerField(verbose_name='Number of rows', help_text='Number of rows that will be shown')),
                ('num_items', models.PositiveIntegerField(verbose_name='Galleries per row', help_text='Number of galleries that will be shown in each row')),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.AlterModelOptions(
            name='gallery',
            options={'verbose_name_plural': 'Galleries'},
        ),
    ]
