# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testimonials', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testimonial',
            name='photo',
        ),
        migrations.AddField(
            model_name='testimonial',
            name='role',
            field=models.CharField(max_length=45, verbose_name='Role', default='Nenhum'),
            preserve_default=False,
        ),
    ]
