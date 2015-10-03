from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Testimonial


class TestimonialAdmin(SortableAdminMixin, admin.ModelAdmin):
    pass

# Register your models here.
admin.site.register(Testimonial, TestimonialAdmin)