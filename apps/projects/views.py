from django.views.generic import DetailView, ListView
from .models import Project


class ProjectsListView(ListView):
    model = Project
    queryset = Project.objects.all()

    context_object_name = 'projects'


class ViewProject(DetailView):
    model = Project
    context_object_name = 'project'