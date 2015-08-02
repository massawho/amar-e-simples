# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0002_auto_20150324_1114'),
    ]

    operations = [
        migrations.RenameField(
            model_name='socialmedialink',
            old_name='type',
            new_name='social_type',
        ),
    ]
