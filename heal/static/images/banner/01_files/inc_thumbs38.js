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
	smthh = parseInt(thh) + 3;
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
				htm+='<div style="border: 1px solid #ffffff;width:'+thw+'px;">';
					htm+='<img name="btcontainer" id="btcontainer" src="'+static_adr+'site-img/sep.gif" border="0" width="'+thw+'" height="'+thh+'" style="display: block;" >';
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
	if (!document.getElementById('cartIframe'))
		return;
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
function trailOff4(){
	mm_hoverThumb=0;
	gettrailobj().visibility="hidden";
}
function trailOn4(thumbimg,imgtitle,username,imgid,imgsize,credit,level,thw,thh,smallmedium,smallThumbPath){
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
	smthh = parseInt(thh) + 3;
	length = 10;
        myUsername = username;
        TruncatedUsername = myUsername.substring(0,length);
	if (navigator.userAgent.indexOf("MSIE")!=-1){
		htm2='margin:0px;width:'+thw+'px;height:100%;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;';
	}else{
		htm2='border-width:0px;margin:0px;z-index:53;layer-background-color: #FFFFFF;background-color:#ffffff;padding:3px;';
	}
	
	htm ='';
	htm+='<div style="border: 10px solid #4c4843; width:'+thw+'px;height:100%;position:absolute; display:table; z-index:49; ">';
	htm+='<div name="btcontainer" id="btcontainer" style="background-color:#fff;border: 1px solid #fff;display:block;">';
	htme='<video poster="'+thumbimgprev+'" id="sampleMovie" width="'+thw+'" height="100%" preload="metadata" autoplay muted>';
				htme+='<source src="http://thumbs.dreamstime.com/videothumb_'+Math.floor(imgid/10000)+'/'+imgid+'.mp4" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\'  />';
				htme+='<source src="http://thumbs.dreamstime.com/videothumb_'+Math.floor(imgid/10000)+'/'+imgid+'.webm" type=\'video/webm; codecs="vp8, vorbis"\'  />';
				
				htme+='<object width="'+thw+'" height="'+thh+'" type="application/x-shockwave-flash" data="flashmediaelement.swf">';
				htme+='<param name="movie" value="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf"></param>';
				htme+='<param name="flashvars" value="src=http%3A%2F%2Fthumbs.dreamstime.com%2Fvideothumb_'+Math.floor(imgid/10000)+'%2F'+imgid+'.flv&autoPlay=true"></param>';
				htme+='<param name="allowFullScreen" value="true"></param>';
				htme+='<param name="allowscriptaccess" value="always"></param>';
				htme+='<param name="autoStart" value="1"></param>';
				htme+='<param name="autoPlay" value="1"></param>';
				htme+='<param name="wmode" value="transparent"></param>';
				
				htme+='<embed src="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf"';
				 htme+=' type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" autoPlay="true" wmode="transparent"';
				 htme+='width="'+thw+'" height="'+thh+'" flashvars="src=http%3A%2F%2Fthumbs.dreamstime.com%2Fvideothumb_'+Math.floor(imgid/10000)+'%2F'+imgid+'.flv&autoPlay=true">';
				htme+='</embed>';
				
				htme+='</object>';
				htme+='</video>';
	html='</div>';
	html+='<div id="div_2" style="'+htm2+'">'+imgtitle+'<br>'+(thw>=233?'<nobr>':'')+' '+(TruncatedUsername==''?'':'&copy; '+TruncatedUsername+' | Dreamstime.com')+''+(thw>=233?'</nobr>':'')+'</div><div style="background-color: #4c4843; color:#fff;layer-background-color: #4c4843;width:'+thw+'px;padding:10px;padding:1px;z-index:51;">'+(thw>=233?'<nobr>':'')+(isinstore == 0?'ID: '+imgid+' / Level: '+level:'')+(thw>=233?'</nobr>':'')+'<br>'+imgsize+'</div>';
	
	html+='</div>';
	gettrailobject().innerHTML = htm+htme+html;
	gettrailobject().style.zIndex=99;
	if (document.getElementById)
		document.getElementById('btcontainer').src = htme;
	else if (document.all)
		document.all.btcontainer.src = htme;
	gettrailobj().visibility="visible";
	divw = parseInt(thw)+25;
	divh = parseInt(thh)+130;
	mm_hoverThumb=1;
}    
function trailOn3(thumbimg, imgtitle, username, imgid, imgsize, credit, level, thw, thh, smallmedium, smallThumbPath) {
  var smallmedium = (smallmedium == null) ? 0 : smallmedium;
  var isinstore = 0;
  if (thumbimg.indexOf("storeimages/item") >= 0) {
    isinstore = 1;
  }
  switch (smallmedium) {
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
  var html = '<div class="dt-flyout-over">' + 
              '<div class="dt-flyout-over-thumbnail">' + 
               '<img border="0" width="'+thw+'" height="'+thh+'" src="'+thumbimgprev+'" id="btcontainer" name="btcontainer" style="display: block;">' +
               '<div class="dt-flyout-over-title" style="width: '+(thw-10)+'px;">'+imgtitle+'</div>' +
               (isinstore == 0 ? '<div class="dt-flyout-over-descr">ID #'+imgid+'<span>|</span>Price: level '+level+'</div>' : '') +
              '</div>' +
             '</div>';
  gettrailobject().innerHTML = html;
  gettrailobject().style.zIndex=99;
  $("#btcontainer").attr('src', $("#bigthumb" + imgid).attr('src'));
  $("#btcontainer").removeData('pi');
  $("#btcontainer").data('pi', new Image());
  $("#btcontainer").data('pi').onload = function() {
    if ($("#btcontainer").data('pi') === this) {
      $("#btcontainer").attr('src', this.src);
    }
  };
  $("#btcontainer").data('pi').src = thumbimg;
  gettrailobj().visibility="visible";
  divw = parseInt(thw)+25;
  divh = parseInt(thh)+130;
  mm_hoverThumb=1;
}

function arrangeImages(e) {
  e = e || {};
  arrangeImages.lastRequest = new Date().getTime();
  if (typeof arrangeImages.lastRun == 'undefined' || e.type === "resize") {
    arrangeImagesThrottled();
  } else if (!arrangeImages.lastRun) {
    arrangeImages.lastRun = new Date().getTime();
    setTimeout(arrangeImagesThrottled, 500);
  }
}

try {
Object.defineProperty(arrangeImages, 'callback', {
  get: function() {
    return arrangeImages._callbacks;
  },
  set: function(c) {
    arrangeImages._callbacks = arrangeImages._callbacks || [];
    arrangeImages._callbacks.push(c);
  },
  enumerable: true,
  configurable: true
});
} catch (e) {}

function arrangeImagesThrottled() {
  arrangeImages.lastRun = new Date().getTime();
  trailOn2 = trailOn3;
  var count = $(".thb-large-box").length;
  if (count > 1) {
    for (var i = 0; i < count; i++) {
      arrangeImagesOneContainer(i, imgSizes[i]);
    }
  } else {
    arrangeImagesOneContainer(0, imgSizes);
  }
  if (arrangeImages.callback) {
    for (var i = 0; i < arrangeImages.callback.length; i++) {
      arrangeImages.callback[i]();
    }
  }
  if (arrangeImages.lastRequest > arrangeImages.lastRun) {
    setTimeout(arrangeImagesThrottled, 500);
  } else {
    arrangeImages.lastRun = 0;
  }
}

function arrangeImagesOneContainer(count, imgSizes) {
  if (!imgSizes || !imgSizes.length || !imgSizes[0] || !imgSizes[0][0]) {
    return;
  }
  var sel = $(".thb-large-box-multiple").length > 0 ? "." : "#";
  var dtx = 8;
  var dty = 8;
  var dx = 4;
  if (location.href.match(/dx=(\d+)/)) {
    dx = RegExp.$1 - 0;
  }
  var dy = 4;
  if (location.href.match(/dy=(\d+)/)) {
    dy = RegExp.$1 - 0;
  }
  var dpmr = 0;
  if (typeof displayPinMaxRows != "undefined") {
    if (displayPinMaxRows.length) {
      dpmr = displayPinMaxRows[count];
    } else {
      dpmr = displayPinMaxRows;
    }
  }
  var minSize = (dpmr == 1) ? 50 : 100;
  if (location.href.match(/min=(\d+)/)) {
    minSize = RegExp.$1 - 0;
  }
  var maxSize = 160;
  if (typeof maxPinSize != "undefined") {
    if (maxPinSize.length) {
      maxSize = maxPinSize[count];
    } else {
      maxSize = maxPinSize;
    }
  }
  if (location.href.match(/max=(\d+)/)) {
    maxSize = RegExp.$1 - 0;
  }
  var maxS = (dpmr == 1) ? 2.5 : 16 / 9; // 1.6; // 1.78;
  //var maxS = (dpmr == 1) ? 2.5 : 1.6; // 16 / 9; // 1.78;
  if (location.href.match(/maxs=([\d\.]+)/)) {
    maxS = RegExp.$1 - 0;
  }
  var maxVS = (dpmr == 1) ? 2.5 : 1920 / 1080; // 16 / 9;
  if (location.href.match(/maxvs=([\d\.]+)/)) {
    maxVS = RegExp.$1 - 0;
  }
  var $container = $(".thb-large-box").eq(count);
  var containerWidth = $container.width();

  var row = [];
  var dxWidth = 0;
  var rowWidth = 0;
  var rowHeight = maxSize;
  var rows = 0;
  for (var i = 0; i < imgSizes.length; i++) {
    var id = imgSizes[i][0];
    if (!imgSizes[i][3] && (!imgSizes[i][1] || !imgSizes[i][2]) && $(sel + "bigthumb" + id, $container).data('loaded')) {
      var v = imgSizes[i][1] == 1920 && imgSizes[i][2] == 1080;
      var w = $(sel + "bigthumb" + id, $container).get(0).naturalWidth;
      var h = $(sel + "bigthumb" + id, $container).get(0).naturalHeight;
      if (w && h) {
        imgSizes[i][1] = w;
        imgSizes[i][2] = h;
      }
      imgSizes[i][3] = true;
      imgSizes[i][4] = v;
    }
    var s = imgSizes[i][1] / imgSizes[i][2];
    var v = imgSizes[i][4] || (imgSizes[i][1] == 1920 && imgSizes[i][2] == 1080);
    var imageWidth = rowHeight * Math.min(s, v ? maxVS : maxS) + dtx;
    var dw = i > 0 ? dx : 0;
    var drawRow = false;
    if (rowWidth + imageWidth + dw > containerWidth) {
      drawRow = true;
      var rh = (containerWidth - (row.length + 1) * dtx - dxWidth - dw) * rowHeight / (rowWidth + imageWidth + dw - (row.length + 1) * dtx - dxWidth - dw);
      if (rh >= minSize) {
        rowHeight = rh;
        row[row.length] = id;
      } else {
        if (i == 0) {
          // Not even one image fits
          break;
        }
        i--;
      }
    }
    if (!drawRow) {
      row[row.length] = id;
      rowWidth += imageWidth + dw;
      dxWidth += dw;
    }
    if (i == imgSizes.length - 1) {
      drawRow = true;
    }
    if (drawRow) {
      var rw = 0;
      var maxHeight = 0;
      for (var j = 0; j < row.length; j++) {
        var rij = i - row.length + j + 1;
        var ris = imgSizes[rij][1] / imgSizes[rij][2];
        var rih = rowHeight;
        var riv = imgSizes[rij][4] || (imgSizes[rij][1] == 1920 && imgSizes[rij][2] == 1080);
        if (ris > (riv ? maxVS : maxS)) {
          rih = Math.min(rih, (riv ? maxVS : maxS) * rowHeight / ris);
        }
        maxHeight = Math.max(maxHeight, rih);
        var riw = ris * rih;
        rw += Math.floor(riw) + dtx;
      }
      for (var j = 0; j < row.length; j++) {
        var rid = row[j];
        var rij = i - row.length + j + 1;
        var ris = imgSizes[rij][1] / imgSizes[rij][2];
        var rih = rowHeight;
        var riv = imgSizes[rij][4] || (imgSizes[rij][1] == 1920 && imgSizes[rij][2] == 1080);
        if (ris > (riv ? maxVS : maxS)) {
          rih = Math.min(rih, (riv ? maxVS : maxS) * rowHeight / ris);
        }
        var riw = ris * rih;
        //$(sel + "bigthumb" + rid, $container).css({'height': Math.round(rih) + 'px', 'width': Math.floor(riw) + 'px', 'margin-top': Math.round((rowHeight - rih) / 2) + 'px'});
        $(sel + "bigthumb" + rid, $container).css({'height': Math.round(rih) + 'px', 'width': Math.floor(riw) + 'px', 'margin-top': Math.round((maxHeight - rih) / 2) + 'px'});
        //$(sel + "bigthumb" + rid, $container).css({'height': Math.round(rih) + 'px', 'width': Math.floor(riw) + 'px', 'padding-top': Math.floor((maxHeight - rih) / 2) + 3 + 'px', 'padding-bottom': Math.ceil((maxHeight - rih) / 2) + 3 + 'px'});
        //$(sel + "bigthumb" + rid, $container).next(".thb_c23").css({'margin-bottom': Math.ceil((maxHeight - rih) / 2) + 'px'});
        $(sel + "bigthumb" + rid).data('arranged', true);
        if ($(sel + "bigthumb" + rid).data('loaded')) {
          $(".showonload", sel + "thb_cell" + rid, $container).css({'visibility': 'visible'});
          if ($(sel + "bigthumb" + rid).data('lastimg')) {
            $('#nextbutton').addClass("thb_cell thb_cell_v1");
          }
        }
        var p;
        if (j == 0) {
          p = 0;
        } else {
          p = Math.floor((containerWidth - 1 - rw) / (row.length - j));
          if (i == imgSizes.length - 1 && p > 2 * dx) {
            p = dx;
          }
        }
        rw += p;
        if (rid == "nextbutton") {
          //$(sel + rid, $container).attr({'style': 'margin-bottom: ' + Math.round((rowHeight - imgSizes[rij][2]) / 2) + 'px !important; padding-left: ' + p + 'px !important;'});
          $(sel + rid, $container).attr({'style': 'margin-bottom: ' + Math.round((maxHeight - imgSizes[rij][2]) / 2) + 'px !important; padding-left: ' + p + 'px !important;'});
        } else {
          if (dpmr > 0 && rows >= dpmr) {
            $(sel + "thb_cell" + rid, $container).attr({'style': 'display: none !important;'});
          } else {
            //$(sel + "thb_cell" + rid, $container).attr({'style': 'width: ' + Math.floor(riw + dtx) + 'px !important; height: ' + Math.round(rowHeight + dty + dy) + 'px !important; padding-left: ' + p + 'px !important;'});
            $(sel + "thb_cell" + rid, $container).attr({'style': 'width: ' + Math.floor(riw + dtx) + 'px !important; height: ' + Math.round(maxHeight + dty + dy) + 'px !important; padding-left: ' + p + 'px !important;'});
          }
        }
      }
      row = [];
      dxWidth = 0;
      rowWidth = 0;
      rowHeight = maxSize;
      rows++;
    }
  }
}

function imageLoaders() {
  imageLoaders.imgLoaders = imageLoaders.imgLoaders || {};
  var id;
  $('.thb_cell').each(function() {
    if (this.id == 'nextbutton') {
      return;
    }
    id = this.id.replace('thb_cell','');
    if (typeof imageLoaders.imgLoaders[id] != "undefined") {
      return;
    }
    imageLoaders.imgLoaders[id] = new Image();
    imageLoaders.imgLoaders[id].onload = (function(id) {
      return function() {
        delete imageLoaders.imgLoaders[id];
        $("#bigthumb" + id).data('loaded', true);
        if ($("#bigthumb" + id).data('arranged')) {
          $(".showonload", "#thb_cell" + id).css({'visibility': 'visible'});
          if ($("#bigthumb" + id).data('lastimg')) {
            $('#nextbutton').addClass("thb_cell thb_cell_v1");
          }
        }
        arrangeImages();
        var width = $("#bigthumb" + id).width();
        if (width && width > 78) {
          $("#class_thb_c23" + id).addClass("thb_c23_on");
        }
        if (width && width < 37) {
          $("#class_thb_c23" + id).css('margin-right', width/3 - 14 + 'px');
        }
      };
    })(id);
    imageLoaders.imgLoaders[id].onerror = (function(id) {
      return function() {
        $("#bigthumb" + id).attr('src', '/images2012/thb-spacer.gif');
        for (var i = 0; i < imgSizes.length; i++) {
          if (imgSizes[i][0] == id) {
            imgSizes[i][1] = imgSizes[i][2] = 1;
            break;
          }
        }
        delete imageLoaders.imgLoaders[id];
        $("#bigthumb" + id).data('loaded', true);
        if ($("#bigthumb" + id).data('arranged')) {
          $(".showonload", "#thb_cell" + id).css({'visibility': 'visible'});
        }
        arrangeImages();
      };
    })(id);
    imageLoaders.imgLoaders[id].src = $("#bigthumb" + id).attr('src');
  });
  if (id) {
    $("#bigthumb" + id).data('lastimg', true);
  }
}

function alignTitlesFirstVisit() {
  var alignedDivs = {};
  var linkHeights = {};
  var maxHeights = {};
  $(".thb_cell").each(function() {
    if (this.id == 'nextbutton') {
      return;
    }
    if ($(this).css('visibility') == 'hidden') {
      return;
    }
    var id = this.id.replace("thb_cell", "");
    if (location.href.indexOf("_testrobots=1") == -1 && document.cookie.indexOf("_testrobots") == -1) {
      $("#lnk" + id).width($("#bigthumb" + id).width());
    }
    var top = $(this).offset().top;
    var height = ($("#lnk" + id).height() || 0) + 2;
    alignedDivs[top] = alignedDivs[top] || [];
    alignedDivs[top][alignedDivs[top].length] = id;
    maxHeights[top] = Math.max(maxHeights[top] || 0, height);
  });
  for (var top in maxHeights) {
    var height = maxHeights[top];
    for (var i = 0; i < alignedDivs[top].length; i++) {
      var id = alignedDivs[top][i];
      var $div = $("#thb_cell" + id);
      $div.attr({'style': $div.attr('style').replace(/[; ]*height *:[^;]*/, '') + '; height: ' + ($div.height() + height) + 'px !important'});
    }
  }
}

function formatRelatedSearches() {
  var $ol = $("ol.dt-related");
  var $h1 = $ol.siblings("h1");
  var n = $ol.find('>li').length;
  if ($h1.length) {
    var $p = $ol.parent();
    var $mli = $ol.find('>li').last();
    var $mul = $mli.find('ul');
    $ol.find('>li').show();
    $mul.find('li').show().appendTo($ol);
    var wp = $p.width();
    var wh = $h1.width();
    var wo = $ol.width();
    $mli.appendTo($ol);
    $mli.hide();
    while (n > 2 && wo + wh > wp - 10) {
      $li = $ol.find('>li').eq(n - 2);
      $li.prependTo($mul);
      if ($li.text() == "") {
        $li.hide();
      } else {
        $mli.show();
      }
      n--;
      wo = $ol.width();
    }
  }
  if (n > 2) {
    $li = $ol.find('>li').eq(n - 2);
    if ($li.text() == "") {
      $li.hide();
    }
  }
}
function showMoreRelatedSearches(e) {
  if (!$(this).hasClass("dt-more-s-open")) {
    $(".dt-more-s").addClass("dt-more-s-open");
    $(".dt-more-s-cnt").show();
    $(document).unbind('click', hideMoreRelatedSearches).bind('click', hideMoreRelatedSearches);
    e.stopImmediatePropagation();
  }
  e.preventDefault();
}
function hideMoreRelatedSearches() {
  $(".dt-more-s").removeClass("dt-more-s-open");
  $(".dt-more-s-cnt").hide();
  $(document).unbind('click', hideMoreRelatedSearches);
}

function showFlyout(anchor, flyout, keepPrevious, offset) {
  var $flyout = $(flyout);
  if (!$flyout.length) {
    return;
  }
  if (!$flyout.parent().is("body")) {
    $flyout.appendTo("body");
  }
  $anchor = $(anchor);
  if (!$anchor.length) {
    return;
  }
  var offset = offset || 0;
  var anchorLeft = $anchor.offset().left;
  var anchorTop = $anchor.offset().top;
  var anchorWidth = $anchor.width();
  var anchorHeight = $anchor.height();
  var flyoutWidth = $flyout.width();
  var flyoutHeight = $flyout.height();
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var scrollLeft = $(document).scrollLeft();
  var scrollTop = $(document).scrollTop();
  var flyoutLeft = 0;
  var flyoutTop = 0;
  var left, top, handle, handleLeft, handleTop;
  if (anchorLeft + anchorWidth + flyoutWidth < scrollLeft + windowWidth) {
    left = anchorLeft + anchorWidth + offset;
    top = Math.max(scrollTop, Math.min(scrollTop + windowHeight - flyoutHeight, (anchorTop + anchorHeight / 2 - flyoutHeight / 2)));
    handle = ".dt-commentboxflyarr-l-lb";
    handleLeft = "";
    handleTop = Math.max(5, Math.min(flyoutHeight - 10, anchorTop - top + anchorHeight / 2 - 5));
  } else if (anchorLeft - flyoutWidth > scrollLeft) {
    left = anchorLeft - flyoutWidth - offset;
    top = Math.max(scrollTop, Math.min(scrollTop + windowHeight - flyoutHeight, (anchorTop + anchorHeight / 2 - flyoutHeight / 2)));
    handle = ".dt-commentboxflyarr-r-lb";
    handleLeft = "";
    handleTop = Math.max(5, Math.min(flyoutHeight - 10, anchorTop - top + anchorHeight / 2 - 5));
  } else if (anchorTop + anchorHeight + flyoutHeight < scrollTop + windowHeight) {
    left = Math.max(scrollLeft, Math.min(scrollLeft + windowWidth - flyoutWidth, (anchorLeft + anchorWidth / 2 - flyoutWidth / 2)));
    top = anchorTop + anchorHeight + offset + 5;
    handle = ".dt-commentboxflyarr-t-lb";
    handleLeft = Math.max(5, Math.min(flyoutWidth - 10, anchorLeft - left + anchorWidth / 2 - 5));
    handleTop = "";
  } else {
    left = Math.max(scrollLeft, Math.min(scrollLeft + windowWidth - flyoutWidth, (anchorLeft + anchorWidth / 2 - flyoutWidth / 2)));
    top = anchorTop - flyoutHeight - offset - 5;
    handle = ".dt-commentboxflyarr-b-lb";
    handleLeft = Math.max(5, Math.min(flyoutWidth - 10, anchorLeft - left + anchorWidth / 2 - 5));
    handleTop = "";
  }
  $(".dt-commentboxflyarr-l-lb, .dt-commentboxflyarr-r-lb, .dt-commentboxflyarr-t-lb, .dt-commentboxflyarr-b-lb", $flyout).hide();
  if (handleLeft) {
    handleLeft += 'px';
  }
  if (handleTop) {
    handleTop += 'px';
  }
  if (keepPrevious || $(".dt-commentboxfly-lb").not($flyout).length == 0) {
    $(handle, $flyout).css({position: 'absolute', left: handleLeft, top: handleTop}).fadeIn();
    $flyout.css({position: 'absolute', left: left + 'px', top: top + 'px'}).fadeIn(function() {
      setTimeout(function() {
        $(document).unbind('click', hideFlyout).bind('click', hideFlyout);
        $("textarea, input[type='text'], input[type='password']", $flyout).eq(0).focus();
      }, 100);
    });
  } else {
    $(".dt-commentboxfly-lb").not($flyout).fadeOut(function() {
      $(handle, $flyout).css({position: 'absolute', left: handleLeft, top: handleTop}).fadeIn();
      $flyout.css({position: 'absolute', left: left + 'px', top: top + 'px'}).fadeIn(function() {
        setTimeout(function() {
          $(document).unbind('click', hideFlyout).bind('click', hideFlyout);
          $("textarea, input[type='text'], input[type='password']", $flyout).eq(0).focus();
        }, 100);
      });
    });
  }
}

function hideFlyout(event) {
  if (event && $(event.target).is("textarea, input, a.dt-btn-xl span")) {
    return true;
  }
  $(".dt-commentboxfly-lb").fadeOut();
  if (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  $(document).unbind('click', hideFlyout);
}

function makeDropdown(container, onchange, selectors) {
  selectors = selectors || {};
  selectors.cur = selectors.cur || "span";
  selectors.arr = selectors.arr || "a";
  selectors.list = selectors.list || "div";
  selectors.opt = selectors.opt || "div a";
  $(container).each(function() {
    var $container = $(this);
    var $cur = $(selectors.cur, $container);
    var $arr = $(selectors.arr, $container);
    var $list = $(selectors.list, $container);
    var $opt = $(selectors.opt, $container);
    if (!makeDropdown.lists) {
      makeDropdown.lists = $($list.get(0));
    } else {
      makeDropdown.lists = makeDropdown.lists.add($($list.get(0)));
    }
    $(document).click((function($container, $cur, $arr, $list, $opt, onchange) {
      return function(e) {
        var $target = $(e.target);
        if ($target.closest($container).length == 0) {
          return;
        }
        makeDropdown.lists.not($list).hide();
        if ($target.is($opt)) {
          $cur.html($target.html());
          $list.hide();
          onchange.apply(e.target);
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }
        if ($target.is($container) || $target.is($cur) || $target.is($arr)) {
          $list.toggle();
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }
      }
      })($container, $cur, $arr, $list, $opt, onchange)
    );
  });
}

function showConfirmFlyout(anchor, flyout, title, message, yesCallback, noCallback) {
  $(".flyout_yes", flyout).unbind('click').bind('click', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (yesCallback) {
      yesCallback.apply(e.target, [e]);
    }
    if ($(".dt-commentboxfly-lb:visible").length == 1) {
      $(document).unbind('click', hideFlyout);
    }
    $(flyout).fadeOut();
    return false;
  });
  $(".flyout_no", flyout).unbind('click').bind('click', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (noCallback) {
      noCallback.apply(e.target, [e]);
    }
    if ($(".dt-commentboxfly-lb:visible").length == 1) {
      $(document).unbind('click', hideFlyout);
    }
    $(flyout).fadeOut();
    return false;
  });
  $(".flyout_title", flyout).html(title);
  $(".flyout_message", flyout).html(message);
  showFlyout(anchor, flyout, true);
}
