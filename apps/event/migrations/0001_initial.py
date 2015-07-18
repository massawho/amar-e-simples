# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, verbose_name='ID', primary_key=True)),
                ('name', models.CharField(help_text='Name of the event.', max_length=100, verbose_name='Name')),
                ('address', models.CharField(help_text='The address where the event will occur', verbose_name='Address', blank=True, max_length=180, null=True)),
                ('description', models.TextField(help_text='Briefly describe the event.', blank=True, null=True, verbose_name='Description')),
                ('due_date', models.DateField(help_text='When does it happen?', verbose_name='Date')),
                ('time', models.TextField(help_text='What time does it happen?', blank=True, null=True, verbose_name='Time')),
            ],
            options={
                'ordering': ('due_date',),
            },
        ),
    ]
