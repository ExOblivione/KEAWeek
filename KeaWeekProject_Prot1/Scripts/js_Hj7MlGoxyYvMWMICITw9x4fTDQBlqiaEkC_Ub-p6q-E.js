(function($) {

  // Behavior to load FlexSlider
  Drupal.behaviors.flexslider = {
    attach: function(context, settings) {
      var id;
      var sliders = [];
      if ($.type(settings.flexslider) !== 'undefined' && $.type(settings.flexslider.instances) !== 'undefined') {

        for (id in settings.flexslider.instances) {

          if (settings.flexslider.optionsets[settings.flexslider.instances[id]] !== undefined) {
            if (settings.flexslider.optionsets[settings.flexslider.instances[id]].asNavFor !== '') {
              // We have to initialize all the sliders which are "asNavFor" first.
              _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
            } else {
              // Everyone else is second
              sliders[id] = settings.flexslider.optionsets[settings.flexslider.instances[id]];
            }
          }
        }
      }
      // Slider set
      for (id in sliders) {
        _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
      }
    }
  };

  /**
   * Initialize the flexslider instance
   */

  function _flexslider_init(id, optionset, context) {
    $('#' + id, context).once('flexslider', function() {
      // Remove width/height attributes
      // @todo load the css path from the settings
      $(this).find('ul.slides > li > *').removeAttr('width').removeAttr('height');

      if ($(optionset.selector, this).length < 2) {
        // Remove pause button if slides are less then two.
        optionset.pausePlay = false;
      }

      if (optionset) {
        // Add events that developers can use to interact.
        $(this).flexslider($.extend(optionset, {
          start: function(slider) {
            slider.trigger('start');
          },
          before: function(slider) {
            slider.trigger('before');
          },
          after: function(slider) {
            slider.trigger('after');
          },
          end: function(slider) {
            slider.trigger('end');
          },
          added: function(slider) {
            slider.trigger('added');
          },
          removed: function(slider) {
            slider.trigger('removed');
          }
        }));
      } else {
        $(this).flexslider();
      }
    });
  }

}(jQuery));
;
(function ($) {
  Drupal.behaviors.eu_cookie_compliance_popup = {
    attach: function(context, settings) {
      $('body').not('.sliding-popup-processed').addClass('sliding-popup-processed').each(function() {
        try {
          var enabled = Drupal.settings.eu_cookie_compliance.popup_enabled;
          if(!enabled) {
            return;
          }
          if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
            return;
          } 
          var status = Drupal.eu_cookie_compliance.getCurrentStatus();
          var clicking_confirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
          var agreed_enabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
          var popup_hide_agreed = Drupal.settings.eu_cookie_compliance.popup_hide_agreed;
          if (status == 0) {
            var next_status = 1;
            if (clicking_confirms) {
              $('a, input[type=submit]').bind('click.eu_cookie_compliance', function(){
                if(!agreed_enabled) {
                  Drupal.eu_cookie_compliance.setStatus(1);
                  next_status = 2;
                }
                Drupal.eu_cookie_compliance.changeStatus(next_status);
              });
            }

            $('.agree-button').click(function(){
              if(!agreed_enabled) {
                Drupal.eu_cookie_compliance.setStatus(1);
                next_status = 2;
              }
              Drupal.eu_cookie_compliance.changeStatus(next_status);
            });

            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info);
          } else if(status == 1) {
            Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);
            if (popup_hide_agreed) {
              $('a, input[type=submit]').bind('click.eu_cookie_compliance_hideagreed', function(){
                Drupal.eu_cookie_compliance.changeStatus(2);
              });
            }

          } else {
            return;
          }
        }
        catch(e) {
          return;
        }
      });
    }
  }

  Drupal.eu_cookie_compliance = {};

  Drupal.eu_cookie_compliance.createPopup = function(html) {
    var popup = $(html)
      .attr({"id": "sliding-popup"})
      .height(Drupal.settings.eu_cookie_compliance.popup_height)
      .width(Drupal.settings.eu_cookie_compliance.popup_width)
      .hide();
    if(Drupal.settings.eu_cookie_compliance.popup_position) {
      popup.prependTo("body");
      var height = popup.height();
      popup.show()
        .attr({"class": "sliding-popup-top"})
        .css({"top": -1 * height})
        .animate({top: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
    } else {
      popup.appendTo("body");
      height = popup.height();
      popup.show()
        .attr({"class": "sliding-popup-bottom"})
        .css({"bottom": -1 * height})
        .animate({bottom: 0}, Drupal.settings.eu_cookie_compliance.popup_delay)
    }
    Drupal.eu_cookie_compliance.attachEvents();
  }

  Drupal.eu_cookie_compliance.attachEvents = function() {
	var clicking_confirms = Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;
    var agreed_enabled = Drupal.settings.eu_cookie_compliance.popup_agreed_enabled;
    $('.find-more-button').click(function(){
      if (Drupal.settings.eu_cookie_compliance.popup_link_new_window) {
        window.open(Drupal.settings.eu_cookie_compliance.popup_link);
      }
      else{
        window.location.href = Drupal.settings.eu_cookie_compliance.popup_link;
      }
    });
    $('.agree-button').click(function(){
      var next_status = 1;
      if(!agreed_enabled) {
        Drupal.eu_cookie_compliance.setStatus(1);
        next_status = 2;
      }
      if (clicking_confirms) {
        $('a, input[type=submit]').unbind('click.eu_cookie_compliance');
      }
      Drupal.eu_cookie_compliance.changeStatus(next_status);
    });
    $('.hide-popup-button').click(function(){
      Drupal.eu_cookie_compliance.changeStatus(2);
    });
  }

  Drupal.eu_cookie_compliance.getCurrentStatus = function() {
	name = 'cookie-agreed';
	value = Drupal.eu_cookie_compliance.getCookie(name);
	return value;
  }

  Drupal.eu_cookie_compliance.changeStatus = function(value) {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if (status == value) return;
    if(Drupal.settings.eu_cookie_compliance.popup_position) {
      $(".sliding-popup-top").animate({top: $("#sliding-popup").height() * -1}, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if(status == 0) {
          $("#sliding-popup").html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({top: 0}, Drupal.settings.eu_cookie_compliance.popup_delay);
          Drupal.eu_cookie_compliance.attachEvents();
        }
        if(status == 1) {
          $("#sliding-popup").remove();
        }
      })
    } else {
      $(".sliding-popup-bottom").animate({bottom: $("#sliding-popup").height() * -1}, Drupal.settings.eu_cookie_compliance.popup_delay, function () {
        if(status == 0) {
          $("#sliding-popup").html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({bottom: 0}, Drupal.settings.eu_cookie_compliance.popup_delay)
          Drupal.eu_cookie_compliance.attachEvents();
        }
        if(status == 1) {
          $("#sliding-popup").remove();
        }
      ;})
    }
    Drupal.eu_cookie_compliance.setStatus(value);
  }

  Drupal.eu_cookie_compliance.setStatus = function(status) {
    var date = new Date();
    date.setDate(date.getDate() + 100);
    var cookie = "cookie-agreed=" + status + ";expires=" + date.toUTCString() + ";path=" + Drupal.settings.basePath;
    if(Drupal.settings.eu_cookie_compliance.domain) {
      cookie += ";domain="+Drupal.settings.eu_cookie_compliance.domain;
    }
    document.cookie = cookie;
  }

  Drupal.eu_cookie_compliance.hasAgreed = function() {
    var status = Drupal.eu_cookie_compliance.getCurrentStatus();
    if(status == 1 || status == 2) {
      return true;
    }
    return false;
  }


  /**
   * Verbatim copy of Drupal.comment.getCookie().
   */
  Drupal.eu_cookie_compliance.getCookie = function(name) {
    var search = name + '=';
    var returnValue = '';

    if (document.cookie.length > 0) {
      offset = document.cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        var end = document.cookie.indexOf(';', offset);
        if (end == -1) {
          end = document.cookie.length;
        }
        returnValue = decodeURIComponent(document.cookie.substring(offset, end).replace(/\+/g, '%20'));
      }
    }

    return returnValue;
  };
  
  Drupal.eu_cookie_compliance.cookiesEnabled = function() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
      if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) { 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
      }
    return (cookieEnabled);
  }
  
})(jQuery);;
(function($) {  
  Drupal.behaviors.afterFlexslider = {
    attach: function(context, settings) {
      
      $('.flexslider').once('flexslider-after').each(function(){        
        var this_flexslider = $(this);
        var counter = window.setInterval(function() {
          if($( '.flex-viewport', this_flexslider).length) {
            $( '.flex-viewport', this_flexslider).append( $( '.controls', this_flexslider ) );
            
            window.clearInterval(counter);
          }       
        }, 200);  
        var nav_counter = window.setInterval(function() { 
          if($( '.flex-control-nav', this_flexslider).length && $( '.flex-direction-nav', this_flexslider).length) {
            if($( '.flex-pauseplay', this_flexslider).length) {
              $( '.flex-control-nav', this_flexslider).after( $( '.flex-pauseplay', this_flexslider ) );
            }
            $('.flex-control-nav, .flex-pauseplay', this_flexslider).wrapAll('<div class="controls-nav" />');

            $('.controls', this_flexslider).append($('.controls-nav', this_flexslider));
            $('.controls', this_flexslider).append($('.flex-direction-nav', this_flexslider));
            
            window.clearInterval(nav_counter);
          }
        }, 200);
      });
    }
  };
})(jQuery);
;
(function(e){e.fn.customScrollbar=function(i,t){var o={skin:undefined,hScroll:true,vScroll:true,updateOnWindowResize:false,animationSpeed:300,onCustomScroll:undefined,swipeSpeed:1,wheelSpeed:40,fixedThumbWidth:undefined,fixedThumbHeight:undefined};var s=function(i,t){this.$element=e(i);this.options=t;this.addScrollableClass();this.addSkinClass();this.addScrollBarComponents();if(this.options.vScroll)this.vScrollbar=new n(this,new r);if(this.options.hScroll)this.hScrollbar=new n(this,new l);this.$element.data("scrollable",this);this.initKeyboardScrolling();this.bindEvents()};s.prototype={addScrollableClass:function(){if(!this.$element.hasClass("scrollable")){this.scrollableAdded=true;this.$element.addClass("scrollable")}},removeScrollableClass:function(){if(this.scrollableAdded)this.$element.removeClass("scrollable")},addSkinClass:function(){if(typeof this.options.skin=="string"&&!this.$element.hasClass(this.options.skin)){this.skinClassAdded=true;this.$element.addClass(this.options.skin)}},removeSkinClass:function(){if(this.skinClassAdded)this.$element.removeClass(this.options.skin)},addScrollBarComponents:function(){this.assignViewPort();if(this.$viewPort.length==0){this.$element.wrapInner('<div class="viewport" />');this.assignViewPort();this.viewPortAdded=true}this.assignOverview();if(this.$overview.length==0){this.$viewPort.wrapInner('<div class="overview" />');this.assignOverview();this.overviewAdded=true}this.addScrollBar("vertical","prepend");this.addScrollBar("horizontal","append")},removeScrollbarComponents:function(){this.removeScrollbar("vertical");this.removeScrollbar("horizontal");if(this.overviewAdded)this.$element.unwrap();if(this.viewPortAdded)this.$element.unwrap()},removeScrollbar:function(e){if(this[e+"ScrollbarAdded"])this.$element.find(".scroll-bar."+e).remove()},assignViewPort:function(){this.$viewPort=this.$element.find(".viewport")},assignOverview:function(){this.$overview=this.$viewPort.find(".overview")},addScrollBar:function(e,i){if(this.$element.find(".scroll-bar."+e).length==0){this.$element[i]("<div class='scroll-bar "+e+"'><div class='thumb'></div></div>");this[e+"ScrollbarAdded"]=true}},resize:function(e){if(this.vScrollbar)this.vScrollbar.resize(e);if(this.hScrollbar)this.hScrollbar.resize(e)},scrollTo:function(e){if(this.vScrollbar)this.vScrollbar.scrollToElement(e);if(this.hScrollbar)this.hScrollbar.scrollToElement(e)},scrollToXY:function(e,i){this.scrollToX(e);this.scrollToY(i)},scrollToX:function(e){if(this.hScrollbar)this.hScrollbar.scrollOverviewTo(e,true)},scrollToY:function(e){if(this.vScrollbar)this.vScrollbar.scrollOverviewTo(e,true)},remove:function(){this.removeScrollableClass();this.removeSkinClass();this.removeScrollbarComponents();this.$element.data("scrollable",null);this.removeKeyboardScrolling();if(this.vScrollbar)this.vScrollbar.remove();if(this.hScrollbar)this.hScrollbar.remove()},setAnimationSpeed:function(e){this.options.animationSpeed=e},isInside:function(i,t){var o=e(i);var s=e(t);var n=o.offset();var l=s.offset();return n.top>=l.top&&n.left>=l.left&&n.top+o.height()<=l.top+s.height()&&n.left+o.width()<=l.left+s.width()},initKeyboardScrolling:function(){var e=this;this.elementKeydown=function(i){if(document.activeElement===e.$element[0]){if(e.vScrollbar)e.vScrollbar.keyScroll(i);if(e.hScrollbar)e.hScrollbar.keyScroll(i)}};this.$element.attr("tabindex","-1").keydown(this.elementKeydown)},removeKeyboardScrolling:function(){this.$element.removeAttr("tabindex").unbind("keydown",this.elementKeydown)},bindEvents:function(){if(this.options.onCustomScroll)this.$element.on("customScroll",this.options.onCustomScroll)}};var n=function(e,i){this.scrollable=e;this.sizing=i;this.$scrollBar=this.sizing.scrollBar(this.scrollable.$element);this.$thumb=this.$scrollBar.find(".thumb");this.setScrollPosition(0,0);this.resize();this.initMouseMoveScrolling();this.initMouseWheelScrolling();this.initTouchScrolling();this.initMouseClickScrolling();this.initWindowResize()};n.prototype={resize:function(e){this.scrollable.$viewPort.height(this.scrollable.$element.height());this.sizing.size(this.scrollable.$viewPort,this.sizing.size(this.scrollable.$element));this.viewPortSize=this.sizing.size(this.scrollable.$viewPort);this.overviewSize=this.sizing.size(this.scrollable.$overview);this.ratio=this.viewPortSize/this.overviewSize;this.sizing.size(this.$scrollBar,this.viewPortSize);this.thumbSize=this.calculateThumbSize();this.sizing.size(this.$thumb,this.thumbSize);this.maxThumbPosition=this.calculateMaxThumbPosition();this.maxOverviewPosition=this.calculateMaxOverviewPosition();this.enabled=this.overviewSize>this.viewPortSize;if(this.scrollPercent===undefined)this.scrollPercent=0;if(this.enabled)this.rescroll(e);else this.setScrollPosition(0,0);this.$scrollBar.toggle(this.enabled)},calculateThumbSize:function(){var e=this.sizing.fixedThumbSize(this.scrollable.options);var i;if(e)i=e;else i=this.ratio*this.viewPortSize;return Math.max(i,this.sizing.minSize(this.$thumb))},initMouseMoveScrolling:function(){var i=this;this.$thumb.mousedown(function(e){if(i.enabled)i.startMouseMoveScrolling(e)});this.documentMouseup=function(e){i.stopMouseMoveScrolling(e)};e(document).mouseup(this.documentMouseup);this.documentMousemove=function(e){i.mouseMoveScroll(e)};e(document).mousemove(this.documentMousemove);this.$thumb.click(function(e){e.stopPropagation()})},removeMouseMoveScrolling:function(){this.$thumb.unbind();e(document).unbind("mouseup",this.documentMouseup);e(document).unbind("mousemove",this.documentMousemove)},initMouseWheelScrolling:function(){var e=this;this.scrollable.$element.mousewheel(function(i,t,o,s){if(e.enabled){if(e.mouseWheelScroll(o,s)){i.stopPropagation();i.preventDefault()}}})},removeMouseWheelScrolling:function(){this.scrollable.$element.unbind("mousewheel")},initTouchScrolling:function(){if(document.addEventListener){var e=this;this.elementTouchstart=function(i){if(e.enabled)e.startTouchScrolling(i)};this.scrollable.$element[0].addEventListener("touchstart",this.elementTouchstart);this.documentTouchmove=function(i){e.touchScroll(i)};document.addEventListener("touchmove",this.documentTouchmove);this.elementTouchend=function(i){e.stopTouchScrolling(i)};this.scrollable.$element[0].addEventListener("touchend",this.elementTouchend)}},removeTouchScrolling:function(){if(document.addEventListener){this.scrollable.$element[0].removeEventListener("touchstart",this.elementTouchstart);document.removeEventListener("touchmove",this.documentTouchmove);this.scrollable.$element[0].removeEventListener("touchend",this.elementTouchend)}},initMouseClickScrolling:function(){var e=this;this.scrollBarClick=function(i){e.mouseClickScroll(i)};this.$scrollBar.click(this.scrollBarClick)},removeMouseClickScrolling:function(){this.$scrollBar.unbind("click",this.scrollBarClick)},initWindowResize:function(){if(this.scrollable.options.updateOnWindowResize){var i=this;this.windowResize=function(){i.resize()};e(window).resize(this.windowResize)}},removeWindowResize:function(){e(window).unbind("resize",this.windowResize)},isKeyScrolling:function(e){return this.keyScrollDelta(e)!=null},keyScrollDelta:function(e){for(var i in this.sizing.scrollingKeys)if(i==e)return this.sizing.scrollingKeys[e](this.viewPortSize);return null},startMouseMoveScrolling:function(i){this.mouseMoveScrolling=true;e("html").addClass("not-selectable");this.setUnselectable(e("html"),"on");this.setScrollEvent(i)},stopMouseMoveScrolling:function(i){this.mouseMoveScrolling=false;e("html").removeClass("not-selectable");this.setUnselectable(e("html"),null)},setUnselectable:function(e,i){if(e.attr("unselectable")!=i){e.attr("unselectable",i);e.find(":not(input)").attr("unselectable",i)}},mouseMoveScroll:function(e){if(this.mouseMoveScrolling){var i=this.sizing.mouseDelta(this.scrollEvent,e);this.scrollThumbBy(i);this.setScrollEvent(e)}},startTouchScrolling:function(e){if(e.touches&&e.touches.length==1){this.setScrollEvent(e.touches[0]);this.touchScrolling=true;e.stopPropagation()}},touchScroll:function(e){if(this.touchScrolling&&e.touches&&e.touches.length==1){var i=-this.sizing.mouseDelta(this.scrollEvent,e.touches[0])*this.scrollable.options.swipeSpeed;var t=this.scrollOverviewBy(i);if(t){e.stopPropagation();e.preventDefault();this.setScrollEvent(e.touches[0])}}},stopTouchScrolling:function(e){this.touchScrolling=false;e.stopPropagation()},mouseWheelScroll:function(e,i){var t=-this.sizing.wheelDelta(e,i)*this.scrollable.options.wheelSpeed;if(t!=0)return this.scrollOverviewBy(t)},mouseClickScroll:function(e){var i=this.viewPortSize-20;if(e["page"+this.sizing.scrollAxis()]<this.$thumb.offset()[this.sizing.offsetComponent()])// mouse click over thumb
i=-i;this.scrollOverviewBy(i)},keyScroll:function(e){var i=e.which;if(this.enabled&&this.isKeyScrolling(i)){if(this.scrollOverviewBy(this.keyScrollDelta(i)))e.preventDefault()}},scrollThumbBy:function(e){var i=this.thumbPosition();i+=e;i=this.positionOrMax(i,this.maxThumbPosition);var t=this.scrollPercent;this.scrollPercent=i/this.maxThumbPosition;var o=i*this.maxOverviewPosition/this.maxThumbPosition;this.setScrollPosition(o,i);if(t!=this.scrollPercent){this.triggerCustomScroll(t);return true}else return false},thumbPosition:function(){return this.$thumb.position()[this.sizing.offsetComponent()]},scrollOverviewBy:function(e){var i=this.overviewPosition()+e;return this.scrollOverviewTo(i,false)},overviewPosition:function(){return-this.scrollable.$overview.position()[this.sizing.offsetComponent()]},scrollOverviewTo:function(e,i){e=this.positionOrMax(e,this.maxOverviewPosition);var t=this.scrollPercent;this.scrollPercent=e/this.maxOverviewPosition;var o=this.scrollPercent*this.maxThumbPosition;if(i)this.setScrollPositionWithAnimation(e,o);else this.setScrollPosition(e,o);if(t!=this.scrollPercent){this.triggerCustomScroll(t);return true}else return false},positionOrMax:function(e,i){if(e<0)return 0;else if(e>i)return i;else return e},triggerCustomScroll:function(e){this.scrollable.$element.trigger("customScroll",{scrollAxis:this.sizing.scrollAxis(),direction:this.sizing.scrollDirection(e,this.scrollPercent),scrollPercent:this.scrollPercent*100})},rescroll:function(e){if(e){var i=this.positionOrMax(this.overviewPosition(),this.maxOverviewPosition);this.scrollPercent=i/this.maxOverviewPosition;var t=this.scrollPercent*this.maxThumbPosition;this.setScrollPosition(i,t)}else{var t=this.scrollPercent*this.maxThumbPosition;var i=this.scrollPercent*this.maxOverviewPosition;this.setScrollPosition(i,t)}},setScrollPosition:function(e,i){this.$thumb.css(this.sizing.offsetComponent(),i+"px");this.scrollable.$overview.css(this.sizing.offsetComponent(),-e+"px")},setScrollPositionWithAnimation:function(e,i){var t={};var o={};t[this.sizing.offsetComponent()]=i+"px";this.$thumb.animate(t,this.scrollable.options.animationSpeed);o[this.sizing.offsetComponent()]=-e+"px";this.scrollable.$overview.animate(o,this.scrollable.options.animationSpeed)},calculateMaxThumbPosition:function(){return this.sizing.size(this.$scrollBar)-this.thumbSize},calculateMaxOverviewPosition:function(){return this.sizing.size(this.scrollable.$overview)-this.sizing.size(this.scrollable.$viewPort)},setScrollEvent:function(e){var i="page"+this.sizing.scrollAxis();if(!this.scrollEvent||this.scrollEvent[i]!=e[i])this.scrollEvent={pageX:e.pageX,pageY:e.pageY}},scrollToElement:function(i){var t=e(i);if(this.sizing.isInside(t,this.scrollable.$overview)&&!this.sizing.isInside(t,this.scrollable.$viewPort)){var o=t.offset();var s=this.scrollable.$overview.offset();var n=this.scrollable.$viewPort.offset();this.scrollOverviewTo(o[this.sizing.offsetComponent()]-s[this.sizing.offsetComponent()],true)}},remove:function(){this.removeMouseMoveScrolling();this.removeMouseWheelScrolling();this.removeTouchScrolling();this.removeMouseClickScrolling();this.removeWindowResize()}};var l=function(){};l.prototype={size:function(e,i){if(i)return e.width(i);else return e.width()},minSize:function(e){return parseInt(e.css("min-width"))||0},fixedThumbSize:function(e){return e.fixedThumbWidth},scrollBar:function(e){return e.find(".scroll-bar.horizontal")},mouseDelta:function(e,i){return i.pageX-e.pageX},offsetComponent:function(){return"left"},wheelDelta:function(e,i){return e},scrollAxis:function(){return"X"},scrollDirection:function(e,i){return e<i?"right":"left"},scrollingKeys:{37:function(e){return-10},39:function(e){return 10}},isInside:function(i,t){var o=e(i);var s=e(t);var n=o.offset();var l=s.offset();return n.left>=l.left&&n.left+o.width()<=l.left+s.width()}};var r=function(){};r.prototype={size:function(e,i){if(i)return e.height(i);else return e.height()},minSize:function(e){return parseInt(e.css("min-height"))||0},fixedThumbSize:function(e){return e.fixedThumbHeight},scrollBar:function(e){return e.find(".scroll-bar.vertical")},mouseDelta:function(e,i){return i.pageY-e.pageY},offsetComponent:function(){return"top"},wheelDelta:function(e,i){return i},scrollAxis:function(){return"Y"},scrollDirection:function(e,i){return e<i?"down":"up"},scrollingKeys:{38:function(e){return-10},40:function(e){return 10},33:function(e){return-(e-20)},34:function(e){return e-20}},isInside:function(i,t){var o=e(i);var s=e(t);var n=o.offset();var l=s.offset();return n.top>=l.top&&n.top+o.height()<=l.top+s.height()}};return this.each(function(){if(i==undefined)i=o;if(typeof i=="string"){var n=e(this).data("scrollable");if(n)n[i](t)}else if(typeof i=="object"){i=e.extend(o,i);new s(e(this),i)}else throw"Invalid type of options"})}})(jQuery);(function(e){var i=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks){for(var t=i.length;t;){e.event.fixHooks[i[--t]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=i.length;e;){this.addEventListener(i[--e],o,false)}}else{this.onmousewheel=o}},teardown:function(){if(this.removeEventListener){for(var e=i.length;e;){this.removeEventListener(i[--e],o,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function o(i){var t=i||window.event,o=[].slice.call(arguments,1),s=0,n=true,l=0,r=0;i=e.event.fix(t);i.type="mousewheel";// Old school scrollwheel delta
if(t.wheelDelta){s=t.wheelDelta/120}if(t.detail){s=-t.detail/3}// New school multidimensional scroll (touchpads) deltas
r=s;// Gecko
if(t.axis!==undefined&&t.axis===t.HORIZONTAL_AXIS){r=0;l=s}// Webkit
if(t.wheelDeltaY!==undefined){r=t.wheelDeltaY/120}if(t.wheelDeltaX!==undefined){l=t.wheelDeltaX/120}// Add event and delta to the front of the arguments
o.unshift(i,s,l,r);return(e.event.dispatch||e.event.handle).apply(this,o)}})(jQuery);;
