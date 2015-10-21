/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-boxshadow-multiplebgs-opacity-rgba-textshadow-generatedcontent-csstransforms-svg-touch-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.csstransforms=function(){return!!I("transform")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};for(var J in s)B(s,J)&&(x=J.toLowerCase(),e[x]=s[J](),v.push((e[x]?"":"no-")+x));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
// Placeholder for theme script.
(function ($, Drupal) {
'use strict';
  var basepath;

 /**
  * Setup media query listeners.
  *
  * Adapt website to different screen sizes.
  * Use enquire.js to trigger js based on mediaqueries.
  */
  var adaptContent = (function() {

    function initialize () {
      /* global enquire: true */
      if (Modernizr.mq('only all')) {
        // Register enguire
        enquire.register('screen and (max-width: 50em)', {

          // REQUIRED
          // Triggered when the media query transitions
          // from *unmatched* to *matched*
          match : function() {
          },

          // OPTIONAL
          // Triggered when the media query transitions
          // from a *matched* to *unmatched*
          unmatch : function() {
          },

          // OPTIONAL
          // Triggered once immediately upon registration of handler
          setup : function() {
          },

          // OPTIONAL
          // Defaults to false
          // If true, defers execution of the setup function
          // until the first media query is matched (still just once)
          deferSetup : true
        });
      }
    }

    // Move content from target to destination. Add identifier class for easy retrieval.
    function moveContent (target, destination, identifier, relation) {
      // Cache jquery object
      var $target = $(target);
      var $destination = $(destination);

      // Move sidebar info to main content
      if (identifier) {
        $target.addClass(identifier);
      }
      if (relation == 'after') {
        $destination.after($target);
      } else {
        $destination.append($target);
      }
    }

    return {
      move: moveContent,
      init: initialize
    };

  }());


 /**
  * Initialized fitVids for media videos
  */
  var responsiveMagic = (function() {
    function fitVideo () {
      $('.bl-video').fitVids({customSelector: "iframe[src*='23video.com']"});
      $('.field-name-field-script').fitVids({customSelector: "iframe"});
      $('.file-video').fitVids({customSelector: "iframe[src*='youtube.com']"});
      $('.file-video').fitVids({customSelector: "iframe[src*='youtube-nocookie.com']"});
      $('.file-video').fitVids({customSelector: "iframe[src*='player.vimeo.com']"});
      $('.file-video').fitVids({customSelector: "iframe[src*='23video.com']"});
    }

    function fitText () {
      $('.text-callout').fitText(1.2, {
        minFontSize: '20px',
        maxFontSize: '46px'
      });
    }

    return {
      vids: fitVideo,
      text: fitText
    };
  }());


  /**
  * Toogle classes on radio buttons.
  */
  Drupal.behaviors.kkmsSocialIcons = {
    attach: function (context, settings) {
      // Add toggle link.
      function addToggle(icons) {
        var $e,
            $icons = $(icons);


        $e = $('<a />', {
            'href'   : '#',
            'class'  : 'ic-share toggle collapsible',
            'title'  : Drupal.t('Share')
          });

        $e.prepend(
          $('<span />', {
            'text'   : Drupal.t('Share'),
            'class'  : 'tx-ic'
          }));

        $e.on('click', function(event) {
          event.preventDefault();
          $icons.fadeToggle();
        });

        $icons.before($e);
      }

      // Create functions to toggle.


      // Hide content.

      // Initialize once().
      $('.bl-shareicons', context).once('shareblock', function() {
        addToggle(this);
        $(this).hide();
      });
    }
  };

  /**
   * Run functions on document ready.
   */
  $(document).ready(function() {
    var basepath = '/sites/all/themes/kkms_theme/';

    if (!Modernizr.mq('only all')) {
      $('html').addClass('no-mq');
    }

    // Use Modernizr to conditionally load and call function on load.
    Modernizr.load([
      /*{
        test: Modernizr.mq('only all'),
        nope: basepath + 'css/nv2013.nomq.css'
      },
      {
        // Test for mediaqueries
        test : window.matchMedia,
        nope : [basepath + 'js/libs/matchMedia.js' , basepath + 'js/libs/matchMedia.addListener.js']
      },
      {
        // Load enguire.js
        test: Modernizr.mq('only all'),
        yep: basepath + 'js/libs/enquire.min.js',
        callback : adaptContent.init
      },*/
      {
        // Load fitvids.js
        load: basepath + 'js/libraries/jquery.fitvids.js',
        callback : responsiveMagic.vids
      }
    ]);
    
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
      $('html').addClass('ios');
    }
  });


  /**
  * Adjust the heights in various parts
  */
  Drupal.behaviors.kkmsHeights = {
    attach: function (context, settings) {
        // Hack to have a minimum height on pages.
        function fixBodyHeight() {
            $(".sec.sec-content").css('padding-bottom',0);
            var delta = $(window).height() - $('body').height();
            if(delta>0){
                $(".sec.sec-content").css('padding-bottom',delta);
            }
        }
        
        //Place correctly the header menu for mobile and page padding
        function fixHeaderMenuMobile() {
          var sec_header = $('.sec-header');
          if(sec_header.length) {
            if(sec_header.css('position') == 'fixed') {
              $('.page').css('padding-bottom', sec_header.outerHeight() + 'px');
            }
            else {
              $('.page').css('padding-bottom', '0');
            }
          }
        }

        // Equal heights on news rows.
        $(".view-list-with-see-more .views-row").equalHeights();

        $(".view-content-shared-to-channels.view-display-id-panel_pane_3,\n\
           .view-content-shared-to-this-site.view-display-id-panel_pane_3,\n\
           .view-list-local-content.view-display-id-panel_pane_4").once('views-row-height').each(function(){

            $(".views-row", $(this)).equalHeights();
         });
       
        $(".view-content-shared-to-channels.view-display-id-panel_pane_4,\n\
           .view-content-shared-to-this-site.view-display-id-panel_pane_4,\n\
           .view-events-list.view-display-id-panel_pane_3").once('views-row-height').each(function(){

            $(".views-row", $(this)).each(function() {
              $("> div:not([class*='views-field-sm-thumb-'])", $(this)).wrapAll("<div class='views-row-custom' />");
            });
            $(".views-row-custom", $(this)).equalHeights();
         });

        $(".view-list-local-content.view-display-id-panel_pane_5").once('views-row-height').each(function(){
            $(".views-row", $(this)).each(function() {
              $("> div:not([class*='views-field-field-image'])", $(this)).wrapAll("<div class='views-row-custom' />");
            });
            $(".views-row-custom", $(this)).equalHeights();
         });
      
    
        // Equal heights on event grid rows.
        //$(".page-events-grid .search-results .search-result").equalHeights(); 

        
        fixHeaderMenuMobile();
        fixBodyHeight();
        $(window).resize(function() {
          fixHeaderMenuMobile();
          fixBodyHeight();
        });
        $(".view-list-with-see-more .views-row").resize(function() {
            //$(".view-list-with-see-more .views-row").equalHeights();
        });
    }
  };

    /**
     * Misc small adjustments
     */
    Drupal.behaviors.kkmsMisc = {
        attach: function (context, settings) {

            // Add support for closing Drupal messages.
            $(context).on('click', ".messages-icon", function(e){
              $(this).parent(".messages").remove();
            });

            // Add a class to event rows in order to style them correctly in IE8, see KKMN-822
            $(".page-events-grid .search-results .search-result:nth-child(3n+1)").addClass("first");
            $(".page-events-grid .search-results .search-result:nth-child(3n+2)").addClass("second");
            $(".page-events-grid .search-results .search-result:nth-child(3n)").addClass("third");
            
            $(".page-events-grid .search-results .search-result:nth-child(2n+1)").addClass("odd");
            $(".page-events-grid .search-results .search-result:nth-child(2n)").addClass("even");

            // Add a class to event rows in order to style them correctly in IE8, see KKMN-854
            $(".reg-middle-3-col .reg-inner .reg-inner-regions .panel-pane:nth-child(3n+1)").addClass("first");
            $(".reg-middle-3-col .reg-inner .reg-inner-regions .panel-pane:nth-child(3n+2)").addClass("second");
            $(".reg-middle-3-col .reg-inner .reg-inner-regions .panel-pane:nth-child(3n)").addClass("third");
            
            $(".reg-middle-3-col .reg-inner .reg-inner-regions .panel-pane:nth-child(2n+1)").addClass("odd");
            $(".reg-middle-3-col .reg-inner .reg-inner-regions .panel-pane:nth-child(2n)").addClass("even");
            
            $(".reg-middle-3-col .panels-ipe-sort-container .panels-ipe-portlet-wrapper:nth-child(3n+1)").addClass("first");
            $(".reg-middle-3-col .panels-ipe-sort-container .panels-ipe-portlet-wrapper:nth-child(3n+2)").addClass("second");
            $(".reg-middle-3-col .panels-ipe-sort-container .panels-ipe-portlet-wrapper:nth-child(3n)").addClass("third");
            
            $(".reg-middle-3-col .panels-ipe-sort-container .panels-ipe-portlet-wrapper:nth-child(2n+1)").addClass("odd");
            $(".reg-middle-3-col .panels-ipe-sort-container .panels-ipe-portlet-wrapper:nth-child(2n)").addClass("even");
            
            $(".sec-footer .bl-footer:nth-child(3n+1)").addClass("first");
            $(".sec-footer .bl-footer:nth-child(3n+2)").addClass("second");
            $(".sec-footer .bl-footer:nth-child(3n)").addClass("third");
            
            $(".sec-footer .bl-footer:nth-child(2n+1)").addClass("odd");
            $(".sec-footer .bl-footer:nth-child(2n)").addClass("even");
            
            $(".node-factbox-card-info .field-name-field-card-info:nth-child(3n+2)").addClass("first");
            $(".node-factbox-card-info .field-name-field-card-info:nth-child(3n)").addClass("second");
            $(".node-factbox-card-info .field-name-field-card-info:nth-child(3n+1)").addClass("third");
            
            $(".node-factbox-card-info .field-name-field-card-info:nth-child(2n)").addClass("odd");
            $(".node-factbox-card-info .field-name-field-card-info:nth-child(2n+1)").addClass("even");
            
            $(".pane-bundle-nodes-pane .fieldable-panels-pane .node:nth-child(3n+1)").addClass("first");
            $(".pane-bundle-nodes-pane .fieldable-panels-pane .node:nth-child(3n+2)").addClass("second");
            $(".pane-bundle-nodes-pane .fieldable-panels-pane .node:nth-child(3n)").addClass("third");
            
            $(".pane-bundle-coloured-infobox .field-name-field-coloured-infobox-item:nth-child(3n+1)").addClass("first");
            $(".pane-bundle-coloured-infobox .field-name-field-coloured-infobox-item:nth-child(3n+2)").addClass("second");
            $(".pane-bundle-coloured-infobox .field-name-field-coloured-infobox-item:nth-child(3n)").addClass("third");

            // View panes with filters - KKMN-2200
            $(".ctools-auto-submit-full-form div[class*='views-widget-filter']:nth-child(3n+1)").addClass("first");
            $(".ctools-auto-submit-full-form div[class*='views-widget-filter']:nth-child(3n+2)").addClass("second");
            $(".ctools-auto-submit-full-form div[class*='views-widget-filter']:nth-child(3n)").addClass("third");

            $(".pane-bundle-coloured-infobox .field-name-field-coloured-infobox-item:nth-child(2n+1)").addClass("odd");
            $(".pane-bundle-coloured-infobox .field-name-field-coloured-infobox-item:nth-child(2n)").addClass("even");
            
            $(".pane-node-field-contact .field-name-field-contact:last-child, .pane-node-field-organizer .field-name-field-organizer:last-child").addClass('last-child');
            $('.page-contact-list div[class*="pane-facetapi-"]:eq(3)').addClass("omega");

            // Taken from http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }

            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();

            $('[placeholder]').parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                })
                    });

        }
    };
    
 /**
  * Menu mobile behavior
  */
  Drupal.behaviors.kkmsMobileBehavior = {
    attach: function (context, settings) {
      var menu_section = $('.sec-menu .sec-inner', context);
      var main_menu = $('.main-menu-wrapper', menu_section);
      var header_menu = $('.sec-header', context);
      var ie_version = getInternetExplorerVersion();
      
      menu_section.once('menu-section-addings', function(){
        if (main_menu.length) {
          menu_section.prepend('<div id="main-menu-trigger" class="mobile-trigger menu-main-trigger ic-list"></div>');
        }
      });      

      $('.mobile-trigger', menu_section).once('navigation-click').click(function(){
        main_menu.toggleClass('active');
        header_menu.toggleClass('active');
        //setMenuCollapsedCookie(); Removed - KK's requirement
         
        if (ie_version != -1) {
          // IE8: ui does not repaint when css class changes
          setTimeout(function(){document.getElementsByTagName('body')[0].className+='';},200);
        }
      });
      
      //Sticky mobile menu bar
      //sticky_mobile_menu();
      //$(window).scroll(sticky_mobile_menu);
      $(window).scroll(hideMobileMenuScroll);

      //Menu level navigation
      $('.menu-top-level > li > .menu').once('menu-levels').each(function(){
        $(this).addClass('menu-level-1');
        $('> li > .menu', $(this)).each(function(){
          $(this).addClass('menu-level-2');
          $('> li > .menu', $(this)).each(function(){
            $(this).addClass('menu-level-3');
          });
        });
      });
      
      $('.menu-top-level', main_menu).once('menu-active').each(function(){
        var active_menu = $('li.active > .menu', $(this));
        if(active_menu.length){
          active_menu.parents('.menu').addClass('visible-level-left');
          active_menu.addClass('visible-level');
          var left_position = getMenuLeftPosition(active_menu);
          
          var active_menu_height = 0;
          var menu_height_interval = setInterval (function(){
            active_menu_height = active_menu.height();
            if(active_menu_height) {
              clearInterval(menu_height_interval);
              $('.menu-wrapper').height(active_menu.height());
              $('.menu-top-level', main_menu).animate({'left': '-=' + left_position}, 500);
            }
          },100);
        }
      });
      
      $('.next-level-arrow', main_menu).once('level-navigation').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        
        var visible_level = $('> .menu', $(this).parent().parent());
        $('.visible-level', main_menu).removeClass('visible-level').addClass('visible-level-left');
        visible_level.addClass('visible-level');
        $('.menu-wrapper').height(visible_level.height());
        $('.menu-top-level', main_menu).animate({'left': '-=100%'}, 500);
      });
      
      $('.prev-level', main_menu).once('level-navigation').click(function(){
        var visible_level_old = $('.visible-level', main_menu);
        var visible_level = visible_level_old.parent().parent();
        visible_level.removeClass('visible-level-left').addClass('visible-level');
        $('.menu-wrapper').height(visible_level.height());
        $('.menu-top-level', main_menu).animate({'left': '+=100%'}, 500);
        setTimeout(function(){visible_level_old.removeClass('visible-level');},500);
      });
    }
  };
  
  function hideMobileMenuScroll(){
    var main_menu = $('.main-menu-wrapper.active');
    
    if(main_menu.length > 0) {
      var viewportHeight = $(window).height();
      var window_coords = main_menu[0].getBoundingClientRect();
      
      if (window_coords.bottom < 0.25 * viewportHeight) {
        $('html, body').animate({ scrollTop: 0 }, 500);
        main_menu.removeClass('active');
        $('.sec-header').removeClass('active');
      }
    }
    
  }
  
  function sticky_mobile_menu(){
    var sec_menu = $('.sec-menu');
    var sec_header = $('.sec-header-image');
    var window_top = $(window).scrollTop();
    var sec_menu_top = sec_header.height();
    var sec_menu_height = sec_menu.outerHeight(true);
    if (window_top >= sec_menu_top) {
      if(sec_menu.is(':not(.sticky)')){
        $('.main-menu-wrapper').removeClass('active');
        $('.sec-header').removeClass('active');
      }
      sec_header.css('margin-bottom', sec_menu_height);
      sec_menu.addClass('sticky');
    } else {
      sec_menu.removeClass('sticky');
      sec_header.css('margin-bottom', 0);
    }
  }
  
  function getMenuLeftPosition(element){
    var left_shift = '0';
    if(element.is('.menu-level-1')){
      left_shift = '100%';
    }
    else if(element.is('.menu-level-2')){
      left_shift = '200%';
    }
    else if(element.is('.menu-level-3')){
      left_shift = '300%';
    }
    return left_shift;
  }
  
  /**
  * Second level menu behavior
  */
  /* The second level menu will be hidden for mobile - new request
  Drupal.behaviors.kkmsSecondMenuBehavior = {
    attach: function (context, settings) {
      var second_menu = $('.menu-block-second_level');
      
      if (second_menu.length) {
        var counter = 0;
        var second_menu_region_class;
        var second_menu_region;
        second_menu.each(function(){
          $(this).once('second-menu-block', function(){
            counter++;
            second_menu_region_class = 'second-menu-region-' + counter;
            $('#main-content').after('<div class="sec-second-menu-mobile ' + second_menu_region_class + '"><div class="sec-inner"><div class="second-menu-mobile" /></div></div>');

            second_menu_region = $('.sec-second-menu-mobile.' + second_menu_region_class + ' .second-menu-mobile');

            $('> h2', $(this).parent()).clone().appendTo(second_menu_region);
            $(this).clone().appendTo(second_menu_region);

            $('> h2', second_menu_region).once('second-menu-title').click(function(){
              $(this).parent().toggleClass('second-menu-active');
            });
          });
        });
				
      }
    }
  };
  */
  
  function getInternetExplorerVersion()
  // Returns the version of Internet Explorer or a -1
  // (indicating the use of another browser).
  {
    var rv = -1; // Default value assumes failure. 
    var ua = navigator.userAgent;

    // If user agent string contains "MSIE x.y", assume
    // Internet Explorer and use "x.y" to determine the
    // version.

    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) 
      rv = parseFloat( RegExp.$1 );
    return rv;

  }
  
  /**
    * Misc small adjustments
    */
   Drupal.behaviors.noChosenBehavior = {
     attach: function (context, settings) {
       if (/iP(od|hone)/i.test(window.navigator.userAgent) || (/Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent))) {
         $('select.facetapi-multiselect:visible').once('no-chosen-behavior').each(function(){
           var data_placeholder = $(this).attr('data-placeholder');
           $(this).before('<span class="no-chosen-label">' + data_placeholder + '</span>');
         });
       }     
     }
   };
   
   //Put a select label as a label for the "All" option
   Drupal.behaviors.optionChosenBehavior = {
     attach: function (context, settings) {
       $('select.chosen-processed').once('option-chosen-behavior').each(function(){
         var $this = $(this);
         var $label = $('label[for="'+ $this.attr('id') +'"]');
         if ($label.length > 0 ) {
           var $option = $('option[value="All"]', $this);
           if($option.length > 0){
             $label.hide();
             $option.text($label.text());
             $this.trigger("chosen:updated");
           }   
         }
       });
     }
   };
   
   Drupal.behaviors.imageAnnotatorPopup = {
    attach: function (context, settings) {
	  $(context).bind('imageAnnotatorTargetLoaded', function(e) {
		// Let's find the annotators:
  	  $('.image-annotator-target').each(function (index, span) {
        $(this).find('span[class^="image-annotator"]').each(function(i, element) {
          var id = $(this).attr('id').split('__');
     	    var number = parseInt(id[2]) + 1;
    		  var tipContent = $(this).parents('.node').find('.image-annotator-item-' + number).html();
          
          var left_position = parseInt($(this).position().left) + 0.5 * $(this).width();
          var parent_width = 0.5 * $(this).parent().width();
          
          if (left_position > parent_width) {
            var position_option = {
              my: 'bottom right',
              at: 'top left',
              container: $('.page')
            }
          }
          else {
            var position_option = {
              my: 'bottom left',
              at: 'top right',
              container: $('.page')
            }
          }
          
          $(this).qtip({
              content: {
                text: tipContent
              },
              hide: {
                delay: 400,
                fixed: true
              },
							position: position_option,
              events: {
                visible: function(event, api) {
                           var tooltip = api.elements.tooltip;
                           tooltip.removeClass('tooltip-left-zero');
                           if(parseInt(tooltip.css('left')) < 0) {tooltip.addClass('tooltip-left-zero');}
                         }
              }

          });
          $(this).parents('.node').find('.image-annotator-item').css('display', 'none');
        });
	    });
	  });
    }
  };
  
  if(Drupal.behaviors.googleChart) {
    Drupal.behaviors.googleChart = {
      attach: function(context, settings) {
       // Load the Visualization API and the chart package.
        google.load("visualization", "1", {packages:["corechart", "gauge", "orgchart", "geochart"],callback: drawChart});
        // Callback that creates and populates a data table,
        // instantiates the chart, passes in the data and
        // draws it.
        
        var chart_array = [];
        var data_array = [];
        var options_array = [];
        
        function drawChart() {
          // Loop on the charts in the settings.
          for (var chartId in settings.chart) {
            // Create the data table.
            var data = new google.visualization.DataTable();
            // OrgChart charts need a different format data table.
            if (settings.chart[chartId].chartType == "OrgChart") {
              data.addColumn('string', 'Title');
              data.addColumn('string', 'Parent');
              data.addColumn('string', 'ToolTip');
              for ( var i in settings.chart[chartId].rows ) {
                var row = new Array();
                row = [{v:settings.chart[chartId].rows[i][0], f:settings.chart[chartId].rows[i][1]}, settings.chart[chartId].rows[i][2], settings.chart[chartId].rows[i][3]];
                data.addRows([row]);
                i = parseInt(i);
                data.setRowProperty(i, 'style', settings.chart[chartId].rows[i][4]);
                data.setRowProperty(i, 'selectedStyle', settings.chart[chartId].rows[i][5]);
              }
            } 
            else {
              data.addColumn('string', 'Label');

              // Adding the colomns. 
              // These are graphs titles.
              for (var col in settings.chart[chartId].columns) {
                data.addColumn('number', settings.chart[chartId].columns[col]);
              }

              // Adding the headers.
              // The rows titles.
              for (var i in settings.chart[chartId].header) {
                var row = new Array();
                // Adding the rows.
                // The points of the column for each row.
                for (var j in settings.chart[chartId].rows) {
                  row[j] = parseFloat(settings.chart[chartId].rows[j][i]);
                } 
                row.unshift(settings.chart[chartId].header[i]);
                data.addRows([row]);
              };
            }
            data_array[chartId] = data;

            // Set chart options
            var options = settings.chart[chartId].options;
            options_array[chartId] = options;
                    
            // Instantiate and draw our chart, passing in some options.
            //var chart = new Object;
            var element = document.getElementById(settings.chart[chartId].containerId);
            if (element) {
              chart_array[chartId] = new Object;
              chart_array[chartId][settings.chart[chartId]] = new google.visualization[settings.chart[chartId].chartType](element);
              chart_array[chartId][settings.chart[chartId]].draw(data, options);
            }
          }
        }  
        
        
        function drawChartResize() {
          // Loop on the charts in the settings.
          if(typeof chart_array !== 'undefined') {
            for (var chartId in settings.chart) {
              if(typeof chart_array[chartId] !== 'undefined' && typeof chart_array[chartId][settings.chart[chartId]] !== 'undefined') {
                chart_array[chartId][settings.chart[chartId]].clearChart();
                chart_array[chartId][settings.chart[chartId]].draw(data_array[chartId], options_array[chartId]);
              }
            }
          }
        }
        
        var chart_timeout;
        var docWidth = $(document).width();
        $(window).resize(function() {
          var docNewWidth = $(document).width();
          
          // IE8 fix - compare new width with old one
          if(docWidth !== docNewWidth) {
            if (chart_timeout !== false) {
                clearTimeout(chart_timeout);
            }
            chart_timeout = setTimeout(drawChartResize, 200);
              
            //Update the width
            docWidth = docNewWidth;
          }         
        });
      
      }
    };
  }
  


  /**
    * Custom Scroll
    */
  Drupal.behaviors.customScrollBehavior = {
    attach: function (context, settings) {
      $( '.page-events-map .search-results-wrapper' ).once('search-results-fix-paging', function(){
        $(this).after( '<div class="search-results-pager"></div>');
        $( ' ~ .search-results-pager', $(this) ).append($('.item-list', $(this)));
      }); 
      $('.page-events-map .search-results-wrapper').addClass('default-skin').customScrollbar({updateOnWindowResize:true});
    }
  };
  
  Drupal.behaviors.mainMenuCollapsed = {
    attach: function (context, settings) {
      $('body').once('kk_main_menu_collapsed',function() {
        //if($.cookie('kk_main_menu_collapsed') != 'collapsed') { Removed - KK's requirement
          $('.main-menu-wrapper').addClass('active');
          $('.sec-header').addClass('active');
        //}
      });

    },
  };
  
  function setMenuCollapsedCookie() {
    if($.cookie('kk_main_menu_collapsed') != 'collapsed') {
      $.cookie('kk_main_menu_collapsed', 'collapsed', {path: '/'});
    }
  }

})(jQuery, Drupal);
;
