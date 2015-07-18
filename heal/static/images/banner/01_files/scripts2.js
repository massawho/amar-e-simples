function showPopup( id, status  ) {
	
	if ( status ) {
		$( '#' + id + ' .dt-submenu-800-popup-actions' ).hide();
	} else {
		$( '#' + id + ' .dt-submenu-800-popup-actions' ).show();
	}
	$( '#' + id + ' .dt-more' ).toggleClass( 'dt-more-close' );
}

function menuActions() {
	$(".dt-menu ul a").click(function () {
	  id = $(this).attr('id');	
	  if ((id!='dt-tab-7')&&(id!='dt-tab-8')) {
		  $(".dt-menu ul a").removeClass('dt-menu-select');
		  $(this).addClass('dt-menu-select');
		  $(".dt-submenu ul.horiz").hide();
		  $('#' + $(this).attr('id') + '-cnt' ).show();
	  }
    });	
}

function menuActionsFreeImages() {

	$(".dt-menu ul a").click(function () {
	  id = $(this).attr('id');	
	  if ((id!='dt-tab-3')) {
		  $(".dt-menu ul a").removeClass('dt-menu-select');
		  $(this).addClass('dt-menu-select');
		  $(".dt-submenu ul.horiz").hide();
		  $('#' + $(this).attr('id') + '-cnt' ).show();
	  }
	  if ((id!='dt-tab-1')) { 
	  	$('.dt-submenu').attr('class','dt-submenu'); 
	  } else {
	  	$('.dt-submenu').attr('class','dt-submenu dt-submenu-with-search'); 
	  }
    });	
	
} 

function sync( id, originalMenu, originalMenuWidths, widthMenu ) {

		var newMenu = '';
		var extraWidth;
		extraWidth = $( '#' + id + ' .dt-more').width() + 40; // More width
		var newWidth = 0;
		splitWidth = ( widthMenu == 890 ? 741 : $(window).width() );
		splitWidth = ( widthMenu == 890 ? 741 : $(window).width() );
	  	if  ( widthMenu > $(window).width() ) {
				newWidth = widthMenu + extraWidth;
				for ( var i=originalMenuWidths.length-1; i>=0; i-- ) {
					newWidth = parseInt(newWidth) - parseInt(originalMenuWidths[ i ]);
					
					if ( newWidth < splitWidth ) {
						break;
					} 
				}
			
			var newSubMenu = Array();
			var k = 0;
			for ( var j=0; j<originalMenu.length; j++ ) {
				if ( j == i-1 ) {
					newMenu += '<li class="dt-last-more">';
					newMenu += originalMenu[ j ];					
				} else if ( j >= i ) {
					newSubMenu[ k ] = originalMenu[ j ];
					k++;
				} else {  
					newMenu += '<li class="dt-submenu-0">'; 
					newMenu += originalMenu[ j ];					
				}
				
				newMenu += '</li>';				
				
			}

			newMenu += 			 
					  '<li class="dt-submenu-800-popup">' 
					+ '<div>'
					+ '	<ul>' 
					+ '		<li class="dt-last">'
					+ '			<a class="dt-more" href="javascript:showPopup(\'' + id + '\', $( \'#' + id + ' .dt-submenu-800-popup-actions\' ).is(\':visible\') );" target="_self">More</a>'
					+ '			<ul class="dt-submenu-800-popup-actions" id="dt-submenu-800-popup-actions" style="display:none;">'
					+ '				<li class="dt-submenu-800-popup-actions-top"></li>';
					
					for ( var j=0; j<newSubMenu.length; j++ ) {
						newMenu +='				<li>' + newSubMenu[j] + '</li>'					
					}
				
			newMenu +='				<li class="dt-submenu-800-popup-actions-bottom"></li>'
					+ '			</ul>'
					+ '		</li>'
					+ '	</ul>'
					+ '	</div>'
					+ ' </li>';

		} else {
		
			for ( var j=0; j<originalMenu.length; j++ ) {
				newMenu += ( j==originalMenu.length-1 ? '<li class="dt-submenu-0 dt-last">' : '<li class="dt-submenu-0">' );
				newMenu += originalMenu[ j ];
				newMenu += '</li>';				
			}
			
		}
		
		$('#' + id).html( newMenu );
		
}

function responsiveMenu( id ) {
	
	var originalMenu = new Array();
	var originalMenuWidths = new Array();
	var widthMenu = 0;
	
	$( 'ul#' + id + ' li.dt-submenu-0' ).each(function(index) {
		originalMenu[ index ] = $(this).html();
		originalMenuWidths[ index ] = $(this).children().width() + 21; // 21 = 10x2 padding + 1 border
		widthMenu = widthMenu + originalMenuWidths[ index ];
	});	
	widthMenu = widthMenu + 56; // padding left-right	

	if ( $(window).width() > 890 ) {
		sync( id, originalMenu, originalMenuWidths, widthMenu );	
	} else {
		sync( id, originalMenu, originalMenuWidths, 890 );	
	}
	$(window).resize(function() {
		if ( $(window).width() > 890 ) {	
			sync( id, originalMenu, originalMenuWidths, widthMenu );			
		}
	});

}

function setBrowserClassName() {
$(function () {
	var $html = $("html");

	if ($.browser.mozilla) {
		$html.addClass("ff");
		$html.addClass("ff" + parseInt($.browser.version));		
	}

	if ($.browser.webkit) {
		$html.addClass("webkit");
	}

	if ($.browser.opera) {
		$html.addClass("opera");
	}	
	
	if ($.browser.msie) {
		$html.addClass("ie");
		$html.addClass("ie" + parseInt($.browser.version));
	}
	
});
}

function showToolTip( idToolTip ) {

		$( '#' + idToolTip + '_btn' ).on('click', function (event) {
			$( '.dt-tooltip' ).hide(); 
			$( '#' + idToolTip ).show();
		});
		
		$( '#' + idToolTip + ' a.dt-tooltip-close' ).on('click', function (event) {
			$( '#' + idToolTip ).hide();
		});	
		
		closeToolTip( idToolTip );
	
}

function closeToolTip( idToolTip ) {

	$(function () {
		
		$(document).on('click', function () {
			$( '#' + idToolTip ).hide();
		});
		$( '#' + idToolTip ).on('click', function (event) {
			event.stopPropagation();
		});
		$( '#' + idToolTip + '_btn' ).on('click', function (event) {
			event.stopPropagation();
		});
		
	});	
	
}

function popupLoginMenu( idContainer, selectorBtn, selectorBtnClassName ) {
	$(function () {
		$(document).on('click', function () {
			$( '#' + idContainer ).hide();
			$( selectorBtn ).attr('class', selectorBtnClassName );
		});
		$( '#' + idContainer ).on('click', function (event) {
			event.stopPropagation();
		});
		$( selectorBtn ).on('click', function (event) {
			event.stopPropagation();
		});
		
	});
}



function advSearchMenu( sTarget, oTargetTab ) {
	$('.dt-adv-search-tabs .dt-adv-search-tab').hide();
	$('.dt-adv-search .dt-tab-default ul a' ).removeClass('dt-tab-selected');
	$('.dt-tab-' + sTarget).show();
	$( oTargetTab ).toggleClass('dt-tab-selected');
}

function modelProp( target ) {
	
	$( '#' + target ).toggleClass('dt-checkbox-selected');
	
	if ( target == 'dt-checkbox-2' ) {
		$('#dt-checkbox-1').removeClass('dt-checkbox-selected');
		$('#dt-checkbox-1 input').attr('checked', false);	
		$('#model-properties-cnt input').attr('checked', false);			
		$('#model-properties-cnt-2 input').attr('checked', false);					
	} else {
		$('#dt-checkbox-2').removeClass('dt-checkbox-selected');
		$('#dt-checkbox-2 input').attr('checked', false);	
	}
	
}


                 function iterateChk(inf,sup)
                     {
                       $('.resetChk').attr('checked',false);
                       for(i=inf;i<=sup;i++)
                       {
                        var expr = "input[name=s_sl" + i + "]";
                        $(expr).attr('checked',true);
                       }
                     }

                $(document).ready(function()
                {
                      var sliderx=$('#slider_range').slider({
                       range:true,
                            min:0,
                            max:5,
                            step:1,
                            values:[0,5],

                            slide:function(event,ui)
                            {
                              $('#level').val(ui.values[0]+'-'+ui.values[1]);
                              $('#low').html(ui.values[0]);
                              $('#high').html(ui.values[1]);
                            iterateChk(ui.values[0],ui.values[1]);
                            }
                    });

                     var s=sliderx;

                     if(s.slider("values",0)==s.slider("values",1))
                     {
                        $('#level').val(s.slider("values",0));
                        $('#low').html(s.slider("values",0));
                        $('#high').html(s.slider("values",0));
                     }
                     else
                         {
                           $('#level').val(s.slider("values",0)+'-'+s.slider("values",1));
                           $('#low').html(s.slider("values",0));
                           $('#high').html(s.slider("values",1));
                         }

                  });
