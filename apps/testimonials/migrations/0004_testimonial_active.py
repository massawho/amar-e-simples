# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testimonials', '0003_auto_20151003_1253'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonial',
            name='active',
            field=models.BooleanField(help_text='Is this testimonial still active?', verbose_name='Active?', default=True),
        ),
    ]
