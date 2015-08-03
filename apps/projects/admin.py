from django.contrib import admin
from django.db import models
from .models import Project
from redactor.widgets import AdminRedactorEditor
from adminsortable2.admin import SortableAdminMixin


class ProjectAdmin(SortableAdminMixin, admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}
    exclude = ['photo_thumbnail']
    formfield_overrides = {
        models.TextField: {'widget': AdminRedactorEditor},
    }


admin.site.register(Project, ProjectAdmin)