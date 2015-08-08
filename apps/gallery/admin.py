from django.contrib import admin
from adminsortable2.admin import SortableInlineAdminMixin
from .models import Gallery, Photo
from .forms import PhotoForm


class PhotoInline(SortableInlineAdminMixin, admin.TabularInline):
    form = PhotoForm
    model = Photo
    min_num = 1
    extra = 1


class GalleryAdmin(admin.ModelAdmin):
    fields = ('title', 'slug', 'description')
    prepopulated_fields = {"slug": ("title",)}
    inlines = (PhotoInline,)


# Register your models here.
admin.site.register(Gallery, GalleryAdmin)