# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testimonials', '0004_testimonial_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testimonial',
            name='plugin',
        ),
    ]
