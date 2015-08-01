from django.contrib import admin
from .models import News, NewsInAudio, NewsInText, NewsInVideo
from .forms import NewsForm
from polymorphic.admin import PolymorphicParentModelAdmin, PolymorphicChildModelAdmin
from embed_video.admin import AdminVideoMixin


class NewsAdmin(PolymorphicChildModelAdmin):
    base_model = News
    base_form = NewsForm
    prepopulated_fields = {"slug": ("title",)}
    base_fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'photo', 'publication_date', 'description'),
        }),
    )


class NewsInAudioAdmin(NewsAdmin):
    pass


class NewsInTextAdmin(NewsAdmin):
    pass


class NewsInVideoAdmin(NewsAdmin):
    pass


class NewsParentAdmin(PolymorphicParentModelAdmin):
    base_model = News
    prepopulated_fields = {"slug": ("title",)}
    child_models = (
        (NewsInAudio, NewsInAudioAdmin),
        (NewsInText, NewsInTextAdmin),
        (NewsInVideo, NewsInVideoAdmin),
    )


admin.site.register(News, NewsParentAdmin)