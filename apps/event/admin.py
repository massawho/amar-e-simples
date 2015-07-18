from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'due_date', 'time')

# Register your models here.
admin.site.register(Event, EventAdmin)