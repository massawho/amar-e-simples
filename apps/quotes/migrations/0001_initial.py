# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.TextField(verbose_name='Phrase')),
                ('author', models.CharField(max_length=60, help_text="Author's name", verbose_name='Author')),
                ('active', models.BooleanField(help_text='Is this project still active?', verbose_name='Active?', default=True)),
            ],
        ),
    ]
