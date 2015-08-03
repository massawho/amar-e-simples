# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0004_auto_20150324_1930'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialmedialink',
            name='social_type',
            field=models.CharField(choices=[('facebook', 'Facebook'), ('twitter', 'Twitter'), ('linkedin', 'Linkedin'), ('pinterest', 'Pinterest'), ('pinterest', 'Pinterest'), ('google-plus', 'Google Plus'), ('soundcloud', 'Sound Cloud'), ('instagram', 'Instagram')], max_length=15),
        ),
    ]
