from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Sponsor


class SponsorAdmin(SortableAdminMixin, admin.ModelAdmin):
    pass

# Register your models here.
admin.site.register(Sponsor, SponsorAdmin)