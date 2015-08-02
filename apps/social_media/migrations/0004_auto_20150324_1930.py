# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0003_auto_20150324_1858'),
    ]

    operations = [
        migrations.AddField(
            model_name='socialmediaconfig',
            name='title',
            field=models.CharField(blank=True, max_length=60, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='socialmedialink',
            name='social_type',
            field=models.CharField(max_length=15, choices=[('facebook', 'Facebook'), ('twitter', 'Twitter'), ('linkedin', 'Linkedin'), ('pinterest', 'Pinterest'), ('google-plus', 'Google Plus')]),
            preserve_default=True,
        ),
    ]
