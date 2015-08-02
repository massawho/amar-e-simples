from django import forms


class ContactForm(forms.Form):
    def _media(self):
        return forms.Media(
            css={
                'all': (
                    'css/parsley.css',
                )
            },
            js=(
                'js/vendor/jquery.form.min.js',
                'js/vendor/parsley.min.js',
                'js/vendor/parsley-pt-br.js',
                'js/form.js')
        )

    media = property(_media)

    name = forms.CharField(
        label='Seu nome',
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Seu nome',
            'data-parsley-required': 'true'
        })
    )

    email = forms.EmailField(
        label='Seu email',
        max_length=60,
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'Seu email',
            'data-parsley-required': 'true'
        })
    )
    message = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'placeholder': 'Sua mensagem',
            'data-parsley-required': 'true'
        })
    )