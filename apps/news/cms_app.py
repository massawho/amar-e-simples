from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _


class NewsApp(CMSApp):
    name = _("News App")  # give your app a name, this is required
    urls = ["apps.news.urls"]  # link your app to url configuration(s)

apphook_pool.register(NewsApp)  # register your app