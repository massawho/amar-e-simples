# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialmedialink',
            name='plugin',
            field=models.ForeignKey(related_name='associated_item', to='social_media.SocialMediaConfig'),
            preserve_default=True,
        ),
    ]
