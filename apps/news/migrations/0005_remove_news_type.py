# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0004_auto_20150731_0115'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='type',
        ),
    ]
