from django.core.mail import send_mail
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseServerError
from .forms import ContactForm

def send_email(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            data = form.cleaned_data
            try:
                send_mail('Contato pelo site', data['message'], "%s <%s>" % (data['name'], data['email']),
                          ['amaresimples@gmail.com'],
                          fail_silently=False)
                return HttpResponse("Mensagem enviada com sucesso.", content_type="text/plain")
            except Exception:
                return HttpResponseServerError("Não foi possível enviar o e-mail.")

        else:
            return HttpResponseServerError("O formulário contém erros que devem ser corrigidos.")
    else:
        return HttpResponseNotAllowed(['POST'])