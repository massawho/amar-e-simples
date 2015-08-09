# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sponsor', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sponsor',
            name='sponsor',
            field=models.CharField(verbose_name='Sponsor', max_length=60),
        ),
    ]
