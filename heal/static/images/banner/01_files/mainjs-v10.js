//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;
var toppp=0;
function loadPopup()
{
	if(popupStatus==0)
	{
		$("#msgbox_window").css('width','962px');
		$("#backgroundPopup").css({ "height": "100%" });
		$("#backgroundPopup").show('fade');
		$("#msgbox_window").show('fade');
		centerPopup();
		popupStatus = 1;
	}
}

function disablePopup()
{
	if(popupStatus==1){
		$("#backgroundPopup").hide('fade');
		$("#msgbox_window").hide('fade');
		popupStatus = 0;
		$('#backgroundPopup,#msgbox_window').remove();
	}
}

function centerPopup()
{
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var popupHeight = $("#msgbox_window").height();
	var popupWidth = $("#msgbox_window").width();
	$("#msgbox_window").css({
		"position": "absolute",
		"top": toppp,
		"left": (windowWidth-popupWidth)/2+document.body.scrollLeft
	});
	//only need force for IE6
	$("#backgroundPopup").css({ "height": windowHeight+document.body.scrollTop, "filter": "alpha(opacity=40)" });
}

function scrollTOP() {
     $('html, body').animate({
         scrollTop: 100
     }, 1000);            
}

// cookies (cookies0.js)
function setCookie2(name, value, expires, path, domain, secure)
	{
	if (!expires)
		expires=365;
	var today = new Date();
	var expires2 = new Date(today.getTime()+1000*60*60*24*expires);
	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires2.toGMTString() : "") +
		((path) ? "; path=" + path : "; path=/") +
		((domain) ? "; domain=" + domain : "; domain=.dreamstime.com") +
		((secure) ? "; secure" : "");
	}

function setCookie(name, value, expires, path, domain, secure)
	{
	setCookie2(name, value, expires, path, domain, secure);
	}

function getCookie(name)
	{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
		{
        begin = dc.indexOf(prefix);
        if (begin != 0)
			return null;
		}
    else
        begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
	}

function deleteCookie(name, path, domain)
	{
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}

// translations (func_js_transl21.js)
switch(dtl_language_js)
	{
	case 'de':
		var dlt_searchjs_000 = "Suchwort oder Datei-ID eingeben";
		var dtl_SearchEmpty_000 = "Suchwort oder Datei-ID eingeben";
		var dtl_SearchEmpty_001 = "Datei-ID eingeben";
		var dtl_SearchEmpty_002 = "Bitte ein Suchwort eingeben.";
		var dtl_SearchEmptyFaq_000 = "Ihr Suchwort hier";
		var dtl_SearchSubmit_000 = "Ihr Suchwort hier";
		var dtl_SearchSubmit_001 = "Suchwort oder Datei-ID eingeben";
		var dtl_SearchSubmit_002 = "Bitte ein Suchwort eingeben.";
		var dtl_SearchSubmit_003 = "mindestens 2 Zeichen erforderlich";
		var dtl_SearchSubmit_004 = "Bedaure, aber die folgenden Zeichen";
		var dtl_SearchSubmit_005 = "sind nicht erlaubt";
		var dtl_SearchFaq_000 = "Bitte ein Suchwort eingeben.";
		var dtl_SearchFaq_001 = "mindestens 3 Zeichen erforderlich";
		var dtl_SearchFaq_002 = "Bedaure, aber die folgenden Zeichen";
		var dtl_SearchFaq_003 = "sind nicht erlaubt";
		var dtl_SearchFaq_004 = "Ihr Suchwort hier";
		var dtl_SearchForumSubmit_000 = "Bitte ein Suchwort eingeben.";
		var dtl_SearchForumSubmit_001 = "mindestens 3 Zeichen erforderlich";
		var dtl_SearchForumSubmit_002 = "Bedaure, aber die folgenden Zeichen";
		var dtl_SearchForumSubmit_003 = "sind nicht erlaubt";
		var dtl_SearchForumSubmit_004 = "alle Tafeln durchsuchen";
		var dtl_SearchForumSubmit_005 = "diese Tafel durchsuchen";
		var dtl_SearchForumSubmit_006 = "Threads suchen";
		var dtl_OMSSearch_001 = "mindestens 3 Zeichen erforderlich";
		var dtl_OMSSearch_002 = "Bedaure, aber die folgenden Zeichen";
		var dtl_OMSSearch_003 = "sind nicht erlaubt";
		var dtl_FilterSubmit_000 = "Bitte ein Suchwort eingeben.";
		var dtl_FilterSubmit_001 = "mindestens 3 Zeichen erforderlich";
		var dtl_FilterSubmit_002 = "Bedaure, aber die folgenden Zeichen";
		var dtl_FilterSubmit_003 = "sind nicht erlaubt";
		var dtl_FilterSubmit_004 = "Ihr Suchwort hier";
		var dtl_SearchEmpty_003 = "alle Tafeln durchsuchen";
		var dtl_SearchEmpty_004 = "diese Tafel durchsuchen";
		var dtl_SearchEmpty_005 = "Threads suchen";
		var dtl_validare_001 = "Sie müssen den Bedingungen zustimmen!";
		var dtl_validare_002 = "Falsche e-mail Adresse!!";
		var dtl_validare_003 = "Bitte 'gewünschten LOGIN' einsetzen!";
		var dtl_validare_004 = "Bitte Leerzeichen von 'gewünschtem LOGIN' entfernen!";
		var dtl_validare_005 = "'Gewünschter LOGIN' muss auch Zeichen enthalten!";
		var dtl_validare_006 = "'Gewünschter LOGIN' darf nur alphanumerische Zeichen enthalten!";
		var dtl_validare_007 = "Bitte ein korrektes Kennwort eingeben!";
		var dtl_validare_008 = "Bitte Ihren 'Vornamen'! eingeben";
		var dtl_validare_009 = "Bitte Ihren 'Nachnamen'! eingeben";
		var dtl_validare_010 = "Bitte 'Stadt'! eingeben";
		var dtl_validare_011 = "Bitte 'Adresse'! eingeben";
		var dtl_validare_012 = "Bitte Ihr Land auswählen!";
		var dtl_validare_013 = "Bitte eine gültige 'Postleitzahl' eingeben";
		var dtl_validare_014 = "Bitte eine korrekte Telefonnummer eingeben!";
		var dtl_validare_015 = "Bitte schreiben Sie 'Wie haben Sie uns gefunden?'!";
		var dtl_validare_contact_001 = "Bitte Ihren 'Vornamen'! eingeben";
		var dtl_validare_contact_002 = "Bitte Ihren 'Nachnamen'! eingeben";
		var dtl_validare_contact_003 = "Falsche e-mail Adresse!";
		var dtl_validare_contact_004 = "Bitte Ihr Land auswählen!";
		var dtl_validare_contact_005 = "Bitte eine korrekte Telefonnummer eingeben!";
		var dtl_validare_contact_006 = "Bitte 'Browser'! eingeben";
		var dtl_validare_contact_007 = "Bitte 'System'! eingeben";
		var dtl_validare_contact_008 = "Bitte Ihren Kommentar schreiben!";
		var dtl_validare_contact_009 = "Bitte Art des Probleme auswählen!";
		var dtl_CK_log_001 = "Bitte Ihren LOGIN eingeben!";
		var dtl_CK_log_002 = "Bitte Kennwort eingeben!";
		var dtl_CK_image_001 = "Bitte eine Bilddatei auswählen!";
		var dtl_CK_image_ag_001 = "Lesen Sie bitte die Bedingungen und kennzeichnen Sie der Checkbox, wenn Sie zustimmen";
		var dtl_CK_image_ag_002 = "Bitte eine Bilddatei auswählen!";
		var dtl_CK_upload_001 = "Minimalwert ist 250, Maximalwert ist 25000!";
		var dtl_CK_upload_002 = "Schreiben Sie bitte einen Bildnamen!";
		var dtl_CK_upload_003 = "Der Name ist zu lang. Höchstzahl der Zeichen ist 30";
		var dtl_CK_upload_004 = "Schreiben Sie bitte eine Bildbeschreibung!";
		var dtl_CK_upload_005 = "Die Beschreibung ist zu lang. Höchstzahl der Zeichen ist 1500";
		var dtl_CK_upload_006 = "Ein Minimum von 5 Wörtern ist das mindeste für eine annehmbare Beschreibung, um Ihr Konzept den Betrachtern zu vermitteln.";
		var dtl_CK_upload_007 = "Titel und Beschreibung haben identische Daten. Bitte stellen Sie eine genauere Beschreibung des Bildes zur Verfügung.";
		var dtl_CK_upload_008 = "Bitte eine oder mehrere Kategorien für das Bild auswählen!";
		var dtl_CK_upload_009 = "Bitte einige Suchwörter für Ihr Bild schreiben!";
		var dtl_CK_upload_010 = "Dieses Bild hat";
		var dtl_CK_upload_011 = "Wörter";
		var dtl_CK_upload_012 = "Die erlaubte Höchstzahl ist 80";
		var dtl_CK_upload_013 = "Lesen Sie bitte die Bedingungen und klicken Sie die Checkbox, wenn Sie zustimmen!";
		var dtl_CK_upload_014 = "Minimalwert ist 250, Maximalwert 25000!";
		var dtl_CK_upload_015 = "Numerischer Wert benötigt!";
		var dtl_CK_upload_016 = "Um die 'Verkauf der Rechte'-Funktion für dieses Bild zu aktivieren, müssen Sie einen Preis eingeben oder den empfohlenen Preis verwenden";
		var dtl_CK_upload_keymaster_017 = "Minimalwert ist 250, Maximalwert ist 25000!";
		var dtl_CK_upload_keymaster_018 = "Lesen Sie bitte die Bedingungen und klicken Sie die Checkbox, wenn Sie zustimmen";
		var dtl_CK_upload_keymaster_019 = "Numerischer Wert benötigt!";
		var dtl_CK_upload_keymaster_020 = "Um die 'Verkauf der Rechte'-Funktion für dieses Bild zu aktivieren, müssen Sie einen Preis eingeben oder den empfohlenen Preis verwenden";
		var dtl_CK_freeupload_001 = "Bitte einen Bildnamen schreiben!";
		var dtl_CK_freeupload_002 = "Bitte eine Bildbeschreibung schreiben!";
		var dtl_CK_freeupload_003 = "Ein Minimum von 5 Wörtern ist das mindeste für eine annehmbare Beschreibung, um den Betrachtern Ihr Konzept zu vermitteln";
		var dtl_CK_freeupload_004 = "Titel und Beschreibung haben identische Daten. Bitte stellen Sie eine genauere Beschreibung des Bildes zur Verfügung.";
		var dtl_CK_freeupload_005 = "Bitte einige Suchwörter für das Bild schreiben!";
		var dtl_CK_freeupload_006 = "Dieses Bild hat";
		var dtl_CK_freeupload_007 = "Wörter";
		var dtl_CK_freeupload_008 = "Die erlaubte Höchstzahl ist 80";
		var dtl_validare_board_001 = "Bitte das Thema schreiben!";
		var dtl_validare_board_002 = "Bitte die Nachricht schreiben!";
		var dtl_ConvertCF_001 = "Falscher Credit-Wert!";
		var dtl_ConvertCF_002 = "Bitte einen Zahlwert eingeben!";
		var dtl_PayCK_001 = "Falscher Zahlungswert!";
		var dtl_PayCK_002 = "Ein Zahlungsantrag kann $10.000 nicht übersteigen!";
		var dtl_PayCK_003 = "Sie können keine Zahlung für diesen Betrag anfordern. Ihre Kontostand zeigt nur ein Guthaben von";
		var dtl_ImageDownCK_001 = "Lesen Sie bitte die Bedingungen und klicken Sie die Checkbox, wenn Sie zustimmen";
		var dtl_TermsCK_001 = "Lesen Sie bitte die Bedingungen und klicken Sie die Checkbox, wenn Sie zustimmen";
		var dtl_PassCK_001 = "Falsche e-mail Adresse!";
		var dtl_ConfirmDelete_001 = "Sind Sie sicher, daß Sie diese Datei löschen möchten?";
		var dtl_DisableImage_001 = "Wählen Sie bitte JA aus, um das Bild abzuschalten";
		var dtl_DisableImage_002 = "Schreiben Sie bitte einen Grund, weshalb Sie das Bild abschalten";
		var dtl_BNewsAdd_001 = "Schreiben Sie bitte Ihren Text!";
		var dtl_BNewsAdd_002 = "Schreiben Sie bitte maximal";
		var dtl_BNewsAdd_003 = "Zeichen in dieses Feld!";
		var dtl_CollectionsCheck_001 = "Bitte Kollektion auswählen!";
		var dtl_CollectionsAdd_001 = "Geben Sie bitte die ID oder die URL des ersten Bildes ein!";
		var dtl_CollectionsAdd_002 = "Bitte Titel der Kollektion schreiben!";
		var dtl_CollectionsAdd_003 = "Bitte Beschreibung eingeben!";
		var dtl_CollectionsAdd_004 = "Bitte Suchwörter schreiben!";
		var dtl_CollectionsSearch_000 = "Ihr Suchwort hier";
		var dtl_CollectionsSearch_001 = "Bitte Suchwörter schreiben!";
		var dtl_PaymentRequest_001 = "Bitte Ihre paypal ID vervollständigen!";
		var dtl_PaymentRequest_002 = "Die zur Verfügung gestellte paypal ID ist falsch!";
		var dtl_PaymentRequest_003 = "Bitte Ihre bookersid ID vervollständigen!";
		var dtl_PaymentRequest_004 = "Die zur Verfügung gestellte paypal ID ist falsch!";
		var dtl_OMS_review_001 = "Bitte Nachricht an die Seiten-Administratoren schreiben!";
		var dtl_OMS_review_002 = "Bitte schreiben oder wählen Sie einen Grund, das Bild abzulehnen!";
		var dtl_LightboxAdd_001 = "Bitte keine Sonderzeichen für Lightbox Namen verwenden!";
		var dtl_LightboxAdd_002 = "Bitte Titel der Lightbox schreiben!";
		var dtl_check_secure_form_001 = "Bitte Kartennummer eingeben!";
		var dtl_check_secure_form_002 = "Bitte Verfallsdatum eingeben!";
		var dtl_check_secure_form_003 = "Bitte Kartencode eingeben!";
		var dtl_check_secure_form_004 = "Bitte Vornamen eingeben!";
		var dtl_check_secure_form_005 = "Bitte Nachname eingeben!";
		var dtl_check_secure_form_006 = "Bitte Adresse eingeben!";
		var dtl_check_secure_form_007 = "Bitte Stadt eingeben!";
		var dtl_check_secure_form_008 = "Bitte Postleitzahl eingeben!";
		var dtl_check_secure_form_009 = "Bitte Land eingeben!";
		var dtl_check_secure_form_010 = "Bitte Telefon eingeben!";
		var dtl_check_secure_form_011 = "Bitte e-mail Adresse eingeben!";
		var dtl_requestAJAX_000 = "Gestartet...";
		var dtl_requestAJAX_001 = "Laden...";
		var dtl_requestAJAX_002 = "Fehler: wiederholter Statuscode...";
		var dtl_requestAJAXdoi_000 = "Gestartet...";
		var dtl_requestAJAXdoi_001 = "Entfernen...";
		var dtl_requestAJAXdoi_002 = "Laden...";
		var dtl_AddImage_000 = "Die volle URL oder die Dreamstime ID Ihres Bildes eintragen:";
		var dtl_AddImageLeft_000 = "Die Dreamstime Datei ID des Bildes eingeben:";
		var dtl_AddImageRight_000 = "Die Dreamstime Datei ID des Bildes eingeben:";
		var dtl_AddURLB_000 = "Die volle URL Ihres Links eingeben:";
		var dtl_AddURLB_001 = "Den TEXT für Ihren Link eingeben:";
		var dtl_AddURL_000 = "Die volle URL Ihres Links eingeben:";
		var dtl_AddURL_001 = "Den TEXT für Ihren Link (wahlweise) eingeben:";
		var dtl_NewsCharacters_000 = "Schreiben Sie bitte maximal";
		var dtl_NewsCharacters_001 = "Zeichen in dieses Feld!";
		break;
	case 'es':
		var dlt_searchjs_000 = "introduzca palabra clave o identificador de archivo";
		var dtl_SearchEmpty_000 = "introduzca palabra clave o identificador de archivo";
		var dtl_SearchEmpty_001 = "introduzca la identificación del archivo";
		var dtl_SearchEmpty_002 = "Introduzca por favor una palabra clave.";
		var dtl_SearchEmptyFaq_000 = "su palabra clave aquí";
		var dtl_SearchSubmit_000 = "su palabra clave aquí";
		var dtl_SearchSubmit_001 = "introduzca palabra clave o identificador de archivo";
		var dtl_SearchSubmit_002 = "Introduzca por favor una palabra clave.";
		var dtl_SearchSubmit_003 = "Mínimo 2 caracteres requeridos";
		var dtl_SearchSubmit_004 = "Lo sentimos, pero los caracteres siguientes";
		var dtl_SearchSubmit_005 = "no están permitidos!";
		var dtl_SearchFaq_000 = "Introduzca por favor una palabra clave.";
		var dtl_SearchFaq_001 = "Mínimo 3 caracteres requeridos";
		var dtl_SearchFaq_002 = "Lo sentimos, pero los caracteres siguientes";
		var dtl_SearchFaq_003 = "no están permitidos!";
		var dtl_SearchFaq_004 = "su palabra clave aquí";
		var dtl_SearchForumSubmit_000 = "Introduzca por favor una palabra clave.";
		var dtl_SearchForumSubmit_001 = "Mínimo 3 caracteres requeridos";
		var dtl_SearchForumSubmit_002 = "Lo sentimos, pero los caracteres siguientes";
		var dtl_SearchForumSubmit_003 = "no están permitidos!";
		var dtl_SearchForumSubmit_004 = "busque en todos los foros";
		var dtl_SearchForumSubmit_005 = "busque en este foro";
		var dtl_SearchForumSubmit_006 = "busque en hilos";
		var dtl_OMSSearch_001 = "Mínimo 3 caracteres requeridos";
		var dtl_OMSSearch_002 = "Lo sentimos, pero los caracteres siguientes";
		var dtl_OMSSearch_003 = "no están permitidos!";
		var dtl_FilterSubmit_000 = "Introduzca por favor una palabra clave";
		var dtl_FilterSubmit_001 = "Mínimo 3 caracteres requeridos";
		var dtl_FilterSubmit_002 = "Lo sentimos, pero los caracteres siguientes";
		var dtl_FilterSubmit_003 = "no están permitidos!";
		var dtl_FilterSubmit_004 = "su palabra clave aquí";
		var dtl_SearchEmpty_003 = "busque en todos los foros";
		var dtl_SearchEmpty_004 = "busque en este foro";
		var dtl_SearchEmpty_005 = "busque en hilos";
		var dtl_validare_001 = "¡Usted debe aceptar los términos y condiciones!";
		var dtl_validare_002 = "¡Dirección de correo electrónico incorrecta!";
		var dtl_validare_003 = "¡Introduzca por favor el nombre de usuario deseado!";
		var dtl_validare_004 = "¡Quite por favor los espacios del nombre de usuario deseado!";
		var dtl_validare_005 = "¡El nombre de usuario deseado debe contener caracteres también!";
		var dtl_validare_006 = "¡El nombre de usuario deseado debe contener solamente caracteres alfanuméricos!";
		var dtl_validare_007 = "¡Introduzca por favor una contraseña correcta!";
		var dtl_validare_008 = "¡Introduzca por favor su Nombre!";
		var dtl_validare_009 = "¡Introduzca por favor su Apellido!";
		var dtl_validare_010 = "¡Introduzca por favor la Ciudad!";
		var dtl_validare_011 = "¡Introduzca por favor la Dirección!";
		var dtl_validare_012 = "¡Seleccione por favor su país!";
		var dtl_validare_013 = "¡Introduzca por favor un código postal válido!";
		var dtl_validare_014 = "¡Introduzca por favor un número de teléfono correcto!";
		var dtl_validare_015 = "¡Describa por favor cómo nos encontró!";
		var dtl_validare_contact_001 = "¡Introduzca por favor su Nombre!";
		var dtl_validare_contact_002 = "¡Introduzca por favor su Apellido!";
		var dtl_validare_contact_003 = "¡Dirección de correo electrónico incorrecta!";
		var dtl_validare_contact_004 = "¡Seleccione por favor su país!";
		var dtl_validare_contact_005 = "¡Introduzca por favor un número de teléfono correcto!";
		var dtl_validare_contact_006 = "¡Introduzca por favor el Navegador!";
		var dtl_validare_contact_007 = "¡Introduzca por favor el Sistema!";
		var dtl_validare_contact_008 = "¡Escriba por favor su comentario!";
		var dtl_validare_contact_009 = "¡Seleccione por favor el tipo de problema!";
		var dtl_CK_log_001 = "Introduzca por favor su nombre de usuario!";
		var dtl_CK_log_002 = "Introduzca por favor la contraseña!";
		var dtl_CK_image_001 = "Elija por favor un fichero de imagen!";
		var dtl_CK_image_ag_001 = "Lea por favor los términos y condiciones y haga clic en la casilla si usted acepta";
		var dtl_CK_image_ag_002 = "Elija por favor un fichero de imagen!";
		var dtl_CK_upload_001 = "El valor mínimo es 250, valor máximo es 25000!";
		var dtl_CK_upload_002 = "Escriba por favor un título para la imagen!";
		var dtl_CK_upload_003 = "El título es demasiado largo. El número máximo de caracteres es 30";
		var dtl_CK_upload_004 = "¡Escriba por favor una descripción de la imagen!";
		var dtl_CK_upload_005 = "La descripción es demasiado larga. El número máximo de caracteres es 1500";
		var dtl_CK_upload_006 = "Un mínimo de 5 palabras es lo mínimo en una descripción decente para transmitir su concepto a los visitantes";
		var dtl_CK_upload_007 = "El título y la descripción tienen datos idénticos. Proporcione por favor una descripción más exacta de la imagen";
		var dtl_CK_upload_008 = "¡Seleccione por favor una o más categorías para la imagen!";
		var dtl_CK_upload_009 = "¡Escriba por favor unas cuantas palabras claves para la imagen!";
		var dtl_CK_upload_010 = "Esta imagen tiene";
		var dtl_CK_upload_011 = "palabras";
		var dtl_CK_upload_012 = "El número máximo permitido es de 80";
		var dtl_CK_upload_013 = "¡Lea por favor los términos y condiciones y haga clic en la casilla si usted acepta!";
		var dtl_CK_upload_014 = "El valor mínimo es 250, valor máximo 25000!";
		var dtl_CK_upload_015 = "Valor numérico requerido!";
		var dtl_CK_upload_016 = "Para activar la licencia venta de los derechos para esta imagen, usted tiene que fijar un precio o utilizar precio recomendado!";
		var dtl_CK_upload_keymaster_017 = "El valor mínimo es 250, valor máximo es 25000!";
		var dtl_CK_upload_keymaster_018 = "¡Lea por favor los términos y condiciones y haga clic en la casilla si usted acepta!";
		var dtl_CK_upload_keymaster_019 = "¡Valor numérico requerido!";
		var dtl_CK_upload_keymaster_020 = "¡Para activar la licencia venta de los derechos para esta imagen, usted tiene que fijar un precio o utilizar precio recomendado!";
		var dtl_CK_freeupload_001 = "Escriba por favor un título de imagen!";
		var dtl_CK_freeupload_002 = "¡Escriba por favor una descripción de la imagen!";
		var dtl_CK_freeupload_003 = "Un mínimo de 5 palabras es lo mínimo en una descripción decente para transmitir su concepto a los visitantes";
		var dtl_CK_freeupload_004 = "El título y la descripción tienen datos idénticos. Proporcione por favor una descripción más exacta de la imagen";
		var dtl_CK_freeupload_005 = "¡Escriba por favor unas cuantas palabras claves para la imagen!";
		var dtl_CK_freeupload_006 = "Esta imagen tiene";
		var dtl_CK_freeupload_007 = "palabras";
		var dtl_CK_freeupload_008 = "El número máximo permitido es de 80";
		var dtl_validare_board_001 = "Escriba por favor el tema!";
		var dtl_validare_board_002 = "Escriba por favor el mensaje!";
		var dtl_ConvertCF_001 = "Valor incorrecto de los créditos!";
		var dtl_ConvertCF_002 = "Introduzca por favor un valor de número entero!";
		var dtl_PayCK_001 = "Valor incorrecto del pago!";
		var dtl_PayCK_002 = "Una petición de pago no puede exceder de $10.000!";
		var dtl_PayCK_003 = "Usted no puede solicitar pago para esta cantidad. El expediente de su cuenta muestra que solamente tiene";
		var dtl_ImageDownCK_001 = "Lea por favor los términos y condiciones y haga clic en la casilla si usted acepta";
		var dtl_TermsCK_001 = "¡Lea por favor los términos y condiciones y haga clic en la casilla si usted acepta!";
		var dtl_PassCK_001 = "¡Dirección de correo electrónico incorrecta!";
		var dtl_ConfirmDelete_001 = "¿Está usted seguro de que quiere suprimir este fichero?";
		var dtl_DisableImage_001 = "Seleccione por favor SÍ para deshabilitar imagen";
		var dtl_DisableImage_002 = "Escriba por favor una razón para deshabilitar la imagen";
		var dtl_BNewsAdd_001 = "¡Escriba por favor su texto!";
		var dtl_BNewsAdd_002 = "¡Escriba por favor un máximo de";
		var dtl_BNewsAdd_003 = "caracteres en este campo!";
		var dtl_CollectionsCheck_001 = "¡Seleccione por favor una colección!";
		var dtl_CollectionsAdd_001 = "¡Pegue por favor la identificación o el URL de la primera imagen!";
		var dtl_CollectionsAdd_002 = "¡Escriba por favor el título de la colección!";
		var dtl_CollectionsAdd_003 = "¡Escriba por favor la descripción!";
		var dtl_CollectionsAdd_004 = "¡Escriba por favor las palabras clave!";
		var dtl_CollectionsSearch_000 = "Tu palabra clave aquí";
		var dtl_CollectionsSearch_001 = "¡Escriba por favor las palabras clave!";
		var dtl_PaymentRequest_001 = "¡Introduzca por favor su identificación paypal!";
		var dtl_PaymentRequest_002 = "¡La identificación paypal proporcionada es incorrecta!";
		var dtl_PaymentRequest_003 = "¡Introduzca por favor su identificación de bookersid!";
		var dtl_PaymentRequest_004 = "¡La identificación paypal proporcionada es incorrecta!";
		var dtl_OMS_review_001 = "¡Escriba por favor un mensaje a los administradores del sitio!";
		var dtl_OMS_review_002 = "¡Escriba o elija por favor la razón para rechazar imagen!";
		var dtl_LightboxAdd_001 = "¡No utilice por favor caracteres especiales para el título del lightbox!";
		var dtl_LightboxAdd_002 = "¡Escriba por favor el título del lightbox!";
		var dtl_check_secure_form_001 = "¡Introduzca por favor el número de tarjeta!";
		var dtl_check_secure_form_002 = "¡Introduzca por favor la fecha de vencimiento!";
		var dtl_check_secure_form_003 = "¡Introduzca por favor el código de tarjeta!";
		var dtl_check_secure_form_004 = "¡Introduzca por favor el nombre!";
		var dtl_check_secure_form_005 = "¡Introduzca por favor el apellido!";
		var dtl_check_secure_form_006 = "¡Introduzca por favor la dirección!";
		var dtl_check_secure_form_007 = "¡Introduzca por favor la ciudad!";
		var dtl_check_secure_form_008 = "¡Introduzca por favor el Zip/código postal!";
		var dtl_check_secure_form_009 = "¡Introduzca por favor el país!";
		var dtl_check_secure_form_010 = "¡Introduzca por favor el teléfono!";
		var dtl_check_secure_form_011 = "¡Introduzca por favor el correo electrónico!";
		var dtl_requestAJAX_000 = "Comenzado...";
		var dtl_requestAJAX_001 = "Cargando...";
		var dtl_requestAJAX_002 = "Error: código de estado devuelto";
		var dtl_requestAJAXdoi_000 = "Comenzado...";
		var dtl_requestAJAXdoi_001 = "Eliminando...";
		var dtl_requestAJAXdoi_002 = "Cargando...";
		var dtl_AddImage_000 = "Inserte el URL completo o la identificación Dreamstime de su imagen:";
		var dtl_AddImageLeft_000 = "Inserte la identificación Dreamstime del fichero de la imagen:";
		var dtl_AddImageRight_000 = "Inserte la identificación Dreamstime del fichero de la imagen:";
		var dtl_AddURLB_000 = "Inserte el URL completo de su enlace:";
		var dtl_AddURLB_001 = "Inserte el TEXTO para su enlace :";
		var dtl_AddURL_000 = "Inserte el URL completo de su enlace:";
		var dtl_AddURL_001 = "Inserte el TEXTO para su enlace (opcional):";
		var dtl_NewsCharacters_000 = "Escriba por favor un máximo de";
		var dtl_NewsCharacters_001 = "caracteres en este campo!";
		break;
	case 'fr':
		var dlt_searchjs_000 = "Entrez le mot-clé ou l'identification du fichier";
		var dtl_SearchEmpty_000 = "Entrez le mot-clé ou l'identification du fichier";
		var dtl_SearchEmpty_001 = "écrivez l'identification de dossier";
		var dtl_SearchEmpty_002 = "Veuillez introduire un mot-clé.";
		var dtl_SearchEmptyFaq_000 = "votre mot-clé ici";
		var dtl_SearchSubmit_000 = "votre mot-clé ici";
		var dtl_SearchSubmit_001 = "Entrez le mot-clé ou l'identification du fichier";
		var dtl_SearchSubmit_002 = "Veuillez introduire un mot-clé.";
		var dtl_SearchSubmit_003 = "Les caractères du minimum 2 ont exigé.";
		var dtl_SearchSubmit_004 = "Désolé, mais les caractères suivants";
		var dtl_SearchSubmit_005 = "ne sont pas laissés !";
		var dtl_SearchFaq_000 = "Veuillez introduire un mot-clé.";
		var dtl_SearchFaq_001 = "Caractères du minimum 3 requis";
		var dtl_SearchFaq_002 = "Désolé, mais les caractères suivants";
		var dtl_SearchFaq_003 = "ne sont pas laissés !";
		var dtl_SearchFaq_004 = "votre mot-clé ici";
		var dtl_SearchForumSubmit_000 = "Veuillez introduire un mot-clé.";
		var dtl_SearchForumSubmit_001 = "Caractères du minimum 3 requis";
		var dtl_SearchForumSubmit_002 = "Désolé, mais les caractères suivants";
		var dtl_SearchForumSubmit_003 = "ne sont pas laissés !";
		var dtl_SearchForumSubmit_004 = "search all boards";
		var dtl_SearchForumSubmit_005 = "search this board";
		var dtl_SearchForumSubmit_006 = "search threads";
		var dtl_OMSSearch_001 = "Caractères du minimum 3 requis";
		var dtl_OMSSearch_002 = "Désolé, mais les caractères suivants";
		var dtl_OMSSearch_003 = "ne sont pas laissés !";
		var dtl_FilterSubmit_000 = "Veuillez introduire un mot-clé.";
		var dtl_FilterSubmit_001 = "Caractères du minimum 3 requis";
		var dtl_FilterSubmit_002 = "Désolé, mais les caractères suivants";
		var dtl_FilterSubmit_003 = "ne sont pas laissés !";
		var dtl_FilterSubmit_004 = "votre mot-clé ici";
		var dtl_SearchEmpty_003 = "search all boards";
		var dtl_SearchEmpty_004 = "Rechercher ce sujet";
		var dtl_SearchEmpty_005 = "recherche de sujet";
		var dtl_validare_001 = "You must agree to the terms and conditions!";
		var dtl_validare_002 = "Incorrect email address!!";
		var dtl_validare_003 = "Please insert 'Desired login'!";
		var dtl_validare_004 = "Please remove spaces from 'Desired login'!";
		var dtl_validare_005 = "'Desired login' must contain characters too!";
		var dtl_validare_006 = "'Desired login' must only contain alphanumeric characters!";
		var dtl_validare_007 = "Please insert a correct password!";
		var dtl_validare_008 = "Please insert your 'First name'!";
		var dtl_validare_009 = "Please insert your 'Last name'!";
		var dtl_validare_010 = "Please insert 'City'!";
		var dtl_validare_011 = "Please insert 'Address'!";
		var dtl_validare_012 = "Please select your country!";
		var dtl_validare_013 = "Please insert a valid 'zip code'";
		var dtl_validare_014 = "Please insert a correct phone number!";
		var dtl_validare_015 = "Please type 'How did you find us'!";
		var dtl_validare_contact_001 = "Please insert your 'First name'!";
		var dtl_validare_contact_002 = "Please insert your 'Last name'!";
		var dtl_validare_contact_003 = "Incorrect email address!";
		var dtl_validare_contact_004 = "Please select your country!";
		var dtl_validare_contact_005 = "Please insert a correct phone number!";
		var dtl_validare_contact_006 = "Please insert 'Browser'!";
		var dtl_validare_contact_007 = "Please insert 'System'!";
		var dtl_validare_contact_008 = "Please type your comment!";
		var dtl_validare_contact_009 = "Please select type of problem!";
		var dtl_CK_log_001 = "Please insert your login!";
		var dtl_CK_log_002 = "Please insert password!";
		var dtl_CK_image_001 = "Please choose a image file!";
		var dtl_CK_image_ag_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_CK_image_ag_002 = "Please choose a image file!";
		var dtl_CK_upload_001 = "Minimum value is 250, maximum value is 25000!";
		var dtl_CK_upload_002 = "Please type an image title!";
		var dtl_CK_upload_003 = "The title is too long. Maximum number of characters is 30.";
		var dtl_CK_upload_004 = "Please type an image description!";
		var dtl_CK_upload_005 = "The description is too long. Maximum number of characters is 1500.";
		var dtl_CK_upload_006 = "A minimum of 5 words is the least for a decent description in order to transmit your concept to the viewers.";
		var dtl_CK_upload_007 = "Title and description have identical data. Please provide a more accurate description of the image.";
		var dtl_CK_upload_008 = "Please select one or more categories for image!";
		var dtl_CK_upload_009 = "Please type few keywords for image!";
		var dtl_CK_upload_010 = "This image has";
		var dtl_CK_upload_011 = "words";
		var dtl_CK_upload_012 = "The maximum alowed number is 80";
		var dtl_CK_upload_013 = "Please read the terms and conditions and tick the checkbox if you agree!";
		var dtl_CK_upload_014 = "Minimum value is 250, maximum value 25000!";
		var dtl_CK_upload_015 = "Numeric value required!";
		var dtl_CK_upload_016 = "For activating Sell the Rights license for this image you need to set a price or use recommended price!";
		var dtl_CK_upload_keymaster_017 = "Minimum value is 250, maximum value is 25000!";
		var dtl_CK_upload_keymaster_018 = "Please read the terms and conditions and tick the checkbox if you agree!";
		var dtl_CK_upload_keymaster_019 = "Numeric value required!";
		var dtl_CK_upload_keymaster_020 = "For activating Sell the Rights license for this image you need to set a price or use recommended price!";
		var dtl_CK_freeupload_001 = "Please type an image title!";
		var dtl_CK_freeupload_002 = "Please type an image description!";
		var dtl_CK_freeupload_003 = "A minimum of 5 words is the least for a decent description in order to transmit your concept to the viewers.";
		var dtl_CK_freeupload_004 = "Title and description have identical data. Please provide a more accurate description of the image.";
		var dtl_CK_freeupload_005 = "Please type few keywords for image!";
		var dtl_CK_freeupload_006 = "This image has";
		var dtl_CK_freeupload_007 = "words";
		var dtl_CK_freeupload_008 = "The maximum alowed number is 80";
		var dtl_validare_board_001 = "Please type the subject!";
		var dtl_validare_board_002 = "Please type the message!";
		var dtl_ConvertCF_001 = "Incorrect credits value!";
		var dtl_ConvertCF_002 = "Please insert an integer value!";
		var dtl_PayCK_001 = "Incorrect payment value!";
		var dtl_PayCK_002 = "A payment request cannot exceed $10,000!";
		var dtl_PayCK_003 = "You cannot request a payment for this amount. Your account records show you only have";
		var dtl_ImageDownCK_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_TermsCK_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_PassCK_001 = "Incorrect email address!";
		var dtl_ConfirmDelete_001 = "Are you sure you want to delete this file?";
		var dtl_DisableImage_001 = "Please select YES to disable image";
		var dtl_DisableImage_002 = "Please write a reason to disable image";
		var dtl_BNewsAdd_001 = "Please type your text!";
		var dtl_BNewsAdd_002 = "Please type maximum";
		var dtl_BNewsAdd_003 = "characters in this field!";
		var dtl_CollectionsCheck_001 = "Please select a collection!";
		var dtl_CollectionsAdd_001 = "Please paste the ID or URL of the first image!";
		var dtl_CollectionsAdd_002 = "Please type title of collection!";
		var dtl_CollectionsAdd_003 = "Please type description!";
		var dtl_CollectionsAdd_004 = "Please type keywords!";
		var dtl_CollectionsSearch_000 = "votre mot-clé ici";
		var dtl_CollectionsSearch_001 = "Please type keywords!";
		var dtl_PaymentRequest_001 = "Please complete your paypal ID!";
		var dtl_PaymentRequest_002 = "The provided paypal ID is incorrect!";
		var dtl_PaymentRequest_003 = "Please complete your bookersid ID!";
		var dtl_PaymentRequest_004 = "The provided paypal ID is incorrect!";
		var dtl_OMS_review_001 = "Please type message to site admins!";
		var dtl_OMS_review_002 = "Please type or choose reason to refuse image!";
		var dtl_LightboxAdd_001 = "Please don't use special characters for lightbox title!";
		var dtl_LightboxAdd_002 = "Please type title of the lightbox!";
		var dtl_check_secure_form_001 = "Please insert Card Number!";
		var dtl_check_secure_form_002 = "Please insert Expiration Date!";
		var dtl_check_secure_form_003 = "Please insert Card Code!";
		var dtl_check_secure_form_004 = "Please insert First Name!";
		var dtl_check_secure_form_005 = "Please insert Last Name!";
		var dtl_check_secure_form_006 = "Please insert Address!";
		var dtl_check_secure_form_007 = "Please insert City!";
		var dtl_check_secure_form_008 = "Please insert Zip/Postal Code!";
		var dtl_check_secure_form_009 = "Please insert Country!";
		var dtl_check_secure_form_010 = "Please insert Phone!";
		var dtl_check_secure_form_011 = "Please insert Email!";
		var dtl_requestAJAX_000 = "Started...";
		var dtl_requestAJAX_001 = "Loading...";
		var dtl_requestAJAX_002 = "Error: returned status code";
		var dtl_requestAJAXdoi_000 = "Started...";
		var dtl_requestAJAXdoi_001 = "Removing...";
		var dtl_requestAJAXdoi_002 = "Loading...";
		var dtl_AddImage_000 = "Enter the full URL or the Dreamstime ID of your image:";
		var dtl_AddImageLeft_000 = "Enter the Dreamstime file ID of the image:";
		var dtl_AddImageRight_000 = "Enter the Dreamstime file ID of the image:";
		var dtl_AddURLB_000 = "Enter the full URL of your link :";
		var dtl_AddURLB_001 = "Enter the TEXT for your link :";
		var dtl_AddURL_000 = "Enter the full URL of your link :";
		var dtl_AddURL_001 = "Enter the TEXT for your link (optional) :";
		var dtl_NewsCharacters_000 = "Please type maximum";
		var dtl_NewsCharacters_001 = "characters in this field!";
		break;
	case 'it':
		var dlt_searchjs_000 = "inserisci parola chiave o ID file";
		var dtl_SearchEmpty_000 = "inserisci parola chiave o ID file";
		var dtl_SearchEmpty_001 = "inserisci ID file";
		var dtl_SearchEmpty_002 = "Per cortesia inserisci una parola chiave.";
		var dtl_SearchEmptyFaq_000 = "la tua parola chiave qui";
		var dtl_SearchSubmit_000 = "la tua parola chiave qui";
		var dtl_SearchSubmit_001 = "inserisci parola chiave o ID file";
		var dtl_SearchSubmit_002 = "Per cortesia inserisci una parola chiave.";
		var dtl_SearchSubmit_003 = "Richiesti minimo 2 caratteri";
		var dtl_SearchSubmit_004 = "Spiacente, ma i seguenti caratteri";
		var dtl_SearchSubmit_005 = "non sono consentiti!";
		var dtl_SearchFaq_000 = "Per cortesia inserisci una parola chiave.";
		var dtl_SearchFaq_001 = "Richiesti minimo 3 caratteri";
		var dtl_SearchFaq_002 = "Spiacente, ma i seguenti caratteri";
		var dtl_SearchFaq_003 = "non sono consentiti!";
		var dtl_SearchFaq_004 = "la tua parola chiave qui";
		var dtl_SearchForumSubmit_000 = "Per cortesia inserisci una parola chiave.";
		var dtl_SearchForumSubmit_001 = "Richiesti minimo 3 caratteri";
		var dtl_SearchForumSubmit_002 = "Spiacente, ma i seguenti caratteri";
		var dtl_SearchForumSubmit_003 = "non sono consentiti!";
		var dtl_SearchForumSubmit_004 = "cerca in tutto il Forum";
		var dtl_SearchForumSubmit_005 = "cerca in questo Forum";
		var dtl_SearchForumSubmit_006 = "cerca nelle discussioni";
		var dtl_OMSSearch_001 = "Richiesti minimo 3 caratteri";
		var dtl_OMSSearch_002 = "Spiacente, ma i seguenti caratteri";
		var dtl_OMSSearch_003 = "non sono consentiti!";
		var dtl_FilterSubmit_000 = "Per cortesia inserisci una parola chiave";
		var dtl_FilterSubmit_001 = "Richiesti minimo 3 caratteri";
		var dtl_FilterSubmit_002 = "Spiacente, ma i seguenti caratteri";
		var dtl_FilterSubmit_003 = "non sono consentiti!";
		var dtl_FilterSubmit_004 = "la tua parola chiave qui";
		var dtl_SearchEmpty_003 = "cerca in tutto il Forum";
		var dtl_SearchEmpty_004 = "cerca in questo Forum";
		var dtl_SearchEmpty_005 = "cerca nelle discussioni";
		var dtl_validare_001 = "Devi accettare i termini e condizioni generali!";
		var dtl_validare_002 = "Indirizzo e-mail errato!!";
		var dtl_validare_003 = "Per cortesia inserisci il 'login desiderato'!";
		var dtl_validare_004 = "Per cortesia rimuovi gli spazi dal 'login desiderato'!";
		var dtl_validare_005 = "Il 'login desiderato' deve anche contenere caratteri!";
		var dtl_validare_006 = "Il 'login desiderato' deve contenere soltanto caratteri alfanumerici!";
		var dtl_validare_007 = "Per cortesia inserisci una password corretta!";
		var dtl_validare_008 = "Per cortesia inserisci il tuo 'nome'!";
		var dtl_validare_009 = "Per cortesia inserisci il tuo 'cognome'!";
		var dtl_validare_010 = "Per cortesia inserisci la 'città'!";
		var dtl_validare_011 = "Per cortesia inserisci 'l'indirizzo'!";
		var dtl_validare_012 = "Per cortesia seleziona la tua nazione!";
		var dtl_validare_013 = "Per cortesia inserisci un 'codice postale' valido";
		var dtl_validare_014 = "Per cortesia inserisci un numero di telefono corretto!";
		var dtl_validare_015 = "Per cortesia scrivi 'come ci hai trovato'!";
		var dtl_validare_contact_001 = "Per cortesia inserisci il tuo 'nome'!";
		var dtl_validare_contact_002 = "Per cortesia inserisci il tuo 'cognome'!";
		var dtl_validare_contact_003 = "Indirizzo e-mail errato!";
		var dtl_validare_contact_004 = "Per cortesia seleziona la tua nazione!";
		var dtl_validare_contact_005 = "Per cortesia inserisci un numero di telefono corretto!";
		var dtl_validare_contact_006 = "Per cortesia inserisci il 'browser'!";
		var dtl_validare_contact_007 = "Per cortesia inserisci il 'sistema'!";
		var dtl_validare_contact_008 = "Per cortesia scrivi il tuo commento!";
		var dtl_validare_contact_009 = "Per cortesia seleziona il tipo di problema!";
		var dtl_CK_log_001 = "Per cortesia inserisci il tuo login!";
		var dtl_CK_log_002 = "Per cortesia inserisci la password!";
		var dtl_CK_image_001 = "Per cortesia scegli un file immagine!";
		var dtl_CK_image_ag_001 = "Per cortesia leggi i termini e condizioni generali e seleziona la casella se sei d'accordo";
		var dtl_CK_image_ag_002 = "Per cortesia scegli un file immagine!";
		var dtl_CK_upload_001 = "Il valore minimo è 250, il valore massimo è 25000!";
		var dtl_CK_upload_002 = "Per cortesia scrivi un titolo dell'immagine!";
		var dtl_CK_upload_003 = "Il titolo è troppo lungo. Il numero massimo di caratteri è 30";
		var dtl_CK_upload_004 = "Per cortesia scrivi una descrizione dell'immagine!";
		var dtl_CK_upload_005 = "La descrizione è troppo lunga. Il numero massimo di caratteri è 1500";
		var dtl_CK_upload_006 = "5 è il numero minimo di parole per una descrizione decente al fine di trasmettere il tuo concetto ai compratori";
		var dtl_CK_upload_007 = "Titolo e descrizione hanno dati identici. Per cortesia fornisci una descrizione più accurata dell'immagine";
		var dtl_CK_upload_008 = "Per cortesia seleziona una o più categorie per l'immagine!";
		var dtl_CK_upload_009 = "Per cortesia scrivi qualche parola chiave per l'immagine!";
		var dtl_CK_upload_010 = "Questa immagine ha";
		var dtl_CK_upload_011 = "parole";
		var dtl_CK_upload_012 = "Il numero massimo consentito è 80";
		var dtl_CK_upload_013 = "Per cortesia leggi i termini e condizioni generali e seleziona la casella se sei d'accordo!";
		var dtl_CK_upload_014 = "Il valore minimo è 250, il valore massimo 25000!";
		var dtl_CK_upload_015 = "Valore numerico richiesto!";
		var dtl_CK_upload_016 = "Per attivare la licenza Vendi i diritti per questa immagine devi fissare un prezzo o usare il prezzo suggerito!";
		var dtl_CK_upload_keymaster_017 = "Il valore minimo è 250, il valore massimo è 25000!";
		var dtl_CK_upload_keymaster_018 = "Per cortesia leggi i termini e condizioni generali e seleziona la casella se sei d'accordo!";
		var dtl_CK_upload_keymaster_019 = "Valore numerico richiesto!";
		var dtl_CK_upload_keymaster_020 = "Per attivare la licenza Vendi i diritti per questa immagine devi fissare un prezzo o usare il prezzo suggerito!";
		var dtl_CK_freeupload_001 = "Per cortesia scrivi un titolo dell'immagine!";
		var dtl_CK_freeupload_002 = "Per cortesia scrivi una descrizione dell'immagine!";
		var dtl_CK_freeupload_003 = "5 è il numero minimo di parole per una descrizione decente al fine di trasmettere il tuo concetto ai compratori";
		var dtl_CK_freeupload_004 = "Titolo e descrizione hanno dati identici. Per cortesia fornisci una descrizione più accurata dell'immagine";
		var dtl_CK_freeupload_005 = "Per cortesia scrivi qualche parola chiave per l'immagine!";
		var dtl_CK_freeupload_006 = "Questa immagine ha";
		var dtl_CK_freeupload_007 = "parole";
		var dtl_CK_freeupload_008 = "Il numero massimo consentito è 80";
		var dtl_validare_board_001 = "Per cortesia scrivi il soggetto!";
		var dtl_validare_board_002 = "Per cortesia scrivi il messaggio!";
		var dtl_ConvertCF_001 = "Valore errato di crediti!";
		var dtl_ConvertCF_002 = "Per cortesia scrivi un valore a numero intero!";
		var dtl_PayCK_001 = "Valore di pagamento errato!";
		var dtl_PayCK_002 = "Una richiesta di pagamento non può superare $10.000!";
		var dtl_PayCK_003 = "Non puoi richiedere un pagamento per questo importo. I dati del tuo account mostrano che hai soltanto";
		var dtl_ImageDownCK_001 = "Per cortesia leggi i termini e condizioni generali e seleziona la casella se sei d'accordo ";
		var dtl_TermsCK_001 = "Per cortesia leggi i termini e condizioni generali e seleziona la casella se sei d'accordo ";
		var dtl_PassCK_001 = "Indirizzo e-mail errato!";
		var dtl_ConfirmDelete_001 = "Sei sicuro di voler cancellare questo file?";
		var dtl_DisableImage_001 = "Per cortesia seleziona SÌ per disabilitare l'immagine";
		var dtl_DisableImage_002 = "Per cortesia scrivi un motivo per disabilitare l'immagine";
		var dtl_BNewsAdd_001 = "Per cortesia scrivi il tuo testo!";
		var dtl_BNewsAdd_002 = "Per cortesia scrivi massimo";
		var dtl_BNewsAdd_003 = "caratteri in questo campo!";
		var dtl_CollectionsCheck_001 = "Per cortesia seleziona una collezione!";
		var dtl_CollectionsAdd_001 = "Per cortesia inserisci l'ID o l'URL della prima immagine!";
		var dtl_CollectionsAdd_002 = "Per cortesia scrivi il titolo della collezione!";
		var dtl_CollectionsAdd_003 = "Per cortesia scrivi una descrizione!";
		var dtl_CollectionsAdd_004 = "Per cortesia scrivi le parole chiave!";
		var dtl_CollectionsSearch_000 = "la tua parola chiave qui";
		var dtl_CollectionsSearch_001 = "Per cortesia scrivi le parole chiave!";
		var dtl_PaymentRequest_001 = "Per cortesia completa il tuo ID paypal!";
		var dtl_PaymentRequest_002 = "L'ID paypal fornito è errato!";
		var dtl_PaymentRequest_003 = "Per cortesia completa il tuo ID bookersid!";
		var dtl_PaymentRequest_004 = "L'ID paypal fornito è errato!";
		var dtl_OMS_review_001 = "Per cortesia scrivi un messaggio agli amministratori del sito!";
		var dtl_OMS_review_002 = "Per cortesia scrivi o scegli un motivo per rifiutare l'immagine!";
		var dtl_LightboxAdd_001 = "Per cortesia non usare caratteri speciali per il titolo della lightbox!";
		var dtl_LightboxAdd_002 = "Per cortesia scrivi il titolo della lightbox!";
		var dtl_check_secure_form_001 = "Per cortesia inserisci il numero della Carta!";
		var dtl_check_secure_form_002 = "Per cortesia inserisci la data di scadenza!";
		var dtl_check_secure_form_003 = "Per cortesia inserisci il codice CVC!";
		var dtl_check_secure_form_004 = "Per cortesia inserisci il nome!";
		var dtl_check_secure_form_005 = "Per cortesia inserisci il cognome!";
		var dtl_check_secure_form_006 = "Per cortesia inserisci l'indirizzo!";
		var dtl_check_secure_form_007 = "Per cortesia inserisci la città!";
		var dtl_check_secure_form_008 = "Per cortesia inserisci il codice postale!";
		var dtl_check_secure_form_009 = "Per cortesia inserisci la nazione!";
		var dtl_check_secure_form_010 = "Per cortesia inserisci il telefono!";
		var dtl_check_secure_form_011 = "Per cortesia inserisci l'email!";
		var dtl_requestAJAX_000 = "Iniziato";
		var dtl_requestAJAX_001 = "Caricamento";
		var dtl_requestAJAX_002 = "Errore: codice status restituito";
		var dtl_requestAJAXdoi_000 = "Iniziato";
		var dtl_requestAJAXdoi_001 = "Eliminazione";
		var dtl_requestAJAXdoi_002 = "Caricamento";
		var dtl_AddImage_000 = "Fornisci l'URL completo o l'ID di Dreamstime della tua immagine:";
		var dtl_AddImageLeft_000 = "Fornisci l'ID del file di Dreamstime della tua immagine:";
		var dtl_AddImageRight_000 = "Fornisci l'ID del file di Dreamstime della tua immagine:";
		var dtl_AddURLB_000 = "Fornisci l'URL completo del tuo link:";
		var dtl_AddURLB_001 = "Inserisci il TESTO per il tuo link :";
		var dtl_AddURL_000 = "Fornisci l'URL completo del tuo link:";
		var dtl_AddURL_001 = "Inserisci il TESTO per il tuo link (facoltativo):";
		var dtl_NewsCharacters_000 = "Per cortesia scrivi massimo";
		var dtl_NewsCharacters_001 = "caratteri in questo campo!";
		break;
	case 'nl':
		var dlt_searchjs_000 = "voer sleutelwoord of file ID in";
		var dtl_SearchEmpty_000 = "voer sleutelwoord of file ID in";
		var dtl_SearchEmpty_001 = "voer file ID in";
		var dtl_SearchEmpty_002 = "Gelieve een sleutelwoord in te voeren.";
		var dtl_SearchEmptyFaq_000 = "uw sleutelwoord hier";
		var dtl_SearchSubmit_000 = "uw sleutelwoord hier";
		var dtl_SearchSubmit_001 = "voer sleutelwoord of file ID in";
		var dtl_SearchSubmit_002 = "Gelieve een sleutelwoord in te voeren.";
		var dtl_SearchSubmit_003 = "Minimum 2 karakters";
		var dtl_SearchSubmit_004 = "Helaas kunnen de volgende karakters";
		var dtl_SearchSubmit_005 = "niet worden toegestaan!";
		var dtl_SearchFaq_000 = "Gelieve een sleutelwoord in te voeren.";
		var dtl_SearchFaq_001 = "Minimum 3 karakters";
		var dtl_SearchFaq_002 = "Helaas kunnen de volgende karakters";
		var dtl_SearchFaq_003 = "niet worden toegestaan!";
		var dtl_SearchFaq_004 = "uw sleutelwoord hier";
		var dtl_SearchForumSubmit_000 = "Gelieve een sleutelwoord in te voeren.";
		var dtl_SearchForumSubmit_001 = "Minimum 3 vereiste karakters";
		var dtl_SearchForumSubmit_002 = "Helaas kunnen de volgende karakters";
		var dtl_SearchForumSubmit_003 = "niet worden toegestaan!";
		var dtl_SearchForumSubmit_004 = "zoek op alle forums";
		var dtl_SearchForumSubmit_005 = "zoek op dit forum";
		var dtl_SearchForumSubmit_006 = "zoek op threads";
		var dtl_OMSSearch_001 = "Minimum 3  karakters";
		var dtl_OMSSearch_002 = "Helaas kunnen de volgende karakterss";
		var dtl_OMSSearch_003 = "niet worden toegestaan!";
		var dtl_FilterSubmit_000 = "Gelieve een sleutelwoord in te voeren";
		var dtl_FilterSubmit_001 = "Minimum 3 karakters";
		var dtl_FilterSubmit_002 = "Helaas kunnen de volgende karakters";
		var dtl_FilterSubmit_003 = "niet worden toegestaan!";
		var dtl_FilterSubmit_004 = "uw sleutelwoord hier";
		var dtl_SearchEmpty_003 = "zoek op alle forums";
		var dtl_SearchEmpty_004 = "zoek op dit forum";
		var dtl_SearchEmpty_005 = "zoek op threads";
		var dtl_validare_001 = "U moet met de voorwaarden het akkoord gaan!";
		var dtl_validare_002 = "Onjuist e-mailadres!!";
		var dtl_validare_003 = "Gelieve 'Gewenste login' in te voeren!";
		var dtl_validare_004 = "Gelieve spaties uit 'Gewenste login' te verwijderen!!";
		var dtl_validare_005 = "De 'Gewenste login' moet ook karakters bevatten!";
		var dtl_validare_006 = "De 'Gewenste login' mag uitsluitend alfanumerieke karakters bevatten!";
		var dtl_validare_007 = "Gelieve een correct wachtwoord in te voeren!";
		var dtl_validare_008 = "Gelieve uw 'voornaam' in te voeren!";
		var dtl_validare_009 = "Gelieve uw 'achternaam' in te voeren!";
		var dtl_validare_010 = "Gelieve 'Stad' in te voeren!!";
		var dtl_validare_011 = "Gelieve 'Adres' in te voeren!";
		var dtl_validare_012 = "Gelieve uw land in te voeren!!";
		var dtl_validare_013 = "Gelieve een geldige postcode in te voeren!";
		var dtl_validare_014 = "Gelieve een correct telefoonnummer in te voeren!";
		var dtl_validare_015 = "Gelieve 'hoe u ons vond' in te voeren!";
		var dtl_validare_contact_001 = "Gelieve uw 'voornaam' in te voeren!!";
		var dtl_validare_contact_002 = "Gelieve uw 'achternaam' in te voeren!";
		var dtl_validare_contact_003 = "Onjuist e-mailadres!";
		var dtl_validare_contact_004 = "Gelieve uw land te selecteren!";
		var dtl_validare_contact_005 = "Gelieve een correct telefoonnummer in te voeren!";
		var dtl_validare_contact_006 = "Gelieve 'Browser' in te voeren!";
		var dtl_validare_contact_007 = "Gelieve 'Systeem' in te voeren!";
		var dtl_validare_contact_008 = "Gelieve uw commentaar te typen!";
		var dtl_validare_contact_009 = "Gelieve het soort probleem te selecteren!";
		var dtl_CK_log_001 = "Gelieve uw login in te voeren";
		var dtl_CK_log_002 = "Gelieve uw wachtwoord in te voeren!";
		var dtl_CK_image_001 = "Gelieve een beeld te selecteren";
		var dtl_CK_image_ag_001 = "Lees de voorwaarden en click de checkbox als u akkoord gaat";
		var dtl_CK_image_ag_002 = "Gelieve een beeld te selecteren!";
		var dtl_CK_upload_001 = "De minimum waarde is 250, is de maximumwaarde 25000!";
		var dtl_CK_upload_002 = "Gelieve een beeldtitel in te voeren!";
		var dtl_CK_upload_003 = "De titel is te lang. Het maximum aantal karakters is 30";
		var dtl_CK_upload_004 = "Gelieve een beeldbeschrijving in te voeren!";
		var dtl_CK_upload_005 = "De beschrijving is te lang. Het maximum aantal karakters is 1500";
		var dtl_CK_upload_006 = "Een minimum van 5 woorden is het minimum voor een fatsoenlijke beschrijving om uw concept over te brengen aan de kijkers";
		var dtl_CK_upload_007 = "De titel en de beschrijving hebben identieke gegevens. Gelieve  een nauwkeuriger beschrijving van het beeld te verstrekken";
		var dtl_CK_upload_008 = "Gelieve één of meer categorieën voor beeld te selecteren !";
		var dtl_CK_upload_009 = "Gelieve enkele sleutelwoorden voor dit beeld in te voeren!";
		var dtl_CK_upload_010 = "Dit beeld heeft";
		var dtl_CK_upload_011 = "woorden";
		var dtl_CK_upload_012 = "Het maximum aantal is 80";
		var dtl_CK_upload_013 = "Gelieve de voorwaarden te lezen en de checkbox te clicken als u akkoord gaat";
		var dtl_CK_upload_014 = "De minimum waarde is 250, maximumwaarde 25000!";
		var dtl_CK_upload_015 = "Numerieke waarde vereiste !";
		var dtl_CK_upload_016 = "Om de vergunning 'verkoop de rechten' te activeren dient u een prijs in te voeren of de advies prijs te gebruiken!";
		var dtl_CK_upload_keymaster_017 = "De minimum waarde is 250, is de maximumwaarde 25000!";
		var dtl_CK_upload_keymaster_018 = "Gelieve de voorwaarden te lezen en de checkbox te clicken als u akkoord gaat";
		var dtl_CK_upload_keymaster_019 = "Numerieke waarde vereist !";
		var dtl_CK_upload_keymaster_020 = "Om de vergunning 'verkoop de rechten' te activeren dient u een prijs in te voeren of de advies prijs te gebruiken!";
		var dtl_CK_freeupload_001 = "Gelieve een beeldtitel in te voeren!";
		var dtl_CK_freeupload_002 = "Gelieve een beeldbeschrijving in te voeren!";
		var dtl_CK_freeupload_003 = "Een minimum van 5 woorden is het minimum voor een fatsoenlijke beschrijving om uw concept over te brengen aan de kijkers";
		var dtl_CK_freeupload_004 = "De titel en de beschrijving hebben identieke gegevens. Gelieve  een nauwkeuriger beschrijving van het beeld te verstrekken";
		var dtl_CK_freeupload_005 = "Gelieve enkele sleutelwoorden voor dit beeld in te voeren!";
		var dtl_CK_freeupload_006 = "Dit beeld heeft";
		var dtl_CK_freeupload_007 = "woorden";
		var dtl_CK_freeupload_008 = "Het maximum aantal is 80";
		var dtl_validare_board_001 = "Gelieve het onderwerp in te voeren!";
		var dtl_validare_board_002 = "Gelieve het bericht in te voeren!";
		var dtl_ConvertCF_001 = "Onjuiste krediet waarde!";
		var dtl_ConvertCF_002 = "Gelieve een geheel getal in te voeren!";
		var dtl_PayCK_001 = "Onjuiste betalingswaarde!";
		var dtl_PayCK_002 = "Een betalingsverzoek kan geen $10.000 overschrijden!";
		var dtl_PayCK_003 = "U kunt niet om geen betaling voor dit bedrag verzoeken. Uw rekening toont dat u slechts hebt";
		var dtl_ImageDownCK_001 = "Gelieve de voorwaarden te lezen en de checkbox te clicken als u akkoord gaat";
		var dtl_TermsCK_001 = "Gelieve de voorwaarden te lezen en de checkbox te clicken als u akkoord gaat";
		var dtl_PassCK_001 = "Onjuist e-mailadres!";
		var dtl_ConfirmDelete_001 = "Bent zeker dat u dit bestand wilt verwijderen?";
		var dtl_DisableImage_001 = "Gelieve JA te selecteren om dit beeld onbruikbaar te maken";
		var dtl_DisableImage_002 = "Gelieve een reden in te voeren waarom u dit beeld beeld onbruikbaar wilt maken";
		var dtl_BNewsAdd_001 = "Gelieve uw tekst in te voeren!";
		var dtl_BNewsAdd_002 = "Gelieve maximum";
		var dtl_BNewsAdd_003 = "karakters in dit veld in te voeren!";
		var dtl_CollectionsSearch_000 = "uw sleutelwoord hier";
		var dtl_CollectionsCheck_001 = "Gelieve een collectie te selecteren!";
		var dtl_CollectionsAdd_001 = "Gelieve het ID of URL van het eerste beeld in te voegen!";
		var dtl_CollectionsAdd_002 = "Gelieve de titel van de collectie in te voeren!";
		var dtl_CollectionsAdd_003 = "Gelieve de beschrijving in te voeren!";
		var dtl_CollectionsAdd_004 = "Gelieve sleutelwoorden in te voeren!";
		var dtl_CollectionsSearch_001 = "Gelieve sleutelwoorden in te voeren!";
		var dtl_PaymentRequest_001 = "Gelieve uw paypal ID in te voeren!";
		var dtl_PaymentRequest_002 = "Verstrekte paypal ID is onjuist!";
		var dtl_PaymentRequest_003 = "Gelieve uw bookers ID in te voeren!";
		var dtl_PaymentRequest_004 = "Verstrekte paypal ID is onjuist!";
		var dtl_OMS_review_001 = "Gelieve een bericht in te voeren voor de site admins!";
		var dtl_OMS_review_002 = "Gelieve een reden te typen of te kiezen om beeld te weigeren!";
		var dtl_LightboxAdd_001 = "Gelieve geen speciale karakters te gebruiken voor de lightboxtitel!";
		var dtl_LightboxAdd_002 = "Gelieve de titel te typen van de lightbox!";
		var dtl_check_secure_form_001 = "Gelieve het AKaartnummer in te voeren!";
		var dtl_check_secure_form_002 = "Gelieve Vervaldatum in te voeren!";
		var dtl_check_secure_form_003 = "Gelieve de Code van de Kaart in te voeren!";
		var dtl_check_secure_form_004 = "Gelieve Voornaam in te voeren!";
		var dtl_check_secure_form_005 = "Gelieve Achternaam in te voeren!";
		var dtl_check_secure_form_006 = "Gelieve Adres in te voeren!";
		var dtl_check_secure_form_007 = "Gelieve Stad in te voeren!";
		var dtl_check_secure_form_008 = "Gelieve PostCode in te voeren!";
		var dtl_check_secure_form_009 = "Gelieve Land in te voeren!";
		var dtl_check_secure_form_010 = "Gelieve Telefoon in te voeren!";
		var dtl_check_secure_form_011 = "Gelieve  E-mail in te voeren!";
		var dtl_requestAJAX_000 = "Begonnen...";
		var dtl_requestAJAX_001 = "Laded...";
		var dtl_requestAJAX_002 = "Fout:  statuscode";
		var dtl_requestAJAXdoi_000 = "Begonnen...";
		var dtl_requestAJAXdoi_001 = "Verwijderen...";
		var dtl_requestAJAXdoi_002 = "Laden...";
		var dtl_AddImage_000 = "Voer volledige URL of Dreamstime file ID van uw beeld in:";
		var dtl_AddImageLeft_000 = "Voer Dreamstime file ID van het beeld in:";
		var dtl_AddImageRight_000 = "Voer Dreamstime file ID van het beeld in:";
		var dtl_AddURLB_000 = "Voer volledige URL van uw link in:";
		var dtl_AddURLB_001 = "Voer de TEKST voor uw link in :";
		var dtl_AddURL_000 = "Voer volledige URL van uw link in:";
		var dtl_AddURL_001 = "Voer de TEKST voor uw link in (optioneel):";
		var dtl_NewsCharacters_000 = "Gelieve maximum";
		var dtl_NewsCharacters_001 = "karakters in dit veld te typen!";
		break;
	case 'pt':
		var dlt_searchjs_000 = "Insira uma palavra-chave ou o ID do ficheiro";
		var dtl_SearchEmpty_000 = "Insira uma palavra-chave ou o ID do ficheiro";
		var dtl_SearchEmpty_001 = "Insira o ID do ficheiro";
		var dtl_SearchEmpty_002 = "Por favor introduza uma palavra-chave.";
		var dtl_SearchEmptyFaq_000 = "a sua palavra-chave aqui";
		var dtl_SearchSubmit_000 = "a sua palavra-chave aqui";
		var dtl_SearchSubmit_001 = "Insira uma palavra-chave ou o ID do ficheiro";
		var dtl_SearchSubmit_002 = "Por favor introduza uma palavra-chave.";
		var dtl_SearchSubmit_003 = "São necessários no mínimo 2 caracteres";
		var dtl_SearchSubmit_004 = "Lamentamos, mas os seguintes caracteres";
		var dtl_SearchSubmit_005 = "não são permitidos!";
		var dtl_SearchFaq_000 = "Por favor introduza uma palavra-chave.";
		var dtl_SearchFaq_001 = "São necessários no mínimo 3 caracteres";
		var dtl_SearchFaq_002 = "Lamentamos, mas os seguintes caracteres";
		var dtl_SearchFaq_003 = "não são permitidos!";
		var dtl_SearchFaq_004 = "a sua palavra-chave aqui";
		var dtl_SearchForumSubmit_000 = "Por favor introduza uma palavra-chave.";
		var dtl_SearchForumSubmit_001 = "São necessários no mínimo 3 caracteres";
		var dtl_SearchForumSubmit_002 = "Lamentamos, mas os seguintes caracteres";
		var dtl_SearchForumSubmit_003 = "não são permitidos!";
		var dtl_SearchForumSubmit_004 = "pesquisar em todos os fóruns";
		var dtl_SearchForumSubmit_005 = "pesquisar neste fórum";
		var dtl_SearchForumSubmit_006 = "pesquisar tópicos";
		var dtl_OMSSearch_001 = "São necessários no mínimo 3 caracteres";
		var dtl_OMSSearch_002 = "Lamentamos, mas os seguintes caracteres";
		var dtl_OMSSearch_003 = "não são permitidos!";
		var dtl_FilterSubmit_000 = "Por favor Introduza uma palavra-chave.";
		var dtl_FilterSubmit_001 = "São necessários no mínimo 3 caracteres";
		var dtl_FilterSubmit_002 = "Lamentamos, mas os seguintes caracteres";
		var dtl_FilterSubmit_003 = "não são permitidos!";
		var dtl_FilterSubmit_004 = "a sua palavra-chave aqui";
		var dtl_SearchEmpty_003 = "pesquisar em todos os fóruns";
		var dtl_SearchEmpty_004 = "pesquisar neste fórum";
		var dtl_SearchEmpty_005 = "pesquisar tópicos";
		var dtl_SearchEmpty_006 = "";
		var dtl_validare_001 = "Você deve concordar com os termos e condições!";
		var dtl_validare_002 = "Endereço de email incorrecto!!";
		var dtl_validare_003 = "Por favor introduza o 'Login desejado'!";
		var dtl_validare_004 = "Por favor remova os espaços do 'Login desejado'!";
		var dtl_validare_005 = "'O 'Login desejado' também deve conter caracteres!";
		var dtl_validare_006 = "'O 'Login desejado' deve conter somente caracteres alfa-numéricos!";
		var dtl_validare_007 = "Por favor introduza uma password correcta!";
		var dtl_validare_008 = "Por favor introduza o seu 'Primeiro nome'!";
		var dtl_validare_009 = "Por favor introduza o seu 'Último nome'!";
		var dtl_validare_010 = "Por favor introduza o seu a sua 'Cidade'!";
		var dtl_validare_011 = "Por favor introduza a sua 'Morada'!";
		var dtl_validare_012 = "Por favor seleccione o seu país!";
		var dtl_validare_013 = "Por favor introduza um 'código postal' válido";
		var dtl_validare_014 = "Por favor introduza um número de telefone correcto!";
		var dtl_validare_015 = "Por favor descreva 'como nos encontrou'!";
		var dtl_validare_contact_001 = "Por favor introduza o seu 'Primeiro nome'!";
		var dtl_validare_contact_002 = "Por favor introduza o seu 'Último nome'!";
		var dtl_validare_contact_003 = "Endereço de email incorrecto!";
		var dtl_validare_contact_004 = "Por favor seleccione o seu país!";
		var dtl_validare_contact_005 = "Por favor introduza um número de telefone correcto!";
		var dtl_validare_contact_006 = "Por favor introduza o seu 'browser'!";
		var dtl_validare_contact_007 = "Por favor introduza o seu 'sistema'!";
		var dtl_validare_contact_008 = "Por favor escreva o seu comentário!";
		var dtl_validare_contact_009 = "Por favor seleccione o tipo de problema!";
		var dtl_CK_log_001 = "Por favor introduza o seu Login!";
		var dtl_CK_log_002 = "Por favor introduza a password!";
		var dtl_CK_image_001 = "Por favor escolha um arquivo de imagem!";
		var dtl_CK_image_ag_001 = "Por favor leia os termos e condições e marque a checkbox se concordar";
		var dtl_CK_image_ag_002 = "Por favor escolha um arquivo de imagem!";
		var dtl_CK_upload_001 = "O valor mínimo é de 250, o valor máximo é é de 25000!";
		var dtl_CK_upload_002 = "Por favor introduza um título para a imagem!";
		var dtl_CK_upload_003 = "O título é demasiado longo. O número máximo de caracteres é de 30";
		var dtl_CK_upload_004 = "Por favor introduza uma descrição para a imagem!";
		var dtl_CK_upload_005 = "A descrição é demasiado longa. O número máximo de caracteres é de 1500";
		var dtl_CK_upload_006 = "Um mínimo de 5 palavras é o mínimo para uma descrição aceitável a fim transmitir seu conceito aos visitantes";
		var dtl_CK_upload_007 = "O título e a descrição possuem dados idênticos. Por favor forneça uma descrição mais exacta da imagem";
		var dtl_CK_upload_008 = "Selecione por favor uma ou várias categorias para a imagem!";
		var dtl_CK_upload_009 = "Por favor introduza algumas palavras-chave para a imagem!";
		var dtl_CK_upload_010 = "Esta imagem possui";
		var dtl_CK_upload_011 = "palavras";
		var dtl_CK_upload_012 = "O número máximo permitido é de 80";
		var dtl_CK_upload_013 = "Por favor leia os termos e condições e marque a checkbox se concordar!";
		var dtl_CK_upload_014 = "O valor mínimo é de 250, o valor máximo é de 25000!";
		var dtl_CK_upload_015 = "É necessário um valor numérico!";
		var dtl_CK_upload_016 = "Para activar a Licença de Venda dos Direitos para esta imagem necessita de introduzir um preço ou escolher o preço recomendado!";
		var dtl_CK_upload_keymaster_017 = "O valor mínimo é de 250, o valor máximo é de 25000!";
		var dtl_CK_upload_keymaster_018 = "Por favor leia os termos e condições e marque a checkbox se concordar";
		var dtl_CK_upload_keymaster_019 = "É necessário um valor numérico!";
		var dtl_CK_upload_keymaster_020 = "Para activar a Licença de Venda dos Direitos para esta imagem necessita de introduzir um preço ou escolher o preço recomendado!";
		var dtl_CK_freeupload_001 = "Por favor introduza um título para a imagem!";
		var dtl_CK_freeupload_002 = "Por favor introduza uma descrição para a imagem!";
		var dtl_CK_freeupload_003 = "Um mínimo de 5 palavras é o mínimo para uma descrição aceitável a fim transmitir seu conceito aos visitantes";
		var dtl_CK_freeupload_004 = "O título e a descrição possuem dados idênticos. Por favor forneça uma descrição mais exacta da imagem";
		var dtl_CK_freeupload_005 = "Por favor introduza algumas palavras-chave para a imagem!";
		var dtl_CK_freeupload_006 = "Esta imagem possui";
		var dtl_CK_freeupload_007 = "palavras";
		var dtl_CK_freeupload_008 = "O número máximo permitido é de 80";
		var dtl_validare_board_001 = "Por favor introduza o assunto!";
		var dtl_validare_board_002 = "Por favor escreva a mensagem!";
		var dtl_ConvertCF_001 = "Valor incorrecto dos créditos!";
		var dtl_ConvertCF_002 = "Por favor introduza um valor integral!";
		var dtl_PayCK_001 = "Valor do pagamento incorrecto!";
		var dtl_PayCK_002 = "Um pedido do pagamento não pode exceder $10.000!";
		var dtl_PayCK_003 = "Você não pode pedir um pagamento para este montante. Os seus registos de conta informam que possui apenas";
		var dtl_ImageDownCK_001 = "Por favor leia os termos e condições e marque a checkbox se concordar";
		var dtl_TermsCK_001 = "Por favor leia os termos e condições e marque a checkbox se concordar";
		var dtl_PassCK_001 = "Endereço de email incorrecto!";
		var dtl_ConfirmDelete_001 = "Tem a certeza que pretende eliminar este arquivo?";
		var dtl_DisableImage_001 = "Por favor seleccione SIM para desactivar a imagem";
		var dtl_DisableImage_002 = "Por favor descreva o motivo para desactivar a imagem";
		var dtl_BNewsAdd_001 = "Por favor escreva o seu texto!";
		var dtl_BNewsAdd_002 = "Por favor introduza no máximo";
		var dtl_BNewsAdd_003 = "caracteres neste campo!";
		var dtl_CollectionsSearch_000 = "a sua palavra-chave aqui";
		var dtl_CollectionsCheck_001 = "Seleccione por favor uma colecção!";
		var dtl_CollectionsAdd_001 = "Por favor insira o ID ou o endereço URL da primeira imagem!";
		var dtl_CollectionsAdd_002 = "Por favor introduza o título da coleção!";
		var dtl_CollectionsAdd_003 = "Por favor introduza a descrição!";
		var dtl_CollectionsAdd_004 = "Por favor introduza as palavras-chave!";
		var dtl_CollectionsSearch_001 = "Por favor introduza as palavras-chave!";
		var dtl_PaymentRequest_001 = "Por favor complete a sua identificação paypal!";
		var dtl_PaymentRequest_002 = "A sua identificação paypal está incorrecta!";
		var dtl_PaymentRequest_003 = "Por favor complete a sua identificação do bookersid!";
		var dtl_PaymentRequest_004 = "A sua identificação paypal está incorrecta!";
		var dtl_OMS_review_001 = "Por favor envie uma mensagem aos administradores do site!";
		var dtl_OMS_review_002 = "Por favor escreva ou escolha uma razão para recusar a imagem!";
		var dtl_LightboxAdd_001 = "Por favor não utilize caracteres especiais para o título da lightbox!";
		var dtl_LightboxAdd_002 = "Por favor introduza o título da lightbox!";
		var dtl_check_secure_form_001 = "Por favor introduza o Número do Cartão!";
		var dtl_check_secure_form_002 = "Por favor introduza a Data de Validade!";
		var dtl_check_secure_form_003 = "Por favor introduza o Código do Cartão!";
		var dtl_check_secure_form_004 = "Por favor introduza o Primeiro Nome!";
		var dtl_check_secure_form_005 = "Por favor introduza o Último Nome!";
		var dtl_check_secure_form_006 = "Por favor introduza a Morada!";
		var dtl_check_secure_form_007 = "Por favor introduza a Cidade!";
		var dtl_check_secure_form_008 = "Por favor introduza o Código Postal!";
		var dtl_check_secure_form_009 = "Por favor introduza o País!";
		var dtl_check_secure_form_010 = "Por favor introduza o Telefone!";
		var dtl_check_secure_form_011 = "Por favor introduza o Endereço de Email!";
		var dtl_requestAJAX_000 = "Iniciado...";
		var dtl_requestAJAX_001 = "A Carregar...";
		var dtl_requestAJAX_002 = "Erro: código do estado devolvido";
		var dtl_requestAJAXdoi_000 = "Inciado...";
		var dtl_requestAJAXdoi_001 = "A Remover...";
		var dtl_requestAJAXdoi_002 = "A Carregar...";
		var dtl_AddImage_000 = "Introduza o endereço de URL completo ou o ID Dreamstime da sua imagem:";
		var dtl_AddImageLeft_000 = "Introduza o ID Dreamstime da imagem:";
		var dtl_AddImageRight_000 = "Introduza o ID Dreamstime da imagem:";
		var dtl_AddURLB_000 = "Introduza o endereço de URL completo do seu link:";
		var dtl_AddURLB_001 = "Introduza o TEXTO para o seu link :";
		var dtl_AddURL_000 = "Introduza o endereço de URL completo do seu link:";
		var dtl_AddURL_001 = "Introduza o TEXTO para o seu link (opcional):";
		var dtl_NewsCharacters_000 = "Datilografe por favor o máximo";
		var dtl_NewsCharacters_001 = "caracteres neste campo!";
		break;
	case 'pl':
		var dlt_searchjs_000 = "wprowadź słowo kluczowe lub ID pliku";
		var dtl_SearchEmpty_000 = "wprowadź słowo kluczowe lub ID pliku";
		var dtl_SearchEmpty_001 = "wprowadź ID pliku";
		var dtl_SearchEmpty_002 = "Wprowadź słowo kluczowe.";
		var dtl_SearchEmptyFaq_000 = "wprowadź słowo kluczowe";
		var dtl_SearchSubmit_000 = "Wprowadź słowo kluczowe";
		var dtl_SearchSubmit_001 = "wprowadź słowo kluczowe lub ID pliku";
		var dtl_SearchSubmit_002 = "Wprowadź słowo kluczowe.";
		var dtl_SearchSubmit_003 = "Podaj przynajmniej dwa znaki.";
		var dtl_SearchSubmit_004 = "Następujące znaki";
		var dtl_SearchSubmit_005 = "są niedozwolone!";
		var dtl_SearchFaq_000 = "Wprowadź słowo kluczowe.";
		var dtl_SearchFaq_001 = "Podaj przynajmniej trzy znaki.";
		var dtl_SearchFaq_002 = "Następujące znaki";
		var dtl_SearchFaq_003 = "są niedozwolone!";
		var dtl_SearchFaq_004 = "wprowadź słowo kluczowe";
		var dtl_SearchForumSubmit_000 = "Wprowadź słowo kluczowe.";
		var dtl_SearchForumSubmit_001 = "Podaj przynajmniej trzy znaki.";
		var dtl_SearchForumSubmit_002 = "Następujące znaki";
		var dtl_SearchForumSubmit_003 = "są niedozwolone!";
		var dtl_SearchForumSubmit_004 = "przeszukaj wszystkie fora";
		var dtl_SearchForumSubmit_005 = "przeszukaj to forum";
		var dtl_SearchForumSubmit_006 = "przeszukaj wątki";
		var dtl_OMSSearch_001 = "Podaj przynajmniej trzy znaki.";
		var dtl_OMSSearch_002 = "Następujące znaki";
		var dtl_OMSSearch_003 = "są niedozwolone!";
		var dtl_FilterSubmit_000 = "Wprowadź słowo kluczowe.";
		var dtl_FilterSubmit_001 = "Podaj przynajmniej trzy znaki.";
		var dtl_FilterSubmit_002 = "Następujące znaki";
		var dtl_FilterSubmit_003 = "są niedozwolone!";
		var dtl_FilterSubmit_004 = "wprowadź słowo kluczowe";
		var dtl_SearchEmpty_003 = "przeszukaj wszystkie fora";
		var dtl_SearchEmpty_004 = "przeszukaj to forum";
		var dtl_SearchEmpty_005 = "przeszukaj wątki";
		var dtl_validare_001 = "Musisz wyrazić zgodę na postanowienia regulaminu!";
		var dtl_validare_002 = "Nieprawidłowy adres email!!";
		var dtl_validare_003 = "Wypełnij pole 'Pożądany login'!";
		var dtl_validare_004 = "Usuń spacje z pola 'Pożądany login'!";
		var dtl_validare_005 = "'Pożądany login' musi zawierać litery!";
		var dtl_validare_006 = "'Pożądany login' musi zawierać wyłącznie znaki alfanumeryczne!";
		var dtl_validare_007 = "Podaj prawidłowe hasło!";
		var dtl_validare_008 = "Wypełnij pole 'Imię'!";
		var dtl_validare_009 = "Wypełnij pole 'Nazwisko'!";
		var dtl_validare_010 = "Wypełnij pole 'Miasto'!";
		var dtl_validare_011 = "Wypełnij pole 'Adres'!";
		var dtl_validare_012 = "Wybierz kraj!";
		var dtl_validare_013 = "Wypełnij pole 'kod pocztowy'";
		var dtl_validare_014 = "Podaj prawidłowy numer telefonu!";
		var dtl_validare_015 = "Wypełnij pole 'Jak się o nas dowiedziałeś'!";
		var dtl_validare_contact_001 = "Wypełnij pole 'Imię'!";
		var dtl_validare_contact_002 = "Wypełnij pole 'Nazwisko'!";
		var dtl_validare_contact_003 = "Nieprawidłowy adres email!";
		var dtl_validare_contact_004 = "Wybierz kraj!";
		var dtl_validare_contact_005 = "Podaj prawidłowy numer telefonu!";
		var dtl_validare_contact_006 = "Wypełnij pole 'Przeglądarka'!";
		var dtl_validare_contact_007 = "Wypełnij pole 'System operacyjny'!";
		var dtl_validare_contact_008 = "Wypełnij pole 'Komentarz'";
		var dtl_validare_contact_009 = "Wybierz rodzaj problemu!";
		var dtl_CK_log_001 = "Podaj swój login!";
		var dtl_CK_log_002 = "Podaj swoje hasło!";
		var dtl_CK_image_001 = "Wybierz plik zdjęcia!";
		var dtl_CK_image_ag_001 = "Przeczytaj zasady Regulaminu i zaznacz kwadracik, że wyrażasz swoją zgodę.";
		var dtl_CK_image_ag_002 = "Wybierz plik zdjęcia!";
		var dtl_CK_upload_001 = "Minimalna wartość to 250, maksymalna to 25000!";
		var dtl_CK_upload_002 = "Wpisz tytuł zdjęcia!";
		var dtl_CK_upload_003 = "Tytuł jest za długi. Maksymalna ilość znaków to 30.";
		var dtl_CK_upload_004 = "Podaj opis zdjęcia!";
		var dtl_CK_upload_005 = "Opis jest za długi. Maksymalna ilość znaków to 1500.";
		var dtl_CK_upload_006 = "5 słów to minimum, które można uznać za wystarczające, aby poprawnie nakreślić koncept zdjęcia.";
		var dtl_CK_upload_007 = "Tytuł i opis są identyczne. Podaj dokładniejszy opis.";
		var dtl_CK_upload_008 = "Wybierz przynajmniej jedną kategorię!";
		var dtl_CK_upload_009 = "Podaj kilka słów kluczowych!";
		var dtl_CK_upload_010 = "To zdjęcie posiada";
		var dtl_CK_upload_011 = "słów kluczowych";
		var dtl_CK_upload_012 = "Maksymalna liczba słów to 80";
		var dtl_CK_upload_013 = "Przeczytaj zasady Regulaminu i zaznacz kwadracik, że wyrażasz swoją zgodę!";
		var dtl_CK_upload_014 = "Minimalna wartość to 250, maksymalna to 25000!";
		var dtl_CK_upload_015 = "Wpisz wartość numeryczną!";
		var dtl_CK_upload_016 = "Aby aktywować opcję Sprzedaż Praw Autorskich, musisz ustanowić swoją cenę lub użyć ceny rekomendowanej!";
		var dtl_CK_upload_keymaster_017 = "Minimalna wartość to 250, maksymalna to 25000!";
		var dtl_CK_upload_keymaster_018 = "Przeczytaj zasady Regulaminu i zaznacz kwadracik, że wyrażasz swoją zgodę!";
		var dtl_CK_upload_keymaster_019 = "Wpisz wartość numeryczną!";
		var dtl_CK_upload_keymaster_020 = "Aby aktywować opcję Sprzedaż Praw Autorskich, musisz ustanowić swoją cenę lub użyć ceny rekomendowanej!";
		var dtl_CK_freeupload_001 = "Wpisz tytuł zdjęcia!";
		var dtl_CK_freeupload_002 = "Podaj opis zdjęcia!";
		var dtl_CK_freeupload_003 = "5 słów to minimum, które można uznać za wystarczające, aby poprawnie nakreślić koncept zdjęcia.";
		var dtl_CK_freeupload_004 = "Tytuł i opis są identyczne. Podaj dokładniejszy opis.";
		var dtl_CK_freeupload_005 = "Podaj kilka słów kluczowych!";
		var dtl_CK_freeupload_006 = "To zdjęcie posiada";
		var dtl_CK_freeupload_007 = "słów kluczowych";
		var dtl_CK_freeupload_008 = "Maksymalna liczba słów to 80";
		var dtl_validare_board_001 = "Podaj temat!";
		var dtl_validare_board_002 = "Wpisz swoją wiadomość!";
		var dtl_ConvertCF_001 = "Nieprawidłowa ilość kredytów!";
		var dtl_ConvertCF_002 = "Podaj wartość całkowitą (bez ułamków)!";
		var dtl_PayCK_001 = "Nieprawidłowa suma płatności!";
		var dtl_PayCK_002 = "Żądanie wypłaty środków nie może przekraczać $10,000!";
		var dtl_PayCK_003 = "Nie możesz żądać wypłaty na tę kwotę. Aktualnie masz na koncie";
		var dtl_ImageDownCK_001 = "Przeczytaj zasady Regulaminu i zaznacz kwadracik, że wyrażasz swoją zgodę.";
		var dtl_TermsCK_001 = "Przeczytaj zasady Regulaminu i zaznacz kwadracik, że wyrażasz swoją zgodę.";
		var dtl_PassCK_001 = "Nieprawidłowy adres email!";
		var dtl_ConfirmDelete_001 = "Jesteś pewien, że chcesz usunąć ten plik?";
		var dtl_DisableImage_001 = "Potwierdź, że chcesz wycofać ten plik.";
		var dtl_DisableImage_002 = "Podaj powód wycofania pliku.";
		var dtl_BNewsAdd_001 = "Wpisz swój tekst!";
		var dtl_BNewsAdd_002 = "Wpisz przynajmniej";
		var dtl_BNewsAdd_003 = "znaków w tym polu!";
		var dtl_CollectionsCheck_001 = "Wybierz kolekcję!";
		var dtl_CollectionsAdd_001 = "Podaj ID lub adres URL pierwszego pliku do tej kolekcji!";
		var dtl_CollectionsAdd_002 = "Podaj tytuł kolekcji!";
		var dtl_CollectionsAdd_003 = "Podaj opis!";
		var dtl_CollectionsAdd_004 = "Podaj słowa kluczowe!";
		var dtl_CollectionsSearch_000 = "tu wpisz słowo kluczowe";
		var dtl_CollectionsSearch_001 = "Podaj słowa kluczowe!";
		var dtl_PaymentRequest_001 = "Podaj swoje Paypal ID!";
		var dtl_PaymentRequest_002 = "Podane Paypal ID jest nieprawidłowe!";
		var dtl_PaymentRequest_003 = "Podaj swoje bookers ID!";
		var dtl_PaymentRequest_004 = "Podane Paypal ID jest nieprawidłowe!";
		var dtl_OMS_review_001 = "Wpisz swoją wiadomość do admina!";
		var dtl_OMS_review_002 = "Wpisz lub wybierz powód odrzucenia zdjęcia!";
		var dtl_LightboxAdd_001 = "Nie używaj znaków specjalnych w tytule lightboxu!";
		var dtl_LightboxAdd_002 = "Wpisz tytuł lightboxu!";
		var dtl_check_secure_form_001 = "Podaj numer karty!";
		var dtl_check_secure_form_002 = "Podaj datę ważności karty!";
		var dtl_check_secure_form_003 = "Podaj kod karty!";
		var dtl_check_secure_form_004 = "Podaj imię!";
		var dtl_check_secure_form_005 = "Podaj nazwisko!";
		var dtl_check_secure_form_006 = "Podaj adres!";
		var dtl_check_secure_form_007 = "Podaj miasto!";
		var dtl_check_secure_form_008 = "Podaj kod pocztowy!";
		var dtl_check_secure_form_009 = "Podaj kraj!";
		var dtl_check_secure_form_010 = "Podaj numer telefonu!";
		var dtl_check_secure_form_011 = "Podaj adres email!";
		var dtl_requestAJAX_000 = "W toku...";
		var dtl_requestAJAX_001 = "Ładuję...";
		var dtl_requestAJAX_002 = "Błąd: kod";
		var dtl_requestAJAXdoi_000 = "W toku...";
		var dtl_requestAJAXdoi_001 = "Usuwam...";
		var dtl_requestAJAXdoi_002 = "Ładuję...";
		var dtl_AddImage_000 = "Wprowadż pełny adres URL lub ID twojego zdjęcia:";
		var dtl_AddImageLeft_000 = "Wprowadź ID zdjęcia:";
		var dtl_AddImageRight_000 = "Wprowadź ID zdjęcia:";
		var dtl_AddURLB_000 = "Podaj pełny adres URL dla linka :";
		var dtl_AddURLB_001 = "Wprowadź TEKST dla linka :";
		var dtl_AddURL_000 = "Podaj pełny adres URL dla linka :";
		var dtl_AddURL_001 = "Wprowadź TEKST dla linka (opcjonalnie) :";
		var dtl_NewsCharacters_000 = "Wpisz przynajmniej";
		var dtl_NewsCharacters_001 = "znaków w tym polu!";
	default:
		var dlt_searchjs_000 = "enter keyword or file ID";
		var dtl_SearchEmpty_000 = "enter keyword or file ID";
		var dtl_SearchEmpty_001 = "enter file ID";
		var dtl_SearchEmpty_002 = "Please enter a keyword.";
		var dtl_SearchEmptyFaq_000 = "your keyword here";
		var dtl_SearchSubmit_000 = "your keyword here";
		var dtl_SearchSubmit_001 = "enter keyword or file ID";
		var dtl_SearchSubmit_002 = "Please enter a keyword.";
		var dtl_SearchSubmit_003 = "Minimum 2 characters required.";
		var dtl_SearchSubmit_004 = "Sorry, but the following characters";
		var dtl_SearchSubmit_005 = "are not allowed!";
		var dtl_SearchFaq_000 = "Please enter a keyword.";
		var dtl_SearchFaq_001 = "Minimum 3 characters required.";
		var dtl_SearchFaq_002 = "Sorry, but the following characters";
		var dtl_SearchFaq_003 = "are not allowed!";
		var dtl_SearchFaq_004 = "your keyword here";
		var dtl_SearchForumSubmit_000 = "Please enter a keyword.";
		var dtl_SearchForumSubmit_001 = "Minimum 3 characters required.";
		var dtl_SearchForumSubmit_002 = "Sorry, but the following characters";
		var dtl_SearchForumSubmit_003 = "are not allowed!";
		var dtl_SearchForumSubmit_004 = "search all boards";
		var dtl_SearchForumSubmit_005 = "search this board";
		var dtl_SearchForumSubmit_006 = "search threads";
		var dtl_OMSSearch_001 = "Minimum 3 characters required.";
		var dtl_OMSSearch_002 = "Sorry, but the following characters";
		var dtl_OMSSearch_003 = "are not allowed!";
		var dtl_FilterSubmit_000 = "Please enter a keyword.";
		var dtl_FilterSubmit_001 = "Minimum 3 characters required.";
		var dtl_FilterSubmit_002 = "Sorry, but the following characters";
		var dtl_FilterSubmit_003 = "are not allowed!";
		var dtl_FilterSubmit_004 = "your keyword here";
		var dtl_SearchEmpty_003 = "search all boards";
		var dtl_SearchEmpty_004 = "search this board";
		var dtl_SearchEmpty_005 = "search threads";
		var dtl_validare_001 = "You must agree to the terms and conditions!";
		var dtl_validare_002 = "Incorrect email address!!";
		var dtl_validare_003 = "Please insert 'Desired login'!";
		var dtl_validare_004 = "Please remove spaces from 'Desired login'!";
		var dtl_validare_005 = "'Desired login' must contain characters too!";
		var dtl_validare_006 = "'Desired login' must only contain alphanumeric characters!";
		var dtl_validare_007 = "Please insert a correct password!";
		var dtl_validare_008 = "Please insert your 'First name'!";
		var dtl_validare_009 = "Please insert your 'Last name'!";
		var dtl_validare_010 = "Please insert 'City'!";
		var dtl_validare_011 = "Please insert 'Address'!";
		var dtl_validare_012 = "Please select your country!";
		var dtl_validare_013 = "Please insert a valid 'zip code'";
		var dtl_validare_014 = "Please insert a correct phone number!";
		var dtl_validare_015 = "Please type 'How did you find us'!";
		var dtl_validare_contact_001 = "Please insert your 'First name'!";
		var dtl_validare_contact_002 = "Please insert your 'Last name'!";
		var dtl_validare_contact_003 = "Incorrect email address!";
		var dtl_validare_contact_004 = "Please select your country!";
		var dtl_validare_contact_005 = "Please insert a correct phone number!";
		var dtl_validare_contact_006 = "Please insert 'Browser'!";
		var dtl_validare_contact_007 = "Please insert 'System'!";
		var dtl_validare_contact_008 = "Please type your comment!";
		var dtl_validare_contact_009 = "Please select type of problem!";
		var dtl_CK_log_001 = "Please insert your login!";
		var dtl_CK_log_002 = "Please insert password!";
		var dtl_CK_image_001 = "Please choose a image file!";
		var dtl_CK_image_ag_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_CK_image_ag_002 = "Please choose a image file!";
		var dtl_CK_upload_001 = "Minimum value is 250, maximum value is 25000!";
		var dtl_CK_upload_002 = "Please type an image title!";
		var dtl_CK_upload_003 = "The title is too long. Maximum number of characters is 30.";
		var dtl_CK_upload_004 = "Please type an image description!";
		var dtl_CK_upload_005 = "The description is too long. Maximum number of characters is 1500.";
		var dtl_CK_upload_006 = "A minimum of 5 words is the least for a decent description in order to transmit your concept to the viewers.";
		var dtl_CK_upload_007 = "Title and description have identical data. Please provide a more accurate description of the image.";
		var dtl_CK_upload_008 = "Please select one or more categories for image!";
		var dtl_CK_upload_009 = "Please type few keywords for image!";
		var dtl_CK_upload_010 = "This image has";
		var dtl_CK_upload_011 = "words";
		var dtl_CK_upload_012 = "The maximum alowed number is 80";
		var dtl_CK_upload_013 = "Please read the terms and conditions and tick the checkbox if you agree!";
		var dtl_CK_upload_014 = "Minimum value is 250, maximum value 25000!";
		var dtl_CK_upload_015 = "Numeric value required!";
		var dtl_CK_upload_016 = "For activating Sell the Rights license for this image you need to set a price or use recommended price!";
		var dtl_CK_upload_keymaster_017 = "Minimum value is 250, maximum value is 25000!";
		var dtl_CK_upload_keymaster_018 = "Please read the terms and conditions and tick the checkbox if you agree!";
		var dtl_CK_upload_keymaster_019 = "Numeric value required!";
		var dtl_CK_upload_keymaster_020 = "For activating Sell the Rights license for this image you need to set a price or use recommended price!";
		var dtl_CK_freeupload_001 = "Please type an image title!";
		var dtl_CK_freeupload_002 = "Please type an image description!";
		var dtl_CK_freeupload_003 = "A minimum of 5 words is the least for a decent description in order to transmit your concept to the viewers.";
		var dtl_CK_freeupload_004 = "Title and description have identical data. Please provide a more accurate description of the image.";
		var dtl_CK_freeupload_005 = "Please type few keywords for image!";
		var dtl_CK_freeupload_006 = "This image has";
		var dtl_CK_freeupload_007 = "words";
		var dtl_CK_freeupload_008 = "The maximum alowed number is 80";
		var dtl_validare_board_001 = "Please type the subject!";
		var dtl_validare_board_002 = "Please type the message!";
		var dtl_ConvertCF_001 = "Incorrect credits value!";
		var dtl_ConvertCF_002 = "Please insert an integer value!";
		var dtl_PayCK_001 = "Incorrect payment value!";
		var dtl_PayCK_002 = "A payment request cannot exceed $10,000!";
		var dtl_PayCK_003 = "You cannot request a payment for this amount. Your account records show you only have";
		var dtl_ImageDownCK_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_TermsCK_001 = "Please read the terms and conditions and tick the checkbox if you agree.";
		var dtl_PassCK_001 = "Incorrect email address!";
		var dtl_ConfirmDelete_001 = "Are you sure you want to delete this file?";
		var dtl_DisableImage_001 = "Please select YES to disable image";
		var dtl_DisableImage_002 = "Please write a reason to disable image";
		var dtl_BNewsAdd_001 = "Please type your text!";
		var dtl_BNewsAdd_002 = "Please type maximum";
		var dtl_BNewsAdd_003 = "characters in this field!";
		var dtl_CollectionsCheck_001 = "Please select a collection!";
		var dtl_CollectionsAdd_001 = "Please paste the ID or URL of the first image!";
		var dtl_CollectionsAdd_002 = "Please type title of collection!";
		var dtl_CollectionsAdd_003 = "Please type description!";
		var dtl_CollectionsAdd_004 = "Please type keywords!";
		var dtl_CollectionsSearch_000 = "your keyword here";
		var dtl_CollectionsSearch_001 = "Please type keywords!";
		var dtl_PaymentRequest_001 = "Please complete your paypal ID!";
		var dtl_PaymentRequest_002 = "The provided paypal ID is incorrect!";
		var dtl_PaymentRequest_003 = "Please complete your bookersid ID!";
		var dtl_PaymentRequest_004 = "The provided paypal ID is incorrect!";
		var dtl_OMS_review_001 = "Please type message to site admins!";
		var dtl_OMS_review_002 = "Please type or choose reason to refuse image!";
		var dtl_LightboxAdd_001 = "Please don't use special characters for lightbox title!";
		var dtl_LightboxAdd_002 = "Please type title of the lightbox!";
		var dtl_check_secure_form_001 = "Please insert Card Number!";
		var dtl_check_secure_form_002 = "Please insert Expiration Date!";
		var dtl_check_secure_form_003 = "Please insert Card Code!";
		var dtl_check_secure_form_004 = "Please insert First Name!";
		var dtl_check_secure_form_005 = "Please insert Last Name!";
		var dtl_check_secure_form_006 = "Please insert Address!";
		var dtl_check_secure_form_007 = "Please insert City!";
		var dtl_check_secure_form_008 = "Please insert Zip/Postal Code!";
		var dtl_check_secure_form_009 = "Please insert Country!";
		var dtl_check_secure_form_010 = "Please insert Phone!";
		var dtl_check_secure_form_011 = "Please insert Email!";
		var dtl_requestAJAX_000 = "Started...";
		var dtl_requestAJAX_001 = "Loading...";
		var dtl_requestAJAX_002 = "Error: returned status code";
		var dtl_requestAJAXdoi_000 = "Started...";
		var dtl_requestAJAXdoi_001 = "Removing...";
		var dtl_requestAJAXdoi_002 = "Loading...";
		var dtl_AddImage_000 = "Enter the full URL or the Dreamstime ID of your image:";
		var dtl_AddImageLeft_000 = "Enter the Dreamstime file ID of the image:";
		var dtl_AddImageRight_000 = "Enter the Dreamstime file ID of the image:";
		var dtl_AddURLB_000 = "Enter the full URL of your link :";
		var dtl_AddURLB_001 = "Enter the TEXT for your link :";
		var dtl_AddURL_000 = "Enter the full URL of your link :";
		var dtl_AddURL_001 = "Enter the TEXT for your link (optional) :";
		var dtl_NewsCharacters_000 = "Please type maximum";
		var dtl_NewsCharacters_001 = "characters in this field!";
	}
if (dtl_SearchSubmit_006 == null)
	var dtl_SearchSubmit_006 = "";

// badges (script.js)
function onColor(blah)
	{
	blah.style.backgroundColor='E7E7E7';
	}

function offColor(blah)
	{
	blah.style.backgroundColor='FFFFFF';
	}

function onColor2(blah)
	{
	blah.style.backgroundColor='CCF261';
	}

function offColor2(blah)
	{
	blah.style.backgroundColor='C0E850';
	}

// validations (valid63.js)
function trimString (str) {
  str = this != window? this : str;
  return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

	function CheckPhone(tel)
	{
		allowed="+()1234567890.-/";
		for (i = 0; i < tel.length; i++)
		{
			var c=tel.charAt(i);
			// test for spaces
			if(c != " ")
			{
				if(allowed.indexOf(c)==-1)
					return false;
			}
		}
		return true;
	}


	function validare(param)
	{
	    var M_login,M_password,M_password_cf,M_firstname,M_lastname,M_email,M_city,M_country,M_zip_code,M_phone,M_address;

 	    if(param!=1)
		{
		    M_login=document.contfrm.M_login;
			M_password=document.contfrm.M_password;
 		   // M_password_cf=document.contfrm.M_password_cf;
			//M_email_cf = document.contfrm.M_email_cf;
		}
	    M_firstname=document.contfrm.M_firstname;
	    M_lastname=document.contfrm.M_lastname;
	    M_email=document.contfrm.M_email;
	    M_city=document.contfrm.M_city;
	    M_address=document.contfrm.M_address;
	    M_country=document.contfrm.M_country;
	    M_zip_code=document.contfrm.M_zip_code;
	    M_phone=document.contfrm.M_phone;
	    M_how_find=document.contfrm.M_how_find;



		if(param == 0)
			{
			if(document.contfrm.terms.checked == false)
				{
				alert(dtl_validare_001);
				return false;
				}
			}
		if(param!=1)
		{
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(M_email.value)))
		    {
		    	alert(dtl_validare_002);
				M_email.focus();
				M_email.select();
				return false;
		    }
	  	    if (M_login.value.length==0)
	  	    {
	   	    	alert (dtl_validare_003);
				M_login.focus();
	    		M_login.select();
	    		return false;
	   	    }
			else
			{
				//detect spaces
				splitlogin = M_login.value.split(" ");
				if(splitlogin.length > 1 && 0)
				{
		   	    	alert (dtl_validare_004);
					M_login.focus();
		    		M_login.select();
	    			return false;
				}
				else
				{
				if(CheckPhone(M_login.value))
					{
		   	    	alert (dtl_validare_005);
					M_login.focus();
		    		M_login.select();
	    			return false;
					}
				if (!M_login.value.match(/^[a-zA-Z0-9]+$/))
					{
					alert (dtl_validare_006);
					M_login.focus();
		    		M_login.select();
	    			return false;
					}
				}
			}
		    if (M_password.value.length<6)
	  	    {
		   		alert (dtl_validare_007);
		   		M_password.focus();
	    		M_password.select();
				return false;
		    }

		}

		if (document.contfrm.M_all.value=='Y')
		{
	  	    if (M_firstname.value.length<2)
	  	    {
	   	    	alert (dtl_validare_008);
				M_firstname.focus();
	    		M_firstname.select();
	    		return false;
	   	    }
	  	    if (M_lastname.value.length<2)
	  	    {
	   	    	alert (dtl_validare_009);
				M_lastname.focus();
	    		M_lastname.select();
	    		return false;
	   	    }
			if (param == 1) {
				if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(M_email.value)))
		    	{
			    	alert(dtl_validare_002);
					M_email.focus();
					M_email.select();
					return false;
		    	}
		    }

	  	    if (M_city.value.length==0)
	  	    {
	   	    	alert (dtl_validare_010);
				M_city.focus();
	    		M_city.select();
	    		return false;
	   	    }
	  	    if (M_address.value.length==0)
	  	    {
	   	    	alert (dtl_validare_011);
				M_address.focus();
	    		M_address.select();
	    		return false;
	   	    }
		    if(document.forms['contfrm'].elements['M_country'].value==0)
		    {
				alert(dtl_validare_012);
				return false;
		    }
			if(M_zip_code.value.length==0)
			{
				alert (dtl_validare_013);
				M_zip_code.focus();
				M_zip_code.select();
				return false;
			}
			if(M_phone.value.length==0 || !CheckPhone(M_phone.value))
			{
				alert (dtl_validare_014);
				M_phone.focus();
				M_phone.select();
				return false;
		    }
			
		}
   	}

	function validare_contact()
	{
	    var M_firstname,M_lastname,M_email,M_city,M_country,M_phone,M_comments;
		document.contactfrm.M_browser.value = trimString(document.contactfrm.M_browser.value);
		document.contactfrm.M_system.value = trimString(document.contactfrm.M_system.value);
	    M_firstname=document.contactfrm.M_firstname;
	    M_lastname=document.contactfrm.M_lastname;
	    M_email=document.contactfrm.M_email;
	    M_city=document.contactfrm.M_city;
	    M_browser=document.contactfrm.M_browser;
	    M_system=document.contactfrm.M_system;
	    M_country=document.contactfrm.M_country;
	    M_goesto=document.contactfrm.M_goesto;
	    M_phone=document.contactfrm.M_phone;
	    M_comments=document.contactfrm.M_comments;

  	    if (M_firstname.value.length==0)
  	    {
   	    	alert (dtl_validare_contact_001);
			M_firstname.focus();
    		M_firstname.select();
    		return false;
   	    }
  	    if (M_lastname.value.length==0)
  	    {
   	    	alert (dtl_validare_contact_002);
			M_lastname.focus();
    		M_lastname.select();
    		return false;
   	    }
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(M_email.value)))
	    {
	    	alert(dtl_validare_contact_003);
			M_email.focus();
			M_email.select();
			return false;
	    }
	    if (M_city.value.length==0)
	  	    {
	   	    	alert (dtl_validare_010);
				M_city.focus();
	    		M_city.select();
	    		return false;
	   	    }
  	    if(document.forms['contactfrm'].elements['M_country'].value==0)
	    {
			alert(dtl_validare_contact_004);
			return false;
	    }
		if(M_phone.value.length!=0)
		{
			if(!CheckPhone(M_phone.value))
			{
				alert (dtl_validare_contact_005);
				M_phone.focus();
				M_phone.select();
				return false;
			}
	    }
  	    if (M_browser.value.length==0)
  	    {
   	    	alert (dtl_validare_contact_006);
			M_browser.focus();
    		M_browser.select();
    		return false;
   	    }
  	    if (M_system.value.length==0)
  	    {
   	    	alert (dtl_validare_contact_007);
			M_system.focus();
    		M_system.select();
    		return false;
   	    }
  	    if (M_comments.value.length==0)
  	    {
   	    	alert (dtl_validare_contact_008);
			M_comments.focus();
    		M_comments.select();
    		return false;
   	    }
  	    if(document.forms['contactfrm'].elements['M_goesto'].value==0)
	    {
			alert(dtl_validare_contact_009);
			return false;
	    }
   	}

	function CK_log(frm)
	{
	    var uname,pass;
	    uname=document.forms[frm].uname;
 	    pass=document.forms[frm].pass;
  	    if (uname.value.length==0)
  	    {
   	    	alert (dtl_CK_log_001);
			uname.focus();
    		uname.select();
    		return false;
   	    }
  	    if (pass.value.length==0)
  	    {
   	    	alert (dtl_CK_log_002);
			pass.focus();
    		pass.select();
    		return false;
   	    }
	}

	function CK_image(frm_u)
	{
	    var up_image;
	    up_image = document.forms[frm_u].up_image;
  	    if (up_image.value.length==0)
  	    {
   	    	alert (dtl_CK_image_001);
			up_image.focus();
    		up_image.select();
    		return false;
   	    }
		else
		{
			document.all['td2'].style.display='inline';
			return true;
		}
	}

function validSum(sText)
	{
   var ValidChars = "0123456789";
   var IsNumber=true;
   var Char;


   for (i = 0; i < sText.length && IsNumber == true; i++)
      {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsNumber = false;
         }
      }
   if (!IsNumber)
	   	{

		return false;
		}
   return IsNumber;
   }


function countnrwords(stringu)
	{
	return CountWords(stringu, true, true);
	}

function CountWords (this_field, show_word_count, show_char_count) {
if (show_word_count == null) {
show_word_count = true;
}
if (show_char_count == null) {
show_char_count = false;
}
var char_count = this_field.length;
var fullStr = this_field + " ";
var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
var splitString = cleanedStr.split(" ");
var word_count = splitString.length -1;
if (fullStr.length <2) {
word_count = 0;
}
if (word_count == 1) {
wordOrWords = " word";
}
else {
wordOrWords = " words";
}
return word_count;
}

	function CK_freeupload(T)
	{
	    var name,description,keywords;
	    name=document.uploadfrm1.M_title;
	    description=document.uploadfrm1.M_description;
	    keywords=document.uploadfrm1.M_keywords;

		if (name.value.length==0)
  	    {
   	    	alert (dtl_CK_freeupload_001);
			name.focus();
    		name.select();
    		return false;
   	    }
  	    if (description.value.length==0)
  	    {
   	    	alert (dtl_CK_freeupload_002);
			description.focus();
    		description.select();
    		return false;
   	    }
		if (countnrwords(description.value)<5)
			{
			alert (dtl_CK_freeupload_003);
			description.focus();
    		description.select();
    		return false;
			}
		if(name.value == description.value)
		{
			alert(dtl_CK_freeupload_004);
			description.focus();
    		description.select();
    		return false;
		}

  	    if (keywords.value.length==0)
  	    {
   	    	alert (dtl_CK_freeupload_005);
			keywords.focus();
    		keywords.select();
    		return false;
   	    }
		if (countnrwords(keywords.value)>80)
  	    {
   	    	alert (dtl_CK_freeupload_006+" "+countnrwords(keywords.value)+" "+dtl_CK_freeupload_007+". "+dtl_CK_freeupload_008);
			keywords.focus();
    		keywords.select();
    		return false;
   	    }


		return;
	}

	function validare_board()
	{
	    var M_subject,M_message;
	    M_subject=document.boardfrm.M_subject;
	    M_message=document.boardfrm.M_message;

  	    if (M_subject.value.length==0)
  	    {
   	    	alert ("Please type the subject!");
			M_subject.focus();
    		M_subject.select();
    		return false;
   	    }
  	    if (M_message.value.length==0)
  	    {
   	    	alert ("Please type the message!");
			M_message.focus();
    		M_message.select();
    		return false;
   	    }
	}

	function ConvertCF()
	{
	    var convertvalue;
	    convertvalue=document.convertfrm.convertvalue;

  	    if (convertvalue.value.length==0 || convertvalue.value==0 || isNaN(convertvalue.value))
  	    {
   	    	alert (dtl_ConvertCF_001);
			convertvalue.focus();
    		convertvalue.select();
    		return false;
   	    }


		if (convertvalue.value!=Math.floor(convertvalue.value))
  	    {
   	    	alert (dtl_ConvertCF_002);
			convertvalue.focus();
    		convertvalue.select();
    		return false;
   	    }
	return true;
	}

	function PayCK(maxval)
	{
	    var payvalue;
	    payvalue=document.payfrm.payvalue;
  	    if (payvalue.value.length==0 || payvalue.value==0 || isNaN(payvalue.value))
  	    {
   	    	alert (dtl_PayCK_001);
			payvalue.focus();
    		payvalue.select();
    		return false;
   	    }

		if (payvalue.value>maxval)
  	    {
   	    	alert (dtl_PayCK_003+" $"+maxval+".");
			payvalue.focus();
    		payvalue.select();
    		return false;
   	    }
	}

	function DisableImage(frm)
	{
		var rd_confirm = document.forms[frm].rd_confirm;
		var M_reason = document.forms[frm].M_reason.value;
		if(!rd_confirm[0].checked)
		{
			alert(dtl_DisableImage_001);
			return false;
		}
		if(M_reason.length < 3)
		{
			alert(dtl_DisableImage_002);
			return false;
		}
		return true;
	}

	function BNewsAdd(field)
	{
		var news = document.forms['frm_forum'].message;
		if(news.value.length == 0)
		{
			alert(dtl_BNewsAdd_001);
			news.focus();
			news.select();
			return false;
		}
		else
		{
			var MaxCharacters = 1500;
			if (news.value.length > MaxCharacters)
			{
				alert(dtl_BNewsAdd_002+' '+MaxCharacters+' '+dtl_BNewsAdd_003);
				news.value = news.value.substring(0, MaxCharacters);
				return false;
			}
		}
	}

	function CollectionsCheck(forma,imageid)
	{
		var collectionid = forma.collectionid.value;
		if(collectionid == 0)
		{
			alert(dtl_CollectionsCheck_001);
			return false;
		}
		if(collectionid == -1)
		{
			forma.do_action.value="";
			forma.collectionid.value="";
			forma.action = "collections.php?image_identifier="+imageid+"#point";
		}
	}

	function CollectionsAdd(forma,mode)
	{
		if(mode == 1)
			var image_identifier = forma.image_identifier;
		var ctitle = forma.ctitle;
		var cdescription = forma.cdescription;
		var ckeywords = forma.ckeywords;

		if(mode == 1)
		{
			if(image_identifier.value.length == 0)
			{
				alert(dtl_CollectionsAdd_001);
				image_identifier.focus();
				image_identifier.select();
				return false;
			}
		}
		if(ctitle.value.length == 0)
		{
			alert(dtl_CollectionsAdd_002);
			ctitle.focus();
			ctitle.select();
			return false;
		}
		if(cdescription.value.length == 0)
		{
			alert(dtl_CollectionsAdd_003);
			cdescription.focus();
			cdescription.select();
			return false;
		}
		if(ckeywords.value.length == 0)
		{
			alert(dtl_CollectionsAdd_004);
			ckeywords.focus();
			ckeywords.select();
			return false;
		}
	}

	function CollectionsSearch(forma)
	{
		var srh_coll = forma.srh_coll;
		if(srh_coll.value.length == 0 || srh_coll.value==dtl_CollectionsSearch_000)
		{
			alert(dtl_CollectionsSearch_001);
			srh_coll.focus();
			srh_coll.select();
			return false;
		}
	}

	function PaymentRequest(forma)
	{
		var paytype = forma.paytype;
		var paypalid = forma.paypalid;
		var bookersid = forma.bookersid;

		if(paytype[0].checked)
		{
			if(paypalid.value == "")
			{
				alert(dtl_PaymentRequest_001);
				paypalid.focus();
				paypalid.select();
				return false;
			}
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(paypalid.value)))
			{
				alert(dtl_PaymentRequest_002);
				paypalid.focus();
				paypalid.select();
				return false;
			}
		}
		if(paytype[1].checked)
			{
			if(bookersid.value == "")
			{
				alert(dtl_PaymentRequest_003);
				bookersid.focus();
				bookersid.select();
				return false;
			}
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(bookersid.value)))
			{
				alert(dtl_PaymentRequest_004);
				bookersid.focus();
				bookersid.select();
				return false;
			}
			}
		return true;
	}

	function LightboxAdd(forma)
	{
		var lname = forma.name;
		if(lname.value.length == 0)
		{
			alert(dtl_LightboxAdd_002);
			lname.focus();
			lname.select();
			return false;
		}

	}

function check_secure_form()
	{
	var x_card_num = document.frm_secure.x_card_num;
	var x_exp_date1 = document.frm_secure.x_exp_date1;
	var x_exp_date2 = document.frm_secure.x_exp_date2;
	var x_card_code = document.frm_secure.x_card_code;
	var x_first_name = document.frm_secure.x_first_name;
	var x_last_name = document.frm_secure.x_last_name;
	var x_address = document.frm_secure.x_address;
	var x_city = document.frm_secure.x_city;
	var x_zip = document.frm_secure.x_zip;
	var x_country = document.frm_secure.x_country;
	var x_phone = document.frm_secure.x_phone;
	var x_email = document.frm_secure.x_email;


	if(x_card_num.value == '')
		{
			alert(dtl_check_secure_form_001);
			x_card_num.focus();
			x_card_num.select();
			return false;
		}

	if(x_exp_date1.value == '--' || x_exp_date2.value == '----')
		{
			alert(dtl_check_secure_form_002);
			return false;
		}

	if(x_card_code.value == '')
		{
			alert(dtl_check_secure_form_003);
			x_card_code.focus();
			x_card_code.select();
			return false;
		}

    if(x_first_name.value == '')
		{
			alert(dtl_check_secure_form_004);
			x_first_name.focus();
			x_first_name.select();
			return false;
		}
	if(x_last_name.value == '')
		{
			alert(dtl_check_secure_form_005);
			x_last_name.focus();
			x_last_name.select();
			return false;
		}

	if(x_address.value == '')
		{
			alert(dtl_check_secure_form_006);
			x_address.focus();
			x_address.select();
			return false;
		}

	if(x_city.value == '')
		{
			alert(dtl_check_secure_form_007);
			x_city.focus();
			x_city.select();
			return false;
		}

	if(x_zip.value == '')
		{
			alert(dtl_check_secure_form_008);
			x_zip.focus();
			x_zip.select();
			return false;
		}

	if(x_country.options.selectedIndex < 0 || (x_country.options.selectedIndex >= 0 && (x_country.options[x_country.selectedIndex].value == '' || x_country.options[x_country.selectedIndex].value == 0)))
		{
			alert(dtl_check_secure_form_009);
			x_country.focus();
			//x_country.select();
			return false;
		}

	if(x_phone.value == '')
		{
			alert(dtl_check_secure_form_010);
			x_phone.focus();
			x_phone.select();
			return false;
		}

    if(x_email.value == '')
		{
			alert(dtl_check_secure_form_011);
			x_email.focus();
			x_email.select();
			return false;
		}
	document.getElementById('gobutton').disabled=true;
	return true;
	}

function validare_anonymous(param)
	{
	    var M_login,M_password,M_password_cf,M_firstname,M_lastname,M_email,M_city,M_country,M_zip_code,M_phone,M_address, terms;

 	    if(param!=1)
		{
		    M_login=document.frm_secure.M_login;
			M_password=document.frm_secure.M_password;

		}
		var M_card_num = document.frm_secure.M_card_num;
		var M_exp_date1 = document.frm_secure.M_exp_date1;
		var M_exp_date2 = document.frm_secure.M_exp_date2;
		var M_card_code = document.frm_secure.M_card_code;
	    M_firstname=document.frm_secure.M_firstname;
	    M_lastname=document.frm_secure.M_lastname;
	    M_email=document.frm_secure.M_email;
	    M_city=document.frm_secure.M_city;
	    M_state=document.frm_secure.M_state;
	    M_address=document.frm_secure.M_address;
	    M_country=document.frm_secure.M_country;
	    M_zip_code=document.frm_secure.M_zip_code;
	    M_phone=document.frm_secure.M_phone;
		terms=document.frm_secure.terms;


		if(param!=1)
		{
		if(M_card_num.value == '')
		{
			alert(dtl_check_secure_form_001);
			M_card_num.focus();
			M_card_num.select();
			return false;
		}

		if(M_exp_date1.value == '--' || M_exp_date2.value == '----')
			{
				alert(dtl_check_secure_form_002);
				return false;
			}

		if(M_card_code.value == '')
			{
				alert(dtl_check_secure_form_003);
				M_card_code.focus();
				M_card_code.select();
				return false;
			}
		if (M_login.value.length==0)
	  	    {
	   	    	alert (dtl_validare_003);
				M_login.focus();
	    		M_login.select();
	    		return false;
	   	    }
			else
			{
				//detect spaces
				splitlogin = M_login.value.split(" ");
				if(splitlogin.length > 1)
				{
		   	    	alert (dtl_validare_004);
					M_login.focus();
		    		M_login.select();
	    			return false;
				}
				else
				{
				if(CheckPhone(M_login.value))
					{
		   	    	alert (dtl_validare_005);
					M_login.focus();
		    		M_login.select();
	    			return false;
					}
				if (!M_login.value.match(/^[a-zA-Z0-9]+$/))
					{
					alert (dtl_validare_006);
					M_login.focus();
		    		M_login.select();
	    			return false;
					}
				}
			}
			if (M_password.value.length<6)
	  	    {
		   		alert (dtl_validare_007);
		   		M_password.focus();
	    		M_password.select();
				return false;
		    }
		    if (M_password.value == M_login.value) {
		    	alert ("'Desired login' and password must be different.");
		   		M_password.focus();
	    		M_password.select();
				return false;
		    }
			if (M_firstname.value.length<2)
	  	    {
	   	    	alert (dtl_validare_008);
				M_firstname.focus();
	    		M_firstname.select();
	    		return false;
	   	    }
	  	    if (M_lastname.value.length<2)
	  	    {
	   	    	alert (dtl_validare_009);
				M_lastname.focus();
	    		M_lastname.select();
	    		return false;
	   	    }
			 if (M_address.value.length==0)
	  	    {
	   	    	alert (dtl_validare_011);
				M_address.focus();
	    		M_address.select();
	    		return false;
	   	    }
	   	     if (M_city.value.length==0)
	  	    {
	   	    	alert (dtl_validare_010);
				M_city.focus();
	    		M_city.select();
	    		return false;
	   	    }

	   	    if(M_zip_code.value.length==0)
			{
				alert (dtl_validare_013);
				M_zip_code.focus();
				M_zip_code.select();
				return false;
			}
			 if(document.forms['frm_secure'].elements['M_country'].value==0)
		    {
				alert(dtl_validare_012);
				return false;
		    }

			if(M_phone.value.length==0 || !CheckPhone(M_phone.value))
			{
				alert (dtl_validare_014);
				M_phone.focus();
				M_phone.select();
				return false;
		    }
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(M_email.value)))
		    {
		    	alert(dtl_validare_002);
				M_email.focus();
				M_email.select();
				return false;
		    }
		if (terms.checked == false)
				{
				alert(dtl_validare_001);
				return false;
				}


		}

   	}
	
// stuff (stuff10.js)
function MM_openBrWindow(theURL,winName,features)
{
	  window.name="main";
	  window.open(theURL,winName,features);
}

function SearchEmpty(fm,pm)
{
	  // fm = html form
      var srh_field;
	  if(pm == 1) srh_field=document.forms[fm].srh_field;
	  if(pm == 2) srh_field=document.forms[fm].srh_forum;

	  if(srh_field.value == dtl_SearchEmpty_000) srh_field.value = '';
	  if(srh_field.value == dtl_SearchEmpty_001) srh_field.value = '';
	  if(srh_field.value == dtl_SearchEmpty_003) srh_field.value = '';
	  if(srh_field.value == dtl_SearchEmpty_004) srh_field.value = '';
	  if(srh_field.value == dtl_SearchEmpty_005) srh_field.value = '';
	  if(srh_field.value == dtl_SearchEmpty_006) srh_field.value = '';
}

function SearchEmptyFaq()
{
	  // fm = html form
          var faq_field;
	  faq_field=document.searchfaq.faq_field;

	  if(faq_field.value == dtl_SearchEmptyFaq_000) faq_field.value = '';
}

function SearchSubmit()
{
      var srh_field;
	  var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;

	  sh=document.searchfrm.srh_field;
	  sh.value=$.trim(sh.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, ' ').replace(/\s{2,}/g, ' ')).toLowerCase();
	  if(sh.value.length == 0 || sh.value==dtl_SearchSubmit_000 || sh.value==dtl_SearchSubmit_001 || sh.value.indexOf(dtl_SearchSubmit_006) >= 0)
	  {
			alert(dtl_SearchSubmit_002);
			sh.focus();
    		sh.select();
			return false;
	  }
	  if(sh.value.length < 2)
	  {
			alert(dtl_SearchSubmit_003);
			sh.focus();
    		sh.select();
			return false;
	  }
	  else
	  {
	  if(sh.value.search(mikExp) != -1)
		{
			alert(dtl_SearchSubmit_004+"\n\r\n\r@ $ % ^ & * # ( ) [ ] \\ { + } ` ~ =  | \n\r\n\r"+dtl_SearchSubmit_005+"\n");
			sh.focus();
			sh.select();
			return false;
		}
	  }
val='';
$('ul.horiz.dt-all-cnt li').children('input:not([id=s_all])').each(function(){ if ($(this).prop('checked'))	val+='y'; else val+='n'; });
switch (val)
{
case 'yynn': search_normal=true; searchgg="/photos-images/"+(sh.value.split(" ").join("-"))+".html"; break;
case 'nnyn': search_normal=true; searchgg="/stock-footage/"+(sh.value.split(" ").join("-"))+".html"; break;
default: search_normal=false;
}
search_normal=!$('#s_st').is(':checked') && search_normal;
search_normal2=search_normal && $('.dt-adv-search').html()==null && $('.dt-first-search').html()==null;

if ($('.dt-adv-search').html()!=null && $('.dt-first-search').html()!=null)
	{
	search_adv1=$('#s_rf').is(':checked') && $('#s_ed').is(':checked') && !$('#s_exclusive').is(':checked') && !$('#s_op').is(':checked');
	search_adv1=search_adv1 && ($('.ui-slider-range.ui-widget-header').attr('style')=="left: 0%; width: 100%;" || $('.ui-slider-range.ui-widget-header').attr('style')=="width: 100%; left: 0%;") && $('input[name=s_iel]').is(':checked')==false && $('input[name=s_wel]').is(':checked')==false && $('input[name=s_pel]').is(':checked')==false && $('input[name=s_srel]').is(':checked')==false && $('input[name=s_amf]').is(':checked')==false && $('input[name=s_exc]').val()=='' && $('input[name=s_excp]').val()=='' && $('input[name=s_sp]').val()=='';
	$('select[name=s_rsf] option').each(function() {if ($(this).is(':checked')) res1=(this.innerHTML)=='-none-';});
	$('select[name=s_rsf] option').each(function() {if ($(this).is(':checked')) res2=(this.innerHTML)=='-none-';});
	var res1,res2;
	if (res1==undefined) res1=true;
	if (res2==undefined) res2=true;
	search_adv23=res1 && res2 && !$('input[name=s_c1e]').is(':checked') && $('input[name=s_clc]').is(':checked') && $('input[name=s_clm]').is(':checked') && $('input[name=s_orp]').is(':checked') && $('input[name=s_orl]').is(':checked') && $('input[name=s_ors]').is(':checked') && $('input[name=s_orw]').is(':checked') && !$('input[name=s_mr]').is(':checked') && !$('input[name=s_wp]').is(':checked');
	}
if (search_normal2 || (search_normal && search_adv1 && search_adv23))
	{
	if (SearchSubmit.checkonly) return searchgg;
	window.location=searchgg;
	return false;
	}
else
	return;
}

function SearchSubmitAjaxHandler(result, action, skipState) {
  if (action && !result.images.length) {
    location.href = action;
    return false;
  }
  if (!skipState) {
    document.title = result.title;
    $("meta[name='description']").attr({content: result.meta_description});
    window.history.pushState(action, result.title, action);
  }
  if (result.related_searches) {
    $(".dt-breadcrumb-v2").html(result.related_searches).show();
  } else {
    $(".dt-breadcrumb-v2").hide();
  }
  if (result.images_count) {
    $(".dt-pull-center").replaceWith(result.images_count).show();
  } else {
    $(".dt-pull-center").hide();
  }
  if (result.pages) {
    $("#dt_pages").replaceWith(result.pages).show();
  } else {
    $("#dt_pages").hide();
  }
  $(".dt-pages").replaceWith(result.pagination);
  SlideHandleKeyPress._keynaviprev = result.prevlink;
  SlideHandleKeyPress._keynavinext = result.nextlink;
  var $n = $(".dt-next a");
  if ($n.length) {
    $("#nextbutton a").attr({
      title: $n.attr('title'),
      href: $n.attr('href')
    }).show();
  } else {
    $("#nextbutton a").hide();
  }
  $(".dt-prev a, .dt-next a, #nextbutton a").unbind('click').bind('click', function() {
    return SearchSubmitAjax(this.href);
  });
  $(".dt-sort-images a").unbind('click').bind('click', function() {
    var pg = $(this).html();
    $(".dt-sort-images a").removeClass("dt-select").each(function() {
      if ($(this).html() == pg) {
        $(this).addClass("dt-select");
      }
    });
    return SearchSubmitAjax(this.href);
  });
  var s = "";
  imgSizes = [];
  for (var i = 0; i < result.images.length; i++) {
    var r = result.images[i];
    s += (r[7] == 65535 ? SearchSubmitAjaxHandler.vframe : SearchSubmitAjaxHandler.iframe).replace(new RegExp("___ID___", "g"), r[0]);
    imgSizes.push([r[0], r[1], r[2]]);
  }
  $(".thb-large-box").css({'vertical-align': 'top'});
  $(".thb-large-box").parents("table").eq(0).height($(".thb-large-box").parents("table").eq(0).height());
  $(".thb-large-box").stop().fadeOut(500, function() {
    $(".thb-large-box").css({opacity: ""});
    $(".thb-large-box").find(".thb_cell").not("#nextbutton").remove();
    $("#nextbutton").removeClass("thb_cell thb_cell_v1");
    $(".thb-large-box").prepend(s);
    for (var i = 0; i < result.images.length; i++) {
      var r = result.images[i];
      var $b = $("#bigthumb" + r[0]);
      var b = $b.get(0);
      b.onmouseover = b.onmouseout = null;
      $b.attr({
        src: r[4],
        alt: r[5]
      }).data({
        arranged: false,
        loaded: false,
        r: r
      }).css({
        visibility: 'hidden'
      }).mouseover(function() {
        var r = $(this).data('r');
        var f = r[7] == 65535 ? trailOn4 : trailOn3;
        f(r[8], r[9], r[10], r[0], r[11], r[12], r[13], r[14], r[15], 1, r[4]);
      }).mouseout(function() {
        var r = $(this).data('r');
        if (r[7] == 65535) {
          $("#sampleMovie").trigger('pause');
        }
        trailOff2();
      }).parent().attr({href: r[3]});
    }
    imageLoaders.imgLoaders = {};
    imageLoaders();
    SearchSubmitAjaxPreloadNext();
    $(".thb-large-box").stop().fadeIn(1000, function() {
      $(".thb-large-box").css({opacity: ""});
      if (SearchSubmitAjaxHandler.lightboxes >= 5) {
        $(".thb_cell").addClass('thb_cell_5lb');
      }
      $(".thb-large-box").parents("table").eq(0).height("");
      var scrollTop = $(".dt-content").offset().top;
      if ($("html").scrollTop() > scrollTop) {
        $("html, body").animate({scrollTop: scrollTop}, 1300);
      }
    });
    if (SearchSubmitAjaxHandler.lightboxes >= 5) {
      $(".thb_cell").addClass('thb_cell_5lb');
    }
  });
  return false;
}

function SearchSubmitResult(action, result) {
  SearchSubmitAjax.results[action] = result;
  SearchSubmitAjax.cache = SearchSubmitAjax.cache || [];
  SearchSubmitAjax.cache.push(action);
  if (SearchSubmitAjax.cache.length > 5) {
    var a = SearchSubmitAjax.cache.splice(0, 1);
    delete SearchSubmitAjax.results[a[0]];
  }
}

function SearchSubmitAjax(action, skipState) {
  action = action || "";
  SearchSubmitAjax.results = SearchSubmitAjax.results || {};
  $('#srh_field').blur();
  $('.dt-close').click();
  $("#sampleMovie").trigger('pause');
  trailOff2();
  $(".thb-large-box").stop().animate({opacity: 0.6}, 3000);
  if (action && typeof SearchSubmitAjax.results[action] != "undefined") {
    if (typeof SearchSubmitAjax.results[action].abort == "undefined") {
      return SearchSubmitAjaxHandler(SearchSubmitAjax.results[action], action, skipState);
    }
    SearchSubmitAjax.results[action].abort();
  }
  SearchSubmitAjax.results[action] = $.post(action, {ajax: 1}, function(result) {
    SearchSubmitResult(action, result);
    return SearchSubmitAjaxHandler(result, action, skipState);
  }, 'json');
  return false;
}

function SearchSubmitAjaxCheck() {
  SearchSubmit.checkonly = true;
  var result = SearchSubmit();
  delete SearchSubmit.checkonly;
  if (result === false) {
    return false;
  }
  var action;
  if (typeof result == "undefined") {
    action = '/search.php?' + $(this).serialize();
  } else {
    action = result;
  }
  return SearchSubmitAjax(action);
}

function SearchSubmitAjaxPreloadNext() {
  // Preload next pages
  $(".dt-next a").each(function() {
    var action = $(this).attr("href");
    if (action) {
      SearchSubmitAjax.results = SearchSubmitAjax.results || {};
      if (typeof SearchSubmitAjax.results[action] == "undefined") {
        SearchSubmitAjax.results[action] = $.post(action, {ajax: 1}, function(result) {
          SearchSubmitResult(action, result);
          if (result.images && result.images.length) {
            for (var i = 0; i < result.images.length; i++) {
              if (typeof imageLoaders.imgLoaders[result.images[i][0]] == "undefined") {
                imageLoaders.imgLoaders[result.images[i][0]] = new Image();
                imageLoaders.imgLoaders[result.images[i][0]].src = result.images[i][4];
              }
            }
          }
        }, 'json');
      }
    }
  });
}

function SearchPageInit() {
  $(window).bind("resize", formatRelatedSearches);
  $(".dt-more-s").click(showMoreRelatedSearches);
  $(".dt-prev a, .dt-next a, #nextbutton a").unbind('click').bind('click', function() {
    return SearchSubmitAjax(this.href);
  });
  $(".dt-sort-images a").unbind('click').bind('click', function() {
    var pg = $(this).html();
    $(".dt-sort-images a").removeClass("dt-select").each(function() {
      if ($(this).html() == pg) {
        $(this).addClass("dt-select");
      }
    });
    return SearchSubmitAjax(this.href);
  });
  window.onpopstate = function(e) {
    if (e.state) {
      SearchSubmitAjax(e.state, true);
    } else {
      SearchSubmitAjax(location.href, true);
    }
  };
  $("form[name='searchfrm']").get(0).onsubmit = SearchSubmitAjaxCheck;
  SearchSubmitAjaxPreloadNext();
}

function SearchFaq()
{
      var faq_field;
	  var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;

	  sh=document.searchfaq.faq_field;
	  if(sh.value.length == 0 || sh.value==dtl_SearchFaq_004)
	  {
			alert(dtl_SearchFaq_000);
			sh.focus();
    		sh.select();
			return false;
	  }
	  if(sh.value.length <= 2)
	  {
			alert(dtl_SearchFaq_001);
			sh.focus();
    		sh.select();
			return false;
	  }
	  else
	  {
	  if(sh.value.search(mikExp) != -1)
		{
			alert(dtl_SearchFaq_002 + "\n\r\n\r@ $ % ^ & * # ( ) [ ] \\ { + } ` ~ =  | \n\r\n\r" + dtl_SearchFaq_003 + "\n");
			sh.focus();
			sh.select();
			return false;
		}
	  }
	  return;
}


function SearchForumSubmit(param)
{
      var sh;
	  var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;

	  sh=document.forum_srh.srh_forum;
	  if(param == 1) sh_comp = dtl_SearchForumSubmit_004;
	  if(param == 2) sh_comp = dtl_SearchForumSubmit_005;
	  if(param == 3) sh_comp = dtl_SearchForumSubmit_006;

	  if(sh.value.length == 0 || sh.value==sh_comp)
	  {
			alert(dtl_SearchForumSubmit_000);
			sh.focus();
    		sh.select();
			return false;
	  }
	  if(sh.value.length <= 2)
	  {
			alert(dtl_SearchForumSubmit_001);
			sh.focus();
    		sh.select();
			return false;
	  }
	  else
	  {
	  if(sh.value.search(mikExp) != -1)
		{
			alert(dtl_SearchForumSubmit_002 + "\n\r\n\r@ $ % ^ & * # ( ) [ ] \\ { + } ` ~ =  | \n\r\n\r" + dtl_SearchForumSubmit_003 + "\n");
			sh.focus();
			sh.select();
			return false;
		}
	  }
	  return;
}

function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }
  //MOZILLA/NETSCAPE support
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
                  + myValue
                  + myField.value.substring(endPos, myField.value.length);
  } else {
    myField.value += myValue;
  }
}

function AddCmd(text1) {window.document.frm_forum.message.value = window.document.frm_forum.message.value + text1; }

function AddImage() {
	var image_url = prompt(dtl_AddImage_000, '');
	if (image_url != null) { AddCmd('&nbsp; [img]' + image_url + '[/img] &nbsp;'); }
}
function AddImageAtCursor() {
	var image_url = prompt(dtl_AddImage_000, '');
	if (image_url != null) { insertAtCursor(document.frm_forum.message,'&nbsp; [img]' + image_url + '[/img] &nbsp;'); }
}
function AddImageLeft() {
	var image_url = prompt(dtl_AddImageLeft_000, '');
	if (image_url != null) { insertAtCursor(document.frm_forum.message,'[imgl]' + image_url + '[/imgl]'); }
}
function AddImageRight() {
	var image_url = prompt(dtl_AddImageRight_000, '');
	if (image_url != null) { insertAtCursor(document.frm_forum.message,'[imgr]' + image_url + '[/imgr]'); }
}
function AddParagraph() {
	insertAtCursor(document.frm_forum.message,'[p]write your text here[/p]');
}

function AddURLB() {
	var link_url = prompt(dtl_AddURLB_000, '');
	if (link_url != null) { var link_name = prompt(dtl_AddURLB_001, ''); }
	if (link_name == '') { insertAtCursor(document.frm_forum.message,'[link=' + link_url + '][/link]'); return; }
	if (link_url != null) { insertAtCursor(document.frm_forum.message,'[link=' + link_url + ']' + link_name + '[/link]'); }
}

function AddURL() {
	var link_url = prompt(dtl_AddURL_000, '');
	if (link_url != null) { var link_name = prompt(dtl_AddURL_001, ''); }
	if (link_name == '') { AddCmd('[link=' + link_url + '][/link]'); return; }
	if (link_url != null) { AddCmd('[link=' + link_url + ']' + link_name + '[/link]'); }
}

function NewsCharacters(field)
{
	var MaxCharacters = 1000;
	if (field.value.length > MaxCharacters)
	{
		alert(dtl_NewsCharacters_000 + ' ' + MaxCharacters + ' ' + dtl_NewsCharacters_001);
		field.value = field.value.substring(0, MaxCharacters);
	}
}

function chkspell(x)
	{
	window.open('http://www.dreamstime.com/spellchecker.php?strtotest='+x, 'spellchecker', 'width=475,height=300,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no');
	}

function FilterSubmit()
{
      var srh_field;
	  var mikExp = /[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/;

	  sh=document.filterfrm.srchby;
	  if(sh.value.length == 0 || sh.value==dtl_FilterSubmit_004)
	  {
			alert(dtl_FilterSubmit_000);
			sh.focus();
    		sh.select();
			return false;
	  }
	  if(sh.value.length <= 2)
	  {
			alert(dtl_FilterSubmit_001);
			sh.focus();
    		sh.select();
			return false;
	  }
	  else
	  {
	  if(sh.value.search(mikExp) != -1)
		{
			alert(dtl_FilterSubmit_002+"\n\r\n\r@ $ % ^ & * # ( ) [ ] \\ { + } ` ~ =  | \n\r\n\r"+dtl_FilterSubmit_003+"\n");
			sh.focus();
			sh.select();
			return false;
		}
	  }
	  return;
}

function copytoclipboard(x)
	{
	clipboardData.setData('Text', x);
	}

function countwords(stringu)
	{
	var myString = new String(stringu);
	var myArray = myString.split(/([, ])/);
	if (myArray.length>0) return true;
	else return false;
	}

	function select_size(s)
	{

		var oInp = document.getElementsByTagName('input');

		var currname = "";
		var lastname = "";

		var lasti = -1;
		var start = 0;

		for(var i=0;i<oInp.length;i++)
		{
			if(oInp[i].getAttribute('type')=='radio' && oInp[i].getAttribute('name').substr(0,7) == 'imageid')
			{
				if (s != 'H')
				{
					if (oInp[i].value==s)
					{
					 	oInp[i].checked = true;
					}
				}

	else
				{
					if (start == 0)
					{
						lastname = oInp[i].getAttribute('name').substr(7);
						lasti = -1;
						start = 1;
					}
					currname = oInp[i].getAttribute('name').substr(7);
					if (currname == lastname)
					{
						if (oInp[i].value != 'N' && oInp[i].value != 'C')
						{
							lasti = i;
						}
					}else{
						if (lasti != -1)
						{
							oInp[lasti].checked = true;
						}
						lastname = oInp[i].getAttribute('name').substr(7);
						lasti = i;
					}
				}
			}
		}
		if (lasti != -1 && s == 'H') {
			if (!oInp[lasti].checked)
			{
				oInp[lasti].checked = true;
			}
		}

	}

	function arrRadioNames(arrnamesradios, name){
		var len = arrnamesradios.length;
			for ( var x = 0 ; x <= len ; x++ ) {
				if (arrnamesradios[x] == name)
				{
				 return true;
				}
			}
			return false;
	}

	function getArrSameName(arrnamesradios,arrnamesradiosi,oInp){
	   arrthesamenames = new Array();
		var m = 0;
		for(var j = 0; j < oInp.length; j++)
			{
				if(oInp[j].getAttribute('type')=='radio')
				{
					if (arrnamesradiosi == oInp[j].getAttribute('name').substr(7)) {
						arrthesamenames[m] = oInp[j];
						m++;

					}
				}
			}
		return arrthesamenames;
	}
	
// search (searchjs29.js)
var ua = navigator.userAgent.toLowerCase();
var t;
var t_close;
var thidediv;

function submitsuggclick(myfield,e)
{
   $(myfield).closest('form').submit();
   // myfield.form.submit();
   return false;
}

function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   $(myfield).closest('form').submit();
   // myfield.form.submit();
   return false;
   }
else
   return true;
}

function resetsearch()
	{
	fr = document.searchfrm;
	fr.srh_field.value = dlt_searchjs_000;
	fr.s_ph.checked = true;
	fr.s_il.checked = true;
	fr.s_ad.checked = false;
	fr.s_exclusive.checked = false;
	fr.s_rf.checked = true;
	fr.s_ed.checked = true;
	fr.s_op.checked = false;
	fr.s_ad.checked = false;
	fr.s_sm[0].checked = true;
	fr.s_cf[0].checked = true;
	fr.memso.checked = false;
	fr.s_exc.value = '';
	fr.s_excp.value = '';
	fr.s_amf.checked = false;
	fr.s_c1e.checked = false;
	fr.s_c2e.checked = false;
	fr.s_wp.checked = false;
	fr.s_sp.value = '';
	fr.s_sl1.checked = true,
	fr.s_sl2.checked = true;
	fr.s_sl3.checked = true;
	fr.s_sl4.checked = true;
	fr.s_sl5.checked = true;
	fr.s_iel.checked = false,
	fr.s_wel.checked = false,
	fr.s_pel.checked = false,
	fr.s_srel.checked = false,
	fr.s_rsf.value = 0;
	fr.s_rst.value = 7;
	fr.s_clc.checked = true;
	fr.s_clm.checked = true;
	fr.s_orp.checked = true;
	fr.s_ors.checked = true;
	fr.s_orl.checked = true;
	fr.s_orw.checked = true;
	fr.s_mrg.value = 0;
	fr.s_mrc1.checked = true;
	fr.s_mrc2.checked = true;
	fr.s_mrc3.checked = true;
	fr.s_mrc4.checked = true;
	fr.s_mrc5.checked = true;
	fr.s_mra1.checked = true;
	fr.s_mra2.checked = true;
	fr.s_mra3.checked = true;
	fr.s_mra4.checked = true;
	fr.s_mra5.checked = true;
	fr.s_mra6.checked = true;
	fr.s_mra7.checked = true;
	fr.s_mra8.checked = true;
	fr.s_mra9.checked = true;
	fr.s_mrea.checked = true;
	fr.s_mreb.checked = true;
	fr.s_mrec.checked = true;
	fr.s_mreh.checked = true;
	fr.s_mrem.checked = true;
	fr.s_mreo.checked = true;
	fr.s_mr.checked = false;
	fr.s_catid.value = '';
	fr.s_cliid.value = '';
	fr.s_colid.value = '';
	}

function doit(e)
	{
		var tipobj=document.all? document.all["ajaxdiv"] : document.getElementById? document.getElementById("ajaxdiv") : "";
		var updown = '';
		var x = document.searchfrm.srh_field.value;

		var unicode=e.keyCode? e.keyCode : e.charCode;
                var countx = x.split(" ");

		if(x.length > 2)
			{
				if((unicode >= 48 && unicode <= 57) || (unicode >= 65 && unicode <= 90) || unicode == 8 || unicode == 32 || unicode == 46)
						{	
                      var txt_field = document.searchfrm.srh_field;
                      var hid_firstv = document.searchfrm.firstvalue;
					  hid_firstv.value = txt_field.value;
						}
				var arr_x = x.split(" ");

				if (arr_x[arr_x.length-1].length > 2){
					if((unicode >= 48 && unicode <= 57) || (unicode >= 65 && unicode <= 90) || unicode == 8 || unicode == 46)
						{

							if (!x.match(/^[0-9\s]+$/))
							{
						if (t){
							clearTimeout(t);
						}

						yx = x.replace(/'/g,"\\'");
						t = setTimeout("requestAJAX('/ajax/3_best_autocomplete.php?value="+yx+"', 'ajaxdiv')", 500);

						if (tipobj.style.display == 'none')
						{
							tipobj.style.display = '';
						}
						tipobj.style.visibility = 'visible';

						}
						}
					
				}
				if(unicode == 32 && countx.length >= 1){
							if (!x.match(/^[0-9]+$/))
							{
								
						if (t){
							clearTimeout(t);
						}

						yx = encodeURIComponent(x.replace(/'/g,"\\'"));
                        count32 = (x.length - x.replace(/ /g, "").length);
						t = setTimeout("requestAJAX('/ajax/3_best_autocomplete.php?value="+yx+"&relatedsrc=" + count32 + "', 'ajaxdiv')", 500);

						if (tipobj.style.display == 'none')
						{
							tipobj.style.display = '';
						}
						tipobj.style.visibility = 'visible';

						}
	
					}	
				if(countx.length >= 1 && ((unicode >= 48 && unicode <= 57) || (unicode >= 65 && unicode <= 90) || unicode == 8 || unicode == 46)){
							if (!x.match(/^[0-9]+$/))
							{
								
						if (t){
							clearTimeout(t);
						}

						yx = encodeURIComponent(x.replace(/'/g,"\\'"));
                        count32 = (x.length - x.replace(/ /g, "").length);
						if(count32>=1){
						t = setTimeout("requestAJAX('/ajax/3_best_autocomplete.php?value="+yx+"&relatedsrc=" + count32 + "', 'ajaxdiv')", 500);
						} else {
						t = setTimeout("requestAJAX('/ajax/3_best_autocomplete.php?value="+yx+"', 'ajaxdiv')", 500);
						}
						

						if (tipobj.style.display == 'none')
						{
							tipobj.style.display = '';
						}
						tipobj.style.visibility = 'visible';

						}
	
					}
				
				if (!x.match(/^[0-9\s]+$/))
							{
				if (unicode == 38 || unicode == 40){

					moveUpAndDown(unicode);
				}
							}

			}
		else
			{
				tipobj.innerHTML='';
				if (tipobj.style.display == ''){

					tipobj.style.display = 'none';
				}
				tipobj.style.visibility = 'hidden';
			}


	}

function moveUpAndDown(unicode){
    var	act = 0;
	var txt_field = document.searchfrm.srh_field;
	var hid_firstv = document.searchfrm.firstvalue;


	while(true){
		id = 'actd' + act;
		var x = document.all? document.all[id] : document.getElementById? document.getElementById(id) : "";
		//x = document.getElementById(id);

		if (x){
			if (x.bgColor == '#e7efff'){
				if (unicode == 40)
				{
					act++;
					id_next = 'actd' + act;
					id_opt_next = 'opt' + act;

					x_next = document.all? document.all[id_next] : document.getElementById? document.getElementById(id_next) : "";
					if (x_next){

						x_next.bgColor = '#e7efff';
						x.bgColor = '#ffffff';

						obj_next = document.all? document.all[id_opt_next] : document.getElementById? document.getElementById(id_opt_next) : "";

						txt_field.value = obj_next.innerHTML;
						break;
					}else{
						act--;
						id_opt = 'opt' + act;
						x_prev = document.all? document.all[id_opt] : document.getElementById? document.getElementById(id_opt) : "";
						txt_field.value = x_prev.innerHTML;
						break;
					}
				}
				if (unicode == 38)
				{
					if (act > 0){
						act--;
						id_next = 'actd' + act;
						id_opt_next = 'opt' + act;
						x_next = document.all? document.all[id_next] : document.getElementById? document.getElementById(id_next) : "";
						obj_next = document.all? document.all[id_opt_next] : document.getElementById? document.getElementById(id_opt_next) : "";
						if (x_next){
							x_next.bgColor = '#e7efff';
							x.bgColor = '#ffffff';

							txt_field.value = obj_next.innerHTML;
							break;
						}
					}

					else
					{
						if (act == 0)
						{
						id = 'actd' + act;
						x_ne = document.all? document.all[id] : document.getElementById? document.getElementById(id) : "";
						if (x_ne){
							x_ne.bgColor = '#ffffff';
							txt_field.value = hid_firstv.value;
							break;
						}
						}
					}
				}


			}



		}

		else
		{

			if (act > 0){
				hid_firstv.value = txt_field.value;
					var x_0 = document.all? document.all["actd0"] : document.getElementById? document.getElementById("actd0") : "";
					var x_opt_0 = document.all? document.all["opt0"] : document.getElementById? document.getElementById("opt0") : "";
					x_0.bgColor = '#e7efff';
					txt_field.value = x_opt_0.innerHTML;
			}
			break;
		}
		act++;
	}
}

function onMouseOverGlobalAction(ob){
id = ob.getAttribute('Id');
i_sel = id.substr(4);
i = 0;
while(true){
	if (i != i_sel) {
		id_option = 'actd' + i;
		var ob_option = document.all? document.all[id_option] : document.getElementById? document.getElementById(id_option) : "";
		if (ob_option) {
			ob_option.bgColor='#ffffff';
		}else{
			break;
		}

	}
	i++;
}
}

function closeSuggested(){
var txt_field = document.searchfrm.srh_field;
var hid_firstv = document.searchfrm.firstvalue;
	if (!txt_field.value.match(/^[0-9\s]+$/) && !txt_field.value.match(/[$\\@\\\#%\^\&\*\(\)\[\]\+\_\{\}\`\~\=\|]/))
							{
txt_field.value = hid_firstv.value;
thidediv = setTimeout("clearthisdiv()",500);
							}else{
txt_field.value = trimString(txt_field.value);
							}
}

function clearthisdiv(){
var x_ajaxdiv = document.all? document.all["ajaxdiv"] : document.getElementById? document.getElementById("ajaxdiv") : "";
x_ajaxdiv.innerHTML = '';
x_ajaxdiv.style.display = 'none';
}

// div works (divworks2.js)
function divswitchto(x,state)
	{
	if(state == 'none')
		$('#'+x).hide(0);
	else
		$('#'+x).show(0);
	}

// store (ajaxstore1.js)
var stringcart = '';
var sh_countryj;
var nocartitems;
var objpanelprod=getObjectById('panelprod');
function requestAJAXStore(query, elid, elid_b)
	{
	var req = null;
	//document.getElementById(elid).innerHTML = "Started...";
	if (window.XMLHttpRequest)
		{
		req = new XMLHttpRequest();
		}
	else if (window.ActiveXObject)
		{
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
			}
		catch (e)
			{
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
				}
			catch (e) {}
			}
	      	}
	req.onreadystatechange = function()
		{
		if (document.getElementById(elid).style.display == 'none')
		{
			document.getElementById(elid).style.display = '';
		}
			var elid_carr1 = new Array();
			elid_carr1 = query.split("&");
			var last1 = 0;
			last1 = elid_carr1.length - 1;
			var curr1 = elid_carr1[last1];
		if (curr1 != 'nocartitems=0') {
			if (elid != 'nothing' ){
				if (elid.substr(0,3) == 'spp') {
					document.getElementById(elid_b).innerHTML = '&nbsp;<img src="http://thumbs.dreamstime.com/img/loading_small.gif">';
				}else{
				document.getElementById(elid).innerHTML = '<br>&nbsp;<img src="http://thumbs.dreamstime.com/img/loading_small.gif">';
				}
			}else{
			document.getElementById('shippingfee').innerHTML = '<br>&nbsp;<img src="https://thumbs.dreamstime.com/img/loading_small.gif">';


			}
		}


		if(req.readyState == 4)
			{
			if(req.status == 200)
				{
				if(elid_b == 'shippingcart'){
					var arrtext = new Array();
					var totca = 0;
					arrtext = req.responseText.split("|");
					var elid_carr = new Array();
					elid_carr = query.split("&");
					var last = 0;
					last = elid_carr.length - 1;
					var curr = elid_carr[last];
					if (curr != 'nocartitems=0') {
					totca = parseFloat(arrtext[0])+parseFloat(arrtext[1]);
					var shi = parseFloat(arrtext[1]);
					document.getElementById(elid).innerHTML = '$'+totca;
					document.getElementById(elid_b).innerHTML = '$'+arrtext[1];
					}
					var currarr = new Array();
					currarr = curr.split("_");
					if (currarr[0].substr(0,5) == 'curr=') {
						var elid_c = 'price'+currarr[1].substr(3)+"_"+currarr[2];
						var elid_d = 'tqty'+currarr[2];
						var elid_e = 'tprice'+currarr[2];
						document.getElementById(elid_c).innerHTML = '$'+arrtext[2];
						document.getElementById(elid_d).innerHTML = '<span class="exif">'+arrtext[3]+'</span>';
						document.getElementById(elid_e).innerHTML = '$'+arrtext[4];
					}
					var idc = new Array();
					idc = curr.split("=");
					var id_country = idc[1];
				}else{
					if (elid == 'cartpanel') {
							var arrtext = new Array();
						 	arrtext = req.responseText.split("|||");
							document.getElementById(elid).innerHTML = arrtext[0];
							var obset = getObjectById('cartsettings');
							if (arrtext[3] > 0) {

							if (obset.style.display == 'none') {
								obset.style.display = '';
							}
							document.getElementById('totcart').innerHTML = '$'+arrtext[1];
							document.getElementById('shippingcart').innerHTML = '$'+arrtext[2];
							}
							if (arrtext[3] == 0) {
								if (obset.style.display == '') {
									obset.style.display = 'none';
								}
							}

					}else{
						if (elid == 'panelprod' || elid.substr(0,3) == 'spp' ) {

							document.getElementById(elid).innerHTML = req.responseText;

						}else{
							if (elid == 'nothing' ) {

									var arrtext = new Array();
								 	arrtext = req.responseText.split("|");

									document.getElementById('totalgeneral').innerHTML = arrtext[0]+ " (USD)";
									document.getElementById('shippingfee').innerHTML = arrtext[1]+ " (USD)";
							 	}


						}
					}
				}
				}
			else
				{
				document.getElementById(elid).innerHTML = "Error: returned status code " + req.status + " " + req.statusText;
				}
			}
		};
	req.open("GET", query, true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send(null);
	}

function buildAddStr(id){
	var ob_size = document.getElementById('storesize'+id);
	var addtocartstr = '&qty='+document.getElementById('storeqty'+id).value;
	if (ob_size.options.selectedIndex >= 0)
	{
		addtocartstr = addtocartstr + '&size=' + ob_size.options[ob_size.selectedIndex].value;
	}

	return addtocartstr;
}

function buildModifyCartStr()
{

	var elem = document.getElementById('formcart').elements;
	var strcart;
	strcart = '';
	var arrel = new Array();
	var arr = new Array();
	var j = 0;

	for(var i = 0; i < elem.length; i++)
	{
		if(elem[i].name.indexOf("store_qty") == 0){
			arrel[j] = elem[i];

			j++;
		}
	}
	if (arrel.length > 0) {


		if(arrel[0].name.indexOf("store_qty") == 0){

			var arr0 = new Array();
			arr0 = arrel[0].name.split("_");
			var lastelpid = arr0[2];
			strcart += "&sid"+lastelpid+"_1"+"="+arr0[1].substr(3)+"&qid"+lastelpid+"_1="+arrel[0].value;

		}


		var sq = 1;


		for(var i = 1; i < arrel.length; i++)
		{

				arr = arrel[i].name.split("_");
				if (lastelpid == arr[2]) {
					sq++;
					strcart += "&sid"+lastelpid+"_"+sq+"="+arr[1].substr(3)+"&qid"+lastelpid+"_"+sq+"="+arrel[i].value;
				}else{

					sq = 1;
					strcart += "&sid"+arr[2]+"_"+sq+"="+arr[1].substr(3)+"&qid"+arr[2]+"_"+sq+"="+arrel[i].value;
					lastelpid = arr[2];
				}
		}
	}
	return strcart;
}

function showdivform(val,name)
	{
	if (val)
		divswitchto(name,'');
	else
		divswitchto(name,'none');
	}

function changeFormAction(ob,formid){
	chosen = "";
	len = ob.length;
	for (i = 0; i <len; i++) {
		if (ob[i].checked) {
			chosen = ob[i].value;
		}
	}
	if (chosen == 'http://www.dreamstime.com/shoppaypal0.php') {
		var form = getObjectById(totcart);
		var totvalue;
		totvalue =  totcart.innerHTML.substr(1);
		chosen = chosen + "?paymentAmount=" + totvalue;
	}

	var form = getObjectById(formid);
	form.action = chosen;
}


/*function sh_display(){
	ob = document.formcart.saddress;
	showdivform(ob[1].checked,'shippingaddress');
}*/


function check_billing_form()
	{

	var x_first_name = document.frm_secure.x_first_name;
	var x_last_name = document.frm_secure.x_last_name;
	var x_address = document.frm_secure.x_address;
	var x_city = document.frm_secure.x_city;
	var x_zip = document.frm_secure.x_zip;
	var x_country = document.frm_secure.x_country;
	var x_phone = document.frm_secure.x_phone;
	var x_email = document.frm_secure.x_email;

    if(x_first_name.value == '')
		{
			alert(dtl_check_secure_form_004);
			x_first_name.focus();
			x_first_name.select();
			return false;
		}
	if(x_last_name.value == '')
		{
			alert(dtl_check_secure_form_005);
			x_last_name.focus();
			x_last_name.select();
			return false;
		}

	if(x_address.value == '')
		{
			alert(dtl_check_secure_form_006);
			x_address.focus();
			x_address.select();
			return false;
		}

	if(x_city.value == '')
		{
			alert(dtl_check_secure_form_007);
			x_city.focus();
			x_city.select();
			return false;
		}

	if(x_zip.value == '')
		{
			alert(dtl_check_secure_form_008);
			x_zip.focus();
			x_zip.select();
			return false;
		}

	if(x_country.options.selectedIndex < 0 || (x_country.options.selectedIndex >= 0 && (x_country.options[x_country.selectedIndex].value == '' || x_country.options[x_country.selectedIndex].value == 0)))
		{
			alert(dtl_check_secure_form_009);
			x_country.focus();
			//x_country.select();
			return false;
		}

	if(x_phone.value == '')
		{
			alert(dtl_check_secure_form_010);
			x_phone.focus();
			x_phone.select();
			return false;
		}

    if(x_email.value == '')
		{
			alert(dtl_check_secure_form_011);
			x_email.focus();
			x_email.select();
			return false;
		}
	document.getElementById('gobutton').disabled=true;
	return true;
	}


	function formValidation(form)
	{
	    var v_firstname,v_lastname,v_email,v_city,v_country,v_phone,v_zip_code, elementname;
		document.getElementById('gobutton').disabled=false;

		var noelements = form.elements.length;

			for (i = 0; i < noelements; i++){
			elementname = 'sh_firstname';
			if (elementname == form.elements[i].name) {
				v_firstname=form.elements[i];

			}


			elementname = 'sh_lastname';
			if (elementname == form.elements[i].name) {
				v_lastname=form.elements[i];

			}
			elementname = 'sh_address';
			if (elementname == form.elements[i].name) {
				v_address=form.elements[i];

			}
			elementname = 'sh_zip_code';
			if (elementname == form.elements[i].name) {
				v_zip_code=form.elements[i];

			}
			elementname = 'sh_email';
			if (elementname == form.elements[i].name) {
				v_email=form.elements[i];
			}

			elementname = 'sh_city';
			if (elementname == form.elements[i].name) {
				v_city=form.elements[i];
			}

			elementname = 'sh_country';
			if (elementname == form.elements[i].name) {
				v_country=form.elements[i];
				//country = form.elements[i];
			}

			elementname = 'sh_phone';
			if (elementname == form.elements[i].name) {
				v_phone=form.elements[i];
			}

		}
		if (v_firstname.value.length==0)
  	    {
   	    	alert ("Shipping info: " + dtl_validare_contact_001);
			v_firstname.focus();
    		v_firstname.select();
    		return false;
   	    }
  	    if (v_lastname.value.length==0)
  	    {
   	    	alert ("Shipping info: " + dtl_validare_contact_002);
			v_lastname.focus();
    		v_lastname.select();
    		return false;
   	    }
		if(v_address.value == '')
			{
				alert("Shipping info: " + dtl_check_secure_form_006);
				v_address.focus();
				v_address.select();
				return false;
			}

		if (v_city.value.length==0)
	  	    {
	   	    	alert ("Shipping info: " + dtl_validare_010);
				v_city.focus();
	    		v_city.select();
	    		return false;
	   	    }
		if(v_zip_code.value == '')
			{
				alert("Shipping info: " + dtl_check_secure_form_008);
				v_zip_code.focus();
				v_zip_code.select();
				return false;
			}

  	    if(v_country.options.selectedIndex < 0 || (v_country.options.selectedIndex >= 0 && (v_country.options[v_country.selectedIndex].value == '' || v_country.options[v_country.selectedIndex].value == 0)))
		{
			alert("Shipping info: " + dtl_validare_contact_004);
			v_country.focus();
			return false;
		}
		if(v_phone.value.length!=0)
		{
			if(!CheckPhone(v_phone.value))
			{
				alert ("Shipping info: " + dtl_validare_contact_005);
				v_phone.focus();
				v_phone.select();
				return false;
			}
	    }
	    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v_email.value)))
	    {
	    	alert("Shipping info: " + dtl_validare_contact_003);
			v_email.focus();
			v_email.select();
			return false;
	    }
	    document.getElementById('gobutton').disabled=true;
		return true;
   	}

function getCountryId(obctry)
{
	if (obctry.options.selectedIndex >= 0)
	{
		sh_country = obctry.options[obctry.selectedIndex].value;
	}else{
		sh_country = 224;
	}
	return sh_country;
}


function getObjectById(id){
	if (document.getElementById)
		return document.getElementById(id)
	else if (document.all)
		return document.all[id];

}

function showproduct(id,proids)
{
	var namei = 'p'+ id;
	var proidsarr = new Array();
	proidsarr = proids.split(',');
	for (var i = 0; i<proidsarr.length;i++)
	{
		var name = 'p'+ proidsarr[i];
		if (id != proidsarr[i])
		{
			divswitchto(name,'none');
		}
	}
	divswitchto(namei,'block');
}

// collapse (collapse1.js)

function divactivatehome(x)
{
    divswitchto('home_collapsed','none');
    divswitchto('home_expanded','none');
    divswitchto(x,'block');
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+365);
    setCookie('dthomepanel',x,exdate.toGMTString());
}

// login (login.js)

var usernameinfocus=true;
var passwordinfocus=true;
function checkusernamefield()
	{
	valun=$('input[name="uname"]').val();
	valps=$('input[name="pass"]').val();
	if (valun!=undefined && valps!=undefined)
		{
		if (valun.length >= 1 || usernameinfocus)
			{
			$('span#unamegg').css('display','none');
			if (valps.length >= 1 || passwordinfocus)
				$('span#passgg').css('display','none');
			else
				$('span#passgg').css('display','inline');
			}
		else
			{
			$('span#unamegg').show();
			if (valps.length >= 1 || passwordinfocus)
				$('span#passgg').css('display','none');
			else
				{
				$('span#passgg').css('display','inline');
				}
			}
		if (usernameinfocus || passwordinfocus)
			var t=setTimeout(checkusernamefield,100);
		}
	//console.log(valun + usernameinfocus + valps + passwordinfocus);
	}

$(function() {
	// console.log($('input[name="uname"]').val() + usernameinfocus + $('input[name="pass"]').val() + passwordinfocus);
	var t=setTimeout(checkusernamefield,3500);
	usernameinfocus=false;
	passwordinfocus=false;
	});
	
// hovers (popup26.js)

/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
*/
addtocart = new Array();
var ua = navigator.userAgent.toLowerCase();
var divw=0;
var divh=0;
var xto;

if (document.getElementById || document.all)
	document.write('<div id="imgtrailer" style="position:absolute;visibility:hidden;z-index:100;"></div>')

function gettrailobject()
	{
	if (document.getElementById)
		return document.getElementById("imgtrailer")
	else if (document.all)
		return document.all.trailimagid
	}

function gettrailobj()
	{
	if (document.getElementById)
		return document.getElementById("imgtrailer").style
	else if (document.all)
		return document.all.trailimagid.style
	}

function trailOff()
	{
		document.onmousemove='';
		gettrailobj().visibility="hidden";
	}

function trailOn(thumbimg,imgtitle,username,imgid,imgsize,credit,level,thw,thh,smallmedium){
		var smallmedium = (smallmedium == null) ? 0 : smallmedium;
		var isinstore = 0;
		if (thumbimg.indexOf("storeimages/item") >= 0) {
			isinstore = 1;
		}
		switch(smallmedium)
		{
			case 1:
				var thumbimgprev = thumbimg.replace(/thumb_/, "thumbimg_");
				break;
			case 0:
				var thumbimgprev = thumbimg.replace(/thumb_/, "thumbsmall_");
				break;
			case 2:
				var thumbimgprev = thumbimg.replace(/big/, "small");
				break;
		}
		gettrailobj().left="-500px";
		divthw = parseInt(thw) + 2;
		smthw = parseInt(thw) + 2;
		halfthh = 50;
		halfthh = Math.ceil(parseInt(thh)/2);
		topx = halfthh - 9;
		smthh = parseInt(thh) + 2;
if(username == '')
	{
		if (navigator.userAgent.indexOf("Opera")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #ffffff; layer-background-color: #ffffff;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" ><div id="div_2" style="border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+'</div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
		if (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("Safari")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #ffffff; layer-background-color: #ffffff;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" ><div id="div_2" style="border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+'</div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
		if (navigator.userAgent.indexOf("MSIE")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #FFFFFF; layer-background-color: #FFFFFF;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'"  ><div id="div_2" style="margin:0px;width:'+thw+'px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+'</div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
	}
else
	{
		if (navigator.userAgent.indexOf("Opera")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #ffffff; layer-background-color: #ffffff;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" ><div id="div_2" style="border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
		if (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("Safari")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #ffffff; layer-background-color: #ffffff;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" ><div id="div_2" style="border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
		if (navigator.userAgent.indexOf("MSIE")!=-1)
			gettrailobject().innerHTML = '<div style="background-color: #4c4843; layer-background-color: #4c4843; border: 1px none #ffffff; padding:10px; width:'+divthw+'px;height:100%;z-index:51"><div style="background-color: #FFFFFF; layer-background-color: #FFFFFF;width:'+thw+'px;z-index:51">'+'<div style="border-width:0px;margin:0px;padding:0px;background-color: #FFFFFF; layer-background-color: #FFFFFF;z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center"><img  src="'+thumbimgprev+'"  width="'+smthw+'" height="'+smthh+'" border="0"></div><div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;"></div><div style="margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;"><div style="border: 1px solid #ffffff;width:'+thw+'px;"><img name="btcontainer" id="btcontainer" src="http://thumbs.dreamstime.com/site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'"  ><div id="div_2" style="margin:0px;width:'+thw+'px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div><div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div>';
	}
		//setTimeOut
		if (document.getElementById)
			document.getElementById('btcontainer').src = thumbimg;
		else if (document.all)
			document.all.btcontainer.src = thumbimg;
		gettrailobj().visibility="visible";
		divw = parseInt(thw)+25;
		divh = parseInt(thh)+130;
		document.onmousemove=followmouse;

}

function truncImgTitle(title,max){

		if (title.length>max) {
			var subtitle = title.substr(0,max);
			var posf = subtitle.lastIndexOf("&");
			if (posf == -1) {
				return subtitle + '...';
			}else{
				if (subtitle.lastIndexOf(";") > posf) {
					return subtitle + '...';
				}else{
					return title.substr(0,posf)+'...';
				}
			}

		}else{

			return title;
		}


	}

function followmouse(e)
	{
	var docwidth=document.all? ($(document).scrollLeft()+$(window).width()) : (pageXOffset+window.innerWidth-15)
	var docheight=document.all? Math.min($(document).height(), $(window).height()) : Math.min($(window).height(), $(window).innerHeight())
if(typeof e != "undefined")
	{
	if(docwidth < 15+e.pageX+divw)
		xcoord = e.pageX-divw-5;
	else
		xcoord = 15+e.pageX;
	if(docheight < 15+e.pageY+divh)
		ycoord = 15+e.pageY-Math.max(0,(divh + e.pageY - docheight - $(document).scrollTop() - 30));
	else
		ycoord = 15+e.pageY;
	}
else if (typeof window.event != "undefined")
	{
	if(docwidth < 15+$(document).scrollLeft()+event.clientX+divw)
		xcoord = $(document).scrollLeft()-5+event.clientX-divw;
	else
		xcoord = $(document).scrollLeft()+15+event.clientX;

	if(docheight < 15+$(document).scrollTop()+event.clientY+divh)
		ycoord = 15+$(document).scrollTop()+event.clientY-Math.max(0,(divh + event.clientY - docheight - 30));
	else
		ycoord = $(document).scrollTop()+15+event.clientY;
	}
	gettrailobj().left=xcoord+"px"
	gettrailobj().top=ycoord+"px"
	}

Array.prototype.in_array = function ( obj ) {
	var len = this.length;
	for ( var x = 0 ; x <= len ; x++ ) {
		if ( this[x] == obj ) return true;
	}
	return false;
}

function getObj(id)
	{
	if (document.getElementById)
		return document.getElementById(id);
	else if (document.all)
		return document.all[id];
	}
	
// thumbs (inc_thumbs6.js)

function trailOff2(){
	mm_hoverThumb=0;
	gettrailobj().visibility="hidden";
}
function trailOn2(thumbimg,imgtitle,username,imgid,imgsize,credit,level,thw,thh,smallmedium,smallThumbPath){
	var smallmedium = (smallmedium == null) ? 0 : smallmedium;
	var isinstore = 0;
	if (thumbimg.indexOf("storeimages/item") >= 0) {
		isinstore = 1;
	}
	switch(smallmedium)
	{
		case 1:
			var thumbimgprev = thumbimg.replace(/thumb_/, "thumbimg_");
			break;
		case 0:
			var thumbimgprev = thumbimg.replace(/thumb_/, "thumbsmall_");
			break;
		case 2:
			var thumbimgprev = thumbimg.replace(/big/, "small");
			break;
	}
	thumbimgprev=smallThumbPath;
	gettrailobj().left="-500px";
	divthw = parseInt(thw) + 2;
	smthw = parseInt(thw) + 2;
	halfthh = 50;
	halfthh = Math.ceil(parseInt(thh)/2);
	topx = halfthh - 9;
	smthh = parseInt(thh) + 2;
	if (navigator.userAgent.indexOf("MSIE")!=-1){
		htm2='margin:0px;width:'+thw+'px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;';
	}else{
		htm2='border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;';
	}
	if(username == ''){
		html = '<div id="div_2" style="'+htm2+'">'+imgtitle+'<br>'+'</div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+'</div>';
	}else{
		html = '<div id="div_2" style="'+htm2+'">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div></div><div class="h2" style="z-index:53;background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div></div></div><div style="visibility:hidden"><div style="height:'+thh+'px">&nbsp;</div><div id="div_2" style="padding:3px;">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+'&copy; '+truncImgTitle(username,10)+' | Dreamstime.com'+(thw>=233?'</nobr>':'')+'<br></div>';
	}
	htm ='';
	htm+='<div style="border: 10px solid #4c4843; width:'+divthw+'px;height:100%;position:absolute; display:table; z-index:49; ">';
		htm+='<div style="width:'+thw+'px;">';
			htm+='<div style="border-width:0px;margin:0px;padding:0px;background-color: #ffffff; z-index:51;position:absolute;width:'+thw+'px;height:'+smthh+'px;text-align:center">';
				htm+='<img  src="'+thumbimgprev+'" width="'+smthw+'" height="'+smthh+'" border="0">';
			htm+='</div>';
			htm+='<div style="border-width:0px;margin:0px;padding:0px;z-index:52;position:absolute;width:'+thw+'px;top:'+topx+'px;text-align: center;">';
			htm+='</div>';
			htm+='<div style="border-width:0px;margin:0px;padding:0px;z-index:53;position:absolute;width:'+thw+'px;">';
				htm+='<div style="background : #ffffff; border: 1px solid #ffffff;width:'+thw+'px;">';
					htm+='<img name="btcontainer" id="btcontainer" src="'+static_adr+'site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" >';
			///////////////////////
				htme='<div class="h2" style="background-color: #4c4843; layer-background-color: #4c4843;width:'+thw+'px; border: 1px none #ffffff; padding:10px;padding:1px;z-index:51;" id="div_3" >';
					htme+=(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize;
				htme+='</div>';
			htme+='</div>';
		htme+='</div>';
	htme+='</div>';
	gettrailobject().innerHTML = htm+html+htme;
	gettrailobject().style.zIndex=99;
	if (document.getElementById)
		document.getElementById('btcontainer').src = thumbimg;
	else if (document.all)
		document.all.btcontainer.src = thumbimg;
	gettrailobj().visibility="visible";
	divw = parseInt(thw)+25;
	divh = parseInt(thh)+130;
	mm_hoverThumb=1;
}
function addToLB(id){
	addToLBf(id);
}
function addToLBf(id, imgSrc, imgOnMO){
	if(document.getElementById('cartIframe').style.display=='none'){
		scrollCartInPosition();
	}
	document.getElementById('cartIframe').style.display='';
	cart_add(id, imgSrc, imgOnMO);
	o=getObj('flash'+id);
	if(o){
		/*o.innerHTML='<img height="20" width="87" alt="Image added" title="Image added" src="'+static_adr+'site-img/skin1/addLB_added.gif">';
		o.style.background='url()';
		o.onclick=null;
		o.onmouseover=null;
		o.onmouseout=null;
		o.style.cursor='default'; */
        o.style.display='none';
        e=document.getElementById('added'+id);
        if(e){
          e.style.display='';
        }else{
          e=document.createElement("img");
          e.id="added"+id;
          e.height="20";
          e.width="87";
          e.alt="Image added";
          e.title="Image added";
          e.style.cssFloat="right";
          e.src=static_adr+"site-img/skin1/addLB_added.gif";
          o.parentNode.insertBefore(e,o);
        }
	}
	setTimeout(HideCart,autohideSec*1000);
}
function clickFlag(id)
	{

	if(getCookie('flagwarned') != 'y')
		{
		alert(DTL_FUNCTIONS_PR_025);
		setCookie('flagwarned','y','Wed, 11-Feb-2015 00:00:01 GMT');
		}

	requestAJAX('/ajax/flagger.php?imageid='+id+'&words='+srh_field+'&dtlanguage='+dtlanguage, 'flag'+id);
	o=getObj('flag'+id);
	if(o)
		{
		o.style.background='url()';
		o.onclick=null;
		}
	}

function clickLvl(lvl){
	MM_openBrWindow('/level.php?lvlimag='+lvl+'#'+lvl,'level_popup','width=650,height=600,resizable,scrollbars=yes');
}
function anCart(ob,b){
	ob.style.background="url("+static_adr+"site-img/skin1/"+(b?"addLB_greenroll.gif":"addLB_green.gif")+")";
}
function anFlag(ob,b){
	ob.style.background="url("+static_adr+"site-img/skin1/"+(b?"flag_mover.gif":"flag.gif")+")";
}
function anFlagRepoerted(ob,b){
	ob.src=static_adr+"site-img/skin1/"+(b?"on_mover.gif":"on_grey.gif");
}
function anFlagUnrepoerted(ob,b){
	ob.src=static_adr+"site-img/skin1/"+(b?"flag_mover.gif":"flag.gif");
}
function anLvl(ob,b,lvl){
	if(lvl==1)color="yellow";
	if(lvl==2)color="orange";
	if(lvl==3)color="pink";
	if(lvl==4)color="blue";
	if(lvl==5)color="green";
	ob.style.background="url("+static_adr+"site-img/skin1/"+(b?color+"_mover.gif":color+".gif")+")";
}

// ajax (ajax4.js)

function requestAJAX(query, elid)
	{
	$('#'+elid).show(0);
	$('#'+elid).html('<img style="margin:2px" src="//www.dreamstime.com/img/loading_small.gif">');
	$('#'+elid).load(query);
	}

function showMoreImagesLink() {
  $(".dt-images-wrapper").each(function() {
    $(".dt-image-last", this).removeClass("dt-image-last");
    var $images=$(".dt-image", this);
    var $visible=$images.filter(":visible");
    var $more=$(".dt-more-images", this);
    var hasMore=$more.attr('data-has-more')=='1' ? true : false;
    if(hasMore || $visible.length < $images.length) {
      $visible.last().addClass("dt-image-last").append($more.width($visible.last().width()).height($visible.last().height() - 4).show());
    } else {
      $more.hide();
    }
  });
}

function profilePageOpenUploadPopup() {
  $("#dt-upload-dragdrop").css('border', '2px solid #FFFFFF').show();
  $("#dt-loading-dragdrop").hide();
  $("#dt-loaded-dragdrop").hide();
  $("#dt-dragdrop-upload-or").css({visibility: "visible"});
  $("#dt-upload-browse").css({visibility: "visible"});
  $("#dt-upload-profile-image-bg").height($(".dt-container").height()).show();
}

function profilePageCloseUploadPopup() {
  $("#dt-upload-profile-image-bg").fadeOut();
}

function profilePageSendFileToServer(formData) {
  var jqXHR=$.ajax({
    url: $("#upload_form").attr("action"),
    type: $("#upload_form").attr("method") || "POST",
    contentType: false,
    processData: false,
    cache: false,
    data: formData,
    success: function(data) {
      if(data && data.match(/^http/)) {
        $("#face").attr("src", data);
        $("#dt-loaded-image").attr("src", data);
        $("#dt-upload-dragdrop").hide();
        $("#dt-loading-dragdrop").hide();
        $("#dt-loaded-dragdrop").show();
        $("#dt-dragdrop-upload-or").css({visibility: "hidden"});
        $("#dt-upload-browse").css({visibility: "visible"});
      } else {
        $("#dt-upload-dragdrop").hide();
        $("#dt-loading-dragdrop").show();
        $("#dt-loading-dragdrop-text").html(data || DTL_PHOTOGRAPHER_DETAILS_097);
        $("#dt-loading-dragdrop-image").css({visibility: "hidden"});
        $("#dt-loaded-dragdrop").hide();
        $("#dt-dragdrop-upload-or").css({visibility: "hidden"});
        $("#dt-upload-browse").css({visibility: "visible"});
      }
    },
    error: function(jqXHR, textStatus, errorMessage) {
      $("#dt-upload-dragdrop").hide();
      $("#dt-loading-dragdrop").show();
      $("#dt-loading-dragdrop-text").html(DTL_PHOTOGRAPHER_DETAILS_097);
      $("#dt-loading-dragdrop-image").css({visibility: "hidden"});
      $("#dt-loaded-dragdrop").hide();
      $("#dt-dragdrop-upload-or").css({visibility: "hidden"});
      $("#dt-upload-browse").css({visibility: "visible"});
    }
  }); 
}

function profilePageUploadFace(files) {
  var file=null;
  for (var i = 0; i < files.length; i++) {
    if(files[i].type.match(new RegExp("^image\\/jp", "i"))) {
      file = files[i];
      break;
    }
  }
  if(!file) {
    return;
  }

  $("#dt-upload-dragdrop").hide();
  $("#dt-loading-dragdrop").show();
  $("#dt-loading-dragdrop-text").html(DTL_PHOTOGRAPHER_DETAILS_098);
  $("#dt-loading-dragdrop-image").css({visibility: "visible"});
  $("#dt-loaded-dragdrop").hide();
  $("#dt-dragdrop-upload-or").css({visibility: "hidden"});
  $("#dt-upload-browse").css({visibility: "hidden"});

  var fd=new FormData();
  fd.append('M_face', file);

  profilePageSendFileToServer(fd);
}

function profilePageBrowse() {
  $("#dt-file-type").click();
}

function profilePageUploadFaceFromInput() {
  var fileInput=$("#dt-file-type").get(0);
  var file=fileInput.value;
  var fileName=file.split("\\");
  $(".dt-file-name").html(fileName[fileName.length-1]);
  profilePageUploadFace(fileInput.files);
}

function profilePageResizeFace() {
  var img=$("#face").get(0);
  if(!img.naturalHeight) {
    return; 
  }
  var aspectRatio=img.naturalWidth / img.naturalHeight;
  var w = $(window).width() > 1024 ? 172 : 132;
  if(aspectRatio < 1) {
    $(img).css({width: w + "px", height: "auto"});
  } else {
    $(img).css({width: "auto", height: w + "px"});
  }
}

function profilePageResizeUploadedImage() {
  var img=$("#dt-loaded-image").get(0);
  if(!img.naturalHeight) {
    return; 
  }
  var aspectRatio=img.naturalWidth / img.naturalHeight;
  if(aspectRatio < 1) {
    $(img).css({width: "150px", height: "auto"});
  } else {
    $(img).css({width: "auto", height: "150px"});
  }
}

function profilePageResizeName() {
  var $title = $("h1");
  if ($title.length) {
    var title = $title.get(0);
    for (var i = 36; i >= 16; i--) {
      if (title.offsetWidth == title.scrollWidth) {
        break;
      }
      $title.css('font-size', i + 'px');
      $title.css('line-height', (i + 10) + 'px');
    }
    if (title.offsetWidth != title.scrollWidth) {
      $title.attr({title: $title.html()}).css('font-size', '');
      $title.css('line-height', '');
    }
  }
  var $subtitle = $("h2");
  if ($subtitle.length) {
    var subtitle = $subtitle.get(0);
    for (var i = 22; i >= 14; i--) {
      if (subtitle.offsetWidth == subtitle.scrollWidth) {
        break;
      }
      $subtitle.css('font-size', i + 'px');
      $subtitle.css('line-height', (i + 10) + 'px');
    }
    if (subtitle.offsetWidth != subtitle.scrollWidth) {
      $subtitle.attr({title: $subtitle.html()}).css('font-size', '');
      $subtitle.css('line-height', '');
    }
  }
}

function adjustPinMaxRows(n) {
  if (typeof displayPinMaxRows == "object") {
    for (var i = 0; i < displayPinMaxRows.length; i++) {
      displayPinMaxRows[i] = n;
    }
  } else if (typeof displayPinMaxRows != "undefined") {
    displayPinMaxRows = n;
  }
}

function showMoreImages() {
  var w = $(".dt-images").width();
  if (!w) {
    return;
  }
  if (w < 400) {
    adjustPinMaxRows(4);
    return;
  }
  if (w < 600) {
    adjustPinMaxRows(3);
    return;
  }
  adjustPinMaxRows(2);
}

function profilePageInit() {
  profilePageResizeName();
  $("a[href='#']").click(function() {
    return false;
  });
  $(document).keydown(function(e) {
    if(e.keyCode == 27) {
      profilePageCloseUploadPopup();
    }
  });
  $("#dt-upload-profile-image-bg").appendTo("body");
  $("#dt-upload-dragdrop").on('dragenter', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
  }).on('dragover', function(e) {
     e.stopPropagation();
     e.preventDefault();
  }).on('drop', function(e) {
     e.preventDefault();
     var files=e.originalEvent.dataTransfer.files;
     profilePageUploadFace(files);
  });
  $(document).on('dragenter', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $("#dt-upload-dragdrop").show();
    $("#dt-loading-dragdrop").hide();
    $("#dt-loaded-dragdrop").hide();
    $("#dt-dragdrop-upload-or").css({visibility: "visible"});
    $("#dt-upload-browse").css({visibility: "visible"});
  }).on('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $("#dt-upload-dragdrop").css('border', '2px dotted #0B85A1');
  }).on('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $("#dt-upload-dragdrop").css('border', '2px solid #FFFFFF');
  });
  arrangeImages.callback=showMoreImages;
  arrangeImages.callback=showMoreImagesLink;
  $("li.dt-link a span").each(function() {
    var s = -0.1;
    while ($(this).width() > 65) {
      $(this).css('letter-spacing', s + "px");
      s -= 0.1;
    }
  });
}
