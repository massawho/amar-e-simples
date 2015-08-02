/**
 * Created by massa on 26/03/15.
 */

$(document).ready(function () {

    var $btn = $('#msg-submit');
    var $form = $('#contact_form');
    var $parsley = $('#contact_form').parsley();

    $.listen('parsley:form:validate', function() {
        $('.alert').fadeOut();
        $btn.button('loading');
    });

    $.listen('parsley:form:error', function() {
        $btn.button('reset');
    });

    $.listen('parsley:form:success', function() {
        $form.ajaxSubmit({
            success : function(m) {
                $form.before('<div class="alert alert-success">'+m+'</div>');
            },
            error: function(xhr) {
                $form.before('<div class="alert alert-danger">'+xhr.responseText+'</div>');
            }
        }).resetForm();
        $parsley.reset();
        $btn.button('reset');
    });
});