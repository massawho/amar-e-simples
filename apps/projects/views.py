from django.views.generic import DetailView, ListView
from .models import Project


class ProjectsListView(ListView):
    model = Project
    queryset = Project.objects.all()

    context_object_name = 'projects'


class ViewProject(DetailView):
    model = Project
    context_object_name = 'project'

    def get_context_data(self, **kwargs):
        context = super(ViewProject, self).get_context_data(**kwargs)
        context['other_projects'] = Project.objects.exclude(slug=self.kwargs['slug'])
        return context