# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0003_auto_20140926_2347'),
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('photo', models.ImageField(verbose_name='Photo', upload_to='upload/testimonial/')),
                ('name', models.CharField(max_length=45, verbose_name='Name')),
                ('testimonial', models.TextField(verbose_name='Testimonial')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TestimonialConfig',
            fields=[
                ('cmsplugin_ptr', models.OneToOneField(serialize=False, auto_created=True, to='cms.CMSPlugin', primary_key=True, parent_link=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('cms.cmsplugin',),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='plugin',
            field=models.ForeignKey(to='testimonials.TestimonialConfig', related_name='associated_item'),
            preserve_default=True,
        ),
    ]
