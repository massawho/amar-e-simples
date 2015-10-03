# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testimonials', '0002_auto_20151003_1248'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='testimonial',
            options={'ordering': ['item_order']},
        ),
        migrations.AddField(
            model_name='testimonial',
            name='item_order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
