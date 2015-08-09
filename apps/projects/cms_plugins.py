from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from django.utils.translation import ugettext_lazy as _
from .models import Project


class ProjectsPlugin(CMSPluginBase, ):
    module = _("Projects")
    name = _("List all projects")
    render_template = "projects/_list_all.html"

    def render(self, context, instance, placeholder):
        context['projects'] = Project.objects.all()
        return context


class ProjectsWidgetPlugin(CMSPluginBase, ):
    module = _("Widgets")
    name = _("List projects")
    render_template = "projects/_widget_list_all.html"

    def render(self, context, instance, placeholder):
        context['projects'] = Project.objects.all()
        context['title'] = "Projetos"
        return context

# Plugins registration
plugin_pool.register_plugin(ProjectsPlugin)
plugin_pool.register_plugin(ProjectsWidgetPlugin)