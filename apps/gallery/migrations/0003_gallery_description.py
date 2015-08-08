# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_auto_20150419_2043'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='description',
            field=models.CharField(verbose_name='Description', help_text='Briefly describe this gallery.', default='No description', max_length=60),
            preserve_default=False,
        ),
    ]
