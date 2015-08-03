from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _


class ProjectsApp(CMSApp):
    name = _("Projects App")  # give your app a name, this is required
    urls = ["apps.projects.urls"]  # link your app to url configuration(s)

apphook_pool.register(ProjectsApp)  # register your app