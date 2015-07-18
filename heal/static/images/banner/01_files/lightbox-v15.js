if ($) {

  function lightbox_vars() {
    lightbox_vars.selectors = {};
    lightbox_vars.callqueue = lightbox_vars.callqueue || [];
    lightbox_vars.cookies = lightbox_vars.cookies || {};
    lightbox_vars.timeouts = lightbox_vars.timeouts || {};
    lightbox_vars.images = lightbox_vars.images || [];
    lightbox_vars.images_info = lightbox_vars.images_info || {};
    lightbox_vars.delimgs = lightbox_vars.delimgs || {};
    lightbox_vars.preloadedimgs = lightbox_vars.preloadedimgs || {};
  }

  function $lightbox(selector) {
    if (!lightbox_vars.selectors[selector]) {
      lightbox_vars.selectors[selector] = $(selector);
    }
    return lightbox_vars.selectors[selector];
  }

  function lightbox_setDirectCookie(name, value, path, domain) {
    name = "lb" + name;
    path = path || "/";
    domain = domain || "dreamstime.com";
    document.cookie = name + "=" + escape(value) +
                      "; path=" + escape(path) +
                      "; domain=" + escape(domain);
  }

  function lightbox_deleteDirectCookie(name, path, domain) {
    name = "lb" + name;
    path = path || "/";
    domain = domain || "dreamstime.com";
    document.cookie = name + "=" +
                      "; path=" + escape(path) +
                      "; domain=" + escape(domain) +
                      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }

  function lightbox_getCookie(name) {
    return lightbox_vars.cookies[name];
  }

  function lightbox_loadCookies() {
    var cookies = ["cartL", "cartT", "cartW", "cartV", "cartCollapsed", "cartScroll", "cartResized", "dockCartR", "dockCartB"];
    for (var i = 0; i < cookies.length; i++) {
      lightbox_vars.cookies[cookies[i]] = getCookie("lb" + cookies[i]);
    }
  }

  function lightbox_saveCookies() {
    for (var name in lightbox_vars.cookies) {
      value = lightbox_vars.cookies[name];
      if (value == null) {
        lightbox_deleteDirectCookie(name);
      } else {
        lightbox_setDirectCookie(name, value);
      }
    }
  }

  function lightbox_setCookie(name, value) {
    lightbox_vars.cookies[name] = value;
    if (lightbox_vars.timeouts.setCookie) {
      clearTimeout(lightbox_vars.timeouts.setCookie);
    }
    lightbox_vars.timeouts.setCookie = setTimeout(lightbox_saveCookies, 500);
  }

  function lightbox_deleteCookie(name) {
    lightbox_vars.cookies[name] = null;
    if (lightbox_vars.timeouts.setCookie) {
      clearTimeout(lightbox_vars.timeouts.setCookie);
    }
    lightbox_vars.timeouts.setCookie = setTimeout(lightbox_saveCookies, 500);
  }

  function lightbox_hasTouch() {
    return ("ontouchend" in window) ? true : false;
  }

  function lightbox_useAbsolutePosition() {
    return $.browser.msie || lightbox_hasTouch() && !lightbox_isCollapsed();
  }

  function lightbox_getMinWidth() {
    return lightbox_hasTouch() ? 660 : 640;
  }

  function lightbox_getDefaultWidth() {
    return 800;
  }

  function lightbox_getWidth() {
    var resized = lightbox_getCookie("cartResized");
    if (!resized) {
      return $(window).width() - 40;
    }
    var width = lightbox_getCookie("cartW");
    if (width) {
      return width - 0;
    }
    return lightbox_getDefaultWidth();
  }

  function lightbox_getHeight() {
    return 150;
  }

  function lightbox_getLeft() {
    var resized = lightbox_getCookie("cartResized");
    if (!resized) {
      return 20;
    }
    if (lightbox_getCookie("dockCartR") === "1") {
      return Math.max(0, $(window).width() - lightbox_getWidth());
    }
    var left = lightbox_getCookie("cartL");
    if (left != null) {
      return left - 0;
    }
    return Math.max(0, ($(window).width() - lightbox_getDefaultWidth()) / 2);
  }

  function lightbox_getTop() {
    var resized = lightbox_getCookie("cartResized");
    if (!resized) {
      return Math.max(0, $(window).height() - lightbox_getHeight());
    }
    if (lightbox_getCookie("dockCartB") === "1") {
      return Math.max(0, $(window).height() - lightbox_getHeight());
    }
    var top = lightbox_getCookie("cartT");
    if (top != "null") {
      return Math.max(0, top - 0);
    }
    return Math.max(0, $(window).height() - lightbox_getHeight());
  }

  function lightbox_getScroll() {
    return (lightbox_getCookie("cartScroll") || 0) - 0;
  }

  function lightbox_isAnonymous() {
    return $lightbox("#lightboxlightbid").length ? false : true;
  }

  function lightbox_isCollapsed() {
    return lightbox_getCookie("cartCollapsed") === "1" ? true : false;
  }

  function lightbox_isVisible() {
    if (location.href.match(/\/lightbox/)) {
      return false;
    }
    return lightbox_getCookie("cartV") === "1" ? true : false;
  }

  function lightbox_emulateClassicLightbox() {
    cart_add = cart_remove = HideCart = autohideSec = function() {};
    addToLBf = lightbox_addImage;
    addToLbId = lightbox_addImageToLightbox;
    $lightbox("#lightboxpic, body").eq(0).append('<div id="cartIframe" />');
  }

  function lightbox_noClick(event) {
    return false;
  }

  function lightbox_schedulePreloadImages() {
    lightbox_vars.scheduledPreload = true;
    if (lightbox_vars.timeouts.preload) {
      clearTimeout(lightbox_vars.timeouts.preload);
    }
    lightbox_vars.timeouts.preload = setTimeout(function() {
      delete lightbox_vars.scheduledPreload;
      lightbox_preloadImages();
    }, 1000);
  }

  function lightbox_preloadImages() {
    if (lightbox_vars.preload || lightbox_vars.scheduledPreload) {
      return;
    }
    for (var i = 0; i < lightbox_vars.images.length; i++) {
      var currentThumb = lightbox_vars.currentThumb || 0;
      var idx = (i + currentThumb - 1) % lightbox_vars.images.length;
      if (!lightbox_vars.images[idx]) {
        continue;
      }
      var id = lightbox_vars.images[idx].id;
      if (lightbox_vars.preloadedimgs[id]) {
        continue;
      }
      lightbox_vars.preloadedimgs[id] = true;
      lightbox_vars.preload = true;
      lightbox_vars.preloadimg = new Image();
      lightbox_vars.preloadimg.onload = lightbox_vars.preloadimg.onerror = function() {
        lightbox_vars.preload = false;
        setTimeout(lightbox_preloadImages, 100);
      }
      lightbox_vars.preloadimg.src = lightbox_vars.images_info[id][1];
      break;
    }
  }

  function lightbox_loadCSS() {
    //var proto = location.protocol;
    //var base_url = proto + "//" + location.hostname + "/";
    var base_url = static_adr;
    $('<link href="' + base_url + 'css/lightbox-style-v5.css" rel="stylesheet" type="text/css" />').appendTo("head");
    if ($.browser.msie) {
      if ($.browser.version <= 6) {
        $('<link href="' + base_url + 'css/lightbox-ie6-v3.css" rel="stylesheet" type="text/css" />').appendTo("head");
      }
      $('<link href="' + base_url + 'css/lightbox-ie-v4.css" rel="stylesheet" type="text/css" />').appendTo("head");
    }
    if (lightbox_hasTouch()) {
      $('<script type="text/javascript" src="' + base_url + 'css/jquery.ui.touch-punch.js"></script>').appendTo("head");
      $('<style type="text/css">' +
        '.ui-resizable-w {left: -32px !important; width :37px !important;} ' +
        '.ui-resizable-e {right: -32px !important; width: 37px !important;} ' +
        '</style>').appendTo("head");
    }
  }

  function lightbox_start() {
    lightbox_vars();
    if (lightbox_vars.started) {
      return;
    }
    lightbox_vars.started = true;
    $.ajaxSetup({
      cache: false
    });
    lightbox_emulateClassicLightbox();
    lightbox_loadCookies();
    lightbox_refreshLightbox();
  }

  function lightbox_call(params) {
    params.initializing = lightbox_vars.initializing ? 1 : 0;
    lightbox_vars.initializing = 1;
    params.sort = lightbox_vars.sort;
    if (!lightbox_vars.initialized) {
      if (lightbox_vars.pendingcall) {
        lightbox_vars.callqueue[lightbox_vars.callqueue.length] = params;
        return;
      }
      lightbox_vars.pendingcall = true;
    }
    $.get("/lightbox-controller.php", params, lightbox_dispatchResponse, 'json');
  }

  function lightbox_load() {
    if (lightbox_vars.loaded) {
      return;
    }
    lightbox_vars.loaded = true;
    lightbox_loadCSS();
    if (!lightbox_vars.initializing) {
      lightbox_call({});
    }
  }

  function lightbox_dispatchResponse(response) {
    if (!response) {
      // SEEME -- error
      return;
    }
    if (typeof response.prepend == 'object') {
      for (var selector in response.prepend) {
        $(selector).prepend(response.prepend[selector]);
      }
    }
    if (typeof response.append == 'object') {
      for (var selector in response.append) {
        $(selector).append(response.append[selector]);
      }
    }
    if (typeof response.html == 'object') {
      for (var selector in response.html) {
        $(selector).html(response.html[selector]);
      }
    }
    if (typeof response.vars == 'object') {
      for (var selector in response.vars) {
        lightbox_vars[selector] = response.vars[selector];
      }
    }
    lightbox_vars();
    if (!lightbox_vars.initialized) {
      lightbox_init();
    } else {
      lightbox_initHeader();
      lightbox_repackLightbox();
      lightbox_updateThumbButtons();
      if (response.reset_scroll) {
        lightbox_hideNew();
        if (lightbox_getScroll() < 0) {
          lightbox_scrollToThumb(0);
        }
      }
    }
    lightbox_animateImageCounter();
    lightbox_dispatchMessage();
    if (lightbox_vars.callqueue.length > 0) {
      var params = lightbox_vars.callqueue.splice(0, 1)[0];
      lightbox_vars.pendingcall = false;
      lightbox_call(params);
    } else {
      lightbox_vars.pendingcall = false;
    }
  }

  function lightbox_init() {
    lightbox_vars.initialized = true;
    lightbox_initHeader();
    $lightbox("body")
      .mousedown(lightbox_onBodyMouseDown)
      .mouseup(lightbox_onBodyMouseUp);
    $lightbox("#lightboxpic").resizable({
      handles: "e, w",
      minWidth: lightbox_getMinWidth(),
      containment: "#lightboxdraghelper",
      start: function(event, ui) {
        lightbox_vars.trailOn2 = trailOn2;
        trailOn2 = function() {};
      },
      resize: function(event, ui) {
        trailOff2();
        lightbox_deleteCookie("dockCartR");
        lightbox_setCookie("cartResized", "1");
        var left = ui.position.left - (lightbox_useAbsolutePosition() ? $(document).scrollLeft() : 0);
        var width = ui.size.width;
        if (left < 0) {
          width += left;
        }
        left = Math.max(0, left);
        width = Math.min($(window).width() - left, width);
        ui.size.width = width;
        lightbox_setCookie("cartL", left);
        lightbox_setCookie("cartW", width);
        if ($.browser.msie) {
          if (lightbox_vars.timeouts.resize) {
            return;
          }
          lightbox_vars.timeouts.resize = setTimeout(function() {
            delete lightbox_vars.timeouts.resize;
            lightbox_repackLightbox();
          }, 100);
        } else {
          lightbox_repackLightbox();
        }
      },
      stop: function(event, ui) {
        $lightbox("#lightboxdraghelper").remove();
        var offset = $lightbox("#lightboxpic").offset();
        var left = offset.left - $(document).scrollLeft();
        var top = offset.top - $(document).scrollTop();
        var width = $lightbox("#lightboxpic").width();
        lightbox_setCookie("cartL", left);
        lightbox_setCookie("cartT", top);
        lightbox_setCookie("cartW", width);
        if (left + width >= $(window).width()) {
          lightbox_setCookie("dockCartR", "1");
        } else {
          lightbox_deleteCookie("dockCartR");
        }
        lightbox_updateLightboxPosition();
        lightbox_updateLightboxSize();
        trailOn2 = lightbox_vars.trailOn2;
      }
    }).draggable({
      scroll: false,
      handle: "#lightboxpichead, #lightboxpicbody",
      cancel: "#lightboxpicdropcur, #lightboxpicdroparr, #lightboxpicdroplist, #lightboxnewlname, #lightboxpictoggle, #lightboxpicx, #lightboxpicbodygol, #lightboxpicbodygor, .lightboxpicthumbsku",
      snap: "#lightboxdraghelper",
      snapTolerance: 20,
      start: function(event, ui) {
        lightbox_hideResizeHandlers();
        lightbox_vars.trailOn2 = trailOn2;
        trailOn2 = function() {};
      },
      drag: function(event, ui) {
        trailOff2();
        lightbox_vars.dragged = true;
      },
      stop: function(event, ui) {
        $lightbox("#lightboxdraghelper").remove();
        var originalTop = ui.originalPosition.top - (lightbox_useAbsolutePosition() ? $(document).scrollTop() : 0);
        var left = ui.position.left - (lightbox_useAbsolutePosition() ? $(document).scrollLeft() : 0);
        var top = ui.position.top - (lightbox_useAbsolutePosition() ? $(document).scrollTop() : 0);
        var width = lightbox_getWidth();
        var height = lightbox_getHeight();
        lightbox_setCookie("cartL", left);
        lightbox_setCookie("cartT", top);
        if (left + width >= $(window).width() - 10) {
          lightbox_setCookie("dockCartR", "1");
        } else {
          lightbox_deleteCookie("dockCartR");
        }
        if (top + height >= $(window).height() - 10) {
          if (originalTop + height < $(window).height() - 10) {
            lightbox_deleteCookie("cartResized");
          }
          lightbox_setCookie("dockCartB", "1");
        } else {
          if (originalTop + height >= $(window).height() - 10) {
            lightbox_setCookie("cartResized", "1");
            lightbox_deleteCookie("dockCartB");
            lightbox_deleteCookie("dockCartR");
            lightbox_deleteCookie("cartL");
            lightbox_deleteCookie("cartW");
          }
        }
        lightbox_updateLightboxPosition();
        lightbox_updateLightboxSize();
        trailOn2 = lightbox_vars.trailOn2;
      }
    });
    $lightbox("#lightboxnewbutadd").mouseup(lightbox_addLightbox);
    $lightbox("#lightboxnewlname").keyup(function(event) {
      if (event.keyCode === 13) {
        lightbox_addLightbox();
      }
    });
    $lightbox("#lightboxnewbutcancel").mouseup(lightbox_hideNew);
    $lightbox("#sliderbar").draggable({
      scroll: false,
      axis: 'x',
      containment: '#sliderbarcontainment',
      start: function(event, ui) {
        lightbox_vars.trailOn2 = trailOn2;
        trailOn2 = function() {};
      },
      drag: lightbox_updateThumbsPosition,
      stop: function(event, ui) {
        trailOn2 = lightbox_vars.trailOn2;
      }
    });
    $lightbox("#lightboxpicbodygol").mousedown(function(event) {
      if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
        return;
      }
      lightbox_scrollToThumb((lightbox_vars.currentThumb || 0) - 5);
    });
    $lightbox("#lightboxpicbodygor").mousedown(function(event) {
      if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
        return;
      }
      lightbox_scrollToThumb((lightbox_vars.currentThumb || 0) + 5);
    });
    $lightbox("#sliderbarcontainment").mousedown(function(event) {
      if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
        return;
      }
      var sliderLeft = $lightbox("#sliderbar").offset().left;
      var sliderRight = sliderLeft + $lightbox("#sliderbar").width();
      var eventX = event.pageX;
      if (eventX < sliderLeft) {
        $lightbox("#lightboxpicbodygol").mousedown();
      }
      if (eventX > sliderRight) {
        $lightbox("#lightboxpicbodygor").mousedown();
      }
    });
    $(window).bind("scroll", lightbox_onWindowScroll);
    $(window).bind("resize", lightbox_onWindowResize);
    $(window).bind("load", function() {
      setTimeout(lightbox_onWindowScroll, 1000);
    });
    $(document).bind("mousemove", followmouse);
    lightbox_refreshLightbox();
    lightbox_updateThumbButtons();
  }

  function lightbox_initHeader() {
    if (lightbox_isCollapsed()) {
      $lightbox("#lightboxpictoggle").removeClass("lightboxpicmin").addClass("lightboxpicmax").attr({title: "Restore"});
    } else {
      $lightbox("#lightboxpictoggle").removeClass("lightboxpicmax").addClass("lightboxpicmin").attr({title: "Minimize"});
    }
    $lightbox("#lightboxpictoggle").mouseup(lightbox_toggleLightboxCollapse);
    $(document).keyup(function(event) {
      if (event.keyCode === 27) {
        lightbox_hideLightbox(event);
      }
    });
    $lightbox("#lightboxpicdropcur, #lightboxpicdroparr").mouseup(lightbox_toggleList);
    $lightbox("#lightboxpicnew").mouseup(lightbox_showNew);
    $lightbox("#lightboxpicx").mouseup(lightbox_hideLightbox);
    $lightbox("#lightboxpichead").find("a").mouseup(lightbox_followLink);
    $lightbox("#lightboxpicdroplist").find("a").mouseup(lightbox_chooseLightbox);
    $lightbox("#lightboxpic").find("a[href$='#']").unbind("click", lightbox_noClick).click(lightbox_noClick);
  }

  function lightbox_dispatchMessage() {
    if (lightbox_vars.message) {
      if (lightbox_vars.msg === 1 ||
          lightbox_vars.msg === 11 ||
          lightbox_vars.msg === 12 ||
          lightbox_vars.msg === 13 ||
          lightbox_vars.msg === 31 ||
          lightbox_vars.msg === 40 && lightbox_vars.images.length == 1 ||
          lightbox_vars.msg === 41 ||
          lightbox_vars.msg === 71 ||
          lightbox_vars.msg === 72 ||
          lightbox_vars.msg === 111 ||
          lightbox_vars.msg === 112) {
        lightbox_clearDelayedLoader();
        lightbox_showMessage(lightbox_vars.message, 3000);
        return;
      }
    }
    lightbox_hideLoader();
  }

  function lightbox_animateImageCounterStep(step) {
    step = step || 1;
    var classes = [3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3];
    var timeouts = [0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 50, 50];
    $lightbox("#lightboxpicimgcnt").removeClass('pinkanimated' + classes[step-1]).addClass('pinkanimated' + classes[step]);
    if (lightbox_vars.timeouts.counter) {
      clearTimeout(lightbox_vars.timeouts.counter);
    }
    if (step == classes.length - 1) {
      lightbox_vars.timeouts.counter = setTimeout(function() {
        $lightbox("#lightboxpicimgcnt span").stop(true, false).animate({'background-color': '#80776f'}, 1000);
      }, 2000);
      return;
    }
    lightbox_vars.timeouts.counter = setTimeout(function() {
      lightbox_animateImageCounterStep(step+1);
    }, timeouts[step]);
  }

  function lightbox_animateImageCounter() {
    var lightboxId = lightbox_vars.lightbox_id;
    var imgCount = lightbox_vars.images.length;
    if (lightboxId === lightbox_vars.last_lightbox_id && imgCount !== lightbox_vars.last_image_count) {
      $lightbox("#lightboxpicimgcnt span").stop(true, false).animate({'background-color': '#d6207d'}, 100, function() {
        lightbox_animateImageCounterStep();
      });
    }
    lightbox_vars.last_lightbox_id = lightboxId;
    lightbox_vars.last_image_count = imgCount;
  }

  function lightbox_followLink(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    if (!lightbox_vars.dragged && $(this).attr("href") != "#") {
      location.href = this.href;
    }
  }

  function lightbox_onWindowScroll(event) {
    lightbox_updateLightboxPosition(lightbox_hasTouch(), lightbox_bringIntoViewport);
  }

  function lightbox_onWindowResize(event) {
    if (event.target == window || event.target == document) {
      lightbox_updateLightboxPosition();
      lightbox_updateLightboxSize();
      lightbox_bringIntoViewport();
    }
  }

  function lightbox_onBodyMouseDown(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    lightbox_vars.dragged = false;
    if ($(event.target).closest("#lightboxpic").length) {
      $lightbox("#lightboxdraghelper").remove();
      lightbox_setResizeContainment();
      var lightboxWidth = lightbox_getWidth();
      var lightboxHeight = lightbox_getHeight();
      lightbox_vars.selectors["#lightboxdraghelper"] = $('<div id="lightboxdraghelper" />').css({
        position: 'absolute',
        left: $(document).scrollLeft() + "px",
        top: $(document).scrollTop() + "px",
        width: $(window).width() + "px",
        height: $(window).height() + "px"
      }).prependTo('body');
    }
    if (lightbox_listIsVisible() && $(event.target).closest("#lightboxpicdrop").length == 0) {
      lightbox_hideList();
    }
  }

  function lightbox_onBodyMouseUp(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    if ($(event.target).closest("#lightboxpic").length) {
      $lightbox("#lightboxdraghelper").remove();
    }
    if ($(event.target).is("#lightboxpichead, #lightboxpichead>div")) {
      var now = new Date().getTime();
      if (lightbox_vars.lastmouseup && now - lightbox_vars.lastmouseup < 500) {
        if (lightbox_isCollapsed()) {
          lightbox_dockToBottom();
        } else {
          lightbox_toggleDockToBottom();
        }
        lightbox_restoreLightbox();
      }
      lightbox_vars.lastmouseup = now;
    }
  }

  function lightbox_dockToBottom() {
    lightbox_deleteCookie("cartResized");
    lightbox_setCookie("dockCartB", "1");
  }

  function lightbox_undockFromBottom() {
    lightbox_setCookie("cartResized", "1");
    lightbox_deleteCookie("dockCartB");
  }

  function lightbox_toggleDockToBottom() {
    if (lightbox_getCookie("dockCartB") === "1" && lightbox_getCookie("cartResized") !== "1") {
      lightbox_undockFromBottom();
    } else {
      lightbox_dockToBottom();
    }
  }

  function lightbox_listIsVisible() {
    return $lightbox("#lightboxpicdroplist").css("display") != "none" ? true : false;
  }

  function lightbox_toggleList(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    if (lightbox_listIsVisible()) {
      lightbox_hideList();
    } else {
      lightbox_showList();
    }
  }

  function lightbox_hideList() {
    $lightbox("#lightboxpicdroplist").hide();
  }

  function lightbox_showList() {
    $lightbox("#lightboxpicdroplist").css({top: "", height: "", overflow: ""}).show();
    var listTop = $lightbox("#lightboxpicdroplist").offset().top;
    var listHeight = $lightbox("#lightboxpicdroplist").height();
    var scrollTop = $(document).scrollTop();
    var windowHeight = $(window).height();
    if (lightbox_isCollapsed()) {
      if (listTop - scrollTop < 0) {
        listHeight = listTop + listHeight - scrollTop;
        listTop = scrollTop;
        $lightbox("#lightboxpicdroplist").css({top: listTop + "px", height: listHeight + "px", overflow: "auto"});
      }
    } else {
      if (listTop + listHeight - scrollTop - windowHeight > 0) {
        listHeight = scrollTop + windowHeight - listTop;
        $lightbox("#lightboxpicdroplist").css({top: "", height: listHeight + "px", overflow: "auto"});
      }
    }
  }

  function lightbox_chooseLightbox(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    lightbox_hideList();
    var lname = $(this).html();
    $lightbox("#lightboxpicdropcur").html(lname).attr({title: lname});
    if (this.id) {
      if (this.id == 'lightboxpicdroplist_sorta') {
        lightbox_sortLightboxes('a');
      } else if (this.id == 'lightboxpicdroplist_sortd') {
        lightbox_sortLightboxes('d');
      } else if (this.id.match(/^lightboxpicdroplist_(\d+)$/)) {
        lightbox_loadLightbox(RegExp.$1);
      }
    }
  }

  function lightbox_showNew(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    if (lightbox_isCollapsed()) {
      lightbox_restoreLightbox();
    }
    if ($lightbox("#lightboxpicbodyslidethumbs").stop(true, false).css("display") != "none") {
      $lightbox("#lightboxpicbodyslidethumbs").fadeOut(function() {
        $lightbox("#lightboxnew").stop(true, false).fadeIn(function() {
          $lightbox("#lightboxnewlname").focus();
        });
      });
    }
  }

  function lightbox_hideNew(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    $lightbox("#lightboximageid").val("");
    if ($lightbox("#lightboxnew").stop(true, false).css("display") != "none") {
      $lightbox("#lightboxnew").fadeOut(function() {
        $lightbox("#lightboxnewlname").val("");
        $lightbox("#lightboxpicbodyslidethumbs").stop(true, false).fadeIn();
      });
    }
  }

  function lightbox_showLightbox(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    lightbox_load();
    lightbox_setCookie("cartV", "1");
    $lightbox("#lightboxpic").show();
    if (lightbox_isCollapsed()) {
      lightbox_collapseLightbox();
    } else {
      lightbox_restoreLightbox();
      lightbox_bringIntoViewport();
    }
  }

  function lightbox_hideLightbox(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    lightbox_deleteCookie("cartV");
    $lightbox("#lightboxpic").hide();
  }

  function lightbox_updateScroll() {
    lightbox_scrollToScrollLeft(-lightbox_getScroll(), true);
  }

  function lightbox_restoreLightbox() {
    lightbox_hideResizeHandlers();
    lightbox_deleteCookie("cartCollapsed");
    $lightbox("#lightboxpictoggle").removeClass("lightboxpicmax").addClass("lightboxpicmin").attr({title: "Minimize"});
    $lightbox("#lightboxpic").removeClass("lightboxpicminimized").addClass("lightboxpicfixed");
    lightbox_updateLightboxPosition();
    lightbox_updateLightboxSize();
    lightbox_bringIntoViewport();
    lightbox_updateScroll();
    $lightbox("#lightboxpic").resizable('enable').draggable('enable');
  }

  function lightbox_collapseLightbox() {
    lightbox_hideResizeHandlers();
    lightbox_setCookie("cartCollapsed", "1");
    $lightbox("#lightboxpic").resizable('disable').draggable('disable');
    $lightbox("#lightboxpictoggle").removeClass("lightboxpicmin").addClass("lightboxpicmax").attr({title: "Restore"});
    $lightbox("#lightboxpic").removeClass("lightboxpicfixed").addClass("lightboxpicminimized");
    lightbox_updateLightboxPosition();
    lightbox_updateLightboxSize();
  }

  function lightbox_toggleLightboxCollapse(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    if (lightbox_isCollapsed()) {
      lightbox_restoreLightbox();
    } else {
      lightbox_collapseLightbox();
    }
  }

  function lightbox_updateLightboxPosition(animate, callback) {
    $lightbox("#lightboxpic").css({position: lightbox_useAbsolutePosition() ? 'absolute' : 'fixed'});
    var offset;
    if (lightbox_isCollapsed()) {
      offset = {
        left: '',
        top: lightbox_useAbsolutePosition() ? $(document).scrollTop() + $(window).height() - 35 + 'px' : ''
      };
    } else {
      var left = lightbox_getLeft();
      var top = lightbox_getTop();
      offset = {
        left: (lightbox_useAbsolutePosition() ? $(document).scrollLeft() : 0) + left + 'px',
        top: (lightbox_useAbsolutePosition() ? $(document).scrollTop() : 0) + top + 'px'
      };
    }
    if (animate && lightbox_useAbsolutePosition()) {
      $lightbox("#lightboxpic").stop(true, false).animate(offset, "easeOutExpo", callback);
    } else {
      $lightbox("#lightboxpic").css(offset);
    }
  }

  function lightbox_updateLightboxSize() {
    $lightbox("#lightboxpic").css({position: lightbox_useAbsolutePosition() ? 'absolute' : 'fixed'});
    if (lightbox_isCollapsed()) {
      $lightbox("#lightboxpic").css({
        width: lightbox_useAbsolutePosition() ? $(window).width() + 'px' : '',
        height: ''
      });
    } else {
      var width = lightbox_getWidth();
      $lightbox("#lightboxpic").css({
        width: width + 'px',
        height: ''
      });
      lightbox_updateSnap();
      lightbox_repackLightbox();
      lightbox_updateResizeHandlers();
    }
  }

  function lightbox_updateSnap() {
    var width = lightbox_getWidth();
    if ($(window).width() - width < 100) {
      $lightbox("#lightboxpic").draggable("option", "snap", "");
    } else {
      $lightbox("#lightboxpic").draggable("option", "snap", "#lightboxdraghelper");
    }
  }

  function lightbox_refreshLightbox() {
    if (lightbox_isVisible()) {
      lightbox_showLightbox();
    } else {
      lightbox_hideLightbox();
    }
  }

  function lightbox_updateThumbButtons() {
    if (!lightbox_vars.selectors) {
      lightbox_vars();
    }
    delete lightbox_vars.selectors[".thb_c23"];
    var $thb_c23 = $lightbox(".thb_c23");
    var pageVersion = ($thb_c23.length && $thb_c23.eq(0).html() == "") ? 2 : 1;
    if (!lightbox_vars.thumbs_initialized) {
      lightbox_vars.thumbs_initialized = true;
      if (pageVersion == 1) {
        $lightbox(".thb_c232").mouseup(function(event) {
          if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
            return;
          }
          if (this.id && $lightbox("#" + this.id.replace(/^flash/, "added")).length) {
            $(this).hide();
          }
        });
      }
      if (pageVersion == 2) {
        $thb_c23.click(function(event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        });
      }
    }
    if (pageVersion == 2) {
      $thb_c23.unbind('mouseup').bind('mouseup', function(event) {
        if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
          return;
        }
        var id = this.id.replace('class_thb_c23', '');
        if ($(this).hasClass("thb_c23_rmv")) {
          lightbox_deleteImage(id);
        } else {
          lightbox_addImage(id);
        }
      });
    }
    $thb_c23.each(function() {
      if (pageVersion == 1) {
        var $img = $(this).find("img[id^='added']");
        if ($img.length && $img.attr('id').match(/^added(\d+)$/)) {
          var id = RegExp.$1;
          $lightbox("#added" + id).hide();
          $lightbox("#flash" + id).show();
        }
      }
      if (pageVersion == 2) {
        var id = this.id.replace('class_thb_c23', '');
        var width = $lightbox("#bigthumb" + id).width();
        if (lightbox_vars.images_info[id]) {
          $lightbox("#class_thb_c23" + id).addClass("thb_c23_rmv").attr('title', $lightbox("#class_thb_c23" + id).hasClass("thb_c23_vid") ? lightbox_vars.remove_video_from_lightbox : lightbox_vars.remove_image_from_lightbox);
          if (width && width > 50) {
            $(this).addClass("thb_c23_rmv_on");
          }
          if (width && width < 23) {
            $(this).css('margin-right', width/3 - 9 + 'px');
          }
          $lightbox("#bigthumb" + id).animate({opacity: 0.3}, 'slow');
        } else {
          $lightbox("#class_thb_c23" + id).removeClass("thb_c23_rmv thb_c23_rmv_on").attr('title', $lightbox("#class_thb_c23" + id).hasClass("thb_c23_vid") ? lightbox_vars.add_video_to_lightbox : lightbox_vars.add_image_to_lightbox);
          if (width && width > 78) {
            $(this).addClass("thb_c23_on");
          }
          if (width && width < 37) {
            $(this).css('margin-right', width/3 - 14 + 'px');
          }
          $lightbox("#bigthumb" + id).animate({opacity: 1}, 'slow');
        }
      }
    });
    if (pageVersion == 1) {
      $lightbox(".thb_cell").each(function() {
        var $img = $(this).find("img[id^='bigthumb']");
        if ($img.length && $img.attr('id').match(/^bigthumb(\d+)$/)) {
          var id = RegExp.$1;
          if (lightbox_vars.images_info[id]) {
            $img.animate({opacity: 0.3}, 'slow');
          } else {
            $img.animate({opacity: 1}, 'slow');
          }
        }
      });
    }
    for (var i = 0; i < lightbox_vars.images.length; i++) {
      var id = lightbox_vars.images[i].id;
      if (pageVersion == 1) {
        if ($lightbox("#added" + id).length == 0) {
          $lightbox("#flash" + id).before('<img id="added' + id + '" height="20" width="87"' +
                                          ' alt="Image added" title="Image added"' +
                                          ' src="' + static_adr + 'site-img/skin1/addLB_added.gif">');
          delete lightbox_vars.selectors["#added" + id];
        }
        $lightbox("#added" + id).css({float: "left"}).show();
        $lightbox("#flash" + id).hide();
      }
    }
  }

  function lightbox_repackLightbox() {
    lightbox_resizeThumbs();
    lightbox_scrollThumbsIntoView();
    lightbox_updateSliderPositionAndWidth();
  }

  function lightbox_resizeThumbs() {
    var lightboxWidth = lightbox_getWidth();
    $lightbox("#lightboxpicbodyslide").width(lightboxWidth - (lightbox_useAbsolutePosition() ? 70 : 64));
  }

  function lightbox_scrollThumbsIntoView() {
    var thumbWidth = 64 + 18;
    var thumbsCount = lightbox_vars.images.length;
    var thumbsViewportWidth = $lightbox("#lightboxpicbodyslide").width();
    var thumbsWidth = thumbWidth * thumbsCount - 18 - thumbsViewportWidth;
    var scrollLeft = -lightbox_getScroll();
    if (scrollLeft > 0 && thumbsWidth + scrollLeft < 0) {
      lightbox_scrollToScrollLeft(thumbsWidth, true);
    } else {
      lightbox_scrollToScrollLeft(scrollLeft, true)
    }
  }

  function lightbox_setResizeContainment() {
    if (lightbox_isVisible() && !lightbox_isCollapsed()) {
      var lightboxWidth = lightbox_getWidth();
      var lightboxHeight = lightbox_getHeight();
      $lightbox("#lightboxpic").draggable("option", "containment", [
        $(document).scrollLeft(),
        $(document).scrollTop(),
        $(document).scrollLeft() + $(window).width() - lightboxWidth,
        $(document).scrollTop() + $(window).height() - lightboxHeight
      ]);
    }
  }

  function lightbox_bringIntoViewport() {
    if (lightbox_isVisible() && !lightbox_isCollapsed()) {
      var lightboxWidth = lightbox_getWidth();
      var lightboxHeight = lightbox_getHeight();
      var lightboxLeft = lightbox_getLeft();
      var lightboxTop = lightbox_getTop();
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var positionChanged = false;
      var sizeChanged = false;
      if ((lightbox_getCookie("dockCartR") === "1") || (lightboxLeft + lightboxWidth - windowWidth > 0)) {
        lightboxLeft = Math.max(0, windowWidth - lightboxWidth);
        lightbox_setCookie("cartL", lightboxLeft);
        positionChanged = true;
      }
      if (lightboxWidth > windowWidth) {
        lightboxWidth = Math.max(lightbox_getMinWidth(), windowWidth);
        lightbox_setCookie("cartW", lightboxWidth);
        sizeChanged = true;
      }
      if (lightboxTop + lightboxHeight - windowHeight > 0) {
        lightboxTop = Math.max(0, windowHeight - lightboxHeight);
        lightbox_setCookie("cartT", lightboxTop);
        positionChanged = true;
      }
      if (positionChanged) {
        lightbox_updateLightboxPosition();
      }
      if (sizeChanged) {
        lightbox_updateLightboxSize();
      }
    }
  }

  function lightbox_hideResizeHandlers() {
    $lightbox(".ui-resizable-w, .ui-resizable-e").hide();
  }

  function lightbox_updateResizeHandlers() {
    var windowWidth = $(window).width();
    var lightboxWidth = lightbox_getWidth();
    var lightboxLeft = lightbox_getLeft();
    var handlesWidth = $lightbox(".ui-resizable-e").width();
    if (lightboxLeft < handlesWidth) {
      $lightbox(".ui-resizable-w").hide();
    } else {
      $lightbox(".ui-resizable-w").show();
    }
    if (lightboxLeft + lightboxWidth > windowWidth - handlesWidth) {
      $lightbox(".ui-resizable-e").hide();
    } else {
      $lightbox(".ui-resizable-e").show();
    }
  }

  function lightbox_updateSliderPositionAndWidth() {
    var thumbWidth = 64 + 18;
    var thumbsCount = lightbox_vars.images.length;
    var thumbsViewportWidth = $lightbox("#lightboxpicbodyslide").width();
    var thumbsWidth = thumbWidth * thumbsCount - 18 - thumbsViewportWidth;
    var scrollLeft = -lightbox_getScroll();
    var thumbsRatio = Math.max(0, Math.min(1, scrollLeft / thumbsWidth));
    var thumbsViewportRatio = Math.max(0, Math.min(1, thumbsViewportWidth / (thumbWidth * thumbsCount - 18)));
    var sliderViewportWidth = thumbsCount == 0 ? 0 : Math.max(50, thumbsViewportRatio * (lightbox_getWidth() - 10));
    var sliderWidth = lightbox_getWidth() - 10 - sliderViewportWidth;
    var sliderLeft = Math.max(0, Math.min(lightbox_getWidth() - 10 - sliderViewportWidth, thumbsRatio * sliderWidth));
    $lightbox("#sliderbar").stop(true, false);
    if (parseInt($lightbox("#sliderbar").css("left")) + $lightbox("#sliderbar").width() > lightbox_getWidth() - 10) {
      $lightbox("#sliderbar").css({left: Math.round(sliderLeft) + "px", width: Math.round(sliderViewportWidth) + "px"});
    } else {
      $lightbox("#sliderbar").animate({left: Math.round(sliderLeft) + "px", width: Math.round(sliderViewportWidth) + "px"}, "easeOutExpo");
    }
  }

  function lightbox_updateThumbsPosition() {
    var sliderWidth = lightbox_getWidth() - 10 - $lightbox("#sliderbar").width();
    var sliderLeft = parseInt($lightbox("#sliderbar").css('left')) || 0;
    var sliderRatio = Math.max(0, Math.min(1, sliderLeft / sliderWidth));
    var thumbWidth = 64 + 18;
    var thumbsCount = lightbox_vars.images.length;
    var thumbsViewportWidth = $lightbox("#lightboxpicbodyslide").width();
    var thumbsWidth = thumbWidth * thumbsCount - 18 - thumbsViewportWidth;
    var scrollLeft = sliderRatio * thumbsWidth;
    lightbox_scrollToScrollLeft(scrollLeft, false);
  }

  function lightbox_scrollToThumb(thumb) {
    var thumbsLeft = thumb * (64 + 18);
    lightbox_scrollToScrollLeft(thumbsLeft, true);
  }

  function lightbox_extendLightbox() {
    var thumbWidth = 64 + 18;
    var scrollLeft = lightbox_getScroll();
    scrollLeft -= thumbWidth;
    lightbox_setCookie("cartScroll", scrollLeft);
    //lightbox_vars.firstDomThumb = (lightbox_vars.firstDomThumb || 0) + 1;
    //lightbox_vars.currentThumb = (lightbox_vars.currentThumb || 0) + 1;
  }

  function lightbox_scrollToScrollLeft(scrollLeft, animateSlider) {
    $lightbox("#lightboxpicbodyslidethumbs").stop(true, false);
    for (var id in lightbox_vars.delimgs) {
      var $delimg = $lightbox("#thumb" + id, "#lightboxpic").parents(".lightboxpicthumb");
      $delimg.stop(true, true).remove();
      delete lightbox_vars.delimgs[id];
    }
    var thumbWidth = 64 + 18;
    var thumbsCount = lightbox_vars.images.length;
    var thumbsViewportWidth = $lightbox("#lightboxpicbodyslide").width();
    var thumbsWidth = thumbWidth * thumbsCount - 18 - thumbsViewportWidth;
    var $domThumbs = $lightbox("#lightboxpicbodyslidethumbs").find(".lightboxpicthumb");
    var domThumbsCount = $domThumbs.length;
    if (thumbsCount == 0) {
      $domThumbs.remove();
      return;
    }
    lightbox_vars.firstDomThumb = lightbox_vars.firstDomThumb || 0;
    lightbox_vars.currentThumb = lightbox_vars.currentThumb || 0;
    var minScrollLeft = 0;
    var maxScrollLeft = thumbsWidth;
    scrollLeft = Math.max(minScrollLeft, Math.min(maxScrollLeft, Math.round(scrollLeft)));
    var currentScrollLeft = -lightbox_getScroll();
    var scrollDelta = currentScrollLeft - scrollLeft;
    lightbox_setCookie("cartScroll", -scrollLeft);
    var cssLeft = (lightbox_vars.currentThumb - lightbox_vars.firstDomThumb) * thumbWidth - currentScrollLeft;
    var prependThumbsCount = Math.max(0, Math.ceil((scrollDelta) / thumbWidth));
    var appendThumbsCount = Math.max(0, Math.ceil((thumbsViewportWidth + thumbWidth - scrollDelta) / thumbWidth));
    var visibleThumbsCount = Math.ceil(thumbsViewportWidth / thumbWidth);
    var prependSkip = 0;
    var appendSkip = 0;
    if (prependThumbsCount > visibleThumbsCount) {
      prependSkip = prependThumbsCount - visibleThumbsCount;
      prependThumbsCount -= prependSkip;
    }
    if (appendThumbsCount > 2 * visibleThumbsCount) {
      appendSkip = appendThumbsCount - 2 * visibleThumbsCount;
      appendThumbsCount -= appendSkip;
    }
    prependThumbsCount = Math.max(0, prependThumbsCount - lightbox_vars.firstDomThumb);
    appendThumbsCount = Math.max(0, appendThumbsCount - (domThumbsCount - lightbox_vars.firstDomThumb));
    var prependHTML = "";
    var appendHTML = "";
    for (var i = 0; i < prependThumbsCount; i++) {
      prependHTML += lightbox_vars.empty_image;
      cssLeft -= thumbWidth;
    }
    for (var i = 0; i < appendThumbsCount; i++) {
      appendHTML += lightbox_vars.empty_image;
    }
    domThumbsCount += prependThumbsCount + appendThumbsCount;
    var cssWidth = domThumbsCount * thumbWidth;
    $lightbox("#lightboxpicbodyslidethumbs").css({left: cssLeft + "px", width: cssWidth + "px"}).prepend(prependHTML).append(appendHTML);
    cssLeft += scrollDelta + (appendSkip - prependSkip) * thumbWidth;
    lightbox_vars.firstDomThumb = Math.floor(-cssLeft / thumbWidth);
    lightbox_vars.currentThumb = Math.max(0, Math.min(thumbsCount - 1, Math.floor(scrollLeft / thumbWidth)));
    var toRemove = [];
    for (var i = lightbox_vars.firstDomThumb; i < domThumbsCount; i++) {
      var $thumbDiv = $lightbox("#lightboxpicbodyslidethumbs").find(".lightboxpicthumb").eq(i);
      var imageIndex = i - lightbox_vars.firstDomThumb + lightbox_vars.currentThumb;
      if (imageIndex < 0) {
        continue;
      }
      if (imageIndex >= thumbsCount) {
        toRemove[toRemove.length] = $thumbDiv;
        continue;
      }
      if (i > lightbox_vars.firstDomThumb + visibleThumbsCount + 1) {
        continue;
      }
      var image = lightbox_vars.images[imageIndex];
      var imageId = image.id;
      if (imageId === $thumbDiv.data("image_id")) {
        continue;
      }
      $thumbDiv.data("image_id", imageId);
      var imagesInfo = lightbox_vars.images_info[imageId];
      var link = imagesInfo[0];
      var url = imagesInfo[1];
      var alt = imagesInfo[2];
      var onMouseOver = imagesInfo[3];
      var onMouseOut = imagesInfo[4];
      $thumbDiv.html(lightbox_vars.image_placeholder
        .replace(/%IMAGE_ID%/g, imageId)
        .replace(/%LINK%/g, link)
        .replace(/%URL%/g, url)
        .replace(/%ALT%/g, alt)
        .replace(/%ONMOUSEOVER%/g, onMouseOver)
        .replace(/%ONMOUSEOUT%/g, onMouseOut)
      );
      $thumbDiv.find("a.lightboxpicthumbrm").unbind("click", lightbox_noClick).click(lightbox_noClick);
    }
    for (var i = 0; i < toRemove.length; i++) {
      toRemove[i].remove();
    }
    lightbox_schedulePreloadImages();
    $lightbox("#lightboxpicbodyslidethumbs").stop(true, false).animate({left: cssLeft + "px"}, "easeOutExpo");
    if (animateSlider) {
      var thumbsRatio = Math.max(0, Math.min(1, scrollLeft / thumbsWidth));
      var thumbsViewportRatio = Math.max(0, Math.min(1, thumbsViewportWidth / (thumbWidth * thumbsCount - 18)));
      var sliderViewportWidth = Math.max(50, thumbsViewportRatio * (lightbox_getWidth() - 10));
      var sliderWidth = lightbox_getWidth() - 10 - sliderViewportWidth;
      var sliderLeft = Math.max(0, Math.min(lightbox_getWidth() - 10 - sliderViewportWidth, thumbsRatio * sliderWidth));
      $lightbox("#sliderbar").stop(true, false).animate({left: Math.round(sliderLeft) + "px", width: Math.round(sliderViewportWidth) + "px"}, "easeOutExpo");
    }
  }

  function lightbox_showLoader() {
    $lightbox("#lightboxpicbodyslidethumbs, #lightboxpicbodymessage").fadeOut(200, function() {
      $lightbox("#lightboxpicbodyloading").fadeIn(200);
    });
  }

  function lightbox_showDelayedLoader() {
    lightbox_vars.timeouts.loader = setTimeout(lightbox_showLoader, 1000);
  }

  function lightbox_showEmptyLightbox() {
    if (lightbox_vars.images.length == 0) {
      lightbox_showMessage(lightbox_vars.empty_lightbox);
      return true;
    }
    return false;
  }

  function lightbox_clearDelayedLoader() {
    if (lightbox_vars.timeouts.loader) {
      clearTimeout(lightbox_vars.timeouts.loader);
      $lightbox("#lightboxpicbodyloading, #lightboxpicbodymessage").hide();
      $lightbox("#lightboxpicbodyslidethumbs").css({opacity: 1}).show();
    }
  }

  function lightbox_hideLoader() {
    lightbox_clearDelayedLoader();
    if (lightbox_showEmptyLightbox()) {
      return;
    }
    $lightbox("#lightboxpicbodyloading, #lightboxpicbodymessage").fadeOut(200, function() {
      $lightbox("#lightboxpicbodyslidethumbs").fadeIn(200, function() {
        $lightbox("#lightboxpicbodyslidethumbs").css({opacity: 1});
      });
    });
  }

  function lightbox_showMessage(message, timeout) {
    if (lightbox_vars.timeouts.message) {
      clearTimeout(lightbox_vars.timeouts.message);
    }
    $lightbox("#lightboxpicbodymessage").css({color: '#DADAD9', paddingTop: '30px'}).html(message);
    $lightbox("#lightboxpicbodyslidethumbs, #lightboxpicbodyloading").fadeOut(200, function() {
      $lightbox("#lightboxpicbodymessage").fadeIn(200);
    });
    if (timeout) {
      lightbox_vars.timeouts.message = setTimeout(lightbox_hideLoader, timeout);
    }
  }

  function lightbox_addLightbox(event) {
    if (event && event.which && event.which != 1 && !lightbox_hasTouch()) {
      return;
    }
    var lname = $lightbox("#lightboxnewlname").val();
    if (!lname || !lname.match(/^[a-zA-Z0-9,-_\s]+$/)) {
      return;
    }
    lightbox_showDelayedLoader();
    lightbox_call({
      lname: lname,
      addimg: $lightbox("#lightboximageid").val(),
      reset_scroll: 1
    });
    $lightbox("#lightboximageid").val("");
    return;
  }

  function lightbox_sortLightboxes(sort) {
    lightbox_vars.sort = sort;
    lightbox_showDelayedLoader();
    lightbox_call({
      lightbid: $lightbox("#lightboxlightbid").val() || ""
    });
  }

  function lightbox_loadLightbox(lightbid) {
    $lightbox("#lightboxlightbid").val(lightbid);
    lightbox_showDelayedLoader();
    lightbox_call({
      lightbid: $lightbox("#lightboxlightbid").val() || "",
      reset_scroll: 1
    });
  }

  function lightbox_addImage(id) {
    if (!lightbox_isVisible()) {
      lightbox_hideLoader();
      lightbox_restoreLightbox();
      lightbox_showLightbox();
    }
    lightbox_extendLightbox();
    lightbox_showDelayedLoader();
    var size = "";
    if ($lightbox("input[name='selectedsize']").filter(":checked").length) {
      size = $lightbox("input[name='selectedsize']").filter(":checked").val();
    }
    var license = "RF";
    if ($lightbox("#license_2").filter(":checked").length) {
      license = $lightbox("#itemtable").find("div.exthidden input[type='checkbox']").filter(":checked").eq(0).attr("id");
    }
    lightbox_call({
      lightbid: $lightbox("#lightboxlightbid").val() || "",
      addimg: id,
      size: size,
      license: license,
      reset_scroll: 1
    });
  }

  function lightbox_addImageToLightbox(iid, lid) {
    if (!lightbox_isVisible()) {
      lightbox_hideLoader();
      lightbox_restoreLightbox();
      lightbox_showLightbox();
    }
    lightbox_extendLightbox();
    lightbox_showDelayedLoader();
    lightbox_call({
      lightbid: lid,
      addimg: iid,
      reset_scroll: 1
    });
  }

  function lightbox_deleteImage(id) {
    lightbox_vars.delimgs[id] = true;
    $lightbox("#thumb" + id, "#lightboxpic").parents(".lightboxpicthumb").animate($.browser.msie && $.browser.version < 9 ? {width: 0.1, marginRight: -18} : {opacity: 0.1, marginRight: -64}, 'slow');
    lightbox_showDelayedLoader();
    lightbox_call({
      lightbid: $lightbox("#lightboxlightbid").val() || "",
      delimg: id
    });
  }

  $(lightbox_start);
  setTimeout(lightbox_start, 5000);

}
