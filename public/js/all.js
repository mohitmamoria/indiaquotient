// Mobile menu

;(function($){

	
	$.fn.mobileMenu=function(options){
		
		if( !options.triggerMenu) throw new Error("Object options.triggerMenu required!!!");
		if( !options.subMenuTrigger) throw new Error("Object options.triggerMenu required!!!");
		var animationSpeed = options.animationSpeed || 500;
		
		
		//Initialization variables
		var $navigationList = this;
				
		if( 'ontouchstart' in window )
		{
			$(options.triggerMenu).on('touchstart',menuToggle);
			$navigationList.find('.z-nav__item '+ options.subMenuTrigger).on('touchstart', subMenuToggle);
		}else
		{
			$(options.triggerMenu).on('click',menuToggle);
			$navigationList.find('.z-nav__item '+ options.subMenuTrigger).on('click', subMenuToggle);
		}
		
		//navigation-toggle 
		
		function menuToggle(e){
			e.preventDefault();
			//$navigationList.slideToggle(animationSpeed, setClass);	
			//$(this).toggleClass('open-menu');
		};
		
		//navigation list item toggle
		
		function subMenuToggle(e){
			e.preventDefault();
			var subMenu = $(this).toggleClass('plus').parent('.z-nav__item').children('.z-nav__list-secondary');
			
			$(this).parent('.z-nav__item').parent('.z-nav__list').find('.z-nav__item .z-nav__list-secondary.z-show').not(subMenu).slideUp(animationSpeed, setClass).siblings('.z-nav__toggle-sub').toggleClass('plus');
			subMenu.slideToggle(animationSpeed, setClass);	
		}
	
		return this;
	}
	
	// function change style="display:none" to class="hide"
	function setClass (){
		var $this=$(this);
		
		if ($this.attr('style')&&$this.css('display')=='none')
		$this.removeAttr('style').removeClass('z-show').addClass('z-hide');
	
		if ($this.attr('style')&&$this.css('display')=='block')
		$this.removeAttr('style').removeClass('z-hide').addClass('z-show');
	}
	
}(jQuery))
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());        function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

        function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

          function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

        function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

                                    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

        function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

        function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
                    getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }        function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
      };        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.12
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" × "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Raphaël’s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)
/* LivIcons v1.3 minified | (c) 2013 DeeThemes | livicons.com */

;jQuery(document).ready(function(){
var dN="livicon",      //default name
    dS=28,             //default size
    dC="original",     //default color
    dHC="#000",        //default color on hover
    dCCOH=!0,          //change or don't color on hover
    dET="hover",       //default event type
    dA=!0,             //animate or don't
    dL=!1,             //loop animation or don't
    dOP=!0,            //event on parent or not
    mD=200,            //morph animation duration (ms)
    hD=200,            //hover color transition duration (ms)
    aC="activeicon",   //active class name for icons
    aPC="active",      //active class name for icons' parents
    dAC="red",         //default color for active class
lDI=JSON.stringify({connect:{d:500,it:1,sh:[{i:{a:{p:"M16.712,11.305l-1.392-2.41c-0.166-0.287-0.535-0.386-0.811-0.204c-2.281,1.507-3.908,3.907-4.363,6.714C10.094,15.732,9.8,16,9.468,16H2.6C2.269,16,2,16.269,2,16.6v0.8C2,17.731,2.269,18,2.6,18h6.868c0.332,0,0.625,0.268,0.679,0.595c0.456,2.806,2.083,5.205,4.363,6.714c0.277,0.183,0.645,0.084,0.811-0.203l1.393-2.414c0.166-0.287,0.066-0.651-0.204-0.844C14.995,20.763,14,19.004,14,16.999s0.995-3.763,2.509-4.85C16.778,11.956,16.878,11.592,16.712,11.305z",
s:"none",t:"t0,0",fl:"#333"}},f:{0:{t:"t-9,0"},10:{},70:{t:"t0,0",e:"backOut"},100:{}}},{i:{a:{p:"M29.4,16h-4.941c-0.331,0-0.663-0.262-0.793-0.567C23.057,14.004,21.65,13,20,13c-2.209,0-4,1.79-4,4c0,2.207,1.791,4,4,4c1.65,0,3.057-1.006,3.665-2.434C23.795,18.262,24.126,18,24.457,18H29.4c0.331,0,0.6-0.269,0.6-0.6v-0.8C30,16.269,29.731,16,29.4,16z",s:"none",t:"t0,0",fl:"#333"}},f:{0:{t:"t9,0"},10:{},70:{t:"t0,0",e:"backOut"},100:{}}}]},disconnect:{d:700,it:1,sh:[{i:{a:{p:"M12.712,11.305l-1.392-2.41c-0.166-0.287-0.535-0.386-0.811-0.204c-2.281,1.507-3.908,3.907-4.363,6.714C6.094,15.732,5.8,16,5.468,16H2.6C2.269,16,2,16.269,2,16.6v0.8C2,17.731,2.269,18,2.6,18h2.868c0.332,0,0.625,0.268,0.679,0.595C6.603,21.4,8.229,23.8,10.51,25.309c0.277,0.183,0.645,0.084,0.811-0.203l1.393-2.414c0.166-0.287,0.066-0.651-0.204-0.844C10.995,20.763,10,19.004,10,16.999s0.995-3.763,2.509-4.85C12.778,11.956,12.878,11.592,12.712,11.305z",
s:"none",t:"t0,0",fl:"#333"}},f:{0:{p:"M16.712,11.305l-1.392-2.41c-0.166-0.287-0.535-0.386-0.811-0.204c-2.281,1.507-3.908,3.907-4.363,6.714C10.094,15.732,9.8,16,9.468,16H2.6C2.269,16,2,16.269,2,16.6v0.8C2,17.731,2.269,18,2.6,18h6.868c0.332,0,0.625,0.268,0.679,0.595c0.456,2.806,2.083,5.205,4.363,6.714c0.277,0.183,0.645,0.084,0.811-0.203l1.393-2.414c0.166-0.287,0.066-0.651-0.204-0.844C14.995,20.763,14,19.004,14,16.999s0.995-3.763,2.509-4.85C16.778,11.956,16.878,11.592,16.712,11.305z",t:"t1,0"},35:{t:"t0,0"},
50:{p:"M12.712,11.305l-1.392-2.41c-0.166-0.287-0.535-0.386-0.811-0.204c-2.281,1.507-3.908,3.907-4.363,6.714C6.094,15.732,5.8,16,5.468,16H2.6C2.269,16,2,16.269,2,16.6v0.8C2,17.731,2.269,18,2.6,18h2.868c0.332,0,0.625,0.268,0.679,0.595C6.603,21.4,8.229,23.8,10.51,25.309c0.277,0.183,0.645,0.084,0.811-0.203l1.393-2.414c0.166-0.287,0.066-0.651-0.204-0.844C10.995,20.763,10,19.004,10,16.999s0.995-3.763,2.509-4.85C12.778,11.956,12.878,11.592,12.712,11.305z",e:"<"},100:{}}},{i:{a:{p:"M29.4,16h-1.941c-0.331,0-0.663-0.262-0.793-0.567C26.057,14.004,24.65,13,23,13c-2.209,0-4,1.79-4,4c0,2.207,1.791,4,4,4c1.65,0,3.057-1.006,3.665-2.434C26.795,18.262,27.126,18,27.457,18H29.4c0.331,0,0.6-0.269,0.6-0.6v-0.8C30,16.269,29.731,16,29.4,16z",
s:"none",t:"t0,0",fl:"#333"}},f:{0:{p:"M29.4,16h-4.941c-0.331,0-0.663-0.262-0.793-0.567C23.057,14.004,21.65,13,20,13c-2.209,0-4,1.79-4,4c0,2.207,1.791,4,4,4c1.65,0,3.057-1.006,3.665-2.434C23.795,18.262,24.126,18,24.457,18H29.4c0.331,0,0.6-0.269,0.6-0.6v-0.8C30,16.269,29.731,16,29.4,16z",t:"t-1,0"},35:{t:"t0,0"},50:{p:"M29.4,16h-1.941c-0.331,0-0.663-0.262-0.793-0.567C26.057,14.004,24.65,13,23,13c-2.209,0-4,1.79-4,4c0,2.207,1.791,4,4,4c1.65,0,3.057-1.006,3.665-2.434C26.795,18.262,27.126,18,27.457,18H29.4c0.331,0,0.6-0.269,0.6-0.6v-0.8C30,16.269,29.731,16,29.4,16z",
e:"<"},100:{}}}]},"collapse-down":{d:1E3,it:1,sh:[{i:{a:{p:"M15.28,20l-5.081-7.04C9.802,12.43,10.017,12,10.68,12H21.32c0.662,0,0.877,0.43,0.479,0.96L16.719,20C16.322,20.531,15.678,20.531,15.28,20zM22.77,26c1.787,0,3.23-1.449,3.23-3.23V9.23C26,7.445,24.557,6,22.77,6H9.23C7.445,6,6,7.445,6,9.23V22.77C6,24.551,7.445,26,9.23,26H22.77L22.77,26zM24,22.82c0,0.678-0.547,1.172-1.129,1.18H9.14C8.624,24,8,23.586,8,22.908V9.091C8,8.412,8.466,8,9.14,8h13.731C23.547,8,24,8.412,24,9.091V22.82z",s:"none",fl:"#333"}},
f:{0:{p:"M15.28,14l-5.081-7.04C9.802,6.43,10.017,6,10.68,6H21.32c0.662,0,0.877,0.43,0.479,0.96L16.719,14C16.322,14.531,15.678,14.531,15.28,14zM22.77,18c1.787,0,3.23-1.449,3.23-3.23V5.23C26,3.445,24.557,2,22.77,2H9.23C7.445,2,6,3.445,6,5.23v9.539C6,16.551,7.445,18,9.23,18H22.77L22.77,18zM24,14.82c0,0.678-0.547,1.172-1.129,1.18H9.14C8.624,16,8,15.586,8,14.908V5.091C8,4.412,8.466,4,9.14,4h13.731C23.547,4,24,4.412,24,5.091V14.82z"},10:{},30:{p:"M15.28,14l-5.081-7.04C9.802,6.43,10.017,6,10.68,6H21.32c0.662,0,0.877,0.43,0.479,0.96L16.719,14C16.322,14.531,15.678,14.531,15.28,14zM22.77,30c1.787,0,3.23-1.449,3.23-3.23V5.23C26,3.445,24.557,2,22.77,2H9.23C7.445,2,6,3.445,6,5.23V26.77C6,28.551,7.445,30,9.23,30H22.77L22.77,30zM24,26.82c0,0.678-0.547,1.172-1.129,1.18H9.14C8.624,28,8,27.586,8,26.908V5.091C8,4.412,8.466,4,9.14,4h13.731C23.547,4,24,4.412,24,5.091V26.82z"},
99:{},100:{p:"M15.28,20l-5.081-7.04C9.802,12.43,10.017,12,10.68,12H21.32c0.662,0,0.877,0.43,0.479,0.96L16.719,20C16.322,20.531,15.678,20.531,15.28,20zM22.77,26c1.787,0,3.23-1.449,3.23-3.23V9.23C26,7.445,24.557,6,22.77,6H9.23C7.445,6,6,7.445,6,9.23V22.77C6,24.551,7.445,26,9.23,26H22.77L22.77,26zM24,22.82c0,0.678-0.547,1.172-1.129,1.18H9.14C8.624,24,8,23.586,8,22.908V9.091C8,8.412,8.466,8,9.14,8h13.731C23.547,8,24,8.412,24,9.091V22.82z"},150:{}}}]},"collapse-up":{d:1E3,it:1,sh:[{i:{a:{p:"M16.72,12l5.081,7.04c0.397,0.53,0.183,0.96-0.48,0.96H10.68c-0.662,0-0.877-0.43-0.479-0.96l5.08-7.04C15.678,11.469,16.322,11.469,16.72,12zM9.23,6C7.443,6,6,7.449,6,9.23V22.77C6,24.555,7.443,26,9.23,26H22.77c1.785,0,3.23-1.445,3.23-3.23V9.23C26,7.449,24.555,6,22.77,6H9.23L9.23,6zM8,9.18C8,8.502,8.547,8.008,9.129,8H22.86C23.376,8,24,8.414,24,9.092v13.817C24,23.588,23.534,24,22.86,24H9.129C8.453,24,8,23.588,8,22.909V9.18z",
s:"none",fl:"#333"}},f:{0:{p:"M16.72,18l5.081,7.04c0.397,0.53,0.183,0.96-0.48,0.96H10.68c-0.662,0-0.877-0.43-0.479-0.96l5.08-7.04C15.678,17.469,16.322,17.469,16.72,18zM9.23,14C7.443,14,6,15.449,6,17.23v9.539C6,28.555,7.443,30,9.23,30H22.77c1.785,0,3.23-1.445,3.23-3.23V17.23c0-1.781-1.445-3.23-3.23-3.23H9.23L9.23,14zM8,17.18c0-0.678,0.547-1.172,1.129-1.18H22.86c0.516,0,1.14,0.414,1.14,1.092v9.817C24,27.588,23.534,28,22.86,28H9.129C8.453,28,8,27.588,8,26.909V17.18z"},10:{},30:{p:"M16.72,18l5.081,7.04c0.397,0.53,0.183,0.96-0.48,0.96H10.68c-0.662,0-0.877-0.43-0.479-0.96l5.08-7.04C15.678,17.469,16.322,17.469,16.72,18zM9.23,2C7.443,2,6,3.449,6,5.23V26.77C6,28.555,7.443,30,9.23,30H22.77c1.785,0,3.23-1.445,3.23-3.23V5.23C26,3.449,24.555,2,22.77,2H9.23L9.23,2zM8,5.18C8,4.502,8.547,4.008,9.129,4H22.86C23.376,4,24,4.414,24,5.092v21.817C24,27.588,23.534,28,22.86,28H9.129C8.453,28,8,27.588,8,26.909V5.18z"},
99:{},100:{p:"M16.72,12l5.081,7.04c0.397,0.53,0.183,0.96-0.48,0.96H10.68c-0.662,0-0.877-0.43-0.479-0.96l5.08-7.04C15.678,11.469,16.322,11.469,16.72,12zM9.23,6C7.443,6,6,7.449,6,9.23V22.77C6,24.555,7.443,26,9.23,26H22.77c1.785,0,3.23-1.445,3.23-3.23V9.23C26,7.449,24.555,6,22.77,6H9.23L9.23,6zM8,9.18C8,8.502,8.547,8.008,9.129,8H22.86C23.376,8,24,8.414,24,9.092v13.817C24,23.588,23.534,24,22.86,24H9.129C8.453,24,8,23.588,8,22.909V9.18z"},150:{}}}]},"expand-left":{d:1E3,it:1,sh:[{i:{a:{p:"M12,15.28l7.04-5.081C19.57,9.802,20,10.017,20,10.68V21.32c0,0.662-0.43,0.877-0.96,0.479L12,16.719C11.469,16.322,11.469,15.678,12,15.28zM6,22.77C6,24.557,7.449,26,9.23,26H22.77c1.785,0,3.23-1.443,3.23-3.23V9.23C26,7.445,24.555,6,22.77,6H9.23C7.449,6,6,7.445,6,9.23V22.77L6,22.77zM9.18,24C8.502,24,8.008,23.453,8,22.871V9.14C8,8.624,8.414,8,9.092,8h13.817C23.588,8,24,8.466,24,9.14v13.731C24,23.547,23.588,24,22.909,24H9.18z",
s:"none",fl:"#333"}},f:{0:{p:"M18,15.28l7.04-5.081C25.57,9.802,26,10.017,26,10.68V21.32c0,0.662-0.43,0.877-0.96,0.479L18,16.719C17.469,16.322,17.469,15.678,18,15.28zM14,22.77c0,1.787,1.449,3.23,3.23,3.23h9.539c1.785,0,3.23-1.443,3.23-3.23V9.23C30,7.445,28.555,6,26.77,6H17.23C15.449,6,14,7.445,14,9.23V22.77L14,22.77zM17.18,24c-0.678,0-1.172-0.547-1.18-1.129V9.14C16,8.624,16.414,8,17.092,8h9.817C27.588,8,28,8.466,28,9.14v13.731C28,23.547,27.588,24,26.909,24H17.18z"},10:{},30:{p:"M18,15.28l7.04-5.081C25.57,9.802,26,10.017,26,10.68V21.32c0,0.662-0.43,0.877-0.96,0.479L18,16.719C17.469,16.322,17.469,15.678,18,15.28zM2,22.77C2,24.557,3.449,26,5.23,26H26.77c1.785,0,3.23-1.443,3.23-3.23V9.23C30,7.445,28.555,6,26.77,6H5.23C3.449,6,2,7.445,2,9.23V22.77L2,22.77zM5.18,24C4.502,24,4.008,23.453,4,22.871V9.14C4,8.624,4.414,8,5.092,8h21.817C27.588,8,28,8.466,28,9.14v13.731C28,23.547,27.588,24,26.909,24H5.18z"},
99:{},100:{p:"M12,15.28l7.04-5.081C19.57,9.802,20,10.017,20,10.68V21.32c0,0.662-0.43,0.877-0.96,0.479L12,16.719C11.469,16.322,11.469,15.678,12,15.28zM6,22.77C6,24.557,7.449,26,9.23,26H22.77c1.785,0,3.23-1.443,3.23-3.23V9.23C26,7.445,24.555,6,22.77,6H9.23C7.449,6,6,7.445,6,9.23V22.77L6,22.77zM9.18,24C8.502,24,8.008,23.453,8,22.871V9.14C8,8.624,8.414,8,9.092,8h13.817C23.588,8,24,8.466,24,9.14v13.731C24,23.547,23.588,24,22.909,24H9.18z"},150:{}}}]},"expand-right":{d:1E3,it:1,sh:[{i:{a:{p:"M20,16.72l-7.04,5.081C12.43,22.198,12,21.983,12,21.32V10.68c0-0.662,0.43-0.877,0.96-0.479l7.04,5.08C20.531,15.678,20.531,16.322,20,16.72zM26,9.23C26,7.443,24.551,6,22.77,6H9.23C7.445,6,6,7.443,6,9.23V22.77C6,24.555,7.445,26,9.23,26H22.77c1.781,0,3.23-1.445,3.23-3.23V9.23L26,9.23zM22.82,8c0.678,0,1.172,0.547,1.18,1.129V22.86c0,0.516-0.414,1.14-1.092,1.14H9.091C8.412,24,8,23.534,8,22.86V9.129C8,8.453,8.412,8,9.091,8H22.82z",
s:"none",fl:"#333"}},f:{0:{p:"M14,16.72l-7.04,5.081C6.43,22.198,6,21.983,6,21.32V10.68c0-0.662,0.43-0.877,0.96-0.479l7.04,5.08C14.531,15.678,14.531,16.322,14,16.72zM18,9.23C18,7.443,16.551,6,14.77,6H5.23C3.445,6,2,7.443,2,9.23V22.77C2,24.555,3.445,26,5.23,26h9.539c1.781,0,3.23-1.445,3.23-3.23V9.23L18,9.23zM14.82,8c0.678,0,1.172,0.547,1.18,1.129V22.86c0,0.516-0.414,1.14-1.092,1.14H5.091C4.412,24,4,23.534,4,22.86V9.129C4,8.453,4.412,8,5.091,8H14.82z"},10:{},30:{p:"M14,16.72l-7.04,5.081C6.43,22.198,6,21.983,6,21.32V10.68c0-0.662,0.43-0.877,0.96-0.479l7.04,5.08C14.531,15.678,14.531,16.322,14,16.72zM30,9.23C30,7.443,28.551,6,26.77,6H5.23C3.445,6,2,7.443,2,9.23V22.77C2,24.555,3.445,26,5.23,26H26.77c1.781,0,3.23-1.445,3.23-3.23V9.23L30,9.23zM26.82,8c0.678,0,1.172,0.547,1.18,1.129V22.86c0,0.516-0.414,1.14-1.092,1.14H5.091C4.412,24,4,23.534,4,22.86V9.129C4,8.453,4.412,8,5.091,8H26.82z"},
99:{},100:{p:"M20,16.72l-7.04,5.081C12.43,22.198,12,21.983,12,21.32V10.68c0-0.662,0.43-0.877,0.96-0.479l7.04,5.08C20.531,15.678,20.531,16.322,20,16.72zM26,9.23C26,7.443,24.551,6,22.77,6H9.23C7.445,6,6,7.443,6,9.23V22.77C6,24.555,7.445,26,9.23,26H22.77c1.781,0,3.23-1.445,3.23-3.23V9.23L26,9.23zM22.82,8c0.678,0,1.172,0.547,1.18,1.129V22.86c0,0.516-0.414,1.14-1.092,1.14H9.091C8.412,24,8,23.534,8,22.86V9.129C8,8.453,8.412,8,9.091,8H22.82z"},150:{}}}]},battery:{d:800,it:2,sh:[{i:{a:{p:"M10,20H6v-8h4V20z",
s:"none",o:1,fl:"#333"}},f:{0:{o:0},15:{},25:{o:1},100:{}}},{i:{a:{p:"M16,20h-4v-8h4V20z",s:"none",o:1,fl:"#333"}},f:{0:{o:0},40:{},50:{o:1},100:{}}},{i:{a:{p:"M22,20h-4v-8h4V20z",s:"none",o:1,fl:"#333"}},f:{0:{o:0},65:{},75:{o:1},100:{}}},{i:{a:{p:"M26,9.2C26,8.537,25.463,8,24.801,8H3.2C2.537,8,2,8.537,2,9.2v13.601C2,23.463,2.537,24,3.2,24h21.601C25.463,24,26,23.463,26,22.801V20h2.801C29.463,20,30,19.463,30,18.801V13.2c0-0.663-0.537-1.2-1.199-1.2H26V9.2zM24,22H4V10h20V22z",s:"none",fl:"#333"}},f:{}}]},
medal:{d:700,it:1,sh:[{i:{a:{p:"M24.502,9.39l-0.807,0.001l0.652-0.475c0.672-0.482,0.82-1.423,0.33-2.092l-1.176-1.616c-0.484-0.67-1.42-0.822-2.094-0.337l-0.652,0.476l0.246-0.769c0.26-0.783-0.172-1.631-0.959-1.885l-1.902-0.617c-0.789-0.257-1.633,0.171-1.893,0.959L16,3.8l-0.248-0.764c-0.256-0.788-1.102-1.219-1.891-0.963l-1.902,0.618c-0.787,0.256-1.219,1.103-0.963,1.89l0.249,0.767l-0.651-0.474C9.923,4.387,8.985,4.537,8.497,5.207L7.323,6.824C6.836,7.496,6.983,8.433,7.655,8.92l0.651,0.474H7.5c-0.828,0-1.499,0.671-1.5,1.5l0.001,2c0,0.828,0.671,1.5,1.5,1.501h0.806l-0.651,0.474c-0.672,0.486-0.819,1.424-0.334,2.095l1.177,1.617c0.487,0.67,1.424,0.82,2.097,0.332l0.651-0.473l-0.249,0.766c-0.257,0.787,0.175,1.635,0.962,1.891l1.902,0.617c0.789,0.256,1.636-0.174,1.893-0.961l0.25-0.768l0.248,0.768c0.254,0.787,1.102,1.217,1.889,0.961l1.902-0.617c0.789-0.256,1.221-1.1,0.967-1.891l-0.248-0.766l0.65,0.473c0.668,0.488,1.607,0.338,2.094-0.332l1.172-1.617c0.488-0.672,0.344-1.607-0.328-2.099l-0.652-0.474h0.807c0.824,0.004,1.498-0.669,1.496-1.497v-1.999C26,10.066,25.332,9.394,24.502,9.39zM16.002,18.914c-3.868,0-7.001-3.132-7.001-7s3.133-7,7.001-7c3.867,0,7,3.133,7,7S19.869,18.914,16.002,18.914zM21.73,21.006l3.467,6.004l-4.098-1.1l-1.098,4.1l-4-6.928l-4.001,6.928l-1.098-4.1l-4.098,1.1l3.47-6.01c0.309,0.537,0.781,0.949,1.375,1.143l1.902,0.617c0.251,0.082,0.512,0.123,0.773,0.123c0.636,0,1.227-0.238,1.676-0.643c0.447,0.404,1.037,0.643,1.674,0.643c0.262,0,0.523-0.041,0.773-0.123l1.902-0.617C20.963,21.945,21.434,21.523,21.73,21.006zM16.002,14.648l-3.25,1.709l0.62-3.618l-2.628-2.562l3.633-0.529l1.625-3.291l1.623,3.291l3.635,0.529l-2.629,2.562l0.619,3.618L16.002,14.648z",
t:"s1",s:"none",fl:"#333"}},f:{0:{t:"s0.1",p:"M24.502,9.39l-0.807,0.001l0.652-0.475c0.672-0.482,0.82-1.423,0.33-2.092l-1.176-1.616c-0.484-0.67-1.42-0.822-2.094-0.337l-0.652,0.476l0.246-0.769c0.26-0.783-0.172-1.631-0.959-1.885l-1.902-0.617c-0.789-0.257-1.633,0.171-1.893,0.959L16,3.8l-0.248-0.764c-0.256-0.788-1.102-1.219-1.891-0.963l-1.902,0.618c-0.787,0.256-1.219,1.103-0.963,1.89l0.249,0.767l-0.651-0.474C9.923,4.387,8.985,4.537,8.497,5.207L7.323,6.824C6.836,7.496,6.983,8.433,7.655,8.92l0.651,0.474H7.5c-0.828,0-1.499,0.671-1.5,1.5l0.001,2c0,0.828,0.671,1.5,1.5,1.501h0.806l-0.651,0.474c-0.672,0.486-0.819,1.424-0.334,2.095l1.177,1.617c0.487,0.67,1.424,0.82,2.097,0.332l0.651-0.473l-0.249,0.766c-0.257,0.787,0.175,1.635,0.962,1.891l1.902,0.617c0.789,0.256,1.636-0.174,1.893-0.961l0.25-0.768l0.248,0.768c0.254,0.787,1.102,1.217,1.889,0.961l1.902-0.617c0.789-0.256,1.221-1.1,0.967-1.891l-0.248-0.766l0.65,0.473c0.668,0.488,1.607,0.338,2.094-0.332l1.172-1.617c0.488-0.672,0.344-1.607-0.328-2.099l-0.652-0.474h0.807c0.824,0.004,1.498-0.669,1.496-1.497v-1.999C26,10.066,25.332,9.394,24.502,9.39zM16.002,18.914c-3.868,0-7.001-3.132-7.001-7s3.133-7,7.001-7c3.867,0,7,3.133,7,7S19.869,18.914,16.002,18.914zM16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21L16.001,21zM16.002,14.648l-3.25,1.709l0.62-3.618l-2.628-2.562l3.633-0.529l1.625-3.291l1.623,3.291l3.635,0.529l-2.629,2.562l0.619,3.618L16.002,14.648z"},
40:{t:"s1",e:"backOut"},60:{p:"M24.502,9.39l-0.807,0.001l0.652-0.475c0.672-0.482,0.82-1.423,0.33-2.092l-1.176-1.616c-0.484-0.67-1.42-0.822-2.094-0.337l-0.652,0.476l0.246-0.769c0.26-0.783-0.172-1.631-0.959-1.885l-1.902-0.617c-0.789-0.257-1.633,0.171-1.893,0.959L16,3.8l-0.248-0.764c-0.256-0.788-1.102-1.219-1.891-0.963l-1.902,0.618c-0.787,0.256-1.219,1.103-0.963,1.89l0.249,0.767l-0.651-0.474C9.923,4.387,8.985,4.537,8.497,5.207L7.323,6.824C6.836,7.496,6.983,8.433,7.655,8.92l0.651,0.474H7.5c-0.828,0-1.499,0.671-1.5,1.5l0.001,2c0,0.828,0.671,1.5,1.5,1.501h0.806l-0.651,0.474c-0.672,0.486-0.819,1.424-0.334,2.095l1.177,1.617c0.487,0.67,1.424,0.82,2.097,0.332l0.651-0.473l-0.249,0.766c-0.257,0.787,0.175,1.635,0.962,1.891l1.902,0.617c0.789,0.256,1.636-0.174,1.893-0.961l0.25-0.768l0.248,0.768c0.254,0.787,1.102,1.217,1.889,0.961l1.902-0.617c0.789-0.256,1.221-1.1,0.967-1.891l-0.248-0.766l0.65,0.473c0.668,0.488,1.607,0.338,2.094-0.332l1.172-1.617c0.488-0.672,0.344-1.607-0.328-2.099l-0.652-0.474h0.807c0.824,0.004,1.498-0.669,1.496-1.497v-1.999C26,10.066,25.332,9.394,24.502,9.39zM16.002,18.914c-3.868,0-7.001-3.132-7.001-7s3.133-7,7.001-7c3.867,0,7,3.133,7,7S19.869,18.914,16.002,18.914zM21.73,21.006l3.467,6.004l-4.098-1.1l-1.098,4.1l-4-6.928l-4.001,6.928l-1.098-4.1l-4.098,1.1l3.47-6.01c0.309,0.537,0.781,0.949,1.375,1.143l1.902,0.617c0.251,0.082,0.512,0.123,0.773,0.123c0.636,0,1.227-0.238,1.676-0.643c0.447,0.404,1.037,0.643,1.674,0.643c0.262,0,0.523-0.041,0.773-0.123l1.902-0.617C20.963,21.945,21.434,21.523,21.73,21.006zM16.002,14.648l-3.25,1.709l0.62-3.618l-2.628-2.562l3.633-0.529l1.625-3.291l1.623,3.291l3.635,0.529l-2.629,2.562l0.619,3.618L16.002,14.648z"},
100:{}}}]},servers:{d:700,it:2,sh:[{i:{a:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM18,6h2v2h-2V6zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM20,24h-2v-2h2V24zM26,14h2v2h-2V14zM22,14h2v2h-2V14zM18,14h2v2h-2V14z",
s:"none",fl:"#333"}},f:{8:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM19,7L19,7L19,7L19,7L19,7zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM19,23L19,23L19,23L19,23L19,23zM26,14h2v2h-2V14zM23,15L23,15L23,15L23,15L23,15zM18,14h2v2h-2V14z"},
16:{},24:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM18,6h2v2h-2V6zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM20,24h-2v-2h2V24zM26,14h2v2h-2V14zM22,14h2v2h-2V14zM18,14h2v2h-2V14z"},
32:{},40:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM27,7L27,7L27,7L27,7L27,7zM22,6h2v2h-2V6zM18,6h2v2h-2V6zM26,22h2v2h-2V22zM23,23L23,23L23,23L23,23L23,23zM20,24h-2v-2h2V24zM26,14h2v2h-2V14zM22,14h2v2h-2V14zM19,15L19,15L19,15L19,15L19,15z"},
48:{},56:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM18,6h2v2h-2V6zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM20,24h-2v-2h2V24zM26,14h2v2h-2V14zM22,14h2v2h-2V14zM18,14h2v2h-2V14z"},
64:{},72:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM19,7L19,7L19,7L19,7L19,7zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM19,23L19,23L19,23L19,23L19,23zM26,14h2v2h-2V14zM23,15L23,15L23,15L23,15L23,15zM18,14h2v2h-2V14z"},
80:{},90:{p:"M28.801,10C29.463,10,30,9.463,30,8.8V5.2C30,4.537,29.463,4,28.801,4H3.2C2.537,4,2,4.537,2,5.2v3.6C2,9.463,2.537,10,3.2,10H12v2H3.2C2.537,12,2,12.537,2,13.2v3.6C2,17.463,2.537,18,3.2,18H12v2H3.2C2.537,20,2,20.537,2,21.199v3.602C2,25.463,2.537,26,3.2,26H12v2H2v2h28v-2H14v-2h14.801C29.463,26,30,25.463,30,24.801v-3.602C30,20.537,29.463,20,28.801,20H14v-2h14.801C29.463,18,30,17.463,30,16.8v-3.6c0-0.663-0.537-1.2-1.199-1.2H14v-2H28.801zM26,6h2v2h-2V6zM22,6h2v2h-2V6zM18,6h2v2h-2V6zM26,22h2v2h-2V22zM22,22h2v2h-2V22zM20,24h-2v-2h2V24zM26,14h2v2h-2V14zM22,14h2v2h-2V14zM18,14h2v2h-2V14z"},
100:{}}},{i:{a:{p:"M15,27c0,1.105-0.896,2-2,2s-2-0.895-2-2s0.896-2,2-2S15,25.895,15,27z",s:"none",o:0,t:"t0,0",fl:"#333"}},f:{0:{o:1,t:"t0,0"},5:{t:"t0,2"},40:{t:"t-11,2"},41:{o:0},50:{o:0,t:""},51:{o:1},56:{t:"t0,2"},91:{t:"t17,2"},92:{o:0},93:{t:""},100:{}}}]},"apple-logo":{d:0,it:1,sh:[{i:{a:{p:"M23.643,16.878c-0.035-3.546,2.893-5.247,3.022-5.332c-1.645-2.407-4.206-2.736-5.119-2.774c-2.181-0.221-4.255,1.284-5.362,1.284c-1.104,0-2.812-1.251-4.62-1.218c-2.376,0.035-4.567,1.382-5.792,3.51C3.303,16.633,5.14,22.98,7.546,26.455c1.177,1.701,2.579,3.611,4.42,3.543c1.772-0.07,2.443-1.146,4.587-1.146c2.144,0,2.747,1.146,4.623,1.111c1.908-0.035,3.117-1.733,4.285-3.439c1.351-1.974,1.906-3.884,1.939-3.982C27.357,22.522,23.68,21.113,23.643,16.878zM20.117,6.472C21.095,5.286,21.754,3.641,21.574,2c-1.407,0.058-3.114,0.938-4.124,2.121c-0.907,1.049-1.7,2.724-1.487,4.333C17.535,8.576,19.139,7.654,20.117,6.472z",
s:"none",fl:"#5e5e5e"}},f:{}}]},bing:{d:0,it:1,sh:[{i:{a:{p:"M2.154,4v14.789h0.02C2.381,23.899,8.482,28,16,28c7.648,0,13.846-4.241,13.846-9.474c0-5.233-6.197-9.473-13.846-9.473c-3.346,0-6.416,0.812-8.811,2.165V4H2.154zM16,12.21c4.867,0,8.811,2.827,8.811,6.316c0,3.488-3.943,6.315-8.811,6.315c-4.865,0-8.811-2.827-8.811-6.315C7.189,15.037,11.135,12.21,16,12.21zM10.176,18.526c0-2.307,2.608-4.175,5.824-4.175c3.218,0,5.825,1.868,5.825,4.175c0,2.306-2.607,4.175-5.825,4.175C12.784,22.701,10.176,20.832,10.176,18.526z",
s:"none",fl:"#0042CB"}},f:{}}]},bitbucket:{d:0,it:1,sh:[{i:{a:{p:"M16,2L16,2L16,2C9.323,2,3.872,3.795,3.872,6.023c0,0.587,1.456,9.004,2.033,12.342c0.259,1.496,4.128,3.691,10.091,3.691l0.008-0.018v0.018c5.965,0,9.833-2.195,10.09-3.691c0.578-3.338,2.035-11.755,2.035-12.342C28.129,3.795,22.676,2,16,2zM16,19.354c-2.13,0-3.854-1.727-3.854-3.855S13.87,11.643,16,11.643c2.129,0,3.856,1.727,3.856,3.855S18.129,19.354,16,19.354zM15.996,7.267C11.708,7.26,8.231,6.515,8.233,5.602c0.001-0.913,3.48-1.646,7.771-1.64c4.29,0.007,7.766,0.752,7.762,1.665C23.766,6.54,20.289,7.273,15.996,7.267zM25.145,22.186c0,0.033-0.004,0.068-0.008,0.102c-0.465,2.48-0.805,4.242-0.863,4.51C23.871,28.621,20.301,30,16,30l0,0l0,0l0,0l0,0c-4.3,0-7.87-1.379-8.274-3.203c-0.06-0.268-0.398-2.029-0.862-4.51c-0.006-0.033-0.009-0.068-0.009-0.102c0-0.328,0.208-0.475,0.429-0.475c0.185,0,0.332,0.131,0.332,0.131s2.986,2.363,8.385,2.365c5.399-0.002,8.383-2.365,8.383-2.365s0.148-0.131,0.332-0.131C24.938,21.711,25.145,21.857,25.145,22.186zM17.93,15.496c0,1.068-0.867,1.932-1.934,1.932c-1.066,0-1.934-0.863-1.934-1.932c0-1.066,0.867-1.932,1.934-1.932C17.063,13.564,17.93,14.43,17.93,15.496z",
s:"none",fl:"#003366"}},f:{}}]},blogger:{d:0,it:1,sh:[{i:{a:{p:"M28.189,12.5h-1.536H26.62c-0.962,0-1.805-0.813-1.87-1.75l0,0c0-4.995-4.026-8.75-9.056-8.75h-4.589C6.079,2,2.003,6.047,2,11.042v9.92C2,25.956,6.079,30,11.105,30h9.8C25.936,30,30,25.956,30,20.962v-6.409C30,13.555,29.195,12.5,28.189,12.5zM10.75,9H16c0.963,0,1.75,0.788,1.75,1.75S16.963,12.5,16,12.5h-5.25C9.788,12.5,9,11.712,9,10.75S9.788,9,10.75,9zM21.25,23h-10.5C9.788,23,9,22.213,9,21.25s0.788-1.75,1.75-1.75h10.5c0.963,0,1.75,0.787,1.75,1.75S22.213,23,21.25,23z",
s:"none",fl:"#FF6500"}},f:{}}]},concrete5:{d:0,it:1,sh:[{i:{a:{p:"M28.015,20.23c-2.751-3.279-6.985,3.637-9.267,5.133c-1.576,1.035-3.965,1.115-5.645,0.129c-2.296-1.35-1.593-4.58,0.832-5.383c2.159-0.713,5.93,1.559,7.299-0.715c1.688-2.801-4.078-3.457-5.783-3.391c-3.077,0.121-6.038,1.119-7.862,3.445c-1.965,2.506-1.516,5.535,0.65,7.809c2.207,2.133,5.403,2.957,8.583,2.695c0.805-0.066,2.184-0.41,3.24-0.988C22.158,27.818,28.569,20.895,28.015,20.23zM7.891,17.777c1.065,0.213-0.998-5.741-1.134-6.561c-0.163-0.991-0.529-2.389-1.512-2.534c-1.142-0.166-1.454,1.132-1.222,2.271C4.264,12.14,6.89,17.578,7.891,17.777zM16.709,14.703c1.65,0.234,1.537-7.689,1.539-8.766c0-0.967,0.379-3.651-0.928-3.903c-1.795-0.348-1.973,2.017-2.012,3.288C15.383,6.592,14.982,14.459,16.709,14.703zM20.641,15.971c1.803,0.754,3.184-7.251,3.383-8.277c0.201-1.047,0.234-3.266-1.559-2.563c-0.9,0.352-1.064,1.81-1.203,2.615C21.037,8.77,19.25,15.389,20.641,15.971zM11.967,15.297c2.031,0.152,0.117-7.898-0.045-8.972c-0.163-1.093-0.899-3.286-2.418-2.009c-0.762,0.64-0.418,2.127-0.276,2.962C9.362,8.358,10.398,15.18,11.967,15.297z",
s:"none",fl:"#2F3130"}},f:{}}]},deviantart:{d:0,it:1,sh:[{i:{a:{p:"M17.363,13.129c-1.067-0.063-2.299,0.001-3.726,0.245l3.29,5.93L30,15.715c-0.141-0.335-0.347-0.663-0.62-0.979c-1.353-1.566-4.285-2.963-7.481-3.593v-0.001c-3.135-0.734-6.529-0.704-10.006-0.179c-0.126,0.019-0.25,0.039-0.374,0.06l-1.156-2.141C9.237,9.032,8.18,9.266,7.201,9.578l1.101,2.302c-1.798,0.697-3.274,1.689-4.338,2.883c-1.756,1.998-2.45,4.509-1.606,6.955c0.169,0.493,0.399,0.961,0.682,1.399l13.072-3.59l-3.63-6.723c0.125-0.024,0.252-0.048,0.381-0.072c5.87-1.047,9.081,0.571,10.84,2.292l-4.473,1.084L17.363,13.129zM6.777,19.128c-0.403-1.842-0.082-3.897,2.472-5.266l2,4.182L6.777,19.128z",
s:"none",fl:"#D0DE21"}},f:{}}]},dribbble:{d:0,it:1,sh:[{i:{a:{p:"M16,30C8.268,30,2,23.732,2,16C2,8.269,8.268,2,16,2c7.73,0,14,6.269,14,14C30,23.732,23.73,30,16,30zM27.461,17.469c-2.746-0.359-5.184-0.387-7.355-0.051c0.9,2.563,1.652,5.324,2.244,8.232C25.098,23.838,27.027,20.889,27.461,17.469zM20.145,26.777c-0.555-3.246-1.318-6.164-2.301-8.857c-3.676,1.104-6.535,3.465-8.935,7.191c1.959,1.527,4.415,2.443,7.091,2.443C17.463,27.555,18.855,27.273,20.145,26.777zM4.443,16c0,2.859,1.045,5.471,2.765,7.488c2.934-4.299,6.233-6.539,9.841-7.582c-0.297-0.697-0.605-1.387-0.936-2.058c-3.221,0.97-7.034,1.479-11.646,1.69C4.461,15.693,4.443,15.844,4.443,16zM4.705,13.568c3.64-0.16,7.192-0.565,10.449-1.549c-1.24-2.216-2.697-4.298-4.358-6.327C7.729,7.244,5.445,10.116,4.705,13.568zM16,4.444c-1.014,0-1.99,0.144-2.926,0.388c1.605,1.769,3.066,3.918,4.359,6.384c2.248-0.928,4.311-2.205,6.111-3.956C21.52,5.511,18.887,4.444,16,4.444zM24.943,8.687c-1.885,1.911-4.037,3.334-6.594,4.378c0.35,0.753,0.678,1.537,0.996,2.338c2.596-0.402,5.328-0.314,8.182-0.021C27.395,12.848,26.453,10.529,24.943,8.687z",
s:"none",fl:"#ea4c89"}},f:{}}]},github:{d:0,it:1,sh:[{i:{a:{p:"M25.221,6.262c0.217-0.696,0.502-2.242-0.287-4.224c0,0-1.396-0.443-4.559,1.671c-1.238-0.31-2.557-0.461-3.878-0.461c-1.45,0-2.917,0.185-4.286,0.559c-3.26-2.225-4.699-1.769-4.699-1.769c-0.94,2.351-0.359,4.09-0.184,4.523c-1.104,1.19-1.778,2.713-1.778,4.58c0,1.408,0.161,2.671,0.551,3.769l0.412,0.935c1.102,2.052,3.271,3.378,7.133,3.794c-0.547,0.365-1.107,0.996-1.334,2.053c-0.746,0.357-3.109,1.23-4.529-1.211c0,0-0.793-1.451-2.315-1.564c0,0-1.473-0.023-0.101,0.918c0,0,0.986,0.465,1.668,2.213c0,0,0.889,2.979,5.172,2.023v3.078c0,0-0.091,1.088-1.089,1.451c0,0-0.59,0.408,0.045,0.635c0,0,2.768,0.227,2.768-2.041v-3.355c0,0-0.109-1.332,0.544-1.795v5.512c0,0-0.046,1.316-0.725,1.816c0,0-0.454,0.814,0.544,0.59c0,0,1.904-0.273,1.994-2.496l0.044-5.578h0.458l0.043,5.578c0.092,2.223,1.994,2.496,1.994,2.496c1.002,0.225,0.547-0.59,0.547-0.59c-0.684-0.5-0.725-1.816-0.725-1.816v-5.463c0.654,0.508,0.545,1.746,0.545,1.746v3.355c0,2.268,2.766,2.041,2.766,2.041c0.635-0.227,0.047-0.635,0.047-0.635c-0.998-0.363-1.09-1.451-1.09-1.451v-4.4c0-1.715-0.723-2.623-1.434-3.104c4.123-0.408,6.098-1.738,7.01-3.805l0.326-0.922c0.305-1.1,0.396-2.365,0.396-3.776C27.217,9.116,26.455,7.495,25.221,6.262zM16.465,18.879c-4.488,0-8.126-0.678-8.126-5.014c0-1.039,0.511-2.003,1.386-2.804c1.463-1.334,3.936-0.628,6.74-0.628c2.795,0,5.26-0.713,6.725,0.612l0,0c0.887,0.803,1.406,1.772,1.406,2.819C24.596,18.746,20.957,18.879,16.465,18.879zM12.071,11.68c-0.935,0-1.692,1.09-1.692,2.434s0.758,2.434,1.692,2.434s1.69-1.09,1.69-2.434S13.006,11.681,12.071,11.68zM21.146,11.68c-0.934,0-1.691,1.09-1.691,2.434s0.758,2.434,1.691,2.434s1.691-1.09,1.691-2.434S22.08,11.681,21.146,11.68z",
s:"none",fl:"#000"}},f:{}}]},"github-alt":{d:0,it:1,sh:[{i:{a:{p:"M27.934,9.756c0.293-0.941,0.678-3.028-0.389-5.704c0,0-1.885-0.599-6.154,2.255c-1.672-0.417-3.453-0.621-5.238-0.621c-1.957,0-3.938,0.249-5.787,0.753C5.963,3.437,4.02,4.052,4.02,4.052C2.75,7.227,3.534,9.575,3.773,10.16c-1.491,1.608-2.402,3.665-2.402,6.186c0,1.9,0.218,3.607,0.745,5.086l0.556,1.264c1.488,2.77,4.418,4.561,9.633,5.123c2.648,0.262,5.5,0.219,7.881,0.01c5.568-0.555,8.234-2.352,9.469-5.141l0.441-1.244c0.41-1.482,0.533-3.193,0.533-5.098C30.629,13.609,29.6,11.421,27.934,9.756zM16.111,26.793c-6.062,0-10.975-0.916-10.975-6.771c0-1.404,0.689-2.705,1.871-3.785c1.977-1.803,5.314-0.85,9.104-0.85c3.771,0,7.102-0.961,9.076,0.828l0,0c1.201,1.082,1.904,2.393,1.904,3.807C27.092,26.611,22.174,26.793,16.111,26.793zM10.176,17.07c-1.26,0-2.285,1.473-2.285,3.289c0,1.811,1.025,3.285,2.285,3.285c1.263,0,2.281-1.475,2.281-3.285C12.457,18.543,11.438,17.07,10.176,17.07zM22.432,17.07c-1.262,0-2.285,1.473-2.285,3.289c0,1.811,1.023,3.285,2.285,3.285c1.26,0,2.283-1.475,2.283-3.285C24.715,18.543,23.691,17.07,22.432,17.07z",
s:"none",fl:"#000"}},f:{}}]},instagram:{d:0,it:1,sh:[{i:{a:{p:"M5.594,2h20.813C28.383,2,30,3.617,30,5.594v20.813C30,28.385,28.383,30,26.406,30H5.594C3.617,30,2,28.385,2,26.406V5.594C2,3.617,3.617,2,5.594,2L5.594,2zM22.396,5.111c-0.693,0-1.26,0.566-1.26,1.26v3.018c0,0.693,0.566,1.262,1.26,1.262h3.166c0.693,0,1.26-0.568,1.26-1.262V6.371c0-0.693-0.566-1.26-1.26-1.26H22.396L22.396,5.111zM26.836,13.842h-2.465c0.234,0.762,0.359,1.568,0.359,2.402c0,4.658-3.896,8.432-8.703,8.432s-8.703-3.773-8.703-8.432c0-0.834,0.125-1.641,0.359-2.402H5.111V25.67c0,0.611,0.502,1.113,1.113,1.113h19.498c0.613,0,1.113-0.502,1.113-1.113V13.842L26.836,13.842zM16.027,10.49c-3.105,0-5.623,2.439-5.623,5.451c0,3.008,2.518,5.447,5.623,5.447s5.623-2.439,5.623-5.447C21.65,12.93,19.133,10.49,16.027,10.49z",
s:"none",fl:"#3D6B92"}},f:{}}]},opera:{d:0,it:1,sh:[{i:{a:{p:"M15.945,2C8.298,2,2.801,7.548,2.801,15.869C2.801,23.275,8.146,30,15.947,30c7.877,0,13.252-6.723,13.252-14.131C29.199,7.481,23.525,2,15.945,2zM20.822,15.632c-0.002,4.632-0.25,11.224-4.875,11.224v0.002c-4.561,0-4.742-6.598-4.742-11.22c0-5.425,0.507-10.625,4.742-10.625C20.182,5.013,20.822,10.278,20.822,15.632z",s:"none",fl:"#E01326"}},f:{}}]},reddit:{d:0,it:1,sh:[{i:{a:{p:"M30,16.113c0.017,1.123-0.509,2.118-1.425,2.771c-0.235,0.168-0.528,0.175-0.487,0.486c0.026,0.2,0.041,0.403,0.041,0.605c0,0.727-0.133,1.449-0.405,2.123c-1.047,2.594-3.723,4.184-6.253,5.036c-5.095,1.719-12.703,1.128-16.231-3.452c-0.824-1.068-1.337-2.346-1.337-3.707c0-0.19,0.015-0.381,0.04-0.57c0.042-0.317-0.259-0.341-0.498-0.519c-0.558-0.416-1.02-1.002-1.267-1.655c-0.999-2.646,2.035-4.462,4.313-4.106c0.645,0.101,1.253,0.353,1.783,0.733c0.509-0.266,1.054-0.51,1.587-0.726c1.479-0.598,3.08-0.879,4.66-1.042c0.451-0.046,0.749,0.133,0.767-0.382c0.011-0.319,0.04-0.637,0.084-0.953c0.093-0.656,0.28-1.273,0.627-1.842c0.622-1.092,1.71-1.656,2.935-1.736c1.084-0.071,2.182,0.158,3.183,0.564c0.537-0.79,1.339-1.256,2.271-1.39c1.824-0.262,3.922,0.931,3.883,2.962c0,3.933-6.643,4.029-6.643,0.072c-0.236-0.417-1.527-0.602-2.04-0.638c-0.704-0.049-1.449,0.047-1.89,0.671c-0.534,0.756-0.635,1.739-0.635,2.638c1.246,0.076,2.49,0.269,3.696,0.591c0.979,0.262,1.927,0.634,2.823,1.106c0.634,0.076,1.558-0.696,2.369-0.746C27.822,12.894,29.814,14.128,30,16.113zM6.732,14.855c-0.887-0.243-1.541-0.313-2.338,0.297c-0.722,0.66-0.764,1.798,0.086,2.395C5.018,16.488,5.815,15.6,6.732,14.855C6.568,14.811,6.258,15.24,6.732,14.855zM26.346,20.012c0-4.398-5.765-6.076-9.311-6.296c-2.477-0.154-5.108,0.207-7.356,1.297C7.6,16.02,5.475,17.886,5.701,20.414c0.181,2.026,1.975,3.579,3.676,4.439c2.181,1.14,4.606,1.502,7.043,1.502c2.307,0,4.764-0.612,6.755-1.782C24.744,23.651,26.419,21.971,26.346,20.012zM20.91,22.303c-0.821-0.428-1.931,0.497-2.738,0.725c-1.1,0.311-2.271,0.403-3.404,0.251c-1.101-0.148-1.871-0.684-2.859-1.046c-0.631-0.214-1.315,0.247-1.144,0.964c0.193,0.809,1.804,1.249,2.498,1.448c1.078,0.309,2.207,0.362,3.321,0.29c1.235-0.081,2.445-0.372,3.574-0.884C20.891,23.719,21.891,23.031,20.91,22.303C20.744,22.18,21.072,22.371,20.91,22.303zM23.375,9.279c-0.088,1.876,2.92,1.856,3.145,0.07C26.659,7.455,23.375,7.337,23.375,9.279zM28.199,16.291c0-1.41-1.807-1.964-2.9-1.436c0.927,0.748,1.747,1.64,2.254,2.727C27.94,17.249,28.199,16.81,28.199,16.291z",
s:"none",fl:"#000"}},f:{}},{i:{a:{p:"M13.5,18.75c0,0.967-0.784,1.75-1.75,1.75S10,19.717,10,18.75S10.784,17,11.75,17S13.5,17.783,13.5,18.75zM20.25,17c-0.967,0-1.75,0.783-1.75,1.75s0.783,1.75,1.75,1.75S22,19.717,22,18.75S21.217,17,20.25,17z",s:"none",fl:"#FF4500"}},f:{}}]},soundcloud:{d:0,it:1,sh:[{i:{a:{p:"M26.39,15.06c-0.495,0-0.967,0.097-1.396,0.27c-0.287-3.127-3.016-5.58-6.344-5.58c-0.814,0-1.604,0.154-2.306,0.415C16.072,10.266,16,10.37,16,10.572V21.59c0,0.213,0.17,0.39,0.387,0.41c0.009,0.001,9.939,0,10.004,0C28.385,22,30,20.446,30,18.53S28.383,15.06,26.39,15.06zM12.938,22h0.875l0.438-6.131L13.813,9.75h-0.875L12.5,15.869L12.938,22zM10.313,22H9.438L9,17.55l0.438-4.3h0.875l0.438,4.375L10.313,22zM5.938,22h0.875l0.438-3.5L6.813,15H5.938L5.5,18.5L5.938,22zM2.438,20.25h0.875L3.75,18.5l-0.438-1.75H2.438L2,18.5L2.438,20.25z",
s:"none",fl:"#FE4800"}},f:{}}]},tumblr:{d:0,it:1,sh:[{i:{a:{p:"M25,28.475c-1.191,0.563-2.277,0.957-3.246,1.188C20.781,29.885,19.734,30,18.605,30c-1.281,0-2.035-0.162-3.017-0.484c-0.982-0.324-1.822-0.785-2.516-1.379c-0.696-0.602-1.177-1.236-1.446-1.912c-0.267-0.676-0.402-1.654-0.402-2.93v-9.822H7.421V9.509c1.1-0.358,2.377-0.869,3.156-1.536c0.787-0.668,1.415-1.47,1.891-2.404C12.944,4.635,13.271,3.443,13.45,2h3.98v6.476h6.473v4.997H17.43v7.18c0,1.627-0.02,2.561,0.152,3.021c0.172,0.457,0.598,0.934,1.063,1.209c0.621,0.371,1.332,0.557,2.129,0.557c1.418,0,2.828-0.459,4.227-1.381V28.475L25,28.475z",
s:"none",fl:"#2C4762"}},f:{}}]},vimeo:{d:0,it:1,sh:[{i:{a:{p:"M2,10.217l1.137,1.491c0,0,2.345-1.849,3.127-0.924c0.781,0.924,3.766,12.085,4.762,14.144c0.87,1.806,3.268,4.192,5.898,2.487c2.628-1.704,11.371-9.168,12.935-17.981c1.563-8.811-10.52-6.965-11.8,0.711c3.199-1.92,4.906,0.781,3.27,3.839c-1.634,3.055-3.127,5.047-3.908,5.047c-0.781,0-1.381-2.044-2.275-5.617c-0.924-3.694-0.918-10.349-4.761-9.594C6.763,4.53,2,10.217,2,10.217z",s:"none",fl:"#172322"}},f:{}}]},vk:{d:0,it:1,sh:[{i:{a:{p:"M24.752,24.035c-0.043,0-0.088,0-0.131,0c-1.42-0.232-2.389-1.234-3.213-2.162c-0.467-0.525-1.18-1.711-2.033-1.574c-1.209,0.195-0.609,2.262-1.115,3.146c-0.408,0.717-2.146,0.586-3.342,0.459c-3.784-0.4-5.716-2.42-7.41-4.59c-1.812-2.318-3.221-4.744-4.524-7.408C2.562,11.045,2,10.09,2,9.023c0.613-0.5,1.613-0.328,2.623-0.328c0.855,0,2.192-0.188,2.818,0.131C7.814,9.016,8.19,10.02,8.49,10.66c0.691,1.473,1.326,2.535,2.164,3.738c0.364,0.523,0.921,1.508,1.572,1.379c0.637-0.129,0.695-1.691,0.723-2.691c0.031-1.133,0-2.543-0.328-3.145c-0.309-0.568-0.872-0.58-1.442-0.918c0.475-0.955,1.774-1.05,3.345-1.05c1.316,0,3.156-0.146,3.672,0.722c0.523,0.883,0.164,2.477,0.131,3.672c-0.037,1.34-0.268,2.727,0.656,3.344c0.713-0.078,1.094-0.77,1.508-1.313c0.904-1.184,1.465-2.211,2.162-3.738c0.287-0.625,0.596-1.703,1.117-1.898c0.789-0.301,2.053-0.066,3.211-0.066c0.949,0,2.646-0.262,2.951,0.393c0.252,0.545-0.49,1.916-0.723,2.295c-0.877,1.441-1.738,2.355-2.688,3.605c-0.379,0.5-1.16,1.301-1.113,2.098c0.035,0.609,0.645,1.072,1.113,1.508c1.02,0.945,1.732,1.635,2.557,2.689c0.313,0.396,0.982,1.256,0.918,1.77C29.797,24.654,26.023,23.65,24.752,24.035z",
s:"none",fl:"#4B6E95"}},f:{}}]},xing:{d:0,it:1,sh:[{i:{a:{p:"M25.334,2H6.667C4.101,2,2,4.101,2,6.667v18.665C2,27.902,4.101,30,6.667,30h18.667C27.9,30,30,27.902,30,25.332V6.667C30,4.101,27.9,2,25.334,2zM10.525,20.232H7.482c-0.183,0-0.319-0.082-0.397-0.207c-0.08-0.131-0.084-0.299,0-0.467l3.233-5.705c0.002-0.006,0.002-0.01,0-0.018l-2.058-3.561c-0.085-0.169-0.098-0.337-0.018-0.467c0.078-0.126,0.231-0.19,0.415-0.19h3.043c0.467,0,0.695,0.301,0.846,0.571c0,0,2.08,3.627,2.092,3.646c-0.123,0.217-3.283,5.809-3.283,5.809C11.199,19.926,10.98,20.232,10.525,20.232zM24.912,6.116l-6.736,11.911c-0.004,0.006-0.004,0.014,0,0.02l4.289,7.836c0.084,0.17,0.088,0.34,0.006,0.471c-0.078,0.125-0.221,0.193-0.404,0.193h-3.039c-0.465,0-0.699-0.309-0.85-0.578c0,0-4.311-7.91-4.322-7.932c0.215-0.381,6.77-12.005,6.77-12.005c0.164-0.293,0.361-0.58,0.814-0.58h3.074c0.184,0,0.326,0.069,0.404,0.194C24.998,5.776,24.996,5.948,24.912,6.116z",
s:"none",fl:"#036567"}},f:{}}]},yahoo:{d:0,it:1,sh:[{i:{a:{p:"M28.762,11.326H17.66l0.428,1.731h3.031L16.02,17.66c-1.04-1.436-3.479-4.433-5.18-6.903h3.797V9.023H2v1.733h3.753c1.456,1.135,7.028,8.104,7.259,8.798c0.093,0.65,0.178,4.488-0.094,4.777c-0.547,0.582-3.047,0.43-3.65,0.473l-0.208,1.188c1.101,0.035,4.683-0.088,5.796-0.088c2.194,0,6.039-0.008,6.582,0.033l0.067-1.248c-0.558-0.094-3.582-0.012-4-0.105c-0.094-0.604-0.194-4.643-0.102-5.059c0.418-1.207,6.777-6.13,7.473-6.316c0.156-0.032,0.391-0.095,0.656-0.153h2.048L28.762,11.326zM26.424,23.99l0.011,1.867l0.861,0.074L28.225,26l0.273-1.826l-0.98-0.049L26.424,23.99zM26.72,22.764l1.699,0.137l1.981-7.652c-0.331-0.012-3.338-0.297-3.729-0.373L26.72,22.764z",
s:"none",fl:"#7B0099"}},f:{}}]},"address-book":{d:1400,it:1,sh:[{i:{a:{p:"M10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6z",s:"none",fl:"#333"}},f:{5:{},15:{p:"M16.778,11.77c-0.395-0.162-0.553-0.613-0.553-0.613s-0.178,0.104-0.178-0.182c0-0.287,0.178,0.182,0.355-0.918c0,0,0.494-0.145,0.396-1.329h-0.117c0,0,0.297-1.266,0-1.693c-0.299-0.43-0.402-0.771-1.07-0.92c-0.613-0.136-0.414-0.123-0.891-0.102c-0.475,0.021-0.871,0.246-0.871,0.387c0,0-0.297,0.021-0.416,0.145c-0.119,0.121-0.316,0.693-0.316,0.836c0,0.145,0.133,1.102,0.232,1.307l-0.152,0.041c-0.1,1.184,0.395,1.329,0.395,1.329c0.18,1.1,0.357,0.631,0.357,0.918c0,0.285-0.178,0.182-0.178,0.182s-0.158,0.451-0.555,0.613s-2.594,1.039-2.773,1.225C10.267,13.178,10.288,14,10.288,14h9.424c0,0,0.02-0.822-0.16-1.006C19.372,12.809,17.175,11.932,16.778,11.77zM24,10h-2V8h2V10zM24,14h-2v-2h2V14zM10,16L10,16L10,16L10,16L10,16zM10,20L10,20L10,20L10,20L10,20zM10,24L10,24L10,24L10,24L10,24z"},
25:{p:"M16.778,11.77c-0.395-0.162-0.553-0.613-0.553-0.613s-0.178,0.104-0.178-0.182c0-0.287,0.178,0.182,0.355-0.918c0,0,0.494-0.145,0.396-1.329h-0.117c0,0,0.297-1.266,0-1.693c-0.299-0.43-0.402-0.771-1.07-0.92c-0.613-0.136-0.414-0.123-0.891-0.102c-0.475,0.021-0.871,0.246-0.871,0.387c0,0-0.297,0.021-0.416,0.145c-0.119,0.121-0.316,0.693-0.316,0.836c0,0.145,0.133,1.102,0.232,1.307l-0.152,0.041c-0.1,1.184,0.395,1.329,0.395,1.329c0.18,1.1,0.357,0.631,0.357,0.918c0,0.285-0.178,0.182-0.178,0.182s-0.158,0.451-0.555,0.613s-2.594,1.039-2.773,1.225C10.267,13.178,10.288,14,10.288,14h9.424c0,0,0.02-0.822-0.16-1.006C19.372,12.809,17.175,11.932,16.778,11.77zM24,10h-2V8h2V10zM24,14h-2v-2h2V14zM24,18H10v-2h14V18zM10,20L10,20L10,20L10,20L10,20zM10,24L10,24L10,24L10,24L10,24z"},
35:{p:"M16.778,11.77c-0.395-0.162-0.553-0.613-0.553-0.613s-0.178,0.104-0.178-0.182c0-0.287,0.178,0.182,0.355-0.918c0,0,0.494-0.145,0.396-1.329h-0.117c0,0,0.297-1.266,0-1.693c-0.299-0.43-0.402-0.771-1.07-0.92c-0.613-0.136-0.414-0.123-0.891-0.102c-0.475,0.021-0.871,0.246-0.871,0.387c0,0-0.297,0.021-0.416,0.145c-0.119,0.121-0.316,0.693-0.316,0.836c0,0.145,0.133,1.102,0.232,1.307l-0.152,0.041c-0.1,1.184,0.395,1.329,0.395,1.329c0.18,1.1,0.357,0.631,0.357,0.918c0,0.285-0.178,0.182-0.178,0.182s-0.158,0.451-0.555,0.613s-2.594,1.039-2.773,1.225C10.267,13.178,10.288,14,10.288,14h9.424c0,0,0.02-0.822-0.16-1.006C19.372,12.809,17.175,11.932,16.778,11.77zM24,10h-2V8h2V10zM24,14h-2v-2h2V14zM24,18H10v-2h14V18zM24,22H10v-2h14V22zM10,24L10,24L10,24L10,24L10,24z"},
45:{p:"M16.778,11.77c-0.395-0.162-0.553-0.613-0.553-0.613s-0.178,0.104-0.178-0.182c0-0.287,0.178,0.182,0.355-0.918c0,0,0.494-0.145,0.396-1.329h-0.117c0,0,0.297-1.266,0-1.693c-0.299-0.43-0.402-0.771-1.07-0.92c-0.613-0.136-0.414-0.123-0.891-0.102c-0.475,0.021-0.871,0.246-0.871,0.387c0,0-0.297,0.021-0.416,0.145c-0.119,0.121-0.316,0.693-0.316,0.836c0,0.145,0.133,1.102,0.232,1.307l-0.152,0.041c-0.1,1.184,0.395,1.329,0.395,1.329c0.18,1.1,0.357,0.631,0.357,0.918c0,0.285-0.178,0.182-0.178,0.182s-0.158,0.451-0.555,0.613s-2.594,1.039-2.773,1.225C10.267,13.178,10.288,14,10.288,14h9.424c0,0,0.02-0.822-0.16-1.006C19.372,12.809,17.175,11.932,16.778,11.77zM24,10h-2V8h2V10zM24,14h-2v-2h2V14zM24,18H10v-2h14V18zM24,22H10v-2h14V22zM24,26H10v-2h14V26z"},
69:{},70:{p:"M10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6zM10,6L10,6L10,6L10,6L10,6z"},100:{}}},{i:{a:{p:"M28,2H6.9c-0.552,0-1,0.448-1,1v3h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v6h-1c-0.553,0-1,0.447-1,1c0,0.552,0.447,1,1,1h1v6h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v3.1C6,30,6,30,8.7,30H28c0.553,0,1-0.447,1-1V3C29,2.448,28.553,2,28,2zM26,28H9c-0.552,0-1-0.447-1-1V5c0-0.552,0.448-1,1-1h16.9C26.453,4,27,4.548,27,5.1v22C27,27.652,26.553,28,26,28z",
o:0,s:"none",fl:"#333"}},f:{5:{o:1},70:{},75:{o:0},100:{}}},{i:{a:{p:"M4.9,6h2c0.553,0,1,0.447,1,1s-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1S4.348,6,4.9,6zM3.9,15c0,0.552,0.447,1,1,1h2c0.553,0,1-0.448,1-1c0-0.553-0.447-1-1-1h-2C4.348,14,3.9,14.447,3.9,15zM3.9,23c0,0.553,0.447,1,1,1h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2C4.348,22,3.9,22.447,3.9,23zM29,4v25.063C29,30,28,30,28,30H8.838C6.7,30,5.9,27,5.9,27v-2H7c2.063,0,1.9-2,1.9-2C8.94,20.9,7,20.9,7,20.9H5.9V17H7c1.875,0,1.9-2,1.9-2c0-2-1.9-2-1.9-2H5.9V9.1H7C8.9,9.1,8.9,7,8.9,7C8.9,4.9,7,4.9,7,4.9H5.9V3c0-0.7,0.4-1,1.1-1h17.9c0.553,0,1,0.447,1,1H28C29,3,29,4,29,4zM10,20h14V8H10V20zM27,4.2l-1-0.3V26c0,0.553-0.447,1-1,1H7.9c0,0.9,1.1,1,1.1,1h17c0.9,0,1-1,1-1V4.2zM18.778,15.769c-0.395-0.162-0.553-0.613-0.553-0.613s-0.178,0.104-0.178-0.182c0-0.287,0.178,0.182,0.355-0.918c0,0,0.494-0.145,0.396-1.328h-0.117c0,0,0.297-1.266,0-1.693c-0.299-0.43-0.402-0.771-1.07-0.92c-0.613-0.136-0.414-0.123-0.891-0.102c-0.475,0.021-0.871,0.246-0.871,0.387c0,0-0.297,0.021-0.416,0.145c-0.119,0.121-0.316,0.693-0.316,0.836c0,0.145,0.133,1.102,0.232,1.307l-0.152,0.041c-0.1,1.184,0.395,1.328,0.395,1.328c0.18,1.1,0.357,0.631,0.357,0.918c0,0.285-0.178,0.182-0.178,0.182s-0.158,0.451-0.555,0.613s-2.594,1.039-2.773,1.225C12.267,17.178,12.288,18,12.288,18h9.424c0,0,0.02-0.822-0.16-1.006C21.372,16.808,19.175,15.931,18.778,15.769z",
o:1,s:"none",fl:"#333"}},f:{5:{o:0},70:{},75:{o:1},100:{}}}]},albums:{d:1E3,it:1,sh:[{i:{a:{p:"M16.742,12H14.6c-0.331,0-0.6,0.269-0.6,0.6v7.523C13.686,20.049,13.353,20,13,20c-1.657,0-3.2,0.895-3.2,2s1.543,2,3.2,2s3-0.895,3-2v-8c1,0,2,2,2,4c0,0,1.188-2.408,0.594-3.699C18,13,17,13,16.742,12z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M26,24L26,24h2.801C29.463,24,30,23.463,30,22.801V5.2C30,4.537,29.463,4,28.801,4H7.2C6.537,4,6,4.537,6,5.2V8l0,0h2V6h20v16h-2V24z",o:1,t:"",s:"none",fl:"#333"}},f:{5:{p:"M6.302,23.596C6.521,23.844,6.842,24,7.2,24h21.601C29.463,24,30,23.463,30,22.801V5.2C30,4.537,29.463,4,28.801,4H7.2C6.537,4,6,4.537,6,5.2v17.601C6,23.105,6.114,23.385,6.302,23.596L8,22V6h20v16H8L6.302,23.596z"},
"16.5":{},33:{t:"t-4,4"},50:{},83:{o:0,t:"t-33,31"},84:{o:0,t:"t9,-11",p:"M26,24L26,24h2.801C29.463,24,30,23.463,30,22.801V5.2C30,4.537,29.463,4,28.801,4H7.2C6.537,4,6,4.537,6,5.2V8l0,0h2V6h20v16h-2V24z"},100:{o:1,t:""}}},{i:{a:{p:"M2.302,27.596C2.521,27.844,2.842,28,3.2,28h21.601C25.463,28,26,27.463,26,26.801V9.2C26,8.537,25.463,8,24.801,8H3.2C2.537,8,2,8.537,2,9.2v17.601C2,27.105,2.114,27.385,2.302,27.596L4,26V10h20v16H4L2.302,27.596z",o:1,t:"",s:"none",fl:"#333"}},f:{33:{o:0,t:"t-30,27"},34:{t:"t11,-13"},
50:{o:1,t:"t4,-4"},"66.5":{},68:{p:"M2.302,27.596C2.521,27.844,2.842,28,3.2,28h21.601C25.463,28,26,27.463,26,26.801V9.2C26,8.537,25.463,8,24.801,8H3.2C2.537,8,2,8.537,2,9.2v17.601C2,27.105,2.114,27.385,2.302,27.596L4,26V10h20v16H4L2.302,27.596z"},83:{t:""},100:{}}}]},anchor:{d:1E3,it:1,sh:[{i:{a:{p:"M28.801,20h-5.602c-0.662,0-0.818,0.381-0.352,0.848l1.848,1.848c-1.621,2.105-3.982,3.598-6.695,4.102V10.445C19.191,9.752,20,8.477,20,7c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.477,0.81,2.752,2,3.445v16.352c-2.713-0.504-5.074-1.996-6.695-4.102l1.847-1.848C9.62,20.381,9.463,20,8.8,20H3.2C2.537,20,2,20.537,2,21.199v5.602c0,0.662,0.38,0.818,0.849,0.35l2.328-2.328C7.74,27.971,11.621,30,16,30s8.26-2.029,10.822-5.178l2.33,2.33C29.619,27.619,30,27.463,30,26.801v-5.602C30,20.537,29.463,20,28.801,20zM16,5c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2S14.896,5,16,5z",
s:"none",t:"t0,0r0",fl:"#333"}},f:{0:{t:"t0,-32r-20"},40:{t:"t0,0r-20",e:">"},50:{},70:{t:"",e:"bounce"},100:{}}}]},"archive-add":{d:1400,it:1,sh:[{i:{a:{p:"M26,28H6V4h20V28z",t:"t29,0",o:0.5,s:"none",fl:"#333"}},f:{10:{},30:{t:""},70:{},80:{o:0},85:{t:"t29,0"},90:{o:0.5},100:{}}},{i:{a:{p:"M26,28H6V4h20V28z",t:"t29,0",o:0.5,s:"none",fl:"#333"}},f:{30:{},50:{t:""},70:{},80:{o:0},85:{t:"t29,0"},90:{o:0.5},100:{}}},{i:{a:{p:"M26,28H6V4h20V28z",t:"t29,0",o:0.5,s:"none",fl:"#333"}},f:{50:{},70:{t:""},
80:{o:0},85:{t:"t29,0"},90:{o:0.5},100:{}}},{i:{a:{p:"M28,3.2v25.601C28,29.463,27.463,30,26.801,30H22v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4h2V2h2.801C27.463,2,28,2.537,28,3.2z",o:1,s:"none",fl:"#333"}},f:{10:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M22,26h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4h2V2H5.2C4.537,2,4,2.537,4,3.2v25.601C4,29.463,4.537,30,5.2,30H22V26zM16.868,12.424l-4.444,4.4c-0.233,0.234-0.614,0.234-0.848,0l-4.442-4.4C6.901,12.19,6.979,12,7.31,12H10V8.6C10,8.269,10.269,8,10.6,8H13.4C13.731,8,14,8.269,14,8.6V12h2.692C17.021,12,17.099,12.19,16.868,12.424z",
s:"none",fl:"#333"}},f:{}}]},"archive-extract":{d:1400,it:1,sh:[{i:{a:{p:"M26,28H6V4h20V28z",o:0,s:"none",fl:"#333"}},f:{10:{o:0.3},30:{o:1,t:"t29,0"},70:{},80:{o:0},85:{t:""},100:{}}},{i:{a:{p:"M26,28H6V4h20V28z",o:0,s:"none",fl:"#333"}},f:{10:{o:0.3},30:{},50:{o:1,t:"t29,0"},70:{},80:{o:0},85:{t:""},100:{}}},{i:{a:{p:"M26,28H6V4h20V28z",o:0,s:"none",fl:"#333"}},f:{10:{o:0.3},50:{},70:{o:1,t:"t29,0"},80:{o:0},85:{t:""},100:{}}},{i:{a:{p:"M28,3.2v25.601C28,29.463,27.463,30,26.801,30H22v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4h2V2h2.801C27.463,2,28,2.537,28,3.2z",
o:1,s:"none",fl:"#333"}},f:{10:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M22,4V2H5.2C4.537,2,4,2.537,4,3.2v25.601C4,29.463,4.537,30,5.2,30H22v-4h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4H22zM16.69,12H14v3.4c0,0.331-0.269,0.6-0.6,0.6h-2.801c-0.331,0-0.6-0.269-0.6-0.6V12H7.308c-0.328,0-0.406-0.19-0.176-0.424l4.443-4.4c0.233-0.234,0.614-0.234,0.848,0l4.443,4.4C17.099,11.81,17.021,12,16.69,12z",s:"none",fl:"#333"}},f:{}}]},asterisk:{d:500,it:1,sh:[{i:{a:{p:"M24.444,12.999c-0.662,0-0.818-0.38-0.352-0.849l2.514-2.513c0.783-0.785,0.463-2.366-0.707-3.538c-1.172-1.17-2.754-1.489-3.537-0.707l-2.516,2.515c-0.467,0.469-0.848,0.312-0.848-0.352V4c0-1.104-1.344-2-3-2s-3,0.896-3,2v3.558c0,0.663-0.38,0.82-0.849,0.352L9.635,5.394C8.854,4.612,7.271,4.93,6.1,6.101S4.611,8.855,5.393,9.636l2.515,2.516C8.376,12.62,8.219,13,7.556,13H3.999c-1.104,0-2,1.344-2,3s0.896,3,2,3h3.556c0.663,0,0.82,0.381,0.352,0.85l-2.514,2.514C4.611,23.145,4.929,24.729,6.1,25.9c1.171,1.17,2.755,1.486,3.535,0.707l2.516-2.516c0.469-0.469,0.849-0.311,0.849,0.352V28c0,1.105,1.344,2,3,2s3-0.895,3-2v-3.557c0-0.662,0.381-0.818,0.848-0.352l2.516,2.516c0.783,0.781,2.365,0.463,3.537-0.707c1.17-1.172,1.488-2.754,0.707-3.537l-2.514-2.514c-0.467-0.467-0.311-0.848,0.352-0.848h3.555c1.107-0.002,2-1.346,2.002-3.002c-0.002-1.656-0.895-3-2.002-3.001H24.444z",
o:0.8,t:"s0.6",s:"none",fl:"#333"}},f:{0:{o:0.8},70:{t:"s1.4",o:0},80:{t:"s0.6"},100:{o:0.8}},fIE:{0:{o:0.8,t:"s0.6,0.6,14.5,14.5"},70:{t:"s1.4,1.4,14.5,14.5",o:0},80:{t:"s0.6,0.6,14.5,14.5"},100:{o:0.8}}},{i:{a:{p:"M24.444,12.999c-0.662,0-0.818-0.38-0.352-0.849l2.514-2.513c0.783-0.785,0.463-2.366-0.707-3.538c-1.172-1.17-2.754-1.489-3.537-0.707l-2.516,2.515c-0.467,0.469-0.848,0.312-0.848-0.352V4c0-1.104-1.344-2-3-2s-3,0.896-3,2v3.558c0,0.663-0.38,0.82-0.849,0.352L9.635,5.394C8.854,4.612,7.271,4.93,6.1,6.101S4.611,8.855,5.393,9.636l2.515,2.516C8.376,12.62,8.219,13,7.556,13H3.999c-1.104,0-2,1.344-2,3s0.896,3,2,3h3.556c0.663,0,0.82,0.381,0.352,0.85l-2.514,2.514C4.611,23.145,4.929,24.729,6.1,25.9c1.171,1.17,2.755,1.486,3.535,0.707l2.516-2.516c0.469-0.469,0.849-0.311,0.849,0.352V28c0,1.105,1.344,2,3,2s3-0.895,3-2v-3.557c0-0.662,0.381-0.818,0.848-0.352l2.516,2.516c0.783,0.781,2.365,0.463,3.537-0.707c1.17-1.172,1.488-2.754,0.707-3.537l-2.514-2.514c-0.467-0.467-0.311-0.848,0.352-0.848h3.555c1.107-0.002,2-1.346,2.002-3.002c-0.002-1.656-0.895-3-2.002-3.001H24.444z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"s0.6"},70:{t:""},100:{}},fIE:{0:{t:"s0.6,0.6,14.5,14.5"},70:{t:""},100:{}}}]},bluetooth:{d:800,it:1,sh:[{i:{a:{p:"M17,3v26.033L16,30V18.969l-5.656,5.66L8.93,23.215L16,16.143L8.93,9.071l1.414-1.414L16,13.314V2L17,3z",t:"",s:"none",fl:"#333"}},f:{0:{t:"t-20,0"},50:{t:"",e:">"},100:{}}},{i:{a:{p:"M18.828,16.143l5.656-5.657L17,3v26.033l7.484-7.232L18.828,16.143zM18.004,6.833l3.652,3.652l-3.652,3.653V6.833zM18.004,18.145l3.652,3.656l-3.652,3.652V18.145z",t:"",s:"none",
fl:"#333"}},f:{0:{t:"t18,0"},50:{t:"",e:">"},100:{}}}]},"brightness-down":{d:1200,it:1,sh:[{i:{a:{p:"M16,11.998c-2.21,0-4.001,1.792-4.001,4.001c0,2.208,1.792,3.999,4.001,3.999c2.208,0,3.999-1.791,3.999-3.999C19.998,13.79,18.207,11.998,16,11.998zM15.999,18.498c-1.381,0-2.501-1.121-2.501-2.499c0-1.382,1.12-2.501,2.501-2.501c1.378,0,2.499,1.119,2.499,2.501C18.498,17.377,17.377,18.498,15.999,18.498z",o:1,s:"none",fl:"#333"}},f:{0:{o:1,p:"M16,10c-3.315,0-6,2.686-6,6c0,3.313,2.686,6,6,6c3.313,0,6-2.686,6-6C21.998,12.685,19.313,10,16,10zM16,20.498c-2.485,0-4.5-2.016-4.5-4.499c0-2.485,2.016-4.5,4.5-4.5c2.483,0,4.499,2.015,4.499,4.5C20.498,18.482,18.482,20.498,16,20.498z"},
60:{o:0.1,p:"M16,11.998c-2.21,0-4.001,1.792-4.001,4.001c0,2.208,1.792,3.999,4.001,3.999c2.208,0,3.999-1.791,3.999-3.999C19.998,13.79,18.207,11.998,16,11.998zM15.999,18.498c-1.381,0-2.501-1.121-2.501-2.499c0-1.382,1.12-2.501,2.501-2.501c1.378,0,2.499,1.119,2.499,2.501C18.498,17.377,17.377,18.498,15.999,18.498z"},80:{},81:{o:1},100:{}}},{i:{a:{p:"M16.035,2.83c-0.245-1.289-2.028-0.958-1.992,0.175l0.369,4.223c0.21,1.125,2.021,0.845,1.992-0.174L16.035,2.83zM6.711,6.663C5.628,5.924,4.601,7.418,5.429,8.195l3.246,2.725c0.943,0.646,2.027-0.832,1.285-1.532L6.711,6.663zM2.829,15.964c-1.287,0.246-0.959,2.027,0.178,1.992l4.22-0.369c1.125-0.209,0.846-2.021-0.174-1.992L2.829,15.964zM6.661,25.286c-0.736,1.084,0.756,2.113,1.533,1.281l2.726-3.242c0.646-0.944-0.832-2.028-1.533-1.286L6.661,25.286zM15.962,29.169c0.246,1.289,2.029,0.961,1.992-0.176l-0.367-4.223c-0.211-1.125-2.021-0.846-1.992,0.176L15.962,29.169zM25.284,25.337c1.086,0.738,2.113-0.754,1.285-1.531l-3.246-2.728c-0.944-0.646-2.026,0.832-1.284,1.533L25.284,25.337zM29.167,16.039c1.291-0.248,0.963-2.029-0.172-1.993l-4.227,0.365c-1.125,0.212-0.844,2.022,0.176,1.993L29.167,16.039zM25.335,6.714c0.74-1.086-0.752-2.114-1.529-1.286l-2.729,3.246C20.43,9.62,21.91,10.701,22.609,9.96L25.335,6.714z",
o:1,s:"none",fl:"#333"}},f:{60:{o:0.1},80:{},81:{o:1},100:{}}}]},"brightness-up":{d:1200,it:1,sh:[{i:{a:{p:"M16,10c-3.315,0-6,2.686-6,6c0,3.313,2.686,6,6,6c3.313,0,6-2.686,6-6C21.998,12.685,19.313,10,16,10zM16,20.498c-2.485,0-4.5-2.016-4.5-4.499c0-2.485,2.016-4.5,4.5-4.5c2.483,0,4.499,2.015,4.499,4.5C20.498,18.482,18.482,20.498,16,20.498z",o:1,s:"none",fl:"#333"}},f:{0:{o:0,p:"M16,11.998c-2.21,0-4.001,1.792-4.001,4.001c0,2.208,1.792,3.999,4.001,3.999c2.208,0,3.999-1.791,3.999-3.999C19.998,13.79,18.207,11.998,16,11.998zM15.999,18.498c-1.381,0-2.501-1.121-2.501-2.499c0-1.382,1.12-2.501,2.501-2.501c1.378,0,2.499,1.119,2.499,2.501C18.498,17.377,17.377,18.498,15.999,18.498z"},
60:{o:1,p:"M16,10c-3.315,0-6,2.686-6,6c0,3.313,2.686,6,6,6c3.313,0,6-2.686,6-6C21.998,12.685,19.313,10,16,10zM16,20.498c-2.485,0-4.5-2.016-4.5-4.499c0-2.485,2.016-4.5,4.5-4.5c2.483,0,4.499,2.015,4.499,4.5C20.498,18.482,18.482,20.498,16,20.498z"},100:{}}},{i:{a:{p:"M16.035,2.83c-0.245-1.289-2.028-0.958-1.992,0.175l0.369,4.223c0.21,1.125,2.021,0.845,1.992-0.174L16.035,2.83zM6.711,6.663C5.628,5.924,4.601,7.418,5.429,8.195l3.246,2.725c0.943,0.646,2.027-0.832,1.285-1.532L6.711,6.663zM2.829,15.964c-1.287,0.246-0.959,2.027,0.178,1.992l4.22-0.369c1.125-0.209,0.846-2.021-0.174-1.992L2.829,15.964zM6.661,25.286c-0.736,1.084,0.756,2.113,1.533,1.281l2.726-3.242c0.646-0.944-0.832-2.028-1.533-1.286L6.661,25.286zM15.962,29.169c0.246,1.289,2.029,0.961,1.992-0.176l-0.367-4.223c-0.211-1.125-2.021-0.846-1.992,0.176L15.962,29.169zM25.284,25.337c1.086,0.738,2.113-0.754,1.285-1.531l-3.246-2.728c-0.944-0.646-2.026,0.832-1.284,1.533L25.284,25.337zM29.167,16.039c1.291-0.248,0.963-2.029-0.172-1.993l-4.227,0.365c-1.125,0.212-0.844,2.022,0.176,1.993L29.167,16.039zM25.335,6.714c0.74-1.086-0.752-2.114-1.529-1.286l-2.729,3.246C20.43,9.62,21.91,10.701,22.609,9.96L25.335,6.714z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0},60:{o:1},100:{}}}]},crop:{d:1600,it:1,sh:[{i:{a:{p:"M20.447,30.293c0.061-0.423,0.071-0.496,0.071-0.955c0-0.621-0.063-1.217-0.169-1.765c0.605,0.542,1.188,0.766,1.745,0.468c1.24-0.646,1.081-3.121-0.358-5.535c-0.617-1.04-1.374-1.883-2.133-2.472c-0.885,0.604-1.964,0.972-3.138,0.972c-1.178,0-2.257-0.369-3.14-0.972c-0.759,0.589-1.515,1.432-2.134,2.472c-1.439,2.414-1.597,4.89-0.354,5.535c0.555,0.293,1.14,0.074,1.743-0.468c-0.106,0.548-0.168,1.144-0.168,1.765c0,0.418,0.021,0.567,0.07,0.955H20.447zM16.465,20.063c2.389,0,4.326-1.806,4.326-4.032S18.854,12,16.465,12c-2.391,0-4.328,1.806-4.328,4.032S14.074,20.063,16.465,20.063z",
s:"none",t:"",o:0,fl:"#333"}},f:{10:{o:1},42:{},60:{t:"s2.2,2.2,16,16"},80:{},85:{o:0},95:{t:""},100:{}}},{i:{a:{p:"M2,6h3v4H2V6zM22,30h4v-3h-4V30zM26,22h4v4H6V2h4v4h14.584l4.213-4.213l1.414,1.414L26,7.413V22zM10,10v10.586L20.585,10H10zM22,22V11.413L11.414,22H22z",s:"none",o:1,fl:"#333"}},f:{10:{o:0},11:{p:"M18,34v4H-6V14h4v20H18zM22-6v4h12v12h4V-6H22z"},12:{o:1},30:{p:"M30,22v4H6V2h4v20H30zM10,6v4h12v12h4V6H10z"},40:{},41:{o:0},60:{p:"M2,6h3v4H2V6zM22,30h4v-3h-4V30zM26,22h4v4H6V2h4v4h14.584l4.213-4.213l1.414,1.414L26,7.413V22zM10,10v10.586L20.585,10H10zM22,22V11.413L11.414,22H22z"},
85:{},90:{o:1},100:{}}}]},eyedropper:{d:1400,it:1,sh:[{i:{a:{p:"M16,23c0,2.209-3.134,4-7,4s-7-1.791-7-4s3.134-4,7-4S16,20.791,16,23z",s:"none",o:0,fl:"#333"}},f:{10:{o:0.7},50:{p:"M9,23L9,23L9,23L9,23L9,23z"},60:{o:0},80:{p:"M16,23c0,2.209-3.134,4-7,4s-7-1.791-7-4s3.134-4,7-4S16,20.791,16,23z"},100:{}}},{i:{a:{p:"M25.105,4.349c-0.469-0.469-1.229-0.469-1.697,0c0,0-3.449,3.443-6.223,6.223l-0.99-0.99c-0.233-0.234-0.613-0.234-0.848,0l-0.566,0.566c-0.233,0.234-0.233,0.614,0,0.848l0.99,0.99L5.589,22.168c-0.233,0.233-0.423,0.693-0.424,1.023v2.229l-0.99,0.99c-0.233,0.233-0.233,0.614,0,0.848l0.566,0.566c0.233,0.233,0.614,0.233,0.848,0l0.99-0.99h2.229c0.331,0,0.79-0.19,1.023-0.424l10.183-10.183l0.989,0.99c0.233,0.233,0.614,0.234,0.849,0l0.566-0.566c0.233-0.234,0.233-0.614,0-0.848l-0.99-0.99c2.655-2.689,6.222-6.223,6.222-6.223c0.47-0.469,0.47-1.229,0.001-1.697L25.105,4.349zM7.993,25.421l-1.414-1.414l10.606-10.607l1.414,1.415L7.993,25.421z",
s:"none",fl:"#333"}},f:{20:{p:"M29.105,0.349c-0.469-0.469-1.229-0.469-1.697,0c0,0-0.221,6.026-6.223,6.223l-0.99-0.99c-0.233-0.234-0.613-0.234-0.848,0l-0.566,0.566c-0.233,0.234-0.233,0.614,0,0.848l0.99,0.99L9.589,18.168c-0.233,0.233-0.423,0.693-0.424,1.023v2.229l-0.99,0.99c-0.233,0.233-0.233,0.614,0,0.848l0.566,0.566c0.233,0.233,0.614,0.233,0.848,0l0.99-0.99h2.229c0.331,0,0.79-0.19,1.023-0.424l10.183-10.183l0.989,0.99c0.233,0.233,0.614,0.234,0.849,0l0.566-0.566c0.233-0.234,0.233-0.614,0-0.848l-0.99-0.99C25.875,5,31.65,4.592,31.65,4.592c0.47-0.469,0.47-1.229,0.001-1.697L29.105,0.349zM11.993,21.421l-1.414-1.414L21.186,9.399l1.414,1.415L11.993,21.421z"},
25:{},50:{p:"M29.105,0.349c-0.469-0.469-1.229-0.469-1.697,0c0,0-3.449,3.442-6.223,6.223l-0.99-0.99c-0.233-0.234-0.613-0.234-0.848,0l-0.566,0.566c-0.233,0.234-0.233,0.614,0,0.848l0.99,0.99L9.589,18.168c-0.233,0.233-0.423,0.693-0.424,1.023v2.229l-0.99,0.99c-0.233,0.233-0.233,0.614,0,0.848l0.566,0.566c0.233,0.233,0.614,0.233,0.848,0l0.99-0.99h2.229c0.331,0,0.79-0.19,1.023-0.424l10.183-10.183l0.989,0.99c0.233,0.233,0.614,0.234,0.849,0l0.566-0.566c0.233-0.234,0.233-0.614,0-0.848l-0.99-0.99c2.655-2.689,6.222-6.223,6.222-6.223c0.47-0.469,0.47-1.229,0.001-1.697L29.105,0.349zM19.455,13.959l-2.826-0.003l4.556-4.557l1.414,1.415L19.455,13.959z"},
70:{},80:{p:"M25.105,4.349c-0.469-0.469-1.229-0.469-1.697,0c0,0-3.449,3.443-6.223,6.223l-0.99-0.99c-0.233-0.234-0.613-0.234-0.848,0l-0.566,0.566c-0.233,0.234-0.233,0.614,0,0.848l0.99,0.99L5.589,22.168c-0.233,0.233-0.423,0.693-0.424,1.023v2.229l-0.99,0.99c-0.233,0.233-0.233,0.614,0,0.848l0.566,0.566c0.233,0.233,0.614,0.233,0.848,0l0.99-0.99h2.229c0.331,0,0.79-0.19,1.023-0.424l10.183-10.183l0.989,0.99c0.233,0.233,0.614,0.234,0.849,0l0.566-0.566c0.233-0.234,0.233-0.614,0-0.848l-0.99-0.99c2.655-2.689,6.222-6.223,6.222-6.223c0.47-0.469,0.47-1.229,0.001-1.697L25.105,4.349zM7.993,25.421l-1.414-1.414l10.606-10.607l1.414,1.415L7.993,25.421z"},
100:{}}}]},"file-export":{d:1E3,it:1,sh:[{i:{a:{p:"M22,23.371c0.001,0.67,0.384,0.83,0.857,0.355l4.787-4.869c0.475-0.475,0.475-1.242,0-1.717l-4.787-4.867c-0.475-0.476-0.856-0.314-0.857,0.354V16h-7.4c-0.332,0-0.6,0.269-0.6,0.6V19.4c0,0.331,0.268,0.6,0.6,0.6H22V23.371z",t:"",s:"none",fl:"#333"}},f:{10:{t:"t2,0"},20:{t:"t-2,0"},30:{t:"t2,0"},40:{t:"t-2,0"},70:{t:"t31,0"},99:{},100:{t:""}}},{i:{a:{p:"M22,26v2H6V4h9c2.283,0.242,1.6,5.699,1.6,5.699S21.48,9.094,22,11l0,0h2v-0.301C24,8,18,2,14.418,2H4.6C4.269,2,4,2.269,4,2.6V29.4C4,29.73,4.269,30,4.6,30H23.4c0.33,0,0.6-0.27,0.6-0.6V26H22z",
t:"",s:"none",fl:"#333"}},f:{45:{},70:{t:"t31,0"},25:{t:""},99:{},100:{t:""}}}]},"file-import":{d:1E3,it:1,sh:[{i:{a:{p:"M12,23.371c0.001,0.67,0.384,0.83,0.857,0.355l4.787-4.869c0.475-0.475,0.475-1.242,0-1.717l-4.787-4.867c-0.475-0.476-0.856-0.314-0.857,0.354V16H4.6C4.268,16,4,16.269,4,16.6V19.4C4,19.731,4.268,20,4.6,20H12V23.371z",t:"",s:"none",fl:"#333"}},f:{0:{t:"t-31,0"},25:{t:""},30:{t:"t2,0"},40:{t:"t-2,0"},50:{t:"t2,0"},60:{t:"t-2,0"},65:{t:""},100:{}}},{i:{a:{p:"M18.418,2H8.6C8.269,2,8,2.269,8,2.6V10h2V4h9c2.283,0.242,1.6,5.699,1.6,5.699S25.48,9.094,26,11v17H10v-2H8v3.4C8,29.73,8.269,30,8.6,30H27.4c0.33,0,0.6-0.27,0.6-0.6V10.699C28,8,22,2,18.418,2z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-31,0"},25:{t:""},100:{}}}]},"folder-add":{d:1200,it:1,sh:[{i:{a:{p:"M25,4c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,4,25,4zM28,10h-2v2h-2v-2h-2V8h2V6h2v2h2V10z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.686,12H2v-0.8C2,10.537,2.537,10,3.199,10H4c0,0,0-0.447,0-1s0.537-1,1.199-1H9.4c0.33,0,0.791,0.19,1.023,0.424L12,10h6.08C18.182,10.707,18.389,11.378,18.686,12zM25,16c-2.372,0-4.47-1.189-5.736-3H2v13.807C2.074,27.467,2.669,28,3.332,28h21.336c0.662,0,1.258-0.533,1.332-1.193V15.92C25.673,15.967,25.341,16,25,16z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-29,0"},30:{},65:{t:"",e:">"},100:{}}}]},"folder-flag":{d:600,it:2,sh:[{i:{a:{p:"M19,12H2v-0.8C2,10.537,2.537,10,3.199,10H4c0,0,0-0.447,0-1s0.537-1,1.199-1H9.4c0.33,0,0.791,0.19,1.023,0.424L12,10h7C19,11,19,11,19,12zM19,13H2v13.807C2.074,27.467,2.669,28,3.332,28h21.336c0.662,0,1.258-0.533,1.332-1.193V16C23,16,19,16,19,13z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z",s:"none",fl:"#333"}},
f:{"16.5":{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM27.385,6.616c-3.408,2.092-2.215,1.359-5.625,3.452c-0.459-2.064-1.387-3.695-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C25.293,3.207,26.34,4.912,27.385,6.616z"},33:{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM23.8,8.814c-3.408,2.092-2.215,1.359-5.625,3.452c-0.96-1.668-1.76-2.968-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C21.708,5.405,22.755,7.109,23.8,8.814z"},50:{p:"M24,14.001h-2v-10h2V14.001zM22,10c-4,0-2,2.001-6,2c0.054-1.923,0.052-3.451,0-6c4,0,2-2,6-2C21.5,6.3,21.6,8.1,22,10z"},
"66.5":{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM24.239,10.067C20.83,7.976,22.409,8.893,19,6.8c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C25.748,6.651,24.891,8.239,24.239,10.067z"},83:{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM27.739,12.167c-3.409-2.092-1.83-1.175-5.239-3.268c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C29.8,9,28.9,10.8,27.739,12.167z"},100:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z"}}}]},
"folder-lock":{d:1200,it:1,sh:[{i:{a:{p:"M28,7.021V5c0-1.656-1.344-3-3-3s-3,1.344-3,3v2.021C20.793,7.934,20,9.368,20,11c0,2.764,2.236,5,5,5s5-2.236,5-5C30,9.368,29.207,7.934,28,7.021zM23.5,5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5v1.254C26.023,6.104,25.527,6,25,6s-1.023,0.104-1.5,0.254V5zM26,13h-2l0.221-1.99c-0.281-0.229-0.471-0.564-0.471-0.955c0-0.689,0.561-1.249,1.25-1.249s1.25,0.56,1.25,1.249c0,0.391-0.189,0.727-0.471,0.955L26,13z",t:"",s:"none",fl:"#333"}},f:{25:{t:"r-7,25,5"},75:{t:"r7,25,5"},
100:{t:""}},fIE:{25:{t:"r-7,23.5,3.5"},75:{t:"r7,23.5,3.5"},100:{t:""}}},{i:{a:{p:"M26,17.92v8.887C25.926,27.467,25.33,28,24.668,28H3.332C2.669,28,2.074,27.467,2,26.807V13h16.295c0.863,2.888,3.541,5,6.705,5C25.341,18,25.673,17.967,26,17.92zM18,11c0-0.339,0.032-0.671,0.079-1H12l-1.576-1.576C10.191,8.19,9.73,8,9.4,8H5.199C4.537,8,4,8.447,4,9s0,1,0,1h-0.8C2.537,10,2,10.537,2,11.2V12h16.08C18.033,11.672,18,11.34,18,11z",t:"",s:"none",fl:"#333"}},f:{25:{t:"t-5,-1",e:">"},50:{t:"",e:"elastic"},75:{t:"t-1,5",
e:">"},100:{t:"",e:"elastic"}}}]},"folder-new":{d:600,it:2,sh:[{i:{a:{p:"M29.167,8.166h-2.154l1.523-1.523c0.325-0.326,0.324-0.853-0.001-1.179c-0.324-0.325-0.852-0.326-1.179,0l-1.523,1.523V4.833C25.833,4.373,25.461,4,25,4c-0.46,0-0.834,0.373-0.834,0.833v2.154l-1.523-1.523c-0.324-0.326-0.853-0.326-1.178,0c-0.326,0.326-0.326,0.854,0,1.178l1.523,1.524h-2.154C20.373,8.167,20,8.54,20,9c0,0.461,0.373,0.833,0.834,0.833h2.154l-1.523,1.523c-0.326,0.326-0.326,0.854,0,1.179c0.326,0.325,0.854,0.325,1.178,0l1.523-1.523v2.155C24.166,13.627,24.54,14,25,14c0.461,0,0.833-0.373,0.833-0.833v-2.155l1.523,1.523c0.327,0.326,0.854,0.325,1.18,0c0.324-0.324,0.325-0.852,0-1.179l-1.523-1.523h2.154C29.628,9.833,30,9.46,30,9C30,8.54,29.628,8.167,29.167,8.166z",
o:1,t:"s0.9",s:"none",fl:"#333"}},f:{0:{o:1},70:{t:"s1.8",o:0},80:{t:"s0.9"},100:{o:1}},fIE:{0:{o:1,t:"s0.9,0.9,23.5,7.5"},70:{t:"s1.8,1.8,23.5,7.5",o:0},80:{t:"s0.9,0.9,23.5,7.5"},100:{o:1}}},{i:{a:{p:"M29.167,8.166h-2.154l1.523-1.523c0.325-0.326,0.324-0.853-0.001-1.179c-0.324-0.325-0.852-0.326-1.179,0l-1.523,1.523V4.833C25.833,4.373,25.461,4,25,4c-0.46,0-0.834,0.373-0.834,0.833v2.154l-1.523-1.523c-0.324-0.326-0.853-0.326-1.178,0c-0.326,0.326-0.326,0.854,0,1.178l1.523,1.524h-2.154C20.373,8.167,20,8.54,20,9c0,0.461,0.373,0.833,0.834,0.833h2.154l-1.523,1.523c-0.326,0.326-0.326,0.854,0,1.179c0.326,0.325,0.854,0.325,1.178,0l1.523-1.523v2.155C24.166,13.627,24.54,14,25,14c0.461,0,0.833-0.373,0.833-0.833v-2.155l1.523,1.523c0.327,0.326,0.854,0.325,1.18,0c0.324-0.324,0.325-0.852,0-1.179l-1.523-1.523h2.154C29.628,9.833,30,9.46,30,9C30,8.54,29.628,8.167,29.167,8.166z",
t:"",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M18.686,12H2v-0.8C2,10.537,2.537,10,3.199,10H4c0,0,0-0.447,0-1s0.537-1,1.199-1H9.4c0.33,0,0.791,0.19,1.023,0.424L12,10h6.08C18.182,10.707,18.389,11.378,18.686,12zM25,16c-2.372,0-4.47-1.189-5.736-3H2v13.807C2.074,27.467,2.669,28,3.332,28h21.336c0.662,0,1.258-0.533,1.332-1.193V15.92C25.673,15.967,25.341,16,25,16z",t:"",s:"none",fl:"#333"}},f:{}}]},"folder-open":{d:1200,it:1,sh:[{i:{a:{p:"M26.801,8H14l-1.576-1.576C12.191,6.19,11.73,6,11.4,6H7.199C6.537,6,6,6.447,6,7s0,1,0,1h-0.8C4.537,8,4,8.537,4,9.2V11h24V9.2C28,8.537,27.463,8,26.801,8z",
s:"none",fl:"#333"}},f:{0:{p:"M26.801,8H14l-1.576-1.576C12.191,6.19,11.73,6,11.4,6H7.199C6.537,6,6,6.447,6,7s0,1,0,1h-0.8C4.537,8,4,8.537,4,9.2V10h24V9.2C28,8.537,27.463,8,26.801,8z"},10:{},25:{p:"M26.801,8H14l-1.576-1.576C12.191,6.19,11.73,6,11.4,6H7.199C6.537,6,6,6.447,6,7s0,1,0,1h-0.8C4.537,8,4,8.537,4,9.2V11h24V9.2C28,8.537,27.463,8,26.801,8z"},100:{}}},{i:{a:{p:"M26,25H6V13h20V25z",o:1,s:"none",fl:"#333"}},f:{20:{},40:{o:0.3,t:"t-2,-22"},41:{o:0},90:{t:""},91:{o:1},100:{}}},{i:{a:{p:"M26,25H6V13h20V25z",
o:1,s:"none",fl:"#333"}},f:{40:{},60:{o:0.3,t:"t0,-22"},61:{o:0},90:{t:""},91:{o:1},100:{}}},{i:{a:{p:"M26,25H6V13h20V25z",o:1,s:"none",fl:"#333"}},f:{60:{},80:{o:0.3,t:"t2,-22"},81:{o:0},90:{t:""},91:{o:1},100:{}}},{i:{a:{p:"M5.332,26h21.336c0.662,0,1.258-0.533,1.332-1.193l1.992-11.614C30.066,12.534,29.588,12,28.926,12H3.074c-0.662,0-1.14,0.534-1.066,1.192L4,24.807C4.074,25.467,4.669,26,5.332,26z",s:"none",fl:"#333"}},f:{0:{p:"M5.332,26h21.336c0.662,0,1.258-0.533,1.332-1.193V11l0,0H4l0,0v13.807C4.074,25.467,4.669,26,5.332,26z"},
10:{},25:{p:"M5.332,26h21.336c0.662,0,1.258-0.533,1.332-1.193l1.992-11.614C30.066,12.534,29.588,12,28.926,12H3.074c-0.662,0-1.14,0.534-1.066,1.192L4,24.807C4.074,25.467,4.669,26,5.332,26z"},100:{}}}]},"folder-remove":{d:1200,it:1,sh:[{i:{a:{p:"M25,4c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,4,25,4zM28,10h-6V8h6V10z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.686,12H2v-0.8C2,10.537,2.537,10,3.199,10H4c0,0,0-0.447,0-1s0.537-1,1.199-1H9.4c0.33,0,0.791,0.19,1.023,0.424L12,10h6.08C18.182,10.707,18.389,11.378,18.686,12zM25,16c-2.372,0-4.47-1.189-5.736-3H2v13.807C2.074,27.467,2.669,28,3.332,28h21.336c0.662,0,1.258-0.533,1.332-1.193V15.92C25.673,15.967,25.341,16,25,16z",
t:"",s:"none",fl:"#333"}},f:{30:{},65:{t:"t0,25",e:"<"},99:{},100:{t:""}}}]},"inbox-empty":{d:1200,it:1,sh:[{i:{a:{p:"M26,21L24,4H8L6,21H4L5.934,2.596C5.97,2.267,6.269,2,6.6,2h18.8c0.331,0,0.629,0.267,0.666,0.596L28,21H26zM29.4,22H2.6c-0.332,0-0.535,0.261-0.455,0.582l1.709,6.836C3.935,29.739,4.269,30,4.6,30h22.8c0.331,0,0.665-0.261,0.745-0.582l1.709-6.836C29.935,22.261,29.731,22,29.4,22zM20,26h-8v-2h8V26z",t:"",s:"none",fl:"#333"}},f:{5:{t:"t0,-20"},10:{},30:{t:""},100:{}}},{i:{a:{p:"M22,18H10v2h12V18z",
t:"t0,-32",o:0,s:"none",fl:"#333"}},f:{4:{},5:{o:1},10:{},30:{t:"t0,-12"},60:{},80:{p:"M22,6H10v14h12V6z",o:0,t:"t0,-22"},100:{p:"M22,18H10v2h12V18z"}}},{i:{a:{p:"M22,18H10v2h12V18z",t:"t0,-28",o:0,s:"none",fl:"#333"}},f:{4:{},5:{o:1},10:{},30:{t:"t0,-8"},50:{},70:{p:"M22,6H10v14h12V6z",o:0,t:"t0,-18"},100:{p:"M22,18H10v2h12V18z"}}},{i:{a:{p:"M22,18H10v2h12V18z",t:"t0,-24",o:0,s:"none",fl:"#333"}},f:{4:{},5:{o:1},10:{},30:{t:"t0,-4"},40:{},60:{p:"M22,6H10v14h12V6z",o:0,t:"t0,-14"},100:{p:"M22,18H10v2h12V18z"}}},
{i:{a:{p:"M22,18H10v2h12V18z",t:"t0,-20",o:0,s:"none",fl:"#333"}},f:{4:{},5:{o:1},10:{},30:{t:""},50:{p:"M22,6H10v14h12V6z",o:0,t:"t0,-10"},100:{p:"M22,18H10v2h12V18z"}}}]},"inbox-in":{d:1200,it:1,sh:[{i:{a:{p:"M26,21L24,4H8L6,21H4L5.934,2.596C5.97,2.267,6.269,2,6.6,2h18.8c0.331,0,0.629,0.267,0.666,0.596L28,21H26zM29.4,22H2.6c-0.332,0-0.535,0.261-0.455,0.582l1.709,6.836C3.935,29.739,4.269,30,4.6,30h22.8c0.331,0,0.665-0.261,0.745-0.582l1.709-6.836C29.935,22.261,29.731,22,29.4,22zM20,26h-8v-2h8V26z",
t:"",s:"none",fl:"#333"}},f:{5:{t:"t0,-20"},10:{},30:{t:""},100:{}}},{i:{a:{p:"M10.628,12c-0.67,0.001-0.83,0.384-0.355,0.857l4.869,4.787c0.475,0.475,1.243,0.475,1.717,0l4.867-4.787c0.475-0.475,0.314-0.856-0.355-0.857H18V6.6C18,6.268,17.73,6,17.4,6h-2.801C14.268,6,14,6.268,14,6.6V12H10.628z",t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,-10"},35:{},55:{o:1,t:""},60:{},61:{o:0,t:"t0,-10"},81:{o:1,t:""},100:{}}}]},"inbox-out":{d:1200,it:1,sh:[{i:{a:{p:"M26,21L24,4H8L6,21H4L5.934,2.596C5.97,2.267,6.269,2,6.6,2h18.8c0.331,0,0.629,0.267,0.666,0.596L28,21H26zM29.4,22H2.6c-0.332,0-0.535,0.261-0.455,0.582l1.709,6.836C3.935,29.739,4.269,30,4.6,30h22.8c0.331,0,0.665-0.261,0.745-0.582l1.709-6.836C29.935,22.261,29.731,22,29.4,22zM20,26h-8v-2h8V26z",
t:"",s:"none",fl:"#333"}},f:{5:{t:"t0,-20"},10:{},30:{t:""},100:{}}},{i:{a:{p:"M21.372,12c0.67-0.001,0.83-0.384,0.355-0.857l-4.87-4.787c-0.475-0.475-1.243-0.475-1.717,0l-4.867,4.787C9.799,11.617,9.959,11.999,10.629,12H14v4.4c0,0.332,0.27,0.6,0.6,0.6h2.802C17.732,17,18,16.732,18,16.4V12H21.372z",t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0},30:{},31:{o:1},50:{o:0,t:"t0,-10"},60:{},61:{o:1,t:""},80:{o:0,t:"t0,-10"},81:{t:""},90:{},100:{o:1}}}]},"indent-left":{d:1E3,it:1,sh:[{i:{a:{p:"M2,17.999h4v1.846c0,0.166,0.096,0.205,0.212,0.088l2.7-2.72c0.117-0.117,0.117-0.307,0-0.424l-2.7-2.721C6.096,13.951,6.001,13.99,6,14.156V16H2V17.999zM12,28h-2V4h2V28z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M19.4,10h-4.8C14.269,10,14,9.731,14,9.4V6.6C14,6.269,14.269,6,14.6,6h4.8C19.731,6,20,6.269,20,6.6v2.8C20,9.731,19.731,10,19.4,10zM27.4,12H14.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h12.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM23.4,18h-8.8c-0.332,0-0.6,0.269-0.6,0.6V21.4c0,0.331,0.269,0.6,0.6,0.6h8.8c0.331,0,0.6-0.269,0.6-0.6V18.6C24,18.269,23.731,18,23.4,18zM29.4,24H14.6c-0.332,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6V24.6C30,24.269,29.731,24,29.4,24z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-12,0"},20:{},25:{t:"t-8,0"},45:{},50:{t:"t-4,0"},70:{},75:{t:""},100:{}}}]},"indent-right":{d:1E3,it:1,sh:[{i:{a:{p:"M30,16h-4v-1.844c-0.001-0.166-0.096-0.205-0.212-0.088l-2.7,2.721c-0.117,0.117-0.117,0.307,0,0.424l2.7,2.72C25.904,20.05,26,20.011,26,19.845v-1.846h4V16zM20,4h2v24h-2V4z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M7.4,10H2.6C2.269,10,2,9.731,2,9.4V6.6C2,6.269,2.269,6,2.6,6h4.8C7.731,6,8,6.269,8,6.6v2.8C8,9.731,7.731,10,7.4,10zM15.4,12H2.6C2.269,12,2,12.269,2,12.6v2.8C2,15.731,2.269,16,2.6,16h12.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C16,12.269,15.731,12,15.4,12zM11.4,18H2.6C2.269,18,2,18.269,2,18.6V21.4C2,21.731,2.269,22,2.6,22h8.8c0.331,0,0.6-0.269,0.6-0.6V18.6C12,18.269,11.731,18,11.4,18zM17.4,24H2.6C2.269,24,2,24.269,2,24.6V27.4C2,27.731,2.269,28,2.6,28h14.8c0.331,0,0.6-0.269,0.6-0.6V24.6C18,24.269,17.731,24,17.4,24z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t12,0"},20:{},25:{t:"t8,0"},45:{},50:{t:"t4,0"},70:{},75:{t:""},100:{}}}]},"message-add":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-2v2h-2V8h-2V6h2V4h2v2h2V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-29,0"},30:{},65:{t:"",e:">"},100:{}}}]},"message-flag":{d:600,it:2,sh:[{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938C19.438,14.991,19,14,19,12H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z",s:"none",fl:"#333"}},f:{"16.5":{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM27.385,6.616c-3.408,2.092-2.215,1.359-5.625,3.452c-0.459-2.064-1.387-3.695-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C25.293,3.207,26.34,4.912,27.385,6.616z"},33:{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM23.8,8.814c-3.408,2.092-2.215,1.359-5.625,3.452c-0.96-1.668-1.76-2.968-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C21.708,5.405,22.755,7.109,23.8,8.814z"},
50:{p:"M24,14.001h-2v-10h2V14.001zM22,10c-4,0-2,2.001-6,2c0.054-1.923,0.052-3.451,0-6c4,0,2-2,6-2C21.5,6.3,21.6,8.1,22,10z"},"66.5":{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM24.239,10.067C20.83,7.976,22.409,8.893,19,6.8c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C25.748,6.651,24.891,8.239,24.239,10.067z"},83:{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM27.739,12.167c-3.409-2.092-1.83-1.175-5.239-3.268c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C29.8,9,28.9,10.8,27.739,12.167z"},
100:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z"}}}]},"message-in":{d:1E3,it:1,sh:[{i:{a:{p:"M23.576,12.826c0.234,0.233,0.613,0.233,0.848,0l4.441-4.401C29.1,8.191,29.02,8,28.689,8L26,8v-2.8C26,4.538,25.463,4,24.801,4l-1.602,0C22.537,4,22,4.537,22,5.2V8h-2.689c-0.33,0-0.41,0.19-0.176,0.424L23.576,12.826z",o:1,t:"",s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,-7"},50:{},70:{o:1,t:""},100:{}}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-10,-33r-360,13,21.5"},45:{t:""},100:{}},fIE:{0:{t:"t-10,-33r-360,11.5,20"},45:{t:""},100:{}}}]},"message-lock":{d:1200,it:1,sh:[{i:{a:{p:"M28,7.021V5c0-1.656-1.344-3-3-3s-3,1.344-3,3v2.021C20.793,7.934,20,9.368,20,11c0,2.764,2.236,5,5,5s5-2.236,5-5C30,9.368,29.207,7.934,28,7.021zM23.5,5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5v1.254C26.023,6.104,25.527,6,25,6s-1.023,0.104-1.5,0.254V5zM26,13h-2l0.221-1.99c-0.281-0.229-0.471-0.564-0.471-0.955c0-0.689,0.561-1.249,1.25-1.249s1.25,0.56,1.25,1.249c0,0.391-0.189,0.727-0.471,0.955L26,13z",
t:"",s:"none",fl:"#333"}},f:{25:{t:"r-7,25,5"},75:{t:"r7,25,5"},100:{t:""}},fIE:{25:{t:"r-7,23.5,3.5"},75:{t:"r7,23.5,3.5"},100:{t:""}}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
t:"",s:"none",fl:"#333"}},f:{25:{t:"t-5,-1",e:">"},50:{t:"",e:"elastic"},75:{t:"t-1,5",e:">"},100:{t:"",e:"elastic"}}}]},"message-new":{d:600,it:2,sh:[{i:{a:{p:"M29.167,8.166h-2.154l1.523-1.523c0.325-0.326,0.324-0.853-0.001-1.179c-0.324-0.325-0.852-0.326-1.179,0l-1.523,1.523V4.833C25.833,4.373,25.461,4,25,4c-0.46,0-0.834,0.373-0.834,0.833v2.154l-1.523-1.523c-0.324-0.326-0.853-0.326-1.178,0c-0.326,0.326-0.326,0.854,0,1.178l1.523,1.524h-2.154C20.373,8.167,20,8.54,20,9c0,0.461,0.373,0.833,0.834,0.833h2.154l-1.523,1.523c-0.326,0.326-0.326,0.854,0,1.179c0.326,0.325,0.854,0.325,1.178,0l1.523-1.523v2.155C24.166,13.627,24.54,14,25,14c0.461,0,0.833-0.373,0.833-0.833v-2.155l1.523,1.523c0.327,0.326,0.854,0.325,1.18,0c0.324-0.324,0.325-0.852,0-1.179l-1.523-1.523h2.154C29.628,9.833,30,9.46,30,9C30,8.54,29.628,8.167,29.167,8.166z",
o:1,t:"s0.9",s:"none",fl:"#333"}},f:{0:{o:1},70:{t:"s1.8",o:0},80:{t:"s0.9"},100:{o:1}},fIE:{0:{o:1,t:"s0.9,0.9,23.5,7.5"},70:{t:"s1.8,1.8,23.5,7.5",o:0},80:{t:"s0.9,0.9,23.5,7.5"},100:{o:1}}},{i:{a:{p:"M29.167,8.166h-2.154l1.523-1.523c0.325-0.326,0.324-0.853-0.001-1.179c-0.324-0.325-0.852-0.326-1.179,0l-1.523,1.523V4.833C25.833,4.373,25.461,4,25,4c-0.46,0-0.834,0.373-0.834,0.833v2.154l-1.523-1.523c-0.324-0.326-0.853-0.326-1.178,0c-0.326,0.326-0.326,0.854,0,1.178l1.523,1.524h-2.154C20.373,8.167,20,8.54,20,9c0,0.461,0.373,0.833,0.834,0.833h2.154l-1.523,1.523c-0.326,0.326-0.326,0.854,0,1.179c0.326,0.325,0.854,0.325,1.178,0l1.523-1.523v2.155C24.166,13.627,24.54,14,25,14c0.461,0,0.833-0.373,0.833-0.833v-2.155l1.523,1.523c0.327,0.326,0.854,0.325,1.18,0c0.324-0.324,0.325-0.852,0-1.179l-1.523-1.523h2.154C29.628,9.833,30,9.46,30,9C30,8.54,29.628,8.167,29.167,8.166z",
t:"",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",t:"",s:"none",fl:"#333"}},f:{}}]},"message-out":{d:1E3,it:1,
sh:[{i:{a:{p:"M24.424,5.175c-0.234-0.233-0.613-0.233-0.848,0l-4.441,4.401C18.9,9.81,18.98,10,19.311,10H22v2.8c0,0.663,0.537,1.2,1.199,1.2h1.602C25.463,14,26,13.463,26,12.8V10h2.689c0.33,0,0.41-0.19,0.176-0.424L24.424,5.175z",o:1,t:"",s:"none",fl:"#333"}},f:{20:{o:0,t:"t0,-7"},70:{},71:{t:""},90:{},100:{o:1}}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
o:1,t:"",s:"none",fl:"#333"}},f:{25:{},70:{t:"t10,-33r360,13,21.5"},71:{o:0},80:{t:""},90:{},100:{o:1}},fIE:{25:{},70:{t:"t10,-33r360,11.5,20"},71:{o:0},80:{t:""},90:{},100:{o:1}}}]},"message-remove":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-6V6h6V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M24,16.931v10.128C24,27.578,23.578,28,23.059,28H2.941C2.422,28,2,27.578,2,27.059V15.035l4,3.285L2.9,27.1l4.678-7.428l3.939,2.844c0.818,0.645,2.146,0.645,2.965,0l3.939-2.844l4.797,7.453L20,18.32l2.225-1.827C22.79,16.704,23.383,16.853,24,16.931zM14.482,20.818l6.455-4.938c-1.5-0.889-2.686-2.249-3.349-3.88H2.941C2.422,12,2,12.422,2,12.941v0.596l9.518,7.281C12.336,21.459,13.664,21.459,14.482,20.818z",
t:"",s:"none",fl:"#333"}},f:{30:{},65:{t:"t0,25",e:"<"},99:{},100:{t:""}}}]},microphone:{d:1200,it:1,sh:[{i:{a:{p:"M7.949,0c-0.75,0-1.5,0-2.25,0C5.699,3.15,3.15,5.699,0,5.699c0,0.75,0,1.5,0,2.25C4.35,7.949,7.949,4.35,7.949,0z",s:"none",o:0,t:"s0.3,0.3,0,0",fl:"#333"}},f:{0:{o:0.7},10:{t:"s1,1,0,0"},15:{o:0},16:{o:0.7,t:"s0.3,0.3,0,0"},25:{t:"s1,1,0,0"},30:{o:0},31:{o:0.7,t:"s0.3,0.3,0,0"},40:{t:"s1,1,0,0"},45:{o:0},46:{o:0.7,t:"s0.3,0.3,0,0"},55:{t:"s1,1,0,0"},60:{o:0},61:{o:0.7,t:"s0.3,0.3,0,0"},
70:{t:"s1,1,0,0"},75:{o:0},100:{}}},{i:{a:{p:"M0,12V9.75C5.625,9.75,9.75,5.1,9.75,0H12C12,7.199,6,12,0,12z",o:0,t:"s0.1,0.1,0,0",s:"none",fl:"#333"}},f:{0:{o:0.7},10:{t:"s1,1,0,0"},15:{o:0},16:{o:0.7,t:"s0.1,0.1,0,0"},25:{t:"s1,1,0,0"},30:{o:0},31:{o:0.7,t:"s0.1,0.1,0,0"},40:{t:"s1,1,0,0"},45:{o:0},46:{o:0.7,t:"s0.1,0.1,0,0"},55:{t:"s1,1,0,0"},60:{o:0},61:{o:0.7,t:"s0.1,0.1,0,0"},70:{t:"s1,1,0,0"},75:{o:0},100:{}}},{i:{a:{p:"M24.051,0c0.75,0,1.5,0,2.25,0c0,3.15,2.549,5.699,5.699,5.699c0,0.75,0,1.5,0,2.25C27.65,7.949,24.051,4.35,24.051,0z",
s:"none",o:0,t:"s0.3,0.3,32,0",fl:"#333"}},f:{25:{},30:{o:0.7},35:{t:"s1,1,32,0"},40:{o:0},41:{o:0.7,t:"s0.3,0.3,32,0"},50:{t:"s1,1,32,0"},55:{o:0},56:{o:0.7,t:"s0.3,0.3,32,0"},65:{t:"s1,1,32,0"},70:{o:0},71:{o:0.7,t:"s0.3,0.3,32,0"},80:{t:"s1,1,32,0"},85:{o:0},86:{o:0.7,t:"s0.3,0.3,32,0"},95:{t:"s1,1,32,0"},100:{o:0}}},{i:{a:{p:"M32,12V9.75c-5.625,0-9.75-4.65-9.75-9.75H20C20,7.199,26,12,32,12z",o:0,t:"s0.1,0.1,32,0",s:"none",fl:"#333"}},f:{25:{},30:{o:0.7},35:{t:"s1,1,32,0"},40:{o:0},41:{o:0.7,t:"s0.1,0.1,32,0"},
50:{t:"s1,1,32,0"},55:{o:0},56:{o:0.7,t:"s0.1,0.1,32,0"},65:{t:"s1,1,32,0"},70:{o:0},71:{o:0.7,t:"s0.1,0.1,32,0"},80:{t:"s1,1,32,0"},85:{o:0},86:{o:0.7,t:"s0.1,0.1,32,0"},95:{t:"s1,1,32,0"},100:{o:0}}},{i:{a:{p:"M22,13H10c0-1.824,0-3.648,0-4c0-3.313,2.686-6,6-6s6,2.687,6,6C22,9.352,22,11.176,22,13zM10,14c0,0.998,0,2.781,0,3c0,3.313,2.686,6,6,6s6-2.688,6-6c0-0.219,0-2.002,0-3H10zM24.4,12H23.6c-0.331,0-0.6,0.269-0.6,0.6V17c0,3.859-3.141,7-7,7c-3.86,0-7-3.141-7-7v-4.4C9,12.269,8.731,12,8.4,12H7.6C7.269,12,7,12.269,7,12.6V17c0,3.683,2.226,6.852,5.4,8.243v2.456c0,0-2.7,0.301-2.7,1.301c0,0,0,1,0.899,1H21.4c0.9,0,0.9-1,0.9-1c0-1-2.701-1.301-2.701-1.301v-2.456C22.774,23.852,25,20.683,25,17v-4.4C25,12.269,24.731,12,24.4,12z",
s:"none",fl:"#333"}},f:{}}]},moon:{d:1800,it:1,sh:[{i:{a:{p:"M20.6,20.602L21,19l0.401,1.602l1.292,0.406l-1.292,0.396L21,23.005l-0.4-1.602l-1.305-0.396L20.6,20.602z",o:1,s:"none",fl:"#333"}},f:{20:{o:0.1},30:{},50:{o:1},100:{}}},{i:{a:{p:"M22.182,6.204L23,3l0.819,3.204l2.649,0.813l-2.649,0.789L23,11.008l-0.818-3.203l-2.673-0.789L22.182,6.204z",o:1,s:"none",fl:"#333"}},f:{20:{},50:{o:0.1},60:{},80:{o:1},100:{}}},{i:{a:{p:"M26.599,14.601L27,13l0.4,1.601l1.293,0.407L27.4,15.403L27,17.004l-0.401-1.601l-1.304-0.395L26.599,14.601z",
o:1,s:"none",fl:"#333"}},f:{40:{},60:{o:0.1},70:{},90:{o:1},100:{}}},{i:{a:{p:"M10.008,12.998c0-4.775,2.101-9.049,5.415-11.983C7.961,1.328,2,7.459,2,15c0,7.74,6.276,14.015,14.015,14.015c1.7,0,3.322-0.316,4.829-0.872C14.545,25.986,10.008,20.028,10.008,12.998z",o:1,s:"none",fl:"#333"}},f:{}}]},"new-window":{d:800,it:1,sh:[{i:{a:{p:"M3.2,24C2.537,24,2,23.463,2,22.8V3.2C2,2.537,2.537,2,3.2,2h21.6C25.463,2,26,2.537,26,3.2V8h-2V6H4v16h2v2H3.2z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M6,9.2v19.6C6,29.463,6.537,30,7.2,30h21.6c0.663,0,1.2-0.537,1.2-1.2V9.2C30,8.537,29.463,8,28.8,8H7.2C6.537,8,6,8.537,6,9.2zM28,28H8V12h20V28z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-4,-6"},50:{t:""},100:{}}}]},"pin-off":{d:1800,it:1,sh:[{i:{a:{p:"M22.949,20.361l-2.543,2.545c-0.469,0.469-1.23,0.469-1.699,0l-3.394-3.393L4,28l8.485-11.314l-3.395-3.395c-0.469-0.469-0.467-1.229,0.001-1.697l2.547-2.547c0.468-0.469,1.227-0.467,1.694,0.001l9.616,9.616C23.418,19.133,23.418,19.893,22.949,20.361zM15.739,10.604c-0.028,0.027-0.07,0.021-0.102,0.042l5.714,5.716c0.023-0.031,0.016-0.072,0.043-0.102l3.395-3.395c0.027-0.026,0.066-0.02,0.098-0.04L19.172,7.11c-0.02,0.031-0.012,0.071-0.039,0.099L15.739,10.604zM27.051,13.433l1.98-1.98c0.234-0.233,0.234-0.614,0-0.848l-7.637-7.637c-0.234-0.234-0.613-0.234-0.848,0l-1.98,1.98c-0.234,0.233-0.234,0.613,0,0.848l7.637,7.637C26.438,13.666,26.816,13.667,27.051,13.433z",
o:1,t:"",s:"none",fl:"#333"}},f:{10:{t:"t0,-33r30"},11:{t:"t20,-33r0",p:"M14.629,5.387c1.025-1.153,3.805-0.916,6.492,0.636c2.691,1.554,4.283,3.846,3.793,5.308c-1.021,1.158-3.799,0.922-6.492-0.633C15.727,9.142,14.133,6.851,14.629,5.387zM13.166,19.801c-3.262-1.883-5.313-4.51-5.418-6.613c-0.195,0.335-0.385,0.664-0.466,0.806c-0.953,1.651,0.565,4.362,3.452,6.493L5,33c0,0-0.017-0.068,0,0l0,0l0,0l8.789-10.752c3.289,1.436,6.398,1.396,7.346-0.254c0.082-0.143,0.273-0.473,0.469-0.809C19.729,22.145,16.43,21.684,13.166,19.801zM22.232,20.027c-1.227,1.746-5.094,1.486-8.814-0.662c-3.724-2.15-5.882-5.369-4.98-7.304c0.835-1.1,2.762-1.341,5.029-0.783l0.545-0.942c-0.037-0.05-0.084-0.099-0.119-0.147c-0.781-1.085-0.912-2.069-0.469-2.835c0.176-0.306,0.602-1.041,0.602-1.041c0.188,1.547,1.645,3.373,3.994,4.73c2.4,1.386,4.926,1.818,6.438,1.204c-0.248,0.426-0.531,0.918-0.639,1.106c-0.422,0.726-1.561,0.923-2.799,0.84l-0.623,1.086C22.018,16.967,22.77,18.756,22.232,20.027zM18.746,18.135c-0.92-0.105-2.25-0.455-3.828-1.367c-1.578-0.911-2.549-1.888-3.1-2.633l-0.27,0.468c0.51,0.648,1.455,1.636,3.119,2.597c1.662,0.961,2.99,1.285,3.809,1.402L18.746,18.135z"},
25:{},35:{t:"t3,-6r0"},40:{t:"",p:"M14.629,5.387c1.025-1.153,3.805-0.916,6.492,0.636c2.691,1.554,4.283,3.846,3.793,5.308c-1.021,1.158-3.799,0.922-6.492-0.633C15.727,9.142,14.133,6.851,14.629,5.387zM13.166,19.801c-3.262-1.883-5.313-4.51-5.418-6.613c-0.195,0.335-0.385,0.664-0.466,0.806c-0.953,1.651,0.565,4.362,3.452,6.493L8.337,26.4c0,0-0.138,0.406-0.121,0.475c0.1,0.379,0.636,0.557,1.196,0.408c0.145-0.039,0.271-0.096,0.388-0.164l3.989-4.871c3.289,1.436,6.398,1.396,7.346-0.254c0.082-0.143,0.273-0.473,0.469-0.809C19.729,22.145,16.43,21.684,13.166,19.801zM22.232,20.027c-1.227,1.746-5.094,1.486-8.814-0.662c-3.724-2.15-5.882-5.369-4.98-7.304c0.835-1.1,2.762-1.341,5.029-0.783l0.545-0.942c-0.037-0.05-0.084-0.099-0.119-0.147c-0.781-1.085-0.912-2.069-0.469-2.835c0.176-0.306,0.602-1.041,0.602-1.041c0.188,1.547,1.645,3.373,3.994,4.73c2.4,1.386,4.926,1.818,6.438,1.204c-0.248,0.426-0.531,0.918-0.639,1.106c-0.422,0.726-1.561,0.923-2.799,0.84l-0.623,1.086C22.018,16.967,22.77,18.756,22.232,20.027zM18.746,18.135c-0.92-0.105-2.25-0.455-3.828-1.367c-1.578-0.911-2.549-1.888-3.1-2.633l-0.27,0.468c0.51,0.648,1.455,1.636,3.119,2.597c1.662,0.961,2.99,1.285,3.809,1.402L18.746,18.135z"},
42:{t:"r-5,4,28"},44:{t:"r3,4,28"},46:{t:"r-2,4,28"},48:{t:"r0,4,28"},70:{},80:{o:0},81:{p:"M22.949,20.361l-2.543,2.545c-0.469,0.469-1.23,0.469-1.699,0l-3.394-3.393L4,28l8.485-11.314l-3.395-3.395c-0.469-0.469-0.467-1.229,0.001-1.697l2.547-2.547c0.468-0.469,1.227-0.467,1.694,0.001l9.616,9.616C23.418,19.133,23.418,19.893,22.949,20.361zM15.739,10.604c-0.028,0.027-0.07,0.021-0.102,0.042l5.714,5.716c0.023-0.031,0.016-0.072,0.043-0.102l3.395-3.395c0.027-0.026,0.066-0.02,0.098-0.04L19.172,7.11c-0.02,0.031-0.012,0.071-0.039,0.099L15.739,10.604zM27.051,13.433l1.98-1.98c0.234-0.233,0.234-0.614,0-0.848l-7.637-7.637c-0.234-0.234-0.613-0.234-0.848,0l-1.98,1.98c-0.234,0.233-0.234,0.613,0,0.848l7.637,7.637C26.438,13.666,26.816,13.667,27.051,13.433z"},
90:{o:1},100:{}}}]},"pin-on":{d:1800,it:1,sh:[{i:{a:{p:"M14.629,5.387c1.025-1.153,3.805-0.916,6.492,0.636c2.691,1.554,4.283,3.846,3.793,5.308c-1.021,1.158-3.799,0.922-6.492-0.633C15.727,9.142,14.133,6.851,14.629,5.387zM13.166,19.801c-3.262-1.883-5.313-4.51-5.418-6.613c-0.195,0.335-0.385,0.664-0.466,0.806c-0.953,1.651,0.565,4.362,3.452,6.493L8.337,26.4c0,0-0.138,0.406-0.121,0.475c0.1,0.379,0.636,0.557,1.196,0.408c0.145-0.039,0.271-0.096,0.388-0.164l3.989-4.871c3.289,1.436,6.398,1.396,7.346-0.254c0.082-0.143,0.273-0.473,0.469-0.809C19.729,22.145,16.43,21.684,13.166,19.801zM22.232,20.027c-1.227,1.746-5.094,1.486-8.814-0.662c-3.724-2.15-5.882-5.369-4.98-7.304c0.835-1.1,2.762-1.341,5.029-0.783l0.545-0.942c-0.037-0.05-0.084-0.099-0.119-0.147c-0.781-1.085-0.912-2.069-0.469-2.835c0.176-0.306,0.602-1.041,0.602-1.041c0.188,1.547,1.645,3.373,3.994,4.73c2.4,1.386,4.926,1.818,6.438,1.204c-0.248,0.426-0.531,0.918-0.639,1.106c-0.422,0.726-1.561,0.923-2.799,0.84l-0.623,1.086C22.018,16.967,22.77,18.756,22.232,20.027zM18.746,18.135c-0.92-0.105-2.25-0.455-3.828-1.367c-1.578-0.911-2.549-1.888-3.1-2.633l-0.27,0.468c0.51,0.648,1.455,1.636,3.119,2.597c1.662,0.961,2.99,1.285,3.809,1.402L18.746,18.135z",
o:1,t:"",s:"none",fl:"#333"}},f:{5:{t:"t3,-6",p:"M14.629,5.387c1.025-1.153,3.805-0.916,6.492,0.636c2.691,1.554,4.283,3.846,3.793,5.308c-1.021,1.158-3.799,0.922-6.492-0.633C15.727,9.142,14.133,6.851,14.629,5.387zM13.166,19.801c-3.262-1.883-5.313-4.51-5.418-6.613c-0.195,0.335-0.385,0.664-0.466,0.806c-0.953,1.651,0.565,4.362,3.452,6.493L5,33c0,0-0.017-0.068,0,0l0,0l0,0l8.789-10.752c3.289,1.436,6.398,1.396,7.346-0.254c0.082-0.143,0.273-0.473,0.469-0.809C19.729,22.145,16.43,21.684,13.166,19.801zM22.232,20.027c-1.227,1.746-5.094,1.486-8.814-0.662c-3.724-2.15-5.882-5.369-4.98-7.304c0.835-1.1,2.762-1.341,5.029-0.783l0.545-0.942c-0.037-0.05-0.084-0.099-0.119-0.147c-0.781-1.085-0.912-2.069-0.469-2.835c0.176-0.306,0.602-1.041,0.602-1.041c0.188,1.547,1.645,3.373,3.994,4.73c2.4,1.386,4.926,1.818,6.438,1.204c-0.248,0.426-0.531,0.918-0.639,1.106c-0.422,0.726-1.561,0.923-2.799,0.84l-0.623,1.086C22.018,16.967,22.77,18.756,22.232,20.027zM18.746,18.135c-0.92-0.105-2.25-0.455-3.828-1.367c-1.578-0.911-2.549-1.888-3.1-2.633l-0.27,0.468c0.51,0.648,1.455,1.636,3.119,2.597c1.662,0.961,2.99,1.285,3.809,1.402L18.746,18.135z"},
20:{t:"t20,-31"},21:{t:"t10,-31",p:"M22.949,20.361l-2.543,2.545c-0.469,0.469-1.23,0.469-1.699,0l-3.394-3.393L4,28l8.485-11.314l-3.395-3.395c-0.469-0.469-0.467-1.229,0.001-1.697l2.547-2.547c0.468-0.469,1.227-0.467,1.694,0.001l9.616,9.616C23.418,19.133,23.418,19.893,22.949,20.361zM15.739,10.604c-0.028,0.027-0.07,0.021-0.102,0.042l5.714,5.716c0.023-0.031,0.016-0.072,0.043-0.102l3.395-3.395c0.027-0.026,0.066-0.02,0.098-0.04L19.172,7.11c-0.02,0.031-0.012,0.071-0.039,0.099L15.739,10.604zM27.051,13.433l1.98-1.98c0.234-0.233,0.234-0.614,0-0.848l-7.637-7.637c-0.234-0.234-0.613-0.234-0.848,0l-1.98,1.98c-0.234,0.233-0.234,0.613,0,0.848l7.637,7.637C26.438,13.666,26.816,13.667,27.051,13.433z"},
25:{t:""},30:{t:"r-15,4,28"},36:{t:"r10,4,28"},42:{t:"r-5,4,28"},50:{t:"r0,4,28"},80:{},81:{o:0},82:{t:"s0.1,0.1,8,26",p:"M14.629,5.387c1.025-1.153,3.805-0.916,6.492,0.636c2.691,1.554,4.283,3.846,3.793,5.308c-1.021,1.158-3.799,0.922-6.492-0.633C15.727,9.142,14.133,6.851,14.629,5.387zM13.166,19.801c-3.262-1.883-5.313-4.51-5.418-6.613c-0.195,0.335-0.385,0.664-0.466,0.806c-0.953,1.651,0.565,4.362,3.452,6.493L8.337,26.4c0,0-0.138,0.406-0.121,0.475c0.1,0.379,0.636,0.557,1.196,0.408c0.145-0.039,0.271-0.096,0.388-0.164l3.989-4.871c3.289,1.436,6.398,1.396,7.346-0.254c0.082-0.143,0.273-0.473,0.469-0.809C19.729,22.145,16.43,21.684,13.166,19.801zM22.232,20.027c-1.227,1.746-5.094,1.486-8.814-0.662c-3.724-2.15-5.882-5.369-4.98-7.304c0.835-1.1,2.762-1.341,5.029-0.783l0.545-0.942c-0.037-0.05-0.084-0.099-0.119-0.147c-0.781-1.085-0.912-2.069-0.469-2.835c0.176-0.306,0.602-1.041,0.602-1.041c0.188,1.547,1.645,3.373,3.994,4.73c2.4,1.386,4.926,1.818,6.438,1.204c-0.248,0.426-0.531,0.918-0.639,1.106c-0.422,0.726-1.561,0.923-2.799,0.84l-0.623,1.086C22.018,16.967,22.77,18.756,22.232,20.027zM18.746,18.135c-0.92-0.105-2.25-0.455-3.828-1.367c-1.578-0.911-2.549-1.888-3.1-2.633l-0.27,0.468c0.51,0.648,1.455,1.636,3.119,2.597c1.662,0.961,2.99,1.285,3.809,1.402L18.746,18.135z"},
85:{o:1},90:{t:"",e:"elastic"},100:{}}}]},playlist:{d:1200,it:1,sh:[{i:{a:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2.6,12h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,10,2,10.269,2,10.6v0.8C2,11.731,2.269,12,2.6,12zM2.6,16h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6v0.8C2,15.731,2.269,16,2.6,16zM12,19.4V18.6c0-0.331-0.269-0.6-0.6-0.6H2.6C2.269,18,2,18.269,2,18.6V19.4C2,19.731,2.269,20,2.6,20h8.8C11.731,20,12,19.731,12,19.4zM12,23.4V22.6c0-0.331-0.269-0.6-0.6-0.6H2.6C2.269,22,2,22.269,2,22.6V23.4C2,23.731,2.269,24,2.6,24h8.8C11.731,24,12,23.731,12,23.4z",
s:"none",fl:"#333"}},f:{0:{p:"M2,6L2,6L2,6L2,6L2,6L2,6L2,6L2,6L2,6zM2,10L2,10L2,10L2,10L2,10L2,10L2,10L2,10L2,10zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22z"},20:{},30:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2,10L2,10L2,10L2,10L2,10L2,10L2,10L2,10L2,10zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22z"},
40:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2.6,12h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,10,2,10.269,2,10.6v0.8C2,11.731,2.269,12,2.6,12zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22z"},50:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2.6,12h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,10,2,10.269,2,10.6v0.8C2,11.731,2.269,12,2.6,12zM2.6,16h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6v0.8C2,15.731,2.269,16,2.6,16zM2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18L2,18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22z"},
60:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2.6,12h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,10,2,10.269,2,10.6v0.8C2,11.731,2.269,12,2.6,12zM2.6,16h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6v0.8C2,15.731,2.269,16,2.6,16zM12,19.4V18.6c0-0.331-0.269-0.6-0.6-0.6H2.6C2.269,18,2,18.269,2,18.6V19.4C2,19.731,2.269,20,2.6,20h8.8C11.731,20,12,19.731,12,19.4zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22z"},
70:{p:"M19.4,8H2.6C2.269,8,2,7.731,2,7.4V6.6C2,6.269,2.269,6,2.6,6h16.8C19.731,6,20,6.269,20,6.6v0.8C20,7.731,19.731,8,19.4,8zM2.6,12h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,10,2,10.269,2,10.6v0.8C2,11.731,2.269,12,2.6,12zM2.6,16h16.8c0.331,0,0.6-0.269,0.6-0.6v-0.8c0-0.332-0.269-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6v0.8C2,15.731,2.269,16,2.6,16zM12,19.4V18.6c0-0.331-0.269-0.6-0.6-0.6H2.6C2.269,18,2,18.269,2,18.6V19.4C2,19.731,2.269,20,2.6,20h8.8C11.731,20,12,19.731,12,19.4zM12,23.4V22.6c0-0.331-0.269-0.6-0.6-0.6H2.6C2.269,22,2,22.269,2,22.6V23.4C2,23.731,2.269,24,2.6,24h8.8C11.731,24,12,23.731,12,23.4z"},
100:{}}},{i:{a:{p:"M29.189,8.601C28,6,26,6,25.486,4H22v16.818C21.162,20.313,20.131,20,19,20c-2.762,0-5,1.791-5,4s2.238,4,5,4s5-1.791,5-4V8c2,0,4,4,4,8C28,16,30.371,11.185,29.189,8.601z",t:"",s:"none",fl:"#333"}},f:{0:{t:"t21,0"},20:{t:"",e:">"},100:{}}}]},save:{d:1200,it:1,sh:[{i:{a:{p:"M19,16c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-1.657,1.343-3,3-3S19,14.343,19,16z",t:"",o:0,s:"none",fl:"#333"}},f:{10:{o:1},60:{t:"s3.2"},70:{},80:{o:0},85:{t:""},100:{}},fIE:{10:{o:1},60:{t:"s3.2,3.2,14.5,14.5"},70:{},
80:{o:0},85:{t:""},100:{}}},{i:{a:{p:"M29.576,8l-5.725-5.576C23.617,2.19,23.158,2,22.828,2H3.2C2.537,2,2,2.537,2,3.2v25.601C2,29.463,2.537,30,3.2,30h25.601C29.463,30,30,29.463,30,28.801V9.023C30,8.692,29.811,8.233,29.576,8zM16,4v6h-4V4H16zM24,28H8V18h16V28zM28,28h-2V17.199C26,16.537,25.463,16,24.801,16H7.2C6.537,16,6,16.537,6,17.199V28H4V4h2v6.8C6,11.463,6.537,12,7.2,12h9.601C17.463,12,18,11.463,18,10.8V4h4c0.33,0,0.789,0.19,1.023,0.424l4.553,4.404C27.811,9.062,28,9.521,28,9.852V28zM21.4,22H10.6c-0.331,0-0.6-0.27-0.6-0.6V20.6c0-0.33,0.269-0.6,0.6-0.6H21.4c0.33,0,0.6,0.27,0.6,0.6V21.4C22,21.73,21.73,22,21.4,22zM21.4,26H10.6c-0.331,0-0.6-0.27-0.6-0.6V24.6c0-0.33,0.269-0.6,0.6-0.6H21.4c0.33,0,0.6,0.27,0.6,0.6V25.4C22,25.73,21.73,26,21.4,26z",
o:1,s:"none",fl:"#333"}},f:{10:{o:0.3},70:{},80:{o:1},100:{}}}]},"shopping-cart-in":{d:600,it:2,sh:[{i:{a:{p:"M12.628,8C11.959,8,11.799,8.383,12.273,8.857l4.87,4.787c0.474,0.475,1.242,0.475,1.717,0l4.867-4.787C24.202,8.382,24.041,8,23.372,8H20V2.6C20,2.269,19.731,2,19.4,2h-2.8C16.269,2,16,2.269,16,2.6V8H12.628z",s:"none",fl:"#333"}},f:{20:{t:"t0,-2"},70:{t:"t0,2"},100:{t:""}}},{i:{a:{p:"M14,27c0,1.105-0.896,2-2,2s-2-0.895-2-2s0.896-2,2-2S14,25.895,14,27zM24,25c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S25.105,25,24,25zM29.4,8H26l-0.667,2h2.271l-1.111,5H8.447l-0.922-5h2.913L10,8H7.193L6.73,5.184C6.622,4.53,5.997,4,5.334,4h-4c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.708C4.373,6,4.69,6.264,4.75,6.59l3.123,16.231C7.998,23.473,8.637,24,9.3,24h16.499c0.331,0,0.658-0.263,0.73-0.586l0.184-0.828C26.785,22.263,26.575,22,26.244,22H10.26c-0.332,0-0.648-0.265-0.707-0.591L9.3,20h17.435c0.331,0,0.658-0.263,0.729-0.586L29.87,8.586C29.941,8.262,29.731,8,29.4,8zM25.828,18H9l-0.369-2h17.642L25.828,18z",
s:"none",fl:"#333"}},f:{}}]},"shopping-cart-out":{d:600,it:2,sh:[{i:{a:{p:"M23.372,8c0.669-0.001,0.829-0.383,0.355-0.857l-4.87-4.787c-0.474-0.476-1.242-0.476-1.717,0l-4.867,4.786C11.798,7.617,11.959,7.999,12.628,8H16v5.399C16,13.731,16.269,14,16.6,14H19.4c0.331,0,0.6-0.269,0.6-0.601V8H23.372z",s:"none",fl:"#333"}},f:{20:{t:"t0,-2"},70:{t:"t0,2"},100:{t:""}}},{i:{a:{p:"M14,27c0,1.105-0.896,2-2,2s-2-0.895-2-2s0.896-2,2-2S14,25.895,14,27zM24,25c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S25.105,25,24,25zM29.4,8H26l-0.667,2h2.271l-1.111,5H8.447l-0.922-5h2.913L10,8H7.193L6.73,5.184C6.622,4.53,5.997,4,5.334,4h-4c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.708C4.373,6,4.69,6.264,4.75,6.59l3.123,16.231C7.998,23.473,8.637,24,9.3,24h16.499c0.331,0,0.658-0.263,0.73-0.586l0.184-0.828C26.785,22.263,26.575,22,26.244,22H10.26c-0.332,0-0.648-0.265-0.707-0.591L9.3,20h17.435c0.331,0,0.658-0.263,0.729-0.586L29.87,8.586C29.941,8.262,29.731,8,29.4,8zM25.828,18H9l-0.369-2h17.642L25.828,18z",
s:"none",fl:"#333"}},f:{}}]},striked:{d:800,it:1,sh:[{i:{a:{p:"M22.024,4v8h-0.626c-0.334-2.502-1.263-4.863-3.659-6.018c-2.218-1.068-5.457-0.852-6.523,1.732c-0.908,2.2,0.983,3.719,2.611,4.778c2.166,1.41,4.55,2.451,6.689,3.905c2.039,1.387,3.332,3.602,2.969,6.12c-0.354,2.466-2.347,4.457-4.69,5.148c-2.376,0.7-4.601,0.163-6.88-0.547c-0.624-0.195-2.024-0.828-2.5-0.045C9.259,27.33,9.285,28,9,28c-0.333,0-0.667,0-1,0v-8h1.144c0.428,2.406,1.187,4.664,3.462,5.868c1.969,1.046,4.945,1.295,6.703-0.306c2.009-1.828,1.251-4.562-0.771-6.021c-1.77-1.277-3.798-2.2-5.657-3.339c-1.884-1.154-3.86-2.52-4.422-4.797C7.874,9.035,8.904,6.644,10.854,5.24c1.926-1.387,4.482-1.513,6.699-0.841c0.86,0.26,2.021,1.104,2.954,0.893c0.497-0.113,0.695-0.548,0.819-0.995C21.445,3.868,21.603,4,22.024,4z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M26,16H6v-2h20V16z",s:"none",fl:"#333"}},f:{0:{p:"M28.021,4.393l-0.128,0.127l-1.414-1.415l0.127-0.127L28.021,4.393z"},20:{p:"M28.021,4.394L5.394,27.021l-1.415-1.414L26.606,2.979L28.021,4.394z"},30:{},40:{p:"M32,16H0v-2h32V16z"},50:{},60:{p:"M26,16H6v-2h20V16z"},100:{}}}]},"text-decrease":{d:1E3,it:1,sh:[{i:{a:{p:"M28,18h-8v-2h8V18z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M19.646,8L20,12h-0.436c-0.082-0.638-0.197-0.727-0.34-1c-0.236-0.44-0.551-0.765-0.941-0.974c-0.391-0.209-0.816-0.325-1.454-0.325l-2.842-0.012v11.39c0,0.949,0.103,1.542,0.307,1.777c0.289,0.319,1.104,0.478,1.705,0.478h0.535V24H7.614v-0.667H8c0.653,0,1.477-0.197,1.75-0.592C9.917,22.497,10,21.944,10,21.078V9.701H7.486c-0.721,0-1.234,0.065-1.538,0.171c-0.396,0.145-0.733,0.421-1.014,0.832C4.653,11.114,4.486,11.301,4.433,12H4l0.35-4H19.646z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"s1.6,1.6,11.5,16"},20:{},25:{t:"s1.4,1.4,11.5,16"},45:{},50:{t:"s1.2,1.2,11.5,16"},70:{},75:{t:""},100:{}}}]},"text-height":{d:1E3,it:1,sh:[{i:{a:{p:"M29.744,4L30,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.661-0.824-1.147-1.41-1.461C26.84,6.175,26.203,6,25.246,6l-3.264-0.018v17.635c0,1.424,0.154,2.313,0.461,2.666c0.434,0.479,1.1,0.717,2,0.717h0.803v1H14.734v-1h0.82c0.98,0,1.675-0.297,2.085-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6h-2.785c-1.083,0-1.852,0.098-2.307,0.257c-0.593,0.217-1.1,0.632-1.521,1.248C10.979,8.12,10.729,8.952,10.649,10H10l0.273-6H29.744zM6,25V7h1.845C8.011,7,8.05,6.904,7.933,6.788l-2.72-2.7c-0.117-0.117-0.307-0.117-0.424,0l-2.721,2.7C1.951,6.904,1.99,6.999,2.156,7H4v18H2.155c-0.166,0-0.205,0.096-0.088,0.212l2.721,2.7c0.117,0.117,0.307,0.117,0.424,0l2.721-2.7C8.05,25.096,8.011,25.001,7.845,25H6z",
t:"",s:"none",fl:"#333"}},f:{25:{p:"M29.744,10L30,16h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.661-0.824-1.147-1.41-1.461C26.84,12.175,26.203,12,25.246,12l-3.264-0.018v11.635c0,1.424,0.154,2.313,0.461,2.666c0.434,0.479,1.1,0.717,2,0.717h0.803v1H14.734v-1h0.82c0.98,0,1.675-0.297,2.085-0.889c0.25-0.365,0.375-1.195,0.375-2.494V12h-2.785c-1.083,0-1.852,0.098-2.307,0.257c-0.593,0.217-1.1,0.632-1.521,1.248c-0.422,0.615-0.672,1.447-0.752,2.495H10l0.273-6H29.744zM6,25V13h1.845c0.166,0,0.205-0.096,0.088-0.212l-2.72-2.7c-0.117-0.117-0.307-0.117-0.424,0l-2.721,2.7C1.951,12.904,1.99,12.999,2.156,13H4v12H2.155c-0.166,0-0.205,0.096-0.088,0.212l2.721,2.7c0.117,0.117,0.307,0.117,0.424,0l2.721-2.7C8.05,25.096,8.011,25.001,7.845,25H6z"},
50:{},75:{p:"M29.744,4L30,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.661-0.824-1.147-1.41-1.461C26.84,6.175,26.203,6,25.246,6l-3.264-0.018v17.635c0,1.424,0.154,2.313,0.461,2.666c0.434,0.479,1.1,0.717,2,0.717h0.803v1H14.734v-1h0.82c0.98,0,1.675-0.297,2.085-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6h-2.785c-1.083,0-1.852,0.098-2.307,0.257c-0.593,0.217-1.1,0.632-1.521,1.248C10.979,8.12,10.729,8.952,10.649,10H10l0.273-6H29.744zM6,25V7h1.845C8.011,7,8.05,6.904,7.933,6.788l-2.72-2.7c-0.117-0.117-0.307-0.117-0.424,0l-2.721,2.7C1.951,6.904,1.99,6.999,2.156,7H4v18H2.155c-0.166,0-0.205,0.096-0.088,0.212l2.721,2.7c0.117,0.117,0.307,0.117,0.424,0l2.721-2.7C8.05,25.096,8.011,25.001,7.845,25H6z"},
100:{}}}]},"text-increase":{d:1E3,it:1,sh:[{i:{a:{p:"M30,18h-4v4h-2v-4h-4v-2h4v-4h2v4h4V18z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M21.744,4L22,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.661-0.824-1.147-1.41-1.461C18.84,6.175,18.203,6,17.246,6l-3.264-0.018v17.635c0,1.424,0.154,2.313,0.461,2.667c0.434,0.479,1.1,0.717,2,0.717h0.803v1H6.734v-1h0.82c0.98,0,1.675-0.297,2.085-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6H7.229C6.147,6,5.378,6.098,4.922,6.257C4.33,6.474,3.823,6.89,3.401,7.505C2.979,8.12,2.729,8.952,2.649,10H2l0.273-6H21.744z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"s0.4,0.4,12,28"},20:{},25:{t:"s0.6,0.6,12,28"},45:{},50:{t:"s0.8,0.8,12,28"},70:{},75:{t:""},100:{}}}]},"text-size":{d:1E3,it:1,sh:[{i:{a:{p:"M29.744,4L30,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.66-0.824-1.147-1.41-1.461C26.84,6.175,26.203,6,25.246,6l-3.264-0.018v13.635c0,1.424,0.154,2.313,0.461,2.666C22.877,22.762,23.1,23,24,23h0.803v1H15.18v-1H16c0.979,0,1.229-0.297,1.64-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6h-2.785C14.146,6,13.456,6.098,13,6.258c-0.592,0.217-1.1,0.632-1.521,1.247C11.058,8.12,10.807,8.952,10.728,10h-0.649l0.273-6H29.744zM12,28h16v1.845c0,0.166,0.096,0.205,0.212,0.088l2.7-2.72c0.117-0.117,0.117-0.307,0-0.424l-2.7-2.721c-0.116-0.117-0.211-0.078-0.212,0.088V26H12v-1.845c0-0.165-0.096-0.204-0.212-0.088l-2.7,2.721c-0.117,0.116-0.117,0.307,0,0.424l2.7,2.721c0.116,0.117,0.211,0.078,0.212-0.088V28zM4,6v16H2.155c-0.166,0-0.205,0.096-0.088,0.212l2.72,2.7c0.117,0.117,0.307,0.117,0.424,0l2.721-2.7C8.049,22.096,8.01,22.001,7.844,22H6V6h1.845C8.01,6,8.049,5.904,7.933,5.788l-2.721-2.7c-0.116-0.117-0.307-0.117-0.424,0l-2.721,2.7C1.95,5.904,1.989,5.999,2.155,6H4z",
t:"",s:"none",fl:"#333"}},f:{25:{t:"s0.6,0.6,4,28"},50:{},75:{t:""},100:{}}}]},"text-width":{d:1E3,it:1,sh:[{i:{a:{p:"M25.744,4L26,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.66-0.824-1.147-1.41-1.461C22.84,6.175,22.203,6,21.246,6l-3.264-0.018v13.635c0,1.424,0.154,2.313,0.461,2.667C18.877,22.762,19.1,23,20,23h0.803v1H11.18v-1H12c0.979,0,1.229-0.297,1.64-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6h-2.785C10.146,6,9.456,6.098,9,6.258C8.408,6.475,7.9,6.89,7.479,7.505C7.058,8.12,6.807,8.952,6.728,10H6.078l0.273-6H25.744zM8,28h16v1.845c0,0.166,0.096,0.205,0.212,0.088l2.7-2.72c0.117-0.117,0.117-0.307,0-0.424l-2.7-2.721c-0.116-0.117-0.211-0.078-0.212,0.088V26H8v-1.845c0-0.165-0.096-0.204-0.212-0.088l-2.7,2.721c-0.117,0.116-0.117,0.307,0,0.424l2.7,2.721C7.904,30.05,7.999,30.011,8,29.845V28z",
t:"",s:"none",fl:"#333"}},f:{25:{p:"M28.744,4L29,10h-1.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.66-0.824-1.147-1.41-1.461C24.84,6.175,24.203,6,23.246,6l-3.264-0.018v13.635c0,1.424,0.154,2.313,0.461,2.666C20.877,22.762,21.1,23,22,23h0.803v1H9.18v-1H10c0.979,0,1.229-0.297,1.64-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6H9.229C8.146,6,7.456,6.098,7,6.258C6.408,6.475,5.9,6.89,5.479,7.505C5.058,8.12,4.807,8.952,4.728,10H3l0.273-6H28.744zM6,28h20v1.845c0,0.166,0.096,0.205,0.212,0.088l2.7-2.72c0.117-0.117,0.117-0.307,0-0.424l-2.7-2.721c-0.116-0.117-0.211-0.078-0.212,0.088V26H6v-1.845c0-0.165-0.096-0.204-0.212-0.088l-2.7,2.721c-0.117,0.116-0.117,0.307,0,0.424l2.7,2.721C5.904,30.05,5.999,30.011,6,29.845V28z"},
50:{},75:{p:"M25.744,4L26,10h-0.65c-0.125-0.957-0.297-1.641-0.512-2.051c-0.354-0.66-0.824-1.147-1.41-1.461C22.84,6.175,22.203,6,21.246,6l-3.264-0.018v13.635c0,1.424,0.154,2.313,0.461,2.667C18.877,22.762,19.1,23,20,23h0.803v1H11.18v-1H12c0.979,0,1.229-0.297,1.64-0.889c0.25-0.365,0.375-1.195,0.375-2.494V6h-2.785C10.146,6,9.456,6.098,9,6.258C8.408,6.475,7.9,6.89,7.479,7.505C7.058,8.12,6.807,8.952,6.728,10H6.078l0.273-6H25.744zM8,28h16v1.845c0,0.166,0.096,0.205,0.212,0.088l2.7-2.72c0.117-0.117,0.117-0.307,0-0.424l-2.7-2.721c-0.116-0.117-0.211-0.078-0.212,0.088V26H8v-1.845c0-0.165-0.096-0.204-0.212-0.088l-2.7,2.721c-0.117,0.116-0.117,0.307,0,0.424l2.7,2.721C7.904,30.05,7.999,30.011,8,29.845V28z"},
100:{}}}]},"thumbnails-big":{d:1E3,it:1,sh:[{i:{a:{p:"M13.4,14H2.6C2.269,14,2,13.731,2,13.4V2.6C2,2.269,2.269,2,2.6,2h10.8C13.731,2,14,2.269,14,2.6v10.8C14,13.731,13.731,14,13.4,14z",t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,16"},10:{o:1},40:{},50:{t:""},100:{}}},{i:{a:{p:"M29.4,14H18.6c-0.331,0-0.6-0.269-0.6-0.6V2.6C18,2.269,18.269,2,18.6,2H29.4C29.731,2,30,2.269,30,2.6v10.8C30,13.731,29.731,14,29.4,14z",t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,16"},20:{},30:{o:1},39:{},48:{t:""},100:{}}},
{i:{a:{p:"M13.4,30H2.6C2.269,30,2,29.731,2,29.4V18.6C2,18.269,2.269,18,2.6,18h10.8c0.332,0,0.6,0.269,0.6,0.6V29.4C14,29.731,13.731,30,13.4,30z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},60:{},70:{o:1},100:{}}},{i:{a:{p:"M29.4,30H18.6c-0.331,0-0.6-0.269-0.6-0.6V18.6c0-0.331,0.269-0.6,0.6-0.6H29.4c0.331,0,0.6,0.269,0.6,0.6V29.4C30,29.731,29.731,30,29.4,30z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}}]},"thumbnails-small":{d:1200,it:1,sh:[{i:{a:{p:"M9.4,10H2.6C2.269,10,2,9.731,2,9.4V2.6C2,2.269,2.269,2,2.6,2h6.8C9.731,2,10,2.269,10,2.6v6.8C10,9.731,9.731,10,9.4,10zM19.4,10h-6.8C12.269,10,12,9.731,12,9.4V2.6C12,2.269,12.269,2,12.6,2h6.8C19.731,2,20,2.269,20,2.6v6.8C20,9.731,19.731,10,19.4,10zM29.4,10H22.6C22.269,10,22,9.731,22,9.4V2.6C22,2.269,22.269,2,22.6,2H29.4C29.731,2,30,2.269,30,2.6v6.8C30,9.731,29.731,10,29.4,10z",
t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,20"},15:{o:1},30:{},45:{t:"t0,10"},60:{},75:{t:""},100:{}}},{i:{a:{p:"M9.4,20H2.6C2.269,20,2,19.731,2,19.4v-6.8C2,12.269,2.269,12,2.6,12h6.8c0.332,0,0.6,0.269,0.6,0.6v6.8C10,19.731,9.731,20,9.4,20zM19.4,20h-6.8c-0.332,0-0.6-0.269-0.6-0.6v-6.8c0-0.332,0.269-0.6,0.6-0.6h6.8c0.331,0,0.6,0.269,0.6,0.6v6.8C20,19.731,19.731,20,19.4,20zM29.4,20H22.6c-0.331,0-0.6-0.269-0.6-0.6v-6.8c0-0.332,0.269-0.6,0.6-0.6H29.4c0.331,0,0.6,0.269,0.6,0.6v6.8C30,19.731,29.731,20,29.4,20z",
t:"",o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,10"},46:{},60:{o:1},75:{t:""},100:{}}},{i:{a:{p:"M9.4,30H2.6C2.269,30,2,29.731,2,29.4V22.6C2,22.269,2.269,22,2.6,22h6.8c0.332,0,0.6,0.269,0.6,0.6V29.4C10,29.731,9.731,30,9.4,30zM19.4,30h-6.8c-0.332,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6h6.8c0.331,0,0.6,0.269,0.6,0.6V29.4C20,29.731,19.731,30,19.4,30zM29.4,30H22.6c-0.331,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6H29.4c0.331,0,0.6,0.269,0.6,0.6V29.4C30,29.731,29.731,30,29.4,30z",o:1,t:"",
s:"none",fl:"#333"}},f:{0:{o:0},75:{},90:{o:1},100:{}}}]},timer:{d:800,it:1,sh:[{i:{a:{p:"M29.4,20.001H22.31c-0.33,0-0.408,0.189-0.176,0.424l2.44,2.44C22.559,25.379,19.474,27,16,27C9.925,27,5,22.075,5,16S9.925,5,16,5c5.874,0,10.673,4.604,10.984,10.401C27.002,15.732,27.269,16,27.6,16H29.4c0.331,0,0.601-0.269,0.587-0.6C29.673,7.946,23.531,2,16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c4.302,0,8.148-1.94,10.717-4.993l2.859,2.859C29.81,28.099,30,28.021,30,27.69v-7.09C30,20.269,29.731,20.001,29.4,20.001z",
t:"",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M22.632,12.287c0.276,0.479-5.653,4.303-6.132,4.579s-1.09,0.113-1.366-0.366c-0.276-0.479-0.112-1.089,0.366-1.366S22.355,11.809,22.632,12.287z",t:"",s:"none",fl:"#333"}},f:{0:{t:""},30:{t:"r-30,16,16"},60:{t:"r-60,16,16"},90:{t:"r-90,16,16"},91:{t:""},100:{}},fIE:{0:{t:""},30:{t:"r-30,14.5,14.5"},60:{t:"r-60,14.5,14.5"},90:{t:"r-90,14.5,14.5"},91:{t:""},100:{}}},{i:{a:{p:"M17.082,15.375c0.346,0.598,0.141,1.362-0.457,1.708c-0.597,0.345-1.362,0.14-1.708-0.458S10.403,7.685,11,7.34C11.598,6.995,16.737,14.777,17.082,15.375z",
s:"none",fl:"#333"}},f:{0:{t:""},30:{t:"r-360,16,16"},60:{t:"r-720,16,16"},90:{t:"r-1110,16,16"},91:{t:""},100:{}},fIE:{0:{t:""},30:{t:"r-360,14.5,14.5"},60:{t:"r-720,14.5,14.5"},90:{t:"r-1110,14.5,14.5"},91:{t:""},100:{}}}]},unlink:{d:1E3,it:1,sh:[{i:{a:{p:"M12.464,10.342l2.828-2.828l4.242-4.242c1.563-1.562,4.096-1.561,5.658,0l3.534,3.535c1.563,1.562,1.563,4.095,0.001,5.657l-4.242,4.242c-0.001,0.001-2.829,2.83-2.829,2.83v-4.243c0,0,1.414-1.414,1.416-1.415l2.827-2.828c0.78-0.781,0.78-2.047,0-2.828L23.777,6.1c-0.781-0.781-2.047-0.781-2.828,0L18.12,8.928l-1.414,1.414H12.464zM10.343,12.464c0,0-2.829,2.829-2.828,2.829l-4.243,4.243c-1.562,1.563-1.562,4.096,0,5.657l3.535,3.535c1.563,1.563,4.095,1.563,5.657,0l4.243-4.243c-0.001,0.001,2.828-2.828,2.828-2.828h-4.243l-1.414,1.415l-2.828,2.828c-0.781,0.781-2.048,0.782-2.829,0L6.1,23.778c-0.781-0.781-0.781-2.048,0-2.829l2.828-2.828l1.415-1.415V12.464z",
s:"none",fl:"#333"}},f:{0:{p:"M15.293,13.17c-1.562-1.562-1.563-4.095-0.001-5.656l4.242-4.242c1.563-1.562,4.096-1.561,5.658,0l3.534,3.535c1.563,1.562,1.563,4.095,0,5.656l-4.241,4.243c-1.563,1.562-4.095,1.563-5.657,0.001l2.189-2.19c0.669,0.184,1.527-0.112,2.055-0.639l2.827-2.828c0.78-0.781,0.78-2.047,0-2.828L23.777,6.1c-0.781-0.781-2.047-0.781-2.828,0L18.12,8.928c-0.552,0.554-0.847,1.336-0.616,2.031L15.293,13.17zM13.171,15.292c-1.562-1.562-4.095-1.562-5.656,0l-4.243,4.243c-1.562,1.563-1.562,4.096,0,5.657l3.535,3.535c1.563,1.563,4.095,1.563,5.657,0l4.243-4.243c1.561-1.562,1.56-4.094-0.001-5.656l-2.189,2.189c0.183,0.669-0.113,1.527-0.639,2.054l-2.828,2.828c-0.781,0.781-2.048,0.782-2.829,0L6.1,23.778c-0.781-0.781-0.781-2.048,0-2.829l2.828-2.828c0.555-0.554,1.337-0.848,2.032-0.617L13.171,15.292z"},
15:{p:"M14.395,14.069c-1.562-1.562-1.563-4.095-0.001-5.656l4.242-4.242c1.563-1.562,4.096-1.561,5.658,0l3.534,3.535c1.563,1.562,1.563,4.095,0,5.656l-4.241,4.243c-1.563,1.563-4.095,1.563-5.657,0.001l2.189-2.19c0.669,0.184,1.527-0.112,2.055-0.639l2.827-2.828c0.78-0.781,0.78-2.047,0-2.828l-2.122-2.122c-0.781-0.781-2.047-0.781-2.828,0l-2.829,2.829c-0.552,0.554-0.847,1.336-0.616,2.031L14.395,14.069zM14.071,14.393c-1.562-1.562-4.095-1.562-5.656,0l-4.243,4.243c-1.562,1.563-1.562,4.096,0,5.657l3.535,3.535c1.563,1.563,4.095,1.563,5.657,0l4.243-4.243c1.562-1.562,1.561-4.094-0.001-5.656l-2.189,2.189c0.183,0.669-0.113,1.527-0.639,2.054L11.95,25c-0.781,0.781-2.048,0.782-2.829,0L7,22.879c-0.781-0.781-0.781-2.048,0-2.829l2.828-2.828c0.555-0.554,1.337-0.848,2.032-0.617L14.071,14.393z"},
40:{p:"M15.672,12.793c-1.562-1.562-1.563-4.095-0.001-5.656l4.241-4.242c1.563-1.562,4.096-1.561,5.658,0l3.534,3.535c1.563,1.562,1.563,4.095,0,5.656l-4.241,4.243c-1.563,1.562-4.095,1.563-5.657,0.001l2.189-2.19c0.669,0.184,1.527-0.112,2.055-0.639l2.827-2.828c0.78-0.781,0.78-2.047,0-2.828l-2.122-2.122c-0.781-0.781-2.047-0.781-2.828,0l-2.829,2.829c-0.552,0.554-0.847,1.336-0.616,2.031L15.672,12.793zM12.571,15.893c-1.562-1.562-4.095-1.562-5.656,0l-4.243,4.243c-1.562,1.563-1.562,4.096,0,5.657l3.535,3.535c1.563,1.563,4.095,1.563,5.657,0l4.243-4.243c1.561-1.562,1.56-4.094-0.001-5.656l-2.189,2.189c0.183,0.669-0.113,1.527-0.639,2.054L10.45,26.5c-0.781,0.781-2.048,0.782-2.829,0L5.5,24.379c-0.781-0.781-0.781-2.048,0-2.829l2.828-2.828c0.555-0.554,1.337-0.848,2.032-0.617L12.571,15.893z",
e:">"},60:{},61:{p:"M12.464,10.342l2.828-2.828l4.242-4.242c1.563-1.562,4.096-1.561,5.658,0l3.534,3.535c1.563,1.562,1.563,4.095,0.001,5.657l-4.242,4.242c-0.001,0.001-2.829,2.83-2.829,2.83v-4.243c0,0,1.414-1.414,1.416-1.415l2.827-2.828c0.78-0.781,0.78-2.047,0-2.828L23.777,6.1c-0.781-0.781-2.047-0.781-2.828,0L18.12,8.928l-1.414,1.414H12.464zM10.343,12.464c0,0-2.829,2.829-2.828,2.829l-4.243,4.243c-1.562,1.563-1.562,4.096,0,5.657l3.535,3.535c1.563,1.563,4.095,1.563,5.657,0l4.243-4.243c-0.001,0.001,2.828-2.828,2.828-2.828h-4.243l-1.414,1.415l-2.828,2.828c-0.781,0.781-2.048,0.782-2.829,0L6.1,23.778c-0.781-0.781-0.781-2.048,0-2.829l2.828-2.828l1.415-1.415V12.464z"},
100:{}}},{i:{a:{p:"M26.959,26.96c-0.195,0.195-0.512,0.195-0.707,0l-3.535-3.535c-0.195-0.195-0.195-0.512,0-0.707c0.195-0.196,0.512-0.196,0.707,0l3.535,3.535C27.155,26.448,27.155,26.765,26.959,26.96zM21.095,29.096l0.001-5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5l-0.001,5c0,0.276,0.224,0.5,0.5,0.5S21.095,29.372,21.095,29.096zM29.095,20.097l-5-0.001c-0.276,0.001-0.5,0.224-0.5,0.501c0,0.275,0.224,0.5,0.5,0.5h5c0.276,0,0.5-0.224,0.5-0.5C29.596,20.32,29.372,20.097,29.095,20.097zM5.04,5.039c-0.195,0.195-0.195,0.512,0,0.707l3.535,3.536c0.195,0.195,0.512,0.195,0.707,0c0.196-0.195,0.196-0.512,0-0.707L5.747,5.039C5.551,4.844,5.235,4.844,5.04,5.039zM2.404,11.404c0,0.276,0.224,0.5,0.5,0.5l5-0.001c0.276,0,0.5-0.224,0.5-0.5c0-0.276-0.224-0.5-0.5-0.5l-5,0C2.627,10.904,2.404,11.127,2.404,11.404zM11.403,2.403c-0.276,0-0.5,0.224-0.5,0.5v5c0,0.276,0.225,0.5,0.5,0.5c0.277,0,0.5-0.224,0.501-0.5l-0.001-5C11.903,2.627,11.679,2.403,11.403,2.403z",
s:"none",fl:"#333"}},f:{0:{p:"M20.595,11.402c0.587,0.587,0.587,1.536,0.001,2.123l-7.07,7.071c-0.586,0.585-1.536,0.587-2.122,0c-0.586-0.585-0.586-1.534,0-2.122l7.071-7.071C19.06,10.817,20.009,10.817,20.595,11.402z"},60:{},61:{p:"M26.959,26.96c-0.195,0.195-0.512,0.195-0.707,0l-3.535-3.535c-0.195-0.195-0.195-0.512,0-0.707c0.195-0.196,0.512-0.196,0.707,0l3.535,3.535C27.155,26.448,27.155,26.765,26.959,26.96zM21.095,29.096l0.001-5c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5l-0.001,5c0,0.276,0.224,0.5,0.5,0.5S21.095,29.372,21.095,29.096zM29.095,20.097l-5-0.001c-0.276,0.001-0.5,0.224-0.5,0.501c0,0.275,0.224,0.5,0.5,0.5h5c0.276,0,0.5-0.224,0.5-0.5C29.596,20.32,29.372,20.097,29.095,20.097zM5.04,5.039c-0.195,0.195-0.195,0.512,0,0.707l3.535,3.536c0.195,0.195,0.512,0.195,0.707,0c0.196-0.195,0.196-0.512,0-0.707L5.747,5.039C5.551,4.844,5.235,4.844,5.04,5.039zM2.404,11.404c0,0.276,0.224,0.5,0.5,0.5l5-0.001c0.276,0,0.5-0.224,0.5-0.5c0-0.276-0.224-0.5-0.5-0.5l-5,0C2.627,10.904,2.404,11.127,2.404,11.404zM11.403,2.403c-0.276,0-0.5,0.224-0.5,0.5v5c0,0.276,0.225,0.5,0.5,0.5c0.277,0,0.5-0.224,0.501-0.5l-0.001-5C11.903,2.627,11.679,2.403,11.403,2.403z"},
100:{}}}]},"user-add":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-2v2h-2V8h-2V6h2V4h2v2h2V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-29,0"},30:{},65:{t:"",e:">"},100:{}}}]},"user-ban":{d:1200,it:1,sh:[{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414z",
o:1,t:"",s:"none",fl:"#333"}},f:{0:{t:"",o:1},30:{},40:{t:"t2,-4",e:"<"},60:{},80:{o:0},99:{t:""},100:{o:1}}},{i:{a:{p:"M28.535,3.464c-1.952-1.953-5.118-1.952-7.07,0c-1.953,1.953-1.953,5.118,0,7.071c1.952,1.953,5.118,1.952,7.07,0C30.488,8.583,30.488,5.417,28.535,3.464zM22.525,4.525c1.119-1.119,2.802-1.306,4.127-0.592l-4.72,4.72C21.219,7.327,21.406,5.645,22.525,4.525zM23.348,10.067l4.72-4.72c0.714,1.326,0.526,3.008-0.593,4.128C26.355,10.594,24.673,10.781,23.348,10.067z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},
15:{},25:{t:""},60:{t:"s2.8,2.8,30,2"},99:{},100:{t:""}},fIE:{10:{t:"s1.4"},15:{},25:{t:""},60:{t:"s2.8,2.8,28.5,0.5"},99:{},100:{t:""}}}]},"user-flag":{d:600,it:2,sh:[{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z",t:"t0,-2",s:"none",fl:"#333"}},f:{"16.5":{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM27.385,6.616c-3.408,2.092-2.215,1.359-5.625,3.452c-0.459-2.064-1.387-3.695-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C25.293,3.207,26.34,4.912,27.385,6.616z"},33:{p:"M23.853,13.477l-1.704,1.046L16.918,6l1.704-1.046L23.853,13.477zM23.8,8.814c-3.408,2.092-2.215,1.359-5.625,3.452c-0.96-1.668-1.76-2.968-3.138-5.114c3.409-2.092,2.216-1.36,5.625-3.452C21.708,5.405,22.755,7.109,23.8,8.814z"},
50:{p:"M24,14.001h-2v-10h2V14.001zM22,10c-4,0-2,2.001-6,2c0.054-1.923,0.052-3.451,0-6c4,0,2-2,6-2C21.5,6.3,21.6,8.1,22,10z"},"66.5":{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM24.239,10.067C20.83,7.976,22.409,8.893,19,6.8c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C25.748,6.651,24.891,8.239,24.239,10.067z"},83:{p:"M23.852,14.524l-1.705-1.047l5.229-8.523L29.081,6L23.852,14.524zM27.739,12.167c-3.409-2.092-1.83-1.175-5.239-3.268c1.052-1.61,1.711-2.9,3-5.1c3.409,2.092,1.967,1.161,5.377,3.253C29.8,9,28.9,10.8,27.739,12.167z"},
100:{p:"M24,14h-2V4h2V14zM30,12c-4,0-2-2-6-2c0.688-2,0.75-3.875,0-6c4,0,2,2,6,2C30,8,30,10,30,12z"}}}]},"user-remove":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-6V6h6V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414z",
t:"",s:"none",fl:"#333"}},f:{30:{},65:{t:"t0,25",e:"<"},99:{},100:{t:""}}}]},"users-add":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-2v2h-2V8h-2V6h2V4h2v2h2V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-29,0"},30:{},65:{t:"",e:">"},100:{}}},{i:{a:{p:"M28.378,16.92c-0.033-0.321-0.1-0.605-0.226-0.798c-0.57-0.852-0.796-1.417-2.043-1.824c-1.113-0.315-0.796-0.321-1.702-0.282c-0.904,0.042-1.66,0.563-1.66,0.856c0,0-0.564,0.036-0.793,0.281c-0.217,0.227-0.561,1.238-0.598,1.594h0.021l0.063,0.767c0.016,0.193,0.016,0.365,0.026,0.544c0.066,0.563,0.16,1.141,0.254,1.344l-0.221,0.079c-0.188,2.346,0.76,2.629,0.76,2.629c0.336,2.186,0.677,1.252,0.677,1.823c0,0.565,0.089,0.397,0,0.565c4.31,1.955,4.48,2.748,4.465,5.501H30v-3.606c-0.015-0.006-1.655-0.878-1.661-0.882c-0.758-0.325-1.062-1.216-1.062-1.216s-0.34,0.203-0.34-0.362c0-0.571,0.34,0.362,0.684-1.823c0,0,0.629-0.191,0.754-1.549v-1.037c0-0.013,0-0.027-0.001-0.043h-0.223c0,0,0.164-0.75,0.224-1.571v-0.99H28.378z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t14,0"},30:{},65:{t:"",e:">"},100:{}}}]},"users-ban":{d:1200,it:1,sh:[{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414zM28.378,16.92c-0.033-0.321-0.1-0.605-0.226-0.798c-0.57-0.852-0.796-1.417-2.043-1.824c-1.113-0.315-0.796-0.321-1.702-0.282c-0.904,0.042-1.66,0.563-1.66,0.856c0,0-0.564,0.036-0.793,0.281c-0.217,0.227-0.561,1.238-0.598,1.594h0.021l0.063,0.767c0.016,0.193,0.016,0.365,0.026,0.544c0.066,0.563,0.16,1.141,0.254,1.344l-0.221,0.079c-0.188,2.346,0.76,2.629,0.76,2.629c0.336,2.186,0.677,1.252,0.677,1.823c0,0.565,0.089,0.397,0,0.565c4.31,1.955,4.48,2.748,4.465,5.501H30v-3.606c-0.015-0.006-1.655-0.878-1.661-0.882c-0.758-0.325-1.062-1.216-1.062-1.216s-0.34,0.203-0.34-0.362c0-0.571,0.34,0.362,0.684-1.823c0,0,0.629-0.191,0.754-1.549v-1.037c0-0.013,0-0.027-0.001-0.043h-0.223c0,0,0.164-0.75,0.224-1.571v-0.99H28.378z",
o:1,t:"",s:"none",fl:"#333"}},f:{0:{t:"",o:1},30:{},40:{t:"t0,-4",e:"<"},60:{},80:{o:0},99:{t:""},100:{o:1}}},{i:{a:{p:"M28.535,3.464c-1.952-1.953-5.118-1.952-7.07,0c-1.953,1.953-1.953,5.118,0,7.071c1.952,1.953,5.118,1.952,7.07,0C30.488,8.583,30.488,5.417,28.535,3.464zM22.525,4.525c1.119-1.119,2.802-1.306,4.127-0.592l-4.72,4.72C21.219,7.327,21.406,5.645,22.525,4.525zM23.348,10.067l4.72-4.72c0.714,1.326,0.526,3.008-0.593,4.128C26.355,10.594,24.673,10.781,23.348,10.067z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},
15:{},25:{t:""},60:{t:"s2.8,2.8,30,2"},99:{},100:{t:""}},fIE:{10:{t:"s1.4"},15:{},25:{t:""},60:{t:"s2.8,2.8,28.5,0.5"},99:{},100:{t:""}}}]},"users-remove":{d:1200,it:1,sh:[{i:{a:{p:"M25,2c-2.762,0-5,2.24-5,5s2.238,5,5,5s5-2.24,5-5S27.762,2,25,2zM28,8h-6V6h6V8z",t:"",s:"none",fl:"#333"}},f:{10:{t:"s1.4"},15:{},25:{t:""},100:{}}},{i:{a:{p:"M18.379,24.414c-0.988-0.406-1.385-1.533-1.385-1.533s-0.445,0.256-0.445-0.457c0-0.717,0.445,0.457,0.893-2.301c0,0,1.234-0.359,0.988-3.322h-0.295c0,0,0.742-3.17,0-4.241c-0.744-1.073-1.003-1.93-2.678-2.301c-1.537-0.341-1.039-0.31-2.23-0.259c-1.189,0.053-2.183,0.617-2.183,0.974c0,0-0.743,0.052-1.04,0.359C9.706,11.64,9.21,13.069,9.21,13.428c0,0.357,0.333,2.76,0.581,3.271l-0.38,0.102c-0.248,2.963,0.991,3.322,0.991,3.322c0.445,2.758,0.893,1.584,0.893,2.301c0,0.713-0.447,0.457-0.447,0.457s-0.396,1.127-1.387,1.533c-0.991,0.41-6.493,2.604-6.941,3.066C2.071,27.941,2.122,30,2.122,30h23.597c0,0,0.049-2.059-0.396-2.52C24.873,27.018,19.373,24.824,18.379,24.414zM28.378,16.92c-0.033-0.321-0.1-0.605-0.226-0.798c-0.57-0.852-0.796-1.417-2.043-1.824c-1.113-0.315-0.796-0.321-1.702-0.282c-0.904,0.042-1.66,0.563-1.66,0.856c0,0-0.564,0.036-0.793,0.281c-0.217,0.227-0.561,1.238-0.598,1.594h0.021l0.063,0.767c0.016,0.193,0.016,0.365,0.026,0.544c0.066,0.563,0.16,1.141,0.254,1.344l-0.221,0.079c-0.188,2.346,0.76,2.629,0.76,2.629c0.336,2.186,0.677,1.252,0.677,1.823c0,0.565,0.089,0.397,0,0.565c4.31,1.955,4.48,2.748,4.465,5.501H30v-3.606c-0.015-0.006-1.655-0.878-1.661-0.882c-0.758-0.325-1.062-1.216-1.062-1.216s-0.34,0.203-0.34-0.362c0-0.571,0.34,0.362,0.684-1.823c0,0,0.629-0.191,0.754-1.549v-1.037c0-0.013,0-0.027-0.001-0.043h-0.223c0,0,0.164-0.75,0.224-1.571v-0.99H28.378z",
t:"",s:"none",fl:"#333"}},f:{30:{},65:{t:"t0,25",e:"<"},99:{},100:{t:""}}}]},"vector-circle":{d:1200,it:1,sh:[{i:{a:{p:"M27.82,14C26.976,8.979,23.021,5.024,18,4.18V3h-4v1.18C8.979,5.024,5.024,8.979,4.18,14H3v4h1.18c0.844,5.021,4.799,8.976,9.82,9.82V29h4v-1.18c5.021-0.845,8.976-4.799,9.82-9.82H29v-4H27.82zM15,4h2v2h-2V4zM4,17v-2h2v2H4zM17,28h-2v-2h2V28zM18,26.521V25h-4v1.521C9.688,25.706,6.294,22.313,5.479,18H7v-4H5.479C6.294,9.688,9.688,6.294,14,5.479V7h4V5.479c4.313,0.815,7.706,4.21,8.521,8.521H25v4h1.521C25.707,22.313,22.313,25.707,18,26.521zM28,17h-2v-2h2V17z",
s:"none",fl:"#333"}},f:{0:{p:"M3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3z"},20:{},35:{p:"M27.82,12C26.976,6.979,23.021,5.024,18,4.18V3h-4v1.18C8.979,5.024,5.024,6.979,4.18,12H3v4h1.18c0.844,5.021,4.799,6.976,9.82,7.82V25h4v-1.18c5.021-0.845,8.976-2.799,9.82-7.82H29v-4H27.82zM15,4h2v2h-2V4zM4,15v-2h2v2H4zM17,24h-2v-2h2V24zM18,22.521V21h-4v1.521C9.688,21.706,6.294,20.313,5.479,16H7v-4H5.479C6.294,7.688,9.688,6.294,14,5.479V7h4V5.479c4.313,0.815,7.706,2.21,8.521,6.521H25v4h1.521C25.707,20.313,22.313,21.707,18,22.521zM28,15h-2v-2h2V15z"},
50:{},65:{p:"M27.82,14C26.976,8.979,23.021,5.024,18,4.18V3h-4v1.18C8.979,5.024,5.024,8.979,4.18,14H3v4h1.18c0.844,5.021,4.799,8.976,9.82,9.82V29h4v-1.18c5.021-0.845,8.976-4.799,9.82-9.82H29v-4H27.82zM15,4h2v2h-2V4zM4,17v-2h2v2H4zM17,28h-2v-2h2V28zM18,26.521V25h-4v1.521C9.688,25.706,6.294,22.313,5.479,18H7v-4H5.479C6.294,9.688,9.688,6.294,14,5.479V7h4V5.479c4.313,0.815,7.706,4.21,8.521,8.521H25v4h1.521C25.707,22.313,22.313,25.707,18,26.521zM28,17h-2v-2h2V17z"},100:{}}},{i:{a:{p:"M12,6H6v6H4V6h-6V4h6v-6h2v6h6V6z",
t:"t-8,-8",s:"none",fl:"#333"}},f:{10:{t:""},20:{},35:{t:"t22,18"},50:{},65:{t:"t22,22"},75:{t:"t29,29"},76:{t:"t-8,-8"},100:{}}}]},"vector-curve":{d:1200,it:1,sh:[{i:{a:{p:"M25,3v1.305C14.055,5.344,5.347,14.054,4.308,25H3v4h4v-4H5.812C6.84,14.884,14.884,6.847,25,5.817V7h4V3H25zM6,26v2H4v-2H6zM28,6h-2V4h2V6z",s:"none",fl:"#333"}},f:{0:{p:"M3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29zM3,29L3,29L3,29L3,29L3,29zM3,29L3,29L3,29L3,29L3,29z"},20:{},35:{p:"M25,16v1.305C17.048,15.238,6.429,17.762,4.308,25H3v4h4v-4H5.812C8.333,18.952,17,17,25,18.817V20h4v-4H25zM6,26v2H4v-2H6zM28,19h-2v-2h2V19z"},
50:{},65:{p:"M25,3v1.305C14.055,5.344,5.347,14.054,4.308,25H3v4h4v-4H5.812C6.84,14.884,14.884,6.847,25,5.817V7h4V3H25zM6,26v2H4v-2H6zM28,6h-2V4h2V6z"},100:{}}},{i:{a:{p:"M12,28H6v6H4v-6h-6v-2h6v-6h2v6h6V28z",t:"t-8,8",s:"none",fl:"#333"}},f:{10:{t:""},20:{},35:{t:"t22,-9"},50:{},65:{t:"t22,-24"},75:{t:"t29,-29"},76:{t:"t-8,8"},100:{}}}]},"vector-line":{d:1200,it:1,sh:[{i:{a:{p:"M25,3v2.939L5.939,25H3v4h4v-2.939L26.061,7H29V3H25zM6,28H4v-2h2V28zM28,6h-2V4h2V6z",s:"none",fl:"#333"}},f:{0:{p:"M3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29L3,29zM3,29L3,29L3,29L3,29L3,29zM3,29L3,29L3,29L3,29L3,29z"},
20:{},35:{p:"M25,16v2.939L5.939,25H3v4h4v-2.939L26.061,20H29v-4H25zM6,28H4v-2h2V28zM28,19h-2v-2h2V19z"},50:{},65:{p:"M25,3v2.939L5.939,25H3v4h4v-2.939L26.061,7H29V3H25zM6,28H4v-2h2V28zM28,6h-2V4h2V6z"},100:{}}},{i:{a:{p:"M12,28H6v6H4v-6h-6v-2h6v-6h2v6h6V28z",t:"t-8,8",s:"none",fl:"#333"}},f:{10:{t:""},20:{},35:{t:"t22,-9"},50:{},65:{t:"t22,-24"},75:{t:"t29,-29"},76:{t:"t-8,8"},100:{}}}]},"vector-polygon":{d:1200,it:1,sh:[{i:{a:{p:"M25.328,11L18,4.676V3h-4v1.676L6.672,11H3v4h1.051L7.3,25H7v4h4v-1h10v1h4v-4h-0.301l3.25-10H29v-4H25.328zM15,4h2v2h-2V4zM6,14H4v-2h2V14zM10,28H8v-2h2V28zM24,28h-2v-2h2V28zM22.597,25H21v1H11v-1H9.403L6.154,15H7v-1.766L14.204,7h3.592L25,13.234V15h0.846L22.597,25zM28,14h-2v-2h2V14z",
s:"none",fl:"#333"}},f:{0:{p:"M3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3L3,3zM3,3L3,3L3,3L3,3L3,3z"},20:{},35:{p:"M23.328,8L17,4.676V3h-4v1.676L6.672,8H3v4h1.051L7.3,17H7v4h4v-1h8v1h4v-4h-0.301l3.25-5H27V8H23.328zM14,4h2v2h-2V4zM6,11H4V9h2V11zM10,20H8v-2h2V20zM22,20h-2v-2h2V20zM20.597,17H19v1h-8v-1H9.403l-3.249-5H7v-1.766L13.204,7h3.592L23,10.234V12h0.846L20.597,17zM26,11h-2V9h2V11z"},
50:{},65:{p:"M25.328,11L18,4.676V3h-4v1.676L6.672,11H3v4h1.051L7.3,25H7v4h4v-1h10v1h4v-4h-0.301l3.25-10H29v-4H25.328zM15,4h2v2h-2V4zM6,14H4v-2h2V14zM10,28H8v-2h2V28zM24,28h-2v-2h2V28zM22.597,25H21v1H11v-1H9.403L6.154,15H7v-1.766L14.204,7h3.592L25,13.234V15h0.846L22.597,25zM28,14h-2v-2h2V14z"},100:{}}},{i:{a:{p:"M12,6H6v6H4V6h-6V4h6v-6h2v6h6V6z",t:"t-8,-8",s:"none",fl:"#333"}},f:{10:{t:""},20:{},35:{t:"t20,15"},50:{},65:{t:"t22,22"},75:{t:"t29,29"},76:{t:"t-8,-8"},100:{}}}]},"vector-square":{d:1200,
it:1,sh:[{i:{a:{p:"M29,7V3h-4v1H7V3H3v4h1v18H3v4h4v-1h18v1h4v-4h-1V7H29zM4,4h2v2H4V4zM6,28H4v-2h2V28zM25,26H7v-1H6V7h1V6h18v1h1v18h-1V26zM28,28h-2v-2h2V28zM26,6V4h2v2H26z",s:"none",fl:"#333"}},f:{0:{p:"M5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5zM5.228,5L5.228,5L5.228,5L5.228,5L5.228,5zM5.228,5L5.228,5L5.228,5L5.228,5L5.228,5zM5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5L5.228,5zM5.228,5L5.228,5L5.228,5L5.228,5L5.228,5zM5.228,5L5.228,5L5.228,5L5.228,5L5.228,5z"},
20:{},35:{p:"M20,7V3h-4v1H7V3H3v4h1v14H3v4h4v-1h9v1h4v-4h-1V7H20zM4,4h2v2H4V4zM6,24H4v-2h2V24zM16,22H7v-1H6V7h1V6h9v1h1v14h-1V22zM19,24h-2v-2h2V24zM17,6V4h2v2H17z"},50:{},65:{p:"M29,7V3h-4v1H7V3H3v4h1v18H3v4h4v-1h18v1h4v-4h-1V7H29zM4,4h2v2H4V4zM6,28H4v-2h2V28zM25,26H7v-1H6V7h1V6h18v1h1v18h-1V26zM28,28h-2v-2h2V28zM26,6V4h2v2H26z"},100:{}}},{i:{a:{p:"M12,6H6v6H4V6h-6V4h6v-6h2v6h6V6z",t:"t-8,-8",s:"none",fl:"#333"}},f:{10:{t:""},20:{},35:{t:"t14,18"},50:{},65:{t:"t22,22"},75:{t:"t29,29"},76:{t:"t-8,-8"},
100:{}}}]},webcam:{d:350,it:4,sh:[{i:{a:{p:"M16.004,14c-1.104,0-2-0.896-2-1.999S14.9,10,16.004,10c0.233,0,0.458,0.04,0.664,0.114c-0.391,0.186-0.664,0.59-0.664,1.053c0,0.645,0.523,1.167,1.166,1.167c0.328,0,0.621-0.134,0.834-0.351v0.018C18.004,13.104,17.107,14,16.004,14zM23.929,28.741c0,0,0,1.259-1.133,1.259H9.204c-1.132,0-1.132-1.259-1.132-1.259c0-1.258,5.411-2.741,5.411-2.741v-0.815c-0.955-0.312-1.832-0.792-2.517-1.477C7.407,20.148,5.854,8.146,9,5c3.775-3.775,10.225-3.775,14,0c3.146,3.146,1.593,15.148-1.966,18.708c-0.685,0.685-1.563,1.165-2.518,1.477V26C18.517,26,23.929,27.483,23.929,28.741zM16,16c2.207,0,4-1.791,4-4c0-2.208-1.793-4-4-4c-2.209,0-4,1.792-4,4C12,14.208,13.791,16,16,16zM17.5,21c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5S17.5,21.828,17.5,21z",
s:"none",fl:"#333"}},f:{20:{},50:{p:"M16.004,14c-1.104,0-2-0.896-2-1.999S14.9,10,16.004,10c0.233,0,0.458,0.04,0.664,0.114c-0.391,0.186-0.664,0.59-0.664,1.053c0,0.645,0.523,1.167,1.166,1.167c0.328,0,0.621-0.134,0.834-0.351v0.018C18.004,13.104,17.107,14,16.004,14zM23.929,28.741c0,0,0,1.259-1.133,1.259H9.204c-1.132,0-1.132-1.259-1.132-1.259c0-1.258,5.411-2.741,5.411-2.741v-0.815c-0.955-0.312-1.832-0.792-2.517-1.477C7.407,20.148,5.854,8.146,9,5c3.775-3.775,10.225-3.775,14,0c3.146,3.146,1.593,15.148-1.966,18.708c-0.685,0.685-1.563,1.165-2.518,1.477V26C18.517,26,23.929,27.483,23.929,28.741zM16,16c2.207,0,4-1.791,4-4c0-2.208-1.793-4-4-4c-2.209,0-4,1.792-4,4C12,14.208,13.791,16,16,16zM16.05,21c0-0.027-0.022-0.05-0.05-0.05s-0.05,0.022-0.05,0.05s0.022,0.05,0.05,0.05S16.05,21.027,16.05,21z"},
80:{},100:{p:"M16.004,14c-1.104,0-2-0.896-2-1.999S14.9,10,16.004,10c0.233,0,0.458,0.04,0.664,0.114c-0.391,0.186-0.664,0.59-0.664,1.053c0,0.645,0.523,1.167,1.166,1.167c0.328,0,0.621-0.134,0.834-0.351v0.018C18.004,13.104,17.107,14,16.004,14zM23.929,28.741c0,0,0,1.259-1.133,1.259H9.204c-1.132,0-1.132-1.259-1.132-1.259c0-1.258,5.411-2.741,5.411-2.741v-0.815c-0.955-0.312-1.832-0.792-2.517-1.477C7.407,20.148,5.854,8.146,9,5c3.775-3.775,10.225-3.775,14,0c3.146,3.146,1.593,15.148-1.966,18.708c-0.685,0.685-1.563,1.165-2.518,1.477V26C18.517,26,23.929,27.483,23.929,28.741zM16,16c2.207,0,4-1.791,4-4c0-2.208-1.793-4-4-4c-2.209,0-4,1.792-4,4C12,14.208,13.791,16,16,16zM17.5,21c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5S17.5,21.828,17.5,21z"}}}]},
wifi:{d:800,it:1,sh:[{i:{a:{p:"M18.648,23.951L16,26.6l-2.648-2.648C14.813,22.49,17.187,22.49,18.648,23.951zM9.378,19.979l2.649,2.65c2.194-2.195,5.752-2.195,7.944,0l2.648-2.65C18.963,16.322,13.034,16.322,9.378,19.979z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M5.407,16.006l2.648,2.647c4.387-4.387,11.503-4.387,15.89,0l2.649-2.647C20.743,10.156,11.256,10.156,5.407,16.006z",s:"none",fl:"#333",o:1}},f:{0:{o:0},20:{},21:{o:1},100:{}}},{i:{a:{p:"M1.434,12.034l2.649,2.648c6.582-6.582,17.253-6.582,23.835,0l2.648-2.648C22.522,3.989,9.478,3.989,1.434,12.034z",
s:"none",fl:"#333",o:1}},f:{0:{o:0},30:{},31:{o:1},50:{},51:{o:0},70:{},71:{o:1},100:{}}}]},"wifi-alt":{d:500,it:2,sh:[{i:{a:{p:"M19.85,17.844l2.107,2.107c2.67-3.529,2.688-8.401,0.049-11.951l-2.162,2.16c0.729,1.104,1.162,2.418,1.162,3.84C21.006,15.42,20.578,16.739,19.85,17.844zM12.148,17.844l-2.105,2.107C7.374,16.422,7.356,11.55,9.995,8l2.161,2.16c-0.73,1.104-1.164,2.418-1.164,3.84C10.992,15.42,11.422,16.739,12.148,17.844z",s:"none",fl:"#333",o:1}},f:{"16.5":{o:0},33:{o:0},"49.5":{o:1},66:{o:1},"82.5":{o:1},
100:{o:1}}},{i:{a:{p:"M24.141,22.133l2.105,2.104c4.988-5.916,5.006-14.594,0.053-20.531l-2.16,2.162c1.791,2.227,2.869,5.051,2.869,8.133C27.008,17.08,25.932,19.904,24.141,22.133zM7.86,22.133l-2.105,2.104C0.767,18.32,0.749,9.642,5.702,3.706l2.16,2.162C6.071,8.094,4.993,10.918,4.993,14C4.993,17.08,6.069,19.904,7.86,22.133z",s:"none",fl:"#333",o:1}},f:{"16.5":{o:0},33:{o:0},"49.5":{o:0},66:{o:1},"82.5":{o:1},100:{o:1}}},{i:{a:{p:"M18,26c0-2-0.921-10.359-0.921-10.359C17.621,15.284,18,14.699,18,14c0-1.105-0.895-2-2-2c-1.104,0-2,0.895-2,2c0,0.698,0.379,1.282,0.921,1.641C14.921,15.641,14,24,14,26v4h4V26z",
s:"none",fl:"#333",o:1}},f:{}}]},adjust:{d:600,it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c0,1.005,0,2.244,0,4c0,1.736,0,3.979,0,7c0,3.259,0,5.323,0,7C16,24.45,16,25.609,16,27z",s:"none",fl:"#333"}},f:{10:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c3,0,5,1.2,5,1.2s0,6.778,0,9.8c0,3.259,0,9.8,0,9.8S19,27,16,27z"},20:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c7,0,10,6.3,10,6.3s0,1.678,0,4.7c0,3.259,0,4.7,0,4.7S23,27,16,27z"},
30:{},40:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c3,0,5,1.2,5,1.2s0,6.778,0,9.8c0,3.259,0,9.8,0,9.8S19,27,16,27z"},50:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c0,1.005,0,2.244,0,4c0,1.736,0,3.979,0,7c0,3.259,0,5.323,0,7C16,24.45,16,25.609,16,27z"},60:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM11,25.8C8,24,5,21,5,16s3-8,6-9.8c0,2.8,0,5.1,0,5.1s0,1.678,0,4.7c0,3.259,0,4.7,0,4.7S11,22,11,25.8z"},
70:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM7,22.3C6,21,5,19,5,16s1-5,2-6.3C7,12.5,7,11,7,11s0,1.978,0,5c0,3.259,0,5,0,5S7,18.5,7,22.3z"},80:{},90:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM11,25.8C8,24,5,21,5,16s3-8,6-9.8c0,2.8,0,5.1,0,5.1s0,1.678,0,4.7c0,3.259,0,4.7,0,4.7S11,22,11,25.8z"},100:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5c0,1.005,0,2.244,0,4c0,1.736,0,3.979,0,7c0,3.259,0,5.323,0,7C16,24.45,16,25.609,16,27z"}}}]},
alarm:{d:500,it:1,sh:[{i:{a:{p:"M11.583,4.719l-1.255-1.792c-0.76-1.086-2.256-1.351-3.343-0.59L4.365,4.172c-1.086,0.761-1.35,2.257-0.59,3.343L5.03,9.307c0.822-1.037,1.8-1.978,2.939-2.775C9.109,5.734,10.328,5.137,11.583,4.719z",s:"none",fl:"#333"}},f:{15:{t:"t-1,1"},25:{t:"t1,-1"},35:{t:"t-1,1"},45:{t:"t1,-1"},55:{t:"t-1,1"},65:{t:"t1,-1"},75:{t:"t-1,1"},85:{t:"t1,-1"},95:{t:"t-1,1"},100:{t:""}}},{i:{a:{p:"M26.968,9.308l1.256-1.791c0.761-1.086,0.499-2.584-0.589-3.345l-2.622-1.834c-1.084-0.762-2.582-0.497-3.343,0.59L20.415,4.72c1.255,0.417,2.478,1.015,3.616,1.812C25.17,7.33,26.147,8.271,26.968,9.308z",
s:"none",fl:"#333"}},f:{15:{t:"t1,1"},25:{t:"t-1,-1"},35:{t:"t1,1"},45:{t:"t-1,-1"},55:{t:"t1,1"},65:{t:"t-1,-1"},75:{t:"t1,1"},85:{t:"t-1,-1"},95:{t:"t1,1"},100:{t:""}}},{i:{a:{p:"M16.866,17.5c0.276,0.479,0.112,1.09-0.366,1.366s-1.09,0.112-1.366-0.366S11.567,11.322,12,11.072S16.59,17.021,16.866,17.5z",s:"none",fl:"#333"}},f:{10:{t:"r30,16,18"},90:{},91:{t:""}},fIE:{10:{t:"r30,14.5,16.5"},90:{},91:{t:""}}},{i:{a:{p:"M16.5,6.025V4h0.9C17.731,4,18,3.731,18,3.4V2.6C18,2.269,17.731,2,17.4,2h-2.8C14.269,2,14,2.269,14,2.6v0.8C14,3.731,14.269,4,14.6,4h0.9v2.025C9.107,6.29,4,11.541,4,18c0,3.463,1.476,6.574,3.821,8.764L6,28.586V30h1.414l1.984-1.984C11.293,29.268,13.561,30,16,30c2.441,0,4.707-0.732,6.602-1.982L24.586,30H26v-1.414l-1.822-1.82C26.525,24.574,28,21.465,28,18C28,11.541,22.896,6.289,16.5,6.025zM16.843,26.914l-0.344-2.748h-1l-0.344,2.748c-4.256-0.402-7.616-3.736-8.062-7.98l2.823-0.352v-1l-2.839-0.355c0.373-4.313,3.757-7.724,8.058-8.14L15.5,12h1l0.364-2.913c4.3,0.417,7.685,3.827,8.058,8.142l-2.84,0.354v1l2.824,0.354C24.461,23.18,21.098,26.514,16.843,26.914zM15.134,17.5c0.276-0.479,0.887-0.643,1.366-0.366c0.479,0.276,0.642,0.888,0.366,1.366s-3.183,4.513-3.616,4.263C12.817,22.513,14.858,17.979,15.134,17.5z",
s:"none",fl:"#333"}},f:{}}]},"align-center":{d:800,it:1,sh:[{i:{a:{p:"M23.4,10H8.6C8.269,10,8,9.731,8,9.4V6.6C8,6.269,8.269,6,8.6,6h14.8C23.731,6,24,6.269,24,6.6v2.8C24,9.731,23.731,10,23.4,10zM27.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h22.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM23.4,18H8.6C8.269,18,8,18.269,8,18.6V21.4C8,21.731,8.269,22,8.6,22h14.8c0.331,0,0.6-0.269,0.6-0.6V18.6C24,18.269,23.731,18,23.4,18zM27.4,24H4.6C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
s:"none",fl:"#333"}},f:{0:{p:"M15.4,10H0.6C0.269,10,0,9.731,0,9.4V6.6C0,6.269,0.269,6,0.6,6h14.8C15.731,6,16,6.269,16,6.6v2.8C16,9.731,15.731,10,15.4,10zM35.4,12H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h22.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C36,12.269,35.731,12,35.4,12zM17.4,18H2.6C2.269,18,2,18.269,2,18.6V21.4C2,21.731,2.269,22,2.6,22h14.8c0.331,0,0.6-0.269,0.6-0.6V18.6C18,18.269,17.731,18,17.4,18zM13.4,24H-9.4c-0.332,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6h22.8c0.332,0,0.6-0.269,0.6-0.6V24.6C14,24.269,13.731,24,13.4,24z"},
20:{},60:{p:"M23.4,10H8.6C8.269,10,8,9.731,8,9.4V6.6C8,6.269,8.269,6,8.6,6h14.8C23.731,6,24,6.269,24,6.6v2.8C24,9.731,23.731,10,23.4,10zM27.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h22.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM23.4,18H8.6C8.269,18,8,18.269,8,18.6V21.4C8,21.731,8.269,22,8.6,22h14.8c0.331,0,0.6-0.269,0.6-0.6V18.6C24,18.269,23.731,18,23.4,18zM27.4,24H4.6C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
e:"elastic"},100:{}}}]},"align-justify":{d:800,it:1,sh:[{i:{a:{p:"M27.4,10H4.6C4.269,10,4,9.731,4,9.4V6.6C4,6.269,4.269,6,4.6,6h22.8C27.731,6,28,6.269,28,6.6 v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h22.8 c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4  C4,21.731,4.269,22,4.6,22h22.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H4.6  C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
s:"none",fl:"#333"}},f:{0:{p:"M27.4,10H14.6C14.269,10,14,9.731,14,9.4V6.6C14,6.269,14.269,6,14.6,6h12.8 C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM21.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16 h16.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C22,12.269,21.731,12,21.4,12zM17.4,18H2.6C2.269,18,2,18.269,2,18.6V21.4 C2,21.731,2.269,22,2.6,22h14.8c0.331,0,0.6-0.269,0.6-0.6V18.6C18,18.269,17.731,18,17.4,18zM27.4,24H10.6 c-0.332,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z"},
20:{},60:{p:"M27.4,10H4.6C4.269,10,4,9.731,4,9.4V6.6C4,6.269,4.269,6,4.6,6h22.8C27.731,6,28,6.269,28,6.6  v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h22.8 c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4  C4,21.731,4.269,22,4.6,22h22.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H4.6  C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
e:"elastic"},100:{}}}]},"align-left":{d:800,it:1,sh:[{i:{a:{p:"M17.4,10H4.6C4.269,10,4,9.731,4,9.4V6.6C4,6.269,4.269,6,4.6,6h12.8C17.731,6,18,6.269,18,6.6 v2.8C18,9.731,17.731,10,17.4,10zM25.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h20.8 c0.331,0,0.6-0.269,0.6-0.6v-2.8C26,12.269,25.731,12,25.4,12zM21.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4  C4,21.731,4.269,22,4.6,22h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C22,18.269,21.731,18,21.4,18zM27.4,24H4.6  C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
s:"none",fl:"#333"}},f:{0:{p:"M13.4,10H0.6C0.269,10,0,9.731,0,9.4V6.6C0,6.269,0.269,6,0.6,6h12.8C13.731,6,14,6.269,14,6.6 v2.8C14,9.731,13.731,10,13.4,10zM29.4,12H8.6C8.269,12,8,12.269,8,12.6v2.8C8,15.731,8.269,16,8.6,16h20.8 c0.331,0,0.6-0.269,0.6-0.6v-2.8C30,12.269,29.731,12,29.4,12zM29.4,18H12.6c-0.332,0-0.6,0.269-0.6,0.6V21.4 c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C30,18.269,29.731,18,29.4,18zM15.4,24H-7.4  C-7.731,24-8,24.269-8,24.6V27.4c0,0.331,0.269,0.6,0.6,0.6h22.8c0.332,0,0.6-0.269,0.6-0.6V24.6C16,24.269,15.731,24,15.4,24z"},
20:{},60:{p:"M17.4,10H4.6C4.269,10,4,9.731,4,9.4V6.6C4,6.269,4.269,6,4.6,6h12.8C17.731,6,18,6.269,18,6.6  v2.8C18,9.731,17.731,10,17.4,10zM25.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h20.8 c0.331,0,0.6-0.269,0.6-0.6v-2.8C26,12.269,25.731,12,25.4,12zM21.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4  C4,21.731,4.269,22,4.6,22h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C22,18.269,21.731,18,21.4,18zM27.4,24H4.6  C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
e:"elastic"},100:{}}}]},"align-right":{d:800,it:1,sh:[{i:{a:{p:"M27.4,10H14.6C14.269,10,14,9.731,14,9.4V6.6C14,6.269,14.269,6,14.6,6h12.8 C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H6.6C6.269,12,6,12.269,6,12.6v2.8C6,15.731,6.269,16,6.6,16 h20.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H10.6c-0.332,0-0.6,0.269-0.6,0.6V21.4  c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H4.6 C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
s:"none",fl:"#333"}},f:{0:{p:"M31.4,10H18.6C18.269,10,18,9.731,18,9.4V6.6C18,6.269,18.269,6,18.6,6H31.4 C31.731,6,32,6.269,32,6.6v2.8C32,9.731,31.731,10,31.4,10zM23.4,12H2.6C2.269,12,2,12.269,2,12.6v2.8C2,15.731,2.269,16,2.6,16 h20.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C24,12.269,23.731,12,23.4,12zM17.4,18H0.6C0.269,18,0,18.269,0,18.6V21.4 C0,21.731,0.269,22,0.6,22h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C18,18.269,17.731,18,17.4,18zM41.4,24H18.6 c-0.331,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6H41.4c0.331,0,0.6-0.269,0.6-0.6V24.6C42,24.269,41.731,24,41.4,24z"},
20:{},60:{p:"M27.4,10H14.6C14.269,10,14,9.731,14,9.4V6.6C14,6.269,14.269,6,14.6,6h12.8 C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H6.6C6.269,12,6,12.269,6,12.6v2.8C6,15.731,6.269,16,6.6,16 h20.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H10.6c-0.332,0-0.6,0.269-0.6,0.6V21.4  c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H4.6 C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h22.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24z",
e:"elastic"},100:{}}}]},android:{d:800,it:1,sh:[{i:{a:{p:"M20.015,4.7l1.399-2.033c0.083-0.121,0.063-0.279-0.046-0.354s-0.265-0.038-0.348,0.083l-1.454,2.111c-0.958-0.377-2.023-0.588-3.146-0.588s-2.029,0.21-2.987,0.588l-1.456-2.111c-0.082-0.121-0.237-0.158-0.346-0.083c-0.108,0.075-0.129,0.233-0.046,0.354l1.4,2.033C10.76,5.735,9.199,7.703,9,10h15C23.802,7.703,22.24,5.735,20.015,4.7zM13.381,7.903c-0.463,0-0.838-0.375-0.838-0.839c0-0.464,0.375-0.838,0.838-0.838c0.463,0,0.839,0.374,0.839,0.838C14.22,7.528,13.845,7.903,13.381,7.903zM19.724,7.903c-0.463,0-0.839-0.375-0.839-0.839c0-0.464,0.376-0.838,0.839-0.838s0.838,0.374,0.838,0.838C20.562,7.528,20.187,7.903,19.724,7.903zM27,11c-0.941,0-1.701,0.775-1.701,1.73v6.762c0,0.955,0.76,1.73,1.701,1.73c0.94,0,1.703-0.775,1.703-1.73V12.73C28.703,11.775,27.94,11,27,11zM6,11c-0.939,0-1.702,0.775-1.702,1.73v6.762c0,0.955,0.763,1.73,1.702,1.73c0.942,0,1.705-0.775,1.705-1.73V12.73C7.705,11.775,6.942,11,6,11zM24,11v12.354c0,0.732-0.565,1.347-1.3,1.347h-1.493v3.762c0,0.955-0.763,1.73-1.704,1.73c-0.939,0-1.703-0.775-1.703-1.73V24.7h-2.6v3.762c0,0.955-0.762,1.73-1.703,1.73s-1.704-0.775-1.704-1.73V24.7H10.3c-0.734,0-1.3-0.614-1.3-1.347V11H24z",
s:"none",fl:"#97C03C"}},f:{}}]},"angle-wide-down":{d:500,it:2,sh:[{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"t0,0",p:"M4,12.796c0,0.094,0.066,0.209,0.146,0.258l11.706,6.91c0.081,0.048,0.214,0.048,0.295,0l11.705-6.912C27.935,13.004,28,12.888,28,12.794V11.8c0-0.189-0.132-0.265-0.295-0.167L16,18.587L4.295,11.633C4.133,11.535,4,11.61,4,11.8V12.796z"},50:{t:"t0,3.5"},99:{t:""},100:{p:""}}},{i:{a:{p:"M4,12.796c0,0.094,0.066,0.209,0.146,0.258l11.706,6.91c0.081,0.048,0.214,0.048,0.295,0l11.705-6.912C27.935,13.004,28,12.888,28,12.794V11.8c0-0.189-0.132-0.265-0.295-0.167L16,18.587L4.295,11.633C4.133,11.535,4,11.61,4,11.8V12.796z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"t0,0",p:"M4,12.796c0,0.094,0.066,0.209,0.146,0.258l11.706,6.91c0.081,0.048,0.214,0.048,0.295,0l11.705-6.912C27.935,13.004,28,12.888,28,12.794V11.8c0-0.189-0.132-0.265-0.295-0.167L16,18.587L4.295,11.633C4.133,11.535,4,11.61,4,11.8V12.796z"},50:{t:"t0,-3.5"},99:{t:""},100:{p:""}}}]},"angle-wide-left":{d:500,it:2,sh:[{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M19.204,4c-0.094,0-0.209,0.066-0.258,0.147l-6.911,11.705c-0.048,0.081-0.048,0.214,0,0.295l6.913,11.705C18.996,27.935,19.112,28,19.206,28H20.2c0.189,0,0.265-0.132,0.167-0.295L13.413,16l6.954-11.706C20.465,4.132,20.39,4,20.2,4H19.204z"},
50:{t:"t-3.5,0"},99:{t:""},100:{p:""}}},{i:{a:{p:"M19.204,4c-0.094,0-0.209,0.066-0.258,0.147l-6.911,11.705c-0.048,0.081-0.048,0.214,0,0.295l6.913,11.705C18.996,27.935,19.112,28,19.206,28H20.2c0.189,0,0.265-0.132,0.167-0.295L13.413,16l6.954-11.706C20.465,4.132,20.39,4,20.2,4H19.204z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M19.204,4c-0.094,0-0.209,0.066-0.258,0.147l-6.911,11.705c-0.048,0.081-0.048,0.214,0,0.295l6.913,11.705C18.996,27.935,19.112,28,19.206,28H20.2c0.189,0,0.265-0.132,0.167-0.295L13.413,16l6.954-11.706C20.465,4.132,20.39,4,20.2,4H19.204z"},
50:{t:"t3.5,0"},99:{t:""},100:{p:""}}}]},"angle-wide-right":{d:500,it:2,sh:[{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M12.796,28c0.094,0,0.209-0.066,0.258-0.146l6.91-11.706c0.048-0.081,0.048-0.214,0-0.295L13.052,4.147C13.004,4.065,12.888,4,12.794,4H11.8c-0.189,0-0.265,0.132-0.167,0.295L18.587,16l-6.954,11.705C11.535,27.867,11.61,28,11.8,28H12.796z"},50:{t:"t-3.5,0"},99:{t:""},100:{p:""}}},{i:{a:{p:"M12.796,28c0.094,0,0.209-0.066,0.258-0.146l6.91-11.706c0.048-0.081,0.048-0.214,0-0.295L13.052,4.147C13.004,4.065,12.888,4,12.794,4H11.8c-0.189,0-0.265,0.132-0.167,0.295L18.587,16l-6.954,11.705C11.535,27.867,11.61,28,11.8,28H12.796z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M12.796,28c0.094,0,0.209-0.066,0.258-0.146l6.91-11.706c0.048-0.081,0.048-0.214,0-0.295L13.052,4.147C13.004,4.065,12.888,4,12.794,4H11.8c-0.189,0-0.265,0.132-0.167,0.295L18.587,16l-6.954,11.705C11.535,27.867,11.61,28,11.8,28H12.796z"},50:{t:"t3.5,0"},99:{t:""},100:{p:""}}}]},"angle-wide-up":{d:500,it:2,sh:[{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M28,19.204c0-0.094-0.066-0.209-0.146-0.258l-11.706-6.91c-0.081-0.048-0.214-0.048-0.295,0L4.147,18.948C4.065,18.996,4,19.112,4,19.206V20.2c0,0.189,0.132,0.265,0.295,0.167L16,13.413l11.705,6.954C27.867,20.465,28,20.39,28,20.2V19.204z"},
50:{t:"t0,-3.5"},99:{t:"t0,0"},100:{p:""}}},{i:{a:{p:"M28,19.204c0-0.094-0.066-0.209-0.146-0.258l-11.706-6.91c-0.081-0.048-0.214-0.048-0.295,0L4.147,18.948C4.065,18.996,4,19.112,4,19.206V20.2c0,0.189,0.132,0.265,0.295,0.167L16,13.413l11.705,6.954C27.867,20.465,28,20.39,28,20.2V19.204z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"",s:"none",fl:"#333"}},f:{0:{t:"",p:"M28,19.204c0-0.094-0.066-0.209-0.146-0.258l-11.706-6.91c-0.081-0.048-0.214-0.048-0.295,0L4.147,18.948C4.065,18.996,4,19.112,4,19.206V20.2c0,0.189,0.132,0.265,0.295,0.167L16,13.413l11.705,6.954C27.867,20.465,28,20.39,28,20.2V19.204z"},
50:{t:"t0,3.5"},99:{t:""},100:{p:""}}}]},"angle-double-down":{d:500,it:2,sh:[{i:{a:{p:"M25.475,13.273c-0.234-0.234-0.615-0.232-0.849,0L16.025,21.9l-8.699-8.627c-0.234-0.234-0.615-0.232-0.85,0L6.15,13.625c-0.234,0.234-0.234,0.613,0,0.848l9.451,9.352c0.234,0.234,0.614,0.234,0.849,0l9.401-9.352c0.233-0.234,0.233-0.613-0.001-0.848L25.475,13.273z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s0.8"},"37.5":{t:"t0,-6s0.8"},"62.5":{t:"t0,-6s1.2"},"87.5":{t:"t0,0s1.2"},100:{t:"t0,0s1"}}},{i:{a:{p:"M25.475,7.273c-0.234-0.235-0.615-0.233-0.849,0l-8.601,8.626L7.326,7.273c-0.234-0.235-0.615-0.233-0.85,0L6.15,7.625c-0.234,0.234-0.234,0.613,0,0.848l9.451,9.352c0.234,0.234,0.614,0.234,0.849,0l9.401-9.352c0.233-0.234,0.233-0.613-0.001-0.848L25.475,7.273z",
t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t0,6s1.2"},"62.5":{t:"t0,6s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},"angle-double-left":{d:500,it:2,sh:[{i:{a:{p:"M18.728,25.475c0.234-0.234,0.232-0.615,0-0.849l-8.627-8.601l8.627-8.7c0.234-0.234,0.232-0.614,0-0.849L18.376,6.15c-0.234-0.234-0.613-0.234-0.848,0l-9.353,9.451c-0.234,0.234-0.234,0.614,0,0.849l9.353,9.401c0.234,0.233,0.613,0.233,0.848-0.001L18.728,25.475z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s0.8"},
"37.5":{t:"t6,0s0.8"},"62.5":{t:"t6,0s1.2"},"87.5":{t:"t0,0s1.2"},100:{t:"t0,0s1"}}},{i:{a:{p:"M24.728,25.475c0.234-0.234,0.232-0.615,0-0.849l-8.626-8.601l8.626-8.7c0.234-0.234,0.232-0.614,0-0.849L24.376,6.15c-0.234-0.234-0.613-0.234-0.848,0l-9.353,9.451c-0.234,0.234-0.234,0.614,0,0.849l9.353,9.401c0.234,0.233,0.613,0.233,0.848-0.001L24.728,25.475z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t-6,0s1.2"},"62.5":{t:"t-6,0s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},"angle-double-right":{d:500,
it:2,sh:[{i:{a:{p:"M13.273,6.551c-0.234,0.234-0.232,0.615,0,0.849L21.9,16l-8.627,8.699c-0.234,0.234-0.232,0.615,0,0.85l0.352,0.326c0.234,0.234,0.613,0.234,0.848,0l9.352-9.451c0.234-0.234,0.234-0.614,0-0.849l-9.352-9.401c-0.234-0.233-0.613-0.233-0.848,0.001L13.273,6.551z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s0.8"},"37.5":{t:"t-6,0s0.8"},"62.5":{t:"t-6,0s1.2"},"87.5":{t:"t0,0s1.2"},100:{t:"t0,0s1"}}},{i:{a:{p:"M7.273,6.551c-0.234,0.234-0.232,0.615,0,0.849L15.9,16l-8.627,8.699c-0.234,0.234-0.232,0.615,0,0.85l0.352,0.326c0.234,0.234,0.613,0.234,0.848,0l9.352-9.451c0.234-0.234,0.234-0.614,0-0.849L8.472,6.175C8.238,5.941,7.859,5.941,7.625,6.176L7.273,6.551z",
t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t6,0s1.2"},"62.5":{t:"t6,0s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},"angle-double-up":{d:500,it:2,sh:[{i:{a:{p:"M6.525,18.727c0.234,0.234,0.615,0.232,0.849,0l8.601-8.627l8.699,8.627c0.234,0.234,0.615,0.232,0.85,0l0.326-0.352c0.234-0.234,0.234-0.613,0-0.848l-9.451-9.352c-0.234-0.234-0.614-0.234-0.849,0l-9.401,9.352c-0.233,0.234-0.233,0.613,0.001,0.848L6.525,18.727z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s0.8"},
"37.5":{t:"t0,6s0.8"},"62.5":{t:"t0,6s1.2"},"87.5":{t:"t0,0s1.2"},100:{t:"t0,0s1"}}},{i:{a:{p:"M6.525,24.727c0.234,0.234,0.615,0.232,0.849,0l8.601-8.626l8.699,8.626c0.234,0.234,0.615,0.232,0.85,0l0.326-0.352c0.234-0.234,0.234-0.613,0-0.848l-9.451-9.352c-0.234-0.234-0.614-0.234-0.849,0l-9.401,9.352c-0.233,0.234-0.233,0.613,0.001,0.848L6.525,24.727z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t0,-6s1.2"},"62.5":{t:"t0,-6s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},"angle-down":{d:600,
it:1,sh:[{i:{a:{p:"M25.475,11.273c-0.234-0.234-0.615-0.232-0.849,0l-8.6,8.626l-8.7-8.626c-0.234-0.234-0.614-0.232-0.849,0L6.15,11.625c-0.234,0.234-0.234,0.613,0,0.848l9.451,9.352c0.234,0.234,0.614,0.234,0.849,0l9.4-9.352c0.233-0.234,0.233-0.613-0.001-0.848L25.475,11.273z",s:"none",fl:"#333"}},f:{10:{p:"M19.02,7.27c-0.324-0.065-0.641,0.147-0.706,0.47l-2.333,11.928l-2.333-12c-0.063-0.325-0.379-0.536-0.703-0.475l-0.468,0.109c-0.326,0.063-0.538,0.377-0.475,0.702l2.606,13.038c0.372,1.325,2.472,1.226,2.735,0.01l2.652-12.991c0.064-0.324-0.146-0.64-0.471-0.705L19.02,7.27z"},
35:{t:"t0,25"},36:{t:"t33,25"},37:{t:"t33,-25"},38:{t:"t0,-25"},63:{t:"",e:">"},70:{p:"M25.475,11.273c-0.234-0.234-0.615-0.232-0.849,0l-8.6,8.626l-8.7-8.626c-0.234-0.234-0.614-0.232-0.849,0L6.15,11.625c-0.234,0.234-0.234,0.613,0,0.848l9.451,9.352c0.234,0.234,0.614,0.234,0.849,0l9.4-9.352c0.233-0.234,0.233-0.613-0.001-0.848L25.475,11.273z"},100:{}}}]},"angle-left":{d:600,it:1,sh:[{i:{a:{p:"M20.726,25.448c0.234-0.234,0.232-0.615,0-0.849L12.1,16l8.625-8.7c0.234-0.234,0.232-0.614,0-0.849l-0.352-0.327c-0.234-0.234-0.613-0.234-0.848,0l-9.351,9.452c-0.234,0.234-0.234,0.614,0,0.849l9.351,9.4c0.234,0.233,0.613,0.233,0.848-0.001L20.726,25.448z",
s:"none",fl:"#333"}},f:{10:{p:"M24.497,19.038c0.065-0.324-0.147-0.641-0.47-0.706L12.1,16l12-2.333c0.325-0.063,0.536-0.379,0.475-0.703l-0.109-0.468c-0.063-0.326-0.377-0.538-0.702-0.474l-13.038,2.606C9.4,15,9.5,17.1,10.715,17.363l12.991,2.652c0.324,0.064,0.64-0.146,0.705-0.471L24.497,19.038z"},35:{t:"t-25,0"},36:{t:"t-25,33"},37:{t:"t25,33"},38:{t:"t25,0"},63:{t:"",e:">"},70:{p:"M20.726,25.448c0.234-0.234,0.232-0.615,0-0.849L12.1,16l8.625-8.7c0.234-0.234,0.232-0.614,0-0.849l-0.352-0.327c-0.234-0.234-0.613-0.234-0.848,0l-9.351,9.452c-0.234,0.234-0.234,0.614,0,0.849l9.351,9.4c0.234,0.233,0.613,0.233,0.848-0.001L20.726,25.448z"},
100:{}}}]},"angle-right":{d:600,it:1,sh:[{i:{a:{p:"M13.274,6.525c-0.234,0.234-0.232,0.615,0,0.849l8.625,8.6l-8.625,8.7c-0.234,0.234-0.232,0.614,0,0.849l0.352,0.327c0.234,0.234,0.613,0.234,0.848,0l9.351-9.452c0.234-0.234,0.234-0.614,0-0.849l-9.351-9.4c-0.234-0.233-0.613-0.233-0.848,0.001L13.274,6.525z",s:"none",fl:"#333"}},f:{10:{p:"M9.57,12.98c-0.065,0.324,0.147,0.641,0.47,0.706l11.927,2.332l-12,2.333c-0.325,0.063-0.536,0.379-0.475,0.703l0.109,0.468c0.063,0.326,0.377,0.538,0.702,0.475l13.038-2.606c1.325-0.372,1.226-2.472,0.01-2.735l-12.991-2.652c-0.324-0.064-0.64,0.146-0.705,0.471L9.57,12.98z"},
35:{t:"t25,0"},36:{t:"t25,33"},37:{t:"t-25,33"},38:{t:"t-25,0"},63:{t:"",e:">"},70:{p:"M13.274,6.525c-0.234,0.234-0.232,0.615,0,0.849l8.625,8.6l-8.625,8.7c-0.234,0.234-0.232,0.614,0,0.849l0.352,0.327c0.234,0.234,0.613,0.234,0.848,0l9.351-9.452c0.234-0.234,0.234-0.614,0-0.849l-9.351-9.4c-0.234-0.233-0.613-0.233-0.848,0.001L13.274,6.525z"},100:{}}}]},"angle-up":{d:600,it:1,sh:[{i:{a:{p:"M6.526,20.727c0.234,0.234,0.615,0.232,0.849,0l8.6-8.626l8.7,8.626c0.234,0.234,0.614,0.232,0.849,0l0.327-0.352c0.234-0.234,0.234-0.613,0-0.848l-9.451-9.352c-0.234-0.234-0.614-0.234-0.849,0l-9.4,9.352c-0.233,0.234-0.233,0.613,0.001,0.848L6.526,20.727z",
s:"none",fl:"#333"}},f:{10:{p:"M12.981,24.73c0.324,0.065,0.641-0.147,0.706-0.47l2.332-11.928l2.333,12c0.063,0.325,0.379,0.536,0.703,0.475l0.468-0.109c0.326-0.063,0.538-0.377,0.475-0.702l-2.606-13.038c-0.372-1.325-2.471-1.226-2.735-0.01l-2.652,12.991c-0.064,0.324,0.146,0.64,0.471,0.705L12.981,24.73z"},35:{t:"t0,-25"},36:{t:"t33,-25"},37:{t:"t33,25"},38:{t:"t0,25"},63:{t:"",e:">"},70:{p:"M6.526,20.727c0.234,0.234,0.615,0.232,0.849,0l8.6-8.626l8.7,8.626c0.234,0.234,0.614,0.232,0.849,0l0.327-0.352c0.234-0.234,0.234-0.613,0-0.848l-9.451-9.352c-0.234-0.234-0.614-0.234-0.849,0l-9.4,9.352c-0.233,0.234-0.233,0.613,0.001,0.848L6.526,20.727z"},
100:{}}}]},apple:{d:1600,it:1,sh:[{i:{a:{p:"M24.761,26.949c0.727-0.793,1.523-1.973,2.242-3.677c1.254-3.677,1.706-8.363-0.27-10.792c-1.328-1.653-3.043-2.528-5.259-2.478c-2.896,0.065-3.172,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.712-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c-1.468,0.549-3.59,2.283-4.07,4.675c-0.269,1.345-0.269,3.598,0,5.302c0.449,2.603,1.826,4.712,2.87,6.009c0.666,0.827,1.766,2.013,3.074,2.924C11.792,29.811,12.348,30,12.835,30c1.525,0,2.149-1.705,3.764-1.705c1.447,0,2.34,1.685,3.595,1.685c0.626,0,1.278-0.247,1.875-0.696C23.459,28.235,24.158,27.605,24.761,26.949z",
s:"none",fl:"#333"}},f:{9:{},10:{p:"M24.698,26.949c0.648-0.737,1.525-1.973,2.242-3.677c-5.829-3.408-3.046-8.99-0.269-10.792c-1.328-1.653-3.042-2.528-5.26-2.478c-2.895,0.065-3.171,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.713-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c-1.467,0.549-3.589,2.283-4.068,4.675c-0.269,1.345-0.269,3.598,0,5.302c0.448,2.603,1.68,4.204,2.602,5.382c0.752,0.96,2.062,2.601,3.342,3.551C11.742,29.793,12.286,30,12.774,30c1.525,0,2.149-1.705,3.763-1.705c1.447,0,2.34,1.685,3.596,1.685c0.627,0,1.262-0.27,1.876-0.696C23.358,28.186,24.036,27.704,24.698,26.949z"},
19:{},20:{p:"M24.698,26.949c0.648-0.737,1.525-1.973,2.242-3.677c-5.829-3.408-3.046-8.99-0.269-10.792c-1.328-1.653-3.042-2.528-5.26-2.478c-2.895,0.065-3.171,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.713-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c-1.467,0.549-3.589,2.283-4.068,4.675c-0.269,1.345-0.269,3.598,0,5.302c5.74-1.076,8.61,2.72,8.61,4.575c0,1.929-1.095,3.579-2.667,4.357C11.742,29.793,12.286,30,12.774,30c1.525,0,2.149-1.705,3.763-1.705c1.447,0,2.34,1.685,3.596,1.685c0.627,0,1.262-0.27,1.876-0.696C23.354,28.386,24.036,27.704,24.698,26.949z"},
29:{},30:{p:"M20.393,25.38c0-2.303,2.158-4.824,4.333-5.045c-1.862-2.697-0.722-6.136,1.946-7.855c-1.328-1.653-3.042-2.528-5.26-2.478c-2.895,0.065-3.171,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.713-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c-1.467,0.549-3.589,2.283-4.068,4.675c-0.269,1.345-0.269,3.598,0,5.302c5.74-1.076,8.61,2.72,8.61,4.575c0,1.929-1.095,3.579-2.667,4.357C11.742,29.793,12.286,30,12.774,30c1.525,0,2.149-1.705,3.763-1.705c1.447,0,2.34,1.685,3.596,1.685c0.627,0,1.262-0.27,1.876-0.696C20.631,28.542,20.393,27.093,20.393,25.38z"},
39:{},40:{p:"M20.393,25.38c0-2.303,2.134-4.757,4.308-4.979c-1.862-2.696-0.696-6.201,1.972-7.92c-1.328-1.653-3.042-2.528-5.26-2.478c-2.895,0.065-3.171,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.713-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c1.698,1.082,2.837,3.048,2.837,5.302c0,1.744-0.502,3.864-1.594,4.99c1.475,0.813,3.297,2.405,3.297,4.261c0,1.929-1.095,3.579-2.667,4.357C11.742,29.793,12.286,30,12.774,30c1.525,0,2.149-1.705,3.763-1.705c1.447,0,2.34,1.685,3.596,1.685c0.627,0,1.262-0.27,1.876-0.696C20.631,28.542,20.393,27.093,20.393,25.38z"},
69:{},70:{p:"M24.761,26.949c0.727-0.793,1.523-1.973,2.242-3.677c1.254-3.677,1.706-8.363-0.27-10.792c-1.328-1.653-3.043-2.528-5.259-2.478c-2.896,0.065-3.172,1.88-4.875,1.88c-0.987,0-2.687-1.805-4.712-1.793c-0.921,0.006-1.758,0.151-2.519,0.426c-1.468,0.549-3.59,2.283-4.07,4.675c-0.269,1.345-0.269,3.598,0,5.302c0.449,2.603,1.826,4.712,2.87,6.009c0.666,0.827,1.766,2.013,3.074,2.924C11.792,29.811,12.348,30,12.835,30c1.525,0,2.149-1.705,3.764-1.705c1.447,0,2.34,1.685,3.595,1.685c0.626,0,1.278-0.247,1.875-0.696C23.459,28.235,24.158,27.605,24.761,26.949z"},
100:{}}},{i:{a:{p:"M8.19,2.106c3.814-0.586,6.003,1.186,7.81,6.755C13.033,7.141,8.02,8.53,8.19,2.106zM20,4c-2.5,1.7-3.5,6-3.5,6H17c0,0,2.3-3.6,5.7-6H20z",s:"none",fl:"#333"}},f:{}}]},"arrow-circle-down":{d:500,it:1,sh:[{i:{a:{p:"M30,16c0-7.732-6.268-14-14-14S2,8.268,2,16s6.268,14,14,14S30,23.732,30,16zM15.15,24.648l-8.907-8.911c-0.47-0.467-0.469-1.227-0.001-1.695l1.132-1.134c0.468-0.468,1.228-0.468,1.696,0.001l4.931,4.931V8.199C14.001,7.539,14.538,7,15.2,7h1.602C17.465,7,18,7.535,18,8.199v9.642l4.93-4.931c0.47-0.469,1.229-0.469,1.698,0l1.13,1.131c0.469,0.47,0.469,1.229,0,1.698l-8.91,8.911C16.379,25.116,15.622,25.117,15.15,24.648z",
s:"none",fl:"#333"}},f:{0:{p:"M30,16c0-7.732-6.268-14-14-14S2,8.268,2,16s6.268,14,14,14S30,23.732,30,16zM15.15,10.648L14,8c0-1,0,1,0,0l0,0c0-1-0.001,0.159,0,0l0,0l0,0c0-0.66,0.538-1,1.2-1h1.602C17.465,7,18,7.335,18,8l0,0l0,0c-0.001,0.159,0-1,0,0l0,0c0,1,0-1,0,0l-1.152,2.649C16.379,11.116,15.622,11.117,15.15,10.648z"},30:{p:"M30,16c0-7.732-6.268-14-14-14S2,8.268,2,16s6.268,14,14,14S30,23.732,30,16zM15.15,24.648L14,22c0-1,0-1,0-2v-1c0-1,0-1,0.001-1.159l0,0V8.199C14.001,7.539,14.538,7,15.2,7h1.602C17.465,7,18,7.535,18,8.199v9.642l0,0C18,18,18,18,18,19v1c0,1,0,1,0,2l-1.152,2.649C16.379,25.116,15.622,25.117,15.15,24.648z"},
70:{p:"M30,16c0-7.732-6.268-14-14-14S2,8.268,2,16s6.268,14,14,14S30,23.732,30,16zM15.15,24.648l-8.907-8.911c-0.47-0.467-0.469-1.227-0.001-1.695l1.132-1.134c0.468-0.468,1.228-0.468,1.696,0.001l4.931,4.931V8.199C14.001,7.539,14.538,7,15.2,7h1.602C17.465,7,18,7.535,18,8.199v9.642l4.93-4.931c0.47-0.469,1.229-0.469,1.698,0l1.13,1.131c0.469,0.47,0.469,1.229,0,1.698l-8.91,8.911C16.379,25.116,15.622,25.117,15.15,24.648z",e:"bounce"},100:{}}}]},"arrow-circle-left":{d:500,it:1,sh:[{i:{a:{p:"M16,30c7.732,0,14-6.268,14-14c0-7.732-6.268-14-14-14C8.267,2,2,8.268,2,16C2,23.732,8.267,30,16,30zM7.351,15.151l8.911-8.907c0.467-0.47,1.226-0.469,1.694-0.001l1.134,1.132c0.468,0.468,0.468,1.228-0.001,1.696l-4.93,4.931H23.8c0.66,0,1.199,0.537,1.199,1.199v1.602c0,0.664-0.535,1.199-1.199,1.199h-9.641l4.93,4.93c0.469,0.47,0.469,1.229,0,1.698l-1.131,1.129c-0.471,0.469-1.229,0.469-1.697,0L7.35,16.849C6.883,16.38,6.882,15.622,7.351,15.151z",
s:"none",fl:"#333"}},f:{0:{p:"M16,30c7.732,0,14-6.268,14-14c0-7.732-6.268-14-14-14C8.267,2,2,8.268,2,16C2,23.732,8.267,30,16,30zM21.351,15.151L23.999,14c1,0-1,0,0,0l0,0c1,0-0.159-0.001,0,0l0,0l0,0c0.66,0,1,0.538,1,1.2v1.602c0,0.664-0.336,1.198-1,1.198l0,0l0,0c-0.159,0,1,0,0,0l0,0c-1,0,1,0,0,0l-2.649-1.151C20.883,16.38,20.882,15.622,21.351,15.151z"},30:{p:"M16,30c7.732,0,14-6.268,14-14c0-7.732-6.268-14-14-14C8.267,2,2,8.268,2,16C2,23.732,8.267,30,16,30zM7.351,15.151L10,14c1,0,1,0,2,0h1c1,0,1,0,1.159,0.001l0,0H23.8c0.66,0,1.199,0.537,1.199,1.199v1.602c0,0.664-0.535,1.199-1.199,1.199h-9.641l0,0C14,18,14,18,13,18h-1c-1,0-1,0-2,0L7.35,16.849C6.883,16.38,6.882,15.622,7.351,15.151z"},
70:{p:"M16,30c7.732,0,14-6.268,14-14c0-7.732-6.268-14-14-14C8.267,2,2,8.268,2,16C2,23.732,8.267,30,16,30zM7.351,15.151l8.911-8.907c0.467-0.47,1.226-0.469,1.694-0.001l1.134,1.132c0.468,0.468,0.468,1.228-0.001,1.696l-4.93,4.931H23.8c0.66,0,1.199,0.537,1.199,1.199v1.602c0,0.664-0.535,1.199-1.199,1.199h-9.641l4.93,4.93c0.469,0.47,0.469,1.229,0,1.698l-1.131,1.129c-0.471,0.469-1.229,0.469-1.697,0L7.35,16.849C6.883,16.38,6.882,15.622,7.351,15.151z",e:"bounce"},100:{}}}]},"arrow-circle-right":{d:500,it:1,
sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24.648,16.85l-8.911,8.907c-0.467,0.47-1.227,0.469-1.695,0.001l-1.134-1.132c-0.468-0.468-0.468-1.228,0.001-1.696l4.931-4.931H8.199C7.539,17.999,7,17.462,7,16.8v-1.602C7,14.535,7.535,14,8.199,14h9.642L12.91,9.07c-0.469-0.469-0.469-1.229,0-1.698l1.131-1.13c0.47-0.469,1.229-0.468,1.698,0l8.911,8.909C25.116,15.621,25.117,16.378,24.648,16.85z",s:"none",fl:"#333"}},f:{0:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM10.648,16.85L8,18c-1,0,1,0,0,0l0,0c-1,0,0.159,0.001,0,0l0,0l0,0c-0.66,0-1-0.538-1-1.2v-1.602C7,14.535,7.335,14,8,14l0,0l0,0c0.159,0-1,0,0,0l0,0c1,0-1,0,0,0l2.649,1.152C11.116,15.621,11.117,16.378,10.648,16.85z"},
30:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24.648,16.85L22,18c-1,0-1,0-2,0h-1c-1,0-1,0-1.159-0.001l0,0H8.199C7.539,17.999,7,17.462,7,16.8v-1.602C7,14.535,7.535,14,8.199,14h9.642l0,0C18,14,18,14,19,14h1c1,0,1,0,2,0l2.649,1.152C25.116,15.621,25.117,16.378,24.648,16.85z"},70:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24.648,16.85l-8.911,8.907c-0.467,0.47-1.227,0.469-1.695,0.001l-1.134-1.132c-0.468-0.468-0.468-1.228,0.001-1.696l4.931-4.931H8.199C7.539,17.999,7,17.462,7,16.8v-1.602C7,14.535,7.535,14,8.199,14h9.642L12.91,9.07c-0.469-0.469-0.469-1.229,0-1.698l1.131-1.13c0.47-0.469,1.229-0.468,1.698,0l8.911,8.909C25.116,15.621,25.117,16.378,24.648,16.85z",
e:"bounce"},100:{}}}]},"arrow-circle-up":{d:500,it:1,sh:[{i:{a:{p:"M2,16c0,7.732,6.268,14,14,14s14-6.268,14-14S23.732,2,16,2S2,8.268,2,16zM16.85,7.352l8.907,8.911c0.47,0.467,0.469,1.226,0.001,1.695l-1.132,1.134c-0.468,0.468-1.228,0.468-1.696-0.001l-4.931-4.931v9.642c0,0.66-0.537,1.199-1.199,1.199h-1.602C14.535,25,14,24.465,14,23.801v-9.642L9.07,19.09c-0.469,0.469-1.229,0.469-1.698,0l-1.13-1.131c-0.469-0.471-0.468-1.229,0-1.698l8.909-8.911C15.621,6.884,16.378,6.883,16.85,7.352z",s:"none",fl:"#333"}},
f:{0:{p:"M2,16c0,7.732,6.268,14,14,14s14-6.268,14-14S23.732,2,16,2S2,8.268,2,16zM16.85,21.352L18,24c0,1,0-1,0,0l0,0c0,1,0.001-0.159,0,0l0,0l0,0c0,0.66-0.538,1-1.2,1h-1.602C14.535,25,14,24.664,14,24l0,0l0,0c0-0.159,0,1,0,0l0,0c0-1,0,1,0,0l1.152-2.649C15.621,20.884,16.378,20.883,16.85,21.352z"},30:{p:"M2,16c0,7.732,6.268,14,14,14s14-6.268,14-14S23.732,2,16,2S2,8.268,2,16zM16.85,7.352L18,10c0,1,0,1,0,2v1c0,1,0,1-0.001,1.159l0,0v9.642c0,0.66-0.537,1.199-1.199,1.199h-1.602C14.535,25,14,24.465,14,23.801v-9.642l0,0C14,14,14,14,14,13v-1c0-1,0-1,0-2l1.152-2.649C15.621,6.884,16.378,6.883,16.85,7.352z"},
70:{p:"M2,16c0,7.732,6.268,14,14,14s14-6.268,14-14S23.732,2,16,2S2,8.268,2,16zM16.85,7.352l8.907,8.911c0.47,0.467,0.469,1.226,0.001,1.695l-1.132,1.134c-0.468,0.468-1.228,0.468-1.696-0.001l-4.931-4.931v9.642c0,0.66-0.537,1.199-1.199,1.199h-1.602C14.535,25,14,24.465,14,23.801v-9.642L9.07,19.09c-0.469,0.469-1.229,0.469-1.698,0l-1.13-1.131c-0.469-0.471-0.468-1.229,0-1.698l8.909-8.911C15.621,6.884,16.378,6.883,16.85,7.352z",e:"bounce"},100:{}}}]},"arrow-down":{d:500,it:1,sh:[{i:{a:{p:"M15.151,25.648c0.471,0.469,1.229,0.469,1.697,0.001l9.618-9.618c0.469-0.469,0.469-1.227,0-1.698l-1.131-1.131c-0.469-0.469-1.229-0.469-1.697,0l-5.637,5.638V7.199c0-0.664-0.535-1.199-1.2-1.199H15.2C14.538,6,14,6.539,14,7.199v11.642l-5.637-5.638c-0.469-0.469-1.229-0.469-1.697,0l-1.131,1.133c-0.469,0.469-0.469,1.227,0,1.695L15.151,25.648z",
s:"none",fl:"#333"}},f:{0:{p:"M15.15,8.846c0.471,0.469,1.229,0.469,1.697,0.001L18,7.199l0,0V7v0.199l0,0l0,0C18,6.535,17.465,6,16.801,6h-1.602C14.537,6,14,6.539,14,7.199l0,0l0,0V7v0.199l0,0L15.15,8.846z"},30:{p:"M15.151,25.648c0.471,0.469,1.229,0.469,1.697,0.001L18.001,24v-3v-1v-1.159l0,0V7.199c0-0.664-0.535-1.199-1.2-1.199H15.2C14.538,6,14,6.539,14,7.199v11.642l0,0V20v1v3L15.151,25.648z"},70:{p:"M15.151,25.648c0.471,0.469,1.229,0.469,1.697,0.001l9.618-9.618c0.469-0.469,0.469-1.227,0-1.698l-1.131-1.131c-0.469-0.469-1.229-0.469-1.697,0l-5.637,5.638V7.199c0-0.664-0.535-1.199-1.2-1.199H15.2C14.538,6,14,6.539,14,7.199v11.642l-5.637-5.638c-0.469-0.469-1.229-0.469-1.697,0l-1.131,1.133c-0.469,0.469-0.469,1.227,0,1.695L15.151,25.648z",
e:"elastic"},100:{}}}]},"arrow-left":{d:500,it:1,sh:[{i:{a:{p:"M6.352,15.15c-0.469,0.471-0.469,1.229-0.001,1.697l9.618,9.617c0.469,0.469,1.227,0.469,1.698,0l1.131-1.131c0.469-0.469,0.469-1.229,0-1.697L13.159,18h11.642C25.465,18,26,17.465,26,16.801v-1.602C26,14.537,25.461,14,24.801,14H13.159l5.638-5.637c0.469-0.469,0.469-1.229,0-1.697l-1.133-1.131c-0.469-0.469-1.227-0.469-1.695,0L6.352,15.15z",s:"none",fl:"#333"}},f:{0:{p:"M23.153,15.149c-0.469,0.471-0.469,1.229-0.001,1.697l1.648,1.152l0,0H25h-0.199l0,0l0,0c0.664,0,1.199-0.535,1.199-1.199v-1.602c0-0.662-0.539-1.199-1.199-1.199l0,0l0,0H25h-0.199l0,0L23.153,15.149z"},
30:{p:"M6.352,15.15c-0.469,0.471-0.469,1.229-0.001,1.697L8,18h3h1h1.159l0,0h11.642C25.465,18,26,17.465,26,16.801v-1.602C26,14.537,25.461,14,24.801,14H13.159l0,0H12h-1H8L6.352,15.15z"},70:{p:"M6.352,15.15c-0.469,0.471-0.469,1.229-0.001,1.697l9.618,9.617c0.469,0.469,1.227,0.469,1.698,0l1.131-1.131c0.469-0.469,0.469-1.229,0-1.697L13.159,18h11.642C25.465,18,26,17.465,26,16.801v-1.602C26,14.537,25.461,14,24.801,14H13.159l5.638-5.637c0.469-0.469,0.469-1.229,0-1.697l-1.133-1.131c-0.469-0.469-1.227-0.469-1.695,0L6.352,15.15z",
e:"elastic"},100:{}}}]},"arrow-right":{d:500,it:1,sh:[{i:{a:{p:"M25.648,16.85c0.469-0.471,0.469-1.229,0.001-1.697l-9.617-9.617c-0.469-0.469-1.228-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697L18.841,14H7.199C6.535,14,6,14.535,6,15.199v1.602C6,17.463,6.539,18,7.199,18h11.642l-5.638,5.637c-0.469,0.469-0.469,1.229,0,1.697l1.133,1.131c0.469,0.469,1.228,0.469,1.695,0L25.648,16.85z",s:"none",fl:"#333"}},f:{0:{p:"M8.847,16.851c0.469-0.471,0.469-1.229,0.001-1.697l-1.648-1.152l0,0H7h0.199l0,0l0,0C6.535,14.001,6,14.536,6,15.2v1.602c0,0.662,0.539,1.199,1.199,1.199l0,0l0,0H7h0.199l0,0L8.847,16.851z"},
30:{p:"M25.648,16.85c0.469-0.471,0.469-1.229,0.001-1.697L24,14h-3h-1h-1.159l0,0H7.199C6.535,14,6,14.535,6,15.199v1.602C6,17.463,6.539,18,7.199,18h11.642l0,0H20h1h3L25.648,16.85z"},70:{p:"M25.648,16.85c0.469-0.471,0.469-1.229,0.001-1.697l-9.617-9.617c-0.469-0.469-1.228-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697L18.841,14H7.199C6.535,14,6,14.535,6,15.199v1.602C6,17.463,6.539,18,7.199,18h11.642l-5.638,5.637c-0.469,0.469-0.469,1.229,0,1.697l1.133,1.131c0.469,0.469,1.228,0.469,1.695,0L25.648,16.85z",
e:"elastic"},100:{}}}]},"arrow-up":{d:500,it:1,sh:[{i:{a:{p:"M16.85,6.352c-0.471-0.469-1.229-0.469-1.697-0.001l-9.617,9.617c-0.469,0.469-0.469,1.228,0,1.698l1.131,1.131c0.469,0.469,1.229,0.469,1.697,0L14,13.159v11.642C14,25.465,14.535,26,15.199,26h1.602C17.463,26,18,25.461,18,24.801V13.159l5.637,5.638c0.469,0.469,1.229,0.469,1.697,0l1.131-1.133c0.469-0.469,0.469-1.228,0-1.695L16.85,6.352z",s:"none",fl:"#333"}},f:{0:{p:"M16.85,23.153c-0.471-0.469-1.229-0.469-1.697-0.001L14,24.801l0,0V25v-0.199l0,0l0,0C14,25.465,14.535,26,15.199,26h1.602C17.463,26,18,25.461,18,24.801l0,0l0,0V25v-0.199l0,0L16.85,23.153z"},
30:{p:"M16.85,6.352c-0.471-0.469-1.229-0.469-1.697-0.001L14,8v3v1v1.16l0,0v11.641C14,25.465,14.535,26,15.199,26h1.602C17.463,26,18,25.461,18,24.801V13.16l0,0V12v-1V8L16.85,6.352z"},70:{p:"M16.85,6.352c-0.471-0.469-1.229-0.469-1.697-0.001l-9.617,9.617c-0.469,0.469-0.469,1.228,0,1.698l1.131,1.131c0.469,0.469,1.229,0.469,1.697,0L14,13.159v11.642C14,25.465,14.535,26,15.199,26h1.602C17.463,26,18,25.461,18,24.801V13.159l5.637,5.638c0.469,0.469,1.229,0.469,1.697,0l1.131-1.133c0.469-0.469,0.469-1.228,0-1.695L16.85,6.352z",
e:"elastic"},100:{}}}]},balance:{d:1200,it:1,sh:[{i:{a:{p:"M6.024,15.772c-1.138,0.775-2.946,3.878-2.5,4.83c0.658,1.409,5.168,2.218,6.793,0.124c0.851-1.091-1.178-4.266-2.376-4.954c-0.006-0.434,1.125-1.5,1.125-1.5s-1.406,0.094-1.594,0.437c0-0.656,0.136-1.104,0.136-1.104s-1.011,0.511-0.979,1.104c-0.375-0.562-1.688-0.812-1.688-0.812S6.049,15.173,6.024,15.772z",s:"none",o:1,t:"t0,-24",fl:"#333"}},f:{20:{t:"t0,3"},30:{},50:{t:"t0,-2"},55:{},65:{t:""},80:{},85:{o:0},90:{t:"t0,-24"},95:{o:1},100:{}}},{i:{a:{p:"M27,14.888C27,14.397,26.463,14,25.801,14h-1.602C23.537,14,23,14.397,23,14.888C23,15.379,23.276,16,23.552,16s0.5,0.243,0.5,0.488S23.827,17,23.552,17S23,17.478,23,18.067v2.86c0,0.59,0.537,1.066,1.199,1.066h1.602c0.662,0,1.199-0.477,1.199-1.066v-2.86C27,17.478,26.775,17,26.5,17S26,16.733,26,16.488S26.225,16,26.5,16S27,15.379,27,14.888z",
s:"none",o:1,t:"t0,-24",fl:"#333"}},f:{30:{},50:{t:"t0,2"},55:{},65:{t:""},80:{},85:{o:0},90:{t:"t0,-24"},95:{o:1},100:{}}},{i:{a:{p:"M8,5H7l4,15.003H3L7,5H6L2,20.003v1.002C2,22.11,4.237,24,7,24s5-1.89,5-2.995c0-0.865,0-1.002,0-1.002L8,5z",t:"",s:"none",fl:"#333"}},f:{10:{},20:{t:"t0,3"},30:{},50:{t:"t0,-2"},55:{},65:{t:""},100:{}}},{i:{a:{p:"M26,5h-1l4,15.002h-8L25,5h-1l-4,15.002v1.002C20,22.109,22.237,24,25,24s5-1.891,5-2.996c0-0.865,0-1.002,0-1.002L26,5z",t:"",s:"none",fl:"#333"}},f:{10:{},20:{t:"t0,-3"},
30:{},50:{t:"t0,2"},55:{},65:{t:""},100:{}}},{i:{a:{p:"M25.801,6H6.2C5.537,6,5,5.552,5,5s0.537-1,1.2-1h19.601C26.463,4,27,4.447,27,5S26.463,6,25.801,6z",t:"",s:"none",fl:"#333"}},f:{10:{},20:{t:"r-15,16,5"},30:{},50:{t:"r10,16,5"},55:{},65:{t:""},100:{}},fIE:{10:{},20:{t:"r-15,14.5,3.5"},30:{},50:{t:"r10,14.5,3.5"},55:{},65:{t:""},100:{}}},{i:{a:{p:"M18,26.102V3.2C18,2.537,17.463,2,16.801,2h-1.602C14.537,2,14,2.537,14,3.2v22.901c-4.007,0.408-7,1.943-7,2.896c0,0.863,0,0.987,0,1h18v-1C25,28.045,22.007,26.51,18,26.102z",
s:"none",fl:"#333"}},f:{}}]},ban:{d:700,it:1,sh:[{i:{a:{p:"M25.899,6.101c-5.468-5.468-14.331-5.468-19.799,0s-5.468,14.331,0,19.799s14.331,5.468,19.799,0S31.367,11.568,25.899,6.101zM8.222,23.778c-0.483-0.483-0.913-1.001-1.288-1.545C3.979,17.948,4.409,12.035,8.222,8.222c3.813-3.813,9.722-4.234,14.008-1.279L6.934,22.233c1.056,1.445,1.564,1.953,2.833,2.833L25.058,9.771c2.954,4.286,2.533,10.195-1.279,14.008c-3.813,3.813-9.727,4.242-14.012,1.288C9.223,24.691,8.706,24.262,8.222,23.778z",s:"none",fl:"#333"}},
f:{0:{p:"M25.899,6.101c-5.468-5.468-14.331-5.468-19.799,0s-5.468,14.331,0,19.799s14.331,5.468,19.799,0S31.367,11.568,25.899,6.101zM8.222,23.778c-0.483-0.483-0.911-0.999-1.286-1.543c-2.955-4.284-2.527-10.2,1.286-14.014c3.813-3.813,9.722-4.234,14.008-1.279l0,0c1.173,0.815,2.002,1.666,2.828,2.828l0,0c2.954,4.286,2.533,10.195-1.279,14.008c-3.813,3.813-9.727,4.242-14.012,1.288C9.223,24.691,8.706,24.262,8.222,23.778z"},10:{},60:{p:"M25.899,6.101c-5.468-5.468-14.331-5.468-19.799,0s-5.468,14.331,0,19.799s14.331,5.468,19.799,0S31.367,11.568,25.899,6.101zM8.222,23.778c-0.483-0.483-0.913-1.001-1.288-1.545C3.979,17.948,4.409,12.035,8.222,8.222c3.813-3.813,9.722-4.234,14.008-1.279L6.934,22.233c1.056,1.445,1.564,1.953,2.833,2.833L25.058,9.771c2.954,4.286,2.533,10.195-1.279,14.008c-3.813,3.813-9.727,4.242-14.012,1.288C9.223,24.691,8.706,24.262,8.222,23.778z",
e:"bounce"},100:{}}}]},barchart:{d:600,it:1,sh:[{i:{a:{p:"M3.4,4C3.731,4,4,4.269,4,4.6V25.4C4,25.73,4.269,26,4.6,26H29.4c0.33,0,0.6,0.27,0.6,0.6V27.4c0,0.33-0.27,0.6-0.6,0.6H3.2C2.537,28,2,27.463,2,26.801V4.6C2,4.269,2.269,4,2.6,4H3.4zM12,23.4V14.6c0-0.33-0.269-0.6-0.6-0.6H6.6C6.269,14,6,14.27,6,14.6V23.4C6,23.73,6.269,24,6.6,24H11.4C11.731,24,12,23.73,12,23.4zM20,23.4V6.6C20,6.269,19.73,6,19.4,6H14.6C14.269,6,14,6.269,14,6.6V23.4c0,0.33,0.269,0.6,0.6,0.6H19.4C19.73,24,20,23.73,20,23.4zM28,23.4V10.6c0-0.331-0.27-0.6-0.6-0.6H22.6c-0.33,0-0.6,0.269-0.6,0.6V23.4c0,0.33,0.27,0.6,0.6,0.6H27.4C27.73,24,28,23.73,28,23.4z",
s:"none",fl:"#333"}},f:{20:{p:"M3.4,4C3.731,4,4,4.269,4,4.6V25.4C4,25.73,4.269,26,4.6,26H29.4c0.33,0,0.6,0.27,0.6,0.6V27.4c0,0.33-0.27,0.6-0.6,0.6H3.2C2.537,28,2,27.463,2,26.801V4.6C2,4.269,2.269,4,2.6,4H3.4zM12,23.4V6.6C12,6.269,11.731,6,11.4,6H6.6C6.269,6,6,6.269,6,6.6V23.4C6,23.73,6.269,24,6.6,24H11.4C11.731,24,12,23.73,12,23.4zM20,23.4V16.6c0-0.33-0.27-0.6-0.6-0.6H14.6c-0.331,0-0.6,0.27-0.6,0.6V23.4c0,0.33,0.269,0.6,0.6,0.6H19.4C19.73,24,20,23.73,20,23.4zM28,23.4V8.6C28,8.269,27.73,8,27.4,8H22.6C22.27,8,22,8.269,22,8.6V23.4c0,0.33,0.27,0.6,0.6,0.6H27.4C27.73,24,28,23.73,28,23.4z"},
35:{},55:{p:"M3.4,4C3.731,4,4,4.269,4,4.6V25.4C4,25.73,4.269,26,4.6,26H29.4c0.33,0,0.6,0.27,0.6,0.6V27.4c0,0.33-0.27,0.6-0.6,0.6H3.2C2.537,28,2,27.463,2,26.801V4.6C2,4.269,2.269,4,2.6,4H3.4zM12,23.4V20.6c0-0.332-0.269-0.6-0.6-0.6H6.6C6.269,20,6,20.268,6,20.6V23.4C6,23.73,6.269,24,6.6,24H11.4C11.731,24,12,23.73,12,23.4zM20,23.4V10.6c0-0.331-0.27-0.6-0.6-0.6H14.6c-0.331,0-0.6,0.269-0.6,0.6V23.4c0,0.33,0.269,0.6,0.6,0.6H19.4C19.73,24,20,23.73,20,23.4zM28,23.4V16.6c0-0.33-0.27-0.6-0.6-0.6H22.6c-0.33,0-0.6,0.27-0.6,0.6V23.4c0,0.33,0.27,0.6,0.6,0.6H27.4C27.73,24,28,23.73,28,23.4z"},
70:{},90:{p:"M3.4,4C3.731,4,4,4.269,4,4.6V25.4C4,25.73,4.269,26,4.6,26H29.4c0.33,0,0.6,0.27,0.6,0.6V27.4c0,0.33-0.27,0.6-0.6,0.6H3.2C2.537,28,2,27.463,2,26.801V4.6C2,4.269,2.269,4,2.6,4H3.4zM12,23.4V14.6c0-0.33-0.269-0.6-0.6-0.6H6.6C6.269,14,6,14.27,6,14.6V23.4C6,23.73,6.269,24,6.6,24H11.4C11.731,24,12,23.73,12,23.4zM20,23.4V6.6C20,6.269,19.73,6,19.4,6H14.6C14.269,6,14,6.269,14,6.6V23.4c0,0.33,0.269,0.6,0.6,0.6H19.4C19.73,24,20,23.73,20,23.4zM28,23.4V10.6c0-0.331-0.27-0.6-0.6-0.6H22.6c-0.33,0-0.6,0.269-0.6,0.6V23.4c0,0.33,0.27,0.6,0.6,0.6H27.4C27.73,24,28,23.73,28,23.4z"},
100:{}}}]},barcode:{d:800,it:1,sh:[{i:{a:{p:"M4,28H2V4h2V28zM7,4H6v24h1V4zM10,4H8v24h2V4zM14,4h-2v24h2V4zM18,4h-2v24h2V4zM20,4h-1v24h1V4zM24,4h-2v24h2V4zM27,4h-1v24h1V4zM30,4h-1v24h1V4z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M32,2H0V0h32V2z",o:0,s:"none",fl:"#333"}},f:{10:{o:1,t:"t0,9"},20:{t:"t0,26"},30:{o:0,t:"t0,32"},40:{},50:{o:1,t:"t0,23"},60:{t:"t0,6"},70:{o:0,t:"t0,0"},100:{}}}]},beer:{d:1E3,it:1,sh:[{i:{a:{p:"M-14,12v2.501c0,2.638,0.89,3.999,3.613,3.999H-9.5V20c0,0-1.033,1.41-1.033,2v0.501c0,0.294,0.211,0.499,0.517,0.499h8.501C-1.211,23-1,22.795-1,22.501v-0.521C-1,21.002-2,20-2,20v-9c0,0,0.247-0.135,0.339-0.18c0.137-0.065,0.17-0.175,0.145-0.32l-0.259-1.236C-1.799,9.118-1.88,9-2.033,9h-7.321c-0.153,0-0.222,0.032-0.26,0.175L-9.87,10c0,0-1.291,0-1.936,0C-12.838,10-14,11-14,12zM-12.031,14.001V13c0-0.552,0.674-1,1.387-1S-9.5,12-9.5,12v4C-11.05,16-12.031,16-12.031,14.001z",
o:0,s:"none",fl:"#333"}},f:{20:{t:"t13,0",o:1},30:{},40:{t:"t15.5,0"},50:{},70:{t:"",o:0},100:{}}},{i:{a:{p:"M25.612,4c-1.29,0-3.872,0-3.872,0l-0.513-1.65C21.151,2.063,21.014,2,20.707,2H6.065C5.76,2,5.599,2.236,5.55,2.527L5.031,5c-0.05,0.291,0.017,0.509,0.29,0.64C5.507,5.729,6,6,6,6v18c0,0-2,2.003-2,3.959v1.043C4,29.591,4.422,30,5.031,30h17.002c0.611,0,1.033-0.409,1.033-0.998V28c0-1.18-2.066-4-2.066-4v-3h1.773C28.22,21,30,18.278,30,13.001V8C30,6,27.676,4,25.612,4zM21,16V8c0,0,0.863,0,2.289,0s2.773,0.896,2.773,2.001v2C26.063,16,24.1,16,21,16z",
s:"none",fl:"#333"}},f:{10:{t:"t9,0s0.5"},30:{},40:{t:"t4.5,0s0.5"},50:{},70:{t:""},100:{}}}]},bell:{d:200,it:3,sh:[{i:{a:{p:"M17.5,3c0,0.828-0.672,1.5-1.5,1.5c-0.83,0-1.5-0.672-1.5-1.5s0.67-1.5,1.5-1.5C16.828,1.5,17.5,2.172,17.5,3z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M17,28.5c0,1.656-0.448,2-1,2s-1-0.469-1-2c0-1.5,0.447-2,1-2S17,27,17,28.5z",s:"none",fl:"#333"}},f:{15:{t:"r0,15,3"},30:{t:"r14,15,3"},80:{t:"r-14,15,3"},100:{t:"r0,15,3"}},fIE:{15:{t:"r0,13.5,1.5"},30:{t:"r14,13.5,1.5"},80:{t:"r-14,13.5,1.5"},
100:{t:"r0,13.5,1.5"}}},{i:{a:{p:"M5.5,26c0,0-0.34-2.06,0-3c0.443-1.225,1.981-1.806,2.5-3c1.605-3.697-0.271-8.379,1.5-12c0.518-1.059,1.411-2.049,2.5-2.5c2.464-1.021,5.536-1.021,8,0c1.089,0.451,1.982,1.441,2.5,2.5c1.771,3.621-0.105,8.303,1.5,12c0.518,1.194,2.057,1.775,2.5,3c0.34,0.94,0,3,0,3H5.5z",s:"none",fl:"#333"}},f:{25:{t:"r13,15,3"},50:{t:"r0,15,3"},75:{t:"r-13,15,3"},100:{t:"r0,15,3"}},fIE:{25:{t:"r13,13.5,1.5"},50:{t:"r0,13.5,1.5"},75:{t:"r-13,13.5,1.5"},100:{t:"r0,13.5,1.5"}}}]},biohazard:{d:1400,
it:1,sh:[{i:{a:{p:"M12.902,13.922c1.843-1.21,4.296-1.211,6.139,0c0.521-0.375,0.961-0.82,1.324-1.35c-2.603-1.903-6.188-1.905-8.791,0C11.766,12.953,12.521,13.651,12.902,13.922zM8.615,17.705c-0.347,3.201,1.447,6.315,4.394,7.613c0.282-0.571,0.45-1.19,0.509-1.824c-1.97-0.99-3.197-3.114-3.07-5.316C10.016,17.938,9.123,17.74,8.615,17.705zM18.988,25.408c2.945-1.296,4.745-4.412,4.396-7.613c-0.64,0.044-1.251,0.209-1.832,0.475c0.127,2.201-1.102,4.324-3.07,5.314C18.496,23.709,18.709,24.827,18.988,25.408z",s:"none",
t:"",fl:"#333"}},f:{0:{t:""},20:{t:"r1080,16,18.3"},100:{}},fIE:{0:{t:""},20:{t:"r1080,14.5,16.8"},100:{}}},{i:{a:{p:"M23.225,14.404c2.006-4.889-1.512-10.462-6.772-10.783c3.062,0.243,5.493,2.884,5.493,5.954c0,3.134-2.534,5.796-5.664,5.956v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,5.213-3.462,7.957-1.875c2.742,1.582,3.752,5.014,2.371,7.811c1.896-3.689,0.578-8.264-3.055-10.362C25.174,14.856,24.207,14.537,23.225,14.404zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-5.457-2.673-5.595-5.676c-0.145-3.153,2.292-5.954,5.441-6.226c-5.208,0.345-8.692,5.839-6.764,10.701c-0.95,0.139-1.891,0.455-2.773,0.965c-3.607,2.083-4.93,6.611-3.089,10.287c-1.33-2.783-0.311-6.17,2.406-7.738C7.996,16.245,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.396,2.801,0.393,6.242-2.354,7.826c-2.733,1.578-6.2,0.748-7.935-1.83c2.252,3.471,6.859,4.609,10.483,2.514c0.879-0.504,1.619-1.16,2.214-1.908c0.604,0.787,1.372,1.471,2.287,1.998c3.629,2.094,8.242,0.953,10.49-2.527c-1.732,2.592-5.205,3.43-7.943,1.85C18.033,26.676,17.032,23.201,18.469,20.391z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0,p:"M21.046,15.687L21.046,15.687l-2.23,0.839c0,0-1.049,0.4-2.534-0.995v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c-0.355-1.87,0.464-2.404,0.464-2.404L21.046,15.687L21.046,15.687L21.046,15.687zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-0.911,1.017-2.437,0.635-2.437,0.635l-2.117-0.706l0,0l0,0l0,0l1.716,1.468C12.769,16.926,13.989,18.279,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.98,0.598,1.98,1.761,1.98,1.761L16,24.076V24.02l0,0l0,0l0,0l0.394-1.964C16.394,22.056,16.565,21.102,18.469,20.391z"},
10:{},30:{o:1,p:"M22.438,14.656c0.4-1.607,0.922-2.422,0.339-5.245c0.355,1.666,0.072,2.722-0.854,3.87c-0.827,1.025-2.578,2.016-5.64,2.25v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,2.973-3.494,4.191-3.666c1.162-0.164,2.383-0.227,3.672,1.063C25.531,16.078,23.932,15.331,22.438,14.656C22.438,14.656,23.42,14.789,22.438,14.656zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-1.731-0.032-2.991-0.487-3.958-1.125c-1.016-0.671-2.658-1.82-2.47-4.513c-0.175,2.51-0.088,4.042,0.51,4.86l0,0c0,0-2.391,0.174-4.126,2.061c2.498-1.296,4.119-0.476,5.015,0C11.543,17.324,12.407,18.317,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c0.893,1.876,1.113,2.342,1.179,3.631c0.078,1.518-0.828,2.906-2.953,4.469C13.391,27.857,16,25.607,16,25.607l0,0l0,0c0.5,0.906,2.821,2.428,4.375,3.031c-2.219-1.531-3.094-3.139-3.109-4.625C17.255,22.947,17.431,22.553,18.469,20.391z"},
40:{p:"M23.225,14.404c2.006-4.889-1.512-10.462-6.772-10.783c3.062,0.243,5.493,2.884,5.493,5.954c0,3.134-2.534,5.796-5.664,5.956v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,5.213-3.462,7.957-1.875c2.742,1.582,3.752,5.014,2.371,7.811c1.896-3.689,0.578-8.264-3.055-10.362C25.174,14.856,24.207,14.537,23.225,14.404zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-5.457-2.673-5.595-5.676c-0.145-3.153,2.292-5.954,5.441-6.226c-5.208,0.345-8.692,5.839-6.764,10.701c-0.95,0.139-1.891,0.455-2.773,0.965c-3.607,2.083-4.93,6.611-3.089,10.287c-1.33-2.783-0.311-6.17,2.406-7.738C7.996,16.245,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.396,2.801,0.393,6.242-2.354,7.826c-2.733,1.578-6.2,0.748-7.935-1.83c2.252,3.471,6.859,4.609,10.483,2.514c0.879-0.504,1.619-1.16,2.214-1.908c0.604,0.787,1.372,1.471,2.287,1.998c3.629,2.094,8.242,0.953,10.49-2.527c-1.732,2.592-5.205,3.43-7.943,1.85C18.033,26.676,17.032,23.201,18.469,20.391z"},
50:{p:"M22.656,13.875c-0.818-3.591,2-7.344,5.063-9c-2.438,0.156-5.827,3.92-6.344,5.313c-0.672,1.811-1.964,5.183-5.093,5.343v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,3.91-3.369,5.221-2.996c1.445,0.411,2.383,3.83,1.002,6.627c2.656-2.531,1.69-6.805,0.719-7.781C24.933,14.835,23.639,14.008,22.656,13.875zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-4.529-1.209-4.918-2.309c-0.531-1.5,0.486-4.564,3.375-5.5c-3.125,0.031-6.656,3.094-4.25,7.313c-0.574-0.77-2.034-0.427-2.719,0.281c-1.733,1.791-4.531-0.031-5.598-0.344c0.692,1.469,3.663,4.1,6.379,2.531C10.638,15.905,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.976,2.898,1.266,5.029,0.32,5.836c-1.063,0.906-4.275,0.455-5.303-2.063c0.365,3.5,4.014,3.865,5.053,3.719c0.631-0.089,2.187-0.939,2.781-1.688c0.844,0.406,1.538,1.25,2.453,1.777c1.469,0.938,4.891,0.254,7.016,1.535c-0.844-2.281-5.384-2.563-6.438-3.188C18.329,25.625,17.032,23.201,18.469,20.391z"},
60:{p:"M22.531,14.688c2.006-4.889-3.438-6.875-6.094-6.281c2.919,0.186,4.854,2.903,4.625,4.5c-0.193,1.35-1.651,2.464-4.781,2.625v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,4.873-2.713,7.16-2.996c2-0.248,4.75-4.654,4.031-7.498c-1.344,3.438-2.799,5.902-3.938,5.938C25.015,15.283,23.514,14.82,22.531,14.688zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-5.122-0.98-5.26-3.983C10.201,8.392,6.125,2,2.719,3.621c5.063,0.254,6.063,6.035,6.5,11.035C9.135,13.7,7.225,15.35,6.906,15.781c-0.615,0.834-2,3.125-0.875,6.406c-0.07-2.717,2.229-5.247,3.292-5.448C10.569,16.502,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.507,5.057-1.274,4.586-3.336,6.117c-1.336,0.992-0.25,1.813-4.313,4.094c3.031,0.688,4.5-3.25,6.344-2.969c1.002,0.152,3.155-0.439,3.75-1.188c0.678,0.476,2.123,0.728,2.75,0.781c1.125,0.096,2.688-0.031,5.438-2.906c-2.031,1.688-5.789,1.87-6.602,0.431C17.188,24.006,17.032,23.201,18.469,20.391z"},
70:{p:"M22.656,13.875c-0.818-3.591,2-7.344,5.063-9c-2.438,0.156-5.827,3.92-6.344,5.313c-0.672,1.811-1.964,5.183-5.093,5.343v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,3.91-3.369,5.221-2.996c1.445,0.411,2.383,3.83,1.002,6.627c2.656-2.531,1.69-6.805,0.719-7.781C24.933,14.835,23.639,14.008,22.656,13.875zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-4.529-1.209-4.918-2.309c-0.531-1.5,0.486-4.564,3.375-5.5c-3.125,0.031-6.656,3.094-4.25,7.313c-0.574-0.77-2.034-0.427-2.719,0.281c-1.733,1.791-4.531-0.031-5.598-0.344c0.692,1.469,3.663,4.1,6.379,2.531C10.638,15.905,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.976,2.898,1.266,5.029,0.32,5.836c-1.063,0.906-4.275,0.455-5.303-2.063c0.365,3.5,4.014,3.865,5.053,3.719c0.631-0.089,2.187-0.939,2.781-1.688c0.844,0.406,1.538,1.25,2.453,1.777c1.469,0.938,4.891,0.254,7.016,1.535c-0.844-2.281-5.384-2.563-6.438-3.188C18.329,25.625,17.032,23.201,18.469,20.391z"},
80:{p:"M22.531,14.688c2.006-4.889-3.438-6.875-6.094-6.281c2.919,0.186,4.854,2.903,4.625,4.5c-0.193,1.35-1.651,2.464-4.781,2.625v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,4.873-2.713,7.16-2.996c2-0.248,4.75-4.654,4.031-7.498c-1.344,3.438-2.799,5.902-3.938,5.938C25.015,15.283,23.514,14.82,22.531,14.688zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-5.122-0.98-5.26-3.983C10.201,8.392,6.125,2,2.719,3.621c5.063,0.254,6.063,6.035,6.5,11.035C9.135,13.7,7.225,15.35,6.906,15.781c-0.615,0.834-2,3.125-0.875,6.406c-0.07-2.717,2.229-5.247,3.292-5.448C10.569,16.502,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.507,5.057-1.274,4.586-3.336,6.117c-1.336,0.992-0.25,1.813-4.313,4.094c3.031,0.688,4.5-3.25,6.344-2.969c1.002,0.152,3.155-0.439,3.75-1.188c0.678,0.476,2.123,0.728,2.75,0.781c1.125,0.096,2.688-0.031,5.438-2.906c-2.031,1.688-5.789,1.87-6.602,0.431C17.188,24.006,17.032,23.201,18.469,20.391z"},
90:{p:"M23.225,14.404c2.006-4.889-1.512-10.462-6.772-10.783c3.062,0.243,5.493,2.884,5.493,5.954c0,3.134-2.534,5.796-5.664,5.956v1.223c1.111,0.177,1.788,1.354,1.409,2.407l1.118,0.646c1.727-2.609,5.213-3.462,7.957-1.875c2.742,1.582,3.752,5.014,2.371,7.811c1.896-3.689,0.578-8.264-3.055-10.362C25.174,14.856,24.207,14.537,23.225,14.404zM13.22,19.766l1.08-0.623c-0.362-1.003,0.27-2.137,1.306-2.367v-1.248c-2.999-0.184-5.457-2.673-5.595-5.676c-0.145-3.153,2.292-5.954,5.441-6.226c-5.208,0.345-8.692,5.839-6.764,10.701c-0.95,0.139-1.891,0.455-2.773,0.965c-3.607,2.083-4.93,6.611-3.089,10.287c-1.33-2.783-0.311-6.17,2.406-7.738C7.996,16.245,11.504,17.117,13.22,19.766zM18.469,20.391l-1.128-0.652c-0.712,0.797-1.997,0.784-2.701-0.018l-1.085,0.631c1.396,2.801,0.393,6.242-2.354,7.826c-2.733,1.578-6.2,0.748-7.935-1.83c2.252,3.471,6.859,4.609,10.483,2.514c0.879-0.504,1.619-1.16,2.214-1.908c0.604,0.787,1.372,1.471,2.287,1.998c3.629,2.094,8.242,0.953,10.49-2.527c-1.732,2.592-5.205,3.43-7.943,1.85C18.033,26.676,17.032,23.201,18.469,20.391z"},
100:{}}}]},bold:{d:800,it:1,sh:[{i:{a:{p:"M21.827,27.214c-0.76,0.311-2.577,0.747-5.985,0.747H4.592v-0.65h0.896c1.699-0.069,2.553-0.549,2.549-3.568V8.344C8,5.679,7.542,4.866,5.488,4.775H4.592v-0.65h10.301c1.922,0,3.463,0.141,4.623,0.422c1.758,0.422,5.38,1.798,5.414,5.941c0.028,3.461-2.889,4.852-4.307,5.309c1.652,0.352,5.414,1.403,5.414,5.643C26.037,25.178,22.833,26.803,21.827,27.214zM14.734,15.094c2.162-0.124,4.578-0.103,5.836-2.25c1.143-1.951,0.895-4.464-1.02-6.064c-2.238-1.872-5.801-1.622-8.139-1.09v9.158C11.412,14.848,13.833,15.146,14.734,15.094zM11.412,16.465v9.773c1.359,0.316,2.701,0.475,4.025,0.475c2.121,0,3.738-0.478,4.852-1.433s1.647-2.137,1.67-3.542c0.021-1.311-0.552-3.506-3.217-4.693C16.396,16,12.396,16.323,11.412,16.465z",
s:"none",fl:"#333"}},f:{15:{p:"M22.027,27.237c-0.86,0.27-2.423,0.724-6.186,0.724H4.592v-0.65h0.896c1.866-0.258,2.595-0.383,2.546-3.278L8.03,8.031C8.021,5.073,7.396,4.99,5.488,4.775H4.592v-0.65h10.301c1.922,0,3.516,0.068,4.679,0.17c4.846,0.424,6.074,3.987,6.077,5.716c0.007,4.063-4.168,4.855-5.586,5.313c1.652,0.352,6.678,1.33,6.678,6.143C26.74,25.32,23.064,26.912,22.027,27.237zM14.729,14.815c1.369-0.109,3.248-0.222,4.521-2.36c0.813-1.364,0.521-4.322-0.414-5.346C17.425,5.564,16,5.455,13.609,5.461v9.387C13.609,14.848,13.828,14.887,14.729,14.815zM13.646,16.257l-0.042,8.769c0.042,0.356,0.333,1.606,1.426,1.625c2.122,0.036,3.129-0.451,4.195-1.459c0.364-0.345,1.275-1.805,1.314-3.209c0.043-1.538-0.441-3.897-2.147-4.878C17.063,16.341,14.979,16.118,13.646,16.257z"},
55:{},70:{p:"M21.827,27.214c-0.76,0.311-2.577,0.747-5.985,0.747H4.592v-0.65h0.896c1.699-0.069,2.553-0.549,2.549-3.568V8.344C8,5.679,7.542,4.866,5.488,4.775H4.592v-0.65h10.301c1.922,0,3.463,0.141,4.623,0.422c1.758,0.422,5.38,1.798,5.414,5.941c0.028,3.461-2.889,4.852-4.307,5.309c1.652,0.352,5.414,1.403,5.414,5.643C26.037,25.178,22.833,26.803,21.827,27.214zM14.734,15.094c2.162-0.124,4.578-0.103,5.836-2.25c1.143-1.951,0.895-4.464-1.02-6.064c-2.238-1.872-5.801-1.622-8.139-1.09v9.158C11.412,14.848,13.833,15.146,14.734,15.094zM11.412,16.465v9.773c1.359,0.316,2.701,0.475,4.025,0.475c2.121,0,3.738-0.478,4.852-1.433s1.647-2.137,1.67-3.542c0.021-1.311-0.552-3.506-3.217-4.693C16.396,16,12.396,16.323,11.412,16.465z"},
100:{}}}]},bolt:{d:400,it:2,sh:[{i:{a:{p:"M10.2,15.2L13,2h7.098L17,10l6.368-1.708C23.909,8.178,24.149,8.495,23.904,9l-9.994,20.644c-0.245,0.505-0.343,0.469-0.218-0.08l3.507-15.489L10.8,15.9C10.26,16.019,10.099,15.754,10.2,15.2z",o:1,s:"none",fl:"#333"}},f:{0:{p:"M13,2.3V2h7.098L20,2.3h-0.1c-0.2,0-0.2,0-0.301,0l-0.351-0.012C19.399,2.2,19,2.3,19,2.3h-0.2h-4.9C13.5,2.3,13.5,2.3,13,2.3z"},10:{p:"M10.2,15.2L13,2h7.098L17,10l0,0c-0.2,0.7,0.045,0.195-0.2,0.7l-1.4,4c0.15-0.088-0.218-0.08-0.218-0.08l-0.232,0.092L10.8,15.9C10.26,16.019,10.099,15.754,10.2,15.2z"},
15:{p:"M10.2,15.2L13,2h7.098L17,10l6.368-1.708C23.909,8.178,24.149,8.495,23.904,9l-1.986,3.98c-0.244,0.505-0.342,0.469-0.218-0.08l-4.501,1.175L10.8,15.9C10.26,16.019,10.099,15.754,10.2,15.2z"},25:{p:"M10.2,15.2L13,2h7.098L17,10l6.368-1.708C23.909,8.178,24.149,8.495,23.904,9l-9.994,20.644c-0.245,0.505-0.343,0.469-0.218-0.08l3.507-15.489L10.8,15.9C10.26,16.019,10.099,15.754,10.2,15.2z"},45:{o:0},60:{o:1},80:{o:0},100:{o:1}}}]},bookmark:{d:1E3,it:1,sh:[{i:{a:{p:"M25.063,29.785L16.001,22l-9.063,7.785C6.42,30.199,6,29.998,6,29.336V3.2C6,2.537,6.537,2,7.2,2h17.601C25.463,2,26,2.537,26,3.2v26.136C26,29.998,25.58,30.199,25.063,29.785z",
s:"none",fl:"#333"}},f:{0:{p:"M25.063,3.449L16.001,3L6.938,3.449C6.42,3.863,6,3.662,6,3v0.2C6,2.537,6.537,2,7.2,2h17.601C25.463,2,26,2.537,26,3.2V3C26,3.662,25.58,3.863,25.063,3.449z"},20:{p:"M25.063,29.785L16.001,22l-9.063,7.785C6.42,30.199,6,29.998,6,29.336V3.2C6,2.537,6.537,2,7.2,2h17.601C25.463,2,26,2.537,26,3.2v26.136C26,29.998,25.58,30.199,25.063,29.785z"},35:{p:"M25.063,29.785c-4.979-2.077-10.688-7.743-10.688-7.743S7.417,26.542,6,28.458C5.482,28.872,5.113,28.614,4.875,28C1.708,19.833,11.083,10.208,6.5,2.917C6.5,2.716,6.537,2,7.2,2h17.601c0.662,0,1.823,0.583,1.907,1.292c4.125,9.583-5.916,16.417-1.125,26.042C25.852,29.873,25.677,30.041,25.063,29.785z"},
60:{p:"M26.313,27.91c-4.229-4.243-8.563-5.827-8.563-5.827s-8.833,7.459-10.875,7.715c-0.518,0.414-0.895,0.112-0.5-0.465c4.583-6.708-4.833-19.417-1.042-26.25C5.333,2.883,6.537,2,7.2,2h17.601c0.662,0,0.615,0.083,0.699,0.792c-3.875,5.792,3.083,14.708,1.75,24.125C27.165,27.514,26.782,28.382,26.313,27.91z"},75:{p:"M25.063,29.785L16.001,22l-9.063,7.785C6.42,30.199,6,29.998,6,29.336V3.2C6,2.537,6.537,2,7.2,2h17.601C25.463,2,26,2.537,26,3.2v26.136C26,29.998,25.58,30.199,25.063,29.785z"},100:{}}}]},bootstrap:{d:0,
it:1,sh:[{i:{a:{p:"M20.35,20c0,2.847-2.777,3-2.777,3H12v-6h5.319C17.319,17,20.35,17.151,20.35,20zM19.454,11.535c0-2.467-2.521-2.517-2.521-2.517H12V14h4.883C16.883,14,19.454,14,19.454,11.535zM30,5v22c0,1.656-1.344,3-3,3H5c-1.657,0-3-1.344-3-3V5c0-1.657,1.343-3,3-3h22C28.656,2,30,3.343,30,5zM25,20.408c0-1.637-0.432-4.396-3.699-5.284c2.166-0.913,2.699-2.708,2.698-4.821C23.998,8.641,22.84,6,18.758,6H8v20.025h11.044C22.36,26.025,25,23.432,25,20.408z",s:"none",fl:"#3C1B43"}},f:{}}]},briefcase:{d:1E3,it:1,
sh:[{i:{a:{p:"M27.938,8.002L22,8V6c0.033-1.969-1.969-2-1.969-2H12c-2,0-2,2-2,2v2L4,8.002C1.971,8.002,2,10,2,10v4.907c0,0,7.615,2.593,14,2.593c6.977,0,14-2.625,14-2.625V10C30,7.906,27.938,8.002,27.938,8.002zM18,16h-4v-1c0-0.552,0.448-1,1-1h2c0.555,0,1,0.448,1,1V16zM20,7v1h-8V7c0-1.1,1-1,1-1h6C20.063,6,20,7,20,7z",s:"none",fl:"#333"}},f:{15:{p:"M27.938,9.024H22V8.562C22.033,8.107,19.031,8,19.031,8H13c-2,0-3,0.562-3,0.562v0.462H4c-2.029,0-2,0.461-2,0.461v0.901c0,0,7.615,0.714,14,0.714c6.977,0,14-0.722,14-0.722V9.485C30,9.001,27.938,9.024,27.938,9.024zM18,10.87h-4v-0.231c0-0.127,0.448-0.23,1-0.23h2c0.555,0,1,0.104,1,0.23V10.87zM19,8.792v0.231h-6V8.792c0-0.254,1-0.23,1-0.23h4C19.063,8.562,19,8.792,19,8.792z"},
18:{p:"M27.938,8.908H22V8.754C22.033,8.603,19.031,8.6,19.031,8.6H13c-2,0-3,0.154-3,0.154v0.154H4c-2.029,0-2,0.153-2,0.153v0.301c0,0,7.615,0.238,14,0.238c6.977,0,14-0.241,14-0.241V9.062C30,8.9,27.938,8.908,27.938,8.908zM18,9.523h-4V9.446c0-0.042,0.448-0.077,1-0.077h2c0.555,0,1,0.035,1,0.077V9.523zM19,8.831v0.077h-6V8.831c0-0.085,1-0.077,1-0.077h4C19.063,8.754,19,8.831,19,8.831z"},30:{p:"M28.1,4.1L21,2.5l0,0L19,2h-6c-2,0.3-2,0.5-2,0.5l0,0l-7,2C2,5.1,2,5.2,2,5.2v3.703c0,0,7.615,0.238,14,0.238c6.977,0,14-0.241,14-0.241V5.2C30,5.039,28.1,4.1,28.1,4.1zM18,9.064h-4l0,0c0-0.042,0,0,1-0.023h2C17.6,9.041,18,9.021,18,9.064L18,9.064zM19,2L19,2h-6l0,0c0.1-0.008,1-0.008,1-0.008h4C19.063,1.992,19,2,19,2z"},
70:{},82:{p:"M27.938,8.908H22V8.754C22.033,8.603,19.031,8.6,19.031,8.6H13c-2,0-3,0.154-3,0.154v0.154H4c-2.029,0-2,0.153-2,0.153v0.301c0,0,7.615,0.238,14,0.238c6.977,0,14-0.241,14-0.241V9.062C30,8.9,27.938,8.908,27.938,8.908zM18,9.523h-4V9.446c0-0.042,0.448-0.077,1-0.077h2c0.555,0,1,0.035,1,0.077V9.523zM19,8.831v0.077h-6V8.831c0-0.085,1-0.077,1-0.077h4C19.063,8.754,19,8.831,19,8.831z"},85:{p:"M27.938,9.024H22V8.562C22.033,8.107,19.031,8,19.031,8H13c-2,0-3,0.562-3,0.562v0.462H4c-2.029,0-2,0.461-2,0.461v0.901c0,0,7.615,0.714,14,0.714c6.977,0,14-0.722,14-0.722V9.485C30,9.001,27.938,9.024,27.938,9.024zM18,10.87h-4v-0.231c0-0.127,0.448-0.23,1-0.23h2c0.555,0,1,0.104,1,0.23V10.87zM19,8.792v0.231h-6V8.792c0-0.254,1-0.23,1-0.23h4C19.063,8.562,19,8.792,19,8.792z"},
100:{p:"M27.938,8.002L22,8V6c0.033-1.969-1.969-2-1.969-2H12c-2,0-2,2-2,2v2L4,8.002C1.971,8.002,2,10,2,10v4.907c0,0,7.615,2.593,14,2.593c6.977,0,14-2.625,14-2.625V10C30,7.906,27.938,8.002,27.938,8.002zM18,16h-4v-1c0-0.552,0.448-1,1-1h2c0.555,0,1,0.448,1,1V16zM20,7v1h-8V7c0-1.1,1-1,1-1h6C20.063,6,20,7,20,7z"}}},{i:{a:{p:"M26,27H3V11h23V27z",t:"t4,-2",o:0,s:"none",fl:"#333"}},f:{0:{o:0,t:"t-10,-28"},30:{},40:{o:0.6,t:"t4,-2"},85:{},90:{o:0},100:{}}},{i:{a:{p:"M26,27H3V11h23V27z",t:"t2,-1",o:0,s:"none",
fl:"#333"}},f:{0:{o:0,t:"t0,-28"},40:{},50:{o:0.6,t:"t2,-1"},85:{},90:{o:0},100:{}}},{i:{a:{p:"M26,27H3V11h23V27z",o:0,s:"none",fl:"#333"}},f:{0:{o:0,t:"t10,-28"},50:{},60:{o:0.6,t:""},85:{},90:{o:0},100:{}}},{i:{a:{p:"M30,26V16c0,0-5.405,2.5-14,2.5C8.098,18.5,2,16,2,16v10c0,2.031,2,2,2,2l24-0.001C30.156,28,30,26,30,26zM18,21c-0.017,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-1h4V21z",s:"none",fl:"#333"}},f:{}}]},brush:{d:1400,it:1,sh:[{i:{a:{p:"M8,32H0l0.021-8L8,32z",o:"0",s:"none",fl:"#333"}},f:{0:{o:0.6},
50:{p:"M66,34H-2v-68L66,34z"},51:{o:0},80:{p:"M8,32H0l0.021-8L8,32z"},100:{}}},{i:{a:{p:"M28.729,5.628c-1.483,1.742-7.868,8.891-9.195,10.609c-0.929,1.204-2.122,3.535-4.945,4.942c-0.252,0.126-0.452,0.465-0.707,0.707c-0.402,0.382-0.948,0.473-1.417,0.004l-1.415-1.414c-0.468-0.469-0.401-1.036,0.004-1.417c0.257-0.243,0.58-0.453,0.707-0.706c1.408-2.824,3.741-4.016,4.943-4.945c1.719-1.327,8.865-7.71,10.607-9.192c0.42-0.357,1.043-0.371,1.414,0C29.096,4.587,29.086,5.208,28.729,5.628zM11.755,22.601l-1.415-1.414c-5.153-1.062-3.535,4.949-7.75,6.391C6.805,28.965,13.169,26.843,11.755,22.601z",
t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{p:"M28.729,5.628c-1.483,1.742-7.868,8.891-9.195,10.609c-0.929,1.204-2.122,3.535-4.945,4.942c-0.252,0.126-0.452,0.465-0.707,0.707c-0.402,0.382-0.948,0.473-1.417,0.004l-1.415-1.414c-0.468-0.469-0.401-1.036,0.004-1.417c0.257-0.243,0.58-0.453,0.707-0.706c1.408-2.824,3.741-4.016,4.943-4.945c1.719-1.327,8.865-7.71,10.607-9.192c0.42-0.357,1.043-0.371,1.414,0C29.096,4.587,29.086,5.208,28.729,5.628zM11.755,22.601l-1.415-1.414C7.083,20.5,3.563,24.854,5,28C7.896,29.729,12.917,26.042,11.755,22.601z"},
5:{t:"t-6,-10r10,6,26"},10:{t:"t10,6r-10,6,26"},20:{t:"t-4,-24r10,6,26"},30:{t:"t24,4r-10,6,26"},35:{t:"t10,-24r10,6,26"},40:{t:"t24,-10r-10,6,26"},45:{t:"t22,-24r10,6,26"},46:{p:"M28.729,5.628c-1.483,1.742-7.868,8.891-9.195,10.609c-0.929,1.204-2.122,3.535-4.945,4.942c-0.252,0.126-0.452,0.465-0.707,0.707c-0.402,0.382-0.948,0.473-1.417,0.004l-1.415-1.414c-0.468-0.469-0.401-1.036,0.004-1.417c0.257-0.243,0.58-0.453,0.707-0.706c1.408-2.824,3.741-4.016,4.943-4.945c1.719-1.327,8.865-7.71,10.607-9.192c0.42-0.357,1.043-0.371,1.414,0C29.096,4.587,29.086,5.208,28.729,5.628zM11.755,22.601l-1.415-1.414c-5.153-1.062-3.535,4.949-7.75,6.391C6.805,28.965,13.169,26.843,11.755,22.601z"},
50:{t:""},100:{}}}]},bug:{d:1E3,it:1,sh:[{i:{a:{p:"M13.573,2.981c0.098,0.352-0.155,0.88-0.744,0.937c-0.204,0.02-0.794-0.146-0.778-0.908c0.053-0.668,0.98-1.043,1.706-0.581c0.777,0.495,1.008,1.425,1.03,2.28c0.797-0.43,2.003-0.378,2.435-0.131c-0.006-0.527,0.152-1.746,1.102-2.278c0.632-0.354,1.56-0.19,1.621,0.696c-0.055,0.73-0.565,0.816-0.769,0.791c-0.587-0.075-0.773-0.538-0.664-0.887c-0.946,0.147-1.089,1.392-1.105,1.715c0,0.004,2.043,0.69,2.198,3.241c0.557,0.366,1.074,0.821,1.54,1.34l4.044-4.223c0.997-0.878,2.19,0.473,1.372,1.386l-4.262,4.453c0.651,1.183,1.089,2.566,1.223,4.065l5.85-0.085c1.328,0.206,1.241,1.859,0.008,1.988l-5.909,0.082c-0.198,1.137-0.697,2.523-1.351,3.896l4.486,4.534c0.939,1.119-0.542,2.257-1.369,1.421l-4.095-4.136c-1.912,3.229-4.382,5.544-5.215,2.685c-0.877,2.926-3.268,0.706-5.122-2.462l-4.006,4.176c-0.808,0.811-2.297-0.206-1.371-1.382l4.423-4.613c-0.643-1.373-1.132-2.763-1.332-3.904l-5.9,0.086c-1.252-0.02-1.277-1.951-0.003-1.983l5.848-0.084c0.131-1.502,0.557-2.896,1.208-4.099L5.386,6.667C4.521,5.729,5.705,4.388,6.75,5.238l4.065,4.108c0.557-0.638,1.189-1.173,1.881-1.589c0.083-1.284,0.82-2.38,1.881-2.947C14.598,4.246,14.514,3.159,13.573,2.981z",
t:"t0,0r22s1",s:"none",fl:"#333"}},f:{10:{t:"r45s0.4"},20:{t:"t10,-10r45s0.4"},21:{t:"t10,-10r180s0.4"},30:{t:"t10,10r180s0.4"},31:{t:"t10,10r270s0.4"},40:{t:"t-10,10r270s0.4"},41:{t:"t-10,10r360s0.4"},50:{t:"t-10,-10r360s0.4"},51:{t:"t-10,-10r135s0.4"},60:{t:"t0,0r135s0.4"},61:{t:"t0,0r22s0.4"},70:{t:"t0,0r22s1"},100:{}}}]},calendar:{d:1E3,it:1,sh:[{i:{a:{p:"M11,7.366C11,8.269,10.373,9,9.6,9H8.4C7.627,9,7,8.269,7,7.366V3.634C7,2.731,7.627,2,8.4,2H9.6C10.373,2,11,2.731,11,3.634V7.366zM25,3.634C25,2.731,24.373,2,23.6,2H22.4C21.627,2,21,2.731,21,3.634v3.732C21,8.269,21.627,9,22.4,9H23.6C24.373,9,25,8.269,25,7.366V3.634z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M28,6h-2v1.199C26,8.746,25.146,10,23.6,10H22.4C20.854,10,20,8.746,20,7.199V6h-8v1.199C12,8.746,11.146,10,9.6,10H8.4C6.854,10,6,8.746,6,7.199V6H4C2.896,6,2,6.895,2,8v20c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.895,29.105,6,28,6zM28,28H4V12h24V28zM15.031,20.24c0.168,0.145,0.303,0.314,0.402,0.506c0.1,0.193,0.149,0.447,0.149,0.768c0,0.361-0.07,0.697-0.213,1.012c-0.143,0.313-0.363,0.58-0.659,0.805c-0.289,0.217-0.627,0.383-1.018,0.498S12.828,24,12.271,24c-0.635,0-1.181-0.049-1.637-0.148s-0.826-0.213-1.111-0.336V21.83h0.201c0.295,0.178,0.648,0.334,1.06,0.465c0.411,0.129,0.787,0.195,1.127,0.195c0.199,0,0.416-0.018,0.649-0.051c0.234-0.031,0.432-0.104,0.594-0.215c0.127-0.086,0.229-0.189,0.305-0.311c0.075-0.123,0.113-0.297,0.113-0.527c0-0.225-0.052-0.398-0.155-0.52c-0.103-0.123-0.238-0.211-0.407-0.262c-0.169-0.055-0.371-0.084-0.608-0.09c-0.237-0.004-0.458-0.006-0.661-0.006h-0.422v-1.373h0.438c0.269,0,0.506-0.01,0.712-0.027c0.207-0.018,0.382-0.055,0.526-0.117c0.151-0.064,0.265-0.152,0.341-0.262c0.075-0.107,0.113-0.268,0.113-0.479c0-0.154-0.04-0.277-0.119-0.372s-0.179-0.171-0.299-0.226c-0.134-0.062-0.292-0.104-0.475-0.124s-0.339-0.03-0.47-0.03c-0.323,0-0.673,0.057-1.052,0.168c-0.378,0.112-0.744,0.271-1.099,0.482h-0.19v-1.665c0.282-0.114,0.665-0.224,1.15-0.329C11.379,16.052,11.87,16,12.369,16c0.484,0,0.909,0.041,1.274,0.126c0.364,0.084,0.665,0.197,0.902,0.338c0.282,0.169,0.492,0.372,0.63,0.612c0.138,0.241,0.206,0.523,0.206,0.847c0,0.427-0.133,0.808-0.397,1.144s-0.613,0.549-1.047,0.641v0.072c0.175,0.025,0.361,0.072,0.557,0.145C14.69,19.996,14.869,20.104,15.031,20.24zM22.908,24h-5.324v-1.395h1.682v-4.215h-1.682V17.09c0.258,0,0.504-0.017,0.74-0.047c0.234-0.03,0.432-0.082,0.59-0.157c0.184-0.089,0.324-0.207,0.418-0.35c0.092-0.144,0.145-0.321,0.16-0.536h1.771v6.605h1.645V24z",
o:1,t:"",s:"none",fl:"#333"}},f:{0:{t:""},20:{t:"t0,12r20,2,5",o:0},80:{o:0,t:""},100:{o:1}}},{i:{a:{p:"M28,6h-2v1.199C26,8.746,25.146,10,23.6,10H22.4C20.854,10,20,8.746,20,7.199V6h-8v1.199C12,8.746,11.146,10,9.6,10H8.4C6.854,10,6,8.746,6,7.199V6H4C2.896,6,2,6.895,2,8v20c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.895,29.105,6,28,6zM28,28H4V12h24V28zM19.205,24h-6v-1.393h1.896v-4.219h-1.896v-1.3c0.29,0,0.567-0.016,0.833-0.046s0.487-0.082,0.664-0.157c0.209-0.089,0.366-0.207,0.471-0.35c0.104-0.144,0.165-0.322,0.181-0.536h1.998v6.607h1.854V24z",
o:0,t:"",s:"none",fl:"#333"}},f:{0:{o:0,t:""},20:{o:1},40:{t:"t0,12r-30,30,5",o:0},99:{o:0},100:{o:0,t:""}}},{i:{a:{p:"M28,6h-2v1.199C26,8.746,25.146,10,23.6,10H22.4C20.854,10,20,8.746,20,7.199V6h-8v1.199C12,8.746,11.146,10,9.6,10H8.4C6.854,10,6,8.746,6,7.199V6H4C2.896,6,2,6.895,2,8v20c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.895,29.105,6,28,6zM28,28H4V12h24V28zM19.324,24h-6.161v-1.297c0.471-0.342,0.941-0.703,1.414-1.086s0.852-0.713,1.137-0.99c0.425-0.41,0.728-0.77,0.907-1.074c0.178-0.305,0.268-0.609,0.268-0.906c0-0.359-0.115-0.635-0.344-0.83c-0.232-0.195-0.563-0.297-0.995-0.297c-0.324,0-0.664,0.07-1.02,0.203c-0.356,0.133-0.688,0.305-0.993,0.512h-0.169v-1.746c0.25-0.109,0.617-0.219,1.104-0.328c0.487-0.109,0.975-0.16,1.463-0.16c0.983,0,1.733,0.207,2.251,0.617c0.514,0.414,0.771,1,0.771,1.756c0,0.494-0.119,0.965-0.367,1.41c-0.248,0.449-0.629,0.906-1.137,1.381c-0.32,0.295-0.641,0.568-0.965,0.814c-0.324,0.248-0.554,0.42-0.69,0.52h3.526V24z",
o:0,t:"",s:"none",fl:"#333"}},f:{0:{t:""},20:{o:0},40:{o:1},60:{t:"t0,12r40,2,5",o:0},99:{o:0},100:{o:0,t:""}}},{i:{a:{p:"M28,6h-2v1.2c0,1.546-0.854,2.8-2.4,2.8H22.4C20.854,10,20,8.746,20,7.2V6h-8v1.2c0,1.546-0.854,2.8-2.4,2.8H8.4C6.854,10,6,8.746,6,7.2V6H4C2.896,6,2,6.896,2,8v20c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.896,29.105,6,28,6zM28,28H4V12h24V28zM18.477,20.24c0.168,0.145,0.303,0.313,0.402,0.506s0.148,0.447,0.148,0.768c0,0.361-0.072,0.697-0.213,1.01c-0.145,0.314-0.363,0.582-0.658,0.805c-0.289,0.217-0.629,0.385-1.02,0.5S16.273,24,15.716,24c-0.636,0-1.181-0.049-1.638-0.148c-0.456-0.1-0.825-0.213-1.11-0.338V21.83h0.2c0.296,0.178,0.648,0.332,1.06,0.463s0.788,0.197,1.128,0.197c0.199,0,0.415-0.018,0.648-0.051c0.234-0.031,0.434-0.104,0.594-0.215c0.129-0.086,0.23-0.189,0.305-0.311c0.076-0.123,0.113-0.297,0.113-0.527c0-0.225-0.051-0.398-0.154-0.52c-0.104-0.123-0.24-0.211-0.408-0.262c-0.168-0.055-0.371-0.084-0.608-0.09s-0.457-0.006-0.66-0.006h-0.423v-1.373H15.2c0.269,0,0.507-0.01,0.712-0.027s0.381-0.055,0.525-0.117c0.152-0.064,0.266-0.152,0.34-0.262c0.078-0.107,0.113-0.268,0.113-0.479c0-0.154-0.039-0.277-0.117-0.371c-0.078-0.096-0.18-0.171-0.299-0.227C16.34,17.593,16.182,17.553,16,17.53c-0.183-0.021-0.339-0.029-0.469-0.029c-0.324,0-0.675,0.056-1.054,0.167c-0.377,0.112-0.743,0.272-1.099,0.482h-0.19v-1.665c0.283-0.113,0.666-0.223,1.151-0.327C14.824,16.053,15.316,16,15.813,16c0.485,0,0.909,0.042,1.274,0.127c0.365,0.083,0.666,0.196,0.904,0.337c0.281,0.17,0.49,0.373,0.629,0.613c0.137,0.241,0.205,0.522,0.205,0.847c0,0.426-0.133,0.807-0.396,1.143c-0.266,0.336-0.613,0.549-1.047,0.641v0.072c0.176,0.025,0.359,0.072,0.555,0.145C18.135,19.996,18.314,20.104,18.477,20.24z",
o:0,t:"",s:"none",fl:"#333"}},f:{0:{t:""},40:{o:0},60:{o:1},80:{o:1},100:{o:0,t:""}}}]},camcoder:{d:600,it:2,sh:[{i:{a:{p:"M9,22c0,0.553-0.447,1-1,1s-1-0.447-1-1s0.447-1,1-1S9,21.447,9,22z",o:1,s:"none",fl:"#333"}},f:{25:{o:0},50:{o:1},75:{o:0},100:{o:1}}},{i:{a:{p:"M26,20h-2v-3.4c0-0.332-0.248-0.6-0.553-0.6h-0.554c-1.315,1.288-3.049,2-4.894,2c-1.844,0-3.578-0.712-4.893-2H9.938c-0.832,0.621-1.854,1-2.969,1S4.832,16.621,4,16c0,0-0.447,0-1,0s-1,0.537-1,1.199v8.4C2,26.926,3.074,28,4.4,28H21.6c1.326,0,2.4-0.895,2.4-2v-2h2l2.586,2.586C29.367,27.367,30,27.105,30,26v-8c0-1.105-0.633-1.367-1.414-0.586L26,20zM12,23.4c0,0.33-0.269,0.6-0.6,0.6H6.6C6.269,24,6,23.73,6,23.4V20.6C6,20.27,6.269,20,6.6,20H11.4c0.331,0,0.6,0.27,0.6,0.6V23.4z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M4.172,9.172c-1.563,1.563-1.563,4.094,0,5.656c1.562,1.563,4.094,1.563,5.656,0s1.563-4.095,0-5.656C8.267,7.609,5.734,7.609,4.172,9.172zM7.045,9.25c0.099-0.354,0.461-0.563,0.816-0.471c0.357,0.096,0.569,0.46,0.472,0.815c-0.093,0.357-0.461,0.57-0.814,0.471C7.163,9.972,6.952,9.605,7.045,9.25zM6.955,14.75c-0.096,0.354-0.461,0.563-0.816,0.469c-0.356-0.094-0.567-0.461-0.472-0.816c0.094-0.355,0.461-0.566,0.816-0.471C6.84,14.027,7.05,14.391,6.955,14.75zM5.069,12.518c0.094,0.357-0.116,0.721-0.473,0.818c-0.354,0.094-0.72-0.117-0.816-0.473c-0.096-0.355,0.116-0.723,0.472-0.816C4.608,11.951,4.974,12.16,5.069,12.518zM4.644,9.644c0.26-0.261,0.682-0.262,0.942-0.001s0.26,0.683,0,0.943c-0.261,0.26-0.683,0.261-0.943,0S4.383,9.903,4.644,9.644zM7.235,11.765c0.131,0.131,0.131,0.341,0,0.47c-0.131,0.133-0.34,0.133-0.471,0c-0.131-0.129-0.131-0.339,0-0.47S7.104,11.634,7.235,11.765zM9.358,14.355c-0.261,0.262-0.684,0.262-0.942,0c-0.263-0.258-0.262-0.684,0-0.941c0.261-0.262,0.681-0.262,0.943,0C9.618,13.676,9.618,14.094,9.358,14.355zM10.22,11.136c0.096,0.356-0.114,0.723-0.472,0.816c-0.354,0.099-0.723-0.114-0.814-0.472c-0.096-0.355,0.114-0.72,0.471-0.817C9.76,10.57,10.123,10.781,10.22,11.136z",
t:"",s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r360,7,12"}},fIE:{0:{t:""},100:{t:"r360,5.5,10.5"}}},{i:{a:{p:"M22.242,6.758c-2.344-2.344-6.142-2.344-8.484,0c-2.344,2.343-2.344,6.141,0,8.484c2.343,2.344,6.143,2.344,8.484,0C24.586,12.898,24.586,9.101,22.242,6.758zM22.125,11.066c0.531,0.148,0.846,0.691,0.705,1.227c-0.143,0.535-0.689,0.854-1.223,0.707c-0.535-0.141-0.855-0.691-0.705-1.223C21.043,11.244,21.59,10.928,22.125,11.066zM13.877,10.933c-0.532-0.144-0.848-0.69-0.707-1.224c0.143-0.535,0.692-0.853,1.225-0.708c0.535,0.142,0.853,0.691,0.707,1.225C14.959,10.76,14.412,11.074,13.877,10.933zM17.224,8.104c-0.535,0.142-1.082-0.173-1.227-0.708c-0.142-0.532,0.175-1.081,0.708-1.225s1.083,0.174,1.225,0.707C18.074,7.413,17.758,7.961,17.224,8.104zM21.535,7.465c0.391,0.391,0.391,1.023,0,1.414s-1.023,0.391-1.414,0s-0.391-1.023,0-1.414C20.512,7.073,21.145,7.073,21.535,7.465zM18.354,11.354c-0.195,0.195-0.511,0.197-0.707,0c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0C18.549,10.843,18.549,11.158,18.354,11.354zM14.467,14.539c-0.393-0.393-0.394-1.027,0-1.414c0.389-0.395,1.023-0.395,1.412,0c0.392,0.391,0.391,1.02,0.001,1.414C15.488,14.926,14.858,14.926,14.467,14.539zM19.297,15.83c-0.535,0.143-1.084-0.174-1.225-0.709c-0.146-0.531,0.17-1.082,0.707-1.221c0.533-0.143,1.078,0.172,1.227,0.707C20.145,15.141,19.828,15.684,19.297,15.83z",
t:"",s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r360,18,11"}},fIE:{0:{t:""},100:{t:"r360,16.5,9.5"}}}]},camera:{d:400,it:1,sh:[{i:{a:{p:"M7,8.4V6.6C7,6.269,7.269,6,7.6,6H12.4C12.731,6,13,6.269,13,6.6v1.8H7z",s:"none",fl:"#333"}},f:{5:{t:"t0,1"},10:{},15:{t:""},100:{}}},{i:{a:{p:"M18,14c-2.209,0-4,1.792-4,4.002C14,20.211,15.791,22,18,22s4-1.789,4-3.998C22,15.792,20.209,14,18,14zM18,18.001L18,18.001L18,18.001L18,18.001L18,18.001z",s:"none",fl:"#333"}},f:{5:{},12:{p:"M18,14c-2.209,0-4,1.792-4,4.002C14,20.211,15.791,22,18,22s4-1.789,4-3.998C22,15.792,20.209,14,18,14zM18,21.251c-1.798,0-3.25-1.453-3.25-3.249c0-1.797,1.452-3.251,3.25-3.251c1.794,0,3.25,1.455,3.25,3.251C21.25,19.798,19.794,21.251,18,21.251z"},
20:{p:"M18,14c-2.209,0-4,1.792-4,4.002C14,20.211,15.791,22,18,22s4-1.789,4-3.998C22,15.792,20.209,14,18,14zM18,18.001L18,18.001L18,18.001L18,18.001L18,18.001z"},100:{}}},{i:{a:{p:"M28.068,8H4.414C3.08,8,2,9.065,2,10.381v13.236C2,24.936,3.08,26,4.414,26h23.654C29.135,26,30,25.148,30,24.096V9.904C30,8.853,29.135,8,28.068,8zM6,23.951H5.429C4.64,23.951,4,23.398,4,22.715V11.187c0-0.683,0.64-1.235,1.429-1.235H6V23.951zM11.5,13c-0.828,0-1.5-0.672-1.5-1.501C10,10.672,10.672,10,11.5,10s1.5,0.672,1.5,1.499C13,12.328,12.328,13,11.5,13zM18,24c-3.314,0-6-2.686-6-6c0-3.313,2.686-6,6-6c3.313,0,6,2.687,6,6C24,21.314,21.313,24,18,24zM28.068,12.952h-5.102C22.432,12.952,22,12.525,22,12v-2h5.104c0.533,0,0.965,0.427,0.965,0.953V12.952z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M25.601,4.7l0.954,3.229l3.056-1.25l-1.866,2.779l2.855,1.672l-3.28,0.235l0.506,3.334l-2.225-2.485L23.375,14.7l0.507-3.334L20.6,11.131l2.857-1.672L21.591,6.68l3.056,1.25L25.601,4.7z",o:0,s:"none",fl:"#333"}},f:{20:{},21:{o:1},50:{o:0,t:"s4"},100:{t:""}}}]},"camera-alt":{d:1E3,it:1,sh:[{i:{a:{p:"M28.801,12H20l-1.199,1H16c0-1-2-2-2-2c0.117-0.781,2.467-0.416,3-1c0.336-0.369,0.447-0.776,0-1C15,8,8,6,7,6H6.4C6.179,6,5.873,6.127,5.717,6.283L5.283,6.717C5.127,6.873,5,7.179,5,7.4V9H2.6C2.269,9,2,9.269,2,9.6V14.4C2,14.731,2.269,15,2.6,15H4v9.801C4,25.463,4.537,26,5.2,26h9.601C15.463,26,16,25.463,16,24.801V23h2.801L20,24h8.801C29.463,24,30,23.463,30,22.801V13.2C30,12.537,29.463,12,28.801,12zM19,22h-1v-8h1V22z",
s:"none",fl:"#333"}},f:{10:{t:"t-6,0r-20,4,16"},20:{p:"M26.801,12H18l-1.199,1H16c0-1-2-2-2-2c0.117-0.781,2.467-0.416,3-1c0.336-0.369,0.447-0.776,0-1C15,8,8,6,7,6H6.4C6.179,6,5.873,6.127,5.717,6.283L5.283,6.717C5.127,6.873,5,7.179,5,7.4V9H2.6C2.269,9,2,9.269,2,9.6V14.4C2,14.731,2.269,15,2.6,15H4v9.801C4,25.463,4.537,26,5.2,26h9.601C15.463,26,16,25.463,16,24.801V23h0.801L18,24h8.801C27.463,24,28,23.463,28,22.801V13.2C28,12.537,27.463,12,26.801,12zM17,22L17,22v-8l0,0V22z"},30:{p:"M28.801,12H20l-1.199,1H16c0-1-2-2-2-2c0.117-0.781,2.467-0.416,3-1c0.336-0.369,0.447-0.776,0-1C15,8,8,6,7,6H6.4C6.179,6,5.873,6.127,5.717,6.283L5.283,6.717C5.127,6.873,5,7.179,5,7.4V9H2.6C2.269,9,2,9.269,2,9.6V14.4C2,14.731,2.269,15,2.6,15H4v9.801C4,25.463,4.537,26,5.2,26h9.601C15.463,26,16,25.463,16,24.801V23h2.801L20,24h8.801C29.463,24,30,23.463,30,22.801V13.2C30,12.537,29.463,12,28.801,12zM19,22h-1v-8h1V22z"},
50:{t:"t-2,-5r20,4,16"},60:{p:"M26.801,12H18l-1.199,1H16c0-1-2-2-2-2c0.117-0.781,2.467-0.416,3-1c0.336-0.369,0.447-0.776,0-1C15,8,8,6,7,6H6.4C6.179,6,5.873,6.127,5.717,6.283L5.283,6.717C5.127,6.873,5,7.179,5,7.4V9H2.6C2.269,9,2,9.269,2,9.6V14.4C2,14.731,2.269,15,2.6,15H4v9.801C4,25.463,4.537,26,5.2,26h9.601C15.463,26,16,25.463,16,24.801V23h0.801L18,24h8.801C27.463,24,28,23.463,28,22.801V13.2C28,12.537,27.463,12,26.801,12zM17,22L17,22v-8l0,0V22z"},70:{p:"M28.801,12H20l-1.199,1H16c0-1-2-2-2-2c0.117-0.781,2.467-0.416,3-1c0.336-0.369,0.447-0.776,0-1C15,8,8,6,7,6H6.4C6.179,6,5.873,6.127,5.717,6.283L5.283,6.717C5.127,6.873,5,7.179,5,7.4V9H2.6C2.269,9,2,9.269,2,9.6V14.4C2,14.731,2.269,15,2.6,15H4v9.801C4,25.463,4.537,26,5.2,26h9.601C15.463,26,16,25.463,16,24.801V23h2.801L20,24h8.801C29.463,24,30,23.463,30,22.801V13.2C30,12.537,29.463,12,28.801,12zM19,22h-1v-8h1V22z"},
80:{t:""},100:{}}},{i:{a:{p:"M28.308,10.017l2.565,4.511l-3.788-1.005L25.21,17l-1.484-4.983L20,9.654l2.87-2.075l-0.427-4.937l3.259,3.701l3.462-0.688L28.308,10.017z",s:"none",o:0,t:"s0.3",fl:"#333"}},f:{19:{},20:{o:1},40:{o:0,t:"s4"},100:{}}},{i:{a:{p:"M27.155,25.486l-1.757,4.883l-1.701-3.531l-3.86,0.838l2.818-4.368l-0.628-4.367l3.443,0.83l3.472-3.535l-0.691,4.882l2.774,2.182L27.155,25.486z",o:0,s:"none",fl:"#333"}},f:{59:{},60:{o:1},70:{o:0,t:"s4"},100:{}}}]},car:{d:1E3,it:1,sh:[{i:{a:{p:"M20.069,18.92c0.017-0.055,0.031-0.109,0.031-0.17c0-0.304-0.224-0.55-0.5-0.55c-0.134,0-0.254,0.06-0.344,0.153c-0.101-0.093-0.243-0.153-0.407-0.153c-0.304,0-0.55,0.201-0.55,0.45c0,0.127,0.065,0.24,0.169,0.322c-0.04,0.068-0.068,0.144-0.068,0.228c0,0.263,0.226,0.473,0.509,0.492c0.022,0.228,0.207,0.407,0.44,0.407c0.206,0,0.372-0.141,0.426-0.329c0.056,0.016,0.113,0.029,0.175,0.029c0.304,0,0.55-0.201,0.55-0.45C20.5,19.136,20.313,18.966,20.069,18.92z",
o:0,s:"none",fl:"#333"}},f:{9:{},10:{o:1},25:{o:0,t:"s5"},100:{t:""}}},{i:{a:{p:"M20.069,18.92c0.017-0.055,0.031-0.109,0.031-0.17c0-0.304-0.224-0.55-0.5-0.55c-0.134,0-0.254,0.06-0.344,0.153c-0.101-0.093-0.243-0.153-0.407-0.153c-0.304,0-0.55,0.201-0.55,0.45c0,0.127,0.065,0.24,0.169,0.322c-0.04,0.068-0.068,0.144-0.068,0.228c0,0.263,0.226,0.473,0.509,0.492c0.022,0.228,0.207,0.407,0.44,0.407c0.206,0,0.372-0.141,0.426-0.329c0.056,0.016,0.113,0.029,0.175,0.029c0.304,0,0.55-0.201,0.55-0.45C20.5,19.136,20.313,18.966,20.069,18.92z",
o:0,t:"t-17,0s1",s:"none",fl:"#333"}},f:{19:{},20:{o:1},35:{o:0,t:"s5"},100:{t:"t-17,0s1"}}},{i:{a:{p:"M10.425,18.9c1.38,0,2.5,1.119,2.5,2.498c0,1.384-1.12,2.502-2.5,2.502c-1.379,0-2.5-1.118-2.5-2.502C7.926,20.02,9.046,18.9,10.425,18.9zM21.579,21.407c0,1.383,1.12,2.501,2.499,2.501c1.381,0,2.501-1.118,2.501-2.501c0-1.381-1.12-2.499-2.501-2.499C22.699,18.908,21.579,20.026,21.579,21.407zM30,17.06l-0.133,2.466c0,1.983-2.337,1.837-2.337,1.837s-0.018-3.584-3.539-3.584c0,0-3.346,0.073-3.346,3.584l-6.796-0.027c0,0,0-3.493-3.423-3.493c0,0-3.468-0.063-3.468,3.493L5.1,21.2c0,0-2.9-0.2-3.098-3.414c0,0-0.175-3.502,3.442-3.502L8.9,14.1l3.88-4.217c0,0,0.663-0.883,1.938-0.883l7.502,0.01c0,0,0.68,0.09,0.991,0.661c0.567,1.04,1.688,4.429,1.688,4.429l2.631,0.131C30.079,14.23,30,17.06,30,17.06zM17.1,10.2l-2.9,0L10.9,14.1l5.9,0L17.1,10.2zM23.5,14.1L22,10.2h-3.6l-0.2,3.9H23.5z",
s:"none",fl:"#333"}},f:{10:{t:"t-10,0r15,24,24"},40:{t:"t-33,0r15,24,24"},41:{t:"t-33,33r0"},42:{t:"t33,0r0"},70:{t:"t0,0r-5,10,24",e:">"},80:{t:"r-5,10,24s0.9,1,0,16"},85:{t:""},100:{}}}]},"caret-down":{d:600,it:1,sh:[{i:{a:{p:"M23.869,12.414l-7.497,7.415c-0.228,0.228-0.597,0.227-0.823,0l-7.418-7.415c-0.228-0.227-0.151-0.413,0.171-0.413h15.396C24.021,12,24.097,12.188,23.869,12.414z",t:"",s:"none",fl:"#333"}},f:{0:{t:"t0,-22"},50:{t:"",e:"backOut"},100:{}}}]},"caret-left":{d:600,it:1,sh:[{i:{a:{p:"M19.587,23.869l-7.417-7.497c-0.228-0.228-0.227-0.597,0-0.824l7.417-7.417C19.813,7.903,20,7.979,20,8.302v15.396C20.001,24.021,19.813,24.097,19.587,23.869z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t22,0"},50:{t:"",e:"backOut"},100:{}}}]},"caret-right":{d:600,it:1,sh:[{i:{a:{p:"M12.414,8.131l7.416,7.497c0.228,0.228,0.227,0.597,0,0.824l-7.416,7.417C12.187,24.097,12,24.021,12,23.698V8.302C12,7.979,12.187,7.903,12.414,8.131z",t:"",s:"none",fl:"#333"}},f:{0:{t:"t-22,0"},50:{t:"",e:"backOut"},100:{}}}]},"caret-up":{d:600,it:1,sh:[{i:{a:{p:"M8.131,19.586l7.497-7.415c0.228-0.228,0.597-0.227,0.824,0l7.417,7.415c0.228,0.227,0.151,0.413-0.171,0.413H8.302C7.979,20,7.903,19.813,8.131,19.586z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t0,22"},50:{t:"",e:"backOut"},100:{}}}]},cellphone:{d:600,it:1,sh:[{i:{a:{p:"M12,9L12,9L12,9L12,9L12,9zM16,9L16,9L16,9L16,9L16,9zM20,9L20,9L20,9L20,9L20,9zM12,13L12,13L12,13L12,13L12,13zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z",s:"none",fl:"#333"}},f:{5:{p:"M13,10h-2V8h2V10zM16,9L16,9L16,9L16,9L16,9zM20,9L20,9L20,9L20,9L20,9zM12,13L12,13L12,13L12,13L12,13zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},
10:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM20,9L20,9L20,9L20,9L20,9zM12,13L12,13L12,13L12,13L12,13zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},15:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM12,13L12,13L12,13L12,13L12,13zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},
20:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},25:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},
30:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},35:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},
40:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM17,16h-2v2h2V16zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},45:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM17,16h-2v2h2V16zM21,16h-2v2h2V16zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},
50:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM17,16h-2v2h2V16zM21,16h-2v2h2V16zM13,20h-2v2h2V20zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},55:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM17,16h-2v2h2V16zM21,16h-2v2h2V16zM13,20h-2v2h2V20zM17,20h-2v2h2V20zM20,21L20,21L20,21L20,21L20,21z"},60:{p:"M13,10h-2V8h2V10zM17,8h-2v2h2V8zM21,8h-2v2h2V8zM13,12h-2v2h2V12zM17,12h-2v2h2V12zM21,12h-2v2h2V12zM13,16h-2v2h2V16zM17,16h-2v2h2V16zM21,16h-2v2h2V16zM13,20h-2v2h2V20zM17,20h-2v2h2V20zM21,20h-2v2h2V20z"},
80:{},90:{p:"M12,9L12,9L12,9L12,9L12,9zM16,9L16,9L16,9L16,9L16,9zM20,9L20,9L20,9L20,9L20,9zM12,13L12,13L12,13L12,13L12,13zM16,13L16,13L16,13L16,13L16,13zM20,13L20,13L20,13L20,13L20,13zM12,17L12,17L12,17L12,17L12,17zM16,17L16,17L16,17L16,17L16,17zM20,17L20,17L20,17L20,17L20,17zM12,21L12,21L12,21L12,21L12,21zM16,21L16,21L16,21L16,21L16,21zM20,21L20,21L20,21L20,21L20,21z"},100:{}}},{i:{a:{p:"M21.977,2H10.021C8.905,2,8,2.904,8,4.022v23.956C8,29.094,8.904,30,10.021,30h11.955C23.094,30,24,29.094,24,27.979V4.022C24,2.904,23.094,2,21.977,2zM14.301,3.5h3.396C17.863,3.5,18,3.724,18,4s-0.137,0.5-0.303,0.5h-3.396C14.133,4.5,14,4.273,14,4C14,3.721,14.133,3.5,14.301,3.5zM12.5,3.5C12.777,3.5,13,3.724,13,4c0,0.274-0.223,0.5-0.5,0.5S12,4.276,12,4C12,3.723,12.223,3.5,12.5,3.5zM16,28.5c-0.828,0-1.5-0.672-1.5-1.498c0-0.836,0.672-1.502,1.5-1.502s1.5,0.674,1.5,1.502C17.5,27.828,16.828,28.5,16,28.5zM22,24H10V6h12V24z",
s:"none",fl:"#333"}},f:{}}]},certificate:{d:800,it:1,sh:[{i:{a:{p:"M29.351,18.056c1.106,1.138,0.765,2.406-0.761,2.838l-2.758,0.783c0,0,0.314,1.245,0.703,2.779c0.386,1.535-0.545,2.467-2.079,2.077l-2.78-0.702c0,0-0.348,1.235-0.78,2.759c-0.433,1.526-1.702,1.867-2.84,0.76l-2.056-2c0,0-0.921,0.897-2.057,2c-1.136,1.107-2.406,0.767-2.837-0.76l-0.781-2.759c0,0-1.245,0.314-2.782,0.702c-1.536,0.39-2.465-0.542-2.076-2.077l0.702-2.779c0,0-1.235-0.35-2.76-0.783c-1.524-0.432-1.865-1.7-0.761-2.838L4.647,16c0,0-0.895-0.922-1.999-2.057c-1.104-1.137-0.763-2.407,0.761-2.838l2.76-0.78c0,0-0.314-1.245-0.702-2.781c-0.389-1.537,0.54-2.465,2.076-2.077l2.782,0.703c0,0,0.349-1.236,0.781-2.761c0.431-1.524,1.701-1.865,2.837-0.761L16,4.647c0,0,0.92-0.895,2.056-1.999c1.138-1.104,2.407-0.763,2.84,0.761l0.78,2.761c0,0,1.246-0.315,2.78-0.703s2.465,0.541,2.079,2.077l-0.703,2.781c0,0,1.234,0.349,2.758,0.78c1.525,0.431,1.867,1.701,0.761,2.838L27.35,16C27.35,16,28.246,16.921,29.351,18.056zM10.861,20.013c-0.055,0.096-0.218,0.451-0.252,0.479c-0.125,0.153-0.3,0.273-0.526,0.356C9.4,21.1,8.8,20.8,8.346,19.652c-0.256-0.648-0.458-1.58,0.482-1.998C9.4,17.4,9.864,17.777,9.98,17.886l1.395-0.519C10.8,16.6,9.804,15.91,8.358,16.511C6.7,17.2,6.38,18.607,6.983,20.135c0.816,2.065,2.211,2.351,3.45,1.899C11.9,21.5,12.3,20.4,12.18,19.409l-0.997,0.37C11.023,19.839,10.917,19.917,10.861,20.013zM16.773,17.814c-0.061,0.1-0.208,0.448-0.242,0.476c-0.125,0.153-0.302,0.269-0.526,0.356C15.1,19,14.636,18.216,14.47,17.808L17.9,16.5c-0.4-1.3-1.3-3-3.62-2.19c-1.295,0.452-2.081,1.69-1.375,3.624c0.39,1.068,1.394,2.666,3.45,1.899c1.355-0.505,1.844-1.533,1.747-2.626l-0.997,0.371C16.946,17.638,16.836,17.717,16.773,17.814zM14.751,15.453c0.849-0.353,1.256,0.351,1.417,0.701l-2.032,0.755C14.02,16.559,13.902,15.806,14.751,15.453zM21.425,17.836L20.408,15.1c-0.148-0.399-0.136-0.714-0.047-0.982c0.139-0.418,1.211-0.769,1.211-0.769l-0.527-1.418C19.9,12.3,19.4,12.9,19.128,13.303c-0.203,0.301-0.261,0.675-0.313,1.083C18.7,15.3,20.03,18.354,20.03,18.354L21.425,17.836zM26.145,14.9l-0.418,0.155c-0.267,0.099-0.441,0.036-0.525-0.191l-1.099-2.955c0,0,0.397-0.109,0.548-0.419c0.167-0.344-0.086-0.843-0.086-0.843l-0.817,0.304l-0.334-0.898C23.3,9.6,22.7,9.5,22.503,9.617l-0.718,0.267l2.183,5.871c0.228,0.612,0.604,0.843,1.131,0.693c0.526-0.15,1.004-0.321,1.433-0.51L26.145,14.9z",
o:0,s:"none",fl:"#333"}},f:{30:{o:1,t:"s1.1",e:"elastic"},40:{t:"s1"},70:{},80:{o:0},100:{}}},{i:{a:{p:"M27.35,16l2.001-2.057c1.106-1.137,0.765-2.407-0.761-2.838c-1.523-0.432-2.758-0.78-2.758-0.78l0.703-2.781c0.386-1.537-0.545-2.465-2.079-2.077s-2.78,0.703-2.78,0.703l-0.78-2.761c-0.433-1.524-1.702-1.865-2.84-0.761C16.92,3.752,16,4.647,16,4.647l-2.057-1.999c-1.136-1.104-2.406-0.763-2.837,0.761c-0.432,1.525-0.781,2.761-0.781,2.761L7.543,5.467C6.007,5.079,5.078,6.007,5.467,7.544c0.387,1.536,0.702,2.781,0.702,2.781l-2.76,0.78c-1.524,0.431-1.865,1.701-0.761,2.838C3.752,15.078,4.647,16,4.647,16l-1.999,2.056c-1.104,1.138-0.763,2.406,0.761,2.838c1.524,0.434,2.76,0.783,2.76,0.783l-0.702,2.779c-0.389,1.535,0.54,2.467,2.076,2.077c1.537-0.388,2.782-0.702,2.782-0.702l0.781,2.759c0.431,1.526,1.701,1.867,2.837,0.76c1.136-1.103,2.057-2,2.057-2l2.056,2c1.138,1.107,2.407,0.767,2.84-0.76c0.433-1.523,0.78-2.759,0.78-2.759l2.78,0.702c1.534,0.39,2.465-0.542,2.079-2.077c-0.389-1.534-0.703-2.779-0.703-2.779l2.758-0.783c1.525-0.432,1.867-1.7,0.761-2.838C28.246,16.921,27.35,16,27.35,16z",
o:1,s:"none",fl:"#333"}},f:{20:{o:0},70:{},80:{o:1},100:{}}}]},check:{d:300,it:1,sh:[{i:{a:{p:"M23.905,7.273L12.706,18.474l-4.613-4.611c-0.364-0.365-0.954-0.365-1.318,0l-2.635,2.635c-0.365,0.364-0.365,0.952,0,1.316l7.907,7.909c0.364,0.363,0.952,0.363,1.317,0L27.86,11.227c0.364-0.365,0.364-0.953,0-1.317l-2.635-2.637C24.859,6.909,24.27,6.909,23.905,7.273z",s:"none",fl:"#333"}},f:{0:{p:"M8.732,14.448L8.732,14.448l-0.639-0.585c-0.364-0.365-0.954-0.365-1.318,0l-2.635,2.635c-0.365,0.364-0.365,0.952,0,1.316l0.491,0.546c0.226,0.095,0.559-0.557,0.745-0.557l0.56-0.561c0.187-0.374,0.372-0.374,0.559-0.56l0.56-0.56C7.428,15.752,8.546,14.634,8.732,14.448z"},
30:{p:"M12.724,18.455l-0.018,0.019l-4.613-4.611c-0.364-0.365-0.954-0.365-1.318,0l-2.635,2.635c-0.365,0.364-0.365,0.952,0,1.316l7.907,7.909C12.273,25.814,12.459,26,12.646,26v-1.864c0-0.371,0-1.116,0-1.862v-2.606C12.646,19.292,12.646,18.921,12.724,18.455z"},70:{p:"M23.905,7.273L12.706,18.474l-4.613-4.611c-0.364-0.365-0.954-0.365-1.318,0l-2.635,2.635c-0.365,0.364-0.365,0.952,0,1.316l7.907,7.909c0.364,0.363,0.952,0.363,1.317,0L27.86,11.227c0.364-0.365,0.364-0.953,0-1.317l-2.635-2.637C24.859,6.909,24.27,6.909,23.905,7.273z"},
100:{}}}]},"check-circle":{d:300,it:1,sh:[{i:{a:{p:"M21,11l-7,7l-3.395-3.393c-0.469-0.469-1.229-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697l5.376,5.377c0.469,0.465,1.227,0.465,1.695,0l8.982-8.982c0.467-0.469,0.467-1.229,0-1.697L22.695,11C22.229,10.531,21.469,10.531,21,11z",s:"none",fl:"#333"}},f:{0:{p:"M10.199,15l0.201-0.199l0.205-0.193c-0.469-0.469-1.229-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697L8,17.199l1-1l0.4-0.398L9.8,15.4l0.2-0.201L10.199,15z"},30:{p:"M14,18.4V18l-3.395-3.393c-0.469-0.469-1.229-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697l5.376,5.377C13.621,23.277,14,23.199,14,23.199v-1.398v-1.602V19V18.4z"},
70:{p:"M21,11l-7,7l-3.395-3.393c-0.469-0.469-1.229-0.469-1.698,0l-1.131,1.131c-0.469,0.469-0.469,1.229,0,1.697l5.376,5.377c0.469,0.465,1.227,0.465,1.695,0l8.982-8.982c0.467-0.469,0.467-1.229,0-1.697L22.695,11C22.229,10.531,21.469,10.531,21,11z"},100:{}}},{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,27C9.924,27,5,22.076,5,16S9.924,5,16,5s11,4.924,11,11S22.076,27,16,27z",s:"none",fl:"#333"}},f:{}}]},"check-circle-alt":{d:300,it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM23.83,13.83l-8.981,8.982c-0.469,0.465-1.229,0.465-1.697,0l-5.375-5.377c-0.469-0.469-0.469-1.229,0-1.697l1.131-1.131c0.469-0.469,1.229-0.469,1.697,0L14,18l7-7c0.469-0.469,1.229-0.469,1.695,0l1.135,1.133C24.297,12.602,24.297,13.361,23.83,13.83z",
s:"none",fl:"#333"}},f:{0:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM8.601,16.601l-0.4,0.4C8.001,17.2,8.001,17.2,7.752,17.413l0.024,0.022c-0.469-0.469-0.469-1.229,0-1.697l1.131-1.131c0.469-0.469,1.229-0.469,1.697,0L10.4,14.8l-0.399,0.401C9.8,15.399,9.8,15.399,9.601,15.6L9.2,16C9,16.2,8.8,16.4,8.601,16.601z"},30:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM14,21.801v1.398c-0.2,0-0.38,0.078-0.849-0.387l-5.375-5.377c-0.469-0.469-0.469-1.229,0-1.697l1.131-1.131c0.469-0.469,1.229-0.469,1.697,0L14,18l-0.03,0.971C14,20,14,20,14,20.4v0.4C14,21.4,14,21.4,14,21.801z"},
70:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM23.83,13.83l-8.981,8.982c-0.469,0.465-1.229,0.465-1.697,0l-5.375-5.377c-0.469-0.469-0.469-1.229,0-1.697l1.131-1.131c0.469-0.469,1.229-0.469,1.697,0L14,18l7-7c0.469-0.469,1.229-0.469,1.695,0l1.135,1.133C24.297,12.602,24.297,13.361,23.83,13.83z"},100:{}}}]},"checked-off":{d:120,it:3,sh:[{i:{a:{p:"M4,7v18c0,1.656,1.343,3,3,3h18c1.656,0,3-1.344,3-3V7c0-1.657-1.343-3-3-3H7C5.343,4,4,5.343,4,7z M24,24H8V8h16V24z",s:"none",fl:"#333"}},
f:{25:{t:"t0,-2"},75:{t:"t0,2"},100:{t:""}}}]},"checked-on":{d:400,it:1,sh:[{i:{a:{p:"M24,20v4H8V8h12l4-4H7C5.343,4,4,5.343,4,7v18c0,1.656,1.343,3,3,3h18c1.656,0,3-1.344,3-3v-9L24,20z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M26.518,6.224l-9.233,9.232l-3.801-3.801c-0.301-0.301-0.786-0.301-1.087,0l-2.171,2.173c-0.301,0.301-0.301,0.786,0,1.084l6.518,6.52c0.301,0.301,0.783,0.301,1.086,0L29.775,9.484c0.299-0.302,0.299-0.785,0-1.086l-2.172-2.175C27.305,5.926,26.816,5.926,26.518,6.224z",s:"none",fl:"#333"}},
f:{0:{p:"M14.01,12.139L14.01,12.139l-0.526-0.483c-0.301-0.301-0.786-0.301-1.087,0l-2.171,2.173c-0.301,0.301-0.301,0.786,0,1.084l0.405,0.451c0.187,0.078,0.46-0.459,0.614-0.459l0.462-0.461c0.153-0.31,0.307-0.31,0.458-0.462l0.463-0.463C12.936,13.213,13.855,12.293,14.01,12.139z"},30:{p:"M17.299,15.441l-0.015,0.015l-3.801-3.801c-0.301-0.301-0.786-0.301-1.087,0l-2.171,2.173c-0.301,0.301-0.301,0.786,0,1.084l6.518,6.52c0.186,0.076,0.34,0.229,0.493,0.229v-1.539c0-0.305,0-0.918,0-1.531v-2.15C17.236,16.131,17.236,15.824,17.299,15.441z"},
80:{p:"M26.518,6.224l-9.233,9.232l-3.801-3.801c-0.301-0.301-0.786-0.301-1.087,0l-2.171,2.173c-0.301,0.301-0.301,0.786,0,1.084l6.518,6.52c0.301,0.301,0.783,0.301,1.086,0L29.775,9.484c0.299-0.302,0.299-0.785,0-1.086l-2.172-2.175C27.305,5.926,26.816,5.926,26.518,6.224z"},100:{}}}]},"chevron-down":{d:600,it:1,sh:[{i:{a:{p:"M9.595,9.516c-0.434-0.434-1.137-0.434-1.568,0l-1.699,1.699c-0.434,0.434-0.434,1.135,0,1.57l8.889,8.89c0.434,0.434,1.136,0.434,1.569,0l8.89-8.89c0.434-0.436,0.434-1.137,0-1.57l-1.699-1.699c-0.434-0.434-1.136-0.434-1.569,0L16,15.922L9.595,9.516z",
s:"none",fl:"#333"}},f:{0:{p:"M16,15.922c-0.433-0.434-1.134-0.434-1.567,0l-1.699,1.699c-0.434,0.434-0.434,1.135,0,1.57l2.482,2.483c0.434,0.434,1.136,0.434,1.569,0l2.483-2.483c0.434-0.436,0.434-1.137,0-1.57l-1.699-1.699C17.136,15.488,16.434,15.488,16,15.922L16,15.922L16,15.922z",t:"t0,-24"},25:{t:"",e:">"},50:{p:"M9.595,9.516c-0.434-0.434-1.137-0.434-1.568,0l-1.699,1.699c-0.434,0.434-0.434,1.135,0,1.57l8.889,8.89c0.434,0.434,1.136,0.434,1.569,0l8.89-8.89c0.434-0.436,0.434-1.137,0-1.57l-1.699-1.699c-0.434-0.434-1.136-0.434-1.569,0L16,15.922L9.595,9.516z"},
100:{}}}]},"chevron-left":{d:600,it:1,sh:[{i:{a:{p:"M22.484,9.593c0.434-0.433,0.434-1.136,0-1.569l-1.699-1.699c-0.434-0.434-1.135-0.434-1.57,0l-8.889,8.89c-0.434,0.434-0.434,1.136,0,1.569l8.889,8.89c0.436,0.434,1.137,0.434,1.57,0l1.699-1.699c0.434-0.434,0.434-1.136,0-1.569L16.078,16L22.484,9.593z",s:"none",fl:"#333"}},f:{0:{p:"M16.078,16c0.434-0.433,0.434-1.136,0-1.569l-1.699-1.699c-0.434-0.434-1.135-0.434-1.57,0l-2.483,2.483c-0.434,0.434-0.434,1.136,0,1.569l2.483,2.484c0.436,0.434,1.137,0.434,1.57,0l1.699-1.699C16.512,17.136,16.512,16.434,16.078,16L16.078,16L16.078,16z",
t:"t24,0"},25:{t:"",e:">"},50:{p:"M22.484,9.593c0.434-0.433,0.434-1.136,0-1.569l-1.699-1.699c-0.434-0.434-1.135-0.434-1.57,0l-8.889,8.89c-0.434,0.434-0.434,1.136,0,1.569l8.889,8.89c0.436,0.434,1.137,0.434,1.57,0l1.699-1.699c0.434-0.434,0.434-1.136,0-1.569L16.078,16L22.484,9.593z"},100:{}}}]},"chevron-right":{d:600,it:1,sh:[{i:{a:{p:"M9.516,22.406c-0.434,0.434-0.434,1.137,0,1.568l1.699,1.699c0.434,0.434,1.135,0.434,1.57,0l8.89-8.889c0.434-0.434,0.434-1.136,0-1.569l-8.89-8.89c-0.436-0.434-1.137-0.434-1.57,0L9.516,8.024c-0.434,0.434-0.434,1.136,0,1.569L15.922,16L9.516,22.406z",
s:"none",fl:"#333"}},f:{0:{p:"M15.922,16c-0.434,0.433-0.434,1.135,0,1.568l1.699,1.699c0.434,0.434,1.135,0.434,1.57,0l2.483-2.483c0.434-0.434,0.434-1.136,0-1.569l-2.483-2.484c-0.436-0.434-1.137-0.434-1.57,0l-1.699,1.699C15.488,14.864,15.488,15.566,15.922,16L15.922,16L15.922,16z",t:"t-24,0"},25:{t:"",e:">"},50:{p:"M9.516,22.406c-0.434,0.434-0.434,1.137,0,1.568l1.699,1.699c0.434,0.434,1.135,0.434,1.57,0l8.89-8.889c0.434-0.434,0.434-1.136,0-1.569l-8.89-8.89c-0.436-0.434-1.137-0.434-1.57,0L9.516,8.024c-0.434,0.434-0.434,1.136,0,1.569L15.922,16L9.516,22.406z"},
100:{}}}]},"chevron-up":{d:600,it:1,sh:[{i:{a:{p:"M22.406,22.484c0.434,0.434,1.137,0.434,1.568,0l1.699-1.699c0.434-0.434,0.434-1.135,0-1.57l-8.889-8.89c-0.434-0.434-1.136-0.434-1.569,0l-8.89,8.89c-0.434,0.436-0.434,1.137,0,1.57l1.699,1.699c0.434,0.434,1.136,0.434,1.569,0l6.406-6.406L22.406,22.484z",s:"none",fl:"#333"}},f:{0:{p:"M16.001,16.078c0.433,0.434,1.134,0.434,1.567,0l1.699-1.699c0.434-0.434,0.434-1.135,0-1.57l-2.482-2.483c-0.434-0.434-1.136-0.434-1.569,0l-2.483,2.483c-0.434,0.436-0.434,1.137,0,1.57l1.699,1.699C14.865,16.512,15.567,16.512,16.001,16.078L16.001,16.078L16.001,16.078z",
t:"t0,24"},25:{t:"",e:">"},50:{p:"M22.406,22.484c0.434,0.434,1.137,0.434,1.568,0l1.699-1.699c0.434-0.434,0.434-1.135,0-1.57l-8.889-8.89c-0.434-0.434-1.136-0.434-1.569,0l-8.89,8.89c-0.434,0.436-0.434,1.137,0,1.57l1.699,1.699c0.434,0.434,1.136,0.434,1.569,0l6.406-6.406L22.406,22.484z"},100:{}}}]},chrome:{d:0,it:1,sh:[{i:{a:{p:"M10.915,16.001c0-2.805,2.281-5.087,5.085-5.087s5.086,2.282,5.086,5.087c0,2.804-2.281,5.086-5.086,5.086S10.915,18.806,10.915,16.001L10.915,16.001z",s:"none",fl:"#3880C2"}},f:{}},
{i:{a:{p:"M5.056,7.271C7.622,4.059,11.57,2,16,2c5.125,0,9.606,2.791,12.046,6.9c0,0-11.837,0-12.046,0c-3.333,0-6.14,2.224-6.937,5.311L5.056,7.271z",s:"none",fl:"#E53F39"}},f:{}},{i:{a:{p:"M29,11c0.621,1.583,1,3.196,1,5.001C30,23.68,23.816,29.914,16.159,30l5.726-9.917c0.807-1.16,1.279-2.566,1.279-4.082C23.164,14,22.327,12.301,21,11H29z",s:"none",fl:"#FBD10B"}},f:{}},{i:{a:{p:"M13.911,29.847C7.17,28.838,2,23.023,2,16.001c0-2.495,0.653-4.836,1.797-6.865l5.715,9.9c1.145,2.437,3.622,4.129,6.488,4.129c0.665,0,1.309-0.092,1.919-0.262L13.911,29.847z",
s:"none",fl:"#4DB849"}},f:{}}]},circle:{d:400,it:1,sh:[{i:{a:{p:"M16,4C9.372,4,4,9.372,4,16s5.372,12,12,12s12-5.372,12-12S22.628,4,16,4zM16,25.429c-5.208,0-9.429-4.221-9.429-9.429S10.792,6.571,16,6.571s9.429,4.221,9.429,9.429S21.208,25.429,16,25.429z",s:"none",fl:"#333"}},f:{0:{t:"s0.2"},60:{t:"s1",e:"bounce"},100:{}}}]},"circle-alt":{d:400,it:1,sh:[{i:{a:{p:"M16,4C9.372,4,4,9.372,4,16s5.372,12,12,12s12-5.372,12-12S22.628,4,16,4z",s:"none",fl:"#333"}},f:{0:{t:"s0.2"},60:{t:"s1",e:"bounce"},100:{}}}]},
clapboard:{d:400,it:1,sh:[{i:{a:{p:"M2.63,10.434L4,14l23.956-6.419c0.64-0.171,1.019-0.829,0.848-1.47l-0.191-2.64c-0.171-0.641-0.829-1.02-1.469-0.849L3.479,8.963C2.838,9.135,2.458,9.793,2.63,10.434zM9.537,11.481l-4.83,1.294L5.862,9.36l4.83-1.294L9.537,11.481zM17.264,9.411l-4.829,1.294L13.59,7.29l4.83-1.294L17.264,9.411zM24.991,7.34l-4.829,1.294l1.155-3.416l4.829-1.294L24.991,7.34z",s:"none",fl:"#333"}},f:{10:{t:"r15,4,14"},40:{},80:{t:""},100:{}}},{i:{a:{p:"M4,28.801C4,29.463,4.537,30,5.2,30h23.601C29.463,30,30,29.463,30,28.801V15.2c0-0.663-0.537-1.2-1.199-1.2H4V28.801zM8,19l-2-3h5l2,3H8zM16,19l-2-3h5l2,3H16zM24,19l-2-3h5l2,3H24z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24.649,11.98l2.352-0.486l-0.912,2.013l1.347,1.906l-2.437-0.262l-1.519,1.665l-0.59-2.174l-2.286-0.879l2.069-1.081l0.107-2.207L24.649,11.98z",o:0,s:"none",fl:"#333"}},f:{9:{},10:{o:1,t:"s1"},60:{o:0,t:"s5"},100:{}}}]},clip:{d:250,it:3,sh:[{i:{a:{p:"M26.526,2.875c-2.127-1.505-5.083-1.021-6.605,1.081L7.981,20.451c-1.088,1.503-0.741,3.589,0.778,4.661c1.519,1.079,3.63,0.731,4.715-0.771l8.433-11.642l-1.101-0.783l-8.429,11.65l0,0c-0.652,0.894-1.92,1.104-2.829,0.465c-0.909-0.647-1.119-1.902-0.466-2.805l0,0L21.024,4.735l0.001-0.001l-0.002-0.001c1.083-1.496,3.2-1.844,4.712-0.769c1.516,1.072,1.867,3.168,0.783,4.666V8.629L13.43,26.707l0.001,0.004c-1.52,2.093-4.481,2.58-6.605,1.077c-2.119-1.505-2.606-4.434-1.089-6.534L9.4,16.3c0,0-0.2,0.3,0.4-0.5c0.787-1.05,0.4-0.6,0.609-0.833l4.991-6.677l-1.05-0.845l-4.847,6.414C9,14.5,9,14.5,8.8,14.8c-0.249,0.372-1.1,1.5-1.1,1.5l-3.062,4.178c-1.957,2.704-1.327,6.459,1.405,8.396c2.73,1.936,6.529,1.313,8.487-1.389L27.614,9.408C29.134,7.305,28.652,4.38,26.526,2.875z",
s:"none",fl:"#333"}},f:{50:{p:"M26.526,2.875c-2.127-1.505-5.083-1.021-6.605,1.081L7.981,20.451c-1.088,1.503-0.741,3.589,0.778,4.661c1.519,1.079,3.63,0.731,4.715-0.771l8.433-11.642l-1.101-0.783l-8.429,11.65l0,0c-0.652,0.894-1.92,1.104-2.829,0.465c-0.909-0.647-1.119-1.902-0.466-2.805l0,0L21.024,4.735l0.001-0.001l-0.002-0.001c1.083-1.496,3.2-1.844,4.712-0.769c1.516,1.072,1.867,3.168,0.783,4.666V8.629L13.43,26.707l0.001,0.004c-1.52,2.093-4.481,2.58-6.605,1.077c-2.119-1.505-2.606-4.434-1.089-6.534l3.66-5.054c0,0,0.403-0.5,0.403-1s0-0.7-0.5-1.4L4.086,7.294L3.005,8.1L8,14.4c0.3,0.4,0.434,0.732,0.3,1c-0.2,0.4-0.6,0.9-0.6,0.9l-3.062,4.178c-1.957,2.704-1.327,6.459,1.405,8.396c2.73,1.936,6.529,1.313,8.487-1.389L27.614,9.408C29.134,7.305,28.652,4.38,26.526,2.875z"},
100:{p:"M26.526,2.875c-2.127-1.505-5.083-1.021-6.605,1.081L7.981,20.451c-1.088,1.503-0.741,3.589,0.778,4.661c1.519,1.079,3.63,0.731,4.715-0.771l8.433-11.642l-1.101-0.783l-8.429,11.65l0,0c-0.652,0.894-1.92,1.104-2.829,0.465c-0.909-0.647-1.119-1.902-0.466-2.805l0,0L21.024,4.735l0.001-0.001l-0.002-0.001c1.083-1.496,3.2-1.844,4.712-0.769c1.516,1.072,1.867,3.168,0.783,4.666V8.629L13.43,26.707l0.001,0.004c-1.52,2.093-4.481,2.58-6.605,1.077c-2.119-1.505-2.606-4.434-1.089-6.534L9.4,16.3c0,0-0.2,0.3,0.4-0.5c0.787-1.05,0.4-0.6,0.609-0.833l4.991-6.677l-1.05-0.845l-4.847,6.414C9,14.5,9,14.5,8.8,14.8c-0.249,0.372-1.1,1.5-1.1,1.5l-3.062,4.178c-1.957,2.704-1.327,6.459,1.405,8.396c2.73,1.936,6.529,1.313,8.487-1.389L27.614,9.408C29.134,7.305,28.652,4.38,26.526,2.875z",
e:"elastic"}}}]},clock:{d:800,it:1,sh:[{i:{a:{p:"M16,2C8.269,2,2,8.269,2,16s6.269,14,14,14s14-6.269,14-14S23.731,2,16,2zM16.691,26.965L16.5,24.101h-1l-0.191,2.864c-5.521-0.344-9.93-4.752-10.273-10.273L7.9,16.5v-1l-2.865-0.191c0.344-5.521,4.752-9.93,10.273-10.273L15.5,7.9h1l0.191-2.865c5.521,0.344,9.93,4.752,10.273,10.273L24.101,15.5v1l2.864,0.191C26.621,22.213,22.213,26.621,16.691,26.965z",t:"",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M22.632,12.287c0.276,0.479-5.653,4.303-6.132,4.579s-1.09,0.113-1.366-0.366c-0.276-0.479-0.112-1.089,0.366-1.366S22.355,11.809,22.632,12.287z",
t:"",s:"none",fl:"#333"}},f:{0:{t:""},30:{t:"r30,16,16"},60:{t:"r60,16,16"},90:{t:"r90,16,16"},91:{t:""},100:{}},fIE:{0:{t:""},30:{t:"r30,14.5,14.5"},60:{t:"r60,14.5,14.5"},90:{t:"r90,14.5,14.5"},91:{t:""},100:{}}},{i:{a:{p:"M17.082,15.375c0.346,0.598,0.141,1.362-0.457,1.708c-0.597,0.345-1.362,0.14-1.708-0.458S10.403,7.685,11,7.34C11.598,6.995,16.737,14.777,17.082,15.375z",s:"none",fl:"#333"}},f:{0:{t:""},30:{t:"r360,16,16"},60:{t:"r720,16,16"},90:{t:"r1110,16,16"},91:{t:""},100:{}},fIE:{0:{t:""},
30:{t:"r360,14.5,14.5"},60:{t:"r720,14.5,14.5"},90:{t:"r1110,14.5,14.5"},91:{t:""},100:{}}}]},cloud:{d:1200,it:1,sh:[{i:{a:{p:"M24.149,20.561c0,0,0.492,1.813-0.403,3.132c0,0,1.24-5.453-4.363-5.521c-4.67-0.055-5.305,3.963-5.648,5.287c-0.011-2.188,0.31-2.591,0.31-2.591c-2.568,0-4.364,2.021-4.298,4.594c0.068,2.71,1.862,4.51,4.651,4.697c1.764,0.115,3.691-0.596,3.691-0.596c2.965-0.208,3.793,0.67,5.8,0.58c4.406-0.197,5.855-2.757,5.855-5.237C29.745,21.64,26.434,19.105,24.149,20.561z",o:0,s:"none",fl:"#333"}},
f:{50:{o:0.6,t:"t-4,0"},100:{o:0,t:"t0,0"}}},{i:{a:{p:"M25.617,4.173c0,0,0.297,1.058-0.242,1.829c0,0,0.745-3.182-2.618-3.221c-2.802-0.033-3.183,2.312-3.388,3.084c-0.006-1.277,0.186-1.511,0.186-1.511c-1.541,0-2.617,1.18-2.578,2.678c0.042,1.582,1.117,2.632,2.79,2.741c1.059,0.068,2.216-0.347,2.216-0.347c1.778-0.122,2.276,0.391,3.479,0.337c2.645-0.116,3.515-1.608,3.515-3.055C28.976,4.804,26.99,3.325,25.617,4.173z",o:0,s:"none",fl:"#333"}},f:{50:{o:0.5,t:"t3,0"},100:{o:0,t:"t0,0"}}},{i:{a:{p:"M19.392,8.298c-0.154-2.45-3.092-4.351-4.964-3.261c0,0,0.501,1.36-0.195,2.35c0,0,0.795-4.089-3.972-4.141C6.288,3.205,5.939,6.217,5.709,7.213C5.596,5.57,5.851,5.269,5.851,5.269c-2.185,0-3.614,1.515-3.437,3.444c0.188,2.034,1.797,3.384,4.179,3.522c1.505,0.088,3.109-0.445,3.109-0.445c2.512-0.157,3.256,0.502,4.959,0.435C18.396,12.077,19.507,10.158,19.392,8.298z",
o:0,s:"none",fl:"#333"}},f:{30:{o:0.6,t:"t-2,0"},80:{o:0.6,t:"t5,0"},100:{o:0,t:"t0,0"}}},{i:{a:{p:"M22.386,10.658c0,0,0.714,2.705-0.585,4.674c0,0,1.799-8.138-6.327-8.237c-6.771-0.083-7.692,5.911-8.189,7.889c-0.016-3.266,0.45-3.867,0.45-3.867c-3.725,0-6.328,3.018-6.233,6.854c0.1,4.046,2.7,6.732,6.745,7.01C10.805,25.155,13,24.094,13,24.094c4.299-0.312,6.1,1,9.009,0.865c6.39-0.296,8.491-4.114,8.491-7.817C30.5,12.268,25.7,8.488,22.386,10.658z",s:"none",fl:"#333"}},f:{}}]},"cloud-bolts":{d:400,it:3,sh:[{i:{a:{p:"M8.247,19.98c-4.044-0.277-6.645-2.963-6.745-7.01C1.408,9.135,4.01,6.117,7.735,6.117c0,0-0.466,0.601-0.45,3.867c0.497-1.978,1.417-7.972,8.189-7.889c8.125,0.1,6.327,8.237,6.327,8.237c1.299-1.97,0.585-4.674,0.585-4.674c3.314-2.17,8.114,1.61,8.114,6.484c0,3.704-2.102,7.522-8.491,7.817c-2.909,0.135-4.11-1.176-8.409-0.865C13.6,19.094,10.805,20.156,8.247,19.98z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M21.5,21,18.4,25.8,21.6,25.4,19.9,30.8,24.1,23.7,20.9,24.1z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},15:{o:1,e:"elastic"},40:{o:0,e:"elastic"},60:{o:1,e:"elastic"},80:{o:0,e:"elastic"},100:{o:1}}},{i:{a:{p:"M10.5,21.5,12.8,24.6,9,24.8,12,29.5,6.7,23.8,10.8,23.6z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},30:{o:1,e:"elastic"},50:{o:0},70:{o:1,e:"elastic"},85:{o:0,e:"elastic"},100:{o:1}}}]},"cloud-down":{d:350,it:2,sh:[{i:{a:{p:"M10.167,8.543c-3.25-1.086-6.25,1.715-6.165,5.155c0.089,3.627,2.421,6.035,6.047,6.284C12.344,20.14,14,19.188,14,19.188v-3.787c0-1.326,1.075-2.4,2.4-2.4h1.2c1.326,0,2.4,1.075,2.4,2.4l0.001,4.031c0,0,0.93,0.6,2.389,0.531C28.118,19.7,30,16.275,30,12.957C30.002,8.585,26,6,22.009,7.389c0,0-0.708-3.582-5.551-3.722C10.212,3.485,10.167,8.543,10.167,8.543z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M17.43,26.809c-0.238,0.255-0.621,0.255-0.859,0l-4.436-4.342C11.9,22.209,11.979,22,12.314,22H16v-6.4c0-0.33,0.27-0.6,0.6-0.6H17.4c0.33,0,0.599,0.27,0.599,0.6V22h3.688c0.332,0,0.415,0.209,0.178,0.467L17.43,26.809z",s:"none",fl:"#333"}},f:{0:{p:"M17.43,15.809c-0.238,0.255-0.621,0.255-0.859,0L16,15.467V15l0,0v0.6c0-0.33,0.27-0.6,0.6-0.6H17.4c0.33,0,0.599,0.27,0.599,0.6V15H18v0.467L17.43,15.809z"},30:{p:"M17.43,22.809c-0.238,0.255-0.621,0.255-0.859,0L16,22.467V22l0,0v-6.4c0-0.33,0.27-0.6,0.6-0.6H17.4c0.33,0,0.599,0.27,0.599,0.6V22H18v0.467L17.43,22.809z"},
60:{p:"M17.43,26.809c-0.238,0.255-0.621,0.255-0.859,0l-4.436-4.342C11.9,22.209,11.979,22,12.314,22H16v-6.4c0-0.33,0.27-0.6,0.6-0.6H17.4c0.33,0,0.599,0.27,0.599,0.6V22h3.688c0.332,0,0.415,0.209,0.178,0.467L17.43,26.809z"},100:{}}}]},"cloud-rain":{d:600,it:3,sh:[{i:{a:{p:"M8.268,17.991c0.95,0.213,1-3.5,1-3.5S7.299,17.774,8.268,17.991zM11.268,14.991c0.95,0.213,1-3.5,1-3.5S10.299,14.774,11.268,14.991zM15.268,11.5c0.95,0.213,1-3.5,1-3.5S14.299,11.283,15.268,11.5zM14,16.991c0.95,0.213,1-3.5,1-3.5S13.031,16.774,14,16.991zM18.269,14.991c0.949,0.213,1-3.5,1-3.5S17.3,14.774,18.269,14.991zM22,11.991c0.95,0.213,1-3.5,1-3.5S21.031,11.774,22,11.991zM19.269,18.991c0.948,0.213,0.999-3.5,0.999-3.5S18.3,18.774,19.269,18.991zM23.268,14.991c0.95,0.213,1-3.5,1-3.5S22.299,14.774,23.268,14.991zM26.268,17.991c0.949,0.213,1-3.5,1-3.5S25.299,17.774,26.268,17.991zM27.268,12.991c0.949,0.213,1-3.5,1-3.5S26.299,12.774,27.268,12.991zM9.268,11.991c0.95,0.213,1-3.5,1-3.5S8.299,11.774,9.268,11.991z",
o:0,t:"t0,0",s:"none",fl:"#333"}},f:{0:{o:1,t:"t0,0"},98:{t:"t-3,11"},99:{o:0,t:"t-3,11"},100:{o:0,t:"t0,0"}}},{i:{a:{p:"M5.268,28.991c0.95,0.213,1-3.5,1-3.5S4.299,28.774,5.268,28.991zM8.268,25.991c0.95,0.213,1-3.5,1-3.5S7.299,25.774,8.268,25.991zM12.268,22.5c0.95,0.213,1-3.5,1-3.5S11.299,22.283,12.268,22.5zM11,27.991c0.95,0.213,1-3.5,1-3.5S10.031,27.774,11,27.991zM15.268,25.991c0.95,0.213,1-3.5,1-3.5S14.299,25.774,15.268,25.991zM19,22.991c0.95,0.213,1-3.5,1-3.5S18.031,22.774,19,22.991zM16.268,29.991c0.949,0.213,1-3.5,1-3.5S15.299,29.774,16.268,29.991zM20.268,25.991c0.95,0.213,1-3.5,1-3.5S19.299,25.774,20.268,25.991zM23.268,28.991c0.949,0.213,1-3.5,1-3.5S22.299,28.774,23.268,28.991zM24.268,23.991c0.949,0.213,1-3.5,1-3.5S23.299,23.774,24.268,23.991zM6.268,22.991c0.95,0.213,1-3.5,1-3.5S5.299,22.774,6.268,22.991z",
t:"t0,0",s:"none",fl:"#333"}},f:{0:{t:"t0,0"},97:{t:"t-3,11"},98:{t:"t0,0"},100:{t:"t0,0"}}},{i:{a:{p:"M8.247,19.98c-4.044-0.277-6.645-2.963-6.745-7.01C1.408,9.135,4.01,6.117,7.735,6.117c0,0-0.466,0.601-0.45,3.867c0.497-1.978,1.417-7.972,8.189-7.889c8.125,0.1,6.327,8.237,6.327,8.237c1.299-1.97,0.585-4.674,0.585-4.674c3.314-2.17,8.114,1.61,8.114,6.484c0,3.704-2.102,7.522-8.491,7.817c-2.909,0.135-4.11-1.176-8.409-0.865C13.6,19.094,10.805,20.156,8.247,19.98z",t:"t0,0",s:"none",fl:"#333"}},f:{}}]},"cloud-snow":{d:1E3,
it:2,sh:[{i:{a:{p:"M23,24c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C22.555,23,23,23.445,23,24zM17,22c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C16.555,21,17,21.445,17,22zM12,24c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C11.555,23,12,23.445,12,24zM18,26c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C17.555,25,18,25.445,18,26zM13,28c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C12.555,27,13,27.445,13,28zM7,23c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C6.555,22,7,22.445,7,23zM8,28c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C7.555,27,8,27.445,8,28zM22,29c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C21.555,28,22,28.445,22,29zM27,22c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C26.555,21,27,21.445,27,22zM27,27c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C26.555,26,27,26.445,27,27zM23,13c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C22.555,12,23,12.445,23,13zM17,11c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C16.555,10,17,10.445,17,11zM12,13c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C11.555,12,12,12.445,12,13zM18,15c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C17.555,14,18,14.445,18,15zM13,17c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C12.555,16,13,16.445,13,17zM7,12c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C6.555,11,7,11.445,7,12zM8,17c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C7.555,16,8,16.445,8,17zM22,18c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C21.555,17,22,17.445,22,18zM27,11c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C26.555,10,27,10.445,27,11zM27,16c0,0.551-0.445,1-1,1c-0.551,0-1-0.449-1-1c0-0.555,0.449-1,1-1C26.555,15,27,15.445,27,16z",
t:"t0,0",s:"none",fl:"#333"}},f:{0:{t:"t0,0"},100:{t:"t0,11"}},fIE:{0:{t:"t0,1"},100:{t:"t0,12.3"}}},{i:{a:{p:"M8.247,19.872c-4.044-0.277-6.645-2.963-6.745-7.01C1.408,9.026,4.01,6.008,7.735,6.008c0,0-0.466,0.601-0.45,3.867c0.497-1.978,1.417-7.972,8.189-7.889c8.125,0.1,6.327,8.237,6.327,8.237c1.299-1.97,0.585-4.674,0.585-4.674C25.7,3.379,30.5,7.16,30.5,12.033c0,3.704-2.102,7.663-8.491,7.958c-2.909,0.135-4.11-1.316-8.409-1.006C13.6,18.985,10.805,20.048,8.247,19.872z",s:"none",fl:"#333"}},f:{}}]},"cloud-sun":{d:500,
it:3,sh:[{i:{a:{p:"M6.711,26.084c-3.124-0.215-5.132-2.289-5.209-5.415c-0.073-2.963,1.937-5.294,4.814-5.294c0,0-0.36,0.464-0.348,2.987c0.384-1.528,1.095-6.158,6.325-6.094c6.276,0.077,4.886,6.363,4.886,6.363c1.004-1.521,0.453-3.61,0.453-3.61c2.561-1.676,6.268,1.244,6.268,5.008c0,2.861-1.623,5.811-6.559,6.039c-2.248,0.104-3.175-0.908-6.495-0.669C10.847,25.398,8.688,26.22,6.711,26.084z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M26.097,13.924c-0.006,1.401-0.534,2.677-1.399,3.645c-0.031,0.033-0.092,0.1-0.092,0.1s-0.577-2.235-2.991-3.612c-2.294-1.309-3.999-0.215-3.999-0.215c-0.793-1.604-2.195-2.008-2.195-2.008c0.832-2.097,2.887-3.439,5.198-3.431C23.656,8.414,26.108,10.887,26.097,13.924z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M19.945,6.834c0.035,0.239-0.157,0.466-0.43,0.506l0,0c-0.274,0.041-0.523-0.12-0.56-0.359l-0.387-2.596C18.534,4.146,18.728,3.919,19,3.878l0,0c0.273-0.041,0.523,0.12,0.559,0.359L19.945,6.834zM15.145,5.79c-0.143-0.195-0.439-0.221-0.662-0.058l0,0c-0.223,0.163-0.289,0.453-0.146,0.648l1.549,2.119c0.143,0.196,0.438,0.222,0.661,0.059l0,0c0.224-0.163,0.289-0.453,0.146-0.648L15.145,5.79zM11.958,9.215c-0.217-0.106-0.491,0.008-0.613,0.256l0,0c-0.122,0.248-0.045,0.535,0.172,0.642l2.356,1.157c0.217,0.106,0.492-0.008,0.613-0.255l0,0c0.122-0.249,0.045-0.536-0.172-0.643L11.958,9.215zM27.656,20.627c0.187,0.155,0.479,0.11,0.655-0.102l0,0c0.18-0.212,0.174-0.509-0.012-0.664l-2.011-1.688c-0.186-0.154-0.479-0.11-0.656,0.103l0,0c-0.179,0.213-0.171,0.509,0.012,0.665L27.656,20.627zM29.932,16.538c0.236,0.052,0.474-0.124,0.532-0.394l0,0c0.062-0.27-0.081-0.531-0.318-0.582l-2.566-0.561c-0.234-0.05-0.475,0.125-0.532,0.396l0,0c-0.06,0.271,0.084,0.53,0.319,0.583L29.932,16.538zM30.046,11.86c0.233-0.064,0.362-0.33,0.289-0.597l0,0c-0.073-0.267-0.32-0.432-0.554-0.367l-2.532,0.696c-0.231,0.064-0.363,0.332-0.288,0.598l0,0c0.072,0.267,0.32,0.431,0.554,0.368L30.046,11.86zM27.973,7.665C28.15,7.5,28.14,7.206,27.95,7.003l0,0c-0.187-0.203-0.483-0.234-0.659-0.069l-1.92,1.794c-0.175,0.165-0.165,0.462,0.023,0.663l0,0c0.188,0.203,0.483,0.233,0.661,0.069L27.973,7.665zM24.188,4.915c0.081-0.229-0.065-0.485-0.328-0.576l0,0c-0.26-0.092-0.536,0.018-0.614,0.246l-0.867,2.48c-0.077,0.228,0.068,0.487,0.329,0.576l0,0c0.262,0.093,0.537-0.018,0.617-0.246L24.188,4.915z",
s:"none",fl:"#333"}},f:{33:{p:"M19.945,6.834c0.035,0.239-0.157,0.466-0.43,0.506l0,0c-0.274,0.041-0.523-0.12-0.56-0.359L18.27,2.707C18.234,2.467,18.428,2.241,18.7,2.2l0,0c0.273-0.041,0.523,0.12,0.559,0.359L19.945,6.834zM15.145,5.79c-0.143-0.195-0.439-0.221-0.662-0.058l0,0c-0.223,0.163-0.289,0.453-0.146,0.648l1.549,2.119c0.143,0.196,0.438,0.222,0.661,0.059l0,0c0.224-0.163,0.289-0.453,0.146-0.648L15.145,5.79zM10.613,8.544C10.396,8.438,10.122,8.552,10,8.8l0,0c-0.122,0.248-0.045,0.535,0.172,0.642l3.701,1.828c0.217,0.106,0.492-0.008,0.613-0.255l0,0c0.122-0.249,0.045-0.536-0.172-0.643L10.613,8.544zM27.656,20.627c0.187,0.155,0.479,0.11,0.655-0.102l0,0c0.18-0.212,0.174-0.509-0.012-0.664l-2.011-1.688c-0.186-0.154-0.479-0.11-0.656,0.103l0,0c-0.179,0.213-0.171,0.509,0.012,0.665L27.656,20.627zM31.153,16.976c0.236,0.051,0.474-0.124,0.532-0.394l0,0c0.062-0.27-0.081-0.531-0.318-0.582l-3.788-0.999c-0.234-0.05-0.475,0.125-0.532,0.396l0,0c-0.06,0.271,0.084,0.53,0.319,0.583L31.153,16.976zM30.046,11.86c0.233-0.064,0.362-0.33,0.289-0.597l0,0c-0.073-0.267-0.32-0.432-0.554-0.367l-2.532,0.696c-0.231,0.064-0.363,0.332-0.288,0.598l0,0c0.072,0.267,0.32,0.431,0.554,0.368L30.046,11.86zM29.122,6.562C29.3,6.396,29.289,6.102,29.1,5.9l0,0c-0.187-0.203-0.483-0.234-0.659-0.069l-3.069,2.897c-0.175,0.165-0.165,0.462,0.023,0.663l0,0c0.188,0.203,0.483,0.233,0.661,0.069L29.122,6.562zM24.188,4.915c0.081-0.229-0.065-0.485-0.328-0.576l0,0c-0.26-0.092-0.536,0.018-0.614,0.246l-0.867,2.48c-0.077,0.228,0.068,0.487,0.329,0.576l0,0c0.262,0.093,0.537-0.018,0.617-0.246L24.188,4.915z"},
67:{p:"M19.945,6.834c0.035,0.239-0.157,0.466-0.43,0.506l0,0c-0.274,0.041-0.523-0.12-0.56-0.359l-0.387-2.596C18.534,4.146,18.728,3.919,19,3.878l0,0c0.273-0.041,0.523,0.12,0.559,0.359L19.945,6.834zM14.162,4.458C14.02,4.263,13.723,4.237,13.5,4.4l0,0c-0.223,0.163-0.289,0.453-0.146,0.648l2.532,3.451c0.143,0.196,0.438,0.222,0.661,0.059l0,0c0.224-0.163,0.289-0.453,0.146-0.648L14.162,4.458zM11.958,9.215c-0.217-0.106-0.491,0.008-0.613,0.256l0,0c-0.122,0.248-0.045,0.535,0.172,0.642l2.356,1.157c0.217,0.106,0.492-0.008,0.613-0.255l0,0c0.122-0.249,0.045-0.536-0.172-0.643L11.958,9.215zM28.444,21.302c0.187,0.155,0.479,0.11,0.655-0.102l0,0c0.18-0.212,0.174-0.509-0.012-0.664l-2.799-2.363c-0.186-0.154-0.479-0.11-0.656,0.103l0,0c-0.179,0.213-0.171,0.509,0.012,0.665L28.444,21.302zM29.932,16.538c0.236,0.052,0.474-0.124,0.532-0.394l0,0c0.062-0.27-0.081-0.531-0.318-0.582l-2.566-0.561c-0.234-0.05-0.475,0.125-0.532,0.396l0,0c-0.06,0.271,0.084,0.53,0.319,0.583L29.932,16.538zM31.391,11.5c0.233-0.064,0.362-0.33,0.289-0.597l0,0c-0.073-0.267-0.32-0.432-0.554-0.367l-3.877,1.057c-0.231,0.064-0.363,0.332-0.288,0.598l0,0c0.072,0.267,0.32,0.431,0.554,0.368L31.391,11.5zM27.973,7.665C28.15,7.5,28.14,7.206,27.95,7.003l0,0c-0.187-0.203-0.483-0.234-0.659-0.069l-1.92,1.794c-0.175,0.165-0.165,0.462,0.023,0.663l0,0c0.188,0.203,0.483,0.233,0.661,0.069L27.973,7.665zM24.729,3.276C24.81,3.048,24.663,2.792,24.4,2.7l0,0c-0.26-0.092-0.536,0.018-0.614,0.246l-1.408,4.118c-0.077,0.228,0.068,0.487,0.329,0.576l0,0c0.262,0.093,0.537-0.018,0.617-0.246L24.729,3.276z"},
100:{p:"M19.945,6.834c0.035,0.239-0.157,0.466-0.43,0.506l0,0c-0.274,0.041-0.523-0.12-0.56-0.359l-0.387-2.596C18.534,4.146,18.728,3.919,19,3.878l0,0c0.273-0.041,0.523,0.12,0.559,0.359L19.945,6.834zM15.145,5.79c-0.143-0.195-0.439-0.221-0.662-0.058l0,0c-0.223,0.163-0.289,0.453-0.146,0.648l1.549,2.119c0.143,0.196,0.438,0.222,0.661,0.059l0,0c0.224-0.163,0.289-0.453,0.146-0.648L15.145,5.79zM11.958,9.215c-0.217-0.106-0.491,0.008-0.613,0.256l0,0c-0.122,0.248-0.045,0.535,0.172,0.642l2.356,1.157c0.217,0.106,0.492-0.008,0.613-0.255l0,0c0.122-0.249,0.045-0.536-0.172-0.643L11.958,9.215zM27.656,20.627c0.187,0.155,0.479,0.11,0.655-0.102l0,0c0.18-0.212,0.174-0.509-0.012-0.664l-2.011-1.688c-0.186-0.154-0.479-0.11-0.656,0.103l0,0c-0.179,0.213-0.171,0.509,0.012,0.665L27.656,20.627zM29.932,16.538c0.236,0.052,0.474-0.124,0.532-0.394l0,0c0.062-0.27-0.081-0.531-0.318-0.582l-2.566-0.561c-0.234-0.05-0.475,0.125-0.532,0.396l0,0c-0.06,0.271,0.084,0.53,0.319,0.583L29.932,16.538zM30.046,11.86c0.233-0.064,0.362-0.33,0.289-0.597l0,0c-0.073-0.267-0.32-0.432-0.554-0.367l-2.532,0.696c-0.231,0.064-0.363,0.332-0.288,0.598l0,0c0.072,0.267,0.32,0.431,0.554,0.368L30.046,11.86zM27.973,7.665C28.15,7.5,28.14,7.206,27.95,7.003l0,0c-0.187-0.203-0.483-0.234-0.659-0.069l-1.92,1.794c-0.175,0.165-0.165,0.462,0.023,0.663l0,0c0.188,0.203,0.483,0.233,0.661,0.069L27.973,7.665zM24.188,4.915c0.081-0.229-0.065-0.485-0.328-0.576l0,0c-0.26-0.092-0.536,0.018-0.614,0.246l-0.867,2.48c-0.077,0.228,0.068,0.487,0.329,0.576l0,0c0.262,0.093,0.537-0.018,0.617-0.246L24.188,4.915z"}}}]},
"cloud-up":{d:350,it:2,sh:[{i:{a:{p:"M16.458,3.667c-6.246-0.182-6.291,4.876-6.291,4.876c-3.25-1.086-6.25,1.715-6.165,5.155C4.208,18.208,7.5,20.292,11,20c0,0-0.045-0.754,0-1c0.048-0.265,0.153-0.405,0.589-0.902l4.621-4.722c0.437-0.501,1.143-0.501,1.579,0L22.406,18c0.438,0.497,0.545,0.637,0.594,0.902C23.05,19.172,23,20,23,20c4-0.5,7-2.583,7-7.043C30.002,8.585,26,6,22.009,7.389C22.009,7.389,21.301,3.808,16.458,3.667z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M17.43,15.79c-0.238-0.255-0.621-0.255-0.859,0l-3.436,3.743C12.9,19.791,12.979,20,13.314,20H16v6.4c0,0.33,0.27,0.6,0.6,0.6H17.4c0.33,0,0.599-0.27,0.599-0.6V20h2.688c0.332,0,0.415-0.209,0.178-0.467L17.43,15.79z",
s:"none",fl:"#333"}},f:{0:{p:"M17.43,26.191c-0.238-0.255-0.621-0.255-0.859,0l0.25-0.066c-0.235,0.258-0.157,0.066,0.179,0.066h-1V26.4c0,0.33,0.27,0.6,0.6,0.6H17.4c0.33,0,0.599-0.27,0.599-0.6v-0.209H17c0.332,0,0.415,0.191,0.178-0.066L17.43,26.191z"},30:{p:"M17.43,22c-0.238-0.255-0.621-0.255-0.859,0l0.25-0.066C16.585,22.191,16.664,22,17,22h-1v4.4c0,0.33,0.27,0.6,0.6,0.6H17.4c0.33,0,0.599-0.27,0.599-0.6V22H17c0.332,0,0.415,0.191,0.178-0.066L17.43,22z"},60:{p:"M17.43,15.79c-0.238-0.255-0.621-0.255-0.859,0l-3.436,3.743C12.9,19.791,12.979,20,13.314,20H16v6.4c0,0.33,0.27,0.6,0.6,0.6H17.4c0.33,0,0.599-0.27,0.599-0.6V20h2.688c0.332,0,0.415-0.209,0.178-0.467L17.43,15.79z"},
100:{}}}]},code:{d:1400,it:1,sh:[{i:{a:{p:"M2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM13.675,10.593c0.434-0.433,0.434-1.136,0-1.569l-1.699-1.699c-0.434-0.434-1.135-0.434-1.57,0l-8.08,7.89c-0.434,0.434-0.434,1.136,0,1.569l8.08,7.89c0.436,0.434,1.137,0.434,1.57,0l1.699-1.699c0.434-0.434,0.434-1.136,0-1.569L8.078,16L13.675,10.593zM18.325,21.407c-0.434,0.433-0.434,1.136,0,1.568l1.699,1.699c0.434,0.434,1.135,0.434,1.57,0l8.08-7.89c0.434-0.434,0.434-1.136,0-1.569l-8.08-7.891c-0.436-0.434-1.137-0.434-1.57,0l-1.699,1.699c-0.434,0.434-0.434,1.136,0,1.569L23.922,16L18.325,21.407z",
s:"none",fl:"#333"}},f:{3:{p:"M2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM7.188,3.597c0.193-0.193,0.193-0.505,0-0.697L6.434,2.145c-0.193-0.193-0.504-0.193-0.698,0L2.145,5.651c-0.193,0.192-0.193,0.505,0,0.697l3.591,3.507c0.194,0.192,0.505,0.192,0.698,0l0.755-0.755c0.193-0.193,0.193-0.505,0-0.698L4.701,6L7.188,3.597zM8.811,8.404c-0.192,0.191-0.192,0.504,0,0.697l0.756,0.754c0.192,0.193,0.504,0.193,0.697,0l3.592-3.506c0.192-0.193,0.192-0.506,0-0.697l-3.592-3.507c-0.193-0.193-0.505-0.193-0.697,0L8.811,2.901c-0.192,0.191-0.192,0.503,0,0.697L11.298,6L8.811,8.404z"},
6:{},15:{p:"M28,4H8V2h20V4zM24,6H8v2h16V6zM14,10H2v2h12V10zM20,14H2v2h18V14zM30,18H2v2h28V18zM12,22H2v2h10V22zM20,26H2v2h18V26zM2,6.5L2,6.5L2,6.5M7.188,3.597c0.193-0.193,0.193-0.505,0-0.697L6.434,2.145c-0.193-0.193-0.504-0.193-0.698,0L2.145,5.651c-0.193,0.192-0.193,0.505,0,0.697l3.591,3.507c0.194,0.192,0.505,0.192,0.698,0l0.755-0.755c0.193-0.193,0.193-0.505,0-0.698L4.701,6L7.188,3.597zM21.811,28.404c-0.192,0.191-0.192,0.504,0,0.697l0.756,0.754c0.192,0.193,0.504,0.193,0.697,0l3.592-3.506c0.192-0.193,0.192-0.506,0-0.697l-3.592-3.508c-0.193-0.193-0.505-0.193-0.697,0L21.811,22.9c-0.192,0.191-0.192,0.504,0,0.697L24.298,26L21.811,28.404z"},
50:{},55:{p:"M2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM2,6.5L2,6.5L2,6.5L2,6.5L2,6.5zM13.675,10.593c0.434-0.433,0.434-1.136,0-1.569l-1.699-1.699c-0.434-0.434-1.135-0.434-1.57,0l-8.08,7.89c-0.434,0.434-0.434,1.136,0,1.569l8.08,7.89c0.436,0.434,1.137,0.434,1.57,0l1.699-1.699c0.434-0.434,0.434-1.136,0-1.569L8.078,16L13.675,10.593zM18.325,21.407c-0.434,0.433-0.434,1.136,0,1.568l1.699,1.699c0.434,0.434,1.135,0.434,1.57,0l8.08-7.89c0.434-0.434,0.434-1.136,0-1.569l-8.08-7.891c-0.436-0.434-1.137-0.434-1.57,0l-1.699,1.699c-0.434,0.434-0.434,1.136,0,1.569L23.922,16L18.325,21.407z"},
100:{}}}]},columns:{d:1E3,it:1,sh:[{i:{a:{p:"M28.8,2H5.2C4.537,2,4,2.537,4,3.2v25.6C4,29.463,4.537,30,5.2,30h23.6c0.663,0,1.2-0.537,1.2-1.2V3.2C30,2.537,29.463,2,28.8,2zM28,28H6V6h6l0,0h2l0,0h2v22h2V6h2l0,0h2l0,0h6V28z",s:"none",fl:"#333"}},f:{10:{p:"M28.8,2H5.2C4.537,2,4,2.537,4,3.2v25.6C4,29.463,4.537,30,5.2,30h23.6c0.663,0,1.2-0.537,1.2-1.2V3.2C30,2.537,29.463,2,28.8,2zM28,28H6V6h6l0,0h2l0,0h2l0,0h2l0,0h2l0,0h2l0,0h6V28z"},15:{},25:{p:"M28.8,2H5.2C4.537,2,4,2.537,4,3.2v25.6C4,29.463,4.537,30,5.2,30h23.6c0.663,0,1.2-0.537,1.2-1.2V3.2C30,2.537,29.463,2,28.8,2zM28,28H6V6h6v22h2V6h2l0,0h2l0,0h2v22h2V6h6V28z"},
50:{},60:{p:"M28.8,2H5.2C4.537,2,4,2.537,4,3.2v25.6C4,29.463,4.537,30,5.2,30h23.6c0.663,0,1.2-0.537,1.2-1.2V3.2C30,2.537,29.463,2,28.8,2zM28,28H6V6h6l0,0h2l0,0h2l0,0h2l0,0h2l0,0h2l0,0h6V28z"},65:{},75:{p:"M28.8,2H5.2C4.537,2,4,2.537,4,3.2v25.6C4,29.463,4.537,30,5.2,30h23.6c0.663,0,1.2-0.537,1.2-1.2V3.2C30,2.537,29.463,2,28.8,2zM28,28H6V6h6l0,0h2l0,0h2v22h2V6h2l0,0h2l0,0h6V28z"},100:{}}}]},comment:{d:600,it:1,sh:[{i:{a:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.388,0.117,0.553,0.153c0.3,0.101,0.704,0.234,1.2,0.3c3.8,0.5,7.431-0.127,10.2-1.3c2.6-1.101,3.7-2,4.7-3.101c1.1-1.3,1.795-2.926,1.795-4.585C29.695,8.687,23.563,4.61,16,4.61z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t-15,20s0.4"},100:{o:1,t:"t0,0s1",e:"backOut"}}}]},comments:{d:600,it:1,sh:[{i:{a:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.332,0.07,0.497,0.106c-0.155-0.462-0.246-0.942-0.246-1.442c0-3.394,3.776-6.051,8.6-6.051c3.463,0,6.379,1.377,7.75,3.406c1.168-1.34,1.848-2.893,1.848-4.552C29.695,8.687,23.563,4.61,16,4.61z",o:1,s:"none",fl:"#333"}},f:{0:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.388,0.117,0.553,0.153c0.3,0.101,0.704,0.234,1.2,0.3c3.8,0.5,7.431-0.127,10.2-1.3c2.6-1.101,3.7-2,4.7-3.101c1.1-1.3,1.795-2.926,1.795-4.585C29.695,8.687,23.563,4.61,16,4.61z",
o:0,t:"t-15,20s0.4"},30:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.388,0.117,0.553,0.153c0.3,0.101,0.704,0.234,1.2,0.3c3.8,0.5,7.431-0.127,10.2-1.3c2.6-1.101,3.7-2,4.7-3.101c1.1-1.3,1.795-2.926,1.795-4.585C29.695,8.687,23.563,4.61,16,4.61z",o:1,t:""},60:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.332,0.07,0.497,0.106C12.2,22.3,12.313,22.314,12.8,22.2c1.7-0.4,4.4-1.5,9.2-2.8c3.343-0.905,4.2-0.8,5.848-1.134c1.168-1.34,1.848-2.893,1.848-4.552C29.695,8.687,23.563,4.61,16,4.61z"},
80:{p:"M16,4.61c-7.563,0-13.695,4.076-13.695,9.105c0,2.877,2.013,5.439,5.147,7.107c-0.446,1.479-1.336,3.117-3.056,4.566c0,0,4.015-0.266,6.851-3.143c0.163,0.039,0.332,0.07,0.497,0.106c-0.155-0.462-0.246-0.942-0.246-1.442c0-3.394,3.776-6.051,8.6-6.051c3.463,0,6.379,1.377,7.75,3.406c1.168-1.34,1.848-2.893,1.848-4.552C29.695,8.687,23.563,4.61,16,4.61z"},100:{}}},{i:{a:{p:"M27.2,21.121c0-2.789-3.2-5.053-7.15-5.053c-3.948,0-7.15,2.264-7.15,5.053c0,2.791,3.202,5.054,7.15,5.054c0.876,0,1.708-0.116,2.479-0.319c1.482,1.598,3.579,1.744,3.579,1.744c-0.899-0.804-1.362-1.713-1.596-2.534C26.148,24.141,27.2,22.719,27.2,21.121z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0,t:"t10,10s0.4"},25:{o:0,t:"t10,10s0.4"},80:{o:1,t:"t0,0s1"},100:{}}}]},compass:{d:600,it:2,sh:[{i:{a:{p:"M14.945,15.575l-2.518,7.989l6.627-5.14l2.517-7.99L14.945,15.575zM18.027,17.712l-3.858,3.409l1.803-4.833L18.027,17.712z",t:"r0",s:"none",fl:"#333"}},f:{30:{t:"r-34"},60:{t:"r30"},100:{t:"r0"}},fIE:{30:{t:"r-34,15.5,15.5"},60:{t:"r30,15.5,15.5"},100:{t:"r0,15.5,15.5"}}},{i:{a:{p:"M17,4C9.821,4,4,9.819,4,17c0,7.18,5.821,13,13,13c7.18,0,13-5.82,13-13C30,9.819,24.18,4,17,4zM17,26c-4.97,0-9-4.029-9-9c0-4.97,4.03-9,9-9c4.971,0,9.002,4.03,9.002,9C26.002,21.971,21.971,26,17,26zM7,1.5C5.619,1.5,4.5,2.619,4.5,4S5.619,6.5,7,6.5S9.5,5.381,9.5,4S8.381,1.5,7,1.5zM7,5C6.448,5,6,4.552,6,4s0.448-1,1-1s1,0.448,1,1S7.552,5,7,5z",
s:"none",fl:"#333"}},f:{}}]},"credit-card":{d:1200,it:1,sh:[{i:{a:{p:"M6,12h20v-2H6",o:0,s:"none",fl:"#333"}},f:{5:{o:0},10:{o:1},70:{},80:{o:0},100:{}}},{i:{a:{p:"M28,6H4C2.896,6,2,6.896,2,8v16c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.896,29.105,6,28,6zM28,8v2H4V8H28zM4,24v-8h24v8H4zM7.6,22H6.4C6.179,22,6,21.82,6,21.6V20.4C6,20.18,6.179,20,6.4,20H7.6C7.821,20,8,20.18,8,20.4V21.6C8,21.82,7.821,22,7.6,22zM11.6,22H10.4c-0.222,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.179-0.4,0.4-0.4H11.6c0.222,0,0.4,0.18,0.4,0.4V21.6C12,21.82,11.821,22,11.6,22zM15.6,22H14.4c-0.222,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.179-0.4,0.4-0.4H15.6c0.222,0,0.4,0.18,0.4,0.4V21.6C16,21.82,15.821,22,15.6,22zM19.6,22H18.4c-0.221,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.18-0.4,0.4-0.4H19.6c0.221,0,0.4,0.18,0.4,0.4V21.6C20,21.82,19.82,22,19.6,22z",
o:1,s:"none",fl:"#333"}},f:{10:{p:"M26,32V8c0-1.104-0.896-2-2-2H8C6.895,6,6,6.896,6,8v24c0,1.105,0.895,2,2,2h16C25.104,34,26,33.105,26,32zM24,32h-2V8h2V32zM8,8h8v24H8V8zM10,11.6V10.4c0-0.222,0.18-0.4,0.4-0.4H11.6c0.221,0,0.4,0.179,0.4,0.4V11.6c0,0.222-0.18,0.4-0.4,0.4H10.4C10.18,12,10,11.821,10,11.6zM10,15.6V14.4c0-0.222,0.18-0.4,0.4-0.4H11.6c0.221,0,0.4,0.179,0.4,0.4V15.6c0,0.222-0.18,0.4-0.4,0.4H10.4C10.18,16,10,15.821,10,15.6zM10,19.6V18.4c0-0.222,0.18-0.4,0.4-0.4H11.6c0.221,0,0.4,0.179,0.4,0.4V19.6c0,0.222-0.18,0.4-0.4,0.4H10.4C10.18,20,10,19.821,10,19.6zM10,23.6V22.4c0-0.221,0.18-0.4,0.4-0.4H11.6c0.221,0,0.4,0.18,0.4,0.4V23.6c0,0.221-0.18,0.4-0.4,0.4H10.4C10.18,24,10,23.82,10,23.6z"},
20:{p:"M26,34l-2-18c0-1.104-0.896-2-2-2H10c-1.105,0-2,0.896-2,2L6,34c0,1.105,0.895,2,2,2h16C25.104,36,26,35.105,26,34zM24,34h-2l-2-18h2L24,34zM10,16h6v18H8L10,16zM11.835,19.6L11.94,18.4c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4L13.835,19.6c-0.02,0.222-0.215,0.4-0.436,0.4H12.2C11.979,20,11.815,19.821,11.835,19.6zM11.435,22.902l0.105-1.203c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.105,1.203c-0.02,0.222-0.115,0.4-0.335,0.4H11.9C11.679,23.303,11.415,23.124,11.435,22.902zM11.035,26.205l0.105-1.199c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.105,1.199c-0.02,0.222-0.215,0.4-0.436,0.4H11.4C11.18,26.605,11.016,26.427,11.035,26.205zM10.536,29.707l0.105-1.199c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.105,1.199c-0.02,0.221-0.215,0.4-0.436,0.4h-1.199C10.68,30.107,10.516,29.928,10.536,29.707z"},
30:{p:"M26,24.199L24,6.2c0-1.104-0.896-2-2-2H10c-1.105,0-2,0.896-2,2L6,24.199c0,1.105,0.895,2,2,2h16C25.104,26.199,26,25.305,26,24.199zM24,24.199h-2L20,6.2h2L24,24.199zM10,6.2h6v17.999H8L10,6.2zM11.835,9.8l0.105-1.199c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4L13.835,9.8c-0.02,0.222-0.215,0.4-0.436,0.4H12.2C11.979,10.2,11.815,10.021,11.835,9.8zM11.435,13.102L11.54,11.9c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.105,1.202c-0.02,0.222-0.115,0.401-0.335,0.401H11.9C11.679,13.503,11.415,13.324,11.435,13.102zM11.035,16.405l0.105-1.199c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.105,1.199c-0.02,0.222-0.215,0.4-0.436,0.4H11.4C11.18,16.806,11.016,16.627,11.035,16.405zM10.536,19.906l0.105-1.199c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.105,1.199c-0.02,0.221-0.215,0.4-0.436,0.4h-1.199C10.68,20.307,10.516,20.127,10.536,19.906z"},
40:{p:"M26,18L24.299,7c0-1.104-0.896-2-2-2H9.6c-1.105,0-2,0.896-2,2L6,18c0,1.105,0.895,2,2,2h16C25.104,20,26,19.105,26,18zM24,18h-2L20.299,7h2L24,18zM9.6,7h6L16,18H8L9.6,7zM11.089,5.374l-0.031,0.15c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.031-0.15c-0.02,0.222-0.215,0.4-0.436,0.4h-1.199C11.233,5.774,11.069,5.596,11.089,5.374zM11.034,6.095l-0.018,0.096c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.018-0.096c-0.02,0.222-0.115,0.401-0.335,0.401H11.5C11.279,6.496,11.015,6.317,11.034,6.095zM11.035,10.206l0.105-1.199c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.105,1.199c-0.02,0.222-0.215,0.4-0.436,0.4H11.4C11.18,10.606,11.016,10.428,11.035,10.206zM10.536,13.707l0.105-1.199c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.105,1.199c-0.02,0.221-0.215,0.4-0.436,0.4h-1.199C10.68,14.107,10.516,13.928,10.536,13.707z"},
50:{p:"M25.502,11.5l-0.506-4.698c0-1.104-0.896-2-2-2H9.099c-1.105,0-2,0.896-2,2L6.5,11.5c0,1.105,0.895,2,2,2h15.001C24.606,13.5,25.502,12.605,25.502,11.5zM23.502,11.5h-2l-0.506-4.698h2L23.502,11.5zM9.099,6.802h6.5L16,11.5H8.5L9.099,6.802zM10.588,5.176l-0.031,0.15c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.031-0.15c-0.02,0.222-0.215,0.4-0.436,0.4h-1.199C10.733,5.576,10.569,5.397,10.588,5.176zM10.534,5.897l-0.018,0.096c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.018-0.096c-0.02,0.222-0.115,0.401-0.335,0.401h-1.199C10.778,6.298,10.514,6.119,10.534,5.897zM10.072,7.182l0.011,0.067c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.011-0.067c-0.02,0.222,0.286,0.4,0.065,0.4h-1.199C10.717,7.582,10.053,7.403,10.072,7.182zM10.035,7.207l0.048,0.125c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.048-0.125c-0.02,0.221,0.286,0.4,0.065,0.4h-1.199C10.68,7.607,10.016,7.428,10.035,7.207z"},
60:{o:0,p:"M25.502,7.997l-0.506-1.195c0-1.104-0.896-2-2-2H9.099c-1.105,0-2,0.896-2,2L6.5,7.997c0,1.105,0.895,2,2,2h15.001C24.606,9.997,25.502,9.102,25.502,7.997zM23.502,7.997h-2l-0.506-1.195h2L23.502,7.997zM9.099,6.802h6.5L16,7.997H8.5L9.099,6.802zM10.588,5.176l-0.031,0.15c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.031-0.15c-0.02,0.222-0.215,0.4-0.436,0.4h-1.199C10.733,5.576,10.569,5.397,10.588,5.176zM10.534,5.897l-0.018,0.096c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l0.018-0.096c-0.02,0.222-0.115,0.401-0.335,0.401h-1.199C10.778,6.298,10.514,6.119,10.534,5.897zM10.072,7.182l0.011,0.067c0.019-0.222,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.179,0.366,0.4l-0.011-0.067c-0.02,0.222,0.286,0.4,0.065,0.4h-1.199C10.717,7.582,10.053,7.403,10.072,7.182zM10.035,7.207l0.048,0.125c0.019-0.221,0.214-0.4,0.435-0.4h1.199c0.221,0,0.385,0.18,0.366,0.4l-0.048-0.125c-0.02,0.221,0.286,0.4,0.065,0.4h-1.199C10.68,7.607,10.016,7.428,10.035,7.207z"},
90:{p:"M28,6H4C2.896,6,2,6.896,2,8v16c0,1.105,0.896,2,2,2h24c1.105,0,2-0.895,2-2V8C30,6.896,29.105,6,28,6zM28,8v2H4V8H28zM4,24v-8h24v8H4zM7.6,22H6.4C6.179,22,6,21.82,6,21.6V20.4C6,20.18,6.179,20,6.4,20H7.6C7.821,20,8,20.18,8,20.4V21.6C8,21.82,7.821,22,7.6,22zM11.6,22H10.4c-0.222,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.179-0.4,0.4-0.4H11.6c0.222,0,0.4,0.18,0.4,0.4V21.6C12,21.82,11.821,22,11.6,22zM15.6,22H14.4c-0.222,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.179-0.4,0.4-0.4H15.6c0.222,0,0.4,0.18,0.4,0.4V21.6C16,21.82,15.821,22,15.6,22zM19.6,22H18.4c-0.221,0-0.4-0.18-0.4-0.4V20.4c0-0.221,0.18-0.4,0.4-0.4H19.6c0.221,0,0.4,0.18,0.4,0.4V21.6C20,21.82,19.82,22,19.6,22z"},
91:{o:1},100:{}}},{i:{a:{p:"M26,12h2V6.4C28,5.075,26.926,4,25.6,4H6.4C5.075,4,4,5.075,4,6.4V12h2V8h20V12z",o:0,s:"none",fl:"#333"}},f:{5:{o:0},10:{o:1},70:{},80:{o:0},100:{}}}]},css3:{d:700,it:1,sh:[{i:{a:{p:"M3.655,2l2.247,25.201L15.985,30l10.11-2.803L28.345,2H3.655zM22.326,22.896L16,24.649v0.001l-0.014,0.003l-6.332-1.758l-0.433-4.852h3.103l0.22,2.464L16,21.435l3.437-0.928l0.358-4.008H9.083l-0.271-3.093l11.264,0.001l0.301-3.165L8.516,10.234L8.25,7.151h15.483L22.326,22.896z",s:"none",fl:"#333"}},
f:{20:{p:"M11.753,2L14,27.201L15.985,30l2.057-2.803L20.292,2H11.753zM16,22.896v1.754v0.001l-0.014,0.003L16,22.896v-4.852l0,0v2.464v0.927v-0.927v-4.009l0,0v-3.093l0,0v-3.172l0,0V7.151l0,0V22.896z"},30:{},50:{p:"M11.753,2L14,27.201L15.985,30l10.11-2.803L28.345,2H11.753zM22.326,22.896L16,24.649v0.001l-0.014,0.003L16,22.896v-4.852l0,0v2.464v0.927l3.437-0.928l0.358-4.008H16v-3.093l4.076,0.001l0.301-3.165L16,10.234V7.151h7.732L22.326,22.896z",e:"elastic"},60:{},80:{p:"M3.655,2l2.247,25.201L15.985,30l10.11-2.803L28.345,2H3.655zM22.326,22.896L16,24.649v0.001l-0.014,0.003l-6.332-1.758l-0.433-4.852h3.103l0.22,2.464L16,21.435l3.437-0.928l0.358-4.008H9.083l-0.271-3.093l11.264,0.001l0.301-3.165L8.516,10.234L8.25,7.151h15.483L22.326,22.896z",
e:"elastic"},100:{}}}]},dashboard:{d:600,it:1,sh:[{i:{a:{p:"M16,6C8.269,6,2,12.264,2,19.992c0,2.15,0.485,4.189,1.354,6.008h25.294C29.516,24.182,30,22.143,30,19.992C30,12.264,23.732,6,16,6zM27.826,22h-7.242c-0.77,1.771-2.529,3-4.584,3s-3.814-1.229-4.584-3H4.172C4.059,21.361,4,20.686,4,19.992C4,13.37,9.374,7.999,16,7.999c6.629,0,11.998,5.371,11.998,11.993C27.998,20.684,27.939,21.355,27.826,22z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M9,20c0-1.079,0.244-2.101,0.68-3.013C10.806,14.629,13.213,13,16,13c3.866,0,7,3.134,7,7h3c0-5.522-4.478-10-10-10c-3.735,0-6.992,2.048-8.709,5.083C6.469,16.535,6,18.213,6,20H9z",
o:0.1,s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M7.165,15.313c-0.361,0.693-0.635,1.359-0.827,2.049C6.111,18.18,6,19.031,6,20h3c0-0.537,0.053-1.044,0.16-1.53c0.108-0.49,0.271-0.959,0.489-1.417L7.165,15.313zM17.404,18.576c0.792,0.779,0.785,2.056,0.01,2.838c-0.779,0.789-2.038,0.783-2.819,0.01c-0.27-0.264-1.031-2.454-1.423-2.838L8.594,14c-0.395-0.389-0.253-1.166-0.003-1.417c0.249-0.25,1.017-0.394,1.41-0.005l4.586,4.594C14.979,17.561,17.143,18.314,17.404,18.576z",s:"none",fl:"#333"}},f:{3:{p:"M8.679,13.186c-0.528,0.576-0.965,1.149-1.329,1.766C6.919,15.682,6,17.646,6,20h3c0.021-1.604,0.56-2.807,0.79-3.249c0.231-0.445,0.509-0.856,0.839-1.242L8.679,13.186zM17.725,18.988c0.563,0.958,0.227,2.188-0.725,2.743c-0.957,0.562-2.171,0.229-2.726-0.72c-0.192-0.324-0.361-2.638-0.64-3.109l-3.235-5.615c-0.281-0.478,0.057-1.192,0.364-1.37c0.305-0.177,1.084-0.117,1.363,0.36l3.241,5.625C15.645,17.379,17.54,18.668,17.725,18.988z"},
6:{p:"M10.692,11.523c-0.659,0.419-1.23,0.86-1.741,1.361C8.346,13.479,6,16,6,20h3c0-2.646,1.506-4.378,1.842-4.745c0.338-0.371,0.714-0.695,1.132-0.982L10.692,11.523zM17.928,19.469c0.296,1.071-0.348,2.173-1.41,2.463c-1.069,0.295-2.157-0.341-2.447-1.401c-0.101-0.362,0.334-2.641,0.187-3.169l-1.671-6.261c-0.147-0.534,0.364-1.136,0.706-1.229c0.34-0.092,1.077,0.167,1.223,0.701l1.674,6.271C16.335,17.376,17.832,19.112,17.928,19.469z"},9:{p:"M13.067,10.438c-0.746,0.235-1.411,0.512-2.034,0.865C10.295,11.72,6,14.333,6,20h3c0-3.75,2.826-5.651,3.246-5.918c0.423-0.271,0.87-0.486,1.348-0.656L13.067,10.438zM18,19.985c0.008,1.112-0.898,2.01-2,2.015c-1.109,0.008-1.995-0.888-2.001-1.987c-0.004-0.376,1.006-2.464,1-3.013l0.006-6.48c-0.004-0.553,0.645-1.003,1-1.004c0.353-0.001,0.997,0.441,1,0.994L17,17C17.003,17.552,17.999,19.617,18,19.985z"},
12:{p:"M15.642,10.005c-0.781,0.034-1.495,0.129-2.188,0.309C12.632,10.526,6.246,12.411,6,20h3c0.07-4.692,3.979-6.417,4.905-6.688c0.482-0.142,0.966-0.245,1.472-0.285L15.642,10.005zM17.936,20.504c-0.28,1.076-1.388,1.708-2.453,1.428c-1.074-0.279-1.697-1.373-1.418-2.438c0.094-0.364,1.61-2.119,1.746-2.651l1.683-6.257c0.139-0.536,0.883-0.802,1.227-0.711c0.34,0.09,0.849,0.684,0.708,1.219l-1.686,6.268C17.603,17.895,18.03,20.147,17.936,20.504z"},15:{p:"M18.241,10.253c-0.764-0.17-1.478-0.271-2.194-0.269C10.875,10,6.136,13.864,6,20h3c0.118-4.779,4.042-6.982,7.021-7.005c0.502-0.004,0.684,0.016,1.183,0.108L18.241,10.253zM17.739,20.987c-0.549,0.968-1.783,1.291-2.739,0.745c-0.965-0.548-1.284-1.766-0.739-2.722c0.185-0.328,2.104-1.631,2.373-2.109l3.245-5.608c0.272-0.482,1.061-0.546,1.369-0.37c0.305,0.175,0.643,0.88,0.368,1.361l-3.25,5.618C18.093,18.381,17.923,20.668,17.739,20.987z"},
18:{p:"M20.688,11.166c-1.57-0.929-3.563-1.183-4.64-1.181C10.875,9.994,6.136,13.864,6,20h3c0.118-4.779,4.042-6.993,7.021-7.005c0.979-0.004,2.253,0.312,2.927,0.655L20.688,11.166zM17.425,21.404c-0.781,0.792-2.057,0.785-2.838,0.011c-0.791-0.779-0.783-2.038-0.01-2.82c0.264-0.27,2.454-1.031,2.837-1.423L22,12.594c0.388-0.395,1.166-0.253,1.419-0.003c0.248,0.249,0.393,1.017,0.003,1.41l-4.594,4.585C18.44,18.978,17.685,21.143,17.425,21.404z"},21:{p:"M22.814,12.68c-2.647-2.492-5.689-2.697-6.767-2.695C10.875,9.994,6.136,13.864,6,20h3c0.118-4.779,4.042-6.993,7.021-7.005c0.979-0.004,2.896,0.317,4.47,1.634L22.814,12.68zM17.013,21.726c-0.959,0.563-2.189,0.226-2.744-0.725c-0.562-0.957-0.229-2.171,0.72-2.727c0.325-0.192,2.637-0.361,3.109-0.641l5.614-3.234c0.478-0.281,1.192,0.057,1.372,0.364c0.175,0.304,0.116,1.083-0.362,1.362l-5.624,3.24C18.622,19.645,17.331,21.54,17.013,21.726z"},
50:{},55:{p:"M20.688,11.166c-1.57-0.929-3.563-1.183-4.64-1.181C10.875,9.994,6.136,13.864,6,20h3c0.118-4.779,4.042-6.993,7.021-7.005c0.979-0.004,2.253,0.312,2.927,0.655L20.688,11.166zM17.425,21.404c-0.781,0.792-2.057,0.785-2.838,0.011c-0.791-0.779-0.783-2.038-0.01-2.82c0.264-0.27,2.454-1.031,2.837-1.423L22,12.594c0.388-0.395,1.166-0.253,1.419-0.003c0.248,0.249,0.393,1.017,0.003,1.41l-4.594,4.585C18.44,18.978,17.685,21.143,17.425,21.404z"},60:{p:"M18.241,10.253c-0.764-0.17-1.478-0.271-2.194-0.269C10.875,10,6.136,13.864,6,20h3c0.118-4.779,4.042-6.982,7.021-7.005c0.502-0.004,0.684,0.016,1.183,0.108L18.241,10.253zM17.739,20.987c-0.549,0.968-1.783,1.291-2.739,0.745c-0.965-0.548-1.284-1.766-0.739-2.722c0.185-0.328,2.104-1.631,2.373-2.109l3.245-5.608c0.272-0.482,1.061-0.546,1.369-0.37c0.305,0.175,0.643,0.88,0.368,1.361l-3.25,5.618C18.093,18.381,17.923,20.668,17.739,20.987z"},
65:{p:"M15.642,10.005c-0.781,0.034-1.495,0.129-2.188,0.309C12.632,10.526,6.246,12.411,6,20h3c0.07-4.692,3.979-6.417,4.905-6.688c0.482-0.142,0.966-0.245,1.472-0.285L15.642,10.005zM17.936,20.504c-0.28,1.076-1.388,1.708-2.453,1.428c-1.074-0.279-1.697-1.373-1.418-2.438c0.094-0.364,1.61-2.119,1.746-2.651l1.683-6.257c0.139-0.536,0.883-0.802,1.227-0.711c0.34,0.09,0.849,0.684,0.708,1.219l-1.686,6.268C17.603,17.895,18.03,20.147,17.936,20.504z"},70:{p:"M13.067,10.438c-0.746,0.235-1.411,0.512-2.034,0.865C10.295,11.72,6,14.333,6,20h3c0-3.75,2.826-5.651,3.246-5.918c0.423-0.271,0.87-0.486,1.348-0.656L13.067,10.438zM18,19.985c0.008,1.112-0.898,2.01-2,2.015c-1.109,0.008-1.995-0.888-2.001-1.987c-0.004-0.376,1.006-2.464,1-3.013l0.006-6.48c-0.004-0.553,0.645-1.003,1-1.004c0.353-0.001,0.997,0.441,1,0.994L17,17C17.003,17.552,17.999,19.617,18,19.985z"},
75:{p:"M10.692,11.523c-0.659,0.419-1.23,0.86-1.741,1.361C8.346,13.479,6,16,6,20h3c0-2.646,1.506-4.378,1.842-4.745c0.338-0.371,0.714-0.695,1.132-0.982L10.692,11.523zM17.928,19.469c0.296,1.071-0.348,2.173-1.41,2.463c-1.069,0.295-2.157-0.341-2.447-1.401c-0.101-0.362,0.334-2.641,0.187-3.169l-1.671-6.261c-0.147-0.534,0.364-1.136,0.706-1.229c0.34-0.092,1.077,0.167,1.223,0.701l1.674,6.271C16.335,17.376,17.832,19.112,17.928,19.469z"},80:{p:"M8.679,13.186c-0.528,0.576-0.965,1.149-1.329,1.766C6.919,15.682,6,17.646,6,20h3c0.021-1.604,0.56-2.807,0.79-3.249c0.231-0.445,0.509-0.856,0.839-1.242L8.679,13.186zM17.725,18.988c0.563,0.958,0.227,2.188-0.725,2.743c-0.957,0.562-2.171,0.229-2.726-0.72c-0.192-0.324-0.361-2.638-0.64-3.109l-3.235-5.615c-0.281-0.478,0.057-1.192,0.364-1.37c0.305-0.177,1.084-0.117,1.363,0.36l3.241,5.625C15.645,17.379,17.54,18.668,17.725,18.988z"},
85:{p:"M7.165,15.313c-0.361,0.693-0.635,1.359-0.827,2.049C6.111,18.18,6,19.031,6,20h3c0-0.537,0.053-1.044,0.16-1.53c0.108-0.49,0.271-0.959,0.489-1.417L7.165,15.313zM17.404,18.576c0.792,0.779,0.785,2.056,0.01,2.838c-0.779,0.789-2.038,0.783-2.819,0.01c-0.27-0.264-1.031-2.454-1.423-2.838L8.594,14c-0.395-0.389-0.253-1.166-0.003-1.417c0.249-0.25,1.017-0.394,1.41-0.005l4.586,4.594C14.979,17.561,17.143,18.314,17.404,18.576z"},100:{}}}]},desktop:{d:1400,it:1,sh:[{i:{a:{p:"M8,8H6V6h2V8zM8,10H6v2h2V10zM8,14H6v2h2V14zM3.5,20.5H3V21h0.5V20.5z",
o:0,s:"none",fl:"#333"}},f:{0:{o:1},10:{},15:{p:"M7.5,7.5h-1v-1h1V7.5zM8,10H6v2h2V10zM8,14H6v2h2V14zM3.5,20.5H3V21h0.5V20.5z"},20:{p:"M8,8H6V6h2V8zM8,10H6v2h2V10zM8,14H6v2h2V14zM3.5,20.5H3V21h0.5V20.5z"},30:{},31:{p:"M7,11L7,11L7,11L7,11L7,11zM7,11L7,11L7,11L7,11L7,11zM7,11L7,11L7,11L7,11L7,11zM3.5,20.5H3V21h0.5V20.5z"},45:{o:0.7,p:"M7,11L7,11L7,11L7,11L7,11zM7,11L7,11L7,11L7,11L7,11zM7,11L7,11L7,11L7,11L7,11zM29,3H3v18h26V3z"},80:{},82:{o:0},85:{p:"M8,8H6V6h2V8zM8,10H6v2h2V10zM8,14H6v2h2V14zM3.5,20.5H3V21h0.5V20.5z"},
100:{}}},{i:{a:{p:"M20,25v2.699c0,0,3,0.301,3,1.301c0,0,0,1-1,1H10c-1,0-1-1-1-1c0-1,3-1.301,3-1.301V25H20zM27.098,2H4.904C3.301,2,2,3.299,2,4.902V21c0,1.605,1.396,3,3,3h22c1.602,0,3-1.395,3-3V4.902C30,3.299,28.699,2,27.098,2zM7,23c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S7.553,23,7,23zM28,18c0,1.068-0.93,2-2,2H6c-1.068,0-2-0.932-2-2V6c0-1.068,0.932-2,2-2h20c1.07,0,2,0.932,2,2V18z",s:"none",fl:"#333"}},f:{}}]},"doc-landscape":{d:800,it:1,sh:[{i:{a:{p:"M9.639,14.316l0.549-3.639c-0.18-0.027-0.361-0.047-0.549-0.047c-2.01,0-3.639,1.65-3.639,3.686C6,16.35,7.629,18,9.639,18c2.008,0,3.639-1.65,3.639-3.684c0-0.088-0.008-0.172-0.012-0.256L9.639,14.316zM10.924,10l-0.549,3.637L14,13.381C13.881,11.652,12.59,10.256,10.924,10zM26,12H16v-2h10V12zM26,16H16v-2h10V16zM26,20H14v-2h12V20z",
o:0,s:"none",fl:"#333"}},f:{10:{o:0},20:{o:1},70:{},80:{o:0},100:{}}},{i:{a:{p:"M2.6,26H29.4c0.33,0,0.6-0.27,0.6-0.6V14.699C30,12,24,6,20.418,6H2.6C2.269,6,2,6.269,2,6.6V25.4C2,25.73,2.269,26,2.6,26zM4,8h17c2.283,0.242,1.6,5.699,1.6,5.699S27.48,13.094,28,15v9H4V8z",s:"none",fl:"#333"}},f:{25:{p:"M2.6,26H29.4c0.33,0,0.6-0.27,0.6-0.6V6.781C30,6.219,29.814,6,29.252,6H2.6C2.269,6,2,6.269,2,6.6V25.4C2,25.73,2.269,26,2.6,26zM4,8h17h7v7v9H4V8z"},50:{},75:{p:"M2.6,26H29.4c0.33,0,0.6-0.27,0.6-0.6V14.699C30,12,24,6,20.418,6H2.6C2.269,6,2,6.269,2,6.6V25.4C2,25.73,2.269,26,2.6,26zM4,8h17c2.283,0.242,1.6,5.699,1.6,5.699S27.48,13.094,28,15v9H4V8z"},
100:{}}}]},"doc-portrait":{d:800,it:1,sh:[{i:{a:{p:"M13.639,10.316l0.549-3.639c-0.18-0.027-0.361-0.047-0.549-0.047c-2.01,0-3.639,1.65-3.639,3.686C10,12.35,11.629,14,13.639,14c2.008,0,3.639-1.65,3.639-3.684c0-0.088-0.008-0.172-0.012-0.256L13.639,10.316zM14.924,6l-0.549,3.637L18,9.381C17.881,7.652,16.59,6.256,14.924,6zM22,8h-2V6h2V8zM22,12h-2v-2h2V12zM22,18H10v-2h12V18zM22,26H10v-2h12V26zM22,22H10v-2h12V22z",o:0,s:"none",fl:"#333"}},f:{10:{o:0},20:{o:1},70:{},80:{o:0},100:{}}},{i:{a:{p:"M6.6,30H25.4c0.33,0,0.6-0.27,0.6-0.6V10.699C26,8,20,2,16.418,2H6.6C6.269,2,6,2.269,6,2.6V29.4C6,29.73,6.269,30,6.6,30zM8,4h9c2.283,0.242,1.6,5.699,1.6,5.699S23.48,9.094,24,11v17H8V4z",
s:"none",fl:"#333"}},f:{25:{p:"M6.6,30H25.4c0.33,0,0.6-0.27,0.6-0.6V2.781C26,2.219,25.814,2,25.252,2H6.6C6.269,2,6,2.269,6,2.6V29.4C6,29.73,6.269,30,6.6,30zM8,4h9h7v7v17H8V4z"},50:{},75:{p:"M6.6,30H25.4c0.33,0,0.6-0.27,0.6-0.6V10.699C26,8,20,2,16.418,2H6.6C6.269,2,6,2.269,6,2.6V29.4C6,29.73,6.269,30,6.6,30zM8,4h9c2.283,0.242,1.6,5.699,1.6,5.699S23.48,9.094,24,11v17H8V4z"},100:{}}}]},download:{d:400,it:3,sh:[{i:{a:{p:"M15.125,21.658L6.27,12.848C5.801,12.379,5.958,12,6.622,12H12V5.2C12,4.538,12.537,4,13.2,4h5.601C19.463,4,20,4.538,20,5.2V12h5.379c0.664,0,0.82,0.379,0.352,0.848l-8.857,8.811C16.391,22.113,15.608,22.113,15.125,21.658z",
s:"none",fl:"#333"}},f:{20:{t:"t0,-2"},70:{t:"t0,1"},100:{t:""}}},{i:{a:{p:"M30,26.8c0,0.663-0.537,1.2-1.2,1.2H3.2C2.537,28,2,27.463,2,26.8v-4.2C2,22.293,2.297,22,2.6,22h2.8C5.703,22,6,22.293,6,22.6V24h20v-1.4c0-0.307,0.299-0.6,0.601-0.6h2.8c0.302,0,0.6,0.293,0.6,0.6V26.8z",s:"none",fl:"#333"}},f:{}}]},"download-alt":{d:400,it:2,sh:[{i:{a:{p:"M14,14H8.628c-0.669,0.001-0.829,0.384-0.355,0.858l6.869,6.869c0.474,0.475,1.243,0.475,1.717,0l6.867-6.869c0.476-0.475,0.314-0.857-0.354-0.858H18V4h-4V14z",s:"none",
fl:"#333"}},f:{}},{i:{a:{p:"M16,14c-7.732,0-14,3.58-14,8s6.268,8,14,8c7.732,0,14-3.58,14-8S23.732,14,16,14zM16,25c-5.522,0-10-2.238-10-5s4.478-5,10-5c5.523,0,10,2.238,10,5S21.523,25,16,25z",s:"none",fl:"#333"}},f:{0:{t:"t0,-12"},80:{t:""},100:{}}}]},drop:{d:1E3,it:1,sh:[{i:{a:{p:"M16.3,2c-0.276,0-0.52,0.269-0.567,0.597c-0.965,6.726-8.775,12.216-8.775,18.324c0,4.905,4.048,8.879,9.042,8.879c4.993,0,9.042-3.974,9.042-8.879c0-6.108-7.227-11.599-8.175-18.324C16.821,2.269,16.576,2,16.3,2zM16,25.699c0,0.642-0.525,1.184-1.166,1.184c-0.928,0-2.346-0.659-3.291-1.593c-0.962-0.956-1.668-2.484-1.668-3.324c0-0.641,0.525-1.166,1.167-1.166c0.571,0,1.05,0.414,1.149,0.962c0.291,1.173,1.586,2.496,2.847,2.788C15.586,24.648,16,25.127,16,25.699z",
o:1,t:"",s:"none",fl:"#333"}},f:{0:{t:"s0.01,0.01,16,2",o:1},30:{t:""},60:{},80:{t:"t0,24",o:0},99:{t:"",o:0},100:{o:1}}}]},dropbox:{d:0,it:1,sh:[{i:{a:{p:"M2,17.475l8.236,5.377L16,18.043l-8.305-5.127L2,17.475zM10.236,2.984L2,8.356l5.695,4.56L16,7.791L10.236,2.984zM30,8.356l-8.236-5.372L16,7.791l8.305,5.125L30,8.356zM16,18.043l5.764,4.809L30,17.475l-5.695-4.559L16,18.043zM16.016,20.063l-5.779,4.793L7,23v1.811L16.016,30L25,24.811V23l-3.203,1.855L16.016,20.063z",s:"none",fl:"#71B2ED"}},f:{}}]},edit:{d:1E3,
it:1,sh:[{i:{a:{p:"M24,20v4H8V8h12l4-4H7C5.343,4,4,5.343,4,7v18c0,1.656,1.343,3,3,3h18c1.656,0,3-1.344,3-3v-9L24,20z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M27.105,5.369l2.546,2.546c0.463,0.466,0.467,1.229,0,1.696l-1.98,1.98l-4.242-4.243l1.98-1.98C25.877,4.9,26.637,4.9,27.105,5.369zM12.817,20.788c0,0,0-2.829,2.829-5.657l7.076-7.076l4.242,4.243l-7.076,7.075c-2.828,2.828-5.656,2.829-5.656,2.829s-1.708,1.12-2.121,0.706C11.668,22.468,12.817,20.788,12.817,20.788zM17.202,18.1l6.368-6.367l-0.85-0.849l-6.368,6.368L17.202,18.1z",
t:"t0,0r0",s:"none",fl:"#333"}},f:{8:{t:"t-4,-4r15"},16:{t:"t-2,-2r8"},24:{t:"t0,-4r17"},32:{t:"t2,-2r9"},40:{t:"t4,-4r14"},48:{t:"t-5,0r8"},56:{t:"t-3,2r13"},64:{t:"t-1,0r7"},73:{t:"t1,2r15"},80:{t:"t3,0r9"},88:{t:"t5,2r16"},94:{t:""},100:{}}}]},exchange:{d:600,it:1,sh:[{i:{a:{p:"M18,13.4c0,0.332-0.268,0.6-0.6,0.6H10v3.69c0,0.332-0.19,0.41-0.424,0.176l-5.401-5.442c-0.233-0.234-0.233-0.613,0-0.848l5.401-5.441C9.81,5.9,10,5.979,10,6.311V10h7.4c0.332,0,0.6,0.269,0.6,0.6V13.4z",t:"",s:"none",fl:"#333"}},
f:{0:{p:"M18,13.4c0,0.332-0.268,0.6-0.6,0.6l0,0v3.69c0,0.332-0.19,0.41-0.424,0.176l-5.401-5.442c-0.233-0.234-0.233-0.613,0-0.848l5.401-5.441C17.21,5.9,17.4,5.979,17.4,6.311V10l0,0c0.332,0,0.6,0.269,0.6,0.6V13.4z",t:"t23,0"},15:{t:"",e:">"},50:{p:"M18,13.4c0,0.332-0.268,0.6-0.6,0.6H10v3.69c0,0.332-0.19,0.41-0.424,0.176l-5.401-5.442c-0.233-0.234-0.233-0.613,0-0.848l5.401-5.441C9.81,5.9,10,5.979,10,6.311V10h7.4c0.332,0,0.6,0.269,0.6,0.6V13.4z",e:">"},100:{}}},{i:{a:{p:"M14,18.6c0-0.332,0.268-0.6,0.6-0.6H22v-3.689c0-0.332,0.19-0.41,0.424-0.176l5.401,5.441c0.233,0.234,0.233,0.613,0,0.848l-5.401,5.441C22.19,26.1,22,26.021,22,25.689V22h-7.4c-0.332,0-0.6-0.269-0.6-0.6V18.6z",
t:"",s:"none",fl:"#333"}},f:{24:{},25:{p:"M14,18.6c0-0.332,0.268-0.6,0.6-0.6l0,0v-3.689c0-0.332,0.19-0.41,0.424-0.176l5.401,5.441c0.233,0.234,0.233,0.613,0,0.848l-5.401,5.441C14.79,26.1,14.6,26.021,14.6,25.689V22l0,0c-0.332,0-0.6-0.269-0.6-0.6V18.6z",t:"t-23,0"},40:{t:"",e:">"},75:{p:"M14,18.6c0-0.332,0.268-0.6,0.6-0.6H22v-3.689c0-0.332,0.19-0.41,0.424-0.176l5.401,5.441c0.233,0.234,0.233,0.613,0,0.848l-5.401,5.441C22.19,26.1,22,26.021,22,25.689V22h-7.4c-0.332,0-0.6-0.269-0.6-0.6V18.6z",e:">"},100:{}}}]},
"external-link":{d:1100,it:1,sh:[{i:{a:{p:"M28.473,2C29.316,2,30,2.686,30,3.531v9.678c0,0.844-0.484,1.045-1.08,0.447l-3.874-3.874l-9.369,9.369c-0.469,0.469-1.229,0.469-1.697,0l-1.131-1.131c-0.469-0.469-0.469-1.229,0-1.697l9.368-9.369l-3.873-3.873C17.748,2.484,17.947,2,18.791,2H28.473zM17,6l-4,4H6v16h16v-7l4-4v11c0,2.209-1.791,4-4,4H6c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4H17z",s:"none",fl:"#333"}},f:{15:{p:"M28.473,2C29.316,2,30,2.686,30,3.531v9.678c0,0.844-0.484,1.045-1.08,0.447l-3.874-3.874l-9.369,9.369c-0.469,0.469-1.229,0.469-1.697,0l-1.131-1.131c-0.469-0.469-0.469-1.229,0-1.697l9.368-9.369l-3.873-3.873C17.748,2.484,17.947,2,18.791,2H28.473zM14.75,15l-1,0.999H12v4H16v-1.748l1-1.001v2.749C17,20.55,16.552,21,16,21H12c-0.552,0-1-0.45-1-1.001v-4C11,15.448,11.448,15,12,15H14.75z"},
25:{},40:{t:"t22,-22"},42:{t:"t32,32",p:"M28.473,2C29.316,2,30,2.686,30,3.531v9.678c0,0.844-0.484,1.045-1.08,0.447l-3.874-3.874l-9.369,9.369c-0.469,0.469-1.229,0.469-1.697,0l-1.131-1.131c-0.469-0.469-0.469-1.229,0-1.697l9.368-9.369l-3.873-3.873C17.748,2.484,17.947,2,18.791,2H28.473zM17,6l-4,4H6v16h16v-7l4-4v11c0,2.209-1.791,4-4,4H6c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4H17z"},44:{t:"t-32,32"},45:{},60:{t:""},100:{}}}]},"eye-close":{d:800,it:1,sh:[{i:{a:{p:"M13,16c0,1.656,1.345,3,3,3c1.656,0,3-1.344,3-3v-0.226C18.68,16.1,18.143,16.5,17.65,16.5c-0.965,0-1.65-0.784-1.65-1.75c0-0.695,0.41-1.301,0.996-1.58c-0.309-0.11-0.646-0.171-0.996-0.171C14.345,12.999,13,14.345,13,16z",
t:"",s:"none",fl:"#333"}},f:{20:{},25:{t:"t-2,0"},35:{t:"t2,0"},40:{t:""},100:{}}},{i:{a:{p:"M29.379,14.958c-1.299-1.225-3.023-2.933-5.11-4.397L27.828,7c0.232-0.234,0.234-0.614,0-0.849l-1.98-1.98c-0.234-0.234-0.615-0.234-0.848,0l-4.373,4.375C19.193,7.969,17.65,7.6,16,7.6c-6,0-10.634,4.769-13.379,7.358c-0.828,0.781-0.827,1.306,0.001,2.087c1.298,1.226,3.023,2.934,5.111,4.397L4.176,25c-0.234,0.233-0.234,0.613,0,0.848l1.98,1.98c0.234,0.234,0.614,0.233,0.849,0l4.371-4.372C12.808,24.032,14.35,24.4,16,24.4c6,0,10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM14.437,14.737l-3.474,3.475c-0.298-0.678-0.467-1.425-0.467-2.212c0-3.035,2.464-5.5,5.5-5.5c0.787,0,1.533,0.168,2.211,0.466L14.437,14.737l2.829,2.827l3.768-3.768c0.296,0.675,0.463,1.419,0.463,2.204c0,3.037-2.463,5.5-5.5,5.5c-0.784,0-1.528-0.167-2.203-0.463l3.472-3.473L14.437,14.737z",
t:"",s:"none",fl:"#333"}},f:{0:{p:"M29.379,14.958c-1.299-1.225-3.023-2.933-5.11-4.397l0,0l0,0c0,0-2.258-1.538-3.642-2.015l0,0l0,0C19.193,7.969,17.65,7.6,16,7.6c-6,0-10.634,4.769-13.379,7.358c-0.828,0.781-0.827,1.306,0.001,2.087c1.298,1.226,3.023,2.934,5.111,4.397l0,0l0,0c1.721,1.292,3.643,2.014,3.643,2.014l0,0l0,0C12.808,24.032,14.35,24.4,16,24.4c6,0,10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM10.963,18.212L10.963,18.212c-0.298-0.678-0.467-1.425-0.467-2.212c0-3.035,2.464-5.5,5.5-5.5c0.787,0,1.533,0.168,2.211,0.466l0,0c0,0,2.105,0.877,2.826,2.83l0,0c0.296,0.675,0.463,1.419,0.463,2.204c0,3.037-2.463,5.5-5.5,5.5c-0.784,0-1.528-0.167-2.203-0.463l0,0C13.793,21.037,11.781,20.375,10.963,18.212z"},
20:{},25:{t:"t-2,0"},35:{t:"t2,0"},40:{t:""},70:{p:"M29.379,14.958c-1.299-1.225-3.023-2.933-5.11-4.397L27.828,7c0.232-0.234,0.234-0.614,0-0.849l-1.98-1.98c-0.234-0.234-0.615-0.234-0.848,0l-4.373,4.375C19.193,7.969,17.65,7.6,16,7.6c-6,0-10.634,4.769-13.379,7.358c-0.828,0.781-0.827,1.306,0.001,2.087c1.298,1.226,3.023,2.934,5.111,4.397L4.176,25c-0.234,0.233-0.234,0.613,0,0.848l1.98,1.98c0.234,0.234,0.614,0.233,0.849,0l4.371-4.372C12.808,24.032,14.35,24.4,16,24.4c6,0,10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM14.437,14.737l-3.474,3.475c-0.298-0.678-0.467-1.425-0.467-2.212c0-3.035,2.464-5.5,5.5-5.5c0.787,0,1.533,0.168,2.211,0.466L14.437,14.737l2.829,2.827l3.768-3.768c0.296,0.675,0.463,1.419,0.463,2.204c0,3.037-2.463,5.5-5.5,5.5c-0.784,0-1.528-0.167-2.203-0.463l3.472-3.473L14.437,14.737z"},
100:{}}}]},"eye-open":{d:800,it:1,sh:[{i:{a:{p:"M29.379,14.958C26.633,12.368,22,7.6,16,7.6S5.366,12.368,2.621,14.958c-0.828,0.781-0.827,1.306,0.001,2.087C5.367,19.637,10,24.4,16,24.4s10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM15.996,21.5c-3.036,0-5.5-2.463-5.5-5.5c0-3.035,2.464-5.5,5.5-5.5c3.037,0,5.5,2.465,5.5,5.5C21.496,19.037,19.033,21.5,15.996,21.5zM13,16c0,1.656,1.345,3,3,3c1.656,0,3-1.344,3-3v-0.025C18.68,16.3,18.242,16.5,17.75,16.5c-0.965,0-1.75-0.784-1.75-1.75c0-0.695,0.41-1.301,0.996-1.58c-0.309-0.11-0.646-0.171-0.996-0.171C14.345,12.999,13,14.345,13,16z",
s:"none",fl:"#333"}},f:{5:{p:"M29.379,14.958C26.633,12.368,22,7.6,16,7.6S5.366,12.368,2.621,14.958c-0.828,0.781-0.827,1.306,0.001,2.087C5.367,19.637,10,24.4,16,24.4s10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM12,21.5c-3.036,0-5.5-2.463-5.5-5.5c0-3.035,2.464-5.5,5.5-5.5c3.037,0,5.5,2.465,5.5,5.5C17.5,19.037,15.037,21.5,12,21.5zM7.5,16c0,1.656,1.345,3,3,3c1.656,0,3-1.344,3-3v-0.025C13.18,16.3,12.742,16.5,12.25,16.5c-0.965,0-1.75-0.784-1.75-1.75c0-0.695,0.41-1.301,0.996-1.58c-0.309-0.11-0.646-0.171-0.996-0.171C8.845,12.999,7.5,14.345,7.5,16z"},
30:{},40:{p:"M29.379,14.958C26.633,12.368,22,7.6,16,7.6S5.366,12.368,2.621,14.958c-0.828,0.781-0.827,1.306,0.001,2.087C5.367,19.637,10,24.4,16,24.4s10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM20,21.5c-3.036,0-5.5-2.463-5.5-5.5c0-3.035,2.464-5.5,5.5-5.5c3.037,0,5.5,2.465,5.5,5.5C25.5,19.037,23.037,21.5,20,21.5zM18.5,16c0,1.656,1.345,3,3,3c1.656,0,3-1.344,3-3v-0.025C24.18,16.3,23.742,16.5,23.25,16.5c-0.965,0-1.75-0.784-1.75-1.75c0-0.695,0.41-1.301,0.996-1.58c-0.309-0.11-0.646-0.171-0.996-0.171C19.845,12.999,18.5,14.345,18.5,16z"},
60:{},65:{p:"M29.379,14.958C26.633,12.368,22,7.6,16,7.6S5.366,12.368,2.621,14.958c-0.828,0.781-0.827,1.306,0.001,2.087C5.367,19.637,10,24.4,16,24.4s10.633-4.768,13.379-7.357C30.207,16.261,30.207,15.738,29.379,14.958zM15.996,21.5c-3.036,0-5.5-2.463-5.5-5.5c0-3.035,2.464-5.5,5.5-5.5c3.037,0,5.5,2.465,5.5,5.5C21.496,19.037,19.033,21.5,15.996,21.5zM13,16c0,1.656,1.345,3,3,3c1.656,0,3-1.344,3-3v-0.025C18.68,16.3,18.242,16.5,17.75,16.5c-0.965,0-1.75-0.784-1.75-1.75c0-0.695,0.41-1.301,0.996-1.58c-0.309-0.11-0.646-0.171-0.996-0.171C14.345,12.999,13,14.345,13,16z"},
100:{}}}]},facebook:{d:0,it:1,sh:[{i:{a:{p:"M25.484,16H21.62v14H16V16h-2.896v-4.827H16V8.277C16,4.341,17.465,2,22.107,2h3.864v4.825h-2.419c-1.805,0-1.925,0.674-1.925,1.932l-0.008,2.416H26L25.484,16z",s:"none",fl:"#3B5999"}},f:{}}]},"facebook-alt":{d:0,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.343,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.343,28.657,2,27,2zM23.658,16.111h-3.283V28h-4.916V16.111H13v-4.099h2.459V9.553c0-3.342,1.388-5.331,5.33-5.331h3.282V8.32H22.02c-1.533,0-1.637,0.573-1.637,1.642l-0.008,2.051h3.721L23.658,16.111z",
s:"none",fl:"#3B5999"}},f:{}}]},film:{d:800,it:1,sh:[{i:{a:{p:"M12.777,20c0.45,0.286,1.494,0.732,2.593,0.732c2.034,0,2.665-1.286,2.646-2.251c-0.018-1.625-1.494-2.321-3.024-2.321h-0.883v-1.179h0.883c1.152,0,2.61-0.589,2.61-1.964c0-0.929-0.594-1.75-2.053-1.75c-0.936,0-1.837,0.411-2.341,0.768l-0.414-1.143C13.407,10.446,14.596,10,15.856,10c2.305,0,3.349,1.357,3.349,2.768c0,1.197-0.72,2.214-2.16,2.732v0.036c1.44,0.286,2.61,1.356,2.61,2.983c0,1.856-1.458,3.481-4.268,3.481c-1.314,0-2.467-0.411-3.043-0.785L12.777,20z",
o:0,s:"none",fl:"#333"}},f:{0:{o:1},25:{},26:{p:"M12.264,21.902V20.93l1.243-1.207c2.989-2.845,4.339-4.357,4.357-6.121c0-1.188-0.576-2.287-2.323-2.287c-1.063,0-1.944,0.54-2.484,0.99l-0.504-1.116C13.363,10.504,14.516,10,15.865,10c2.521,0,3.583,1.729,3.583,3.403c0,2.16-1.566,3.907-4.033,6.284l-0.937,0.863v0.037h5.258v1.314H12.264z"},50:{},51:{p:"M16.423,11.514h-0.036l-2.034,1.126l-0.307-1.237L16.604,10h1.349v12h-1.53V11.514z"},75:{},76:{p:"M19.971,15.875c0,3.948-1.477,6.125-4.07,6.125c-2.287,0-3.835-2.126-3.871-5.965c0-3.892,1.692-6.035,4.069-6.035C18.566,10,19.971,12.178,19.971,15.875zM13.614,16.053c0,3.018,0.937,4.732,2.377,4.732c1.621,0,2.394-1.875,2.394-4.839c0-2.857-0.738-4.732-2.376-4.732C14.623,11.214,13.614,12.893,13.614,16.053z"},
99:{},100:{o:0,p:"M12.777,20c0.45,0.286,1.494,0.732,2.593,0.732c2.034,0,2.665-1.286,2.646-2.251c-0.018-1.625-1.494-2.321-3.024-2.321h-0.883v-1.179h0.883c1.152,0,2.61-0.589,2.61-1.964c0-0.929-0.594-1.75-2.053-1.75c-0.936,0-1.837,0.411-2.341,0.768l-0.414-1.143C13.407,10.446,14.596,10,15.856,10c2.305,0,3.349,1.357,3.349,2.768c0,1.197-0.72,2.214-2.16,2.732v0.036c1.44,0.286,2.61,1.356,2.61,2.983c0,1.856-1.458,3.481-4.268,3.481c-1.314,0-2.467-0.411-3.043-0.785L12.777,20z"}}},{i:{a:{p:"M2,5v24h28V5H2zM8,28H4v-2h4V28zM8,24H4v-2h4V24zM8,20H4v-2h4V20zM8,16H4v-2h4V16zM8,12H4v-2h4V12zM8,8H4V6h4V8zM22,28H10V17h12V28zM22,16H10V6h12V16zM28,28h-4v-2h4V28zM28,24h-4v-2h4V24zM28,20h-4v-2h4V20zM28,16h-4v-2h4V16zM28,12h-4v-2h4V12zM28,8h-4V6h4V8z",
s:"none",fl:"#333"}},f:{2:{t:"t0,-6"},8:{t:"t0,6"},14:{t:"t0,-6"},20:{t:"t0,6"},26:{t:"t0,-6"},32:{t:"t0,6"},38:{t:"t0,-6"},44:{t:"t0,6"},50:{t:"t0,-6"},56:{t:"t0,6"},62:{t:"t0,-6"},68:{t:"t0,6"},74:{t:"t0,-6"},80:{t:"t0,6"},86:{t:"t0,-6"},92:{t:"t0,6"},98:{t:"t0,-6"},100:{t:""}}}]},filter:{d:600,it:1,sh:[{i:{a:{p:"M12,22c0,0.165,0.093,0.397,0.207,0.518l6.966,7.201C19.63,30.198,20,30.051,20,29.388V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM15.9,13L9,6h14l-6.9,7H15.9z",
s:"none",fl:"#333"}},f:{10:{p:"M12,22c0,0.165,0.095,0.395,0.212,0.512l6.939,7.219C19.62,30.199,20,30.042,20,29.379V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM14.5,15l-1.6-5.8h6.3L17.5,15H14.5z"},20:{p:"M12,22c0,0.165,0.095,0.395,0.212,0.512l6.939,7.219C19.62,30.199,20,30.042,20,29.379V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM14.5,18.8V14h3v4.8H14.5z"},30:{p:"M12,22c0,0.165,0.095,0.395,0.212,0.512l6.939,7.219C19.62,30.199,20,30.042,20,29.379V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM14.55,24v-3h3v3H14.55z"},
40:{p:"M12,22c0,0.165,0.095,0.395,0.212,0.512l6.939,7.219C19.62,30.199,20,30.042,20,29.379V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM14.55,24v-0.2h3V27L14.55,24z"},45:{p:"M12,22c0,0.165,0.095,0.395,0.212,0.512l6.939,7.219C19.62,30.199,20,30.042,20,29.379v-15l9.432-11.457C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14.379V22zM17.55,27.379v-0.2l0,0V27.379L17.55,27.379z"},99:{},100:{p:"M12,22c0,0.165,0.093,0.397,0.207,0.518l6.966,7.201C19.63,30.198,20,30.051,20,29.388V14l9.432-11.078C29.856,2.413,29.663,2,29,2H3C2.337,2,2.144,2.413,2.568,2.922L12,14V22zM15.9,13L9,6h14l-6.9,7H15.9z"}}}]},
fire:{d:600,it:2,sh:[{i:{a:{p:"M16,30c-5.083-1-10-5-10-11c0-6.018,6-14,12-17c2,8,8,10,8,19c0,4-3.084,8-9,9c4.625-7.25,2.084-11-2-14C14.583,23.333,10.792,24.208,16,30z",s:"none",fl:"#333"}},f:{25:{t:"s0.6,0.6,16,30",p:"M16,30c-5.083-1-8-6-8-10c0-7,9-9,7-18c7,4,11,9,11,18c0,4-3.084,9-9,10c5-5-1-10,1-14C14,19,11,23,16,30z"},50:{t:"s0.9,1,16,30",p:"M16,30c-5.083-1-10-5-10-11c0-6.018,6-14,12-17c2,8,8,10,8,19c0,4-3.084,8-9,9c4.625-7.25,2.084-11-2-14C14.583,23.333,10.792,24.208,16,30z"},75:{t:"s0.5,0.6,16,30",
p:"M16,30c-5.083-1-8-6-8-10c0-7,9-9,7-18c7,4,11,9,11,18c0,4-3.084,9-9,10c5-5-1-10,1-14C14,19,11,23,16,30z"},100:{t:"",p:"M16,30c-5.083-1-10-5-10-11c0-6.018,6-14,12-17c2,8,8,10,8,19c0,4-3.084,8-9,9c4.625-7.25,2.084-11-2-14C14.583,23.333,10.792,24.208,16,30z"}}}]},firefox:{d:0,it:1,sh:[{i:{a:{p:"M28.219,22.017c0.474-0.94,0.841-1.94,1.082-2.988c0.942-3.566,0.659-6.677,0.659-6.677L29.637,14.4c0,0-0.464-3.795-1.032-5.214c-0.871-2.174-1.258-2.157-1.26-2.153c0.536,1.343,0.488,2.113,0.478,2.229c-0.011-0.016-0.019-0.031-0.026-0.045c-0.13-0.316-0.788-1.772-2.2-2.804c-2.473-2.417-5.874-3.911-9.633-3.912c-4.01,0-7.617,1.7-10.121,4.409c-0.317-0.451-0.575-1-0.598-1.604c0,0-0.002,0.002-0.006,0.006c0-0.011-0.003-0.021-0.003-0.03c0,0-1.591,1.215-1.419,4.492c-0.295,0.56-0.554,1.143-0.768,1.745C2.676,12.314,2.305,13.471,2,15.167c0,0,0.131-0.411,0.394-0.962c-0.063,0.469-0.102,0.946-0.114,1.429c-0.089,0.823-0.117,1.817-0.039,3.009c0,0,0.031-0.396,0.134-0.995C3.2,24.326,8.966,29.5,15.961,29.5l0,0c1.839,0,3.594-0.359,5.196-1.009C24.796,27.183,26.949,24.672,28.219,22.017zM15.962,3.394c2.418,0,4.676,0.664,6.603,1.813c-2.247-0.515-3.394-0.254-3.384-0.242c0.013,0.014,3.346,0.574,3.937,1.375c0,0-1.416,0-2.824,0.399c-0.064,0.019,5.183,0.646,6.255,5.813c0,0-0.575-1.182-1.286-1.384c0.468,1.401,0.348,4.063-0.099,5.386c-0.058,0.169-0.117-0.736-0.992-1.125c0.28,1.984-0.019,5.133-1.416,6c-0.107,0.068,0.878-3.107,0.199-1.881c-4.046,6.115-8.857,2.475-10.81,1.178c1.567,0.378,3.23,0.105,4.193-0.545c0.971-0.655,1.547-1.133,2.064-1.021c0.515,0.115,0.858-0.396,0.457-0.85c-0.399-0.453-1.376-1.077-2.693-0.737c-0.929,0.241-2.083,1.254-3.841,0.229c-1.5-0.877-1.49-1.589-1.49-2.042c0-0.356,0.254-0.857,0.726-1.001c0.574,0.06,1.033,0.207,1.52,0.453c0.005-0.131,0.006-0.307-0.001-0.505c0.039-0.075,0.015-0.303-0.046-0.581c-0.036-0.28-0.096-0.567-0.188-0.83c0.009-0.002,0.017-0.006,0.021-0.02c0.075-0.336,2.123-1.504,2.272-1.617c0.151-0.111,0.544-0.368,0.5-1.152c-0.015-0.259-0.057-0.288-2.207-0.279c-0.907,0.003-1.409-0.872-1.571-1.213c0.22-1.2,0.853-2.056,1.897-2.634c0.02-0.011,0.015-0.021-0.008-0.027c0.216-0.124-2.495-0.006-3.717,1.563c-0.327,0.046-0.777-0.046-1.28-0.046c-0.631,0-1.126,0.067-1.585,0.182C7.12,8.065,7.048,8.063,6.963,8.052C6.835,7.958,6.644,7.802,6.436,7.6c0.159-0.175,0.32-0.347,0.489-0.513C9.239,4.805,12.432,3.395,15.962,3.394z",
s:"none",fl:"#DB6C19"}},f:{}}]},flag:{d:400,it:3,sh:[{i:{a:{p:"M4,28.8V3.2C4,2.537,4.358,2,4.8,2H5.2C5.642,2,6,2.537,6,3.2v25.6L5,30L4,28.8z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M28.5,16.1C27.6,15.6,26.6,17.4,22.6,17.4c-2.7,0.01-0.1-0.95-2.7-1.3C19.1,16,17.7,17,15.2,17c-2.9,0-2.4-0.9-4.5-0.8C9.7,16.2,8.8,16.7,7,16.5c0,0,0.3-4.8,0.3-6.3c0-1.6-0.3-6.8-0.3-6.8C8.4,3.4,11,3,12.4,3C13.8,3,13.8,4.6,15,4.7C15.4,4.7,18.6,3.6,20.5,3.6c1.5,0,0.9,2.4,1.9,2.3c0.3-0.02,2.7-1.2,3.6-1.3C26.6,5.8,26.7,9.4,26.8,10.5C26.9,11.3,28.1,14.9,28.6,16.1z",
s:"none",fl:"#333"}},f:{0:{p:"M28.5,16.1C27.6,15.6,26.6,17.4,22.6,17.4c-2.7,0.01-0.1-0.95-2.7-1.3C19.1,16,17.7,17,15.2,17c-2.9,0-2.4-0.9-4.5-0.8C9.7,16.2,8.8,16.7,7,16.5c0,0,0.3-4.8,0.3-6.3c0-1.6-0.3-6.8-0.3-6.8C8.4,3.4,11,3,12.4,3C13.8,3,13.8,4.6,15,4.7C15.4,4.7,18.6,3.6,20.5,3.6c1.5,0,0.9,2.4,1.9,2.3c0.3-0.02,2.7-1.2,3.6-1.3C26.6,5.8,26.7,9.4,26.8,10.5C26.9,11.3,28.1,14.9,28.6,16.1z"},11:{p:"M29,16.1c-0.962-0.496-2.207,1.764-6.4,1.3c-1.8-0.199-0.615-1.844-2.699-1.1c-1.4,0.5-2.2,0.8-4.7,0.8c-2,0-2.1-1.5-4.4-0.8c-0.929,0.283-1.7,0.2-3.8,0.2c0,0,0.331-4.889,0.331-6.389C7.331,8.511,7,3.3,7,3.3c1.5,0.4,4.407-0.073,5.2-0.3c1.4-0.4,2.025,0.439,2.8,1.3c0.9,1,3.623-0.404,5.5-0.7c1.9-0.3,1.574,0.687,1.9,1.6c0.5,1.4,1.399,0.4,3.1,0.1c0.8,1.4,1.3,4.1,1.5,5.2C27.139,11.264,28.538,14.903,29,16.1z"},
22:{p:"M28.8,16.1c-1.7,1.5-5.6,1.9-6.2,1c-1.005-1.506-0.899-1.2-2.699-0.5c-1.386,0.539-2.5,0.601-4.7,0.3c-1.981-0.271-1.44-1.207-4.4-0.4c-1.1,0.3-1.4,0.1-3.8,0c0,0,0.331-4.889,0.331-6.389C7.331,8.511,7,3.1,7,3.1c3,1.2,4.4,0.4,5.2,0.2c1.6-0.4,1.849-0.651,2.8,0.3c2.1,2.1,3.738,1.005,5.5,0.3c0.5-0.2,1.481-0.429,1.9-0.2c1.1,0.6,0.3,2.7,2.699,2.1c1,1.3,1.441,3.681,1.9,4.7C27.9,12.5,27.9,13.6,28.8,16.1z"},33:{p:"M28,17c-2.7,1.2-4.383,0.498-5.5-0.9c-0.399-0.5-1.9,0.5-2.7,0.8c-1.393,0.523-3.8,0.2-4.6-0.2c-1.246-0.623-1.451-0.844-4.4,0c-0.7,0.2-1.4,0.1-3.8-0.3c0,0,0.5-4.8,0.5-6.3C7.5,8.5,7,2.8,7,2.8c2.6,1.2,4.439,1.117,5.2,0.8c1.2-0.5,1.489-0.703,2.8-0.4c1.3,0.3,2.5,3,5.5,1.1c0.455-0.288,1.622-0.6,2.1-0.6C24.5,3.7,23,5.3,25.2,6c1,1.3,1.446,3.439,1.8,4.5C27.7,12.6,27.9,15.3,28,17z"},
44:{p:"M27.3,17.6C24.4,18,24.158,16.265,23,16.1c-0.7-0.1-2.371,0.894-3.2,1.101c-1.6,0.399-3.838-0.432-4.6-0.9c-1.3-0.8-1.4,0.2-4.4,0.5c-0.724,0.072-1.3,0-3.7-0.5c0,0,0.2-4.9,0.2-6.4C7.3,8.3,7,2.6,7,2.6c2.6,0.6,4.3,1.8,5.2,1.4c1.219-0.542,1.6-0.9,2.9-0.9c2.208,0,3.551,2.971,4.8,2C20.8,4.4,22,3.8,23,3.8c1.9,0,1.8,1.4,2.4,1.9c0.8,1.6,1.377,3.397,1.5,4.6C27.094,12.185,27.5,13.8,27.3,17.6z"},55:{p:"M26.8,17.6c-2.1,0.4-1.7-2.2-4.3-1.1c-0.67,0.284-1.9,0.8-2.8,0.8c-1.487,0-3.7-0.701-4.5-1.1c-1-0.5-1.6,0.8-4.4,0.6c-0.726-0.052-1.3-0.2-3.7-0.6c0,0,0.2-4.6,0.2-6.1c0-1.6-0.2-7.5-0.2-7.5c2.6-0.1,4.275,1.7,5.1,1.7c1.1,0,1.788-0.876,2.8-1c4.1-0.5,3.5,3.2,5.5,1.9c0.497-0.323,1.524-0.957,2.1-1.1C23.8,3.8,24.9,3.7,25.8,5c0.4,1.5,1,3.2,1.101,5.6C26.993,12.811,26.7,15.899,26.8,17.6z"},
66:{p:"M26.8,17.6c-0.8,0.2-0.3-2.3-4.3-0.7c-0.676,0.27-1.9,0.4-2.8,0.4c-1.487,0-1.7-1.4-4.5-1c-1.01,0.144-1.625,0.927-4.4,0.5c-1.3-0.2-0.6-0.5-3.7-0.6c0,0,0.2-4.6,0.2-6.1c0-1.6-0.2-7.3-0.2-7.3c3-0.2,4.1,0.5,5.1,1.3c1.109,0.888,1.908-0.344,2.8-0.5c5.7-1,3.8,2,5.5,2.2c0.589,0.069,1.558-1.004,2.1-1.3c0.813-0.444,2.601-0.7,3.7-0.1c0.601,1.7,0.399,3.801,0.5,6.2C26.893,12.812,26.5,16.1,26.8,17.6z"},77:{p:"M27.2,17.5c-0.3-0.9-0.2-1.7-4.7-0.4c-0.699,0.202-2.163,0.516-2.9,0c-1-0.7-1.399-1.1-4.5-0.5c-1.001,0.194-2,0.8-4.3-0.1c-1.225-0.479-1.7,0-3.7-0.3c0,0,0.4-4.4,0.4-5.9C7.5,8.7,7.1,3,7.1,3c2-0.4,4.257-0.364,5.1,0.6C13.6,5.2,14.315,4.175,15,4c4.7-1.2,4.8-0.1,5.5,1.5c0.378,0.864,1.2,0.1,2.1-0.5c0.771-0.514,2.9-1.3,4-0.7c0.601,1.7,0.2,3.899,0.2,6.3C26.8,13.8,27.5,17.9,27.2,17.5z"},
88:{p:"M27.96,17.091C27.5,15.2,25.195,17.14,22.5,17.4c-2.16,0.209-1.7-0.2-2.94-1.009c-0.642-0.418-1.399-0.1-4.5,0.5c-1.001,0.194-1.96,0.208-4.3-0.6c-1.1-0.38-1.86-0.091-3.7,0.1c0,0,0.2-4.6,0.2-6.1c0-1.6-0.3-7.1-0.3-7.1C9,2.7,10.892,2.827,12.2,3.2c0.7,0.2,1.7,1.8,2.9,1.3c1.211-0.504,4.5-1.7,5.3-0.7c0.59,0.736,0.8,3,2.199,1.8c0.703-0.603,2.301-1.4,3.96-1.309c0.341,2.009,0.2,3.899,0.2,6.3C26.76,13.791,28.3,16.5,27.96,17.091z"},100:{p:"M28.5,16.1C27.6,15.6,26.6,17.4,22.6,17.4c-2.7,0.01-0.1-0.95-2.7-1.3C19.1,16,17.7,17,15.2,17c-2.9,0-2.4-0.9-4.5-0.8C9.7,16.2,8.8,16.7,7,16.5c0,0,0.3-4.8,0.3-6.3c0-1.6-0.3-6.8-0.3-6.8C8.4,3.4,11,3,12.4,3C13.8,3,13.8,4.6,15,4.7C15.4,4.7,18.6,3.6,20.5,3.6c1.5,0,0.9,2.4,1.9,2.3c0.3-0.02,2.7-1.2,3.6-1.3C26.6,5.8,26.7,9.4,26.8,10.5C26.9,11.3,28.1,14.9,28.6,16.1z"}}}]},
flickr:{d:0,it:1,sh:[{i:{a:{p:"M14.25,16c0,3.383-2.743,6.125-6.125,6.125C4.743,22.125,2,19.383,2,16c0-3.382,2.743-6.125,6.125-6.125C11.508,9.875,14.25,12.618,14.25,16zM23.875,9.875c-3.383,0-6.125,2.742-6.125,6.125s2.742,6.125,6.125,6.125S30,19.383,30,16S27.258,9.875,23.875,9.875zM23.875,19.5c-1.93,0-3.5-1.57-3.5-3.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5C27.375,17.93,25.805,19.5,23.875,19.5z",s:"none",fl:"#0063DC"}},f:{}}]},"flickr-alt":{d:0,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.343,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.343,28.657,2,27,2zM9.875,20.375C7.459,20.375,5.5,18.416,5.5,16c0-2.417,1.959-4.375,4.375-4.375S14.25,13.583,14.25,16C14.25,18.416,12.291,20.375,9.875,20.375zM22.125,20.375c-2.416,0-4.375-1.959-4.375-4.375c0-2.417,1.959-4.375,4.375-4.375S26.5,13.583,26.5,16C26.5,18.416,24.541,20.375,22.125,20.375z",
s:"none",fl:"#FF0084"}},f:{}}]},font:{d:800,it:1,sh:[{i:{a:{p:"M21.002,20.02h-9.229l-1.617,3.762c-0.398,0.926-0.598,1.617-0.598,2.074c0,0.363,0.172,0.684,0.52,0.957c0.344,0.277,1.091,0.455,2.24,0.537V28H4.813v-0.65c0.996-0.176,1.641-0.404,1.934-0.686c0.598-0.563,1.26-1.705,1.986-3.428L17.117,3.62h0.615l8.297,19.827c0.668,1.594,1.275,2.627,1.818,3.104c0.547,0.473,1.305,0.74,2.277,0.799V28h-9.404v-0.65c0.949-0.047,1.592-0.205,1.924-0.475c0.336-0.27,0.502-0.598,0.502-0.984c0-0.516-0.234-1.33-0.703-2.443L21.002,20.02zM20.51,18.719l-4.043-9.632l-4.148,9.632H20.51z",
s:"none",fl:"#333"}},f:{0:{p:"M22.003,15.797c2.31,0.27,4.449,1.631,5.182,3.996c0.763,2.467-0.376,5.184-2.447,6.635c-2.654,1.862-6.26,1.553-9.358,1.553c-2.877,0-5.756,0-8.634,0c-0.776,0-1.268-0.653-0.349-0.653c2.471,0,3.001-1.32,3.001-3.571c0.086-4.871,0-9.751,0-14.624c0-1.005,0.066-2.059-0.227-3.029C8.87,5.105,7.799,4.76,6.845,4.76C6.669,4.728,5.263,4.811,5.947,4.108c0.238-0.244,2.003,0,2.329,0c1.652,0,3.303,0,4.954,0c3.134,0,6.559-0.305,9.47,1.035C27.745,7.468,27.188,14.126,22.003,15.797C23.657,16.149,23.419,15.963,22.003,15.797zM12.778,14.847c3.048,0.577,8,0.833,9.473-2.592c2.038-4.74-3.159-7.127-6.995-6.951c-0.853,0.039-2.479-0.183-2.479,0.879c0,1.035,0,2.068,0,3.102C12.778,11.139,12.778,12.993,12.778,14.847zM12.778,26.256c3.442,0.802,9.319,1.089,10.425-3.354c1.258-5.048-4.189-6.634-8.002-6.589c-1.101,0.013-2.423-0.434-2.423,0.843c0,1.072,0,2.146,0,3.221C12.778,22.336,12.778,24.296,12.778,26.256z"},
32:{},33:{p:"M26.655,3l0.545,8.102h-0.545c-0.727-2.425-1.763-4.171-3.11-5.237c-1.348-1.066-2.964-1.6-4.851-1.6c-1.582,0-3.011,0.401-4.288,1.204c-1.277,0.802-2.282,2.083-3.014,3.84c-0.732,1.757-1.099,3.942-1.099,6.555c0,2.155,0.346,4.024,1.037,5.606c0.691,1.581,1.731,2.794,3.119,3.638c1.389,0.844,2.973,1.265,4.754,1.265c1.547,0,2.911-0.33,4.095-0.993c1.184-0.66,2.483-1.977,3.901-3.944l0.545,0.351c-1.195,2.121-2.589,3.674-4.183,4.657c-1.594,0.984-3.485,1.477-5.677,1.477c-3.948,0-7.006-1.465-9.173-4.394c-1.617-2.179-2.425-4.745-2.425-7.697c0-2.378,0.533-4.563,1.599-6.555c1.066-1.992,2.534-3.535,4.402-4.631C14.157,3.548,16.199,3,18.413,3c1.723,0,3.421,0.422,5.097,1.265c0.492,0.258,0.844,0.387,1.055,0.387c0.316,0,0.592-0.111,0.826-0.334C25.694,4.001,25.911,3.563,26.04,3H26.655z"},
66:{},67:{p:"M21.002,20.02h-9.229l-1.617,3.762c-0.398,0.926-0.598,1.617-0.598,2.074c0,0.363,0.172,0.684,0.52,0.957c0.344,0.277,1.091,0.455,2.24,0.537V28H4.813v-0.65c0.996-0.176,1.641-0.404,1.934-0.686c0.598-0.563,1.26-1.705,1.986-3.428L17.117,3.62h0.615l8.297,19.827c0.668,1.594,1.275,2.627,1.818,3.104c0.547,0.473,1.305,0.74,2.277,0.799V28h-9.404v-0.65c0.949-0.047,1.592-0.205,1.924-0.475c0.336-0.27,0.502-0.598,0.502-0.984c0-0.516-0.234-1.33-0.703-2.443L21.002,20.02zM20.51,18.719l-4.043-9.632l-4.148,9.632H20.51z"},
100:{}}}]},gear:{d:600,it:1,sh:[{i:{a:{p:"M15.999,13.48c-1.392,0-2.52,1.128-2.52,2.52s1.128,2.52,2.52,2.52S18.52,17.392,18.52,16S17.391,13.48,15.999,13.48z M28.799,17.3l0.002-2.601l-3.633-1.176c-0.215-0.797-0.533-1.55-0.935-2.25l1.735-3.405l-1.838-1.839l-3.398,1.736c-0.701-0.405-1.458-0.723-2.257-0.94L17.299,3.2l-2.6-0.001l-1.174,3.625c-0.8,0.216-1.557,0.536-2.258,0.94L7.868,6.03L6.029,7.868l1.738,3.403c-0.402,0.7-0.721,1.454-0.936,2.251L3.2,14.7v2.6l3.631,1.178c0.215,0.797,0.534,1.55,0.935,2.249l-1.737,3.405l1.838,1.839l3.4-1.735c0.701,0.405,1.458,0.723,2.256,0.94L14.7,28.8l2.601,0.001l1.177-3.633c0.796-0.215,1.549-0.533,2.248-0.935l3.405,1.736l1.84-1.838l-1.736-3.398c0.405-0.701,0.724-1.459,0.941-2.258L28.799,17.3z M19.8,20.1c0,0-0.767-0.811-0.8-0.78c-0.816,0.735-1.891,1.188-3.046,1.188c-2.472,0-4.476-2.066-4.476-4.538s2.004-4.476,4.476-4.476c2.47,0,4.615,2.004,4.568,4.476C20.5,17.1,20.2,17.7,19.7,18.5c-0.029,0.047,0.899,0.7,0.899,0.7L19.8,20.1z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},gears:{d:600,it:1,sh:[{i:{a:{p:"M12,10.21c-0.979,0-1.772,0.793-1.772,1.772c0,0.979,0.793,1.771,1.772,1.771c0.979,0,1.772-0.793,1.772-1.771C13.772,11.003,12.979,10.21,12,10.21z M21.001,12.896v-1.829l-2.553-0.827c-0.15-0.557-0.389-1.073-0.668-1.563l1.229-2.414l-1.292-1.292l-2.396,1.224c-0.491-0.284-1.021-0.508-1.58-0.662l-0.828-2.551l-1.829,0l-0.833,2.571c-0.552,0.15-1.074,0.372-1.561,0.648l-2.41-1.229L4.99,6.264l1.223,2.396c-0.284,0.49-0.508,1.02-0.66,1.581l-2.552,0.827v1.829l2.552,0.828c0.15,0.557,0.388,1.073,0.668,1.562L4.99,17.698l1.292,1.294l2.396-1.225c0.491,0.283,1.021,0.508,1.579,0.661l0.828,2.553h1.83l0.828-2.555c0.556-0.149,1.071-0.388,1.56-0.667l2.415,1.23l1.294-1.292l-1.225-2.394c0.284-0.492,0.509-1.021,0.663-1.581L21.001,12.896z M14.672,14.864c0,0-0.539-0.569-0.563-0.549c-0.574,0.518-1.33,0.835-2.143,0.835c-1.737,0-3.146-1.454-3.146-3.191c0-1.738,1.409-3.147,3.146-3.147c1.738,0,3.245,1.409,3.212,3.147c-0.015,0.795-0.226,1.217-0.578,1.78c-0.021,0.033,0.632,0.492,0.632,0.492L14.672,14.864z",
s:"none",fl:"#333"}},f:{0:{t:"r0,12,12"},100:{t:"r360,12,12"}},fIE:{0:{t:"r0,10.5,10.5"},100:{t:"r360,10.5,10.5"}}},{i:{a:{p:"M23.161,20.885c-0.604-0.077-1.157,0.346-1.236,0.952c-0.079,0.601,0.348,1.156,0.952,1.233c0.603,0.079,1.156-0.348,1.234-0.949C24.19,21.515,23.765,20.964,23.161,20.885zM27.052,21.007c-0.104-0.428-0.276-0.83-0.501-1.198l0.746-2.11l-1.266-0.967l-1.827,1.262c-0.209-0.063-0.425-0.109-0.648-0.139c-0.223-0.029-0.443-0.039-0.66-0.032l-1.444-1.688l-1.471,0.61l0.18,2.232c-0.312,0.298-0.581,0.643-0.79,1.028l-2.196,0.409l-0.207,1.579l2.019,0.957c0.104,0.428,0.276,0.83,0.501,1.199l-0.746,2.107l1.266,0.968l1.828-1.262c0.209,0.062,0.425,0.108,0.647,0.138c0.219,0.028,0.434,0.024,0.647,0.02l1.457,1.704l1.47-0.613l-0.179-2.238c0.31-0.295,0.572-0.64,0.783-1.019l2.205-0.411l0.204-1.58L27.052,21.007z M24.981,22.219c-0.152,1.029-0.92,1.87-2.238,1.71c-1.073-0.129-1.824-1.146-1.685-2.221c0.14-1.072,1.123-1.825,2.194-1.687C24.325,20.161,25.141,21.15,24.981,22.219z",
s:"none",fl:"#333"}},f:{0:{t:"r0,23,22"},100:{t:"r-540,23,22"}},fIE:{0:{t:"r0,21.5,20.5"},100:{t:"r-540,21.5,20.5"}}}]},ghost:{d:1200,it:1,sh:[{i:{a:{p:"M12.973,12.708c0,1.212-0.913,2.193-2.038,2.193c-1.127,0-2.039-0.981-2.039-2.193c0-1.21,0.912-2.192,2.039-2.192C12.06,10.516,12.973,11.498,12.973,12.708zM21.032,10.516c-1.125,0-2.038,0.982-2.038,2.192c0,1.212,0.913,2.193,2.038,2.193c1.127,0,2.038-0.981,2.038-2.193C23.07,11.498,22.159,10.516,21.032,10.516z",s:"none",fl:"#333"}},f:{20:{t:"t-4,-3"},40:{t:"t4,-1"},
60:{t:"t-4,-2"},80:{t:"t2,-3"},100:{t:"t0,0"}}},{i:{a:{p:"M16,2C9.835,2,4,5.848,4,14.01c0,6.633,0,10.66,0,10.66C4,27.773,4.94,30,7.763,30c3.199,0,4.18-2.384,4.18-5.442c0,3.035,0.962,5.442,4.035,5.442s3.973-4.161,3.973-5.375c0,3.17,1.17,5.375,4.117,5.375C27.017,30,28,27.795,28,24.604V14.01C28,5.938,22.166,2,16,2zM10.962,14.954c-2.217,0-4.015-2.234-4.015-4.993c0-2.757,1.797-4.79,4.015-4.79c2.216,0,4.013,2.033,4.013,4.79C14.975,12.719,13.178,14.954,10.962,14.954zM20.996,14.954c-2.217,0-4.014-2.234-4.014-4.993c0-2.757,1.797-4.79,4.014-4.79c2.216,0,4.015,2.033,4.015,4.79C25.011,12.719,23.212,14.954,20.996,14.954z",
s:"none",fl:"#333"}},f:{20:{t:"t-2,-1"},40:{t:"t2,1"},60:{t:"t-2,0"},80:{t:"t2,-1"},100:{t:"t0,0"}}}]},gift:{d:1E3,it:1,sh:[{i:{a:{p:"M20,8.542c0-0.873,1-0.95,1-1.531c0-0.159-0.078-0.371-0.147-0.51l0.007,0.002L20.857,6.5C21.473,6.79,22,7.188,22,7.958c0,0.873-1,0.95-1,1.532c0,0.158,0.078,0.371,0.15,0.51l-0.01-0.002L21.143,10C20.527,9.711,20,9.312,20,8.542zM11.143,10l-0.002-0.002L11.15,10C11.078,9.861,11,9.649,11,9.49c0-0.581,1-0.659,1-1.531c0-0.77-0.527-1.169-1.143-1.458l0.002,0.002L10.853,6.5C10.922,6.639,11,6.851,11,7.01c0,0.582-1,0.659-1,1.531C10,9.312,10.527,9.71,11.143,10zM16.143,9l-0.002-0.002L16.15,9C16.078,8.861,16,8.649,16,8.49c0-0.581,1-0.659,1-1.531c0-0.77-0.527-1.169-1.143-1.458l0.002,0.002L15.853,5.5C15.922,5.639,16,5.851,16,6.01c0,0.582-1,0.659-1,1.531C15,8.312,15.527,8.71,16.143,9zM27,17v7c0,2.209-4.925,4-11,4S5,26.209,5,24v-7c0-1.403,1.992-2.636,5-3.35v-2.212C10,11.196,10.224,11,10.5,11h1c0.276,0,0.5,0.196,0.5,0.438v1.839c0.945-0.134,1.95-0.224,3-0.258v-2.581C15,10.196,15.224,10,15.5,10h1c0.275,0,0.5,0.196,0.5,0.438v2.581c1.051,0.034,2.056,0.124,3,0.258v-1.839C20,11.196,20.224,11,20.501,11H21.5c0.277,0,0.5,0.196,0.5,0.438v2.212C25.008,14.364,27,15.597,27,17zM25,17c0-0.74-1.163-1.402-3-1.86v2.422C22,17.805,21.777,18,21.5,18h-0.999C20.224,18,20,17.805,20,17.563v-2.8c-0.923-0.127-1.931-0.214-3-0.247v2.047C17,16.805,16.775,17,16.5,17h-1c-0.276,0-0.5-0.195-0.5-0.437v-2.047c-1.069,0.033-2.078,0.119-3,0.247v2.8C12,17.805,11.776,18,11.5,18h-1c-0.276,0-0.5-0.195-0.5-0.438V15.14C8.163,15.598,7,16.26,7,17c0,1.381,4.029,2.5,9,2.5S25,18.381,25,17z",
o:0,s:"none",fl:"#333"}},f:{5:{},20:{o:1},50:{},65:{o:0},100:{}}},{i:{a:{p:"M5.199,30C4.537,30,4,29.418,4,28.701V17h11v13H5.199zM28,28.701V17H17v13h9.801C27.463,30,28,29.418,28,28.701z",o:1,s:"none",fl:"#333"}},f:{20:{t:"t0,14"},31:{o:0},32:{t:""},60:{},80:{o:1},100:{}}},{i:{a:{p:"M11.508,2.353c-0.91-0.412-2.76-0.607-4,0c-1.32,0.647-2.383,2.272-2,4C6.115,9.083,10,10,10,10H3.199C2.537,10,2,10.537,2,11.2V16h13v-6h1C16,10,14.688,3.79,11.508,2.353zM9.908,8.263c-0.805-0.164-2.205-0.52-2.549-2.07c-0.217-0.98,0.385-1.902,1.135-2.27c0.703-0.345,1.754-0.233,2.271,0c1.803,0.814,2.549,4.34,2.549,4.34S11.375,8.563,9.908,8.263zM28.801,10H22c0,0,3.885-0.917,4.492-3.647c0.383-1.728-0.68-3.353-2-4c-1.24-0.607-3.09-0.412-4,0C17.313,3.79,16,10,16,10h1v6h13v-4.8C30,10.537,29.463,10,28.801,10zM18.686,8.263c0,0,0.746-3.525,2.549-4.34c0.518-0.233,1.568-0.345,2.271,0c0.75,0.367,1.352,1.289,1.135,2.27c-0.344,1.551-1.744,1.906-2.549,2.07C20.625,8.563,18.686,8.263,18.686,8.263z",
o:1,s:"none",fl:"#333"}},f:{30:{t:"t5,-20r20,30,19"},31:{o:0},32:{t:""},60:{},80:{o:1},100:{}}}]},glass:{d:800,it:1,sh:[{i:{a:{p:"M9.563,2H6.6C6.269,2,6.039,2.266,6.096,2.592c0.443,2.572,3.084,12.715,7.921,14.209c0.316,0.098,0.584,0.403,0.584,0.734v9.063c0,0.33-0.25,0.697-0.56,0.816L10,28.52c-0.306,0.096-0.556,0.447-0.556,0.787V30h13.108v-0.693c0-0.34-0.246-0.693-0.553-0.789l-4.042-1.152c-0.308-0.123-0.559-0.492-0.559-0.822v-9.008c0-0.331,0.269-0.637,0.586-0.734c4.837-1.494,7.476-11.637,7.919-14.209C25.961,2.266,25.73,2,25.4,2H9.563M10.188,4H12c0,0,0.042,6.375,2.917,11C9.903,13.009,8.601,4,8.601,4H10.188",
o:1,t:"",s:"none",fl:"#333"}},f:{10:{t:"t0,-4r100"},30:{t:"t0,3r100"},50:{t:"t0,3r90",p:"M1.882-1.291l1.607,1.782C3.959,0.067,4.43-0.356,4.9-0.781L1.146-4.943C0.717-5.419,0.269-5.279,0.145-4.63L-1.732,5.2c0.92-0.829,1.839-1.659,2.759-2.488L1.882-1.291zM-0.844,14.315c0,0.595,0,1.19,0,1.785c0.292-0.195,0.569-0.406,0.844-0.619L-0.844,14.315zM0.789,19.966l-2.405-0.332c0.951,1.696,1.902,3.392,2.853,5.088l0.971-2.226l4.524-2.537c-1.456-0.175-2.793-0.768-4.248-0.943L0.789,19.966zM32,24.097l5.24,0.031c-1.177-0.873-2.047-2.05-3.226-2.921l-1.544-0.009C32.585,22.274,32.411,23.222,32,24.097zM-2.35,32.216c-0.306,0.095-0.556,0.446-0.556,0.786v0.693H4.6c-0.399-1.079-1.361-1.917-2.164-2.995L-2.35,32.216zM15.268,37.981l0.426-0.762l2.184,0.433c0.568-0.779,0.917-1.678,1.009-2.757l-2.682-0.531l-0.222-1.992c-1.213,0.578-2.222,1.358-3.358,1.54l-0.622,3.138C12.649,38.017,14.354,37.126,15.268,37.981zM30.409,32.493l-2.625-5.584c-1.228,0.243-1.498,2.147-2.661,2.11l4.582,4.891l0.506-0.474C30.459,33.204,30.548,32.782,30.409,32.493zM2.323,9.126l1.128,0.52L-3.79,7.981c-0.067,0.341-0.136,0.682-0.229,1.021c0.424,0.485,0.847,0.969,1.271,1.454l5,1.035c0.481-0.421,0.962-0.841,1.443-1.262C3.75,9.413,3.05,9.258,2.323,9.126zM32.854,6.92c-1.066,0.158-2.131,0.327-3.205,0.432l-1.377,6.305c0.028,0.739,0.026,1.456-0.782,1.578c1.051,0.775,2.101,1.55,3.151,2.325l2.739-0.808C32.561,13.572,34.943,9.909,32.854,6.92zM21.354-5c-1.545,0.494-2.95,1.239-4.342,2.008c3.002,2.071,2.05,6.335,3.93,9.028l1.801-1.351c0.819-2.861,1.639-5.723,2.457-8.584L21.354-5zM36.017,1.105l-3.085-4.678c-2.484,1.638-4.97,3.277-7.454,4.915l9.984,0.654C36.122,2.041,36.37,1.643,36.017,1.105zM10.984-3.417L8.629-2.579c0.212,0.597,0.425,1.193,0.637,1.79l0.471-0.168l2.632,2.752c0.513-0.95,0.968-1.927,1.432-2.899c-0.132,0.002-0.26-0.004-0.398,0.009c0.138-0.013,0.266-0.007,0.398-0.009c0.686-1.435,1.395-2.859,2.364-4.159L10.984-3.417z",
o:0},80:{},81:{t:"",p:"M9.563,2H6.6C6.269,2,6.039,2.266,6.096,2.592c0.443,2.572,3.084,12.715,7.921,14.209c0.316,0.098,0.584,0.403,0.584,0.734v9.063c0,0.33-0.25,0.697-0.56,0.816L10,28.52c-0.306,0.096-0.556,0.447-0.556,0.787V30h13.108v-0.693c0-0.34-0.246-0.693-0.553-0.789l-4.042-1.152c-0.308-0.123-0.559-0.492-0.559-0.822v-9.008c0-0.331,0.269-0.637,0.586-0.734c4.837-1.494,7.476-11.637,7.919-14.209C25.961,2.266,25.73,2,25.4,2H9.563M10.188,4H12c0,0,0.042,6.375,2.917,11C9.903,13.009,8.601,4,8.601,4H10.188"},
100:{o:1}}}]},globe:{d:600,it:1,sh:[{i:{a:{p:"M16,2C8.269,2,2,8.269,2,16c0,7.732,6.269,14,14,14c7.732,0,14-6.268,14-14C30,8.269,23.732,2,16,2zM19.29,23.571l-0.5,2.056l-0.15,1.015c0,0,0.169,0.517,0.122,0.798c-0.02,0.116,0.065,0.17,0.13,0.207c-0.928,0.23-1.893,0.367-2.892,0.367C9.376,28.014,3.987,22.625,3.987,16c0-2.159,0.58-4.182,1.581-5.935c0.295-0.156,0.693-0.239,0.693-0.239H6.017l0.325-0.394l0.655-0.008l0.975,0.116l0.975,0.5l0.751,0.771l-0.12-0.447l0.837,0.9l0.335,1.296l1.504,2.297l0.921,0.596l-0.84-1.368l1.197,1.285l1.319,1.149l1.503,0.475l1.229,0.972l0.422-0.173l0.169,0.78l-0.532,0.665l0.011,0.484l0.274,0.558l1.175,1.543L19.29,23.571zM27.945,17.268c-0.505,4.811-3.864,8.784-8.349,10.194c-0.006-0.011-0.021-0.034-0.021-0.034c0.019-0.164,0.539-0.838,0.539-0.838l-0.271-0.042l0.568-0.678l-0.245-0.256l0.938-0.292l0.211-1.091l1.543-0.646l0.025-0.447l0.447-0.243l0.637-0.175l0.377-0.857l0.109-0.687l0.476-0.601l-0.418-0.819l-1.897-0.244l-0.428-0.292l0.469-0.288l-1.06-0.757l-0.701-0.854l-0.744,0.245l-0.549-0.207l-0.438,0.342v-0.568l-1.109,0.438L17.275,17.2l-0.631-0.587l-0.006-0.939l-1.152,0.474l-0.284-1.502l1.411-0.357l1.053,0.817l0.011-1.096l0.718-0.92l1-0.583l0.321-0.443l0.355,0.173l0.903-0.273l-0.363-0.212l-1.205-0.243l1.016-0.419l0.055,0.244l0.894-0.447l0.338,0.704l0.393-0.122l-0.541-0.365l-0.034-0.589l-0.782-0.539L20.37,9.566l-0.312,0.047l-0.472-0.175L18.76,9.154l-0.637,0.487l-0.269,0.625l0.161,0.553l-0.339-0.338l-0.149,0.108l-1.724-0.705l0.914-1.206l1.05,0.292l-0.939-0.392l0.65-0.419l0.58-0.243l0.338,0.176L18.29,8.416l0.688-0.095l-0.123,0.57l1.461,0.284l-0.419-0.569l0.974-0.12l-0.886-0.305l-0.238-0.333l-0.875-0.206l-1.078-0.275L17.367,7.4l-0.392,0.26l-0.839-0.082l0.839,0.392l-0.432,0.379l-1.083-0.662l-0.606,0.317L14.48,8.325L13.754,8.27l0.203-0.865h-0.595l0.055,0.352c0,0-1.771-0.502-2.268-0.502c-0.258,0-0.421,0.499-0.421,0.499l0.804-0.099l0.48,0.385L9.725,7.89L8.627,8.106c0,0-1.004-0.179-1.457-0.224c2.197-2.387,5.337-3.895,8.831-3.895c2.217,0,4.289,0.613,6.073,1.664c-0.269,0.165-0.9-0.04-0.9-0.04L20.48,5.946l-1.492,0.802l0.866,0.009l1.641,1.091l0.579,0.262L21.86,8.19l0.271,0.633l0.503,0.604l0.758-0.235l0.59-0.533c0,0,0.844-0.318,1.223-0.368c1.647,1.964,2.668,4.462,2.783,7.192L27.945,17.268zM15.646,7.29l-0.335,0.207l0.568,0.009l0.01-0.152L15.646,7.29zM14.319,6.63c0.048,0.122,0.371,0.136,0.371,0.136l-0.913-0.244C13.777,6.522,14.299,6.58,14.319,6.63zM14.555,7.126l0.404-0.107l-0.905-0.086L14.011,7.28L14.555,7.126zM12.858,6.757c0.192,0.159,0.127-0.271,0.127-0.271l-0.434,0.29L12.858,6.757C12.858,6.757,12.804,6.712,12.858,6.757zM13.627,6.919l-1.182-0.045c0,0-0.981-0.234-1.417,0.136C11.415,7.103,13.627,6.919,13.627,6.919zM19.369,15.926l-0.621,0.231l0.819,0.125L19.369,15.926zM19.979,16.099l0.055,0.22L19.979,16.099zM18.342,15.696l-1.205-0.19l1.448,0.38L18.342,15.696zM16.729,7.055l-1.678-0.486l2.752,0.587L16.729,7.055L16.729,7.055z",
s:"none",fl:"#333"}},f:{10:{t:"t-10,-5s0.3"},22:{t:"t0,-10s0.35"},33:{t:"t7,-5s0.41"},43:{t:"t8,1s0.48"},52:{t:"t8,8s0.54"},60:{t:"t-2,8s0.6"},67:{t:"t-6,4s0.7"},80:{t:""},100:{}}}]},"google-plus":{d:0,it:1,sh:[{i:{a:{p:"M14.234,17.639l-1.119-0.881c-0.342-0.285-0.809-0.664-0.809-1.355c0-0.693,0.467-1.136,0.871-1.544c1.301-1.04,2.605-2.143,2.605-4.473c0-2.394-1.488-3.653-2.203-4.252h1.928L17.492,4h-6.395C9.42,4,7.309,4.252,5.541,5.732C4.205,6.896,3.553,8.505,3.553,9.953c0,2.456,1.863,4.945,5.154,4.945c0.311,0,0.65-0.033,0.992-0.063c-0.154,0.376-0.311,0.693-0.311,1.228c0,0.977,0.498,1.576,0.932,2.141c-1.396,0.096-4.006,0.254-5.93,1.451C2.561,20.756,2,22.361,2,23.494C2,25.828,4.174,28,8.676,28c5.34,0,8.164-2.992,8.164-5.955C16.84,19.875,15.6,18.807,14.234,17.639zM10.164,14.016c-2.668,0-3.879-3.496-3.879-5.604c0-0.82,0.154-1.671,0.684-2.333C7.465,5.448,8.334,5.04,9.143,5.04c2.574,0,3.91,3.526,3.91,5.794c0,0.568-0.063,1.575-0.775,2.301C11.779,13.636,10.941,14.016,10.164,14.016zM10.197,26.676c-3.322,0-5.463-1.604-5.463-3.84s1.986-2.992,2.668-3.246c1.305-0.441,2.982-0.502,3.26-0.502c0.311,0,0.467,0,0.713,0.029c2.359,1.701,3.389,2.555,3.389,4.156C14.764,25.23,13.178,26.676,10.197,26.676zM30,8.285v1.43h-4.283V14h-1.432V9.715H20v-1.43h4.285V4h1.432v4.285H30z",
s:"none",fl:"#0A55A3"}},f:{}}]},"google-plus-alt":{d:0,it:1,sh:[{i:{a:{p:"M12.22,11.624C11.786,8.33,9.393,5.686,6.877,5.61c-2.516-0.075-4.204,2.447-3.77,5.742c0.435,3.294,2.688,6.052,5.343,6.101C11,17.5,12.654,14.918,12.22,11.624zM30,10V5c0-1.7-1.3-3-3-3H5C3.3,2,2,3.3,2,5c0,0,0.021,0.883,0.003,1.537c1.596-1.405,3.81-2.579,6.094-2.579h9.769L15.68,5.807h-3.097C14.637,6.594,16,8.982,16,11.432c0,2.058-1.412,3.827-3.027,5.085c-1.576,1.228-1.875,1.742-1.875,2.785c0,0.891,1.688,2.406,2.571,3.029c2.581,1.819,3.415,3.509,3.415,6.329c0,0.449-0.055,0.897-0.165,1.339H27c1.7,0,3-1.3,3-3V12h-6v6h-2v-6h-6v-2h6V4h2v6H30zM8.776,22.927C7.5,21.7,7,20.2,7.943,18.419C7.4,18.5,4.232,18.602,2,16.699l0,7.355C4.831,22.71,8.776,22.927,8.776,22.927zM8.116,24C4.899,24.045,3.1,25.25,2,26.45v0.7C2,28.851,3.3,30,5,30h9.5c0.05-0.305,0.07-0.619,0.074-0.941C14.6,26.5,11.7,23.95,8.116,24z",
s:"none",fl:"#D33D2C"}},f:{}}]},hammer:{d:800,it:1,sh:[{i:{a:{p:"M23.336,7.409c-0.8,0-1.133-0.392-1.462-0.835l-0.6-0.801c0,0-0.359,0.36-0.802,0.8c-0.442,0.442-0.837,0.833-1.437,0.832l-7.5-0.009c-3.3-0.004-5.302,2.093-5.302,2.093C5.54,3.888,9.743,1.593,12.743,1.597l6.3,0.007c0.6,0.001,1.044,0.352,1.467,0.786l0.768,0.785c0,0,0.269-0.357,0.601-0.799c0.332-0.441,0.565-0.767,1.366-0.767l2.598,0.005l-0.006,5.8C25.836,7.413,24.276,7.41,23.336,7.409z M13.324,30.398l4.99,0.005l0.017-22l-4.99-0.005L13.324,30.398z",
t:"t-2.5,1r45",s:"none",fl:"#333"}},f:{0:{t:"t-3,0r45"},15:{t:"t-3,0r0"},30:{t:"t-3,0r75"},45:{t:"t-1.5,0r0"},60:{t:"t-1.5,0r90"},75:{t:"t-1,0r0"},90:{t:"t-1,0r110"},100:{t:"t-2.5,1r45"}}},{i:{a:{p:"MM25,16v2h-1v9l-1,3l-1-3v-9h-1v-2H25z",t:"t5.5,0",o:0,s:"none",fl:"#333"}},f:{0:{o:1,t:"t5.5,0"},25:{},30:{t:"t5.5,4"},55:{},60:{t:"t5.5,8"},87:{},90:{t:"t5.5,12"},91:{o:0},92:{t:""},100:{}},fIE:{0:{o:1,t:"t6.5,0"},25:{},30:{t:"t6.5,4"},55:{},60:{t:"t6.5,8"},87:{},90:{t:"t6.5,12"},91:{o:0},92:{t:""},100:{}}}]},
"hand-down":{d:800,it:1,sh:[{i:{a:{p:"M23.134,9H24V5.2C24,4.537,23.663,4,23,4h-9.8C12.537,4,12,4.537,12,5.2V9h0.89C12.038,12.64,6,16,6,16c0,2.001,1.233,2.464,2.192,2.589c1.203,0.157,2.564-0.417,3.833-1.052L12,26c-0.002,1.104,0.941,2,2,2c1.058,0,2-0.896,2-2v-5c1,1,2.5,0.8,3.348-0.118c1.168,0.475,2.555-0.081,3.074-0.826c2.778,0.044,2.766-3.235,2.77-3.695C25.198,14.549,23.661,12.398,23.134,9zM23,8H13V7h10V8z",t:"",s:"none",fl:"#333"}},f:{0:{p:"M23.134,9H24V5.2C24,4.537,23.663,4,23,4h-9.8C12.537,4,12,4.537,12,5.2V9h0.89C12.038,12.64,6,16,6,16c0,2.001,1.233,2.464,2.192,2.589c1.203,0.157,2.564-0.417,3.833-1.052L12,19.4c0,0.899,1.029,1.541,1.7,1.699c0.492,0.117,1.6,0.2,2.3-0.1l0,0c1,1,2.5,0.8,3.348-0.118c1.168,0.475,2.555-0.081,3.074-0.826c2.778,0.044,2.766-3.235,2.77-3.695C25.198,14.549,23.661,12.398,23.134,9zM23,8H13V7h10V8z"},
10:{},30:{p:"M23.134,9H24V5.2C24,4.537,23.663,4,23,4h-9.8C12.537,4,12,4.537,12,5.2V9h0.89C12.038,12.64,6,16,6,16c0,2.001,1.233,2.464,2.192,2.589c1.203,0.157,2.564-0.417,3.833-1.052L12,26c-0.002,1.104,0.941,2,2,2c1.058,0,2-0.896,2-2v-5c1,1,2.5,0.8,3.348-0.118c1.168,0.475,2.555-0.081,3.074-0.826c2.778,0.044,2.766-3.235,2.77-3.695C25.198,14.549,23.661,12.398,23.134,9zM23,8H13V7h10V8z"},40:{t:"t0,4"},50:{t:""},60:{t:"t0,4"},70:{t:""},100:{}}}]},"hand-left":{d:800,it:1,sh:[{i:{a:{p:"M23,23.136V24h3.8c0.663,0,1.2-0.335,1.2-0.999V13.2c0-0.663-0.537-1.2-1.2-1.2H23v0.89C19.36,12.038,16,6,16,6c-2,0-2.463,1.233-2.588,2.192c-0.158,1.203,0.416,2.564,1.051,3.833L6,12c-1.104-0.002-2,0.941-2,2c0,1.058,0.896,2,2,2h5c-1,1.001-0.799,2.501,0.119,3.349c-0.475,1.168,0.08,2.555,0.826,3.074c-0.045,2.779,3.235,2.766,3.694,2.77C17.451,25.2,19.602,23.663,23,23.136zM24,23.001V13h1v10.001H24z",
t:"",s:"none",fl:"#333"}},f:{0:{p:"M23,23.136V24h3.8c0.663,0,1.2-0.335,1.2-0.999V13.2c0-0.663-0.537-1.2-1.2-1.2H23v0.89C19.36,12.038,16,6,16,6c-2,0-2.463,1.233-2.588,2.192c-0.158,1.203,0.416,2.564,1.051,3.833L12.6,12c-0.898,0-1.541,1.029-1.699,1.7c-0.117,0.492-0.199,1.6,0.1,2.3l0,0c-1,1.001-0.799,2.501,0.119,3.349c-0.475,1.168,0.08,2.555,0.826,3.074c-0.045,2.779,3.235,2.766,3.694,2.77C17.451,25.2,19.602,23.663,23,23.136zM24,23.001V13h1v10.001H24z"},10:{},30:{p:"M23,23.136V24h3.8c0.663,0,1.2-0.335,1.2-0.999V13.2c0-0.663-0.537-1.2-1.2-1.2H23v0.89C19.36,12.038,16,6,16,6c-2,0-2.463,1.233-2.588,2.192c-0.158,1.203,0.416,2.564,1.051,3.833L6,12c-1.104-0.002-2,0.941-2,2c0,1.058,0.896,2,2,2h5c-1,1.001-0.799,2.501,0.119,3.349c-0.475,1.168,0.08,2.555,0.826,3.074c-0.045,2.779,3.235,2.766,3.694,2.77C17.451,25.2,19.602,23.663,23,23.136zM24,23.001V13h1v10.001H24z"},
40:{t:"t-4,0"},50:{t:""},60:{t:"t-4,0"},70:{t:""},100:{}}}]},"hand-right":{d:800,it:1,sh:[{i:{a:{p:"M16.361,25.192c0.459-0.004,3.739,0.01,3.694-2.77c0.746-0.52,1.301-1.906,0.826-3.074C21.799,18.501,22,17.001,21,16h5c1.104,0,2-0.942,2-2c0-1.059-0.896-2.002-2-2l-8.463,0.025c0.635-1.269,1.209-2.63,1.051-3.833C18.463,7.233,18,6,16,6c0,0-3.36,6.038-7,6.89V12H5.2C4.537,12,4,12.537,4,13.2v9.801c0,0.664,0.537,1,1.2,1H9v-0.865C12.398,23.663,14.548,25.2,16.361,25.192zM7,23.001V13h1v10.001H7z",t:"",s:"none",
fl:"#333"}},f:{0:{p:"M16.361,25.192c0.459-0.004,3.739,0.01,3.694-2.77c0.746-0.52,1.301-1.906,0.826-3.074C21.799,18.501,22,17.001,21,16l0,0c0.299-0.7,0.217-1.808,0.1-2.3C20.941,13.029,20.299,12,19.4,12l-1.863,0.025c0.635-1.269,1.209-2.63,1.051-3.833C18.463,7.233,18,6,16,6c0,0-3.36,6.038-7,6.89V12H5.2C4.537,12,4,12.537,4,13.2v9.801c0,0.664,0.537,1,1.2,1H9v-0.865C12.398,23.663,14.548,25.2,16.361,25.192zM7,23.001V13h1v10.001H7z"},10:{},30:{p:"M16.361,25.192c0.459-0.004,3.739,0.01,3.694-2.77c0.746-0.52,1.301-1.906,0.826-3.074C21.799,18.501,22,17.001,21,16h5c1.104,0,2-0.942,2-2c0-1.059-0.896-2.002-2-2l-8.463,0.025c0.635-1.269,1.209-2.63,1.051-3.833C18.463,7.233,18,6,16,6c0,0-3.36,6.038-7,6.89V12H5.2C4.537,12,4,12.537,4,13.2v9.801c0,0.664,0.537,1,1.2,1H9v-0.865C12.398,23.663,14.548,25.2,16.361,25.192zM7,23.001V13h1v10.001H7z"},
40:{t:"t4,0"},50:{t:""},60:{t:"t4,0"},70:{t:""},100:{}}}]},"hand-up":{d:800,it:1,sh:[{i:{a:{p:"M25.191,15.64c-0.004-0.46,0.009-3.74-2.77-3.695c-0.52-0.745-1.906-1.301-3.074-0.826C18.5,10.2,17,10,16,11V6c0-1.104-0.942-2-2-2c-1.059,0-2.002,0.896-2,2l0.025,8.463c-1.269-0.635-2.63-1.209-3.833-1.052C7.233,13.536,6,13.999,6,16c0,0,6.038,3.36,6.89,7H12v3.8c0,0.663,0.537,1.2,1.2,1.2H23c0.663,0,1-0.537,1-1.2V23h-0.866C23.661,19.602,25.198,17.451,25.191,15.64zM23,25H13v-1h10V25z",t:"",s:"none",fl:"#333"}},
f:{0:{p:"M25.191,15.64c-0.004-0.46,0.009-3.74-2.77-3.695c-0.52-0.745-1.906-1.301-3.074-0.826C18.5,10.2,17,10,16,11l0,0c-0.7-0.3-1.808-0.216-2.3-0.1c-0.671,0.159-1.7,0.8-1.7,1.7l0.025,1.863c-1.269-0.635-2.63-1.209-3.833-1.052C7.233,13.536,6,13.999,6,16c0,0,6.038,3.36,6.89,7H12v3.8c0,0.663,0.537,1.2,1.2,1.2H23c0.663,0,1-0.537,1-1.2V23h-0.866C23.661,19.602,25.198,17.451,25.191,15.64zM23,25H13v-1h10V25z"},10:{},30:{p:"M25.191,15.64c-0.004-0.46,0.009-3.74-2.77-3.695c-0.52-0.745-1.906-1.301-3.074-0.826C18.5,10.2,17,10,16,11V6c0-1.104-0.942-2-2-2c-1.059,0-2.002,0.896-2,2l0.025,8.463c-1.269-0.635-2.63-1.209-3.833-1.052C7.233,13.536,6,13.999,6,16c0,0,6.038,3.36,6.89,7H12v3.8c0,0.663,0.537,1.2,1.2,1.2H23c0.663,0,1-0.537,1-1.2V23h-0.866C23.661,19.602,25.198,17.451,25.191,15.64zM23,25H13v-1h10V25z"},
40:{t:"t0,-4"},50:{t:""},60:{t:"t0,-4"},70:{t:""},100:{}}}]},heart:{d:300,it:3,sh:[{i:{a:{p:"M25.953,7.275c-2.58-2.534-6.645-2.382-9.38,0.3l-0.599,0.598l-0.599-0.599c-2.736-2.682-6.798-2.833-9.38-0.299c-2.583,2.531-2.735,6.699,0,9.38l9.979,9.879l10.079-9.879C28.788,13.974,28.538,9.806,25.953,7.275z",t:"",s:"none",fl:"#333"}},f:{20:{t:"s1.2"},90:{t:""},100:{}}}]},"heart-alt":{d:1200,it:1,sh:[{i:{a:{p:"M16.016,21.992l6-12.599l-4,1l1.779-4.672c2.17-0.596,4.486-0.108,6.174,1.548c2.586,2.53,2.836,6.698,0.1,9.379l-10.053,9.877V21.992zM16.016,21.992l1.399-8.799l-3.399,0.86l1.563-6.297L15.39,7.568C12.654,4.887,8.592,4.735,6.01,7.27c-2.583,2.53-2.735,6.698,0,9.379l10.006,9.877V21.992z",
o:1,t:"",s:"none",fl:"#333"}},f:{0:{p:"M16.016,8.193c0,0,0.741-0.759,0.999-1.001c0.232-0.219,0.723-0.641,1.001-0.799c0.414-0.235,1.324-0.537,1.779-0.672c2.158-0.64,4.486-0.108,6.174,1.548c2.586,2.53,2.836,6.698,0.1,9.379l-10.053,9.877V8.193zM16.016,8.193L16.016,8.193v0.061l-0.438-0.497L15.39,7.568C12.654,4.887,8.592,4.735,6.01,7.27c-2.583,2.53-2.735,6.698,0,9.379l10.006,9.877V8.193z"},10:{},15:{p:"M16.016,13.993l2-2v-1.6l1.779-4.672c2.17-0.596,4.486-0.108,6.174,1.548c2.586,2.53,2.836,6.698,0.1,9.379l-10.053,9.877V13.993zM16.016,13.993L16.016,13.993l-2,0.061l1.563-6.297L15.39,7.568C12.654,4.887,8.592,4.735,6.01,7.27c-2.583,2.53-2.735,6.698,0,9.379l10.006,9.877V13.993z"},
20:{p:"M15.9,21.992l6.001-12.599l-4.001,1l1.779-4.671c2.17-0.597,4.486-0.109,6.174,1.548c2.588,2.529,2.836,6.698,0.101,9.377L15.9,26.525L15.9,21.992zM15.87,22.008l1.6-8.801l-3.399,0.861l1.563-6.296l-0.189-0.189C12.709,4.9,8.647,4.75,6.064,7.283c-2.583,2.53-2.735,6.698,0,9.379l9.806,9.878L15.87,22.008z"},30:{},40:{p:"M17.188,22.146l9.058-10.616l-4.123-0.069l2.928-4.052c2.25-0.015,4.361,1.056,5.563,3.093c1.845,3.113,1.006,7.204-2.33,9.084l-12.268,6.939L17.188,22.146zM14.696,22.162l-0.732-8.915l-3.061,1.711l-0.12-6.486l-0.231-0.134c-3.336-1.882-7.299-0.977-9.138,2.14c-1.84,3.112-0.908,7.178,2.428,9.06l12.028,7.004L14.696,22.162z",
t:"t0,5",o:0.5},50:{p:"M18.93,23.053l12.695-5.794l-3.707-1.806l4.365-2.435c2.048,0.938,3.507,2.8,3.735,5.153c0.355,3.6-2.133,6.955-5.952,7.248l-14.051,1.105L18.93,23.053zM12.956,23.068l-4.432-7.771l-2.051,2.843l-2.85-5.826l-0.267-0.023c-3.818-0.296-7.028,2.199-7.377,5.801c-0.353,3.598,2.21,6.889,6.03,7.186l13.861,1.264L12.956,23.068z",t:"t0,10",o:0},70:{},71:{t:"",o:1,p:"M16.016,21.992l6-12.599l-4,1l1.779-4.672c2.17-0.596,4.486-0.108,6.174,1.548c2.586,2.53,2.836,6.698,0.1,9.379l-10.053,9.877V21.992zM16.016,21.992l1.399-8.799l-3.399,0.86l1.563-6.297L15.39,7.568C12.654,4.887,8.592,4.735,6.01,7.27c-2.583,2.53-2.735,6.698,0,9.379l10.006,9.877V21.992z"},
100:{}}}]},help:{d:1600,it:1,sh:[{i:{a:{p:"M16,9.5c-4.418,0-8,2.91-8,6.5c0,3.589,3.582,6.5,8,6.5s8-2.911,8-6.5C24,12.41,20.418,9.5,16,9.5zM16,22.094c-4.143,0-7.5-2.728-7.5-6.094s3.357-6.094,7.5-6.094s7.5,2.728,7.5,6.094S20.143,22.094,16,22.094z",o:0,t:"s1",s:"none",fl:"#333"}},f:{9:{o:0},10:{o:1},40:{o:0,t:"s3"},100:{o:0,t:"s1"}}},{i:{a:{p:"M16,9.5c-4.418,0-8,2.91-8,6.5c0,3.589,3.582,6.5,8,6.5s8-2.911,8-6.5C24,12.41,20.418,9.5,16,9.5zM16,22.094c-4.143,0-7.5-2.728-7.5-6.094s3.357-6.094,7.5-6.094s7.5,2.728,7.5,6.094S20.143,22.094,16,22.094z",
o:0,t:"s1",s:"none",fl:"#333"}},f:{19:{o:0},20:{o:1},50:{o:0,t:"s3"},100:{o:0,t:"s1"}}},{i:{a:{p:"M16,9.5c-4.418,0-8,2.91-8,6.5c0,3.589,3.582,6.5,8,6.5s8-2.911,8-6.5C24,12.41,20.418,9.5,16,9.5zM16,22.094c-4.143,0-7.5-2.728-7.5-6.094s3.357-6.094,7.5-6.094s7.5,2.728,7.5,6.094S20.143,22.094,16,22.094z",o:0,t:"s1",s:"none",fl:"#333"}},f:{29:{o:0},30:{o:1},60:{o:0,t:"s3"},100:{o:0,t:"s1"}}},{i:{a:{p:"M16,9.5c-4.418,0-8,2.91-8,6.5c0,3.589,3.582,6.5,8,6.5s8-2.911,8-6.5C24,12.41,20.418,9.5,16,9.5zM16,22.094c-4.143,0-7.5-2.728-7.5-6.094s3.357-6.094,7.5-6.094s7.5,2.728,7.5,6.094S20.143,22.094,16,22.094z",
o:0,t:"s1",s:"none",fl:"#333"}},f:{39:{o:0},40:{o:1},70:{o:0,t:"s3"},100:{o:0,t:"s1"}}},{i:{a:{p:"M16.007,1.998C8.256,2.019,1.998,8.277,2,16.006c0.007,7.719,6.272,13.986,13.994,13.992c7.73,0.004,13.988-6.251,14.006-14.006C29.994,8.272,23.729,2.008,16.007,1.998zM21.525,4.804c2.486,0.942,4.683,3.061,5.658,5.688l-4.352,2.212c-0.638-1.459-2.189-2.937-3.534-3.539L21.525,4.804zM10.472,4.804l2.229,4.36c-1.47,0.669-2.951,2.214-3.534,3.539l-4.35-2.212C5.746,8,7.862,5.788,10.472,4.804zM10.471,27.108c-2.48-0.926-4.678-3.065-5.655-5.663l4.351-2.246c0.637,1.498,2.191,2.97,3.534,3.542L10.471,27.108zM10.001,15.936c0.007-3.318,2.676-5.988,6-6.001c3.314,0,5.998,2.684,5.994,5.998c-0.009,3.323-2.678,5.99-6,5.997C12.688,21.926,10.004,19.243,10.001,15.936zM21.429,27.108l-2.231-4.367c1.475-0.633,2.955-2.173,3.538-3.542l4.352,2.246C26.155,23.911,24.041,26.128,21.429,27.108z",
t:"s1",s:"none",fl:"#333"}},f:{0:{t:"s0.5"},10:{t:"s0.55,0.45,15,16"},20:{t:"s0.55,0.45,17,16"},30:{t:"s0.55,0.45,15,16"},40:{t:"s0.55,0.45,17,16"},50:{t:"s0.55,0.45,15,16"},60:{t:"s0.55,0.45,17,16"},61:{t:"s1"},100:{t:"s1"}},fIE:{0:{t:"s0.5"},10:{t:"s0.55,0.45,13.5,14.5"},20:{t:"s0.55,0.45,15.5,14.5"},30:{t:"s0.55,0.45,13.5,14.5"},40:{t:"s0.55,0.45,15.5,14.5"},50:{t:"s0.55,0.45,13.5,14.5"},60:{t:"s0.55,0.45,15.5,14.5"},61:{t:"s1"},100:{t:"s1"}}}]},home:{d:1E3,it:1,sh:[{i:{a:{p:"M29.719,15.469L24,9.751V5h-3v1.752l-3.586-3.585l-0.99-0.99c-0.234-0.234-0.614-0.234-0.849,0l-0.99,0.99L2.282,15.469c-0.234,0.234-0.234,0.614,0,0.849l0.565,0.566c0.234,0.233,0.614,0.234,0.849,0L16,4.58l12.304,12.304c0.233,0.233,0.614,0.234,0.849,0l0.565-0.566C29.952,16.083,29.952,15.704,29.719,15.469zM16,6.701l-10,10V30h6V19.6c0-0.331,0.269-0.6,0.6-0.6h6.8c0.331,0,0.6,0.269,0.6,0.6V30h6V16.701L16,6.701zM16,15.5L16,15.5L16,15.5L16,15.5L16,15.5zM16,15.5L16,15.5L16,15.5L16,15.5L16,15.5zM16,15.5L16,15.5L16,15.5L16,15.5L16,15.5zM16,15.5L16,15.5L16,15.5L16,15.5L16,15.5z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M18.4,20h-4.8c-0.332,0-0.6,0.269-0.6,0.6V30h6v-9.4C19,20.269,18.731,20,18.4,20z",t:"s1,1,14,20",s:"none",fl:"#333"}},f:{20:{t:"s0,1,13,20"},40:{},60:{t:"s1,1,13,20"},100:{}},fIE:{20:{t:"s0,1,11.5,18.5"},40:{},60:{t:"s1,1,11.5,18.5"},100:{}}}]},html5:{d:700,it:1,sh:[{i:{a:{p:"M3.655,2l2.247,25.201L15.985,30l10.11-2.803L28.345,2H3.655z M23.455,10.242  H11.627l0.282,3.165h11.264l-0.848,9.488L16,24.649v0.001l-0.014,0.003l-6.332-1.758l-0.433-4.852h3.103l0.22,2.464L16,21.435  l3.437-0.928l0.358-4.008H9.083L8.25,7.151h15.483L23.455,10.242z",
s:"none",fl:"#333"}},f:{20:{p:"M11.753,2L14,27.201L15.985,30L18,27.197L20.25,2H11.753z M16.011,10.242L16.011,10.242  L16,13.407l0,0v9.488v1.754v0.001l-0.014,0.003L16,22.896v-4.852l0,0v2.464v0.927v-0.928v-4.008l0,0V7.151l0,0L16.011,10.242z"},30:{},50:{p:"M3.655,2l2.247,25.201L15.985,30L18,27.197L20.25,2H3.655z M16.011,10.242h-4.383  l0.282,3.165H16v9.488v1.754v0.001l-0.014,0.003l-6.332-1.758l-0.433-4.852h3.103l0.22,2.464L16,21.435v-0.928v-4.008H9.083  L8.25,7.151H16L16.011,10.242z",e:"elastic"},60:{},
80:{p:"M3.655,2l2.247,25.201L15.985,30l10.11-2.803L28.345,2H3.655z M23.455,10.242  H11.627l0.282,3.165h11.264l-0.848,9.488L16,24.649v0.001l-0.014,0.003l-6.332-1.758l-0.433-4.852h3.103l0.22,2.464L16,21.435  l3.437-0.928l0.358-4.008H9.083L8.25,7.151h15.483L23.455,10.242z",e:"elastic"},100:{}}}]},ie:{d:0,it:1,sh:[{i:{a:{p:"M23.12,17.979h6.783c0.053-0.471,0.074-0.951,0.074-1.443c0-2.305-0.619-4.468-1.7-6.33c1.117-2.969,1.078-5.488-0.417-6.994c-1.424-1.417-5.239-1.186-9.554,0.724c-0.318-0.024-0.641-0.037-0.966-0.037c-5.921,0-10.889,4.074-12.262,9.565c1.857-2.378,3.812-4.103,6.422-5.358c-0.238,0.222-1.623,1.599-1.855,1.833c-6.884,6.881-9.055,16.51-6.719,18.846c1.776,1.775,4.993,1.475,8.688-0.336c1.719,0.877,3.665,1.371,5.726,1.371c5.55,0,10.253-3.574,11.957-8.549h-6.836c-0.94,1.736-2.78,2.916-4.892,2.916s-3.95-1.18-4.891-2.916c-0.419-0.785-0.659-2.322-0.659-3.271v-0.021H23.12zM27.798,4.615c0.963,0.974,0.939,2.765,0.115,5c-1.412-2.153-3.463-3.848-5.886-4.817C24.617,3.688,26.724,3.541,27.798,4.615zM17.341,9.627c2.832,0,5.153,2.226,5.309,5.017H12.031C12.188,11.853,14.508,9.627,17.341,9.627zM4.708,28.342c-1.229-1.229-0.858-3.811,0.725-6.92c0.985,2.766,2.907,5.088,5.383,6.584C8.074,29.252,5.831,29.463,4.708,28.342z",
s:"none",fl:"#37A5E2"}},f:{}}]},image:{d:1400,it:1,sh:[{i:{a:{p:"M6,24l2-6l2,2l6-6l2,2l3.664-5.25L26,18v6H6zM9,10c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S10.657,10,9,10z",o:1,s:"none",fl:"#333"}},f:{0:{o:1,t:""},17:{},33:{t:"t-6,0",o:0},83:{t:"t6,0"},100:{t:"",o:1}}},{i:{a:{p:"M19.2,24c0.049-0.34,0.058-0.398,0.058-0.768c0-0.499-0.051-0.978-0.136-1.418c0.486,0.436,0.955,0.615,1.402,0.376c0.996-0.519,0.868-2.508-0.288-4.448c-0.496-0.836-1.104-1.513-1.714-1.986c-0.711,0.485-1.578,0.781-2.521,0.781c-0.946,0-1.813-0.296-2.523-0.781c-0.61,0.473-1.217,1.15-1.715,1.986c-1.156,1.94-1.283,3.93-0.285,4.448c0.446,0.235,0.916,0.06,1.401-0.376c-0.085,0.44-0.135,0.919-0.135,1.418c0,0.336,0.017,0.456,0.056,0.768H19.2zM16,15.779c1.92,0,3.477-1.451,3.477-3.24C19.477,10.75,17.92,9.3,16,9.3c-1.921,0-3.478,1.451-3.478,3.24S14.079,15.779,16,15.779zM22.985,17.833c1.576,0,2.854-1.19,2.854-2.66c0-1.468-1.276-2.66-2.854-2.66s-2.855,1.191-2.855,2.66C20.13,16.643,21.407,17.833,22.985,17.833zM25.7,24c0-0.412-0.082-0.851-0.152-1.212c0.398,0.358,0.784,0.506,1.151,0.308c0.819-0.422,0.712-2.058-0.235-3.65c-0.408-0.687-0.908-1.242-1.407-1.63c-0.584,0.397-1.297,0.64-2.07,0.64c-0.614,0-1.185-0.155-1.688-0.417c0.404,0.827,0.653,1.667,0.7,2.416c0.076,1.148-0.31,2-1.08,2.397c-0.166,0.088-0.346,0.138-0.53,0.169C20.343,23.317,20.3,23.672,20.3,24H25.7zM9.016,17.833c1.576,0,2.854-1.19,2.854-2.66c0-1.468-1.278-2.66-2.854-2.66c-1.577,0-2.856,1.191-2.856,2.66C6.16,16.643,7.438,17.833,9.016,17.833zM11.7,24c0-0.33-0.043-0.685-0.089-0.981c-0.184-0.03-0.365-0.079-0.536-0.171c-1.294-0.67-1.414-2.669-0.372-4.811c-0.502,0.263-1.074,0.418-1.688,0.418c-0.777,0-1.489-0.242-2.072-0.64c-0.5,0.388-0.999,0.943-1.409,1.63c-0.948,1.593-1.052,3.229-0.233,3.65c0.367,0.194,0.751,0.049,1.149-0.308C6.381,23.149,6.4,23.588,6.4,24H11.7z",
o:0,s:"none",fl:"#333"}},f:{0:{o:0},17:{t:"t6,0"},33:{t:"",o:1},50:{},66:{t:"t-6,0",o:0},100:{t:""}}},{i:{a:{p:"M5.5,18.791l1.856-0.855l2.619,1.283l3.058-2.031l-5.078-2.406l1.803-1.765l9.31,1.417c0,0,3.357-2.433,5.706-2.433c2.784,0,1.363,1.336,1.363,1.336C19.312,20.023,9.759,22,9.759,22C7.467,20.797,5.5,18.791,5.5,18.791z",o:0,s:"none",fl:"#333"}},f:{0:{o:0},33:{t:"t6,0"},50:{},66:{t:"",o:1},83:{},100:{t:"t-6,0",o:0}}},{i:{a:{p:"M2,7.2v19.6C2,27.463,2.537,28,3.2,28h25.6c0.663,0,1.2-0.537,1.2-1.2V7.2C30,6.537,29.463,6,28.8,6H3.2C2.537,6,2,6.537,2,7.2zM28,26H4V8h24V26z",
s:"none",fl:"#333"}},f:{}}]},inbox:{d:1E3,it:1,sh:[{i:{a:{p:"M26,21L24,4H8L6,21H4L5.934,2.596C5.97,2.267,6.269,2,6.6,2h18.8c0.331,0,0.629,0.267,0.666,0.596L28,21H26zM29.4,22H2.6c-0.332,0-0.535,0.261-0.455,0.582l1.709,6.836C3.935,29.739,4.269,30,4.6,30h22.8c0.331,0,0.665-0.261,0.745-0.582l1.709-6.836C29.935,22.261,29.731,22,29.4,22zM20,26h-8v-2h8V26z",t:"",s:"none",fl:"#333"}},f:{10:{t:"t0,-20"},20:{},50:{t:""},100:{}}},{i:{a:{p:"M22,6H10v2h12V6zM22,10H10v2h12V10zM22,14H10v2h12V14zM22,18H10v2h12V18z",
t:"",s:"none",fl:"#333"}},f:{8:{t:"t0,-20"},11:{p:"M22,6H10l0,0H22L22,6zM22,10H10l0,0H22L22,10zM22,14H10l0,0H22L22,14zM22,18H10l0,0H22L22,18z"},51:{t:""},55:{p:"M22,6H10l0,0H22L22,6zM22,10H10l0,0H22L22,10zM22,14H10l0,0H22L22,14zM22,18H10l0,0H22L22,18z"},60:{p:"M22,6H10v2h12V6zM22,10H10v2h12V10zM22,14H10l0,0H22L22,14zM22,18H10l0,0H22L22,18z"},65:{p:"M22,6H10v2h12V6zM22,10H10v2h12V10zM22,14H10v2h12V14zM22,18H10l0,0H22L22,18z"},70:{p:"M22,6H10v2h12V6zM22,10H10v2h12V10zM22,14H10v2h12V14zM22,18H10v2h12V18z"},
100:{}}}]},info:{d:400,it:1,sh:[{i:{a:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM15.899,7.7C17.06,7.7,18,8.639,18,9.8c0,1.158-0.94,2.1-2.101,2.1s-2.1-0.941-2.1-2.1C13.8,8.639,14.739,7.7,15.899,7.7zM18.698,24.5h-2.5c-1,0-2-1-2-2v-6.8c0-0.5-1.6-1-1.6-1.5c0-0.4,0.6-0.7,1.099-0.7h2.501c1,0,2,0.7,2,1.7v7.3c0,0.5,1.602,0.9,1.602,1.4C19.8,24.301,19.2,24.5,18.698,24.5z",s:"none",fl:"#333"}},f:{0:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM15.899,11.89c1.16,0,2.101,0.002,2.101,0.005c0,0.002-0.94,0.005-2.101,0.005s-2.1-0.002-2.1-0.005C13.8,11.892,14.739,11.89,15.899,11.89zM18.698,24.5h-2.5c-1,0-2-0.001-2-0.002v-0.006c0-0.001-1.6-0.001-1.6-0.002c0,0,0.6,0,1.099,0h2.501c1,0,2,0,2,0.001v0.007c0,0.001,1.602,0.001,1.602,0.001C19.8,24.5,19.2,24.5,18.698,24.5z",
t:"s0.2"},30:{t:"s1"},60:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM15.899,7.7C17.06,7.7,18,8.639,18,9.8c0,1.158-0.94,2.1-2.101,2.1s-2.1-0.941-2.1-2.1C13.8,8.639,14.739,7.7,15.899,7.7zM18.698,24.5h-2.5c-1,0-2-1-2-2v-6.8c0-0.5-1.6-1-1.6-1.5c0-0.4,0.6-0.7,1.099-0.7h2.501c1,0,2,0.7,2,1.7v7.3c0,0.5,1.602,0.9,1.602,1.4C19.8,24.301,19.2,24.5,18.698,24.5z",e:"bounce"},100:{}}}]},ios:{d:0,it:1,sh:[{i:{a:{p:"M5,9.511C5,10.346,4.412,11,3.479,11C2.586,11,2,10.346,2,9.511C2,8.654,2.609,8,3.5,8C4.412,8,4.978,8.654,5,9.511zM2,22h3V12H2V22zM19.698,14.86c0,4.546-2.748,7.14-6.479,7.14C9.407,22,7,19.085,7,15.101C7,10.937,9.607,8,13.418,8C17.371,8,19.698,10.997,19.698,14.86zM17.088,14.961c0-2.556-1.264-4.969-3.73-4.969c-2.448,0-3.752,2.273-3.752,5.069c0,2.756,1.385,4.951,3.752,4.951C15.746,20.012,17.09,17.798,17.088,14.961zM26.526,13.901c-1.805-0.704-2.59-1.188-2.59-2.236c0-0.785,0.684-1.631,2.252-1.631c1.267,0,2.203,0.383,2.69,0.645l0.604-1.993C28.766,8.322,27.696,8,26.215,8c-2.933,0-4.781,1.692-4.781,3.908c0,1.954,1.423,3.141,3.654,3.948c1.729,0.625,2.408,1.228,2.408,2.256c0,1.108-0.888,1.851-2.479,1.851c-1.267,0-2.472-0.4-3.271-0.864l-0.54,2.055C21.949,21.597,23.435,22,24.858,22C28.354,22,30,20.116,30,17.932C30.024,15.976,28.879,14.788,26.526,13.901z",
s:"none",fl:"#333"}},f:{}}]},italic:{d:800,it:1,sh:[{i:{a:{p:"M18.092,27.049L17.918,28H8.096l0.264-0.951h0.554c0.984,0,1.776-0.288,2.375-0.864c0.382-0.376,0.864-1.181,1.248-2.614l4.426-14.94c0.322-1.21,0.351-2.009,0.303-2.397c-0.039-0.294-0.104-0.546-0.409-0.758c-0.44-0.282-0.942-0.423-1.504-0.423h-0.744L14.783,4h9.223l-0.174,1.053h-0.223c-0.976,0-1.658,0.191-2.261,0.767c-0.395,0.376-0.93,1.377-1.313,2.811l-4.425,14.94c-0.323,1.21-0.461,1.909-0.412,2.297c0.04,0.294,0.219,0.547,0.54,0.758c0.431,0.282,1.753,0.417,1.965,0.424H18.092z",
s:"none",fl:"#333"}},f:{15:{p:"M21.111,27.148V28H10.889v-0.852h0.844c0.984,0,1.699-0.288,2.145-0.864c0.281-0.376,0.422-1.28,0.422-2.714V8.43c0-1.21-0.076-2.009-0.229-2.397c-0.117-0.294-0.357-0.546-0.721-0.758c-0.516-0.282-1.055-0.423-1.617-0.423h-0.844V4h10.223v0.853H20.25c-0.976,0-1.688,0.288-2.136,0.863c-0.294,0.376-0.44,1.281-0.44,2.714v15.14c0,1.21,0.076,2.009,0.229,2.396c0.118,0.294,0.365,0.547,0.742,0.758c0.506,0.282,1.042,0.424,1.605,0.424H21.111z"},55:{},70:{p:"M18.092,27.049L17.918,28H8.096l0.264-0.951h0.554c0.984,0,1.776-0.288,2.375-0.864c0.382-0.376,0.864-1.181,1.248-2.614l4.426-14.94c0.322-1.21,0.351-2.009,0.303-2.397c-0.039-0.294-0.104-0.546-0.409-0.758c-0.44-0.282-0.942-0.423-1.504-0.423h-0.744L14.783,4h9.223l-0.174,1.053h-0.223c-0.976,0-1.658,0.191-2.261,0.767c-0.395,0.376-0.93,1.377-1.313,2.811l-4.425,14.94c-0.323,1.21-0.461,1.909-0.412,2.297c0.04,0.294,0.219,0.547,0.54,0.758c0.431,0.282,1.753,0.417,1.965,0.424H18.092z"},
100:{}}}]},jquery:{d:0,it:1,sh:[{i:{a:{p:"M19.674,2c-1.313,5.281,5.46,11.106,10.67,7.563C27.418,17.132,13.416,8.895,19.674,2zM13.461,3.485c-2.842,9.54,8.857,17.687,16.613,12.156c-0.979,2.132-3.301,4.486-6.349,4.863C14.612,21.629,6.667,10.312,13.461,3.485zM5.569,5.917C1.172,19.336,18.148,31.908,29.61,23.069c-1.419,3.355-5.596,6.55-9.995,6.889C11.21,30.605,2.752,23.612,2.057,15.641C1.645,10.912,3.545,8.761,5.569,5.917z",s:"none",fl:"#78CFF5"}},f:{}}]},key:{d:1E3,it:1,sh:[{i:{a:{p:"M18.16,6.956c-1.734,1.734-1.735,4.148,0.019,5.902c1.063,1.062,2.516,1.667,3.984,1.89l0.033,10.761c0.002,0.289,0.122,0.57,0.324,0.772c0.451,0.451,1.477,0.453,1.925,0.005c0.199-0.199,0.319-0.479,0.319-0.767l-0.012-2.239l1.539,0.005c0.001,0.337-0.12,0.8,0.088,1.008c0.187,0.187,1.663,0.19,1.847,0.007c0.232-0.232,0.203-3.394,0.092-3.529c-0.162-0.205-1.658-0.19-1.844-0.005c-0.208,0.207-0.189,0.642-0.187,0.979l-1.54-0.004l-0.02-6.986c1.469-0.213,2.918-0.81,3.973-1.864c1.742-1.743,1.728-4.157-0.019-5.903C26.044,4.35,20.782,4.334,18.16,6.956zM27.029,11.475c-0.848,0.848-6.334,0.83-7.187-0.022c-0.854-0.853-0.857-2.232-0.01-3.079c0.848-0.848,6.334-0.831,7.186,0.021C27.872,9.248,27.876,10.628,27.029,11.475z",
o:0,s:"none",fl:"#333"}},f:{0:{t:"r45,23,9"},10:{o:1},20:{t:""},60:{},70:{o:0},100:{}}},{i:{a:{p:"M24.472,5.294c-2.197-2.197-5.787-2.17-8.018,0.06c-0.253,0.253-0.478,0.523-0.674,0.808L6.028,6.235L3.604,8.659c-0.445,0.445-0.451,1.165-0.012,1.604l0.795,0.795l0.808-0.808l1.665,0.88l1.542-0.905l1.591,1.591l1.615-1.615l1.707,1.476l1.965,0.101c0.267,0.578,0.638,1.118,1.114,1.594c2.195,2.195,5.785,2.168,8.016-0.063S26.666,7.489,24.472,5.294zM7.081,8.124l0.01-1.134l7.221-0.073L14.304,8.05L7.081,8.124zM21.62,10.524c-0.658-0.658-0.648-1.735,0.02-2.403c0.67-0.67,1.746-0.678,2.404-0.021c0.659,0.66,0.652,1.737-0.018,2.407C23.357,11.176,22.28,11.184,21.62,10.524z",
o:0,s:"none",fl:"#333"}},f:{0:{t:"r-45,23,9"},10:{o:1},20:{t:""},60:{},70:{o:0},100:{}}},{i:{a:{p:"M29.381,10.583l-7.988-7.988c-0.678-0.677-1.885-0.797-2.682-0.265l-7.553,5.035c-0.797,0.531-1.099,1.667-0.67,2.524c0,0,2.053,4.094,2.127,4.225l-9.741,9.741L2,29.976L7,30v-2h3v-3h4v-4h3l0.738-1.713c0.174,0.104,4.349,2.2,4.349,2.2c0.856,0.429,1.992,0.127,2.523-0.67l5.036-7.553C30.178,12.467,30.058,11.26,29.381,10.583zM6.115,25.348l-1.236-1.236l8.513-8.513l1.236,1.236L6.115,25.348zM27.056,13.575l-1.237,1.237c-0.34,0.34-0.896,0.34-1.236,0l-7.418-7.419c-0.341-0.34-0.341-0.896,0-1.236L18.4,4.92c0.34-0.34,0.896-0.34,1.236,0l7.419,7.418C27.396,12.679,27.396,13.235,27.056,13.575z",
s:"none",fl:"#333"}},f:{10:{p:"M27.606,9.518L22.34,4.383c-0.447-0.435-1.244-0.512-1.77-0.169l-4.976,3.237c-0.528,0.342-0.726,1.072-0.442,1.622c0,0,1.353,2.632,1.401,2.716l-6.421,6.264l-0.577,3.934l3.296,0.015v-1.285h1.978v-1.929h2.635v-2.572h1.979l0.487-1.101c0.114,0.067,2.868,1.415,2.868,1.415c0.564,0.277,1.313,0.082,1.663-0.432l3.32-4.854C28.131,10.73,28.052,9.955,27.606,9.518zM12.269,19.012l-0.816-0.795l5.612-5.473l0.814,0.794L12.269,19.012zM26.073,11.443l-0.815,0.796c-0.225,0.218-0.592,0.218-0.814,0l-4.895-4.77c-0.223-0.219-0.223-0.577,0-0.795l0.818-0.795c0.223-0.218,0.589-0.218,0.814,0l4.892,4.771C26.297,10.867,26.297,11.225,26.073,11.443z"},
60:{},80:{p:"M29.381,10.583l-7.988-7.988c-0.678-0.677-1.885-0.797-2.682-0.265l-7.553,5.035c-0.797,0.531-1.099,1.667-0.67,2.524c0,0,2.053,4.094,2.127,4.225l-9.741,9.741L2,29.976L7,30v-2h3v-3h4v-4h3l0.738-1.713c0.174,0.104,4.349,2.2,4.349,2.2c0.856,0.429,1.992,0.127,2.523-0.67l5.036-7.553C30.178,12.467,30.058,11.26,29.381,10.583zM6.115,25.348l-1.236-1.236l8.513-8.513l1.236,1.236L6.115,25.348zM27.056,13.575l-1.237,1.237c-0.34,0.34-0.896,0.34-1.236,0l-7.418-7.419c-0.341-0.34-0.341-0.896,0-1.236L18.4,4.92c0.34-0.34,0.896-0.34,1.236,0l7.419,7.418C27.396,12.679,27.396,13.235,27.056,13.575z"},
100:{}}}]},lab:{d:500,it:3,sh:[{i:{a:{p:"M14.1,8.3c0.413,0,0.75-0.336,0.75-0.75S14.513,6.8,14.1,6.8c-0.415,0-0.75,0.336-0.75,0.75S13.686,8.3,14.1,8.3z",o:1,t:"s1",s:"none",fl:"#333"}},f:{0:{o:0},10:{o:0.6},60:{o:0,t:"s3"},90:{o:0,t:"s1"},100:{o:1}}},{i:{a:{p:"M16.8,8.351c0,0.691,0.559,1.25,1.25,1.25s1.25-0.558,1.25-1.25c0-0.691-0.559-1.25-1.25-1.25S16.8,7.66,16.8,8.351z",o:1,t:"s1",s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,0"},30:{o:0.6,t:""},80:{o:0,t:"s3"},90:{o:0,t:"s1"},100:{o:1}}},{i:{a:{p:"M16.085,5.5c0.967,0,1.749-0.784,1.749-1.75c0-0.967-0.782-1.75-1.749-1.75c-0.967,0-1.751,0.784-1.751,1.75C14.334,4.716,15.118,5.5,16.085,5.5z",
o:1,t:"s1",s:"none",fl:"#333"}},f:{0:{o:0,t:"t0,0"},40:{o:0.7,t:""},70:{o:0,t:"s2.4"},90:{o:0,t:"s1"},100:{o:1}}},{i:{a:{p:"M22.704,25.563C22.704,25.563,19,17,19,16s0.354-1.447,0.732-1.721C20.097,14.015,21,14,21,13s-1.074-1-2-1h-6c-0.926,0-2,0-2,1s0.914,0.997,1.264,1.279C12.629,14.572,13,15.165,13,16c0,1-3.704,9.563-3.704,9.563C7.507,29,9.507,30,12,29.999h8C22.491,30,24.491,29,22.704,25.563z",t:"s1",s:"none",fl:"#333"}},f:{}}]},laptop:{d:1400,it:1,sh:[{i:{a:{p:"M10,12H8v-2h2V12zM10,14H8v2h2V14zM10,18H8v2h2V18zM5.5,22.5H5V23h0.5V22.5z",
o:0,s:"none",fl:"#333"}},f:{0:{o:1},10:{},15:{p:"M9.5,11.5h-1v-1h1V11.5zM10,14H8v2h2V14zM10,18H8v2h2V18zM5.5,22.5H5V23h0.5V22.5z"},20:{p:"M10,12H8v-2h2V12zM10,14H8v2h2V14zM10,18H8v2h2V18zM5.5,22.5H5V23h0.5V22.5z"},30:{},31:{p:"M9,15L9,15L9,15L9,15L9,15zM9,15L9,15L9,15L9,15L9,15zM9,15L9,15L9,15L9,15L9,15zM5.5,22.5H5V23h0.5V22.5z"},45:{o:0.7,p:"M9,15L9,15L9,15L9,15L9,15zM9,15L9,15L9,15L9,15L9,15zM9,15L9,15L9,15L9,15L9,15zM27,7H5v16h22V7z"},80:{},82:{o:0},85:{p:"M10,12H8v-2h2V12zM10,14H8v2h2V14zM10,18H8v2h2V18zM5.5,22.5H5V23h0.5V22.5z"},
100:{}}},{i:{a:{p:"M28,22V8c0-1.104-0.896-2-2-2H6C4.896,6,4,6.896,4,8v14H2v2c0,1.104,0.896,2,2,2h24c1.104,0,2-0.896,2-2v-2H28zM8.1,25H4.9c-0.221,0-0.4-0.224-0.4-0.5S4.679,24,4.9,24h3.2c0.221,0,0.4,0.224,0.4,0.5S8.321,25,8.1,25zM20,25h-8c-0.276,0-0.5-0.224-0.5-0.5S11.724,24,12,24h8c0.276,0,0.5,0.224,0.5,0.5S20.276,25,20,25zM26,22H6V8h20V22z",s:"none",fl:"#333"}},f:{}}]},leaf:{d:1200,it:1,sh:[{i:{a:{p:"M8.542,22.22c0,0-1.482,4.2-5.929,2.938c0,0-1.064,0.39-0.387,1.455c0,0,4.875,1.288,7.375-3.212c0,0,6.896,5.769,13.254,0.796c5.61-4.39,2.308-11.221,7.146-18.904C15.127,3.574,3.595,9.457,8.542,22.22zM23.883,16.816c0,0-5.455-1.666-6.284-1.067l-3.038,3.178c0,0,5.146,0.642,7.195,2.448c0,0-6.759-2.85-9.188-0.884l-2.125,1.95c0,0-1.089-0.221-0.809-1.057l2.572-2.273c0,0,1.813-2.877,0.705-7.962c0,0,2.172,2.272,0.722,6.927l3.675-3.588c0,0,0.305-3.454-0.75-5.975c0,0,1.813,1.9,1.636,5.259l3.174-2.971C21.66,9.541,21.3,7.2,21.3,7.2s1.133,2.631,0.746,3.213c0,0,2.156-1.89,4.642-3.104l-4.2,3.692c1.413,0.399,3.039,1.643,3.039,1.643s-3.484-1.095-3.709-0.853l-2.916,2.89C18.901,14.682,21.961,15.192,23.883,16.816z",
o:1,s:"none",fl:"#333"}},f:{2:{t:"r3,2,27"},6:{t:"r-3,2,27"},10:{t:"r3,2,27"},14:{t:"r-3,2,27"},16:{t:"r0,2,27"},60:{t:"t0,12r45,2,27",o:0},61:{t:"t0,0r0,2,27s0.02,0.02,2,27"},70:{},90:{t:"",o:1},100:{}}}]},legal:{d:800,it:1,sh:[{i:{a:{p:"M3.532,13.173l-0.837,0.837c-0.926,0.926-0.926,2.427,0,3.354l5.728,5.727c0.926,0.927,2.426,0.927,3.353,0l0.838-0.837c0.827-0.828,0.873-2.092,0.224-3.019l1.803-1.802l10.217,11.599c0.847,0.991,2.064,1.268,2.721,0.611l2.068-2.068c0.654-0.654,0.378-1.872-0.613-2.721L17.434,14.64l1.802-1.802c0.927,0.648,2.192,0.602,3.017-0.224l0.837-0.837c0.928-0.928,0.928-2.429,0.002-3.354l-5.727-5.729c-0.926-0.926-2.427-0.926-3.355,0.002l-0.837,0.837c-0.826,0.826-0.872,2.091-0.223,3.016l-6.399,6.4C5.625,12.299,4.358,12.346,3.532,13.173zM13.591,7.304l4.891,4.892l-0.698,0.698l-4.891-4.891L13.591,7.304zM8.003,12.894l4.889,4.89l-0.698,0.698l-4.89-4.889L8.003,12.894z",
t:"t0,0s1r0",s:"none",fl:"#333"}},f:{10:{t:"t0,-2s0.6r0,24,24"},30:{t:"t0,-2s0.6r45,24,24"},40:{t:"t0,-2s0.6r-45,24,24"},60:{},80:{t:""},100:{}},fIE:{10:{t:"t-1.5,-4s0.6r0,24,24"},30:{t:"t-1.5,-4s0.6r45,24,24"},40:{t:"t-1.5,-4s0.6r-45,24,24"},60:{},80:{t:""},100:{}}},{i:{a:{p:"M18,24.5c0-1.381-3.134-2.5-7.001-2.5C7.133,22,4,23.119,4,24.5l0.001,1c0,1.381,3.133,2.5,6.999,2.5s7-1.119,7-2.5V24.5zM11,26c-2.899,0-5.25-0.672-5.25-1.5S8.101,23,11,23c2.898,0,5.25,0.672,5.25,1.5S13.898,26,11,26z",o:0,s:"none",
fl:"#333"}},f:{0:{o:1},60:{},80:{o:0},100:{}}},{i:{a:{p:"M11.931,23.453l3.444-0.164l-2.481,1.129l1.403,1.482l-3.066-0.756l-2.579,1.082l0.588-1.598l-2.994-0.813l3.429-0.232L10.402,22L11.931,23.453z",t:"s1",o:0,s:"none",fl:"#333"}},f:{40:{},41:{t:"s1",o:1},80:{t:"s3",o:0},100:{}}}]},linechart:{d:600,it:1,sh:[{i:{a:{p:"M29.4,26H4.6C4.269,26,4,25.73,4,25.4V22l6-5.079L16,22l13-11V8L16,19l-6-5l-6,5V4.6C4,4.269,3.731,4,3.4,4H2.6C2.269,4,2,4.269,2,4.6v22.201C2,27.463,2.537,28,3.2,28h26.2c0.33,0,0.6-0.27,0.6-0.6V26.6C30,26.27,29.73,26,29.4,26z",
s:"none",fl:"#333"}},f:{20:{p:"M29.4,26H4.6C4.269,26,4,25.73,4,25.4V16l6,2.921L16,14l13-4V7l-13,4l-6,5l-6-3V4.6C4,4.269,3.731,4,3.4,4H2.6C2.269,4,2,4.269,2,4.6v22.201C2,27.463,2.537,28,3.2,28h26.2c0.33,0,0.6-0.27,0.6-0.6V26.6C30,26.27,29.73,26,29.4,26z"},35:{},55:{p:"M29.4,26H4.6C4.269,26,4,25.73,4,25.4v-3.713l6.344-2.089L16,13l13,6l0.1-2.8L15.4,9.8L8.9,17.4L4,19V4.6C4,4.269,3.731,4,3.4,4H2.6C2.269,4,2,4.269,2,4.6v22.201C2,27.463,2.537,28,3.2,28h26.2c0.33,0,0.6-0.27,0.6-0.6V26.6C30,26.27,29.73,26,29.4,26z"},
70:{},90:{p:"M29.4,26H4.6C4.269,26,4,25.73,4,25.4V22l6-5.079L16,22l13-11V8L16,19l-6-5l-6,5V4.6C4,4.269,3.731,4,3.4,4H2.6C2.269,4,2,4.269,2,4.6v22.201C2,27.463,2.537,28,3.2,28h26.2c0.33,0,0.6-0.27,0.6-0.6V26.6C30,26.27,29.73,26,29.4,26z"},100:{}}}]},link:{d:500,it:2,sh:[{i:{a:{p:"M17.53,10.939c-0.232-0.7,0.049-1.504,0.605-2.062l2.849-2.849c0.787-0.787,2.063-0.787,2.851,0l2.136,2.136c0.787,0.786,0.787,2.062,0,2.849l-2.848,2.849c-0.531,0.53-1.401,0.822-2.075,0.638l-2.2,2.211c1.574,1.573,4.125,1.573,5.699,0l4.272-4.274c1.574-1.573,1.574-4.125,0-5.697L25.259,3.18c-1.573-1.573-4.125-1.573-5.699,0l-4.272,4.274c-1.573,1.573-1.573,4.124,0,5.697L17.53,10.939z",
s:"none",fl:"#333"}},f:{30:{t:"t-1,1"},70:{t:"",e:"bounce"},100:{t:""}}},{i:{a:{p:"M10.939,17.53c-0.701-0.232-1.504,0.049-2.062,0.606l-2.849,2.849c-0.787,0.787-0.787,2.063,0,2.85l2.137,2.136c0.787,0.787,2.062,0.787,2.849,0l2.849-2.849c0.529-0.529,0.821-1.399,0.638-2.073l2.211-2.2c1.573,1.574,1.573,4.124,0,5.697l-4.273,4.273c-1.574,1.574-4.125,1.574-5.698,0L3.18,25.259c-1.573-1.573-1.573-4.124,0-5.698l4.273-4.272c1.574-1.574,4.125-1.574,5.698,0L10.939,17.53z",s:"none",fl:"#333"}},f:{30:{t:"t1,-1"},
70:{t:"",e:"bounce"},100:{t:""}}},{i:{a:{p:"M20.628,11.37c0.591,0.59,0.591,1.546,0,2.137l-7.121,7.122c-0.59,0.59-1.546,0.59-2.137,0c-0.59-0.59-0.59-1.546,0-2.137l7.122-7.122C19.082,10.78,20.038,10.78,20.628,11.37z",s:"none",fl:"#333"}},f:{}}]},linkedin:{d:0,it:1,sh:[{i:{a:{p:"M28.4,30h-5.42V19.161c0-1.496-1.213-2.709-2.71-2.709c-1.496,0-2.711,1.213-2.711,2.709V30h-5.417V11.033h5.417v3.365c1.119-1.536,2.828-3.365,4.743-3.365c3.366,0,6.098,3.033,6.098,6.774V30zM9.821,30H4.4V11.033h5.42V30zM7.11,8.323C5.614,8.323,4.4,7.11,4.4,5.614c0-1.496,1.213-2.709,2.709-2.709c1.497,0,2.711,1.213,2.711,2.709C9.821,7.11,8.607,8.323,7.11,8.323L7.11,8.323z",
s:"none",fl:"#1F7AA7"}},f:{}}]},"linkedin-alt":{d:0,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.343,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.343,28.657,2,27,2zM10.657,27h-4.4V11.601h4.4V27zM8.456,9.399c-1.215,0-2.199-0.984-2.199-2.2C6.257,5.984,7.241,5,8.456,5c1.216,0,2.201,0.984,2.201,2.199C10.657,8.415,9.672,9.399,8.456,9.399zM25.743,27h-4.402v-8.799c0-1.217-0.983-2.201-2.197-2.201c-1.218,0-2.203,0.984-2.203,2.201V27h-4.397V11.601h4.397v2.73c0.91-1.247,2.296-2.73,3.853-2.73c2.733,0,4.95,2.46,4.95,5.5V27z",
s:"none",fl:"#1F7AA7"}},f:{}}]},list:{d:800,it:1,sh:[{i:{a:{p:"M27.4,10H10.6C10.269,10,10,9.731,10,9.4V6.6C10,6.269,10.269,6,10.6,6h16.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H10.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H10.6c-0.332,0-0.6,0.269-0.6,0.6V21.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H10.6c-0.332,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24zM7.4,6H4.6C4.269,6,4,6.269,4,6.6v2.8C4,9.731,4.269,10,4.6,10h2.8C7.731,10,8,9.731,8,9.4V6.6C8,6.269,7.731,6,7.4,6zM7.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h2.8C7.731,16,8,15.731,8,15.4v-2.8C8,12.269,7.731,12,7.4,12zM7.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4C4,21.731,4.269,22,4.6,22h2.8C7.731,22,8,21.731,8,21.4V18.6C8,18.269,7.731,18,7.4,18zM7.4,24H4.6C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h2.8C7.731,28,8,27.731,8,27.4V24.6C8,24.269,7.731,24,7.4,24z",
s:"none",fl:"#333"}},f:{0:{p:"M4,6L4,6L4,6L4,6L4,6L4,6L4,6L4,6L4,6zM4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM4,6L4,6L4,6L4,6L4,6L4,6L4,6L4,6L4,6zM4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24z"},15:{p:"M27.4,10H10.6C10.269,10,10,9.731,10,9.4V6.6C10,6.269,10.269,6,10.6,6h16.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM7.4,6H4.6C4.269,6,4,6.269,4,6.6v2.8C4,9.731,4.269,10,4.6,10h2.8C7.731,10,8,9.731,8,9.4V6.6C8,6.269,7.731,6,7.4,6zM4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12L4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24z"},
30:{p:"M27.4,10H10.6C10.269,10,10,9.731,10,9.4V6.6C10,6.269,10.269,6,10.6,6h16.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H10.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM7.4,6H4.6C4.269,6,4,6.269,4,6.6v2.8C4,9.731,4.269,10,4.6,10h2.8C7.731,10,8,9.731,8,9.4V6.6C8,6.269,7.731,6,7.4,6zM7.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h2.8C7.731,16,8,15.731,8,15.4v-2.8C8,12.269,7.731,12,7.4,12zM4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18L4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24z"},
45:{p:"M27.4,10H10.6C10.269,10,10,9.731,10,9.4V6.6C10,6.269,10.269,6,10.6,6h16.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H10.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H10.6c-0.332,0-0.6,0.269-0.6,0.6V21.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM7.4,6H4.6C4.269,6,4,6.269,4,6.6v2.8C4,9.731,4.269,10,4.6,10h2.8C7.731,10,8,9.731,8,9.4V6.6C8,6.269,7.731,6,7.4,6zM7.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h2.8C7.731,16,8,15.731,8,15.4v-2.8C8,12.269,7.731,12,7.4,12zM7.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4C4,21.731,4.269,22,4.6,22h2.8C7.731,22,8,21.731,8,21.4V18.6C8,18.269,7.731,18,7.4,18zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24z"},
60:{p:"M27.4,10H10.6C10.269,10,10,9.731,10,9.4V6.6C10,6.269,10.269,6,10.6,6h16.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,12H10.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.332,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,12.269,27.731,12,27.4,12zM27.4,18H10.6c-0.332,0-0.6,0.269-0.6,0.6V21.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V18.6C28,18.269,27.731,18,27.4,18zM27.4,24H10.6c-0.332,0-0.6,0.269-0.6,0.6V27.4c0,0.331,0.269,0.6,0.6,0.6h16.8c0.331,0,0.6-0.269,0.6-0.6V24.6C28,24.269,27.731,24,27.4,24zM7.4,6H4.6C4.269,6,4,6.269,4,6.6v2.8C4,9.731,4.269,10,4.6,10h2.8C7.731,10,8,9.731,8,9.4V6.6C8,6.269,7.731,6,7.4,6zM7.4,12H4.6C4.269,12,4,12.269,4,12.6v2.8C4,15.731,4.269,16,4.6,16h2.8C7.731,16,8,15.731,8,15.4v-2.8C8,12.269,7.731,12,7.4,12zM7.4,18H4.6C4.269,18,4,18.269,4,18.6V21.4C4,21.731,4.269,22,4.6,22h2.8C7.731,22,8,21.731,8,21.4V18.6C8,18.269,7.731,18,7.4,18zM7.4,24H4.6C4.269,24,4,24.269,4,24.6V27.4C4,27.731,4.269,28,4.6,28h2.8C7.731,28,8,27.731,8,27.4V24.6C8,24.269,7.731,24,7.4,24z"},
100:{}}}]},"list-ol":{d:800,it:1,sh:[{i:{a:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM27.4,22H12.6c-0.332,0-0.6,0.269-0.6,0.6V25.4c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6V22.6C28,22.269,27.731,22,27.4,22zM8,10H6V5c0,0-1.172,0.703-2,0.743V3.906C5.026,3.438,5.749,2.803,6.169,2H8V10zM10,18.201L9,20H4v-0.469c0,0,3.432-3.311,3.42-4.586c-0.014-1.492-1.998-1.445-2.866-1.072v-1.681c4.243-0.817,4.828,1.479,4.831,2.341c0.005,1.56-1.292,2.716-1.879,3.667H10zM10,27.431c0.094,2.335-3.563,3.21-6,2.086l0.576-1.556c0.971,0.336,3.232,0.777,3.333-0.518c0.076-0.975-1.69-1.068-2.119-0.967V25.27c1.155,0,1.733-0.298,1.733-0.896c0-0.608-1.289-1.155-2.845-0.409v-1.646C5.269,22.106,5.909,21.99,6.6,22c2.119,0.031,2.994,1.016,2.995,2.088c0.001,0.695-0.324,1.188-0.97,1.476C9.04,25.721,9.953,26.25,10,27.431z",
s:"none",fl:"#333"}},f:{0:{p:"M4,10L4,10L4,10L4,10L4,10L4,10L4,10L4,10L4,10zM4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22zM4,10L4,10L4,10L4,10L4,10L4,10L4,10L4,10zM4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22z"},15:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22zM8,10H6V5c0,0-1.172,0.703-2,0.743V3.906C5.026,3.438,5.749,2.803,6.169,2H8V10zM4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01L4,16.01zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22z"},
20:{},35:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22zM8,10H6V5c0,0-1.172,0.703-2,0.743V3.906C5.026,3.438,5.749,2.803,6.169,2H8V10zM10,18.201L9,20H4v-0.469c0,0,3.432-3.311,3.42-4.586c-0.014-1.492-1.998-1.445-2.866-1.072v-1.681c4.243-0.817,4.828,1.479,4.831,2.341c0.005,1.56-1.292,2.716-1.879,3.667H10zM4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22L4,22z"},
40:{},55:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM27.4,22H12.6c-0.332,0-0.6,0.269-0.6,0.6V25.4c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6V22.6C28,22.269,27.731,22,27.4,22zM8,10H6V5c0,0-1.172,0.703-2,0.743V3.906C5.026,3.438,5.749,2.803,6.169,2H8V10zM10,18.201L9,20H4v-0.469c0,0,3.432-3.311,3.42-4.586c-0.014-1.492-1.998-1.445-2.866-1.072v-1.681c4.243-0.817,4.828,1.479,4.831,2.341c0.005,1.56-1.292,2.716-1.879,3.667H10zM10,27.431c0.094,2.335-3.563,3.21-6,2.086l0.576-1.556c0.971,0.336,3.232,0.777,3.333-0.518c0.076-0.975-1.69-1.068-2.119-0.967V25.27c1.155,0,1.733-0.298,1.733-0.896c0-0.608-1.289-1.155-2.845-0.409v-1.646C5.269,22.106,5.909,21.99,6.6,22c2.119,0.031,2.994,1.016,2.995,2.088c0.001,0.695-0.324,1.188-0.97,1.476C9.04,25.721,9.953,26.25,10,27.431z"},
100:{}}}]},"list-ul":{d:800,it:1,sh:[{i:{a:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM27.4,22H12.6c-0.332,0-0.6,0.269-0.6,0.6V25.4c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6V22.6C28,22.269,27.731,22,27.4,22zM7,5C5.343,5,4,6.343,4,8s1.343,3,3,3s3-1.343,3-3S8.657,5,7,5zM7,13c-1.656,0-3,1.343-3,3c0,1.656,1.344,3,3,3s3-1.344,3-3C10,14.343,8.656,13,7,13zM7,21c-1.656,0-3,1.344-3,3s1.344,3,3,3s3-1.344,3-3S8.656,21,7,21z",
s:"none",fl:"#333"}},f:{0:{p:"M4,8L4,8L4,8L4,8L4,8L4,8L4,8L4,8L4,8zM4,16L4,16L4,16L4,16L4,16L4,16L4,16L4,16L4,16zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM4,8L4,8L4,8L4,8L4,8zM4,16L4,16L4,16L4,16L4,16zM4,24L4,24L4,24L4,24L4,24z"},15:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM4,16L4,16L4,16L4,16L4,16L4,16L4,16L4,16L4,16zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM7,5C5.343,5,4,6.343,4,8s1.343,3,3,3s3-1.343,3-3S8.657,5,7,5zM4,16L4,16L4,16L4,16L4,16zM4,24L4,24L4,24L4,24L4,24z"},
20:{},35:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24L4,24zM7,5C5.343,5,4,6.343,4,8s1.343,3,3,3s3-1.343,3-3S8.657,5,7,5zM7,13c-1.656,0-3,1.343-3,3c0,1.656,1.344,3,3,3s3-1.344,3-3C10,14.343,8.656,13,7,13zM4,24L4,24L4,24L4,24L4,24z"},40:{},
55:{p:"M27.4,10H12.6C12.269,10,12,9.731,12,9.4V6.6C12,6.269,12.269,6,12.6,6h14.8C27.731,6,28,6.269,28,6.6v2.8C28,9.731,27.731,10,27.4,10zM27.4,14H12.6c-0.332,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8C28,14.269,27.731,14,27.4,14zM27.4,22H12.6c-0.332,0-0.6,0.269-0.6,0.6V25.4c0,0.331,0.269,0.6,0.6,0.6h14.8c0.331,0,0.6-0.269,0.6-0.6V22.6C28,22.269,27.731,22,27.4,22zM7,5C5.343,5,4,6.343,4,8s1.343,3,3,3s3-1.343,3-3S8.657,5,7,5zM7,13c-1.656,0-3,1.343-3,3c0,1.656,1.344,3,3,3s3-1.344,3-3C10,14.343,8.656,13,7,13zM7,21c-1.656,0-3,1.344-3,3s1.344,3,3,3s3-1.344,3-3S8.656,21,7,21z"},
100:{}}}]},location:{d:1E3,it:1,sh:[{i:{a:{p:"M16,2c-4.526,0-8.197,3.669-8.197,8.196C7.803,14.725,16,30,16,30s8.197-15.275,8.197-19.804C24.197,5.669,20.528,2,16,2zM16,14.113c-2.163,0-3.918-1.753-3.918-3.917c0-2.164,1.755-3.916,3.918-3.916c2.162,0,3.916,1.753,3.916,3.916C19.916,12.359,18.162,14.113,16,14.113z",s:"none",fl:"#333"}},f:{0:{t:"s1r0"},5:{t:"s0.5"},15:{t:"s0.5r265"},20:{},30:{t:"s0.5r95"},35:{},50:{t:"s0.5r360"},60:{t:"t0,-8s0.5"},70:{t:"t0,10s0.5,0.3"},75:{},90:{t:"",e:"elastic"},100:{t:""}}}]},
lock:{d:700,it:1,sh:[{i:{a:{p:"M24.5,15c0-4.971-3.629-9-8.6-9c-4.971,0-8.4,4.029-8.4,9v2H10v-2c0-3.59,2.31-6.5,5.9-6.5c3.59,0,6.1,2.91,6.1,6.5v8.399h2.5V15z",s:"none",fl:"#333"}},f:{0:{t:"t0,-4"},20:{t:"t0,-4"},70:{t:"",e:"backOut"},100:{t:""}}},{i:{a:{p:"M26,16H6c-1.104,0-2,0.896-2,2v10c0,1.105,0.896,2,2,2h20c1.104,0,2-0.895,2-2V18C28,16.896,27.104,16,26,16zM18,28h-3.898l1.028-4.207C14.463,23.469,14,22.791,14,22c0-1.104,0.896-2,2-2s2,0.896,2,2c0,0.754-0.423,1.403-1.039,1.744L18,28z",s:"none",fl:"#333"}},
f:{}}]},magic:{d:500,it:2,sh:[{i:{a:{p:"M27.588,18.198l-0.182-1.25l-0.883,0.905l-1.244-0.215l0.588,1.118l-0.588,1.118l1.244-0.214l0.883,0.905l0.182-1.25l1.133-0.561L27.588,18.198z",o:1,t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{o:0,t:"t-10,-1s0.2"},100:{o:1,t:"t0,0s1r360"}}},{i:{a:{p:"M25.091,4.312L24.687,2l-1.59,1.727l-2.322-0.33l1.15,2.045L20.894,7.55l2.301-0.463l1.687,1.633l0.271-2.332l2.074-1.099L25.091,4.312z",o:1,t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{o:0,t:"t-7,14s0.5"},100:{o:1,t:"t0,0s1r360"}}},
{i:{a:{p:"M12.553,10.289l1.021-1.096l1.481,0.219l-0.728-1.31l0.667-1.341l-1.47,0.287L12.455,6l-0.182,1.487L10.945,8.18l1.358,0.632L12.553,10.289z",o:1,t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{o:0,t:"t4,10s0.5"},100:{o:1,t:"t0,0s1r360"}}},{i:{a:{p:"M8.335,15.371l0.667-0.994l1.196-0.014l-0.739-0.94l0.356-1.142l-1.124,0.411L7.716,12l0.045,1.196l-0.959,0.715l1.15,0.327L8.335,15.371z",o:1,t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{o:0,t:"t8.5,4s0.5"},100:{o:1,t:"t0,0s1r360"}}},{i:{a:{p:"M4.768,7.026l1.079-0.423l0.96,0.648l-0.07-1.156L7.649,5.38L6.528,5.089L6.131,4L5.509,4.978L4.351,5.019l0.736,0.894L4.768,7.026z",
o:1,t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{o:0,t:"t11,12s0.5"},100:{o:1,t:"t0,0s1r360"}}},{i:{a:{p:"M20.672,13.925c-0.325-0.417-0.806-0.835-1.394-1.204c-0.588-0.368-1.172-0.618-1.692-0.729c-0.492-0.089-1.039-0.149-1.425,0.374L4.6,30.8h6.7l9.655-15.428C21.258,14.796,20.967,14.331,20.672,13.925zM15.657,21.936c-0.254-0.396-0.74-0.856-1.373-1.254c-0.632-0.396-1.258-0.634-1.726-0.689l4.421-7.052c0.063-0.013,0.262-0.021,0.543,0.066c0.346,0.092,0.785,0.285,1.225,0.562c0.504,0.313,0.908,0.677,1.133,0.97c0.113,0.145,0.178,0.271,0.195,0.335c0.002,0.006,0.004,0.011,0.004,0.015L15.657,21.936z",
s:"none",fl:"#333"}},f:{50:{t:"r5,0,40"},100:{t:""}}}]},"magic-alt":{d:1800,it:1,sh:[{i:{a:{p:"M13.801,29.151c0,0,1.284-0.75,0.692-1.457c-0.451-0.538-1.263,0.281-1.263,0.281c0.216-0.679-0.007-1.247-0.425-1.542c0.631-0.405,0.864-1.267,0.875-1.757c0.005-0.231-0.072-0.538-0.279-0.881c0.58-0.701,1.354-1.738,1.565-2.511c0.275-1,0.491-2.867-0.195-3.106c-0.694-0.242-1.848,1.226-2.281,2.186c-0.299,0.662-0.253,1.891-0.193,2.622c-0.116-0.024-0.237-0.038-0.365-0.036c-0.082,0.001-0.163,0.009-0.242,0.019c0.062-0.775,0.106-2.086-0.219-2.787C11.074,19.322,9.955,17.997,9.349,18c-0.063,0-0.12,0.017-0.17,0.047c-0.574,0.35-0.454,2.112-0.183,3.117c0.22,0.813,1.216,2.007,1.567,2.411c-0.271,0.316-0.451,0.531-0.5,1.062c-0.051,0.572,0.262,1.294,0.947,1.698c-0.589,0.412-0.644,0.901-0.559,1.408c0,0-0.8-0.352-1.044,0.098c-0.49,0.902,1.117,1.48,1.117,1.48s-0.395-0.033-0.729,0c-0.353,0.035-0.944,0.132-0.945,0.486c0,0.195,1.166,0.16,1.746,0.096c0.326-0.035,0.947-0.255,0.947-0.255s0.22,0.097,0.34,0.084c0.123-0.013,0.357-0.107,0.357-0.107s0.747,0.312,1.172,0.353c0.609,0.061,1.732,0.008,1.737-0.244C15.153,29.486,13.801,29.151,13.801,29.151zM11.075,25.144c-0.201,0-0.364-0.229-0.364-0.509c0-0.281,0.163-0.509,0.364-0.509s0.363,0.228,0.363,0.509C11.438,24.915,11.275,25.144,11.075,25.144zM11.882,25.062c0.129,0,0.234,0.082,0.234,0.183s-0.105,0.183-0.234,0.183s-0.233-0.082-0.233-0.183S11.753,25.062,11.882,25.062zM11.861,26.028c-0.158,0-0.29-0.104-0.337-0.244h0.674C12.15,25.925,12.018,26.028,11.861,26.028zM12.553,25.127c-0.199-0.046-0.285-0.31-0.191-0.586c0.081-0.243,0.289-0.471,0.528-0.418c0.199,0.044,0.285,0.308,0.192,0.585S12.752,25.173,12.553,25.127zM11.255,24.628c0,0.125-0.086,0.228-0.191,0.228s-0.191-0.103-0.191-0.228s0.086-0.227,0.191-0.227S11.255,24.503,11.255,24.628zM12.872,24.665c-0.033,0.122-0.132,0.206-0.22,0.188c-0.087-0.018-0.132-0.13-0.098-0.253c0.034-0.121,0.131-0.205,0.219-0.188C12.861,24.431,12.906,24.542,12.872,24.665z",
o:0,s:"none",fl:"#333"}},f:{20:{},30:{o:1},50:{},52:{o:0},100:{}}},{i:{a:{p:"M16.262,11.302l0.387,3.134l-2.789-1.657l-2.852,1.5l0.513-3.182l-2.14-2.143l3.136-0.387l1.421-3.003l1.274,2.864l3.182,0.511L16.262,11.302z",t:"",o:0,s:"none",fl:"#333"}},f:{15:{},16:{o:0.7},30:{o:0,t:"s4"},50:{},52:{o:0},60:{t:""},100:{}}},{i:{a:{p:"M16.945,4l-4.943,2.599L7.057,4L8,9.506l-4,3.898l5.529,0.803L12,19.215l1.924-3.896l8.822,13.623c0.18,0.279,0.543,0.346,0.813,0.152l2.264-1.646c0.27-0.193,0.316-0.561,0.107-0.816l-10.23-12.602l4.299-0.626L16,9.505L16.945,4zM13.344,12.654l-1.365,2.769l-1.367-2.769L7.555,12.21l2.211-2.154L9.244,7.012l2.734,1.437l2.732-1.437l-0.521,3.043l2.211,2.156L13.344,12.654z",
t:"t0,0r0",s:"none",fl:"#333"}},f:{5:{t:"t10,-12r10,24,28"},15:{t:"t10,-12r-45,24,28"},17:{t:"t10,-12r-40,24,28"},55:{},60:{t:""},100:{}}}]},magnet:{d:1E3,it:1,sh:[{i:{a:{p:"M18.454,23.224l-9.62-2.055c-1.002-0.214-1.994,0.467-2.208,1.466c-0.214,1.007,0.37,2.231,1.372,2.446l9.62,2.055c0.289,2.106,1.613,2.913,3.505,3.308c1.792,0.377,3.569-0.358,4.644-1.7l-3.627-0.802l-0.751-2.32l1.634-1.823l3.639,0.786c-0.432-1.67-1.773-3.005-3.577-3.383C21.188,20.807,19.57,21.418,18.454,23.224z",t:"t0,12",s:"none",
fl:"#333"}},f:{12:{},20:{t:""},50:{},60:{t:"t0,12"},100:{}}},{i:{a:{p:"M22,22h6v-7.066C28,9.844,24.338,2.5,16,2.5C7.538,2.5,4,9.844,4,14.935V22h6v-7.065c0-0.736,0.49-6.393,6-6.435c5.689,0.167,6,5.699,6,6.435V22zM28,30c0,0,0-3,0-6h-6c0,3,0,6,0,6H28zM4,30h6c0,0,0-3,0-6H4C4,27,4,30,4,30z",s:"none",fl:"#333"}},f:{10:{t:"s0.66,0.66,16,2.5"},60:{},70:{t:""},100:{}}}]},mail:{d:2E3,it:1,sh:[{i:{a:{p:"M28,12v17H4V12H28z",t:"t0,-33",s:"none",fl:"#333"},o:0},f:{15:{t:"t0,-33",o:0.7},30:{t:"",e:">"},50:{o:0.7},
51:{o:0},99:{t:""},100:{t:"r180t0,100"}}},{i:{a:{p:"M3.2,26C2.537,26,2,25.463,2,24.801V9.5l5.6,4.6L4,24l5.1-8.6l5.013,3.625c1.042,0.818,2.731,0.818,3.773,0L22.9,15.4L28,24l-3.6-9.9L30,9.5v15.301C30,25.463,29.463,26,28.801,26H3.2zM28.801,6H3.2C2.537,6,2,6.537,2,7.2v0.758l12.113,9.52c1.042,0.816,2.73,0.816,3.773,0L30,7.958V7.2C30,6.537,29.463,6,28.801,6z",o:1,s:"none",fl:"#333"}},f:{15:{p:"M3.2,30C2.537,30,2,29.463,2,28.801V13.5l5.6,4.6L4,28l5.1-8.6l5.013,3.624c1.042,0.818,2.731,0.818,3.773,0L22.9,19.4L28,28l-3.6-9.9l5.6-4.6v15.301C30,29.463,29.463,30,28.801,30H3.2zM30,11H2l0,0l0,0l12.113-7.612C15.2,2.8,16.8,2.8,17.887,3.388L30,11L30,11L30,11z"},
35:{},50:{p:"M3.2,26C2.537,26,2,25.463,2,24.801V9.5l5.6,4.6L4,24l5.1-8.6l5.013,3.625c1.042,0.818,2.731,0.818,3.773,0L22.9,15.4L28,24l-3.6-9.9L30,9.5v15.301C30,25.463,29.463,26,28.801,26H3.2zM28.801,6H3.2C2.537,6,2,6.537,2,7.2v0.758l12.113,9.52c1.042,0.816,2.73,0.816,3.773,0L30,7.958V7.2C30,6.537,29.463,6,28.801,6z",t:"t0,3r0"},65:{t:"t0,3r-300s0.6"},70:{t:"r-100t40,40"},71:{o:0},72:{t:""},89:{o:0},90:{t:"s0.3"},100:{o:1,t:"",e:"elastic"}}}]},"mail-alt":{d:1200,it:1,sh:[{i:{a:{p:"M3.2,24C2.537,24,2,23.463,2,22.801V11.5l12.113,9.524c1.042,0.818,2.731,0.818,3.773,0L30,11.5v11.301C30,23.463,29.463,24,28.801,24H3.2zM28.801,8H3.2C2.537,8,2,8.537,2,9.2v0.758l12.113,9.519c1.042,0.816,2.73,0.816,3.773,0L30,9.958V9.2C30,8.537,29.463,8,28.801,8zM19.501,11h-6.223c0.137,0.306,0.217,0.644,0.22,1h4.003C17.776,12,18,12.224,18,12.5S17.776,13,17.501,13H13.3c-0.381,0.894-1.267,1.521-2.3,1.521c-1.381,0-2.5-1.12-2.5-2.5s1.119-2.5,2.5-2.5c0.547,0,1.049,0.181,1.461,0.479h7.04C19.776,10,20,10.224,20,10.5S19.776,11,19.501,11z",
o:1,s:"none",fl:"#333"}},f:{0:{o:1,t:""},15:{t:"t-6,4s0.6"},25:{t:"t-6,4r-15s0.6"},50:{t:"t24,-6r180s0.8"},51:{o:0},52:{o:0,t:""},60:{o:0,t:""},90:{o:0,t:"s0.4"},100:{o:1,t:"",e:"elastic"}}}]},map:{d:1500,it:1,sh:[{i:{a:{p:"M22,2v20l8,8V10L22,2zM22.771,16L22.771,16L22.771,16L22.771,16L22.771,16zM27.6,14H26l0,0H27.6L27.6,14zM12,10v20l8-8V2L12,10zM12.969,18L12.969,18L12.969,18L12.969,18L12.969,18zM16,19L16,19L16,19L16,19L16,19zM2,2v20l8,8V10L2,2zM2.8,16.473L2.8,16.473L2.8,16.473L2.8,16.473L2.8,16.473zM5.814,16L5.814,16L5.814,16L5.814,16L5.814,16z",
s:"none",fl:"#333"}},f:{5:{p:"M22,6v20h8V6H22zM22.771,20L22.771,20L22.771,20L22.771,20L22.771,20zM27.6,14H26l0,0H27.6L27.6,14zM12,6v20h8V6H12zM12.969,14L12.969,14L12.969,14L12.969,14L12.969,14zM16,19L16,19L16,19L16,19L16,19zM2,6v20h8V6H2zM2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473zM5.814,16L5.814,16L5.814,16L5.814,16L5.814,16z"},8:{p:"M21,6v20h10V6H21zM21.963,20L21.963,20L21.963,20L21.963,20L21.963,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM12.211,14L12.211,14L12.211,14L12.211,14L12.211,14zM16,19L16,19L16,19L16,19L16,19zM1,6v20h10V6H1zM2,20.473L2,20.473L2,20.473L2,20.473L2,20.473zM5.768,16L5.768,16L5.768,16L5.768,16L5.768,16z"},
10:{p:"M21,6v20h10V6H21zM21.963,20L21.963,20L21.963,20L21.963,20L21.963,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM12.211,14L12.211,14L12.211,14L12.211,14L12.211,14zM16,19L16,19L16,19L16,19L16,19zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM5.768,16L5.768,16L5.768,16L5.768,16L5.768,16z"},15:{p:"M21,6v20h10V6H21zM21.963,20L21.963,20L21.963,20L21.963,20L21.963,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM12.211,14L12.211,14L12.211,14L12.211,14L12.211,14zM16,19L16,19L16,19L16,19L16,19zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM6.76,16l-0.992-1.736l3.473-1.985l0.992,1.737L6.76,16z"},
20:{p:"M21,6v20h10V6H21zM21.963,20L21.963,20L21.963,20L21.963,20L21.963,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM14,18.473l-1.789-3.578L14,14l1.789,3.578L14,18.473zM16,19L16,19L16,19L16,19L16,19zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM6.76,16l-0.992-1.736l3.473-1.985l0.992,1.737L6.76,16z"},25:{p:"M21,6v20h10V6H21zM21.963,20L21.963,20L21.963,20L21.963,20L21.963,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM14,18.473l-1.789-3.578L14,14l1.789,3.578L14,18.473zM20,20h-4v-2h4V20zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM6.76,16l-0.992-1.736l3.473-1.985l0.992,1.737L6.76,16z"},
30:{p:"M21,6v20h10V6H21zM23.516,20l-1.553-1.262l2.521-3.104l1.553,1.261L23.516,20zM28,14h-2l0,0H28L28,14zM11,6v20h10V6H11zM14,18.473l-1.789-3.578L14,14l1.789,3.578L14,18.473zM20,20h-4v-2h4V20zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM6.76,16l-0.992-1.736l3.473-1.985l0.992,1.737L6.76,16z"},35:{p:"M21,6v20h10V6H21zM23.516,20l-1.553-1.262l2.521-3.104l1.553,1.261L23.516,20zM28,14h-2v-4h2V14zM11,6v20h10V6H11zM14,18.473l-1.789-3.578L14,14l1.789,3.578L14,18.473zM20,20h-4v-2h4V20zM1,6v20h10V6H1zM3.789,20.473L2,19.578L3.789,16l1.789,0.894L3.789,20.473zM6.76,16l-0.992-1.736l3.473-1.985l0.992,1.737L6.76,16z"},
50:{},55:{p:"M22,6v20h8V6H22zM22.771,20L22.771,20L22.771,20L22.771,20L22.771,20zM27.6,14H26l0,0H27.6L27.6,14zM12,6v20h8V6H12zM12.969,14L12.969,14L12.969,14L12.969,14L12.969,14zM16,19L16,19L16,19L16,19L16,19zM2,6v20h8V6H2zM2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473zM5.814,16L5.814,16L5.814,16L5.814,16L5.814,16z"},60:{p:"M22,6v20h8V6H22zM22.771,20L22.771,20L22.771,20L22.771,20L22.771,20zM27.6,14H26l0,0H27.6L27.6,14zM12,6v20h8V6H12zM12.969,14L12.969,14L12.969,14L12.969,14L12.969,14zM16,19L16,19L16,19L16,19L16,19zM2,6v20h8V6H2zM2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473L2.8,20.473zM5.814,16L5.814,16L5.814,16L5.814,16L5.814,16z"},
65:{p:"M22,2v20l8,8V10L22,2zM22.771,16L22.771,16L22.771,16L22.771,16L22.771,16zM27.6,14H26l0,0H27.6L27.6,14zM12,10v20l8-8V2L12,10zM12.969,18L12.969,18L12.969,18L12.969,18L12.969,18zM16,19L16,19L16,19L16,19L16,19zM2,2v20l8,8V10L2,2zM2.8,16.473L2.8,16.473L2.8,16.473L2.8,16.473L2.8,16.473zM5.814,16L5.814,16L5.814,16L5.814,16L5.814,16z"},100:{}}}]},minus:{d:800,it:1,sh:[{i:{a:{p:"M8,14.6v2.8C8,17.731,8.269,18,8.6,18h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8c0-0.332-0.269-0.6-0.6-0.6H8.6C8.269,14,8,14.269,8,14.6z",
o:1,s:"none",fl:"#333"}},f:{10:{p:"M8,14.15v0.7C8,14.933,8.269,15,8.6,15h14.8c0.331,0,0.6-0.067,0.6-0.15v-0.7c0-0.083-0.269-0.15-0.6-0.15H8.6C8.269,14,8,14.067,8,14.15z"},20:{},30:{p:"M8,14.15v0.7C8,14.933,8.017,15,8.038,15h0.925C8.983,15,9,14.933,9,14.85v-0.7C9,14.067,8.983,14,8.962,14H8.038C8.017,14,8,14.067,8,14.15z"},40:{o:0},50:{p:"M8,14.6v2.8C8,17.731,8.269,18,8.6,18h14.8c0.331,0,0.6-0.269,0.6-0.6v-2.8c0-0.332-0.269-0.6-0.6-0.6H8.6C8.269,14,8,14.269,8,14.6z"},60:{o:1},100:{}}}]},"minus-alt":{d:400,
it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24,17.4c0,0.331-0.269,0.6-0.6,0.6H8.6C8.269,18,8,17.731,8,17.4v-2.8C8,14.269,8.269,14,8.6,14h14.8c0.331,0,0.6,0.269,0.6,0.6V17.4z",s:"none",fl:"#333"}},f:{0:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16.1,16.018c0,0.004-0.003,0.007-0.008,0.007h-0.185c-0.004,0-0.008-0.003-0.008-0.007v-0.035c0-0.004,0.003-0.007,0.008-0.007h0.185c0.004,0,0.008,0.003,0.008,0.007V16.018z",t:"s0.2"},
30:{t:"s1"},35:{},60:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24,17.4c0,0.331-0.269,0.6-0.6,0.6H8.6C8.269,18,8,17.731,8,17.4v-2.8C8,14.269,8.269,14,8.6,14h14.8c0.331,0,0.6,0.269,0.6,0.6V17.4z",e:"bounce"},100:{}}}]},money:{d:300,it:3,sh:[{i:{a:{p:"M2,10v16h28V10H2zM29,25H3V11h26V25zM4,12v12h24V12H4zM27,22h-1v1H6v-1H5v-8h1v-1h20v1h1V22zM24,19h-2v-2h2V19zM10,19H8v-2h2V19zM19,18c0,2.209-1.343,4-3,4c-1.657,0-3-1.791-3-4s1.343-4,3-4C17.657,14,19,15.791,19,18z",o:0,t:"t4,28",
s:"none",fl:"#333"}},f:{0:{t:"t4,-28"},90:{t:"",o:1},100:{o:0}}},{i:{a:{p:"M29,9H3V8h26V9zM28,7H4V6h24V7zM2,10v16h28V10H2zM29,25H3V11h26V25zM4,12v12h24V12H4zM27,22h-1v1H6v-1H5v-8h1v-1h20v1h1V22zM9.7,19H8.3C8.134,19,8,18.866,8,18.7v-1.4C8,17.134,8.134,17,8.3,17H9.7c0.166,0,0.3,0.134,0.3,0.3v1.4C10,18.866,9.866,19,9.7,19zM23.7,19h-1.4c-0.166,0-0.3-0.134-0.3-0.3v-1.4c0-0.166,0.134-0.3,0.3-0.3h1.4c0.166,0,0.3,0.134,0.3,0.3v1.4C24,18.866,23.866,19,23.7,19zM16.941,19.078c0,0.201-0.047,0.524-0.695,0.587V18.52C16.709,18.683,16.941,18.87,16.941,19.078zM15.101,16.923c0,0.237,0.213,0.405,0.641,0.505v-1.064C15.198,16.411,15.101,16.742,15.101,16.923zM19,18c0,2.209-1.343,4-3,4s-3-1.791-3-4s1.343-4,3-4S19,15.791,19,18zM17.929,18.955c0.013-0.245-0.236-0.85-0.56-1.036c-0.258-0.147-0.775-0.312-1.077-0.368v-1.16c0.302,0.02,0.403,0.218,0.49,0.368c0.082,0.191,0.229,0.287,0.437,0.287h0.546c-0.018-0.464-0.271-1.335-1.473-1.46l0.003-0.573c0,0-0.357-0.013-0.494-0.013h-0.014v0.586c-1.289,0.025-1.54,0.928-1.555,1.392c-0.032,0.93,0.366,1.128,1.51,1.429v1.196c-0.156-0.027-0.599-0.1-0.651-0.688h-0.928c0.036,0.512,0.48,1.587,1.579,1.587V21h0.499v-0.499C17.493,20.501,17.893,19.603,17.929,18.955z",
s:"none",fl:"#333"}},f:{}}]},more:{d:800,it:1,sh:[{i:{a:{p:"M19.996,16.005c0,0.125-0.006,0.249-0.018,0.371c-0.188,2.035-1.904,3.627-3.987,3.627c-0.134,0-0.266-0.006-0.396-0.02c-2.022-0.197-3.604-1.902-3.604-3.979c0-2.084,1.595-3.797,3.63-3.983c0.122-0.011,0.245-0.017,0.37-0.017c2.081,0,3.796,1.59,3.987,3.623C19.99,15.752,19.996,15.878,19.996,16.005zM29.982,15.628c-0.191-2.033-1.906-3.623-3.986-3.623c-0.125,0-0.25,0.006-0.371,0.017c-2.035,0.187-3.629,1.899-3.629,3.983c0,2.076,1.58,3.781,3.602,3.979c0.133,0.014,0.264,0.02,0.398,0.02c2.082,0,3.799-1.592,3.986-3.627C29.994,16.254,30,16.13,30,16.005C30,15.878,29.994,15.752,29.982,15.628zM9.988,15.628C9.797,13.595,8.081,12.005,6,12.005c-0.125,0-0.248,0.006-0.37,0.017C3.595,12.208,2,13.921,2,16.005c0,2.076,1.581,3.781,3.604,3.979c0.131,0.014,0.263,0.02,0.396,0.02c2.083,0,3.801-1.592,3.988-3.627c0.012-0.122,0.016-0.246,0.016-0.371C10.004,15.878,10,15.752,9.988,15.628z",
t:"",s:"none",fl:"#333"}},f:{10:{p:"M18,16.003c0,0.125,0,0.125-0.188,0.445l-5.369,5.414c-0.287,0.141-0.443,0.16-0.442-0.186L12,16.005l0.001-5.676C12,9.986,12.156,9.986,12.443,10.145l5.369,5.413C18,15.876,18,15.876,18,16.003zM27.816,15.558l-5.371-5.413c-0.139-0.103-0.402-0.142-0.441,0.185L22,16.005l0.004,5.672c0.006,0.326,0.246,0.326,0.441,0.186l5.371-5.414C28,16.128,28,16.128,28,16.003C28,15.876,28,15.876,27.816,15.558zM7.906,15.659l-5.46-5.515C2.25,9.986,2,10.003,2.004,10.329L2,16.005l0.004,5.672c0.032,0.326,0.16,0.326,0.442,0.186l5.429-5.484C8,16.128,8,16.128,8,16.003C8,15.876,8,16.003,7.906,15.659z"},
30:{t:"t2,0"},35:{t:""},55:{t:"t2,0"},60:{t:""},70:{},80:{p:"M19.996,16.005c0,0.125-0.006,0.249-0.018,0.371c-0.188,2.035-1.904,3.627-3.987,3.627c-0.134,0-0.266-0.006-0.396-0.02c-2.022-0.197-3.604-1.902-3.604-3.979c0-2.084,1.595-3.797,3.63-3.983c0.122-0.011,0.245-0.017,0.37-0.017c2.081,0,3.796,1.59,3.987,3.623C19.99,15.752,19.996,15.878,19.996,16.005zM29.982,15.628c-0.191-2.033-1.906-3.623-3.986-3.623c-0.125,0-0.25,0.006-0.371,0.017c-2.035,0.187-3.629,1.899-3.629,3.983c0,2.076,1.58,3.781,3.602,3.979c0.133,0.014,0.264,0.02,0.398,0.02c2.082,0,3.799-1.592,3.986-3.627C29.994,16.254,30,16.13,30,16.005C30,15.878,29.994,15.752,29.982,15.628zM9.988,15.628C9.797,13.595,8.081,12.005,6,12.005c-0.125,0-0.248,0.006-0.37,0.017C3.595,12.208,2,13.921,2,16.005c0,2.076,1.581,3.781,3.604,3.979c0.131,0.014,0.263,0.02,0.396,0.02c2.083,0,3.801-1.592,3.988-3.627c0.012-0.122,0.016-0.246,0.016-0.371C10.004,15.878,10,15.752,9.988,15.628z"},
100:{}}}]},"morph-c-s":{it:1,sh:[{i:{a:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z",
s:"none",fl:"#333"}},f:{100:{p:"M30,13.109v5.547V28.8c0,0.641-0.513,1.2-1.2,1.2h-9.878h-5.578H3.2C2.484,30,2,29.453,2,28.8v-9.831v-5.625V3.2C2,2.5,2.547,2,3.2,2h9.94h5.547H28.8c0.685,0,1.203,0.531,1.2,1.2V13.109z"}}}]},"morph-c-o":{it:1,sh:[{i:{a:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z",
s:"none",fl:"#333"}},f:{100:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z"}}}]},"morph-s-c":{it:1,sh:[{i:{a:{p:"M30,13.109v5.547V28.8c0,0.641-0.513,1.2-1.2,1.2h-9.878h-5.578H3.2C2.484,30,2,29.453,2,28.8v-9.831v-5.625V3.2C2,2.5,2.547,2,3.2,2h9.94h5.547H28.8c0.685,0,1.203,0.531,1.2,1.2V13.109z",
s:"none",fl:"#333"}},f:{100:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z"}}}]},
"morph-s-o":{it:1,sh:[{i:{a:{p:"M30,13.109v5.547V28.8c0,0.641-0.513,1.2-1.2,1.2h-9.878h-5.578H3.2C2.484,30,2,29.453,2,28.8v-9.831v-5.625V3.2C2,2.5,2.547,2,3.2,2h9.94h5.547H28.8c0.685,0,1.203,0.531,1.2,1.2V13.109z",s:"none",fl:"#333"}},f:{100:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z"}}}]},
"morph-o-c":{it:1,sh:[{i:{a:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z",s:"none",fl:"#333"}},f:{100:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z"}}}]},
"morph-o-s":{it:1,sh:[{i:{a:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z",s:"none",fl:"#333"}},f:{100:{p:"M30,13.109v5.547V28.8c0,0.641-0.513,1.2-1.2,1.2h-9.878h-5.578H3.2C2.484,30,2,29.453,2,28.8v-9.831v-5.625V3.2C2,2.5,2.547,2,3.2,2h9.94h5.547H28.8c0.685,0,1.203,0.531,1.2,1.2V13.109z"}}}]},
"morph-c-t-up":{it:1,sh:[{i:{a:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z",
s:"none",fl:"#333"}},f:{100:{p:"M22.115,13.524l5.587,9.675l2.151,3.727C30.234,27.609,29.875,28,29.232,28h-8.045H10.969H2.767c-0.517,0-1.048-0.344-0.62-1.074l2.08-3.602l5.942-10.292l0.592-1.026l2.334-4.043l2.284-3.955c0.355-0.602,0.855-0.602,1.241,0l2.309,3.999l2.687,4.652L22.115,13.524z"}}}]},"morph-s-t-up":{it:1,sh:[{i:{a:{p:"M2,16V3.2C2,2.5,2.594,2,3.2,2h12.276h1.047H28.8C29.422,2,30,2.516,30,3.2V16v1.167V28.8c0,0.685-0.578,1.2-1.2,1.2H3.2C2.5,30,2,29.469,2,28.8V17.167V16z",s:"none",fl:"#333"}},
f:{100:{p:"M2.123,26.941l7.188-12.347l0.342-0.588l5.825-10.006c0.287-0.585,0.759-0.585,1.047,0l5.605,9.63l0.36,0.619l7.386,12.691C30.166,27.526,29.931,28,29.353,28H17.167H16h-0.344h-1.167H2.649C2.068,28,1.836,27.526,2.123,26.941z"}}}]},"morph-o-t-up":{it:1,sh:[{i:{a:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z",
s:"none",fl:"#333"}},f:{100:{p:"M22.115,13.524l5.587,9.675l2.151,3.727C30.234,27.609,29.875,28,29.232,28h-8.045H10.969H2.767c-0.517,0-1.048-0.344-0.62-1.074l2.08-3.602l5.942-10.292l0.592-1.026l2.334-4.043l2.284-3.955c0.355-0.602,0.855-0.602,1.241,0l2.309,3.999l2.687,4.652L22.115,13.524z"}}}]},"morph-t-up-c":{it:1,sh:[{i:{a:{p:"M22.115,13.524l5.587,9.675l2.151,3.727C30.234,27.609,29.875,28,29.232,28h-8.045H10.969H2.767c-0.517,0-1.048-0.344-0.62-1.074l2.08-3.602l5.942-10.292l0.592-1.026l2.334-4.043l2.284-3.955c0.355-0.602,0.855-0.602,1.241,0l2.309,3.999l2.687,4.652L22.115,13.524z",
s:"none",fl:"#333"}},f:{100:{p:"M29.694,13.089c0.401,1.891,0.401,3.773,0.057,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.237,2.818-3.729,3.86c-1.491,1.041-3.211,1.807-5.102,2.209c-1.892,0.401-3.774,0.401-5.56,0.058c-1.786-0.346-3.474-1.035-4.977-2.011c-1.502-0.976-2.819-2.237-3.86-3.729c-1.042-1.49-1.807-3.21-2.209-5.101c-0.402-1.892-0.402-3.774-0.057-5.56s1.034-3.474,2.01-4.977c0.976-1.502,2.238-2.819,3.729-3.86c1.491-1.042,3.211-1.807,5.102-2.209c1.891-0.402,3.773-0.402,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.238,3.86,3.729C28.526,9.479,29.292,11.198,29.694,13.089z"}}}]},
"morph-t-up-s":{it:1,sh:[{i:{a:{p:"M2.123,26.941l7.188-12.347l0.342-0.588l5.825-10.006c0.287-0.585,0.759-0.585,1.047,0l5.605,9.63l0.36,0.619l7.386,12.691C30.166,27.526,29.931,28,29.353,28H17.167H16h-0.344h-1.167H2.649C2.068,28,1.836,27.526,2.123,26.941z",s:"none",fl:"#333"}},f:{100:{p:"M2,16V3.2C2,2.5,2.594,2,3.2,2h12.276h1.047H28.8C29.422,2,30,2.516,30,3.2V16v1.167V28.8c0,0.685-0.578,1.2-1.2,1.2H3.2C2.5,30,2,29.469,2,28.8V17.167V16z"}}}]},"morph-t-up-o":{it:1,sh:[{i:{a:{p:"M22.115,13.524l5.587,9.675l2.151,3.727C30.234,27.609,29.875,28,29.232,28h-8.045H10.969H2.767c-0.517,0-1.048-0.344-0.62-1.074l2.08-3.602l5.942-10.292l0.592-1.026l2.334-4.043l2.284-3.955c0.355-0.602,0.855-0.602,1.241,0l2.309,3.999l2.687,4.652L22.115,13.524z",
s:"none",fl:"#333"}},f:{100:{p:"M30,10.801v10.398c0,0.473-0.163,0.728-0.424,1.023l-7.354,7.354C22.013,29.738,21.703,30,21.199,30H10.801c-0.488-0.02-0.689-0.143-1.024-0.424l-7.353-7.354C2.146,21.896,2.061,21.646,2,21.199V10.801c0-0.379,0.151-0.727,0.424-1.024l7.353-7.353C10.106,2.151,10.391,2,10.801,2h10.398c0.521,0.082,0.66,0.109,1.023,0.424l7.354,7.353C29.844,10.063,30,10.375,30,10.801z"}}}]},"morph-c-t-right":{it:1,sh:[{i:{a:{p:"M18.91,29.694c-1.891,0.401-3.773,0.401-5.559,0.057c-1.786-0.345-3.475-1.034-4.977-2.01s-2.818-2.237-3.86-3.729c-1.041-1.491-1.807-3.211-2.209-5.102c-0.401-1.892-0.401-3.774-0.058-5.56c0.346-1.786,1.035-3.474,2.011-4.977c0.976-1.502,2.237-2.819,3.729-3.86c1.49-1.042,3.21-1.807,5.101-2.209c1.892-0.402,3.774-0.402,5.56-0.057c1.785,0.345,3.474,1.034,4.977,2.01c1.502,0.976,2.818,2.238,3.859,3.729c1.042,1.491,1.808,3.211,2.209,5.102c0.402,1.891,0.402,3.773,0.058,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.238,2.818-3.729,3.86C22.521,28.526,20.802,29.292,18.91,29.694z",
s:"none",fl:"#333"}},f:{100:{p:"M18.476,22.115l-9.675,5.587l-3.727,2.151C4.391,30.234,4,29.875,4,29.232v-8.045V10.969V2.767c0-0.517,0.344-1.048,1.074-0.62l3.602,2.08l10.292,5.942l1.025,0.592l4.043,2.334l3.955,2.284c0.603,0.355,0.603,0.855,0,1.241l-3.998,2.309l-4.652,2.687L18.476,22.115z"}}}]},"morph-s-t-right":{it:1,sh:[{i:{a:{p:"M16,2h12.8C29.5,2,30,2.594,30,3.2v12.276v1.047V28.8c0,0.622-0.516,1.2-1.2,1.2H16h-1.167H3.2C2.516,30,2,29.422,2,28.8V3.2C2,2.5,2.531,2,3.2,2h11.633H16z",s:"none",fl:"#333"}},
f:{100:{p:"M5.059,2.123l12.347,7.188l0.588,0.342l10.006,5.825c0.585,0.287,0.585,0.759,0,1.047l-9.63,5.605l-0.619,0.36L5.059,29.876C4.474,30.166,4,29.931,4,29.353V17.167V16v-0.344v-1.167V2.649C4,2.068,4.474,1.836,5.059,2.123z"}}}]},"morph-o-t-right":{it:1,sh:[{i:{a:{p:"M21.198,30H10.801c-0.473,0-0.728-0.163-1.023-0.424l-7.354-7.354C2.262,22.013,2,21.703,2,21.199V10.801c0.02-0.488,0.143-0.689,0.424-1.024l7.354-7.353C10.104,2.146,10.354,2.061,10.801,2h10.397c0.38,0,0.727,0.151,1.024,0.424l7.353,7.353C29.849,10.106,30,10.391,30,10.801v10.398c-0.082,0.521-0.109,0.66-0.425,1.023l-7.353,7.354C21.938,29.844,21.625,30,21.198,30z",
s:"none",fl:"#333"}},f:{100:{p:"M18.476,22.115l-9.675,5.587l-3.727,2.151C4.391,30.234,4,29.875,4,29.232v-8.045V10.969V2.767c0-0.517,0.344-1.048,1.074-0.62l3.602,2.08l10.292,5.942l1.025,0.592l4.043,2.334l3.955,2.284c0.603,0.355,0.603,0.855,0,1.241l-3.998,2.309l-4.652,2.687L18.476,22.115z"}}}]},"morph-t-right-c":{it:1,sh:[{i:{a:{p:"M18.476,22.115l-9.675,5.587l-3.727,2.151C4.391,30.234,4,29.875,4,29.232v-8.045V10.969V2.767c0-0.517,0.344-1.048,1.074-0.62l3.602,2.08l10.292,5.942l1.025,0.592l4.043,2.334l3.955,2.284c0.603,0.355,0.603,0.855,0,1.241l-3.998,2.309l-4.652,2.687L18.476,22.115z",
s:"none",fl:"#333"}},f:{100:{p:"M18.91,29.694c-1.891,0.401-3.773,0.401-5.559,0.057c-1.786-0.345-3.475-1.034-4.977-2.01s-2.818-2.237-3.86-3.729c-1.041-1.491-1.807-3.211-2.209-5.102c-0.401-1.892-0.401-3.774-0.058-5.56c0.346-1.786,1.035-3.474,2.011-4.977c0.976-1.502,2.237-2.819,3.729-3.86c1.49-1.042,3.21-1.807,5.101-2.209c1.892-0.402,3.774-0.402,5.56-0.057c1.785,0.345,3.474,1.034,4.977,2.01c1.502,0.976,2.818,2.238,3.859,3.729c1.042,1.491,1.808,3.211,2.209,5.102c0.402,1.891,0.402,3.773,0.058,5.559c-0.345,1.786-1.034,3.475-2.01,4.977s-2.238,2.818-3.729,3.86C22.521,28.526,20.802,29.292,18.91,29.694z"}}}]},
"morph-t-right-s":{it:1,sh:[{i:{a:{p:"M5.059,2.123l12.347,7.188l0.588,0.342l10.006,5.825c0.585,0.287,0.585,0.759,0,1.047l-9.63,5.605l-0.619,0.36L5.059,29.876C4.474,30.166,4,29.931,4,29.353V17.167V16v-0.344v-1.167V2.649C4,2.068,4.474,1.836,5.059,2.123z",s:"none",fl:"#333"}},f:{100:{p:"M16,2h12.8C29.5,2,30,2.594,30,3.2v12.276v1.047V28.8c0,0.622-0.516,1.2-1.2,1.2H16h-1.167H3.2C2.516,30,2,29.422,2,28.8V3.2C2,2.5,2.531,2,3.2,2h11.633H16z"}}}]},"morph-t-right-o":{it:1,sh:[{i:{a:{p:"M18.476,22.115l-9.675,5.587l-3.727,2.151C4.391,30.234,4,29.875,4,29.232v-8.045V10.969V2.767c0-0.517,0.344-1.048,1.074-0.62l3.602,2.08l10.292,5.942l1.025,0.592l4.043,2.334l3.955,2.284c0.603,0.355,0.603,0.855,0,1.241l-3.998,2.309l-4.652,2.687L18.476,22.115z",
s:"none",fl:"#333"}},f:{100:{p:"M21.198,30H10.801c-0.473,0-0.728-0.163-1.023-0.424l-7.354-7.354C2.262,22.013,2,21.703,2,21.199V10.801c0.02-0.488,0.143-0.689,0.424-1.024l7.354-7.353C10.104,2.146,10.354,2.061,10.801,2h10.397c0.38,0,0.727,0.151,1.024,0.424l7.353,7.353C29.849,10.106,30,10.391,30,10.801v10.398c-0.082,0.521-0.109,0.66-0.425,1.023l-7.353,7.354C21.938,29.844,21.625,30,21.198,30z"}}}]},"morph-c-t-down":{it:1,sh:[{i:{a:{p:"M2.306,18.91c-0.401-1.891-0.401-3.773-0.057-5.559c0.345-1.786,1.034-3.475,2.01-4.977s2.237-2.818,3.729-3.86c1.491-1.041,3.211-1.807,5.102-2.209c1.892-0.401,3.774-0.401,5.56-0.058c1.785,0.346,3.474,1.035,4.977,2.011c1.502,0.976,2.818,2.237,3.859,3.729c1.042,1.49,1.808,3.21,2.209,5.101c0.402,1.892,0.402,3.774,0.058,5.56c-0.345,1.785-1.034,3.474-2.01,4.977c-0.976,1.502-2.238,2.818-3.729,3.859c-1.491,1.042-3.211,1.808-5.103,2.209c-1.891,0.402-3.773,0.402-5.559,0.058c-1.786-0.345-3.475-1.034-4.977-2.01s-2.818-2.238-3.86-3.729C3.474,22.521,2.708,20.802,2.306,18.91z",
s:"none",fl:"#333"}},f:{100:{p:"M9.885,18.476L4.298,8.801L2.146,5.074C1.766,4.391,2.125,4,2.768,4h8.045h10.219h8.201c0.518,0,1.049,0.344,0.62,1.074l-2.079,3.602l-5.942,10.292l-0.593,1.025l-2.334,4.043l-2.284,3.955c-0.355,0.603-0.855,0.603-1.241,0l-2.309-3.998l-2.687-4.652L9.885,18.476z"}}}]},"morph-s-t-down":{it:1,sh:[{i:{a:{p:"M30,16v12.8c0,0.7-0.594,1.2-1.2,1.2H16.523h-1.047H3.2C2.578,30,2,29.484,2,28.8V16v-1.167V3.2C2,2.516,2.578,2,3.2,2h25.6C29.5,2,30,2.531,30,3.2v11.633V16z",s:"none",fl:"#333"}},
f:{100:{p:"M29.877,5.059l-7.188,12.347l-0.342,0.588l-5.825,10.006c-0.287,0.585-0.759,0.585-1.047,0l-5.605-9.63L9.51,17.75L2.124,5.059C1.834,4.474,2.069,4,2.647,4h12.186H16h0.344h1.167h11.839C29.932,4,30.164,4.474,29.877,5.059z"}}}]},"morph-o-t-down":{it:1,sh:[{i:{a:{p:"M2,21.198V10.801c0-0.473,0.163-0.728,0.424-1.023l7.354-7.354C9.987,2.262,10.297,2,10.801,2h10.397c0.488,0.02,0.689,0.143,1.024,0.424l7.353,7.354c0.279,0.326,0.364,0.577,0.425,1.023v10.397c0,0.38-0.151,0.727-0.425,1.024l-7.353,7.353C21.894,29.849,21.609,30,21.198,30H10.801c-0.521-0.082-0.66-0.109-1.023-0.425l-7.354-7.353C2.156,21.938,2,21.625,2,21.198z",
s:"none",fl:"#333"}},f:{100:{p:"M9.885,18.476L4.298,8.801L2.146,5.074C1.766,4.391,2.125,4,2.768,4h8.045h10.219h8.201c0.518,0,1.049,0.344,0.62,1.074l-2.079,3.602l-5.942,10.292l-0.593,1.025l-2.334,4.043l-2.284,3.955c-0.355,0.603-0.855,0.603-1.241,0l-2.309-3.998l-2.687-4.652L9.885,18.476z"}}}]},"morph-t-down-c":{it:1,sh:[{i:{a:{p:"M9.885,18.476L4.298,8.801L2.146,5.074C1.766,4.391,2.125,4,2.768,4h8.045h10.219h8.201c0.518,0,1.049,0.344,0.62,1.074l-2.079,3.602l-5.942,10.292l-0.593,1.025l-2.334,4.043l-2.284,3.955c-0.355,0.603-0.855,0.603-1.241,0l-2.309-3.998l-2.687-4.652L9.885,18.476z",
s:"none",fl:"#333"}},f:{100:{p:"M2.306,18.91c-0.401-1.891-0.401-3.773-0.057-5.559c0.345-1.786,1.034-3.475,2.01-4.977s2.237-2.818,3.729-3.86c1.491-1.041,3.211-1.807,5.102-2.209c1.892-0.401,3.774-0.401,5.56-0.058c1.785,0.346,3.474,1.035,4.977,2.011c1.502,0.976,2.818,2.237,3.859,3.729c1.042,1.49,1.808,3.21,2.209,5.101c0.402,1.892,0.402,3.774,0.058,5.56c-0.345,1.785-1.034,3.474-2.01,4.977c-0.976,1.502-2.238,2.818-3.729,3.859c-1.491,1.042-3.211,1.808-5.103,2.209c-1.891,0.402-3.773,0.402-5.559,0.058c-1.786-0.345-3.475-1.034-4.977-2.01s-2.818-2.238-3.86-3.729C3.474,22.521,2.708,20.802,2.306,18.91z"}}}]},
"morph-t-down-s":{it:1,sh:[{i:{a:{p:"M29.877,5.059l-7.188,12.347l-0.342,0.588l-5.825,10.006c-0.287,0.585-0.759,0.585-1.047,0l-5.605-9.63L9.51,17.75L2.124,5.059C1.834,4.474,2.069,4,2.647,4h12.186H16h0.344h1.167h11.839C29.932,4,30.164,4.474,29.877,5.059z",s:"none",fl:"#333"}},f:{100:{p:"M30,16v12.8c0,0.7-0.594,1.2-1.2,1.2H16.523h-1.047H3.2C2.578,30,2,29.484,2,28.8V16v-1.167V3.2C2,2.516,2.578,2,3.2,2h25.6C29.5,2,30,2.531,30,3.2v11.633V16z"}}}]},"morph-t-down-o":{it:1,sh:[{i:{a:{p:"M9.885,18.476L4.298,8.801L2.146,5.074C1.766,4.391,2.125,4,2.768,4h8.045h10.219h8.201c0.518,0,1.049,0.344,0.62,1.074l-2.079,3.602l-5.942,10.292l-0.593,1.025l-2.334,4.043l-2.284,3.955c-0.355,0.603-0.855,0.603-1.241,0l-2.309-3.998l-2.687-4.652L9.885,18.476z",
s:"none",fl:"#333"}},f:{100:{p:"M2,21.198V10.801c0-0.473,0.163-0.728,0.424-1.023l7.354-7.354C9.987,2.262,10.297,2,10.801,2h10.397c0.488,0.02,0.689,0.143,1.024,0.424l7.353,7.354c0.279,0.326,0.364,0.577,0.425,1.023v10.397c0,0.38-0.151,0.727-0.425,1.024l-7.353,7.353C21.894,29.849,21.609,30,21.198,30H10.801c-0.521-0.082-0.66-0.109-1.023-0.425l-7.354-7.353C2.156,21.938,2,21.625,2,21.198z"}}}]},"morph-c-t-left":{it:1,sh:[{i:{a:{p:"M13.09,2.306c1.891-0.401,3.773-0.401,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.237,3.86,3.729c1.041,1.491,1.807,3.211,2.209,5.102c0.401,1.892,0.401,3.774,0.058,5.56c-0.346,1.785-1.035,3.474-2.011,4.977c-0.976,1.502-2.237,2.818-3.729,3.859c-1.49,1.042-3.21,1.808-5.101,2.209c-1.892,0.402-3.774,0.402-5.56,0.058c-1.785-0.345-3.474-1.034-4.977-2.01c-1.502-0.976-2.818-2.238-3.859-3.729c-1.042-1.491-1.808-3.211-2.209-5.103c-0.402-1.891-0.402-3.773-0.058-5.559c0.345-1.786,1.034-3.475,2.01-4.977s2.238-2.818,3.729-3.86C9.479,3.474,11.198,2.708,13.09,2.306z",
s:"none",fl:"#333"}},f:{100:{p:"M13.524,9.885l9.675-5.587l3.727-2.151C27.609,1.766,28,2.125,28,2.768v8.045v10.219v8.201c0,0.518-0.344,1.049-1.074,0.62l-3.602-2.079l-10.292-5.942l-1.025-0.593l-4.043-2.334l-3.955-2.284c-0.603-0.355-0.603-0.855,0-1.241l3.998-2.309l4.652-2.687L13.524,9.885z"}}}]},"morph-s-t-left":{it:1,sh:[{i:{a:{p:"M16,30H3.2C2.5,30,2,29.406,2,28.8V16.523v-1.047V3.2C2,2.578,2.516,2,3.2,2H16h1.167H28.8C29.484,2,30,2.578,30,3.2v25.6c0,0.7-0.531,1.2-1.2,1.2H17.167H16z",s:"none",fl:"#333"}},
f:{100:{p:"M26.941,29.877l-12.347-7.188l-0.588-0.342L4.001,16.523c-0.585-0.287-0.585-0.759,0-1.047l9.63-5.605l0.619-0.36l12.691-7.386C27.526,1.834,28,2.069,28,2.647v12.186V16v0.344v1.167v11.839C28,29.932,27.526,30.164,26.941,29.877z"}}}]},"morph-o-t-left":{it:1,sh:[{i:{a:{p:"M10.802,2h10.397c0.473,0,0.728,0.163,1.023,0.424l7.354,7.354C29.738,9.987,30,10.297,30,10.801v10.397c-0.02,0.488-0.143,0.689-0.424,1.024l-7.354,7.353c-0.326,0.279-0.577,0.364-1.023,0.425H10.802c-0.38,0-0.727-0.151-1.024-0.425l-7.353-7.353C2.151,21.894,2,21.609,2,21.198V10.801c0.082-0.521,0.109-0.66,0.425-1.023l7.353-7.354C10.063,2.156,10.375,2,10.802,2z",
s:"none",fl:"#333"}},f:{100:{p:"M13.524,9.885l9.675-5.587l3.727-2.151C27.609,1.766,28,2.125,28,2.768v8.045v10.219v8.201c0,0.518-0.344,1.049-1.074,0.62l-3.602-2.079l-10.292-5.942l-1.025-0.593l-4.043-2.334l-3.955-2.284c-0.603-0.355-0.603-0.855,0-1.241l3.998-2.309l4.652-2.687L13.524,9.885z"}}}]},"morph-t-left-c":{it:1,sh:[{i:{a:{p:"M13.524,9.885l9.675-5.587l3.727-2.151C27.609,1.766,28,2.125,28,2.768v8.045v10.219v8.201c0,0.518-0.344,1.049-1.074,0.62l-3.602-2.079l-10.292-5.942l-1.025-0.593l-4.043-2.334l-3.955-2.284c-0.603-0.355-0.603-0.855,0-1.241l3.998-2.309l4.652-2.687L13.524,9.885z",
s:"none",fl:"#333"}},f:{100:{p:"M13.09,2.306c1.891-0.401,3.773-0.401,5.559-0.057c1.786,0.345,3.475,1.034,4.977,2.01s2.818,2.237,3.86,3.729c1.041,1.491,1.807,3.211,2.209,5.102c0.401,1.892,0.401,3.774,0.058,5.56c-0.346,1.785-1.035,3.474-2.011,4.977c-0.976,1.502-2.237,2.818-3.729,3.859c-1.49,1.042-3.21,1.808-5.101,2.209c-1.892,0.402-3.774,0.402-5.56,0.058c-1.785-0.345-3.474-1.034-4.977-2.01c-1.502-0.976-2.818-2.238-3.859-3.729c-1.042-1.491-1.808-3.211-2.209-5.103c-0.402-1.891-0.402-3.773-0.058-5.559c0.345-1.786,1.034-3.475,2.01-4.977s2.238-2.818,3.729-3.86C9.479,3.474,11.198,2.708,13.09,2.306z"}}}]},
"morph-t-left-s":{it:1,sh:[{i:{a:{p:"M26.941,29.877l-12.347-7.188l-0.588-0.342L4.001,16.523c-0.585-0.287-0.585-0.759,0-1.047l9.63-5.605l0.619-0.36l12.691-7.386C27.526,1.834,28,2.069,28,2.647v12.186V16v0.344v1.167v11.839C28,29.932,27.526,30.164,26.941,29.877z",s:"none",fl:"#333"}},f:{100:{p:"M16,30H3.2C2.5,30,2,29.406,2,28.8V16.523v-1.047V3.2C2,2.578,2.516,2,3.2,2H16h1.167H28.8C29.484,2,30,2.578,30,3.2v25.6c0,0.7-0.531,1.2-1.2,1.2H17.167H16z"}}}]},"morph-t-left-o":{it:1,sh:[{i:{a:{p:"M13.524,9.885l9.675-5.587l3.727-2.151C27.609,1.766,28,2.125,28,2.768v8.045v10.219v8.201c0,0.518-0.344,1.049-1.074,0.62l-3.602-2.079l-10.292-5.942l-1.025-0.593l-4.043-2.334l-3.955-2.284c-0.603-0.355-0.603-0.855,0-1.241l3.998-2.309l4.652-2.687L13.524,9.885z",
s:"none",fl:"#333"}},f:{100:{p:"M10.802,2h10.397c0.473,0,0.728,0.163,1.023,0.424l7.354,7.354C29.738,9.987,30,10.297,30,10.801v10.397c-0.02,0.488-0.143,0.689-0.424,1.024l-7.354,7.353c-0.326,0.279-0.577,0.364-1.023,0.425H10.802c-0.38,0-0.727-0.151-1.024-0.425l-7.353-7.353C2.151,21.894,2,21.609,2,21.198V10.801c0.082-0.521,0.109-0.66,0.425-1.023l7.353-7.354C10.063,2.156,10.375,2,10.802,2z"}}}]},move:{d:1E3,it:1,sh:[{i:{a:{p:"M29.845,15.624l-5.47-5.505C24.168,9.912,24,9.982,24,10.274V14h-6V8h3.727c0.293,0,0.361-0.168,0.154-0.373l-5.505-5.473c-0.206-0.205-0.543-0.205-0.75,0.002L10.12,7.625C9.912,7.832,9.983,8,10.276,8h3.725v6H8v-3.726c0-0.293-0.168-0.362-0.373-0.155l-5.473,5.507c-0.206,0.206-0.206,0.543,0.001,0.75l5.471,5.504C7.832,22.088,8,22.018,8,21.725V18h6.001v6h-3.727c-0.292,0-0.362,0.168-0.155,0.373l5.507,5.474c0.206,0.205,0.543,0.205,0.75-0.002l5.504-5.47C22.088,24.168,22.018,24,21.725,24H18v-6h6v3.727c0,0.293,0.168,0.361,0.373,0.154l5.474-5.506C30.052,16.168,30.052,15.831,29.845,15.624z",
t:"",s:"none",fl:"#333"}},f:{10:{t:"t-5,-4s0.7"},20:{t:"t5,-2s0.7"},30:{t:"t-5,5s0.7"},50:{t:"t5,5s0.7"},60:{t:"t-3,-3s0.7"},70:{t:"t0,0s0.7"},80:{t:""},100:{}}}]},music:{d:800,it:1,sh:[{i:{a:{p:"M32,3H0V2h32V3zM32,9H0v1h32V9zM32,16H0v1h32V16zM32,23H0v1h32V23zM32,30H0v1h32V30z",o:0,s:"none",fl:"#333"}},f:{10:{o:1},80:{},90:{o:0},100:{}}},{i:{a:{p:"M10,7l20-5v19.625C30,24.042,27.507,26,24.125,26C20.742,26,18,24.042,18,21.625c0-2.415,2.742-4.375,6.125-4.375c0.939,0,1.359,0.141,1.875,0.422V9l-12,3v13.625C14,28.041,11.508,30,8.125,30S2,28.041,2,25.625s2.742-4.375,6.125-4.375c0.939,0,1.328,0.094,1.875,0.42V7zM56.8,11.8c-0.899-4.6-2.5-5.3-4.1-6.1v14.524c0,2.417-2.743,4.375-6.125,4.375c-3.383,0-6.125-1.958-6.125-4.375c0-2.415,2.742-4.375,6.125-4.375c0.939,0,1.829,0.152,2.625,0.422V0.1h3.5c2,2.7,2.745,2.344,4.1,4C58.6,6.3,56.8,11.8,56.8,11.8zM117.675,15.352c3.383,0,6.125-1.96,6.125-4.375c0-2.417-2.742-4.375-6.125-4.375c-3.382,0-6.125,1.957-6.125,4.375V31.1h3.5c2-2.699,2.745-2.344,4.1-4c1.8-2.199,0-7.699,0-7.699c-0.899,4.6-2.5,5.301-4.1,6.1V14.93C115.846,15.199,116.735,15.352,117.675,15.352zM99.95,2.5v20.125c0,2.416-2.743,4.375-6.125,4.375c-3.383,0-6.125-1.959-6.125-4.375s2.742-4.377,6.125-4.377c0.939,0,1.829,0.154,2.625,0.424V2.5H99.95zM68.1,28.799V8.675c0-2.416,2.743-4.375,6.125-4.375c3.383,0,6.125,1.959,6.125,4.375s-2.742,4.375-6.125,4.375c-0.939,0-1.829-0.153-2.625-0.423v16.171H68.1zM137.5,7l20-5v19.625c0,2.417-2.493,4.375-5.875,4.375c-3.383,0-6.125-1.958-6.125-4.375c0-2.415,2.742-4.375,6.125-4.375c0.939,0,1.359,0.141,1.875,0.422V9l-12,3v13.625c0,2.416-2.492,4.375-5.875,4.375s-6.125-1.959-6.125-4.375s2.742-4.375,6.125-4.375c0.939,0,1.328,0.094,1.875,0.42V7z",
s:"none",fl:"#333"}},f:{80:{t:"t-127.5,0"},99:{},100:{t:""}}}]},myspace:{d:0,it:1,sh:[{i:{a:{p:"M22,2c-2.484,0-4.5,2.026-4.5,4.527c0,2.5,2.016,4.526,4.5,4.526s4.5-2.026,4.5-4.526C26.5,4.026,24.484,2,22,2zM13.481,3.643c-1.767,0-3.2,1.442-3.2,3.22c0,1.778,1.434,3.22,3.2,3.22s3.199-1.441,3.199-3.22C16.681,5.085,15.248,3.643,13.481,3.643zM28,17.929V30H16v-6.035H9v-5.03H4v-6.26c0-1.728,1.393-3.13,3.111-3.13c1.466,0,2.687,1.025,3.016,2.397c0.825-0.948,2.023-1.56,3.374-1.56c2.013,0,3.697,1.34,4.271,3.175c1.066-1.042,2.54-1.666,4.228-1.666C25.438,11.893,28,14.472,28,17.929zM7.111,4.161c-1.38,0-2.5,1.126-2.5,2.516s1.12,2.515,2.5,2.515s2.5-1.125,2.5-2.515S8.491,4.161,7.111,4.161z",
s:"none",fl:"#003399"}},f:{}}]},notebook:{d:1400,it:1,sh:[{i:{a:{p:"M10,8L10,8V6l0,0V8zM10,10L10,10v2l0,0V10zM10,14L10,14v2l0,0V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z",s:"none",fl:"#333"}},f:{5:{},10:{p:"M10,8L10,8V6l0,0V8zM10,10L10,10v2l0,0V10zM10,14L10,14v2l0,0V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z"},20:{p:"M26,8H10V6h16V8zM10,10L10,10v2l0,0V10zM10,14L10,14v2l0,0V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z"},30:{p:"M26,8H10V6h16V8zM26,10H10v2h16V10zM10,14L10,14v2l0,0V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z"},
40:{p:"M26,8H10V6h16V8zM26,10H10v2h16V10zM26,14H10v2h16V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z"},50:{p:"M26,8H10V6h16V8zM26,10H10v2h16V10zM26,14H10v2h16V14zM26,18H10v2h16V18zM10,22L10,22v2l0,0V22z"},60:{p:"M26,8H10V6h16V8zM26,10H10v2h16V10zM26,14H10v2h16V14zM26,18H10v2h16V18zM26,22H10v2h16V22z"},69:{},70:{p:"M10,8L10,8V6l0,0V8zM10,10L10,10v2l0,0V10zM10,14L10,14v2l0,0V14zM10,18L10,18v2l0,0V18zM10,22L10,22v2l0,0V22z"},100:{}}},{i:{a:{p:"M28,2H6.9c-0.552,0-1,0.448-1,1v3h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v6h-1c-0.553,0-1,0.447-1,1c0,0.552,0.447,1,1,1h1v6h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1v3.1C6,30,6,30,8.7,30H28c0.553,0,1-0.447,1-1V3C29,2.448,28.553,2,28,2zM26,28H9c-0.552,0-1-0.447-1-1V5c0-0.552,0.448-1,1-1h16.9C26.453,4,27,4.548,27,5.1v22C27,27.652,26.553,28,26,28z",
o:0,s:"none",fl:"#333"}},f:{5:{o:1},70:{},75:{o:0},100:{}}},{i:{a:{p:"M4.9,6h2c0.553,0,1,0.447,1,1s-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1S4.348,6,4.9,6zM3.9,15c0,0.552,0.447,1,1,1h2c0.553,0,1-0.448,1-1c0-0.553-0.447-1-1-1h-2C4.348,14,3.9,14.447,3.9,15zM3.9,23c0,0.553,0.447,1,1,1h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2C4.348,22,3.9,22.447,3.9,23zM29,4v25.063C29,30,28,30,28,30H8.838C6.7,30,5.9,27,5.9,27v-2H7c2.063,0,1.9-2,1.9-2C8.94,20.9,7,20.9,7,20.9H5.9V17H7c1.875,0,1.9-2,1.9-2c0-2-1.9-2-1.9-2H5.9V9.1H7C8.9,9.1,8.9,7,8.9,7C8.9,4.9,7,4.9,7,4.9H5.9V3c0-0.7,0.4-1,1.1-1h17.9c0.553,0,1,0.447,1,1H28C29,3,29,4,29,4zM10,18h14V8H10V18zM27,4.2l-1-0.3V26c0,0.553-0.447,1-1,1H7.9c0,0.9,1.1,1,1.1,1h17c0.9,0,1-1,1-1V4.2zM22,11.7v-1.4c0-0.166-0.135-0.3-0.3-0.3h-9.4c-0.166,0-0.3,0.134-0.3,0.3v1.4c0,0.166,0.134,0.3,0.3,0.3h9.4C21.865,12,22,11.866,22,11.7zM22,15.7v-1.4c0-0.166-0.135-0.3-0.3-0.3h-9.4c-0.166,0-0.3,0.134-0.3,0.3v1.4c0,0.166,0.134,0.3,0.3,0.3h9.4C21.865,16,22,15.866,22,15.7z",
o:1,s:"none",fl:"#333"}},f:{5:{o:0},70:{},75:{o:1},100:{}}}]},pacman:{d:400,it:3,sh:[{i:{a:{p:"M15.906,3.5C9.003,3.501,3.406,9.097,3.406,16c0,6.904,5.599,12.326,12.5,12.5C19.8,28.6,24.2,26.4,25.9,23.6c0.086-0.143-10-7.025-10-7.025s10.078-8.067,10-8.175C23.6,5.2,19.8,3.5,15.906,3.5z M17.9,10.498c-0.828,0-1.501-0.67-1.502-1.499c0-0.829,0.671-1.501,1.499-1.501c0.828-0.001,1.5,0.669,1.501,1.498S18.729,10.497,17.9,10.498z",s:"none",fl:"#333"}},f:{50:{p:"M15.906,3.5c-6.903,0-12.5,5.597-12.5,12.5c0,6.904,5.597,12.501,12.5,12.5C22.2,28.5,27.9,24,28.5,17c0.015-0.166-12.6-0.425-12.6-0.425S28.502,16.132,28.5,16C28.4,8.1,22.4,3.5,15.906,3.5z M21.136,12.899c-0.664-0.495-0.803-1.435-0.308-2.099s1.435-0.802,2.099-0.308c0.665,0.494,0.803,1.434,0.309,2.098C22.74,13.256,21.801,13.394,21.136,12.899z",
e:"<>"},100:{p:"M15.906,3.5C9.003,3.501,3.406,9.097,3.406,16c0,6.904,5.599,12.326,12.5,12.5C19.8,28.6,24.2,26.4,25.9,23.6c0.086-0.143-10-7.025-10-7.025s10.078-8.067,10-8.175C23.6,5.2,19.8,3.5,15.906,3.5z M17.9,10.498c-0.828,0-1.501-0.67-1.502-1.499c0-0.829,0.671-1.501,1.499-1.501c0.828-0.001,1.5,0.669,1.501,1.498S18.729,10.497,17.9,10.498z"}}}]},paypal:{d:0,it:1,sh:[{i:{a:{p:"M26.215,5.451c0.669,0.331,1.268,0.804,1.699,1.384c0.909,1.218,1.16,2.88,0.761,4.941c-0.418,2.084-1.33,3.842-2.667,5.118c-0.244,0.254-0.507,0.491-0.786,0.715c-1.433,1.128-3.246,1.72-5.232,1.72h-6.331l-1.702,7.984H8.463l0.265-1.221h1.216l1.701-7.977h4.967c4.754,0,8.719-2.934,9.791-7.913C27.6,4.566,23.56,2,20.084,2H8.241L2.994,26.092h4.008L6.368,29h6.95l1.702-7.984h4.97c4.752,0,8.716-2.927,9.786-7.906C30.657,8.951,28.7,6.469,26.215,5.451L26.215,5.451z M14.13,6.906h3.408c1.698,0,2.832,1.464,2.334,3.296c-0.423,1.831-2.195,3.294-3.97,3.294h-3.261L14.13,6.906z",
s:"none",fl:"#00457C"}},f:{}}]},pen:{d:1E3,it:1,sh:[{i:{a:{p:"M11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21zM11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157z",
s:"none",fl:"#333"}},f:{2:{},7:{p:"M11.132,19.686c0,0.361-0.117,0.67-0.351,0.928C10.547,20.871,10.266,21,9.939,21H7.566C5.719,21,4,19.391,4,17.07c0-1.867,1.313-3.914,3.552-3.914c2.026,0,3.581,1.812,3.581,3.914V19.686zM7.566,15.787c-0.878-0.039-1.205,0.935-1.179,1.284c0.082,1.102,0.847,1.3,1.165,1.3h1.18l0.014-1.3C8.745,17.07,8.75,15.839,7.566,15.787zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157z"},
20:{},28:{p:"M11.132,19.686c0,0.361-0.117,0.67-0.351,0.928C10.547,20.871,10.266,21,9.939,21H7.566C5.719,21,4,19.391,4,17.07c0-1.867,1.313-3.914,3.552-3.914c2.026,0,3.581,1.812,3.581,3.914V19.686zM7.566,15.787c-0.878-0.039-1.205,0.935-1.179,1.284c0.082,1.102,0.847,1.3,1.165,1.3h1.18l0.014-1.3C8.745,17.07,8.75,15.839,7.566,15.787zM16.046,21c-1.968,0-3.58-1.734-3.58-3.93v-5.259c0-0.452,0.3-1.315,1.193-1.315c0.856,0,1.216,0.848,1.193,1.315v1.346h1.179c2,0,3.566,1.718,3.566,3.914C19.598,19.126,18.156,21,16.046,21zM17.197,17.07c-0.025-1.322-1.151-1.284-1.151-1.284h-1.193v1.284c0,0,0.101,1.273,1.179,1.3C16.75,18.388,17.209,17.7,17.197,17.07zM27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157z"},
45:{},52:{p:"M11.132,19.686c0,0.361-0.117,0.67-0.351,0.928C10.547,20.871,10.266,21,9.939,21H7.566C5.719,21,4,19.391,4,17.07c0-1.867,1.313-3.914,3.552-3.914c2.026,0,3.581,1.812,3.581,3.914V19.686zM7.566,15.787c-0.878-0.039-1.205,0.935-1.179,1.284c0.082,1.102,0.847,1.3,1.165,1.3h1.18l0.014-1.3C8.745,17.07,8.75,15.839,7.566,15.787zM16.046,21c-1.968,0-3.58-1.734-3.58-3.93v-5.259c0-0.452,0.3-1.315,1.193-1.315c0.856,0,1.216,0.848,1.193,1.315v1.346h1.179c2,0,3.566,1.718,3.566,3.914C19.598,19.126,18.156,21,16.046,21zM17.197,17.07c-0.025-1.322-1.151-1.284-1.151-1.284h-1.193v1.284c0,0,0.101,1.273,1.179,1.3C16.75,18.388,17.209,17.7,17.197,17.07zM20.764,17.07c0-2.477,1.846-3.914,3.566-3.914h2.303c0,0,1.207,0,1.207,1.315c0,1.341-1.193,1.315-1.193,1.315h-2.303c0,0-1.203,0.026-1.193,1.284c0.01,1.305,1.18,1.3,1.18,1.3h2.303c0,0,1.207,0.005,1.207,1.315C27.84,21,26.646,21,26.646,21h-2.303C22.453,21,20.764,19.391,20.764,17.07z"},
65:{},66:{p:"M11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21zM11.132,21L11.132,21L11.132,21L11.132,21L11.132,21L11.132,21zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496L12.466,10.496zM27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157L27.84,13.157z"},
100:{}}},{i:{a:{p:"M25.354,4.1L27.9,6.646c0.463,0.466,0.467,1.229,0,1.696l-1.98,1.98L21.678,6.08l1.98-1.98C24.126,3.631,24.886,3.631,25.354,4.1zM4.707,25.879c0,0,0-2.828,2.828-5.656L20.971,6.787l4.242,4.243L11.778,24.465c-2.828,2.828-5.657,2.828-5.657,2.828S4.413,28.413,4,28C3.558,27.559,4.707,25.879,4.707,25.879zM9.091,23.191l12.728-12.727l-0.849-0.849L8.242,22.344L9.091,23.191z",t:"t0,0s1r0",s:"none",fl:"#333"}},f:{0:{t:"t7,-7s0.6,0.6,4,28r10,4,28"},3:{t:"t4,-15s0.6,0.6,4,28r-10,4,28"},6:{t:"t0,-11s0.6,0.6,4,28r5,4,28"},
9:{t:"t2,-7s0.6,0.6,4,28r5,4,28"},11:{t:"t7,-7s0.6,0.6,4,28r0,4,28"},20:{},23:{t:"t9,-17s0.6,0.6,4,28r0,4,28"},26:{t:"t9,-10s0.6,0.6,4,28r10,4,28"},29:{t:"t12,-7s0.6,0.6,4,28r-5,4,28"},32:{t:"t15,-11s0.6,0.6,4,28r10,4,28"},35:{t:"t10,-14s0.6,0.6,4,28r0,4,28"},45:{},48:{t:"t24,-14s0.6,0.6,4,28r-10,4,28"},51:{t:"t18,-13s0.6,0.6,4,28r0,4,28"},54:{t:"t18,-8s0.6,0.6,4,28r-5,4,28"},57:{t:"t24,-9s0.6,0.6,4,28r-0,4,28"},67:{},70:{t:""},100:{}}}]},pencil:{d:1E3,it:1,sh:[{i:{a:{p:"",o:1,s:"none",fl:"#333"}},
f:{0:{o:1,p:"M6,23.5H5.5l0,0L5.2,24L6,23.5L6,23.5L6,23.5L6,23.5L6,23.5z"},10:{p:"M16,8L16,6l0,0L5.2,24L7,23L16,8L16,8L16,8L16,8z"},20:{},30:{p:"M26.801,24L26.801,24L16,6L5.2,24L7,23l9-15l9,15.1l0,0L26.801,24z"},40:{},50:{p:"M5.2,24h21.601L16,6L5.2,24L7,23l9-15l9,15.1L7,23L5.2,24z"},60:{},80:{o:0},81:{p:""},100:{}}},{i:{a:{p:"M25.354,4.1L27.9,6.646c0.463,0.465,0.467,1.229,0,1.695l-1.98,1.98L21.678,6.08l1.98-1.98C24.126,3.631,24.886,3.631,25.354,4.1zM7.535,20.222L20.971,6.787l4.242,4.242L11.778,24.465L4,28L7.535,20.222zM9.658,20.928L20.971,9.615l-0.707-0.707L8.951,20.221L9.658,20.928zM11.778,23.051l11.314-11.314l-0.707-0.707L11.072,22.342L11.778,23.051z",
t:"t0,0r0",s:"none",fl:"#333"}},f:{0:{t:"t1,-4r55,4,28"},10:{t:"t11,-20r55,4,28"},20:{},30:{t:"t22,-4r-85,4,28"},40:{},50:{t:"t1,-4r0"},60:{},70:{t:""},100:{}}}]},phone:{d:400,it:3,sh:[{i:{a:{p:"M29,10.5c-0.578-0.385-1.779-1.017-2.4-1.3c-2.854-1.305-6.9-1.8-10.6-1.8c-3.7,0-7.746,0.495-10.6,1.8C4.779,9.484,3.578,10.115,3,10.5c-0.6,0.4-1.4,1.399-0.9,2.7L3.5,16l6.5-3.4l-0.676-1.353C9.2,11,9.245,10.707,9.5,10.601c1.2-0.5,3.4-1.3,6.5-1.3c3.1,0,5.299,0.8,6.5,1.3c0.254,0.106,0.299,0.4,0.176,0.647L22,12.601l6.5,3.4l1.398-2.8C30.4,11.9,29.6,10.9,29,10.5z",
t:"",s:"none",fl:"#333"}},f:{0:{t:""},10:{t:"t0,1r-10,2,10"},20:{t:"t0,1r10,30,10"},30:{t:"t0,1r-10,2,10"},40:{t:"t0,1r10,30,10"},50:{t:"t0,1r-10,2,10"},60:{t:"t0,1r10,30,10"},65:{t:""},100:{}}},{i:{a:{p:"M23.899,16.601c-0.699-1.5-2.199-2.4-3.699-3v-1.1c0-1.1-0.701-1.6-1.701-1.6H16h0h-2.5c-1,0-1.7,0.5-1.7,1.6v1.1c-1.5,0.6-3,1.5-3.7,3l-1.9,6.3v3.5c0,0.9,0.8,1.6,1.6,1.6H16h0h8.2c0.799,0,1.6-0.699,1.6-1.6v-3.5L23.899,16.601zM16,21.301c-2.927,0-5.3-1.701-5.3-3.801c0-2.098,2.373-3.799,5.3-3.799s5.3,1.701,5.3,3.799C21.3,19.6,18.927,21.301,16,21.301zM18.3,17.5c0,0.994-1.029,1.801-2.3,1.801c-1.27,0-2.3-0.807-2.3-1.801c0-0.994,1.03-1.799,2.3-1.799C17.271,15.701,18.3,16.506,18.3,17.5zM14.9,19.6c-0.276,0-0.5,0.225-0.5,0.5c0,0.277,0.224,0.5,0.5,0.5s0.5-0.223,0.5-0.5C15.4,19.824,15.176,19.6,14.9,19.6zM12.9,18.5c-0.276,0-0.5,0.225-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.225,0.5-0.5S13.176,18.5,12.9,18.5zM12.2,16.5c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5C12.7,16.725,12.477,16.5,12.2,16.5zM13.8,14.9c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S14.076,14.9,13.8,14.9zM16,14.219c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5S16.276,14.219,16,14.219zM16.7,20.1c0,0.277,0.223,0.5,0.501,0.5c0.275,0,0.5-0.223,0.5-0.5c0-0.275-0.225-0.5-0.5-0.5C16.923,19.6,16.7,19.824,16.7,20.1zM18.701,19c0,0.275,0.223,0.5,0.5,0.5c0.275,0,0.5-0.225,0.5-0.5s-0.225-0.5-0.5-0.5C18.924,18.5,18.701,18.725,18.701,19zM19.4,16.9c0,0.275,0.223,0.5,0.5,0.5c0.275,0,0.5-0.225,0.5-0.5c0-0.276-0.225-0.5-0.5-0.5C19.623,16.4,19.4,16.625,19.4,16.9zM17.801,15.4c0,0.276,0.223,0.5,0.5,0.5c0.275,0,0.5-0.224,0.5-0.5s-0.225-0.5-0.5-0.5C18.023,14.9,17.801,15.125,17.801,15.4z",
s:"none",fl:"#333"}},f:{}}]},piechart:{d:600,it:1,sh:[{i:{a:{p:"M16,16V4C10.083,4,5.18,8.285,4.192,13.918L16,16L16,16z",t:"",s:"none",fl:"#333"}},f:{0:{t:""},15:{},30:{},45:{},60:{t:"t-2,-2s1.1",e:"elastic"},75:{t:""},90:{},100:{}}},{i:{a:{p:"M4.192,13.918C4.074,14.596,4,15.289,4,16c0,5.553,3.776,10.211,8.897,11.58L16,16L4.192,13.918z",t:"",s:"none",fl:"#333"}},f:{0:{t:""},15:{},30:{},45:{t:"t-2,2s1.1",e:"elastic"},60:{},75:{t:""},90:{},100:{}}},{i:{a:{p:"M19.103,4.42C18.111,4.155,17.075,4,16,4v12V16h12C28,10.448,24.223,5.789,19.103,4.42z",
t:"t2,-2",s:"none",fl:"#333"}},f:{0:{t:"t2,-2"},15:{t:"t2,-2s1.1"},30:{},45:{},60:{},75:{t:""},90:{t:"t2,-2"},100:{}}},{i:{a:{p:"M16,16l-3.103,11.58C13.888,27.846,14.925,28,16,28c5.916,0,10.82-4.284,11.808-9.918C27.926,17.404,28,16.711,28,16H16z",t:"",s:"none",fl:"#333"}},f:{0:{t:""},15:{},30:{t:"t2,2s1.1",e:"elastic"},45:{},60:{},75:{t:""},90:{},100:{}}}]},piggybank:{d:1E3,it:1,sh:[{i:{a:{p:"M13.745,18.354v1.066c-0.429-0.1-0.643-0.268-0.643-0.506C13.103,18.732,13.2,18.4,13.745,18.354zM14.251,20.514v1.148c0.649-0.063,0.697-0.387,0.697-0.588C14.948,20.865,14.715,20.678,14.251,20.514zM18,20c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S18,17.791,18,20zM15.937,20.951c0.014-0.246-0.236-0.852-0.561-1.039c-0.258-0.148-0.776-0.313-1.08-0.369v-1.162C14.6,18.4,14.7,18.6,14.788,18.75c0.082,0.191,0.229,0.287,0.438,0.287h0.547c-0.018-0.465-0.272-1.338-1.476-1.463L14.3,17c0,0-0.359-0.013-0.496-0.013h-0.014v0.587c-1.291,0.025-1.543,0.93-1.559,1.395C12.2,19.9,12.6,20.1,13.746,20.4V21.6c-0.155-0.027-0.6-0.1-0.652-0.689h-0.93c0.037,0.512,0.482,1.59,1.582,1.59V23h0.5v-0.5C15.5,22.5,15.9,21.6,15.937,20.951z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t14,-25"},10:{},30:{t:"t7,-8"},50:{t:""},100:{}}},{i:{a:{p:"M13.745,18.354v1.066c-0.429-0.1-0.643-0.268-0.643-0.506C13.103,18.732,13.2,18.4,13.745,18.354zM14.251,20.514v1.148c0.649-0.063,0.697-0.387,0.697-0.588C14.948,20.865,14.715,20.678,14.251,20.514zM18,20c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S18,17.791,18,20zM15.937,20.951c0.014-0.246-0.236-0.852-0.561-1.039c-0.258-0.148-0.776-0.313-1.08-0.369v-1.162C14.6,18.4,14.7,18.6,14.788,18.75c0.082,0.191,0.229,0.287,0.438,0.287h0.547c-0.018-0.465-0.272-1.338-1.476-1.463L14.3,17c0,0-0.359-0.013-0.496-0.013h-0.014v0.587c-1.291,0.025-1.543,0.93-1.559,1.395C12.2,19.9,12.6,20.1,13.746,20.4V21.6c-0.155-0.027-0.6-0.1-0.652-0.689h-0.93c0.037,0.512,0.482,1.59,1.582,1.59V23h0.5v-0.5C15.5,22.5,15.9,21.6,15.937,20.951z",
t:"t10,0",s:"none",fl:"#333"}},f:{0:{t:"t3,-25"},20:{},40:{t:"t7,-8"},60:{t:"t10,0"},100:{}}},{i:{a:{p:"M13.745,18.354v1.066c-0.429-0.1-0.643-0.268-0.643-0.506C13.103,18.732,13.2,18.4,13.745,18.354zM14.251,20.514v1.148c0.649-0.063,0.697-0.387,0.697-0.588C14.948,20.865,14.715,20.678,14.251,20.514zM18,20c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S18,17.791,18,20zM15.937,20.951c0.014-0.246-0.236-0.852-0.561-1.039c-0.258-0.148-0.776-0.313-1.08-0.369v-1.162C14.6,18.4,14.7,18.6,14.788,18.75c0.082,0.191,0.229,0.287,0.438,0.287h0.547c-0.018-0.465-0.272-1.338-1.476-1.463L14.3,17c0,0-0.359-0.013-0.496-0.013h-0.014v0.587c-1.291,0.025-1.543,0.93-1.559,1.395C12.2,19.9,12.6,20.1,13.746,20.4V21.6c-0.155-0.027-0.6-0.1-0.652-0.689h-0.93c0.037,0.512,0.482,1.59,1.582,1.59V23h0.5v-0.5C15.5,22.5,15.9,21.6,15.937,20.951z",
t:"t6,-5",s:"none",fl:"#333"}},f:{0:{t:"t8,-25"},30:{},50:{t:"t7,-8"},70:{t:"t6,-5"},100:{}}},{i:{a:{p:"M26,23.999c-0.697,0.33,0.033,2.906-0.801,3.611c-0.494,0.604-2.814,0.242-3.063,0.357c-0.717-0.16,0.303-2.48-0.539-2.348c-1.35,0.387-4.969,0.41-5.512,0.359c-0.148-0.016,0,1.828-0.514,1.988c-0.937,0.031-1.844,0.059-2.218-0.016c-1.189,0.033-0.438-2.262-0.741-2.496c-0.182-0.059-1.336-0.334-1.512-0.402c-0.298,0.078-0.265,1.6-0.701,1.957c-0.729,0.324-2.712-0.01-2.991-0.582c-0.445-1.521,0.81-3.184,0.557-3.438c-0.985-0.699-1.255-0.252-1.964-1.152c-1.427-1.57-2.307-0.293-3.604-1.455C1.604,19.31,2.2,16.419,2.46,16.08c0.544-0.707,1.09,0.208,1.54-0.994c0.189-2.638,1.332-5.034,3.371-6.881C6.382,7.194,4.564,4.929,6.667,3.733c2.037-0.415,5.914,2.327,5.914,2.327s2.35-0.726,4.938-0.726c7.352,0,12.48,4.844,12.48,10.817C30,19.741,29.211,21.938,26,23.999L26,23.999zM7.719,10.968c0,0.496,0.599,1.219,1.094,1.219c0.496,0,1.556-0.369,1.375-1.344C10.186,10.83,7.719,10.473,7.719,10.968zM23.25,8.869c-1.455-0.497-3.209-0.989-6.326-0.845c-0.479,0-0.869,0.517-0.869,0.997s0.391,0.869,0.869,0.869c0,0,3.426-0.316,6.326,0.846c0.48,0,0.799-0.397,0.869-0.872C24.213,9.243,23.25,8.869,23.25,8.869z",
o:1,s:"none",fl:"#333"}},f:{10:{o:0.4},70:{},90:{o:1},100:{}}}]},pinterest:{d:0,it:1,sh:[{i:{a:{p:"M17.929,22.308c-1.705-0.132-2.421-0.977-3.757-1.788c-0.735,3.855-1.633,7.551-4.293,9.48c-0.82-5.825,1.206-10.202,2.146-14.846c-1.604-2.702,0.194-8.139,3.578-6.799c4.164,1.648-3.606,10.042,1.609,11.091c5.448,1.096,7.672-9.451,4.296-12.88C16.625,1.614,7.3,6.453,8.447,13.543c0.279,1.732,2.07,2.259,0.715,4.652c-3.124-0.694-4.055-3.158-3.935-6.441c0.193-5.376,4.83-9.14,9.48-9.66c5.882-0.659,11.402,2.158,12.164,7.692C27.73,16.03,24.218,22.796,17.929,22.308L17.929,22.308z",
s:"none",fl:"#CB2028"}},f:{}}]},"pinterest-alt":{d:0,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM17.364,20.23c-1.278-0.099-1.815-0.732-2.818-1.341c-0.551,2.892-1.225,5.663-3.22,7.11c-0.615-4.369,0.904-7.651,1.61-11.135c-1.203-2.026,0.146-6.104,2.684-5.099c3.123,1.236-2.705,7.532,1.207,8.319c4.086,0.821,5.754-7.088,3.222-9.66C16.387,4.71,9.393,8.34,10.253,13.658c0.209,1.299,1.552,1.694,0.537,3.489c-2.343-0.521-3.041-2.369-2.951-4.831c0.145-4.032,3.623-6.855,7.11-7.245c4.412-0.494,8.552,1.619,9.123,5.769C24.716,15.522,22.081,20.597,17.364,20.23L17.364,20.23z",
s:"none",fl:"#CB2028"}},f:{}}]},"plane-down":{d:1E3,it:1,sh:[{i:{a:{p:"M20.1,18.9c0,0.553-0.447,1-1,1s-1-0.447-1-1s0.447-1,1-1S20.1,18.348,20.1,18.9z",o:0,s:"none",fl:"#333"}},f:{0:{o:1,t:"t0,0r0"},15:{t:"t-2,3"},20:{},70:{t:"t1,7"},99:{},100:{o:0,t:""}}},{i:{a:{p:"M1.3,17.301l2.724,0.014l2.441,3.027L11.6,19.9l-5.069-6.069l3.173-1.122l9.696,6.391c0,0,6.185-0.485,9.025,0.839c3.364,1.569,0.891,2.387,0.891,2.387C17.29,26.578,4.633,23.59,4.633,23.59C2.542,20.843,1.3,17.301,1.3,17.301z",t:"t0,-5r25",s:"none",
fl:"#333"}},f:{20:{t:"t0,-5r25"},70:{t:""},99:{},100:{t:"t0,-5r25"}}},{i:{a:{p:"M32,30H0v-2h32V30z",s:"none",fl:"#333"}},f:{}}]},"plane-up":{d:1E3,it:1,sh:[{i:{a:{p:"M20.1,26.3c0,0.553-0.447,1-1,1s-1-0.447-1-1s0.447-1,1-1S20.1,25.747,20.1,26.3z",o:0,s:"none",fl:"#333"}},f:{0:{o:1,t:"t0,0r0"},50:{t:"t2,-7"},70:{t:"t1,-11"},72:{o:0},100:{}}},{i:{a:{p:"M1.3,17.301l2.724,0.014l2.441,3.027L11.6,19.9l-5.069-6.069l3.173-1.122l9.696,6.391c0,0,6.185-0.485,9.025,0.839c3.364,1.569,0.891,2.387,0.891,2.387C17.29,26.578,4.633,23.59,4.633,23.59C2.542,20.843,1.3,17.301,1.3,17.301z",
t:"t0,-5r-25",s:"none",fl:"#333"}},f:{0:{t:"t0,0r0"},50:{t:"t0,-5,r-25"},100:{}}},{i:{a:{p:"M32,30H0v-2h32V30z",s:"none",fl:"#333"}},f:{}}]},plus:{d:800,it:1,sh:[{i:{a:{p:"M15,12.3V15h-2.7c-0.166,0-0.3,0.134-0.3,0.3v1.4c0,0.166,0.134,0.3,0.3,0.3H15v2.7c0,0.165,0.134,0.3,0.3,0.3h1.4c0.166,0,0.3-0.135,0.3-0.3V17h2.7c0.165,0,0.3-0.134,0.3-0.3v-1.4c0-0.166-0.135-0.3-0.3-0.3H17v-2.7c0-0.166-0.134-0.3-0.3-0.3h-1.4C15.134,12,15,12.134,15,12.3z",t:"t-6,-6",o:0,s:"none",fl:"#333"}},f:{10:{o:1},30:{t:""},40:{o:0},
60:{o:0},70:{t:"t-6,-6",o:0},100:{o:0}}},{i:{a:{p:"M15,12.3V15h-2.7c-0.166,0-0.3,0.134-0.3,0.3v1.4c0,0.166,0.134,0.3,0.3,0.3H15v2.7c0,0.165,0.134,0.3,0.3,0.3h1.4c0.166,0,0.3-0.135,0.3-0.3V17h2.7c0.165,0,0.3-0.134,0.3-0.3v-1.4c0-0.166-0.135-0.3-0.3-0.3H17v-2.7c0-0.166-0.134-0.3-0.3-0.3h-1.4C15.134,12,15,12.134,15,12.3z",t:"t6,6",o:0,s:"none",fl:"#333"}},f:{10:{o:1},30:{t:""},40:{t:"s1.75"},60:{o:0},70:{t:"t6,6",o:0},100:{o:0}},fIE:{10:{o:1},30:{t:""},40:{t:"s1.75,1.75,14.5,14.5"},60:{o:0},70:{t:"t6,6",
o:0},100:{o:0}}},{i:{a:{p:"M14,8.6V14H8.6C8.269,14,8,14.269,8,14.6v2.8C8,17.731,8.269,18,8.6,18H14v5.4c0,0.331,0.269,0.6,0.6,0.6h2.8c0.331,0,0.6-0.269,0.6-0.6V18h5.4c0.331,0,0.6-0.269,0.6-0.6v-2.8c0-0.332-0.269-0.6-0.6-0.6H18V8.6C18,8.269,17.731,8,17.4,8h-2.8C14.269,8,14,8.269,14,8.6z",o:1,s:"none",fl:"#333"}},f:{10:{o:0},40:{o:0},60:{o:1},70:{o:1},100:{o:1}}}]},"plus-alt":{d:400,it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24,17.4c0,0.331-0.269,0.6-0.6,0.6H18v5.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V18H8.6C8.269,18,8,17.731,8,17.4v-2.8C8,14.269,8.269,14,8.6,14H14V8.6C14,8.269,14.269,8,14.6,8h2.8C17.731,8,18,8.269,18,8.6V14h5.4c0.331,0,0.6,0.269,0.6,0.6V17.4z",
s:"none",fl:"#333"}},f:{0:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16.1,16.018c0,0.004-0.003,0.007-0.008,0.007h-0.067v0.067c0,0.004-0.003,0.008-0.007,0.008h-0.035c-0.004,0-0.007-0.003-0.007-0.008v-0.067h-0.067c-0.004,0-0.008-0.003-0.008-0.007v-0.035c0-0.004,0.003-0.007,0.008-0.007h0.067v-0.067c0-0.004,0.003-0.008,0.007-0.008h0.035c0.004,0,0.007,0.003,0.007,0.008v0.067h0.067c0.004,0,0.008,0.003,0.008,0.007V16.018z",t:"s0.2"},30:{t:"s1"},35:{},60:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM24,17.4c0,0.331-0.269,0.6-0.6,0.6H18v5.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V18H8.6C8.269,18,8,17.731,8,17.4v-2.8C8,14.269,8.269,14,8.6,14H14V8.6C14,8.269,14.269,8,14.6,8h2.8C17.731,8,18,8.269,18,8.6V14h5.4c0.331,0,0.6,0.269,0.6,0.6V17.4z",
e:"bounce"},100:{}}}]},presentation:{d:800,it:1,sh:[{i:{a:{p:"M21.689,28H20.6c-0.33,0-0.789-0.189-1.023-0.424L16,24l-3.576,3.576C12.19,27.811,11.731,28,11.4,28h-1.09c-0.331,0-0.409-0.189-0.176-0.424l5.441-5.4c0.233-0.234,0.614-0.234,0.848,0l5.441,5.4C22.1,27.811,22.02,28,21.689,28z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,16c-2.273,0-4-1.789-4-3.998S7.727,8,10,8v4.002h4C14,14.211,12.274,16,10,16zM18,18h-2v-2h2V18zM18,14h-2v-2h2V14zM18,10h-2V8h2V10zM25,18h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,18,25,18zM25,14h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,14,25,14zM25,10h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,10,25,10z",
s:"none",fl:"#333"}},f:{0:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,12L10,12L10,12L10,12L10,12L10,12zM16,18L16,18v-2l0,0V18zM16,14L16,14v-2l0,0V14zM16,10L16,10V8l0,0V10zM16,18L16,18c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,18,16,18zM16,14L16,14c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,14,16,14zM16,10L16,10c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,10,16,10z"},
20:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,16c-2.273,0-4-1.789-4-3.998S7.727,8,10,8v4.002h4C14,14.211,12.274,16,10,16zM16,18L16,18v-2l0,0V18zM16,14L16,14v-2l0,0V14zM16,10L16,10V8l0,0V10zM16,18L16,18c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,18,16,18zM16,14L16,14c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,14,16,14zM16,10L16,10c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,10,16,10z"},
40:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,16c-2.273,0-4-1.789-4-3.998S7.727,8,10,8v4.002h4C14,14.211,12.274,16,10,16zM16,18L16,18v-2l0,0V18zM16,14L16,14v-2l0,0V14zM18,10h-2V8h2V10zM16,18L16,18c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,18,16,18zM16,14L16,14c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,14,16,14zM25,10h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,10,25,10z"},
60:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,16c-2.273,0-4-1.789-4-3.998S7.727,8,10,8v4.002h4C14,14.211,12.274,16,10,16zM16,18L16,18v-2l0,0V18zM18,14h-2v-2h2V14zM18,10h-2V8h2V10zM16,18L16,18c0,0,0-0.447,0-1s0-1,0-1l0,0c0,0,0,0.447,0,1S16,18,16,18zM25,14h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,14,25,14zM25,10h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,10,25,10z"},
80:{p:"M28.801,20H28V7.002c0,0,0.047,0,0.6-0.001S30,6.328,30,5.5S29.328,4,28.5,4h-25C2.672,4,2,4.672,2,5.5S2.848,7,3.4,7.001L4,7.002V20c0,0-0.247,0-0.8,0S2,20.447,2,21s0.537,1,1.2,1h25.601C29.463,22,30,21.553,30,21S29.354,20,28.801,20zM10,16c-2.273,0-4-1.789-4-3.998S7.727,8,10,8v4.002h4C14,14.211,12.274,16,10,16zM18,18h-2v-2h2V18zM18,14h-2v-2h2V14zM18,10h-2V8h2V10zM25,18h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,18,25,18zM25,14h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,14,25,14zM25,10h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S25.553,10,25,10z"},
100:{}}}]},printer:{d:600,it:1,sh:[{i:{a:{p:"M23,13H9v-1h14V13zM23,15H9v1h14V15zM23,18H9v1h14V18zM23,21H9v1h14V21zM23,24H9v1h14V24zM23,27H9v1h14V27z",o:0,s:"none",fl:"#333"}},f:{0:{o:1},15:{t:"t0,2"},30:{t:"t0,4"},45:{t:"t0,6"},60:{t:"t0,8"},75:{t:"t0,10"},90:{t:"t0,12"},91:{o:0},95:{t:""},100:{}}},{i:{a:{p:"M26,10c0-2-4-6-6-6H6.6C6.269,4,6,4.269,6,4.6V12H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v3.4C6,27.73,6.269,28,6.6,28H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75h-1V10zM24,26H8v-3h16V26zM24,12H8V6h12c1.199,0,0,4,0,4s4-1.9,4,0V12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z",
s:"none",fl:"#333"}},f:{15:{p:"M26,10c0-2-2-4-4-4H6.6C6.269,6,6,6.269,6,6.6V12H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v5.4C6,29.73,6.269,30,6.6,30H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75h-1V10zM24,28H8v-5h16V28zM24,12H8V8h12c1.199,0,2,2,2,2S24,10.1,24,12L24,12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z"},30:{p:"M26,12c0-4,0-4-4-4H6.6C6.269,8,6,8.269,6,8.6V12H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v7.4C6,31.73,6.269,32,6.6,32H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75H26L26,12zM24,30H8v-7h16V30zM24,12H8v-2h12c1.199,0,4,0,4,0S24,10.1,24,12L24,12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z"},
45:{p:"M26,12c0-2,0-2-2-2L6.6,10c-0.331,0-0.6,0.269-0.6,0.6V12H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v9.4C6,33.73,6.269,34,6.6,34H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75H26L26,12zM24,32H8v-9h16V32zM24,12H8v0h12C21.199,12,24,12,24,12S24,10.1,24,12L24,12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z"},60:{p:"M26,12c0,0,0,0.001-2,0.001L6.6,12C6.269,12,6,12,6,12v0H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v11.4C6,35.73,6.269,36,6.6,36H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75H26L26,12zM24,34H8V23h16V34zM24,12H8v0h12C21.199,12,24,12,24,12S24,10.1,24,12L24,12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z"},
98:{},100:{p:"M26,10c0-2-4-6-6-6H6.6C6.269,4,6,4.269,6,4.6V12H5c-1.656,0-3,1.094-3,2.75v8.65C2,23.73,2.269,24,2.6,24H6v3.4C6,27.73,6.269,28,6.6,28H25.4c0.33,0,0.6-0.27,0.6-0.6V24h3.4c0.33,0,0.6-0.27,0.6-0.6v-8.65c0-1.656-1.344-2.75-3-2.75h-1V10zM24,26H8v-3h16V26zM24,12H8V6h12c1.199,0,0,4,0,4s4-1.9,4,0V12zM27,16c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S27.553,16,27,16z"}}}]},qrcode:{d:800,it:1,sh:[{i:{a:{p:"M10,10H8V8h2V10zM24,8h-2v2h2V8zM10,22H8v2h2V22zM28,16h-2v6h2V16zM24,24v2h-2v2h4v-2h2v-2H24zM18,22v4h-2v2h2h2v-6H18zM14,4v10H8v2H6v-2H4V4H14zM12,6H6v6h6V6zM22,20h-2v2h2h2v-2H22zM28,4v10h-4v2v2h-6v-2h4v-2h-4v-4h-2V8h2V4H28zM26,6h-6v6h6V6zM16,20v2h-2v6H4V18h8v-2h2v2l0,0v2H16zM12,20H6v6h6V20z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M32,2H0V0h32V2z",o:0,s:"none",fl:"#333"}},f:{0:{o:1},30:{t:"t0,32"},40:{},70:{t:""},72:{o:0},100:{}}},{i:{a:{p:"M0,32V0h2v32H0z",o:0,s:"none",fl:"#333"}},f:{0:{},15:{o:1},45:{t:"t32,0"},55:{},85:{t:""},86:{o:0},100:{}}}]},question:{d:400,it:1,sh:[{i:{a:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM16,24.75c-0.966,0-1.75-0.782-1.75-1.75c0-0.965,0.784-1.75,1.75-1.75c0.966,0,1.75,0.784,1.75,1.75C17.75,23.968,16.967,24.75,16,24.75zM20.94,15.28c-0.443,0.579-0.925,1.068-1.444,1.469c-0.523,0.402-1.003,0.802-1.442,1.202c-0.441,0.402-0.644,0.972-0.61,1.709v0.434h-3.081c0-1.061,0.09-1.884,0.268-2.479c0.179-0.594,0.758-1.275,1.735-2.045c0.489-0.384,0.906-0.768,1.247-1.155c0.343-0.383,0.513-0.865,0.513-1.443c0-1.282-0.546-2.003-1.635-2.166c-1.094-0.159-1.883,0.048-2.372,0.627c-0.424,0.45,0.027,1.151-0.618,1.774c-0.634,0.612-1.672,0.229-2.241,0.198c-0.57-0.029-0.855-0.481-0.855-1.346c0-0.481,0.121-0.971,0.366-1.469c0.244-0.498,0.561-0.921,0.955-1.277c0.683-0.606,1.579-1.024,2.688-1.249c1.109-0.224,2.2-0.208,3.275,0.046c1.074,0.257,1.995,0.771,2.762,1.542c0.766,0.771,1.148,1.828,1.148,3.177C21.597,13.885,21.379,14.704,20.94,15.28z",
s:"none",fl:"#333"}},f:{0:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM16,16.578c-0.05,0-0.09-0.023-0.09-0.052s0.041-0.052,0.09-0.052s0.09,0.023,0.09,0.052S16.05,16.578,16,16.578zM16.255,16.297c-0.022,0.017-0.048,0.031-0.075,0.043c-0.027,0.012-0.051,0.024-0.074,0.036c-0.023,0.012-0.033,0.029-0.031,0.051v0.013h-0.159c0-0.031,0.004-0.056,0.014-0.073c0.009-0.018,0.039-0.038,0.09-0.061c0.025-0.012,0.047-0.023,0.064-0.035c0.018-0.011,0.026-0.026,0.026-0.043c0-0.038-0.028-0.059-0.084-0.064c-0.056-0.005-0.097,0.001-0.122,0.019c-0.022,0.013,0.001,0.034-0.032,0.053c-0.032,0.018-0.086,0.007-0.115,0.006c-0.03-0.001-0.044-0.015-0.044-0.04c0-0.015,0.006-0.029,0.019-0.043c0.013-0.015,0.029-0.027,0.049-0.038c0.035-0.018,0.082-0.03,0.139-0.037c0.057-0.006,0.114-0.006,0.169,0.001c0.056,0.008,0.104,0.023,0.143,0.046c0.04,0.023,0.06,0.054,0.06,0.094C16.289,16.255,16.278,16.28,16.255,16.297z",
t:"s0.2"},30:{t:"s1"},60:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM16,24.75c-0.966,0-1.75-0.782-1.75-1.75c0-0.965,0.784-1.75,1.75-1.75c0.966,0,1.75,0.784,1.75,1.75C17.75,23.968,16.967,24.75,16,24.75zM20.94,15.28c-0.443,0.579-0.925,1.068-1.444,1.469c-0.523,0.402-1.003,0.802-1.442,1.202c-0.441,0.402-0.644,0.972-0.61,1.709v0.434h-3.081c0-1.061,0.09-1.884,0.268-2.479c0.179-0.594,0.758-1.275,1.735-2.045c0.489-0.384,0.906-0.768,1.247-1.155c0.343-0.383,0.513-0.865,0.513-1.443c0-1.282-0.546-2.003-1.635-2.166c-1.094-0.159-1.883,0.048-2.372,0.627c-0.424,0.45,0.027,1.151-0.618,1.774c-0.634,0.612-1.672,0.229-2.241,0.198c-0.57-0.029-0.855-0.481-0.855-1.346c0-0.481,0.121-0.971,0.366-1.469c0.244-0.498,0.561-0.921,0.955-1.277c0.683-0.606,1.579-1.024,2.688-1.249c1.109-0.224,2.2-0.208,3.275,0.046c1.074,0.257,1.995,0.771,2.762,1.542c0.766,0.771,1.148,1.828,1.148,3.177C21.597,13.885,21.379,14.704,20.94,15.28z",
e:"bounce"},100:{}}}]},"quote-left":{d:400,it:1,sh:[{i:{a:{p:"M13.883,7.577c-3.633,2.276-5.742,5.404-5.742,8.859c0,1.075,0.186,1.61,0.56,1.61c0,0,0.187-0.254,1.121-0.278c1.401-0.036,3.833,1.129,3.833,4.244c0,1.751-1.167,3.988-4.085,3.988c-2.626,0-5.35-2.237-5.35-6.811c0-3.793,1.167-7.488,5.251-10.979c1.774-1.472,2.908-2.241,3.397-2.209C13.752,6.059,14.238,7.324,13.883,7.577z",s:"none",fl:"#333"}},f:{30:{t:"r18,9,22"},100:{t:"",e:"elastic"}},fIE:{30:{t:"r18,7.5,20.5"},100:{t:"",e:"elastic"}}},{i:{a:{p:"M26.884,7.577c-3.634,2.276-5.743,5.404-5.743,8.859c0,1.075,0.187,1.61,0.56,1.61c0,0,0.188-0.254,1.121-0.278c1.401-0.036,3.833,1.129,3.833,4.244c0,1.751-1.167,3.988-4.086,3.988c-2.626,0-5.35-2.237-5.35-6.811c0-3.793,1.167-7.488,5.251-10.979c1.774-1.472,2.908-2.241,3.397-2.209C26.751,6.059,27.237,7.324,26.884,7.577z",
s:"none",fl:"#333"}},f:{30:{t:"r18,22,22"},100:{t:"",e:"elastic"}},fIE:{30:{t:"r18,20.5,20.5"},100:{t:"",e:"elastic"}}}]},"quote-right":{d:400,it:1,sh:[{i:{a:{p:"M18.116,24.424c3.634-2.276,5.742-5.404,5.742-8.86c0-1.075-0.186-1.61-0.56-1.61c0,0-0.187,0.254-1.12,0.278c-1.401,0.036-3.833-1.129-3.833-4.244C18.346,8.237,19.513,6,22.431,6c2.627,0,5.351,2.237,5.351,6.811c0,3.793-1.168,7.488-5.252,10.979c-1.774,1.472-2.908,2.241-3.396,2.209C18.248,25.941,17.762,24.677,18.116,24.424z",s:"none",fl:"#333"}},
f:{30:{t:"r18,23,10"},100:{t:"",e:"elastic"}},fIE:{30:{t:"r18,21.5,8.5"},100:{t:"",e:"elastic"}}},{i:{a:{p:"M5.116,24.424c3.634-2.276,5.743-5.404,5.743-8.86c0-1.075-0.187-1.61-0.56-1.61c0,0-0.188,0.254-1.121,0.278c-1.401,0.036-3.833-1.129-3.833-4.244C5.346,8.237,6.513,6,9.432,6c2.626,0,5.35,2.237,5.35,6.811c0,3.793-1.167,7.488-5.251,10.979c-1.774,1.472-2.908,2.241-3.397,2.209C5.249,25.941,4.763,24.677,5.116,24.424z",s:"none",fl:"#333"}},f:{30:{t:"r18,10,10"},100:{t:"",e:"elastic"}},fIE:{30:{t:"r18,8.5,8.5"},
100:{t:"",e:"elastic"}}}]},raphael:{d:0,it:1,sh:[{i:{a:{p:"M28.19,11.637l-7.826-7.828L20.36,3.812C19.245,2.692,17.699,2,15.999,2c-1.701,0-3.244,0.693-4.361,1.812h-0.001L3.81,11.639C2.642,12.805,2,14.355,2,16.004c0,1.65,0.642,3.201,1.81,4.365l7.951,7.943C12.911,29.4,14.409,30,16,30c1.648,0,3.199-0.639,4.365-1.809c0,0,6.683-6.4,8.62-8.793C29.739,18.468,30,17.23,30,16.001C30,14.352,29.357,12.801,28.19,11.637zM16,4.287c2.141,0,3.881,1.742,3.881,3.881c0,2.141-1.74,3.882-3.881,3.882c-2.14,0-3.88-1.741-3.88-3.882C12.12,6.029,13.86,4.287,16,4.287zM7.489,18.426c0.065,0.967,0.199,1.898,0.391,2.785l-2.457-2.455c-0.735-0.734-1.141-1.712-1.141-2.751c0-1.039,0.405-2.016,1.141-2.75l3.007-3.009C7.646,12.919,7.309,15.731,7.489,18.426zM18.75,26.588c-0.734,0.732-1.712,1.139-2.75,1.139c-0.723,0-1.583-0.282-2.015-0.566c-0.43-0.283-1.068-0.976-1.387-1.324c-1.498-1.636-2.623-4.42-2.832-7.557c-0.158-2.376,0.128-4.849,0.8-7.206c0.66,5.167,4.751,10.268,9.576,11.487c0.785,0.203,1.558,0.301,2.303,0.301c0.011,0,0.022,0,0.031,0L18.75,26.588zM27.083,18.133c-0.252,0.338-0.506,0.633-0.775,0.889l-0.014,0.018c-1.252,1.191-2.667,1.529-3.867,1.529c-0.661,0-1.257-0.102-1.726-0.221c-2.743-0.689-5.726-3.049-7.091-6.492c0.735,0.311,1.542,0.482,2.39,0.482c3.184,0,5.81-2.425,6.133-5.523l4.444,4.445c0.736,0.73,1.141,1.707,1.141,2.745C27.718,16.773,27.495,17.506,27.083,18.133z",
s:"none",fl:"#333"}},f:{}}]},recycled:{d:300,it:3,sh:[{i:{a:{p:"M19.104,10.78l-4.204-6.259C14.732,4.233,14.869,4,15.2,4h3.291c0.331,0,0.75,0.224,0.935,0.501l3.151,4.273l1.736-1.002c0.286-0.166,0.45-0.04,0.364,0.28l-1.337,4.914c-0.087,0.321-0.418,0.511-0.736,0.425l-5.173-1.153c-0.321-0.084-0.349-0.29-0.063-0.456L19.104,10.78zM12.696,5.416L9.525,10.1c-0.167,0.288-0.167,0.754,0,1.042l1.805,2.834c0.165,0.288,0.435,0.288,0.6,0l3.175-4.685c0.165-0.288,0.165-0.754,0-1.042l-1.808-2.833C13.13,5.128,12.86,5.128,12.696,5.416z",
s:"none",fl:"#333"}},f:{"14.3":{t:"s1.25"},"28.6":{t:"s1.25"},"42.9":{t:"s1"},"57.2":{t:"s1"},"71.5":{t:"s1"},"85.8":{t:"s1"},100:{t:"s1"}}},{i:{a:{p:"M21.891,24.053h7.42c0.331,0,0.479,0.24,0.333,0.539l-1.469,2.934c-0.146,0.297-0.538,0.537-0.869,0.537h-5.415v2.006c0,0.33-0.189,0.41-0.425,0.174l-3.586-3.615c-0.235-0.234-0.233-0.615,0-0.85l3.586-3.906c0.233-0.234,0.425-0.156,0.425,0.176V24.053zM29.919,21.527l-3.278-4.975c-0.189-0.288-0.654-0.521-1.032-0.521h-3.405c-0.378,0-0.532,0.233-0.343,0.521l3.278,4.975c0.19,0.287,0.654,0.52,1.032,0.52h3.405C29.954,22.047,30.108,21.814,29.919,21.527z",
s:"none",fl:"#333"}},f:{"14.3":{t:"s1"},"28.6":{t:"s1"},"42.9":{t:"s1.25"},"57.2":{t:"s1.25"},"71.5":{t:"s1"},"85.8":{t:"s1"},100:{t:"s1"}}},{i:{a:{p:"M8.997,20.115l-3.709,6.424c-0.166,0.289-0.45,0.297-0.634,0.02L2.848,23.82c-0.184-0.277-0.198-0.734-0.031-1.023l2.707-4.688l-1.735-1.005C3.5,16.94,3.527,16.736,3.847,16.65l4.925-1.298c0.321-0.086,0.652,0.105,0.736,0.425l1.59,5.061c0.088,0.318-0.077,0.445-0.366,0.279L8.997,20.115zM7.324,28.063h5.744c0.331,0,0.736-0.268,0.903-0.602l1.604-2.807c0.167-0.334,0.031-0.602-0.3-0.602H9.529c-0.333,0-0.736,0.268-0.901,0.602l-1.605,2.807C6.858,27.795,6.992,28.063,7.324,28.063z",
s:"none",fl:"#333"}},f:{"14.3":{t:"s1"},"28.6":{t:"s1"},"42.9":{t:"s1"},"57.2":{t:"s1"},"71.5":{t:"s1.25"},"85.8":{t:"s1.25"},100:{t:"s1"}}}]},redo:{d:500,it:2,sh:[{i:{a:{p:"M29.658,12.875l-8.811,8.856C20.379,22.199,20,22.043,20,21.379V16c0,0-16,0-16,14C4,6,20,8,20,8V2.622c0-0.664,0.379-0.82,0.848-0.352l8.811,8.857C30.113,11.61,30.113,12.394,29.658,12.875z",s:"none",fl:"#333"}},f:{0:{p:"M4.039,26.021l0.447,0.555c0.024,0.031,0.016,0.055-0.017,0.055l-0.347,0.027c0,0-0.217,1.796-0.195,3.343c0.021-1.133-0.021-3.343-0.021-3.343l-0.375-0.015c-0.033,0.001-0.041-0.023-0.018-0.053l0.438-0.567C3.975,25.993,4.015,25.993,4.039,26.021z"},
15:{p:"M9.228,16.478l0.258,2.869c0.014,0.153-0.07,0.197-0.188,0.099l-0.951-0.798C8.348,18.647,4.2,21.7,4,30c0.2-6.6,2.935-12.538,2.935-12.538l-0.951-0.797c-0.118-0.098-0.089-0.189,0.064-0.202l2.871-0.244C9.072,16.21,9.21,16.326,9.228,16.478z"},27:{p:"M14.853,13.411l-2.461,5.312c-0.131,0.283-0.324,0.275-0.431-0.018l-0.862-2.371C11.099,16.334,3.4,20.8,4,30C3.3,19.2,9.816,12.812,9.816,12.812l-0.862-2.37C8.847,10.15,8.99,10.02,9.272,10.152l5.301,2.488C14.85,12.78,14.975,13.125,14.853,13.411z"},39:{p:"M23.737,12.88l-6.777,6.813c-0.36,0.36-0.652,0.24-0.652-0.271v-4.138C16.308,15.284,4,16.7,4,30C4,11.538,16.308,9.131,16.308,9.131V4.993c0-0.511,0.292-0.631,0.652-0.271l6.777,6.813C24.087,11.907,24.087,12.51,23.737,12.88z"},
50:{p:"M29.658,12.875l-8.811,8.856C20.379,22.199,20,22.043,20,21.379V16c0,0-16,0-16,14C4,6,20,8,20,8V2.622c0-0.664,0.379-0.82,0.848-0.352l8.811,8.857C30.113,11.61,30.113,12.394,29.658,12.875z"},100:{}}}]},refresh:{d:1E3,it:1,sh:[{i:{a:{p:"M4.602,16C4.602,9.706,9.705,4.6,16,4.6c3.583,0,6.777,1.657,8.867,4.244l2.709-2.709C27.81,5.901,28,5.979,28,6.311v7.09c0,0.331-0.269,0.6-0.6,0.6h-7.09c-0.33,0-0.408-0.19-0.176-0.424l2.67-2.669C21.254,8.839,18.785,7.499,16,7.499c-4.69,0-8.499,3.807-8.499,8.501H4.602zM26.2,16h-0.499c-0.663,0-1.191,0.538-1.283,1.194C23.836,21.32,20.289,24.5,16,24.5c-2.782,0-5.243-1.348-6.794-3.417l2.66-2.658c0.232-0.234,0.154-0.424-0.176-0.424H4.6c-0.331,0-0.6,0.268-0.6,0.6v7.09c0,0.33,0.19,0.408,0.424,0.176L7.13,23.16C9.22,25.746,12.417,27.4,16,27.4c5.89,0,10.739-4.469,11.337-10.203C27.407,16.538,26.863,16,26.2,16z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},remove:{d:400,it:1,sh:[{i:{a:{p:"M21.574,6.424L16,12l-5.576-5.576c-0.234-0.234-0.614-0.234-0.849,0L6.424,9.577c-0.234,0.234-0.234,0.614,0,0.849L12,16l-5.576,5.574c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001L16,20l5.574,5.575c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154c0.233-0.233,0.233-0.613-0.001-0.848L20,16l5.576-5.575c0.233-0.234,0.233-0.614,0-0.849l-3.154-3.152C22.188,6.19,21.809,6.19,21.574,6.424z",
s:"none",fl:"#333"}},f:{0:{p:"M16,12L16,12L16,12c-0.234-0.234-0.614-0.234-0.849,0L12,15.152c-0.234,0.234-0.234,0.614,0,0.849V16l0,0c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001V20l-0.001,0.001c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154C20.234,16.614,20.234,16.234,20,16l0,0l0.002,0.001c0.233-0.234,0.233-0.614,0-0.849L16.848,12C16.614,11.766,16.234,11.766,16,12z"},10:{},20:{p:"M16,12L16,12l-5.576-5.576c-0.234-0.234-0.614-0.234-0.849,0L6.424,9.577c-0.234,0.234-0.234,0.614,0,0.849L12,16l0,0c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001V20l-0.001,0.001c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154C20.234,16.614,20.234,16.234,20,16l0,0l0.002,0.001c0.233-0.234,0.233-0.614,0-0.849L16.848,12C16.614,11.766,16.234,11.766,16,12z"},
30:{p:"M21.574,6.424L16,12l-5.576-5.576c-0.234-0.234-0.614-0.234-0.849,0L6.424,9.577c-0.234,0.234-0.234,0.614,0,0.849L12,16l0,0c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001V20l-0.001,0.001c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154C20.234,16.614,20.234,16.234,20,16l0,0l5.576-5.575c0.233-0.234,0.233-0.614,0-0.849l-3.154-3.152C22.188,6.19,21.809,6.19,21.574,6.424z"},40:{p:"M21.574,6.424L16,12l-5.576-5.576c-0.234-0.234-0.614-0.234-0.849,0L6.424,9.577c-0.234,0.234-0.234,0.614,0,0.849L12,16l0,0c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001V20l5.574,5.575c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154c0.233-0.233,0.233-0.613-0.001-0.848L20,16l5.576-5.575c0.233-0.234,0.233-0.614,0-0.849l-3.154-3.152C22.188,6.19,21.809,6.19,21.574,6.424z"},
50:{p:"M21.574,6.424L16,12l-5.576-5.576c-0.234-0.234-0.614-0.234-0.849,0L6.424,9.577c-0.234,0.234-0.234,0.614,0,0.849L12,16l-5.576,5.574c-0.234,0.234-0.234,0.614,0,0.849l3.151,3.152c0.234,0.234,0.614,0.234,0.849,0.001L16,20l5.574,5.575c0.234,0.234,0.614,0.234,0.848,0.001l3.154-3.154c0.233-0.233,0.233-0.613-0.001-0.848L20,16l5.576-5.575c0.233-0.234,0.233-0.614,0-0.849l-3.154-3.152C22.188,6.19,21.809,6.19,21.574,6.424z"},100:{}}}]},"remove-alt":{d:400,it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c7.731,0,14-6.268,14-14S23.731,2,16,2zM23.576,20.375c0.233,0.234,0.233,0.614,0,0.848l-2.354,2.354c-0.233,0.233-0.613,0.233-0.848,0L16,19.2l-4.375,4.376c-0.234,0.233-0.614,0.233-0.849-0.001l-2.352-2.352c-0.234-0.234-0.234-0.614,0-0.849L12.8,16l-4.375-4.375c-0.234-0.234-0.234-0.614,0-0.849l2.352-2.352c0.234-0.234,0.614-0.234,0.849,0L16,12.799l4.375-4.375c0.234-0.234,0.614-0.234,0.848,0l2.354,2.352c0.233,0.234,0.233,0.614,0,0.849L19.2,16L23.576,20.375z",
s:"none",fl:"#333"}},f:{0:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c7.731,0,14-6.268,14-14S23.731,2,16,2zM16.098,16.057c0.003,0.003,0.003,0.008,0,0.011l-0.03,0.03c-0.003,0.003-0.008,0.003-0.011,0L16,16.042l-0.056,0.056c-0.003,0.003-0.008,0.003-0.011,0l-0.03-0.03c-0.003-0.003-0.003-0.008,0-0.011L15.959,16l-0.057-0.056c-0.003-0.003-0.003-0.008,0-0.011l0.03-0.03c0.003-0.003,0.008-0.003,0.011,0L16,15.959l0.057-0.057c0.003-0.003,0.008-0.003,0.011,0l0.03,0.03c0.003,0.003,0.003,0.008,0,0.011L16.042,16L16.098,16.057z",
t:"s0.2"},30:{t:"s1"},35:{},60:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c7.731,0,14-6.268,14-14S23.731,2,16,2zM23.576,20.375c0.233,0.234,0.233,0.614,0,0.848l-2.354,2.354c-0.233,0.233-0.613,0.233-0.848,0L16,19.2l-4.375,4.376c-0.234,0.233-0.614,0.233-0.849-0.001l-2.352-2.352c-0.234-0.234-0.234-0.614,0-0.849L12.8,16l-4.375-4.375c-0.234-0.234-0.234-0.614,0-0.849l2.352-2.352c0.234-0.234,0.614-0.234,0.849,0L16,12.799l4.375-4.375c0.234-0.234,0.614-0.234,0.848,0l2.354,2.352c0.233,0.234,0.233,0.614,0,0.849L19.2,16L23.576,20.375z",
e:"bounce"},100:{}}}]},"remove-circle":{d:400,it:1,sh:[{i:{a:{p:"M19.43,10.108L16,13.539l-3.431-3.43c-0.145-0.145-0.378-0.145-0.522,0l-1.939,1.939c-0.145,0.144-0.145,0.378,0,0.522l3.43,3.43l-3.43,3.43c-0.145,0.145-0.145,0.378,0,0.522l1.939,1.939c0.144,0.145,0.377,0.145,0.522,0L16,18.461l3.43,3.431c0.145,0.145,0.378,0.145,0.521,0l1.94-1.94c0.145-0.144,0.145-0.377,0-0.521L18.461,16l3.431-3.43c0.145-0.144,0.145-0.378,0-0.522l-1.94-1.939C19.808,9.964,19.574,9.964,19.43,10.108z",s:"none",fl:"#333"}},f:{0:{p:"M16,13.539L16,13.539L16,13.539c-0.144-0.144-0.378-0.144-0.522,0l-1.939,1.94c-0.144,0.144-0.144,0.378,0,0.522v0l0,0c-0.144,0.144-0.144,0.378,0,0.522l1.939,1.939c0.145,0.145,0.378,0.145,0.522,0.001v-0.002l-0.001,0.001c0.145,0.145,0.378,0.145,0.522,0.001l1.941-1.941c0.144-0.144,0.144-0.377-0.001-0.521l0,0l0.002,0c0.144-0.144,0.144-0.378,0-0.522l-1.941-1.94C16.378,13.395,16.144,13.395,16,13.539z"},
10:{},20:{p:"M16,13.539L16,13.539l-3.431-3.43c-0.145-0.145-0.378-0.145-0.522,0l-1.939,1.939c-0.145,0.144-0.145,0.378,0,0.522l3.43,3.43l0,0c-0.144,0.144-0.144,0.378,0,0.522l1.939,1.939c0.145,0.145,0.378,0.145,0.522,0.001v-0.002l-0.001,0.001c0.145,0.145,0.378,0.145,0.522,0.001l1.941-1.941c0.144-0.144,0.144-0.377-0.001-0.521l0,0l0.002,0c0.144-0.144,0.144-0.378,0-0.522l-1.941-1.94C16.378,13.395,16.144,13.395,16,13.539z"},30:{p:"M19.43,10.108L16,13.539l-3.431-3.43c-0.145-0.145-0.378-0.145-0.522,0l-1.939,1.939c-0.145,0.144-0.145,0.378,0,0.522l3.43,3.43l0,0c-0.144,0.144-0.144,0.378,0,0.522l1.939,1.939c0.145,0.145,0.378,0.145,0.522,0.001v-0.002l-0.001,0.001c0.145,0.145,0.378,0.145,0.522,0.001l1.941-1.941c0.144-0.144,0.144-0.377-0.001-0.521l0,0l3.431-3.43c0.145-0.144,0.145-0.378,0-0.522l-1.94-1.939C19.808,9.964,19.574,9.964,19.43,10.108z"},
40:{p:"M19.43,10.108L16,13.539l-3.431-3.43c-0.145-0.145-0.378-0.145-0.522,0l-1.939,1.939c-0.145,0.144-0.145,0.378,0,0.522l3.43,3.43l0,0c-0.144,0.144-0.144,0.378,0,0.522l1.939,1.939c0.145,0.145,0.378,0.145,0.522,0.001v-0.002l3.43,3.431c0.145,0.145,0.378,0.145,0.521,0l1.94-1.94c0.145-0.144,0.145-0.377,0-0.521L18.461,16l3.431-3.43c0.145-0.144,0.145-0.378,0-0.522l-1.94-1.939C19.808,9.964,19.574,9.964,19.43,10.108z"},50:{p:"M19.43,10.108L16,13.539l-3.431-3.43c-0.145-0.145-0.378-0.145-0.522,0l-1.939,1.939c-0.145,0.144-0.145,0.378,0,0.522l3.43,3.43l-3.43,3.43c-0.145,0.145-0.145,0.378,0,0.522l1.939,1.939c0.144,0.145,0.377,0.145,0.522,0L16,18.461l3.43,3.431c0.145,0.145,0.378,0.145,0.521,0l1.94-1.94c0.145-0.144,0.145-0.377,0-0.521L18.461,16l3.431-3.43c0.145-0.144,0.145-0.378,0-0.522l-1.94-1.939C19.808,9.964,19.574,9.964,19.43,10.108z"},
100:{}}},{i:{a:{p:"M16,2C8.269,2,2,8.268,2,16c0,7.732,6.269,14,14,14c7.732,0,14-6.268,14-14C30,8.268,23.732,2,16,2zM16,27C9.925,27,5,22.075,5,16C5,9.924,9.925,5,16,5c6.075,0,11,4.924,11,11C27,22.075,22.075,27,16,27z",s:"none",fl:"#333"}},f:{}}]},"resize-big":{d:500,it:2,sh:[{i:{a:{p:"M25.59,13.368C25.814,13.598,26,13.52,26,13.197V6.584C26,6.262,25.738,6,25.416,6h-6.613c-0.322,0-0.4,0.186-0.17,0.41l2.594,2.594L9.004,21.227L6.41,18.633C6.186,18.402,6,18.48,6,18.803v6.613C6,25.738,6.262,26,6.584,26h6.613c0.322,0,0.4-0.184,0.171-0.41l-2.596-2.596l12.222-12.222L25.59,13.368z",
s:"none",fl:"#333"}},f:{50:{t:"s1.26"},100:{t:""}}}]},"resize-big-alt":{d:500,it:2,sh:[{i:{a:{p:"M23.521,8h-5.426c-0.264,0-0.328,0.152-0.139,0.336l2.127,2.128l-9.619,9.619l-2.128-2.127C8.152,17.768,8,17.832,8,18.096v5.426C8,23.785,8.215,24,8.479,24h5.426c0.264,0,0.328-0.15,0.14-0.336l-2.13-2.129l9.62-9.62l2.129,2.13C23.848,14.233,24,14.169,24,13.905V8.479C24,8.215,23.785,8,23.521,8z",s:"none",fl:"#333"}},f:{50:{t:"s1.26"},100:{t:""}}},{i:{a:{p:"M26.77,2H5.23C3.445,2,2,3.445,2,5.23V26.77C2,28.551,3.445,30,5.23,30H26.77c1.787,0,3.23-1.449,3.23-3.23V5.23C30,3.445,28.557,2,26.77,2zM28,26.82c0,0.678-0.547,1.172-1.129,1.18H5.14C4.624,28,4,27.586,4,26.908V5.091C4,4.412,4.466,4,5.14,4h21.731C27.547,4,28,4.412,28,5.091V26.82z",
s:"none",fl:"#333"}},f:{}}]},"resize-horizontal":{d:400,it:2,sh:[{i:{a:{p:"M27.885,15.537l-5.33-5.615C22.248,9.665,22,9.757,22,10.116v3.923l-12,0v-3.923c0-0.364-0.249-0.448-0.556-0.194l-5.33,5.615c-0.306,0.257-0.306,0.675,0,0.928l5.33,5.614C9.751,22.335,10,22.243,10,21.883v-3.921h12v3.921c0,0.364,0.248,0.45,0.555,0.196l5.33-5.614C28.191,16.208,28.191,15.79,27.885,15.537z",s:"none",fl:"#333"}},f:{"33.5":{t:"s0.8,1,16,16"},67:{t:"s1.2,1,16,16"},100:{t:""}}}]},"resize-horizontal-alt":{d:400,it:2,sh:[{i:{a:{p:"M25.805,16.605l-5.334-4.48C20.211,11.906,20,11.984,20,12.289V16h-8v-3.711c0-0.309-0.211-0.381-0.471-0.164l-5.334,4.48c-0.26,0.219-0.26,0.574,0,0.789l5.334,4.48C11.789,22.094,12,22.016,12,21.711V18h8v3.711c0,0.309,0.211,0.381,0.471,0.164l5.334-4.48C26.064,17.176,26.064,16.82,25.805,16.605z",
s:"none",fl:"#333"}},f:{"33.5":{t:"s0.8,1,16,16"},67:{t:"s1.2,1,16,16"},100:{t:""}}},{i:{a:{p:"M26.77,28H5.23C3.445,28,2,26.551,2,24.77V9.23C2,7.445,3.445,6,5.23,6H26.77C28.557,6,30,7.445,30,9.23V24.77C30,26.551,28.557,28,26.77,28L26.77,28zM28,9.09C28,8.412,27.547,8,26.871,8H5.14C4.466,8,4,8.412,4,9.09v15.818C4,25.586,4.624,26,5.14,26h21.731C27.453,25.992,28,25.498,28,24.82V9.09z",s:"none",fl:"#333"}},f:{}}]},"resize-small":{d:500,it:2,sh:[{i:{a:{p:"M25.809,4.424l-4.803,4.804L18.41,6.632C18.186,6.402,18,6.48,18,6.803v6.613C18,13.738,18.262,14,18.584,14h6.613c0.322,0,0.4-0.186,0.17-0.41l-2.594-2.594l4.803-4.804c0.234-0.234,0.233-0.614,0-0.849l-0.92-0.919C26.423,4.19,26.043,4.19,25.809,4.424zM6.192,27.576l4.804-4.803l2.594,2.594c0.225,0.23,0.41,0.152,0.41-0.17v-6.613C14,18.262,13.738,18,13.416,18H6.803c-0.322,0-0.4,0.184-0.171,0.41l2.596,2.596l-4.804,4.803c-0.234,0.234-0.234,0.614,0,0.848l0.919,0.92C5.578,27.81,5.958,27.811,6.192,27.576z",
s:"none",fl:"#333"}},f:{50:{t:"s0.74"},100:{t:""}}}]},"resize-small-alt":{d:500,it:2,sh:[{i:{a:{p:"M24.406,6.144l-3.94,3.941l-2.129-2.13C18.152,7.767,18,7.831,18,8.095v5.426C18,13.785,18.215,14,18.479,14h5.425c0.265,0,0.329-0.152,0.14-0.336l-2.128-2.128l3.94-3.941c0.192-0.192,0.191-0.504,0-0.696l-0.755-0.754C24.91,5.952,24.599,5.952,24.406,6.144zM7.594,25.856l3.941-3.94l2.128,2.128C13.848,24.233,14,24.169,14,23.904v-5.425C14,18.215,13.785,18,13.521,18H8.095c-0.264,0-0.328,0.15-0.14,0.337l2.13,2.129l-3.941,3.94c-0.192,0.192-0.192,0.504,0,0.695l0.754,0.755C7.09,26.048,7.402,26.049,7.594,25.856zM26.77,30H5.23C3.445,30,2,28.551,2,26.77V5.23C2,3.445,3.445,2,5.23,2H26.77C28.557,2,30,3.445,30,5.23V26.77C30,28.551,28.557,30,26.77,30L26.77,30zM28,5.091C28,4.412,27.547,4,26.871,4H5.14C4.466,4,4,4.412,4,5.091v21.817C4,27.586,4.624,28,5.14,28h21.731C27.453,27.992,28,27.498,28,26.82V5.091z",
s:"none",fl:"#333"}},f:{50:{t:"s0.74"},100:{t:""}}}]},"resize-vertical":{d:400,it:2,sh:[{i:{a:{p:"M15.537,4.115L9.922,9.446C9.665,9.752,9.756,10,10.116,10h3.923v12h-3.923c-0.364,0-0.448,0.249-0.194,0.556l5.615,5.33c0.257,0.306,0.675,0.306,0.928,0l5.615-5.33C22.335,22.249,22.243,22,21.883,22h-3.921V10h3.921c0.364,0,0.45-0.248,0.196-0.554l-5.615-5.331C16.208,3.809,15.79,3.809,15.537,4.115z",s:"none",fl:"#333"}},f:{"33.5":{t:"s1,0.8,16,16"},67:{t:"s1,1.2,16,16"},100:{t:""}}}]},"resize-vertical-alt":{d:400,
it:2,sh:[{i:{a:{p:"M16.605,6.195l-4.48,5.334C11.906,11.789,11.984,12,12.289,12H16v8h-3.711c-0.309,0-0.381,0.211-0.164,0.471l4.48,5.334c0.219,0.26,0.574,0.26,0.789,0l4.48-5.334C22.094,20.211,22.016,20,21.711,20H18v-8h3.711c0.309,0,0.381-0.211,0.164-0.471l-4.48-5.334C17.176,5.936,16.82,5.936,16.605,6.195z",s:"none",fl:"#333"}},f:{"33.5":{t:"s1,0.8,16,16"},67:{t:"s1,1.2,16,16"},100:{t:""}}},{i:{a:{p:"M28,5.23V26.77c0,1.785-1.449,3.23-3.23,3.23H9.23C7.445,30,6,28.555,6,26.77V5.23C6,3.443,7.445,2,9.23,2H24.77C26.551,2,28,3.443,28,5.23L28,5.23zM9.09,4C8.412,4,8,4.453,8,5.129V26.86C8,27.534,8.412,28,9.09,28h15.818C25.586,28,26,27.376,26,26.86V5.129C25.992,4.547,25.498,4,24.82,4H9.09z",
s:"none",fl:"#333"}},f:{}}]},responsive:{d:1400,it:1,sh:[{i:{a:{p:"M29.05,22c0,0.582-0.467,1.05-1.05,1.05c-0.58,0-1.05-0.47-1.05-1.05s0.47-1.05,1.05-1.05C28.583,20.95,29.05,21.42,29.05,22zM5.997,29H4l0.041,1.801C4.041,31.463,4.577,32,5.239,32h23.563C29.464,32,30,31.463,30,30.801V13.199C30,12.537,29.464,12,28.803,12H23v2h3l0.006,16H5.997V29z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},90:{o:1},100:{}}},{i:{a:{p:"M2,3.2v23.601C2,27.463,2.537,28,3.2,28h17.601C21.463,28,22,27.463,22,26.801V3.2C22,2.537,21.463,2,20.801,2H3.2C2.537,2,2,2.537,2,3.2zM12,27.05c-0.581,0-1.05-0.467-1.05-1.05c0-0.58,0.471-1.05,1.05-1.05s1.05,0.47,1.05,1.05C13.05,26.583,12.579,27.05,12,27.05zM20,24H4V4h16V24z",
t:"",s:"none",fl:"#333"}},f:{10:{t:"t4,1r-90"},60:{},70:{t:""},100:{}},fIE:{10:{t:"t4,1r-90,10.5,13.5"},60:{},70:{t:""},100:{}}},{i:{a:{p:"M18,10H6V8h12V10zM18,12H6v2h12V12zM18,16H6v2h12V16z",t:"",o:0,s:"none",fl:"#333"}},f:{0:{o:1},10:{t:"t4,1r-90,12,15"},20:{},25:{t:"t3,3r0,12,15"},30:{},35:{t:"t3,3r0,12,15s1.5,1,12,16"},60:{},70:{t:"t-2,-1r90,12,15s1.5,1,12,16"},75:{},80:{t:""},90:{o:0},100:{}},fIE:{0:{o:1},10:{t:"t4,1r-90,10.5,13.5"},20:{},25:{t:"t3,3r0,10.5,13.5"},30:{},35:{t:"t3,3r0,10.5,15s1.5,1,11.5,16"},
60:{},70:{t:"t-2,-1r90,10.5,15s1.5,1,11.5,16"},75:{},80:{t:""},90:{o:0},100:{}}}]},"responsive-menu":{d:800,it:1,sh:[{i:{a:{p:"M29.4,26H2.6C2.269,26,2,25.731,2,25.4V22.6C2,22.269,2.269,22,2.6,22h26.8c0.331,0,0.6,0.269,0.6,0.6V25.4C30,25.731,29.731,26,29.4,26z",s:"none",fl:"#333"}},f:{0:{t:"s0.2,0.6,2,6t0,-16"},50:{},70:{t:""},100:{}}},{i:{a:{p:"M29.4,18H2.6C2.269,18,2,17.731,2,17.4v-2.8C2,14.269,2.269,14,2.6,14h26.8c0.331,0,0.6,0.269,0.6,0.6v2.8C30,17.731,29.731,18,29.4,18z",s:"none",fl:"#333"}},
f:{0:{t:"s0.2,0.6,2,6t0,-8"},25:{},45:{t:""},100:{}}},{i:{a:{p:"M29.4,10H2.6C2.269,10,2,9.731,2,9.4V6.6C2,6.269,2.269,6,2.6,6h26.8C29.731,6,30,6.269,30,6.6v2.8C30,9.731,29.731,10,29.4,10z",s:"none",fl:"#333"}},f:{0:{t:"s0.2,1,2,6"},20:{t:""},100:{}}}]},retweet:{d:600,it:2,sh:[{i:{a:{p:"M10,20h7.26l2.98,3.52C20.438,23.785,20.33,24,20,24H6.6C6.269,24,6,23.73,6,23.4V15H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15h-3V20zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3V8.6C26,8.269,25.729,8,25.397,8H12c-0.332,0-0.44,0.214-0.24,0.48L14.714,12h7.29V17z",
s:"none",fl:"#333"}},f:{20:{p:"M10,20h7.26l2.98,3.52C20.438,23.785,20.33,24,20,24H6.6C6.269,24,6,23.73,6,23.4V15H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15h-3V20zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3V8.6C26,8.269,25.729,8,25.397,8h-3.057c-0.332,0-0.44,0.214-0.24,0.48L22,12h0.004V17z"},40:{p:"M10,20h7.26l2.98,3.52C20.438,23.785,20.33,24,20,24H6.6C6.269,24,6,23.73,6,23.4V15H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15h-3V20zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3l0,0c0-0.331-0.271,0-0.603,0h-3.057C22.009,17,21.804,16.734,22.004,17h-0.008H22H22.004z"},
60:{p:"M10,20L10,20l-0.099,3.52c0.197,0.266,0.09,0.48-0.24,0.48H6.6C6.269,24,6,23.73,6,23.4V15H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15h-3V20zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3l0,0c0-0.331-0.271,0-0.603,0h-3.057C22.009,17,21.804,16.734,22.004,17h-0.008H22H22.004z"},80:{p:"M10,15L10,15L10,15c0.197,0.266-0.009,0-0.339,0H6.6C6.269,15,6,15.33,6,15l0,0H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15H10L10,15zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3l0,0c0-0.331-0.271,0-0.603,0h-3.057C22.009,17,21.804,16.734,22.004,17h-0.008H22H22.004z"},
98:{},100:{p:"M10,20h7.26l2.98,3.52C20.438,23.785,20.33,24,20,24H6.6C6.269,24,6,23.73,6,23.4V15H3c-0.726,0-0.961-0.461-0.526-1.033l4.738-5.539c0.435-0.57,1.141-0.57,1.576,0l4.738,5.539C13.962,14.539,13.727,15,13,15h-3V20zM22.004,17H19c-0.729,0-0.967,0.461-0.529,1.033l4.749,5.539c0.439,0.57,1.147,0.57,1.584,0l4.724-5.539C29.965,17.461,29.728,17,29,17h-3V8.6C26,8.269,25.729,8,25.397,8H12c-0.332,0-0.44,0.214-0.24,0.48L14.714,12h7.29V17z"}}}]},rocket:{d:1E3,it:1,sh:[{i:{a:{p:"M6.976,24.759l4.229-1.936c0.408,8.068-9.133,6.825-9.133,6.825s-1-10.085,6.926-9.027L6.976,24.759zM20.827,17.824c0,0,0.9,6.604-7.438,8.881l1.719-5.455c0,0-5.008,0.546-5.009,0.55l0.594-4.953l-5.476,1.709c2.287-8.311,8.907-7.414,8.907-7.414c3.024-4.156,7.568-6.864,10.69-8.08c0.996-0.388,3.289-0.969,4.136-1.039C30,1.938,30.1,2.038,29.995,3.065C29.9,3.993,29.33,6.183,28.927,7.163C27.658,10.258,24.993,14.809,20.827,17.824zM21.499,12.895c1.335,0.001,2.417-1.081,2.416-2.416c-0.003-1.336-1.088-2.421-2.423-2.422c-1.337-0.003-2.419,1.079-2.415,2.416C19.077,11.808,20.162,12.893,21.499,12.895z",
s:"none",fl:"#333"}},f:{"2.5":{t:"r-2,10,22"},5:{t:"r2,10,22"},10:{t:"r-2,10,22"},"12.5":{t:"r0,10,22"},20:{p:"M6.976,24.759l4.229-1.936C11.614,30.892-6.7,38.6-6.7,38.6S1.073,19.563,8.999,20.621L6.976,24.759zM20.827,17.824c0,0,0.9,6.604-7.438,8.881l1.719-5.455c0,0-5.008,0.546-5.009,0.55l0.594-4.953l-5.476,1.709c2.287-8.311,8.907-7.414,8.907-7.414c3.024-4.156,7.568-6.864,10.69-8.08c0.996-0.388,3.289-0.969,4.136-1.039C30,1.938,30.1,2.038,29.995,3.065C29.9,3.993,29.33,6.183,28.927,7.163C27.658,10.258,24.993,14.809,20.827,17.824zM21.499,12.895c1.335,0.001,2.417-1.081,2.416-2.416c-0.003-1.336-1.088-2.421-2.423-2.422c-1.337-0.003-2.419,1.079-2.415,2.416C19.077,11.808,20.162,12.893,21.499,12.895z",
t:"t15,-15"},50:{t:"t40,-40"},51:{t:"t40,40"},52:{p:"M6.976,24.759l4.229-1.936c0.408,8.068-9.133,6.825-9.133,6.825s-1-10.085,6.926-9.027L6.976,24.759zM20.827,17.824c0,0,0.9,6.604-7.438,8.881l1.719-5.455c0,0-5.008,0.546-5.009,0.55l0.594-4.953l-5.476,1.709c2.287-8.311,8.907-7.414,8.907-7.414c3.024-4.156,7.568-6.864,10.69-8.08c0.996-0.388,3.289-0.969,4.136-1.039C30,1.938,30.1,2.038,29.995,3.065C29.9,3.993,29.33,6.183,28.927,7.163C27.658,10.258,24.993,14.809,20.827,17.824zM21.499,12.895c1.335,0.001,2.417-1.081,2.416-2.416c-0.003-1.336-1.088-2.421-2.423-2.422c-1.337-0.003-2.419,1.079-2.415,2.416C19.077,11.808,20.162,12.893,21.499,12.895z",
t:"t-32,32"},80:{},90:{t:"",e:">"},100:{}}}]},"rotate-right":{d:600,it:1,sh:[{i:{a:{p:"M16,4.6c3.583,0,6.777,1.657,8.867,4.244l2.709-2.709C27.81,5.901,28,5.979,28,6.311v7.09c0,0.331-0.269,0.6-0.6,0.6h-7.09c-0.33,0-0.408-0.19-0.176-0.424l2.67-2.669C21.254,8.839,18.785,7.499,16,7.499c-4.69,0-8.499,3.807-8.499,8.501c0,4.691,3.809,8.5,8.499,8.5c4.289,0,7.835-3.18,8.417-7.306C24.51,16.538,25.038,16,25.701,16H26.2c0.663,0,1.207,0.538,1.138,1.197C26.739,22.932,21.891,27.4,16,27.4C9.705,27.4,4.602,22.297,4.602,16C4.602,9.706,9.705,4.6,16,4.6z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"rotate-left":{d:600,it:1,sh:[{i:{a:{p:"M16,4.6c-3.583,0-6.777,1.657-8.867,4.244L4.424,6.135C4.19,5.901,4,5.979,4,6.311v7.09C4,13.731,4.269,14,4.6,14h7.089c0.331,0,0.409-0.19,0.176-0.424l-2.669-2.669c1.551-2.068,4.02-3.408,6.804-3.408c4.69,0,8.499,3.807,8.499,8.501c0,4.691-3.809,8.5-8.499,8.5c-4.289,0-7.835-3.18-8.417-7.306C7.49,16.538,6.962,16,6.299,16H5.8c-0.663,0-1.207,0.538-1.138,1.197C5.261,22.932,10.11,27.4,16,27.4c6.295,0,11.399-5.104,11.399-11.4C27.398,9.706,22.295,4.6,16,4.6z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r-360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r-360,14.5,14.5"}}}]},rss:{d:0,it:1,sh:[{i:{a:{p:"M5.827,22.346C3.712,22.346,2,24.059,2,26.173S3.712,30,5.827,30s3.828-1.713,3.828-3.827S7.942,22.346,5.827,22.346zM2.044,11.454c0,1.75,0,3.499,0,5.249c7.348,0,13.297,5.949,13.297,13.297c1.75,0,3.499,0,5.249,0C20.59,19.852,12.191,11.454,2.044,11.454zM30.037,30h-5.249c0-13.121-10.847-22.745-22.744-22.745V2.006C18.84,2.006,30.037,16.003,30.037,30z",s:"none",fl:"#EF6D12"}},
f:{}}]},safari:{d:0,it:1,sh:[{i:{a:{p:"M29.473,12.204c-2.096-7.441-9.826-11.772-17.268-9.676c-0.674,0.189-1.325,0.427-1.947,0.707c-0.014-0.019-0.028-0.04-0.044-0.059c0.28-0.381,0.359-0.823,0.17-1.185c-0.245-0.463-0.862-0.646-1.536-0.457C8.703,1.576,8.558,1.633,8.42,1.705c-0.795,0.42-1.18,1.201-0.877,1.78C7.729,3.836,8.13,4.026,8.608,4.014C8.613,4.042,8.622,4.07,8.631,4.097c-5.177,3.2-7.836,9.546-6.104,15.694c2.096,7.445,9.827,11.775,17.263,9.682C27.236,27.377,31.566,19.645,29.473,12.204zM8.614,3.547C8.306,3.559,8.057,3.458,7.956,3.268C7.782,2.932,8.091,2.407,8.637,2.119c0.108-0.056,0.224-0.104,0.335-0.134c0.452-0.127,0.861-0.036,0.997,0.224c0.105,0.199,0.039,0.462-0.146,0.706C9.586,2.832,9.319,2.84,9.08,2.966C8.837,3.091,8.679,3.308,8.614,3.547zM25.588,21.377c-0.916,1.637-2.207,2.982-3.762,3.955l-1.791-1.658l0.344,2.414c-0.449,0.191-0.92,0.359-1.396,0.496c-2.827,0.797-5.797,0.441-8.358-0.99c-1.639-0.92-2.985-2.213-3.95-3.766l1.651-1.793l-2.413,0.344c-0.194-0.451-0.36-0.918-0.495-1.396c-0.796-2.83-0.446-5.797,0.992-8.357c0.917-1.641,2.209-2.985,3.76-3.952l1.797,1.652l-0.343-2.411c0.45-0.196,0.915-0.362,1.394-0.498c2.826-0.795,5.797-0.443,8.355,0.994c1.639,0.916,2.988,2.209,3.953,3.76l-1.652,1.793l2.414-0.34c0.191,0.449,0.359,0.914,0.492,1.396C27.381,15.849,27.027,18.813,25.588,21.377zM22.236,14.56l-3.363-0.047c-0.197-0.37-0.473-0.67-0.777-0.932l0.717-2.091l-1.552,1.576c-0.372-0.157-0.763-0.271-1.181-0.282l-1.538-2.987l-0.048,3.363c-0.368,0.194-0.667,0.471-0.928,0.777l-2.092-0.716l1.572,1.551c-0.155,0.37-0.271,0.763-0.28,1.18l-2.988,1.541l3.363,0.045c0.194,0.37,0.472,0.673,0.778,0.931L13.2,20.561l1.554-1.576c0.369,0.158,0.761,0.271,1.178,0.279l1.54,2.99l0.049-3.361c0.368-0.195,0.669-0.473,0.929-0.779l2.092,0.719l-1.576-1.552c0.158-0.371,0.271-0.761,0.283-1.179L22.236,14.56zM16.617,18.623c-1.431,0.332-2.866-0.553-3.205-1.986c-0.34-1.435,0.549-2.868,1.984-3.205c1.431-0.338,2.867,0.55,3.207,1.982C18.941,16.849,18.051,18.285,16.617,18.623z",
s:"none",fl:"#00397F"}},f:{}},{i:{a:{p:"M17.172,16.954l-7.553,6.88l5.212-8.787l7.55-6.881L17.172,16.954z",s:"none",fl:"#8D0102"}},f:{}}]},sandglass:{d:600,it:1,sh:[{i:{a:{p:"M22.25,24.5c-0.551-1.1-4.45-2.1-4.45-2.1s-0.17-0.152-0.199-0.2c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0-7.514,0-7.601c0-0.036,0.101-0.2,0.101-0.2c0.974-0.591,2.976-1.934,3.399-2.8c0.607-1.239-1.789,0.9-4,0.9c-2.209,0-4.607-2.14-4-0.9c0.425,0.867,2.426,2.209,3.4,2.8c0,0,0.1,0.164,0.1,0.2c0,0.087,0,6.097,0,7.601c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-4.019,0.966-4.45,2.119c-0.15,0.4,2.089,2.354,4.75,2.476V27h1v-0.024C20.162,26.854,22.4,24.8,22.25,24.5z",
s:"none",fl:"#333"}},f:{0:{p:"M17.487,15.5c0-0.101,0-0.2,0-0.2s0.029-0.252,0-0.3c-0.045-0.071,0-0.085,0-0.3c0-1.504,0-0.313,0-0.4c0-0.036,0.101-0.2,0.101-0.2c0.973-0.591,4.498-3.3,4.898-4.6c0.406-1.319-3.289,0.2-5.499,0.2c-2.209,0-5.652-1.572-5.5-0.2c0.1,0.9,3.925,4.009,4.9,4.6c0,0,0.1,0.164,0.1,0.2c0,0.087,0-1.104,0,0.4c0,0.215,0.045,0.229,0,0.3c-0.044,0.07,0,0.3,0,0.3s0,0,0,0.2c0,0.428-0.199,1.6,0.4,1.476L16.487,17h1l-0.399-0.024C17.788,17.1,17.487,15.835,17.487,15.5z"},10:{p:"M17.486,25.5c0-0.101,0-0.2,0-0.2s0.029-0.252,0-0.3c-0.045-0.071,0-0.085,0-0.3c0-1.504,0-10.313,0-10.4c0-0.036,0.101-0.2,0.101-0.2c0.974-0.591,3.8-2.5,4.2-3.9c0.38-1.327-2.59,0-4.801,0c-2.209,0-4.953-1.372-4.8,0c0.1,0.9,3.226,3.31,4.201,3.9c0,0,0.1,0.164,0.1,0.2c0,0.087,0,8.896,0,10.4c0,0.215,0.045,0.229,0,0.3c-0.044,0.07,0,0.3,0,0.3s0,0,0,0.2c0,0.428-0.199,1.6,0.4,1.476L16.486,27h1l-0.399-0.024C17.787,27.1,17.486,25.835,17.486,25.5z"},
20:{p:"M18,25.5c-0.301-0.3-0.199-0.2-0.199-0.2s-0.171-0.252-0.2-0.3c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0-10.313,0-10.4c0-0.036,0.101-0.2,0.101-0.2c0.973-0.591,3.575-2.533,3.999-3.4c0.607-1.239-2.39-0.1-4.6-0.1c-2.209,0-5.208-1.139-4.6,0.1c0.425,0.867,3.025,2.809,4,3.4c0,0,0.1,0.164,0.1,0.2c0,0.087,0,8.896,0,10.4c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.3-0.2,0.3s0.101-0.119-0.3,0.2c-0.334,0.267-1.1,1.601,1,1.476L16.5,27h1l-0.399-0.024C19.399,27.101,18.236,25.736,18,25.5z"},30:{p:"M20.101,25.5c-0.551-1.1-2.301-2-2.301-2s-0.17-0.152-0.199-0.2C17.556,23.229,17.5,23.215,17.5,23c0-1.504,0-8.613,0-8.7c0-0.036,0.101-0.2,0.101-0.2c0.974-0.591,2.976-1.934,3.399-2.8c0.607-1.239-1.789,0.2-4,0.2c-2.209,0-4.607-1.439-4-0.2c0.425,0.867,2.426,2.209,3.4,2.8c0,0,0.1,0.164,0.1,0.2c0,0.087,0,7.196,0,8.7c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-1.968,0.866-2.4,2.02c-0.15,0.4,0.039,1.354,2.7,1.476V27h1v-0.024C20.162,26.854,20.251,25.8,20.101,25.5z"},
40:{p:"M22.251,24.5c-0.649-1.601-4.45-2.5-4.45-2.5s-0.17-0.152-0.199-0.2c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0-7.113,0-7.2c0-0.036,0.101-0.2,0.101-0.2c0.974-0.591,1.7-1.1,2.3-1.6c1.06-0.884-0.689,0.8-2.9,0.8c-2.209,0-3.947-1.698-2.899-0.8c0.7,0.6,1.325,1.009,2.3,1.6c0,0,0.1,0.164,0.1,0.2c0,0.087,0,5.696,0,7.2c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-3.8,0.72-4.45,2.52c-0.146,0.402,2.089,2.354,4.75,2.476V27h1v-0.024C20.163,26.854,22.377,24.811,22.251,24.5z"},50:{p:"M22.251,24.5c-0.649-1.601-4.45-3.5-4.45-3.5s-0.17-0.152-0.199-0.2c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0-5.113,0-5.2c0-0.036,0-0.2,0-0.2c0-0.1,0-0.1,0-0.2c0-0.6,0-0.6-0.5-0.6s-0.5,0-0.5,0.6c0,0.1,0,0.1,0,0.2c0,0,0,0.164,0,0.2c0,0.087,0,3.696,0,5.2c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-3.8,1.72-4.45,3.52c-0.146,0.402,2.089,2.354,4.75,2.476V27h1v-0.024C20.163,26.854,22.377,24.811,22.251,24.5z"},
60:{p:"M22.252,24.5c-0.55-2.5-4.45-4.5-4.45-4.5s-0.17-0.152-0.199-0.2c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0,0.887,0,0.8c0-0.036,0-0.2,0-0.2c0-0.1,0-0.1,0-0.199c0-0.601,0-0.601-0.5-0.601s-0.5,0-0.5,0.601c0,0.1,0,0.1,0,0.199c0,0,0,0.164,0,0.2c0,0.087,0-2.384,0-0.88c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-3.6,2.1-4.45,4.6c-0.138,0.405,2.089,2.354,4.75,2.476V27h1v-0.024C20.164,26.854,22.324,24.827,22.252,24.5z"},90:{},91:{p:"M22.25,24.5c-0.551-1.1-4.45-2.1-4.45-2.1s-0.17-0.152-0.199-0.2c-0.045-0.071-0.101-0.085-0.101-0.3c0-1.504,0-7.514,0-7.601c0-0.036,0.101-0.2,0.101-0.2c0.974-0.591,2.976-1.934,3.399-2.8c0.607-1.239-1.789,0.9-4,0.9c-2.209,0-4.607-2.14-4-0.9c0.425,0.867,2.426,2.209,3.4,2.8c0,0,0.1,0.164,0.1,0.2c0,0.087,0,6.097,0,7.601c0,0.215-0.055,0.229-0.1,0.3c-0.045,0.07-0.2,0.181-0.2,0.181s-4.019,0.966-4.45,2.119c-0.15,0.4,2.089,2.354,4.75,2.476V27h1v-0.024C20.162,26.854,22.4,24.8,22.25,24.5z"},
100:{}}},{i:{a:{p:"M17,2C11.203,2,6,4.281,6,6v20c0,1.719,5.203,4,11,4c5.801,0,11-2.281,11-4V6C28,4.281,22.801,2,17,2zM8,6.154c0.254,0.133,0.727,0.978,0.801,1.491c0.512,3.599,4.285,7.304,6.398,8.354c0.201,0.1,0.207,0.211,0,0.301C11.301,18,9.301,20.801,8.898,24C8.852,24.383,8.297,25.291,8,25.5V6.154zM17,28c-3.57,0-5.996-1.291-7-3.465c0.225-4.986,6-7.436,6-7.436v-2c0,0-5.902-3.557-6-8.128C11.762,7.548,14.504,8,17,8c2.594,0,5.256-0.487,7-1.095c-0.041,4.608-6,8.194-6,8.194v2c0,0,5.764,2.445,6,7.416c-0.004,0,0.004-0.002,0-0.004C23,26.799,20.582,28,17,28zM26,25.5c-0.25-0.188-0.613-1.035-0.672-1.5c-0.4-3.199-2.629-6-6.529-7.699c-0.205-0.09-0.201-0.201,0-0.301c2.113-1.051,6.115-4.756,6.629-8.354C25.521,6.993,25.799,6.26,26,6.154V25.5z",
s:"none",fl:"#333"}},f:{}}]},scissors:{d:400,it:3,sh:[{i:{a:{p:"M11.489,13.145c0.667-0.296,1.233-0.75,1.599-1.384c1.103-1.911,0.061-4.575-2.328-5.954c-2.388-1.379-5.216-0.95-6.32,0.961c-1.103,1.911-0.062,4.577,2.328,5.956c0,0,15.693,11.273,17.047,11.906c1.057,0.494,2.633,0.402,3.705,0.25c0.654-0.09,1.33-0.484,1.521-0.813c0.188-0.322,0.342-0.592,0.342-0.592L11.489,13.145zM6.17,7.768c0.532-0.921,2.21-1.028,3.592-0.23c1.381,0.798,2.127,2.305,1.596,3.226c-0.533,0.922-2.212,1.03-3.593,0.232C6.383,10.197,5.638,8.69,6.17,7.768zM13.704,16.791c-0.414,0-0.749-0.336-0.749-0.748c0-0.415,0.334-0.75,0.749-0.75c0.415,0,0.749,0.335,0.749,0.75C14.453,16.455,14.119,16.791,13.704,16.791z",
t:"",s:"none",fl:"#333"}},f:{40:{t:"r-28,13.7,16"},50:{},90:{t:""},100:{}},fIE:{40:{t:"r-28,12.2,14.5"},50:{},90:{t:""},100:{}}},{i:{a:{p:"M11.507,18.854L29.402,8.523c0,0-0.154-0.268-0.342-0.595c-0.191-0.328-0.867-0.719-1.521-0.811c-1.072-0.149-2.648-0.244-3.705,0.25C22.48,7.999,6.786,19.275,6.786,19.275c-2.389,1.377-3.431,4.045-2.328,5.955c1.104,1.912,3.933,2.342,6.32,0.961c2.388-1.377,3.431-4.041,2.328-5.953C12.741,19.604,12.174,19.15,11.507,18.854zM13.704,15.293c0.415,0,0.749,0.335,0.749,0.75c0,0.412-0.334,0.748-0.749,0.748c-0.414,0-0.749-0.336-0.749-0.748C12.956,15.628,13.29,15.293,13.704,15.293zM9.781,24.463c-1.382,0.795-3.06,0.689-3.592-0.23c-0.532-0.924,0.213-2.43,1.595-3.229c1.381-0.797,3.061-0.691,3.593,0.232C11.908,22.158,11.162,23.664,9.781,24.463z",
t:"",s:"none",fl:"#333"}},f:{40:{t:"r28,13.7,16"},50:{},90:{t:""},100:{}},fIE:{40:{t:"r28,12.2,14.5"},50:{},90:{t:""},100:{}}}]},"screen-full":{d:500,it:2,sh:[{i:{a:{p:"M25.59,13.368C25.814,13.598,26,13.52,26,13.197V6.584C26,6.262,25.738,6,25.416,6h-6.613c-0.322,0-0.4,0.186-0.17,0.41l2.594,2.594l-5.228,5.227l-5.225-5.225l2.595-2.596C13.598,6.185,13.52,6,13.198,6H6.584C6.262,6,6,6.262,6,6.584v6.614c0,0.321,0.185,0.399,0.411,0.171l2.596-2.595l5.225,5.225l-5.227,5.228L6.41,18.633C6.186,18.402,6,18.48,6,18.803v6.613C6,25.738,6.262,26,6.584,26h6.613c0.322,0,0.4-0.184,0.171-0.41l-2.596-2.596l5.227-5.228l5.228,5.228l-2.594,2.596c-0.23,0.225-0.152,0.41,0.17,0.41h6.613C25.738,26,26,25.738,26,25.416v-6.613c0-0.322-0.186-0.4-0.41-0.17l-2.596,2.594l-5.228-5.228l5.228-5.227L25.59,13.368z",
s:"none",fl:"#333"}},f:{50:{t:"s1.26"},100:{t:""}}}]},"screen-full-alt":{d:500,it:2,sh:[{i:{a:{p:"M21.596,11.818l2.076,2.077C23.852,14.078,24,14.016,24,13.758V8.467C24,8.209,23.791,8,23.533,8h-5.291c-0.258,0-0.32,0.148-0.137,0.328l2.076,2.076L16,14.586l-4.181-4.181l2.076-2.076C14.078,8.147,14.016,8,13.759,8H8.467C8.209,8,8,8.209,8,8.467v5.292c0,0.257,0.147,0.319,0.329,0.137l2.076-2.076L14.586,16l-4.182,4.182l-2.076-2.076C8.148,17.922,8,17.984,8,18.242v5.291C8,23.791,8.209,24,8.467,24h5.291c0.258,0,0.32-0.146,0.137-0.328l-2.077-2.076L16,17.414l4.182,4.182l-2.076,2.076C17.922,23.852,17.984,24,18.242,24h5.291C23.791,24,24,23.791,24,23.533v-5.291c0-0.258-0.148-0.32-0.328-0.137l-2.076,2.076L17.414,16L21.596,11.818z",
s:"none",fl:"#333"}},f:{50:{t:"s1.26"},100:{t:""}}},{i:{a:{p:"M26.77,30H5.23C3.445,30,2,28.551,2,26.77V5.23C2,3.445,3.445,2,5.23,2H26.77C28.557,2,30,3.445,30,5.23V26.77C30,28.551,28.557,30,26.77,30L26.77,30zM28,5.091C28,4.412,27.547,4,26.871,4H5.14C4.466,4,4,4.412,4,5.091v21.817C4,27.586,4.624,28,5.14,28h21.731C27.453,27.992,28,27.498,28,26.82V5.091z",s:"none",fl:"#333"}},f:{}}]},"screen-small":{d:500,it:2,sh:[{i:{a:{p:"M26.232,4l-5.227,5.228L18.41,6.632C18.186,6.402,18,6.48,18,6.803v6.613C18,13.738,18.262,14,18.584,14h6.613c0.322,0,0.4-0.186,0.17-0.41l-2.594-2.594L28,5.768L26.232,4zM28,26.232l-5.227-5.227l2.594-2.596c0.23-0.225,0.152-0.41-0.17-0.41h-6.613C18.262,18,18,18.262,18,18.584v6.613c0,0.322,0.186,0.4,0.41,0.17l2.596-2.594L26.232,28L28,26.232zM5.768,28l5.228-5.227l2.594,2.594c0.225,0.23,0.41,0.152,0.41-0.17v-6.613C14,18.262,13.738,18,13.416,18H6.803c-0.322,0-0.4,0.184-0.171,0.41l2.596,2.596L4,26.232L5.768,28zM4,5.768l5.226,5.226l-2.595,2.596C6.402,13.815,6.48,14,6.802,14h6.614C13.738,14,14,13.738,14,13.416V6.802c0-0.321-0.185-0.399-0.411-0.171l-2.596,2.595L5.768,4L4,5.768z",
s:"none",fl:"#333"}},f:{50:{t:"s0.6"},100:{t:""}}}]},"screen-small-alt":{d:500,it:2,sh:[{i:{a:{p:"M26.77,30H5.23C3.445,30,2,28.551,2,26.77V5.23C2,3.445,3.445,2,5.23,2H26.77C28.557,2,30,3.445,30,5.23V26.77C30,28.551,28.557,30,26.77,30L26.77,30zM28,5.091C28,4.412,27.547,4,26.871,4H5.14C4.466,4,4,4.412,4,5.091v21.817C4,27.586,4.624,28,5.14,28h21.731C27.453,27.992,28,27.498,28,26.82V5.091zM24.586,6l-4.182,4.182l-2.076-2.077C18.148,7.922,18,7.984,18,8.242v5.291C18,13.791,18.209,14,18.467,14h5.291c0.258,0,0.32-0.148,0.137-0.328l-2.076-2.076L26,7.414L24.586,6zM26,24.586l-4.182-4.182l2.076-2.076C24.078,18.148,24.016,18,23.758,18h-5.291C18.209,18,18,18.209,18,18.467v5.291c0,0.258,0.148,0.32,0.328,0.137l2.076-2.076L24.586,26L26,24.586zM7.414,26l4.182-4.182l2.076,2.076C13.852,24.078,14,24.016,14,23.758v-5.291C14,18.209,13.791,18,13.533,18H8.242c-0.258,0-0.32,0.146-0.137,0.328l2.077,2.076L6,24.586L7.414,26zM6,7.414l4.181,4.181l-2.076,2.076C7.922,13.853,7.984,14,8.241,14h5.292C13.791,14,14,13.791,14,13.533V8.241c0-0.257-0.147-0.319-0.329-0.137l-2.076,2.076L7.414,6L6,7.414z",
s:"none",fl:"#333"}},f:{50:{t:"s0.6"},100:{t:""}}}]},screenshot:{d:1E3,it:1,sh:[{i:{a:{p:"M17.588,13.397l3.971-0.332l-2.15,3.353l1.543,3.674l-3.855-1.01l-3.016,2.603l-0.23-3.978l-3.408-2.064l3.712-1.449l0.911-3.878L17.588,13.397z",t:"",o:0,s:"none",fl:"#333"}},f:{70:{},80:{t:"s3",o:1},81:{o:0},100:{t:""}}},{i:{a:{p:"M30,14h-4.201C25.004,10.082,21.918,6.997,18,6.201V2h-4v4.201C10.082,6.996,6.996,10.082,6.201,14H2v4h4.201c0.795,3.918,3.881,7.004,7.799,7.799V30h4v-4.201c3.918-0.795,7.004-3.881,7.799-7.799H30V14zM18,23.737V21h-4v2.737c-2.808-0.725-5.013-2.93-5.738-5.737H11v-4H8.262c0.724-2.808,2.93-5.014,5.738-5.738V11h4V8.262c2.808,0.725,5.014,2.93,5.737,5.738H21v4h2.737C23.013,20.807,20.808,23.013,18,23.737z",
t:"",s:"none",fl:"#333"}},f:{10:{t:"t-5,-4s0.7"},20:{t:"t-1,-2s0.7"},30:{t:"t5,-4s0.7"},50:{t:"t-5,5s0.7"},60:{t:"t5,3s0.7"},70:{t:"t0,0s0.7"},80:{},100:{t:""}}}]},search:{d:1E3,it:1,sh:[{i:{a:{p:"M12.57,6.4l-3.1,0.1c-1.6,2.1-1.9,6.4-2.7,8.7h2.5l0.1-1.4c-0.031,0.028,2.2,0.2,2.9,0.1c0,0,0.1,0.6,0.7,1.4h2.5C15.47,15.3,12.97,8.7,12.57,6.4zM9.57,11.8l1.1-4l0.9,4.1L9.57,11.8zM19.869,8.2c-0.9,0-0.8,1-0.8,1c0-1.4-0.5-3.1-0.5-3.1h-2.3c0.601,2.6,0.4,8.1,0,9.2h1.8l0.5-0.5h0.101c0,0-0.101,0.5,1,0.5c1.5,0,1.999-1.1,2.1-3.6C21.812,10.667,22.069,8.2,19.869,8.2zM20.77,12.1c-0.05,0.598-0.2,1.6-0.899,1.6c-0.9,0-0.799-0.806-0.7-1.7c0.1-0.9,0.004-1.927,0.899-1.8C20.77,10.3,20.869,10.9,20.77,12.1z",
o:0,s:"none",fl:"#333"}},f:{0:{o:1},50:{p:"M8.18,6.4l-1.8,0.2c-1.6,2.1-0.3,6.4-1.1,8.7h0.9l0.1-1.4c-0.031,0.028,0.9,0.101,1.6,0c0,0,0.1,0.6,0.7,1.4h2.5C11.08,15.3,9.08,8.7,8.18,6.4zM6.48,11.899l-0.2-4.1l0.9,4.1L6.48,11.899zM16.28,8.3c-0.9,0-1.4,0.9-1.4,0.9c0-1.4-0.7-3.1-0.7-3.1h-2.3c0.6,3.2,0.4,8.1,0,9.2h1.8l0.6-0.6h0.101c0,0,0.199,0.6,1.3,0.6c1.7,0,2.499-1,2.601-3.5C18.321,10.767,18.481,8.3,16.28,8.3zM16.58,12.2c-0.05,0.598-0.301,1.5-1,1.5c-0.9,0-0.698-0.806-0.6-1.7c0.1-0.9,0.004-1.927,0.9-1.8C16.581,10.3,16.679,11,16.58,12.2z"},
99:{p:"M12.57,6.4l-3.1,0.1c-1.6,2.1-1.9,6.4-2.7,8.7h2.5l0.1-1.4c-0.031,0.028,2.2,0.2,2.9,0.1c0,0,0.1,0.6,0.7,1.4h2.5C15.47,15.3,12.97,8.7,12.57,6.4zM9.57,11.8l1.1-4l0.9,4.1L9.57,11.8zM19.869,8.2c-0.9,0-0.8,1-0.8,1c0-1.4-0.5-3.1-0.5-3.1h-2.3c0.601,2.6,0.4,8.1,0,9.2h1.8l0.5-0.5h0.101c0,0-0.101,0.5,1,0.5c1.5,0,1.999-1.1,2.1-3.6C21.812,10.667,22.069,8.2,19.869,8.2zM20.77,12.1c-0.05,0.598-0.2,1.6-0.899,1.6c-0.9,0-0.799-0.806-0.7-1.7c0.1-0.9,0.004-1.927,0.899-1.8C20.77,10.3,20.869,10.9,20.77,12.1z"},100:{o:0}}},
{i:{a:{p:"M29.947,25.809l-5.432-5.432c-0.443-0.443-1.164-0.443-1.607,0l-3.268-3.297c1.416-1.597,2.457-3.729,2.457-6.031C22.098,6.052,18.047,2,13.049,2C8.051,2,4,6.052,4,11.049c0,4.998,4.051,9.049,9.049,9.049c1.799,0,3.583-0.613,4.992-1.518l3.259,3.404c-0.444,0.445-0.444,1.164,0,1.609l5.433,5.432c0.443,0.443,1.164,0.443,1.607,0l1.607-1.607C30.393,26.973,30.393,26.254,29.947,25.809zM12.97,16.92c-3.324,0-6.018-2.756-6.018-6.08c0-3.324,2.694-6.019,6.018-6.019s6.143,2.694,6.143,6.019C19.113,14.164,16.294,16.92,12.97,16.92z",
s:"none",fl:"#333"}},f:{}}]},settings:{d:1E3,it:1,sh:[{i:{a:{p:"M28,20v9c0,0.553-0.447,1-1,1s-1-0.447-1-1v-9H28zM28,6V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H28zM18,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H18zM18,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H18zM8,24v5c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5H8zM8,10V3c0-0.553-0.447-1-1-1S6,2.447,6,3v7H8zM10,20.801V13.2c0-0.663-0.537-1.2-1.2-1.2H5.2C4.537,12,4,12.537,4,13.2v7.601C4,21.463,4.537,22,5.2,22h3.6C9.463,22,10,21.463,10,20.801zM20,24.801v-7.602C20,16.537,19.463,16,18.801,16H15.2c-0.663,0-1.2,0.537-1.2,1.199v7.602C14,25.463,14.537,26,15.2,26h3.601C19.463,26,20,25.463,20,24.801zM30,16.801V9.2C30,8.537,29.463,8,28.801,8h-3.602C24.537,8,24,8.537,24,9.2v7.601C24,17.463,24.537,18,25.199,18h3.602C29.463,18,30,17.463,30,16.801z",
s:"none",fl:"#333"}},f:{10:{},20:{p:"M28,20v9c0,0.553-0.447,1-1,1s-1-0.447-1-1v-9H28zM28,6V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H28zM18,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H18zM18,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H18zM8,18v11c0,0.553-0.447,1-1,1s-1-0.447-1-1V18H8zM8,4V3c0-0.553-0.447-1-1-1S6,2.447,6,3v1H8zM10,14.801V7.2C10,6.537,9.463,6,8.8,6H5.2C4.537,6,4,6.537,4,7.2v7.601C4,15.463,4.537,16,5.2,16h3.6C9.463,16,10,15.463,10,14.801zM20,24.801v-7.602C20,16.537,19.463,16,18.801,16H15.2c-0.663,0-1.2,0.537-1.2,1.199v7.602C14,25.463,14.537,26,15.2,26h3.601C19.463,26,20,25.463,20,24.801zM30,16.801V9.2C30,8.537,29.463,8,28.801,8h-3.602C24.537,8,24,8.537,24,9.2v7.601C24,17.463,24.537,18,25.199,18h3.602C29.463,18,30,17.463,30,16.801z"},
30:{},40:{p:"M28,20v9c0,0.553-0.447,1-1,1s-1-0.447-1-1v-9H28zM28,6V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H28zM18,18v11c0,0.553-0.447,1-1,1s-1-0.447-1-1V18H18zM18,4V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v1H18zM8,24v5c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5H8zM8,10V3c0-0.553-0.447-1-1-1S6,2.447,6,3v7H8zM10,20.801V13.2c0-0.663-0.537-1.2-1.2-1.2H5.2C4.537,12,4,12.537,4,13.2v7.601C4,21.463,4.537,22,5.2,22h3.6C9.463,22,10,21.463,10,20.801zM20,14.801V7.199C20,6.537,19.463,6,18.801,6H15.2C14.537,6,14,6.537,14,7.199v7.602C14,15.463,14.537,16,15.2,16h3.601C19.463,16,20,15.463,20,14.801zM30,16.801V9.2C30,8.537,29.463,8,28.801,8h-3.602C24.537,8,24,8.537,24,9.2v7.601C24,17.463,24.537,18,25.199,18h3.602C29.463,18,30,17.463,30,16.801z"},
50:{},60:{p:"M28,20v9c0,0.553-0.447,1-1,1s-1-0.447-1-1v-9H28zM28,6V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H28zM18,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H18zM18,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H18zM8,24v5c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5H8zM8,10V3c0-0.553-0.447-1-1-1S6,2.447,6,3v7H8zM10,20.801V13.2c0-0.663-0.537-1.2-1.2-1.2H5.2C4.537,12,4,12.537,4,13.2v7.601C4,21.463,4.537,22,5.2,22h3.6C9.463,22,10,21.463,10,20.801zM20,24.801v-7.602C20,16.537,19.463,16,18.801,16H15.2c-0.663,0-1.2,0.537-1.2,1.199v7.602C14,25.463,14.537,26,15.2,26h3.601C19.463,26,20,25.463,20,24.801zM30,16.801V9.2C30,8.537,29.463,8,28.801,8h-3.602C24.537,8,24,8.537,24,9.2v7.601C24,17.463,24.537,18,25.199,18h3.602C29.463,18,30,17.463,30,16.801z"},
70:{},80:{p:"M28,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H28zM28,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H28zM18,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H18zM18,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H18zM8,24v5c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5H8zM8,10V3c0-0.553-0.447-1-1-1S6,2.447,6,3v7H8zM10,20.801V13.2c0-0.663-0.537-1.2-1.2-1.2H5.2C4.537,12,4,12.537,4,13.2v7.601C4,21.463,4.537,22,5.2,22h3.6C9.463,22,10,21.463,10,20.801zM20,24.801v-7.602C20,16.537,19.463,16,18.801,16H15.2c-0.663,0-1.2,0.537-1.2,1.199v7.602C14,25.463,14.537,26,15.2,26h3.601C19.463,26,20,25.463,20,24.801zM30,24.801V17.2c0-0.663-0.537-1.2-1.199-1.2h-3.602C24.537,16,24,16.537,24,17.2v7.601C24,25.463,24.537,26,25.199,26h3.602C29.463,26,30,25.463,30,24.801z"},
90:{},100:{p:"M28,20v9c0,0.553-0.447,1-1,1s-1-0.447-1-1v-9H28zM28,6V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H28zM18,28v1c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1H18zM18,14V3c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H18zM8,24v5c0,0.553-0.447,1-1,1s-1-0.447-1-1v-5H8zM8,10V3c0-0.553-0.447-1-1-1S6,2.447,6,3v7H8zM10,20.801V13.2c0-0.663-0.537-1.2-1.2-1.2H5.2C4.537,12,4,12.537,4,13.2v7.601C4,21.463,4.537,22,5.2,22h3.6C9.463,22,10,21.463,10,20.801zM20,24.801v-7.602C20,16.537,19.463,16,18.801,16H15.2c-0.663,0-1.2,0.537-1.2,1.199v7.602C14,25.463,14.537,26,15.2,26h3.601C19.463,26,20,25.463,20,24.801zM30,16.801V9.2C30,8.537,29.463,8,28.801,8h-3.602C24.537,8,24,8.537,24,9.2v7.601C24,17.463,24.537,18,25.199,18h3.602C29.463,18,30,17.463,30,16.801z"}}}]},
share:{d:1E3,it:1,sh:[{i:{a:{p:"M24.5,20c-1.063,0-2.026,0.384-2.797,1l-10.209-4.938c0-0.021,0.006-0.041,0.006-0.062c0-0.045-0.012-0.087-0.013-0.132l8.447-4.678C20.662,11.698,21.544,12,22.5,12c2.485,0,4.5-2.015,4.5-4.5S24.985,3,22.5,3S18,5.015,18,7.5c0,0.061,0.016,0.118,0.018,0.178l-8.417,4.661C8.866,11.815,7.972,11.5,7,11.5c-2.485,0-4.5,2.015-4.5,4.5c0,2.484,2.015,4.5,4.5,4.5c0.997,0,1.909-0.335,2.655-0.884l10.358,5.011C20.081,27.052,22.058,29,24.5,29c2.485,0,4.5-2.015,4.5-4.5S26.985,20,24.5,20z",
s:"none",fl:"#333"}},f:{0:{p:"M11.494,16.062L11.494,16.062L11.494,16.062c0-0.021,0.006-0.041,0.006-0.062c0-0.045-0.012-0.087-0.013-0.132L11.5,15.9c-0.013-0.032,0,0,0,0c-0.013-0.032-0.007-1.033-0.6-2.1c-0.5-0.9-1.299-1.461-1.299-1.461s-0.017,0.05,0,0c0.02-0.058-0.019-0.011-0.017,0.05l0.017-0.05C8.866,11.815,7.972,11.5,7,11.5c-2.485,0-4.5,2.015-4.5,4.5c0,2.484,2.015,4.5,4.5,4.5c0.997,0,1.909-0.335,2.655-0.884l0,0c-0.055-0.016,0,0,0,0C11.4,18.4,11.494,16.062,11.494,16.062S11.5,16,11.494,16.062z"},10:{},
30:{p:"M11.494,16.062L11.494,16.062L11.494,16.062c0-0.021,0.006-0.041,0.006-0.062c0-0.045-0.012-0.087-0.013-0.132l8.447-4.678C20.662,11.698,21.544,12,22.5,12c2.485,0,4.5-2.015,4.5-4.5S24.985,3,22.5,3S18,5.015,18,7.5c0,0.061,0.016,0.118,0.018,0.178l-8.417,4.661C8.866,11.815,7.972,11.5,7,11.5c-2.485,0-4.5,2.015-4.5,4.5c0,2.484,2.015,4.5,4.5,4.5c0.997,0,1.909-0.335,2.655-0.884l0,0c-0.055-0.016,0,0,0,0C11.4,18.4,11.494,16.062,11.494,16.062S11.5,16,11.494,16.062z",e:"bounce"},40:{},60:{p:"M24.5,20c-1.063,0-2.026,0.384-2.797,1l-10.209-4.938c0-0.021,0.006-0.041,0.006-0.062c0-0.045-0.012-0.087-0.013-0.132l8.447-4.678C20.662,11.698,21.544,12,22.5,12c2.485,0,4.5-2.015,4.5-4.5S24.985,3,22.5,3S18,5.015,18,7.5c0,0.061,0.016,0.118,0.018,0.178l-8.417,4.661C8.866,11.815,7.972,11.5,7,11.5c-2.485,0-4.5,2.015-4.5,4.5c0,2.484,2.015,4.5,4.5,4.5c0.997,0,1.909-0.335,2.655-0.884l10.358,5.011C20.081,27.052,22.058,29,24.5,29c2.485,0,4.5-2.015,4.5-4.5S26.985,20,24.5,20z",
e:"bounce"},100:{}}}]},shield:{d:1E3,it:1,sh:[{i:{a:{p:"M26.187,6.221C22.673,5.909,18.108,2.97,16.549,2c-0.305-0.19-0.792-0.189-1.097,0C13.894,2.97,9.33,5.907,5.816,6.221c-0.358,0.032-0.65,0.321-0.646,0.68C5.41,25.821,16,30,16,30s10.593-4.179,10.829-23.099C26.833,6.542,26.544,6.252,26.187,6.221zM16,27.741c-2.031-1.001-8.092-6.179-8.628-19.569C10.603,7.503,14.107,5.605,16,4.471c1.896,1.135,5.399,3.033,8.628,3.702C24.095,21.563,18.031,26.74,16,27.741zM16,26.509c-2.085-1.223-6.823-6.299-7.502-17.491c2.828-0.754,5.705-2.249,7.502-3.29c1.8,1.042,4.679,2.537,7.501,3.29C22.825,20.208,18.087,25.286,16,26.509z",
t:"",s:"none",fl:"#333"}},f:{15:{},20:{t:"r-3,16,30"},30:{t:"",e:"elastic"},100:{}}},{i:{a:{p:"M56.457-6.927l-15.344,8.86c-0.26-0.208-0.574-0.296-0.877-0.123L35.15,6l6.17-2.313c0.305-0.176,0.381-0.491,0.334-0.819L57-5.989L56.457-6.927z",o:1,s:"none",fl:"#333"}},f:{15:{o:1,p:"M37.457,3.073l-15.344,8.86c-0.26-0.208-0.574-0.296-0.877-0.123L16.15,16l6.17-2.313c0.305-0.176,0.381-0.491,0.334-0.819L38,4.011L37.457,3.073z"},20:{p:"M28.544-10.916l0.001,17.718C28.235,6.924,28.001,7.152,28,7.5c0,0-0.085,5.5,1,5.5c0.915,0,1.168-5.5,1.168-5.5c0-0.352-0.235-0.575-0.543-0.699l0.002-17.719L28.544-10.916z"},
40:{p:"M28.544,6.001l0.001,17.718c-0.31,0.121-0.544,0.349-0.545,0.698c0,0-0.085,5.499,1,5.499c0.915,0,1.168-5.499,1.168-5.499c0-0.353-0.235-0.576-0.543-0.699L29.627,6L28.544,6.001z"},50:{},70:{p:"M5.429,25.466l17.333,3.676c0.055,0.328,0.229,0.604,0.57,0.678c0,0,5.361,1.225,5.587,0.163c0.189-0.895-5.137-2.283-5.137-2.283c-0.346-0.073-0.613,0.11-0.797,0.386L5.652,24.406L5.429,25.466z",e:"<>"},80:{o:0},100:{o:1,p:"M56.457-6.927l-15.344,8.86c-0.26-0.208-0.574-0.296-0.877-0.123L35.15,6l6.17-2.313c0.305-0.176,0.381-0.491,0.334-0.819L57-5.989L56.457-6.927z"}}}]},
"shopping-cart":{d:1E3,it:1,sh:[{i:{a:{p:"M9.428,19C9.192,19,9,18.792,9,18.536V14.9h3.1V19H9.428zM17,18.536V14.9h-4.1V19h3.671C16.808,19,17,18.792,17,18.536zM9.428,11C9.192,11,9,11.191,9,11.429V14.1h3.1V11H9.428zM16.571,11H12.9v3.1H17v-2.671C17,11.191,16.809,11,16.571,11z",t:"t-5,-20",s:"none",fl:"#333"}},f:{20:{t:""},50:{},80:{t:"t26,0"},90:{t:"t26,-20"},100:{t:"t-5,-20"}}},{i:{a:{p:"M18.428,19C18.191,19,18,18.792,18,18.536V14.9h3.1V19H18.428zM26,18.536V14.9h-4.1V19h3.671C25.808,19,26,18.792,26,18.536zM18.428,11C18.191,11,18,11.191,18,11.429V14.1h3.1V11H18.428zM25.571,11H21.9v3.1H26v-2.671C26,11.191,25.809,11,25.571,11z",
t:"t5,-20",s:"none",fl:"#333"}},f:{10:{},30:{t:""},50:{},80:{t:"t26,0"},90:{t:"t26,-20"},100:{t:"t5,-20"}}},{i:{a:{p:"M11.156,11c-0.235,0-0.427-0.208-0.427-0.463V6.369h3.922V11H11.156zM19.287,10.537V6.369h-3.922V11h3.493C19.095,11,19.287,10.792,19.287,10.537zM13.406,1.145c-0.325-0.147-0.985-0.216-1.427,0c-0.471,0.231-0.85,0.811-0.713,1.426c0.216,0.974,1.602,1.301,1.602,1.301h-2.425c-0.236,0-0.427,0.191-0.427,0.427v1.712h4.635V3.873h0.357C15.008,3.873,14.54,1.657,13.406,1.145zM12.835,3.253c-0.287-0.059-0.787-0.186-0.909-0.738c-0.077-0.35,0.137-0.679,0.405-0.81c0.251-0.123,0.626-0.083,0.811,0c0.643,0.29,0.908,1.548,0.908,1.548S13.358,3.359,12.835,3.253zM19.572,3.873h-2.426c0,0,1.387-0.327,1.604-1.301c0.136-0.616-0.243-1.195-0.714-1.426c-0.442-0.216-1.102-0.147-1.427,0c-1.134,0.512-1.602,2.728-1.602,2.728h0.357v2.139H20V4.3C20,4.063,19.81,3.873,19.572,3.873zM15.966,3.253c0,0,0.266-1.258,0.908-1.548c0.186-0.083,0.56-0.123,0.811,0c0.267,0.131,0.481,0.459,0.403,0.81c-0.122,0.553-0.621,0.68-0.908,0.738C16.657,3.359,15.966,3.253,15.966,3.253z",
t:"t2,-20",s:"none",fl:"#333"}},f:{20:{},40:{t:""},50:{},80:{t:"t26,0"},90:{t:"t26,-20"},100:{t:"t2,-20"}}},{i:{a:{p:"M14,27c0,1.105-0.896,2-2,2s-2-0.895-2-2s0.896-2,2-2S14,25.895,14,27zM24,25c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S25.105,25,24,25zM26.713,22.586l-0.184,0.828C26.457,23.737,26.13,24,25.799,24H9.3c-0.663,0-1.302-0.527-1.427-1.179L4.75,6.59C4.69,6.264,4.373,6,4.042,6H1.334c-0.552,0-1-0.448-1-1s0.448-1,1-1h4C5.997,4,6.622,4.53,6.73,5.184L7.193,8H29.4c0.331,0,0.541,0.262,0.47,0.586l-2.406,10.828C27.393,19.737,27.065,20,26.734,20H9.3l0.254,1.409C9.612,21.735,9.929,22,10.26,22h15.984C26.575,22,26.785,22.263,26.713,22.586zM26.939,13H8.078l0.369,2h18.047L26.939,13zM7.524,10l0.369,2h19.268l0.444-2H7.524zM25.828,18l0.444-2H8.631L9,18H25.828z",
o:1,t:"",s:"none",fl:"#333"}},f:{50:{},80:{t:"t26,0"},81:{o:0},82:{t:"t-26,0"},83:{o:1},100:{t:""}}}]},shuffle:{d:500,it:1,sh:[{i:{a:{p:"M10.89,15.181l-1.431-2.178C9.095,12.449,8.263,12,7.6,12H3.2C2.537,12,2,11.463,2,10.8V9.2C2,8.537,2.537,8,3.2,8h6.713c0.663,0,1.496,0.448,1.861,1.002l1.596,2.418L10.89,15.181zM15.765,22.6l1.576,2.398C17.705,25.551,18.537,26,19.199,26H24v3.733c0,0.285,0.162,0.352,0.363,0.15l5.488-5.646c0.197-0.199,0.197-0.525,0-0.727l-5.488-5.396C24.162,17.916,24,17.984,24,18.266V22h-2.449c-0.662,0-1.496-0.449-1.859-1.002l-1.441-2.186L15.765,22.6z",
t:"",s:"none",fl:"#333"}},f:{0:{t:"t-32,0",p:"M10.89,18H9.459H7.6H3.2C2.537,18,2,17.463,2,16.8v-1.6C2,14.537,2.537,14,3.2,14h6.713h1.861h1.596L10.89,18zM15.765,18h1.576h1.858H24v3.733c0,0.285,0.162,0.352,0.363,0.15l5.488-5.646c0.197-0.199,0.197-0.525,0-0.727l-5.488-5.396C24.162,9.916,24,9.984,24,10.266V14h-2.449c-0.662,0-1.859,0-1.859,0H18.25L15.765,18z"},20:{t:""},30:{},60:{p:"M10.89,15.181l-1.431-2.178C9.095,12.449,8.263,12,7.6,12H3.2C2.537,12,2,11.463,2,10.8V9.2C2,8.537,2.537,8,3.2,8h6.713c0.663,0,1.496,0.448,1.861,1.002l1.596,2.418L10.89,15.181zM15.765,22.6l1.576,2.398C17.705,25.551,18.537,26,19.199,26H24v3.733c0,0.285,0.162,0.352,0.363,0.15l5.488-5.646c0.197-0.199,0.197-0.525,0-0.727l-5.488-5.396C24.162,17.916,24,17.984,24,18.266V22h-2.449c-0.662,0-1.496-0.449-1.859-1.002l-1.441-2.186L15.765,22.6z"},
100:{}}},{i:{a:{p:"M29.852,9.761c0.197,0.201,0.197,0.526,0,0.727l-5.488,5.398C24.162,16.085,24,16.017,24,15.734V12h-2.449c-0.662,0-1.496,0.448-1.859,1.002l-7.917,11.996C11.409,25.551,10.576,26,9.913,26H3.2C2.537,26,2,25.463,2,24.801v-1.602C2,22.537,2.537,22,3.2,22H7.6c0.663,0,1.495-0.449,1.859-1.002l7.882-11.995C17.705,8.449,18.537,8,19.199,8H24V4.266c0-0.284,0.162-0.351,0.363-0.15L29.852,9.761z",s:"none",fl:"#333"}},f:{0:{t:"t-32,0",p:"M29.853,15.761c0.197,0.201,0.197,0.526,0,0.727l-5.488,5.397c-0.201,0.201-0.363,0.133-0.363-0.15V18h-2.449h-1.859h-7.917l-1.861,0.002H3.201c-0.663,0-1.2-0.537-1.2-1.199v-1.602c0-0.662,0.537-1.199,1.2-1.199h4.399L9.46,14h7.882H19.2h4.801v-3.734c0-0.284,0.162-0.351,0.363-0.15L29.853,15.761z"},
20:{t:""},30:{},60:{p:"M29.852,9.761c0.197,0.201,0.197,0.526,0,0.727l-5.488,5.398C24.162,16.085,24,16.017,24,15.734V12h-2.449c-0.662,0-1.496,0.448-1.859,1.002l-7.917,11.996C11.409,25.551,10.576,26,9.913,26H3.2C2.537,26,2,25.463,2,24.801v-1.602C2,22.537,2.537,22,3.2,22H7.6c0.663,0,1.495-0.449,1.859-1.002l7.882-11.995C17.705,8.449,18.537,8,19.199,8H24V4.266c0-0.284,0.162-0.351,0.363-0.15L29.852,9.761z"},100:{}}}]},"sign-in":{d:500,it:2,sh:[{i:{a:{p:"M14.424,8.135C14.191,7.901,14,7.979,14,8.311V12H7.2C6.537,12,6,12.537,6,13.2v5.601C6,19.463,6.537,20,7.2,20H14v3.689c0,0.33,0.191,0.41,0.424,0.176L22,16.424c0.234-0.232,0.234-0.614,0-0.848L14.424,8.135z",
o:1,s:"none",fl:"#333"}},f:{40:{t:"t9,0",o:0},80:{},81:{t:"",o:1},100:{}}},{i:{a:{p:"M27,30H15c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h11V6H15c-0.553,0-1-0.447-1-1V3c0-0.553,0.447-1,1-1h12c1.656,0,3,1.343,3,3v22C30,28.656,28.656,30,27,30z",s:"none",fl:"#333"}},f:{}}]},"sign-out":{d:500,it:2,sh:[{i:{a:{p:"M20.424,8.135C20.191,7.901,20,7.979,20,8.311V12h-6.8c-0.663,0-1.2,0.537-1.2,1.2v5.601C12,19.463,12.537,20,13.2,20H20v3.689c0,0.33,0.191,0.41,0.424,0.176L28,16.424c0.234-0.232,0.234-0.614,0-0.848L20.424,8.135z",
o:1,s:"none",fl:"#333"}},f:{0:{t:"t-9,0",o:0},20:{},60:{t:"",o:1},100:{}}},{i:{a:{p:"M7,30h12c0.553,0,1-0.447,1-1v-2c0-0.553-0.447-1-1-1H8V6h11c0.553,0,1-0.447,1-1V3c0-0.553-0.447-1-1-1H7C5.344,2,4,3.343,4,5v22C4,28.656,5.344,30,7,30z",s:"none",fl:"#333"}},f:{}}]},signal:{d:800,it:1,sh:[{i:{a:{p:"M6,27.5C6,27.781,5.781,28,5.5,28h-3C2.219,28,2,27.781,2,27.5v-3C2,24.219,2.219,24,2.5,24h3C5.781,24,6,24.219,6,24.5V27.5zM12,27.5c0,0.281-0.219,0.5-0.5,0.5h-3C8.219,28,8,27.781,8,27.5v-5C8,22.219,8.219,22,8.5,22h3c0.281,0,0.5,0.219,0.5,0.5V27.5zM18,27.5c0,0.281-0.219,0.5-0.5,0.5h-3c-0.281,0-0.5-0.219-0.5-0.5v-9c0-0.281,0.219-0.5,0.5-0.5h3c0.281,0,0.5,0.219,0.5,0.5V27.5z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M24,27.5c0,0.281-0.219,0.5-0.5,0.5h-3c-0.281,0-0.5-0.219-0.5-0.5v-15c0-0.281,0.219-0.5,0.5-0.5h3c0.281,0,0.5,0.219,0.5,0.5V27.5z",s:"none",fl:"#333",o:1}},f:{0:{o:0},20:{},21:{o:1},100:{}}},{i:{a:{p:"M30,27.5c0,0.281-0.219,0.5-0.5,0.5h-3c-0.281,0-0.5-0.219-0.5-0.5v-23C26,4.219,26.219,4,26.5,4h3C29.781,4,30,4.219,30,4.5V27.5z",s:"none",fl:"#333",o:1}},f:{0:{o:0},30:{},31:{o:1},50:{},51:{o:0},70:{},71:{o:1},100:{}}}]},sitemap:{d:600,it:1,sh:[{i:{a:{p:"M29,29h-6c-0.553,0-1-0.447-1-1v-6c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v6C30,28.553,29.553,29,29,29zM20,28v-6c0-0.553-0.447-1-1-1h-6c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C19.553,29,20,28.553,20,28zM10,28v-6c0-0.553-0.448-1-1-1H3c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C9.552,29,10,28.553,10,28zM19,13v-1h-2h-2h-2v1l-8,4v3h2v-2l8-4v6h2v-6l8,4v2h2v-3L19,13z",
t:"t0,1",s:"none",fl:"#333"}},f:{0:{p:"M16,14L16,14c-0.553,0-1-0.447-1-1l0,0c0-0.553,0.447-1,1-1l0,0c0.553,0,1,0.447,1,1l0,0C17,13.553,16.553,14,16,14zM17,13L17,13c0-0.553-0.447-1-1-1l0,0c-0.552,0-1,0.447-1,1l0,0c0,0.553,0.448,1,1,1l0,0C16.553,14,17,13.553,17,13zM17,13L17,13c0-0.553-0.447-1-1-1l0,0c-0.552,0-1,0.447-1,1l0,0c0,0.553,0.448,1,1,1l0,0C16.553,14,17,13.553,17,13zM19,13v-1h-2h-2h-2v1h2v1h2v-2h-2l0,0h2l0,0h-2v2h2v-1H19z"},20:{p:"M16,20L16,20c-0.553,0-1-0.447-1-1l0,0c0-0.553,0.447-1,1-1l0,0c0.553,0,1,0.447,1,1l0,0C17,19.553,16.553,20,16,20zM17,19L17,19c0-0.553-0.447-1-1-1l0,0c-0.552,0-1,0.447-1,1l0,0c0,0.553,0.448,1,1,1l0,0C16.553,20,17,19.553,17,19zM17,19L17,19c0-0.553-0.447-1-1-1l0,0c-0.552,0-1,0.447-1,1l0,0c0,0.553,0.448,1,1,1l0,0C16.553,20,17,19.553,17,19zM19,13v-1h-2h-2h-2v1l2,4v3h2v-2l-2-4v6h2v-6l-2,4v2h2v-3L19,13z"},
40:{p:"M19,29h-6c-0.553,0-1-0.447-1-1v-6c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v6C20,28.553,19.553,29,19,29zM20,28v-6c0-0.553-0.447-1-1-1h-6c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C19.553,29,20,28.553,20,28zM20,28v-6c0-0.553-0.447-1-1-1h-6c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C19.553,29,20,28.553,20,28zM19,13v-1h-2h-2h-2v1l2,4v3h2v-2l-2-4v6h2v-6l-2,4v2h2v-3L19,13z"},70:{p:"M29,29h-6c-0.553,0-1-0.447-1-1v-6c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v6C30,28.553,29.553,29,29,29zM20,28v-6c0-0.553-0.447-1-1-1h-6c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C19.553,29,20,28.553,20,28zM10,28v-6c0-0.553-0.448-1-1-1H3c-0.552,0-1,0.447-1,1v6c0,0.553,0.448,1,1,1h6C9.552,29,10,28.553,10,28zM19,13v-1h-2h-2h-2v1l-8,4v3h2v-2l8-4v6h2v-6l8,4v2h2v-3L19,13z"},
100:{}}},{i:{a:{p:"M19,11h-6c-0.553,0-1-0.447-1-1V4c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1v6C20,10.553,19.553,11,19,11z",s:"none",t:"t0,1",fl:"#333"}},f:{}}]},"sky-dish":{d:1200,it:1,sh:[{i:{a:{p:"M7.949,0c-0.75,0-1.5,0-2.25,0C5.699,3.15,3.15,5.699,0,5.699c0,0.75,0,1.5,0,2.25C4.35,7.949,7.949,4.35,7.949,0z",s:"none",o:0,t:"s0.3,0.3,0,0",fl:"#333"}},f:{0:{o:0.7},10:{t:"s1,1,0,0"},15:{o:0},16:{o:0.7,t:"s0.3,0.3,0,0"},25:{t:"s1,1,0,0"},30:{o:0},31:{o:0.7,t:"s0.3,0.3,0,0"},40:{t:"s1,1,0,0"},45:{o:0},
46:{o:0.7,t:"s0.3,0.3,0,0"},55:{t:"s1,1,0,0"},60:{o:0},61:{o:0.7,t:"s0.3,0.3,0,0"},70:{t:"s1,1,0,0"},75:{o:0},100:{}}},{i:{a:{p:"M0,12V9.75C5.625,9.75,9.75,5.1,9.75,0H12C12,7.199,6,12,0,12z",o:0,t:"s0.1,0.1,0,0",s:"none",fl:"#333"}},f:{0:{o:0.7},10:{t:"s1,1,0,0"},15:{o:0},16:{o:0.7,t:"s0.1,0.1,0,0"},25:{t:"s1,1,0,0"},30:{o:0},31:{o:0.7,t:"s0.1,0.1,0,0"},40:{t:"s1,1,0,0"},45:{o:0},46:{o:0.7,t:"s0.1,0.1,0,0"},55:{t:"s1,1,0,0"},60:{o:0},61:{o:0.7,t:"s0.1,0.1,0,0"},70:{t:"s1,1,0,0"},75:{o:0},100:{}}},
{i:{a:{p:"M28.006,19.328c-3.938,4.094-10.779,3.23-15.219-0.5C8.346,15.104,6.304,8.516,9.651,3.929c0.197-0.269,0.576-0.299,0.83-0.086l17.466,14.655C28.201,18.711,28.234,19.09,28.006,19.328zM24.355,5.041c-0.846-0.71-2.107-0.6-2.816,0.247c-0.471,0.561-0.549,1.295-0.322,1.94l-1.74,2.072c-0.213,0.254-0.18,0.633,0.072,0.845l0.615,0.516c0.254,0.212,0.633,0.179,0.846-0.074l1.738-2.073c0.674,0.11,1.383-0.094,1.855-0.655C25.313,7.013,25.203,5.752,24.355,5.041z",s:"none",fl:"#333"}},f:{15:{},35:{t:"r-80,16,15"},
70:{},90:{t:""},100:{}},fIE:{15:{},35:{t:"r-80,14.5,13.5"},70:{},90:{t:""},100:{}}},{i:{a:{p:"M18.189,22.568C18.084,22.254,17.73,22,17.4,22H14.6c-0.331,0-0.685,0.254-0.789,0.568L12,28h-1.4c-0.331,0-0.6,0.27-0.6,0.6V30h12v-1.4c0-0.33-0.27-0.6-0.6-0.6H20L18.189,22.568z",s:"none",fl:"#333"}},f:{}}]},skype:{d:0,it:1,sh:[{i:{a:{p:"M29.009,18.973c0.2-0.909,0.305-1.855,0.305-2.824c0-7.272-5.896-13.168-13.17-13.168c-0.767,0-1.52,0.066-2.251,0.192C12.718,2.431,11.325,2,9.832,2C5.614,2,2.195,5.418,2.195,9.636c0,1.41,0.383,2.729,1.05,3.861c-0.176,0.857-0.266,1.741-0.266,2.649c0,7.273,5.896,13.167,13.167,13.167c0.824,0,1.63-0.075,2.414-0.221C19.634,29.673,20.862,30,22.17,30c4.217,0,7.635-3.417,7.635-7.637C29.803,21.145,29.518,19.994,29.009,18.973zM16.006,25.156c-1.347-0.004-2.972-0.166-4.311-0.792c-1.953-0.914-3.406-2.601-3.416-4.499c-0.002-0.483,0.417-1.8,1.924-1.754c0.451,0.014,1.292,0.053,1.933,1.532c0.82,1.896,1.66,2.421,3.771,2.533c1.289,0.068,3.589-0.513,3.628-2.333c0.011-0.521-0.178-0.92-0.508-1.25c-0.731-0.73-1.932-0.931-3.822-1.372c-1.361-0.318-6.609-1.059-6.565-5.33c0.013-1.229,0.656-5.029,7.315-5.048c5.541-0.016,7.041,3.119,6.94,4.43c-0.1,1.301-0.899,1.788-1.891,1.836c-1.109,0.054-1.63-0.916-1.921-1.4c-0.988-1.646-1.688-1.985-3.38-1.969c-2.408,0.023-3.108,1.223-3.099,1.824c0.005,0.3,0.078,0.56,0.263,0.768c0.828,0.931,2.631,1.216,3.666,1.455c2.062,0.476,4.046,0.997,5.166,1.789c1.396,0.987,2.064,2.087,2.019,3.888C23.596,24.265,18.795,25.164,16.006,25.156z",
s:"none",fl:"#00AFF0"}},f:{}}]},sort:{d:500,it:2,sh:[{i:{a:{p:"M8.131,13.585l7.497-7.415c0.228-0.228,0.597-0.227,0.823,0l7.418,7.415c0.228,0.227,0.151,0.413-0.171,0.413H8.302C7.979,14,7.903,13.812,8.131,13.585z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t0,10s1.2"},"62.5":{t:"t0,10s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}},{i:{a:{p:"M23.869,18.413l-7.497,7.415c-0.228,0.228-0.597,0.227-0.823,0l-7.418-7.415C7.903,18.187,7.979,18,8.302,18h15.396C24.021,17.999,24.097,18.187,23.869,18.413z",
t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s0.8"},"37.5":{t:"t0,-10s0.8"},"62.5":{t:"t0,-10s1.2"},"87.5":{t:"t0,0s1.2"},100:{t:"t0,0s1"}}}]},"sort-down":{d:500,it:2,sh:[{i:{a:{p:"M23.869,12.414l-7.497,7.415c-0.228,0.228-0.597,0.227-0.823,0l-7.418-7.415c-0.228-0.227-0.151-0.413,0.171-0.413h15.396C24.021,12,24.097,12.188,23.869,12.414z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t0,10s1.2"},"62.5":{t:"t0,10s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},"sort-up":{d:500,
it:2,sh:[{i:{a:{p:"M8.131,19.586l7.497-7.415c0.228-0.228,0.597-0.227,0.824,0l7.417,7.415c0.228,0.227,0.151,0.413-0.171,0.413H8.302C7.979,20,7.903,19.813,8.131,19.586z",t:"t0,0s1",s:"none",fl:"#333"}},f:{"12.5":{t:"t0,0s1.2"},"37.5":{t:"t0,-10s1.2"},"62.5":{t:"t0,-10s0.8"},"87.5":{t:"t0,0s0.8"},100:{t:"t0,0s1"}}}]},speaker:{d:300,it:3,sh:[{i:{a:{p:"M3.2,22H8l7.04,5.8c0.53,0.398,0.96,0.184,0.96-0.479V4.68c0-0.663-0.43-0.878-0.96-0.48L8,10.004H3.2c-0.663,0-1.2,0.537-1.2,1.2v9.601C2,21.467,2.537,22,3.2,22z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M18.438,18.863c-0.402,0.383-0.579,0.982-0.305,1.459c0.273,0.475,0.891,0.645,1.324,0.299c0.539-0.438,1.016-0.973,1.383-1.611c1.488-2.576,0.848-5.796-1.375-7.627c-0.426-0.351-1.047-0.181-1.32,0.298l0,0c-0.276,0.479-0.102,1.08,0.293,1.467c1.281,1.246,1.605,3.246,0.672,4.863C18.922,18.334,18.691,18.619,18.438,18.863z",s:"none",fl:"#333",o:1}},f:{"16.5":{o:0},33:{o:0},"49.5":{o:1},66:{o:1},"82.5":{o:1},100:{o:1}}},{i:{a:{p:"M20.819,22.368c-0.443,0.33-0.613,0.936-0.338,1.409c0.275,0.477,0.889,0.645,1.34,0.326c1.123-0.794,2.104-1.817,2.837-3.087c2.594-4.492,1.308-10.157-2.819-13.117c-0.447-0.322-1.064-0.154-1.34,0.323c-0.275,0.479-0.107,1.085,0.332,1.418c3.173,2.398,4.136,6.841,2.096,10.376C22.376,20.97,21.649,21.751,20.819,22.368z",
s:"none",fl:"#333",o:1}},f:{"16.5":{o:0},33:{o:0},"49.5":{o:0},66:{o:1},"82.5":{o:1},100:{o:1}}},{i:{a:{p:"M22.84,25.854c-0.455,0.313-0.621,0.92-0.346,1.398s0.889,0.645,1.347,0.336c1.704-1.148,3.184-2.686,4.281-4.585c3.697-6.406,1.76-14.517-4.277-18.593c-0.456-0.31-1.071-0.143-1.347,0.336c-0.275,0.478-0.109,1.086,0.346,1.4c5.079,3.519,6.692,10.407,3.547,15.856C25.477,23.587,24.251,24.878,22.84,25.854z",s:"none",fl:"#333",o:1}},f:{"16.5":{o:0},33:{o:0},"49.5":{o:0},66:{o:0},"82.5":{o:1},100:{o:1}}}]},
"spinner-one":{d:1E3,it:1,sh:[{i:{a:{p:"M5.842,8.64c0-1.541,1.26-2.8,2.8-2.8c1.54,0,2.799,1.259,2.8,2.8c0,1.54-1.26,2.8-2.8,2.8C7.102,11.44,5.842,10.18,5.842,8.64zM13.481,5.473c0-1.698,1.383-3.081,3.08-3.08c1.697,0,3.08,1.382,3.08,3.081c0.001,1.697-1.383,3.079-3.08,3.079C14.864,8.553,13.481,7.17,13.481,5.473zM2.954,16.471c0.05-1.399,1.208-2.479,2.607-2.429c1.399,0.05,2.478,1.209,2.429,2.608c-0.049,1.383-1.209,2.479-2.607,2.43C3.983,19.029,2.905,17.854,2.954,16.471zM21.121,8.64c0-1.854,1.505-3.36,3.359-3.36s3.359,1.505,3.36,3.36c0,1.855-1.505,3.36-3.36,3.36C22.625,12,21.12,10.496,21.121,8.64zM6.401,24.48c0-1.244,0.999-2.24,2.241-2.242c1.243,0,2.24,0.998,2.24,2.24c0,1.244-0.997,2.24-2.24,2.24C7.399,26.719,6.401,25.721,6.401,24.48zM14.601,27.648c0-1.088,0.875-1.963,1.96-1.961c1.084,0,1.959,0.875,1.96,1.961c0,1.084-0.875,1.959-1.96,1.959C15.476,29.607,14.601,28.732,14.601,27.648zM26.248,16.56c0-0.769,0.631-1.4,1.4-1.4c0.77,0,1.399,0.631,1.399,1.4c0,0.77-0.63,1.401-1.399,1.401S26.248,17.33,26.248,16.56zM22.801,24.479c0-0.928,0.752-1.68,1.68-1.68s1.68,0.752,1.681,1.68c-0.001,0.928-0.753,1.68-1.681,1.68S22.801,25.406,22.801,24.479z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-two":{d:1E3,it:1,sh:[{i:{a:{p:"M22.054,8.047c-3.879-2.697-9.357-2.29-12.758,0.901C5.009,12.97,5.034,19.815,9.076,23.989c3.976,4.104,10.694,4.312,15.038,0.667c3.924-3.294,5.229-8.997,3.115-13.673c-0.556-1.23-1.334-2.285-2.202-3.308c3.54,3.292,4.754,8.237,3.131,12.909c-1.9,5.467-7.144,8.875-13.188,8.399C9.101,28.521,4.259,23.816,3.27,18.059c-0.971-5.65,1.866-11.452,6.88-14.218c3.244-1.79,7.291-2.264,10.836-1.14c1.44,0.457,3.894,1.198,4.505,2.773C26.229,7.373,24.058,9.44,22.054,8.047z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-three":{d:1E3,it:1,sh:[{i:{a:{p:"M25.68,14.241c-0.596-5.563-6.088-9.541-11.333-9.075C8.524,5.684,4.612,10.422,4,16c-0.049-3.708,1.2-7.211,3.978-9.757c3.131-2.869,7.532-3.994,11.671-3.073c3.925,0.873,7.274,3.574,9.104,7.133c0.618,1.201,1.596,3.096,1.044,4.468C29.041,16.656,25.917,16.458,25.68,14.241zM6.321,17.759c0.888,6.158,6.083,9.541,11.333,9.075C23.457,26.319,27.414,21.577,28,16c0.051,3.707-1.2,7.213-3.978,9.758c-3.132,2.869-7.53,3.994-11.67,3.073c-3.927-0.875-7.275-3.575-9.107-7.135c-0.618-1.201-1.595-3.095-1.044-4.467C2.959,15.343,6.004,15.561,6.321,17.759z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-four":{d:1E3,it:1,sh:[{i:{a:{p:"M23,3.875C16.304,0.009,7.742,2.304,3.875,9S2.304,24.258,9,28.124S24.258,29.696,28.124,23S29.696,7.742,23,3.875zM19,10.804c2.87,1.657,3.853,5.328,2.196,8.196c-1.657,2.87-5.326,3.854-8.196,2.196c-2.87-1.657-3.854-5.326-2.196-8.196C12.46,10.131,16.13,9.147,19,10.804zM5.608,10c1.295-2.243,3.207-3.899,5.394-4.9c0.301-0.137,0.62,0.025,0.706,0.344l0.736,2.747c0.085,0.319-0.091,0.691-0.379,0.854C10.859,9.723,9.813,10.716,9.072,12C6.863,15.826,8.174,20.719,12,22.928S20.719,23.826,22.928,20c0.741-1.284,1.078-2.687,1.063-4.068c-0.004-0.332,0.229-0.671,0.55-0.756l2.747-0.736c0.32-0.085,0.618,0.109,0.651,0.439c0.228,2.395-0.252,4.878-1.547,7.121C23.079,27.739,15.739,29.706,10,26.393S2.294,15.739,5.608,10z",
s:"none",fl:"#333"}},f:{0:{t:"r0"},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-five":{d:1E3,it:1,sh:[{i:{a:{p:"M23.949,4.874l-3.484,3.484c-0.234,0.234-0.655,0.285-0.952,0.14c-2.214-1.084-4.816-1.089-7.03,0c-0.298,0.146-0.717,0.094-0.951-0.14L8.049,4.875C7.815,4.642,7.838,4.291,8.112,4.103c4.743-3.245,11.03-3.246,15.773-0.003C24.158,4.287,24.184,4.64,23.949,4.874zM27.126,8.051l-3.484,3.483c-0.233,0.234-0.285,0.656-0.139,0.955c1.081,2.211,1.085,4.811,0,7.026c-0.146,0.299-0.095,0.719,0.139,0.952l3.483,3.483c0.233,0.233,0.586,0.209,0.774-0.064c3.244-4.744,3.244-11.03-0.002-15.773C27.712,7.84,27.36,7.816,27.126,8.051zM8.497,19.509c-1.082-2.211-1.088-4.811,0-7.026c0.146-0.296,0.095-0.717-0.139-0.951L4.875,8.049C4.641,7.815,4.289,7.841,4.102,8.113c-3.246,4.745-3.245,11.03-0.001,15.773c0.188,0.273,0.54,0.297,0.773,0.063l3.484-3.484C8.592,20.231,8.643,19.808,8.497,19.509zM19.516,23.502c-2.213,1.087-4.817,1.083-7.029,0c-0.298-0.146-0.718-0.094-0.951,0.14L8.05,27.126c-0.233,0.233-0.208,0.587,0.064,0.773c4.745,3.242,11.03,3.244,15.774-0.003c0.271-0.187,0.296-0.539,0.063-0.772l-3.483-3.482C20.234,23.408,19.814,23.355,19.516,23.502z",
s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-six":{d:1E3,it:1,sh:[{i:{a:{p:"M16,14c-0.178,0-0.347,0.031-0.512,0.074l-3.023-3.023c-0.391-0.391-1.023-0.391-1.414,0c-0.393,0.391-0.393,1.023,0,1.414l3.023,3.024C14.031,15.653,14,15.822,14,16c0,1.104,0.896,2,2,2s2-0.896,2-2S17.104,14,16,14z",s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r-360,16,16"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r-360,14.5,14.5"}}},{i:{a:{p:"M18.121,2.878c1.174,1.173,1.172,3.072,0,4.243c-1.171,1.172-3.069,1.174-4.241,0.001c-1.172-1.171-1.172-3.071,0-4.244C15.052,1.708,16.952,1.708,18.121,2.878zM3.578,11.277c0.428,1.6,2.075,2.551,3.672,2.122c1.604-0.43,2.551-2.075,2.122-3.674C8.944,8.123,7.301,7.172,5.699,7.603C4.097,8.03,3.148,9.675,3.578,11.277zM5.699,24.397c1.598,0.43,3.247-0.521,3.672-2.121c0.43-1.602-0.52-3.247-2.122-3.673c-1.602-0.43-3.245,0.516-3.672,2.118C3.146,22.323,4.097,23.968,5.699,24.397zM18.121,29.121c1.172-1.169,1.172-3.073,0-4.243c-1.173-1.172-3.071-1.172-4.241,0.002c-1.172,1.172-1.176,3.068-0.002,4.239C15.048,30.293,16.95,30.293,18.121,29.121zM28.423,20.724c-0.426-1.601-2.074-2.554-3.674-2.122c-1.602,0.432-2.551,2.075-2.119,3.675c0.43,1.602,2.07,2.553,3.668,2.121C27.899,23.972,28.853,22.323,28.423,20.724zM26.302,7.603c-1.598-0.432-3.248,0.52-3.674,2.122c-0.428,1.603,0.521,3.247,2.123,3.672c1.602,0.429,3.246-0.517,3.67-2.117C28.853,9.68,27.901,8.031,26.302,7.603z",
s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r360"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}}]},"spinner-seven":{d:2E3,it:1,sh:[{i:{a:{p:"M29.987,15.4C29.673,7.948,23.531,2,16,2S2.327,7.948,2.013,15.4C1.999,15.731,2.269,16,2.6,16h0.8c0.332,0,0.599-0.27,0.615-0.601C4.328,9.051,9.575,4,16,4c6.426,0,11.672,5.051,11.985,11.399C28.002,15.73,28.269,16,28.6,16H29.4C29.731,16,30.001,15.731,29.987,15.4z",s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r360,16,16"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r360,14.5,14.5"}}},
{i:{a:{p:"M25.982,15.4C25.672,10.158,21.322,6,16,6c-5.322,0-9.672,4.158-9.982,9.4C5.998,15.73,6.269,16,6.6,16h0.8c0.332,0,0.598-0.27,0.618-0.6C8.283,10.992,11.469,8,16,8c4.531,0,7.718,2.992,7.982,7.4c0.02,0.331,0.286,0.6,0.617,0.6H25.4C25.731,16,26.002,15.73,25.982,15.4z",s:"none",fl:"#333"}},f:{0:{t:""},100:{t:"r-720,16,16"}},fIE:{0:{t:"r0,14.5,14.5"},100:{t:"r-720,14.5,14.5"}}}]},"star-empty":{d:700,it:1,sh:[{i:{a:{p:"M30,12.813l-9.675-1.425L16,2.5l-4.326,8.888L2,12.813l7,6.917L7.348,29.5L16,24.888l8.652,4.612l-1.653-9.771L30,12.813z M16,23.278L9.201,26.9l1.299-7.67L5,13.797l7.602-1.119L16,5.7l3.4,6.979l7.6,1.119l-5.499,5.433l1.298,7.67L16,23.278z",
o:0,t:"s1",s:"none",fl:"#333"}},f:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6"},100:{t:""}},fIE:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6,1.6,14.5,14.5"},100:{t:""}}},{i:{a:{p:"M30,12.813l-9.675-1.425L16,2.5l-4.326,8.888L2,12.813l7,6.917L7.348,29.5L16,24.888l8.652,4.612l-1.653-9.771L30,12.813z M16,23.278L9.201,26.9l1.299-7.67L5,13.797l7.602-1.119L16,5.7l3.4,6.979l7.6,1.119l-5.499,5.433l1.298,7.67L16,23.278z",s:"none",fl:"#333"}},f:{0:{t:"t-6,-12s0.1"},30:{t:"s0.6t6,10"},45:{t:""},100:{}}}]},"star-full":{d:700,it:1,
sh:[{i:{a:{p:"M30,12.813l-9.675-1.425L16,2.5l-4.326,8.888L2,12.813l7,6.917L7.348,29.5L16,24.888l8.652,4.612l-1.653-9.771L30,12.813z M16,23.278L9.201,26.9l1.299-7.67L5,13.797l7.602-1.119L16,5.7l3.4,6.979l7.6,1.119l-5.499,5.433l1.298,7.67L16,23.278z",o:0,t:"s1",s:"none",fl:"#333"}},f:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6"},100:{t:""}},fIE:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6,1.6,14.5,14.5"},100:{t:""}}},{i:{a:{p:"M16,2.5l4.325,8.888L30,12.813l-7.001,6.917l1.653,9.771L16,24.888L7.348,29.5L9,19.729l-7-6.917l9.674-1.425L16,2.5z",
s:"none",fl:"#333"}},f:{0:{t:"t-6,-12s0.1"},30:{t:"s0.6t6,10"},45:{t:""},100:{}}}]},"star-half":{d:700,it:1,sh:[{i:{a:{p:"M30,12.813l-9.675-1.425L16,2.5l-4.326,8.888L2,12.813l7,6.917L7.348,29.5L16,24.888l8.652,4.612l-1.653-9.771L30,12.813zM16,23.278L9.201,26.9l1.299-7.67L5,13.797l7.602-1.119L16,5.7l3.4,6.979l7.6,1.119l-5.499,5.433l1.298,7.67L16,23.278z",o:0,t:"s1",s:"none",fl:"#333"}},f:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6"},100:{t:""}},fIE:{49:{o:0},50:{o:1},70:{o:0,t:"s1.6,1.6,14.5,14.5"},100:{t:""}}},
{i:{a:{p:"M30,12.813l-9.675-1.425L16,2.5l-4.326,8.888L2,12.813l7,6.917L7.348,29.5L16,24.888l8.652,4.612l-1.653-9.771L30,12.813zM16.4,23.278V6l3,6.679l7.6,1.119l-5.499,5.433l1.298,7.67L16.4,23.278z",s:"none",fl:"#333"}},f:{0:{t:"t-6,-12s0.1"},30:{t:"s0.6t6,10"},45:{t:""},100:{}}}]},stopwatch:{d:800,it:1,sh:[{i:{a:{p:"M17,10.6c0-0.552-0.586-1-1-1s-1,0.448-1,1v5.872c-0.597,0.345-1,0.989-1,1.729c0,1.105,0.896,2,2,2s2-0.895,2-2c0-0.739-0.402-1.385-1-1.73V10.6z",s:"none",fl:"#333"}},f:{15:{t:""},16:{t:"r20,16,18.25"},
20:{t:"r20,16,18.25"},21:{t:"r40,16,18.25"},25:{t:"r40,16,18.25"},26:{t:"r60,16,18.25"},30:{t:"r60,16,18.25"},31:{t:"r80,16,18.25"},35:{t:"r80,16,18.25"},36:{t:"r100,16,18.25"},40:{t:"r100,16,18.25"},41:{t:"r120,16,18.25"},45:{t:"r120,16,18.25"},46:{t:"r140,16,18.25"},50:{t:"r140,16,18.25"},51:{t:"r160,16,18.25"},55:{t:"r160,16,18.25"},56:{t:"r180,16,18.25"},60:{t:"r180,16,18.25"},61:{t:"r200,16,18.25"},65:{t:"r200,16,18.25"},66:{t:"r220,16,18.25"},70:{t:"r220,16,18.25"},71:{t:"r240,16,18.25"},75:{t:"r240,16,18.25"},
76:{t:"r260,16,18.25"},80:{t:"r260,16,18.25"},81:{t:"r280,16,18.25"},85:{t:"r280,16,18.25"},90:{t:""},100:{}},fIE:{15:{t:""},16:{t:"r20,14.5,16.75"},20:{t:"r20,14.5,16.75"},21:{t:"r40,14.5,16.75"},25:{t:"r40,14.5,16.75"},26:{t:"r60,14.5,16.75"},30:{t:"r60,14.5,16.75"},31:{t:"r80,14.5,16.75"},35:{t:"r80,14.5,16.75"},36:{t:"r100,14.5,16.75"},40:{t:"r100,14.5,16.75"},41:{t:"r120,14.5,16.75"},45:{t:"r120,14.5,16.75"},46:{t:"r140,14.5,16.75"},50:{t:"r140,14.5,16.75"},51:{t:"r160,14.5,16.75"},55:{t:"r160,14.5,16.75"},
56:{t:"r180,14.5,16.75"},60:{t:"r180,14.5,16.75"},61:{t:"r200,14.5,16.75"},65:{t:"r200,14.5,16.75"},66:{t:"r220,14.5,16.75"},70:{t:"r220,14.5,16.75"},71:{t:"r240,14.5,16.75"},75:{t:"r240,14.5,16.75"},76:{t:"r260,14.5,16.75"},80:{t:"r260,14.5,16.75"},81:{t:"r280,14.5,16.75"},85:{t:"r280,14.5,16.75"},90:{t:""},100:{}}},{i:{a:{p:"M23.026,7.031l0.98-1.699l0.541,0.313c0.179,0.104,0.399,0.059,0.491-0.101l0.167-0.289c0.092-0.159,0.021-0.373-0.158-0.476L23.1,3.653C22.92,3.55,22.7,3.595,22.607,3.754l-0.166,0.289C22.349,4.203,22.42,4.416,22.6,4.52l0.541,0.313l-0.978,1.694C20.597,5.7,18.845,5.187,16.986,5.05H17V3.6h0.875c0.346,0,0.625-0.298,0.625-0.667V2.267c0-0.368-0.279-0.667-0.625-0.667h-3.75c-0.346,0-0.625,0.298-0.625,0.667v0.667c0,0.368,0.279,0.667,0.625,0.667H15v1.45h0.014C8.159,5.556,2.75,11.265,2.75,18.25C2.75,25.567,8.683,31.5,16,31.5s13.25-5.933,13.25-13.25C29.25,13.516,26.76,9.375,23.026,7.031zM23.938,25.481l-1.01-1.01l-0.707,0.708l1.009,1.009c-1.794,1.636-4.141,2.667-6.73,2.786l0-1.426l-1,0.001l0,1.425c-2.59-0.119-4.937-1.15-6.731-2.786l1.009-1.01L9.07,24.472l-1.009,1.01c-1.636-1.795-2.667-4.142-2.786-6.731h1.425l0-1H5.275c0.119-2.59,1.151-4.936,2.787-6.731l1.009,1.009l0.707-0.708l-1.009-1.008c1.794-1.636,4.141-2.667,6.731-2.787V8.95h1V7.525c2.59,0.119,4.936,1.151,6.73,2.787l-1.009,1.009l0.708,0.707l1.008-1.009c1.637,1.795,2.668,4.141,2.787,6.731h-1.426l0.001,1h1.425C26.605,21.34,25.574,23.687,23.938,25.481z",
s:"none",fl:"#333"}},f:{15:{p:"M23.026,7.031l0.98-1.699l0.541,0.313c0.179,0.104,0.399,0.059,0.491-0.101l0.167-0.289c0.092-0.159,0.021-0.373-0.158-0.476L23.1,3.653C22.92,3.55,22.7,3.595,22.607,3.754l-0.166,0.289C22.349,4.203,22.42,4.416,22.6,4.52l0.541,0.313l-0.978,1.694C20.597,5.7,18.845,5.187,16.986,5.05H17V4.7h0.875c0.346,0,0.625-0.298,0.625-0.667V3.367c0-0.368-0.279-0.667-0.625-0.667h-3.75c-0.346,0-0.625,0.298-0.625,0.667v0.667c0,0.368,0.279,0.667,0.625,0.667H15v0.35h0.014C8.159,5.556,2.75,11.265,2.75,18.25C2.75,25.567,8.683,31.5,16,31.5s13.25-5.933,13.25-13.25C29.25,13.516,26.76,9.375,23.026,7.031zM23.938,25.481l-1.01-1.01l-0.707,0.708l1.009,1.009c-1.794,1.636-4.141,2.667-6.73,2.786l0-1.426l-1,0.001l0,1.425c-2.59-0.119-4.937-1.15-6.731-2.786l1.009-1.01L9.07,24.472l-1.009,1.01c-1.636-1.795-2.667-4.142-2.786-6.731h1.425l0-1H5.275c0.119-2.59,1.151-4.936,2.787-6.731l1.009,1.009l0.707-0.708l-1.009-1.008c1.794-1.636,4.141-2.667,6.731-2.787V8.95h1V7.525c2.59,0.119,4.936,1.151,6.73,2.787l-1.009,1.009l0.708,0.707l1.008-1.009c1.637,1.795,2.668,4.141,2.787,6.731h-1.426l0.001,1h1.425C26.605,21.34,25.574,23.687,23.938,25.481z"},
85:{p:"M23.026,7.031l0.98-1.699l0.541,0.313c0.179,0.104,0.399,0.059,0.491-0.101l0.167-0.289c0.092-0.159,0.021-0.373-0.158-0.476L23.1,3.653C22.92,3.55,22.7,3.595,22.607,3.754l-0.166,0.289C22.349,4.203,22.42,4.416,22.6,4.52l0.541,0.313l-0.978,1.694C20.597,5.7,18.845,5.187,16.986,5.05H17V4.7h0.875c0.346,0,0.625-0.298,0.625-0.667V3.367c0-0.368-0.279-0.667-0.625-0.667h-3.75c-0.346,0-0.625,0.298-0.625,0.667v0.667c0,0.368,0.279,0.667,0.625,0.667H15v0.35h0.014C8.159,5.556,2.75,11.265,2.75,18.25C2.75,25.567,8.683,31.5,16,31.5s13.25-5.933,13.25-13.25C29.25,13.516,26.76,9.375,23.026,7.031zM23.938,25.481l-1.01-1.01l-0.707,0.708l1.009,1.009c-1.794,1.636-4.141,2.667-6.73,2.786l0-1.426l-1,0.001l0,1.425c-2.59-0.119-4.937-1.15-6.731-2.786l1.009-1.01L9.07,24.472l-1.009,1.01c-1.636-1.795-2.667-4.142-2.786-6.731h1.425l0-1H5.275c0.119-2.59,1.151-4.936,2.787-6.731l1.009,1.009l0.707-0.708l-1.009-1.008c1.794-1.636,4.141-2.667,6.731-2.787V8.95h1V7.525c2.59,0.119,4.936,1.151,6.73,2.787l-1.009,1.009l0.708,0.707l1.008-1.009c1.637,1.795,2.668,4.141,2.787,6.731h-1.426l0.001,1h1.425C26.605,21.34,25.574,23.687,23.938,25.481z"},
90:{p:"M23.026,7.031l0.234-0.399l0.541,0.313c0.179,0.104,0.399,0.059,0.491-0.101l0.167-0.289c0.092-0.159,0.021-0.373-0.158-0.476l-1.948-1.125c-0.18-0.104-0.399-0.058-0.492,0.101l-0.166,0.289c-0.093,0.16-0.021,0.373,0.158,0.476l0.541,0.313l-0.231,0.394C20.597,5.7,18.845,5.187,16.986,5.05H17V3.6h0.875c0.346,0,0.625-0.298,0.625-0.667V2.267c0-0.368-0.279-0.667-0.625-0.667h-3.75c-0.346,0-0.625,0.298-0.625,0.667v0.667c0,0.368,0.279,0.667,0.625,0.667H15v1.45h0.014C8.159,5.556,2.75,11.265,2.75,18.25C2.75,25.567,8.683,31.5,16,31.5s13.25-5.933,13.25-13.25C29.25,13.516,26.76,9.375,23.026,7.031zM23.938,25.481l-1.01-1.01l-0.707,0.708l1.009,1.009c-1.794,1.636-4.141,2.667-6.73,2.786l0-1.426l-1,0.001l0,1.425c-2.59-0.119-4.937-1.15-6.731-2.786l1.009-1.01L9.07,24.472l-1.009,1.01c-1.636-1.795-2.667-4.142-2.786-6.731h1.425l0-1H5.275c0.119-2.59,1.151-4.936,2.787-6.731l1.009,1.009l0.707-0.708l-1.009-1.008c1.794-1.636,4.141-2.667,6.731-2.787V8.95h1V7.525c2.59,0.119,4.936,1.151,6.73,2.787l-1.009,1.009l0.708,0.707l1.008-1.009c1.637,1.795,2.668,4.141,2.787,6.731h-1.426l0.001,1h1.425C26.605,21.34,25.574,23.687,23.938,25.481z"},
100:{p:"M23.026,7.031l0.98-1.699l0.541,0.313c0.179,0.104,0.399,0.059,0.491-0.101l0.167-0.289c0.092-0.159,0.021-0.373-0.158-0.476L23.1,3.653C22.92,3.55,22.7,3.595,22.607,3.754l-0.166,0.289C22.349,4.203,22.42,4.416,22.6,4.52l0.541,0.313l-0.978,1.694C20.597,5.7,18.845,5.187,16.986,5.05H17V3.6h0.875c0.346,0,0.625-0.298,0.625-0.667V2.267c0-0.368-0.279-0.667-0.625-0.667h-3.75c-0.346,0-0.625,0.298-0.625,0.667v0.667c0,0.368,0.279,0.667,0.625,0.667H15v1.45h0.014C8.159,5.556,2.75,11.265,2.75,18.25C2.75,25.567,8.683,31.5,16,31.5s13.25-5.933,13.25-13.25C29.25,13.516,26.76,9.375,23.026,7.031zM23.938,25.481l-1.01-1.01l-0.707,0.708l1.009,1.009c-1.794,1.636-4.141,2.667-6.73,2.786l0-1.426l-1,0.001l0,1.425c-2.59-0.119-4.937-1.15-6.731-2.786l1.009-1.01L9.07,24.472l-1.009,1.01c-1.636-1.795-2.667-4.142-2.786-6.731h1.425l0-1H5.275c0.119-2.59,1.151-4.936,2.787-6.731l1.009,1.009l0.707-0.708l-1.009-1.008c1.794-1.636,4.141-2.667,6.731-2.787V8.95h1V7.525c2.59,0.119,4.936,1.151,6.73,2.787l-1.009,1.009l0.708,0.707l1.008-1.009c1.637,1.795,2.668,4.141,2.787,6.731h-1.426l0.001,1h1.425C26.605,21.34,25.574,23.687,23.938,25.481z"}}}]},
stumbleupon:{d:0,it:1,sh:[{i:{a:{p:"M30,20.561C30,24.117,27.191,27,23.734,27c-3.438,0-6.226-2.846-6.257-6.383v-4.012l1.913,0.916l2.852-0.873v4.049c0,0.836,0.66,1.523,1.477,1.523c0.82,0,1.484-0.688,1.484-1.523V16.57H30C30,16.57,30,20.52,30,20.561zM17.478,11.47v1.771l1.913,0.916l2.852-0.877v-2.034C22.145,7.781,19.391,5,15.997,5c-3.378,0-6.126,2.763-6.247,6.211v9.297c0,0.844-0.659,1.52-1.479,1.52c-0.817,0-1.483-0.676-1.483-1.52V16.57H2c0,0,0,3.949,0,3.99C2,24.117,4.804,27,8.259,27c3.424,0,6.211-2.834,6.263-6.348l-0.007-9.183c0-0.844,0.664-1.527,1.482-1.527C16.816,9.942,17.478,10.626,17.478,11.47z",
s:"none",fl:"#E64011"}},f:{}}]},"stumbleupon-alt":{d:0,it:1,sh:[{i:{a:{p:"M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2zM16,12.23c-0.482,0-0.874,0.392-0.874,0.875l0.004,5.258C15.1,20.377,13.457,22,11.439,22c-2.036,0-3.688-1.65-3.688-3.689c0-0.023,0-2.284,0-2.284h2.821v2.255c0,0.484,0.393,0.871,0.874,0.871c0.483,0,0.872-0.387,0.872-0.871v-5.324C12.39,10.982,14.009,9.4,16,9.4c1.999,0,3.623,1.593,3.68,3.576v1.165L18,14.644l-1.128-0.524v-1.014C16.872,12.622,16.482,12.23,16,12.23zM24.252,18.311c0,2.039-1.654,3.689-3.691,3.689c-2.027,0-3.67-1.631-3.688-3.656v-2.298L18,16.571l1.68-0.501v2.318c0,0.48,0.389,0.873,0.871,0.873s0.875-0.393,0.875-0.873v-2.362h2.826C24.252,16.026,24.252,18.287,24.252,18.311z",
s:"none",fl:"#E64011"}},f:{}}]},sun:{d:400,it:3,sh:[{i:{a:{p:"M20,16C20,18.209,18.209,20,16,20s-4-1.791-4-3.999c0-2.209,1.791-4,4-4S20,13.792,20,16z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M19.775,10.271c-0.484,0.897-2.192,0.234-1.812-0.845l1.792-3.843C20.291,4.584,22,5.188,21.568,6.428L19.775,10.271zM16.035,4.927c-0.245-1.289-2.027-0.958-1.991,0.175l0.369,4.224c0.21,1.125,2.021,0.845,1.991-0.174L16.035,4.927zM10.493,6.394C9.637,5.399,8.259,6.577,8.857,7.54l2.431,3.474c0.744,0.869,2.172-0.279,1.637-1.146L10.493,6.394zM6.427,10.435c-1.238-0.433-1.843,1.276-0.844,1.812l3.842,1.792c1.079,0.381,1.741-1.328,0.844-1.812L6.427,10.435zM4.926,15.968c-1.288,0.244-0.957,2.025,0.175,1.989l4.224-0.369c1.125-0.21,0.844-2.021-0.174-1.99L4.926,15.968zM6.393,21.508C5.4,22.363,6.578,23.742,7.54,23.145l3.474-2.432c0.869-0.744-0.28-2.172-1.147-1.637L6.393,21.508zM10.434,25.574c-0.433,1.236,1.277,1.842,1.812,0.844l1.793-3.844c0.381-1.078-1.329-1.74-1.813-0.844L10.434,25.574zM15.967,27.074c0.243,1.287,2.026,0.957,1.99-0.174l-0.369-4.227c-0.209-1.123-2.021-0.842-1.991,0.176L15.967,27.074zM21.508,25.607c0.855,0.994,2.234-0.184,1.637-1.146l-2.432-3.475c-0.744-0.869-2.172,0.281-1.637,1.148L21.508,25.607zM25.574,21.566c1.236,0.434,1.842-1.275,0.844-1.811l-3.844-1.794c-1.078-0.38-1.74,1.329-0.844,1.813L25.574,21.566zM27.074,16.035c1.287-0.243,0.957-2.025-0.174-1.99l-4.227,0.368c-1.123,0.21-0.842,2.021,0.176,1.992L27.074,16.035zM25.607,10.494c0.994-0.854-0.184-2.232-1.146-1.637l-3.475,2.432c-0.869,0.743,0.281,2.172,1.148,1.638L25.607,10.494z",
s:"none",fl:"#333"}},f:{33:{p:"M19.775,10.271c-0.484,0.897-2.192,0.234-1.812-0.845l1.792-3.843C20.291,4.584,22,5.188,21.568,6.428L19.775,10.271zM15.8,2.1c-0.245-1.289-2.027-0.958-1.991,0.175l0.604,7.05c0.21,1.125,2.021,0.845,1.991-0.174L15.8,2.1zM10.493,6.394C9.637,5.399,8.259,6.577,8.857,7.54l2.431,3.474c0.744,0.869,2.172-0.279,1.637-1.146L10.493,6.394zM3.544,9.088C2.306,8.656,1.701,10.365,2.7,10.9l6.726,3.138c1.079,0.381,1.741-1.328,0.844-1.812L3.544,9.088zM4.926,15.968c-1.288,0.244-0.957,2.025,0.175,1.989l4.224-0.369c1.125-0.21,0.844-2.021-0.174-1.99L4.926,15.968zM3.653,23.4C2.66,24.256,3.838,25.635,4.8,25.037l6.214-4.324c0.869-0.744-0.28-2.172-1.147-1.637L3.653,23.4zM10.434,25.574c-0.433,1.236,1.277,1.842,1.812,0.844l1.793-3.844c0.381-1.078-1.329-1.74-1.813-0.844L10.434,25.574zM16.21,30.273c0.243,1.287,2.026,0.957,1.99-0.174l-0.612-7.426c-0.209-1.123-2.021-0.842-1.991,0.176L16.21,30.273zM21.508,25.607c0.855,0.994,2.234-0.184,1.637-1.146l-2.432-3.475c-0.744-0.869-2.172,0.281-1.637,1.148L21.508,25.607zM28.057,22.711c1.236,0.434,1.842-1.275,0.844-1.811l-6.326-2.938c-1.078-0.38-1.74,1.329-0.844,1.813L28.057,22.711zM27.074,16.035c1.287-0.243,0.957-2.025-0.174-1.99l-4.227,0.368c-1.123,0.21-0.842,2.021,0.176,1.992L27.074,16.035zM27.9,8.9c0.994-0.854-0.184-2.232-1.146-1.637l-5.768,4.026c-0.869,0.743,0.281,2.172,1.148,1.638L27.9,8.9z"},
67:{p:"M19.775,10.271c-0.484,0.897-2.192,0.234-1.812-0.845l3.124-6.67C21.623,1.756,23.332,2.361,22.9,3.6L19.775,10.271zM16,4.9c-0.245-1.289-2.027-0.958-1.991,0.175l0.404,4.25c0.21,1.125,2.021,0.845,1.991-0.174L16,4.9zM8.7,3.954C7.844,2.959,6.466,4.137,7.064,5.1l4.224,5.914c0.744,0.869,2.172-0.279,1.637-1.146L8.7,3.954zM6.4,10.4c-1.238-0.433-1.843,1.276-0.844,1.812l3.87,1.827c1.079,0.381,1.741-1.328,0.844-1.812L6.4,10.4zM1.925,16.211C0.637,16.455,0.968,18.236,2.1,18.2l7.225-0.612c1.125-0.21,0.844-2.021-0.174-1.99L1.925,16.211zM6.354,21.563C5.36,22.419,6.538,23.798,7.5,23.2l3.514-2.487c0.869-0.744-0.28-2.172-1.147-1.637L6.354,21.563zM9.088,28.456c-0.433,1.236,1.277,1.842,1.812,0.844l3.138-6.726c0.381-1.078-1.329-1.74-1.813-0.844L9.088,28.456zM16.01,27.074c0.243,1.287,2.026,0.957,1.99-0.174l-0.412-4.227c-0.209-1.123-2.021-0.842-1.991,0.176L16.01,27.074zM23.663,28.646c0.855,0.994,2.234-0.184,1.637-1.146l-4.587-6.514c-0.744-0.869-2.172,0.281-1.637,1.148L23.663,28.646zM25.6,21.6c1.236,0.434,1.842-1.275,0.844-1.811l-3.869-1.827c-1.078-0.38-1.74,1.329-0.844,1.813L25.6,21.6zM30.1,15.8c1.287-0.243,0.957-2.025-0.174-1.99l-7.252,0.604c-1.123,0.21-0.842,2.021,0.176,1.992L30.1,15.8zM25.6,10.5c0.994-0.854-0.184-2.232-1.146-1.637l-3.467,2.426c-0.869,0.743,0.281,2.172,1.148,1.638L25.6,10.5z"},
100:{p:"M19.775,10.271c-0.484,0.897-2.192,0.234-1.812-0.845l1.792-3.843C20.291,4.584,22,5.188,21.568,6.428L19.775,10.271zM16.035,4.927c-0.245-1.289-2.027-0.958-1.991,0.175l0.369,4.224c0.21,1.125,2.021,0.845,1.991-0.174L16.035,4.927zM10.493,6.394C9.637,5.399,8.259,6.577,8.857,7.54l2.431,3.474c0.744,0.869,2.172-0.279,1.637-1.146L10.493,6.394zM6.427,10.435c-1.238-0.433-1.843,1.276-0.844,1.812l3.842,1.792c1.079,0.381,1.741-1.328,0.844-1.812L6.427,10.435zM4.926,15.968c-1.288,0.244-0.957,2.025,0.175,1.989l4.224-0.369c1.125-0.21,0.844-2.021-0.174-1.99L4.926,15.968zM6.393,21.508C5.4,22.363,6.578,23.742,7.54,23.145l3.474-2.432c0.869-0.744-0.28-2.172-1.147-1.637L6.393,21.508zM10.434,25.574c-0.433,1.236,1.277,1.842,1.812,0.844l1.793-3.844c0.381-1.078-1.329-1.74-1.813-0.844L10.434,25.574zM15.967,27.074c0.243,1.287,2.026,0.957,1.99-0.174l-0.369-4.227c-0.209-1.123-2.021-0.842-1.991,0.176L15.967,27.074zM21.508,25.607c0.855,0.994,2.234-0.184,1.637-1.146l-2.432-3.475c-0.744-0.869-2.172,0.281-1.637,1.148L21.508,25.607zM25.574,21.566c1.236,0.434,1.842-1.275,0.844-1.811l-3.844-1.794c-1.078-0.38-1.74,1.329-0.844,1.813L25.574,21.566zM27.074,16.035c1.287-0.243,0.957-2.025-0.174-1.99l-4.227,0.368c-1.123,0.21-0.842,2.021,0.176,1.992L27.074,16.035zM25.607,10.494c0.994-0.854-0.184-2.232-1.146-1.637l-3.475,2.432c-0.869,0.743,0.281,2.172,1.148,1.638L25.607,10.494z"}}}]},
table:{d:600,it:1,sh:[{i:{a:{p:"M4,5.2v21.6C4,27.463,4.537,28,5.2,28h23.6c0.663,0,1.2-0.537,1.2-1.2V5.2C30,4.537,29.463,4,28.8,4H5.2C4.537,4,4,4.537,4,5.2zM6.6,6h11.8C18.731,6,19,6.269,19,6.6v0.8C19,7.731,18.731,8,18.4,8H6.6C6.269,8,6,7.731,6,7.4V6.6C6,6.269,6.269,6,6.6,6zM12,26H6v-4h6V26zM12,20H6v-4h6V20zM12,14H6v-4h6V14zM20,26h-6v-4h6V26zM20,20h-6v-4h6V20zM20,14h-6v-4h6V14zM28,26h-6v-4h6V26zM28,20h-6v-4h6V20zM28,14h-6v-4h6V14z",s:"none",fl:"#333"}},f:{10:{p:"M4,5.2v21.6C4,27.463,4.537,28,5.2,28h23.6c0.663,0,1.2-0.537,1.2-1.2V5.2C30,4.537,29.463,4,28.8,4H5.2C4.537,4,4,4.537,4,5.2zM6.6,6h11.8C18.731,6,19,6.269,19,6.6v0.8C19,7.731,18.731,8,18.4,8H6.6C6.269,8,6,7.731,6,7.4V6.6C6,6.269,6.269,6,6.6,6zM9,24L9,24L9,24L9,24L9,24zM9,18.001L9,18.001L9,18.001L9,18.001L9,18.001zM9,12L9,12L9,12L9,12L9,12zM17,24L17,24L17,24L17,24L17,24zM17,18L17,18L17,18L17,18L17,18zM17,12L17,12L17,12L17,12L17,12zM25,24L25,24L25,24L25,24L25,24zM25,18L25,18L25,18L25,18L25,18zM25,12L25,12L25,12L25,12L25,12z"},
25:{},35:{p:"M4,5.2v21.6C4,27.463,4.537,28,5.2,28h23.6c0.663,0,1.2-0.537,1.2-1.2V5.2C30,4.537,29.463,4,28.8,4H5.2C4.537,4,4,4.537,4,5.2zM6.6,6h11.8C18.731,6,19,6.269,19,6.6v0.8C19,7.731,18.731,8,18.4,8H6.6C6.269,8,6,7.731,6,7.4V6.6C6,6.269,6.269,6,6.6,6zM9,24L9,24L9,24L9,24L9,24zM9,18.001L9,18.001L9,18.001L9,18.001L9,18.001zM12,14H6v-4h6V14zM17,24L17,24L17,24L17,24L17,24zM17,18L17,18L17,18L17,18L17,18zM20,14h-6v-4h6V14zM25,24L25,24L25,24L25,24L25,24zM25,18L25,18L25,18L25,18L25,18zM28,14h-6v-4h6V14z"},
50:{},60:{p:"M4,5.2v21.6C4,27.463,4.537,28,5.2,28h23.6c0.663,0,1.2-0.537,1.2-1.2V5.2C30,4.537,29.463,4,28.8,4H5.2C4.537,4,4,4.537,4,5.2zM6.6,6h11.8C18.731,6,19,6.269,19,6.6v0.8C19,7.731,18.731,8,18.4,8H6.6C6.269,8,6,7.731,6,7.4V6.6C6,6.269,6.269,6,6.6,6zM9,24L9,24L9,24L9,24L9,24zM12,20H6v-4h6V20zM12,14H6v-4h6V14zM17,24L17,24L17,24L17,24L17,24zM20,20h-6v-4h6V20zM20,14h-6v-4h6V14zM25,24L25,24L25,24L25,24L25,24zM28,20h-6v-4h6V20zM28,14h-6v-4h6V14z"},75:{},85:{p:"M4,5.2v21.6C4,27.463,4.537,28,5.2,28h23.6c0.663,0,1.2-0.537,1.2-1.2V5.2C30,4.537,29.463,4,28.8,4H5.2C4.537,4,4,4.537,4,5.2zM6.6,6h11.8C18.731,6,19,6.269,19,6.6v0.8C19,7.731,18.731,8,18.4,8H6.6C6.269,8,6,7.731,6,7.4V6.6C6,6.269,6.269,6,6.6,6zM12,26H6v-4h6V26zM12,20H6v-4h6V20zM12,14H6v-4h6V14zM20,26h-6v-4h6V26zM20,20h-6v-4h6V20zM20,14h-6v-4h6V14zM28,26h-6v-4h6V26zM28,20h-6v-4h6V20zM28,14h-6v-4h6V14z"},
100:{}}}]},tablet:{d:1200,it:1,sh:[{i:{a:{p:"M15.712,15.75h-0.175c-0.021,0-0.038-0.017-0.038-0.038v-0.175c0-0.021,0.017-0.038,0.038-0.038h0.175c0.021,0,0.038,0.017,0.038,0.038v0.175C15.75,15.733,15.733,15.75,15.712,15.75zM16.125,15.712v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C16.108,15.75,16.125,15.733,16.125,15.712zM16.5,15.712v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C16.483,15.75,16.5,15.733,16.5,15.712zM15.75,16.087v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C15.733,16.125,15.75,16.108,15.75,16.087zM16.5,16.087v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C16.483,16.125,16.5,16.108,16.5,16.087zM15.75,16.462v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C15.733,16.5,15.75,16.483,15.75,16.462zM16.125,16.462v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C16.108,16.5,16.125,16.483,16.125,16.462zM16.5,16.462v-0.175c0-0.021-0.017-0.038-0.038-0.038h-0.175c-0.021,0-0.038,0.017-0.038,0.038v0.175c0,0.021,0.017,0.038,0.038,0.038h0.175C16.483,16.5,16.5,16.483,16.5,16.462z",
o:0,s:"none",fl:"#333"}},f:{10:{},11:{o:1},15:{},45:{p:"M11.4,12H8.6C8.269,12,8,11.731,8,11.4V8.6C8,8.269,8.269,8,8.6,8h2.8C11.731,8,12,8.269,12,8.6v2.8C12,11.731,11.731,12,11.4,12zM18,11.4V8.6C18,8.269,17.731,8,17.4,8h-2.8C14.269,8,14,8.269,14,8.6v2.8c0,0.332,0.269,0.6,0.6,0.6h2.8C17.731,12,18,11.731,18,11.4zM24,11.4V8.6C24,8.269,23.731,8,23.4,8H20.6C20.269,8,20,8.269,20,8.6v2.8c0,0.332,0.269,0.6,0.6,0.6H23.4C23.731,12,24,11.731,24,11.4zM12,17.4v-2.8c0-0.332-0.269-0.6-0.6-0.6H8.6C8.269,14,8,14.269,8,14.6v2.8C8,17.731,8.269,18,8.6,18h2.8C11.731,18,12,17.731,12,17.4zM24,17.4v-2.8c0-0.332-0.269-0.6-0.6-0.6H20.6c-0.331,0-0.6,0.269-0.6,0.6v2.8c0,0.331,0.269,0.6,0.6,0.6H23.4C23.731,18,24,17.731,24,17.4zM12,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6H8.6C8.269,20,8,20.269,8,20.6V23.4C8,23.731,8.269,24,8.6,24h2.8C11.731,24,12,23.731,12,23.4zM18,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6h-2.8c-0.332,0-0.6,0.269-0.6,0.6V23.4c0,0.331,0.269,0.6,0.6,0.6h2.8C17.731,24,18,23.731,18,23.4zM24,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6H20.6c-0.331,0-0.6,0.269-0.6,0.6V23.4c0,0.331,0.269,0.6,0.6,0.6H23.4C23.731,24,24,23.731,24,23.4z"},
70:{},80:{o:0},100:{}}},{i:{a:{p:"M17.4,18h-2.8c-0.332,0-0.6-0.269-0.6-0.6v-2.8c0-0.332,0.269-0.6,0.6-0.6h2.8c0.331,0,0.6,0.269,0.6,0.6v2.8C18,17.731,17.731,18,17.4,18z",o:0,s:"none",fl:"#333"}},f:{10:{o:1},70:{},80:{o:0},100:{}}},{i:{a:{p:"M26.312,2H5.69C4.757,2,4,2.741,4,3.652v26.697C4,31.261,4.757,32,5.69,32h20.622C27.245,32,28,31.261,28,30.349V3.653C28.002,2.741,27.247,2,26.312,2zM15.999,31.25c-0.691,0-1.249-0.557-1.249-1.25c0-0.688,0.559-1.25,1.249-1.25c0.69,0,1.251,0.562,1.251,1.25C17.25,30.693,16.689,31.25,15.999,31.25zM26,28H6V4h20V28z",
s:"none",fl:"#333"}},f:{}}]},tag:{d:200,it:3,sh:[{i:{a:{p:"M13.079,2H2.971C2.419,1.988,1.985,2.425,2,2.978l0,10.136c0.015,0.552,0.345,1.316,0.735,1.707c2.852,2.853,9.908,9.748,12.76,12.595c0.78,0.781,2.048,0.781,2.83,0l9.191-9.189c0.777-0.781,0.781-2.05,0-2.832c-2.867-2.869-9.861-9.799-12.73-12.666C14.396,2.338,13.632,2.012,13.079,2zM8.288,8.255c-0.977,0.977-2.559,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.535s2.56-0.977,3.536,0S9.264,7.279,8.288,8.255z",s:"none",fl:"#333"}},f:{20:{p:"M13.079,2H3.071C2.519,1.988,2.084,2.425,2.1,2.978v10.136c0.178,0.677,0.512,1.417,0.735,1.707c2.442,3.171,4.743,7.271,6.438,13.494c0.291,1.066,2.048,0.781,2.829,0l9.193-9.191c0.777-0.781,0.258-1.564,0-2.831c-0.719-3.501-3.02-10.602-6.509-13.563C14.365,2.372,13.632,2.012,13.079,2zM8.288,8.255c-0.977,0.977-2.559,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.535s2.56-0.977,3.536,0S9.264,7.279,8.288,8.255z"},
30:{},50:{p:"M13.079,2H2.971C2.419,1.988,1.985,2.425,2,2.978l0,10.136c0.015,0.552,0.345,1.316,0.735,1.707c2.852,2.853,9.908,9.748,12.76,12.595c0.78,0.781,2.048,0.781,2.83,0l9.191-9.189c0.777-0.781,0.781-2.05,0-2.832c-2.867-2.869-9.861-9.799-12.73-12.666C14.396,2.338,13.632,2.012,13.079,2zM8.288,8.255c-0.977,0.977-2.559,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.535s2.56-0.977,3.536,0S9.264,7.279,8.288,8.255z"},60:{},80:{p:"M13.079,2H3.071C2.519,1.988,2.084,2.425,2.1,2.978v10.136c0.015,0.552,0.402,1.266,0.735,1.707c2.243,2.972,9.343,4.669,13.44,5.384c1.461,0.258,2,0.488,2.833,0l9.191-9.192c0.777-0.781,1.078-2.605,0-2.829c-4.32-0.894-11.223-2.494-13.513-5.455C14.361,2.179,13.779,2.091,13.079,2zM8.288,8.255c-0.977,0.977-2.559,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.535s2.56-0.977,3.536,0S9.264,7.279,8.288,8.255z"},
90:{},100:{p:"M13.079,2H2.971C2.419,1.988,1.985,2.425,2,2.978l0,10.136c0.015,0.552,0.345,1.316,0.735,1.707c2.852,2.853,9.908,9.748,12.76,12.595c0.78,0.781,2.048,0.781,2.83,0l9.191-9.189c0.777-0.781,0.781-2.05,0-2.832c-2.867-2.869-9.861-9.799-12.73-12.666C14.396,2.338,13.632,2.012,13.079,2zM8.288,8.255c-0.977,0.977-2.559,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.535s2.56-0.977,3.536,0S9.264,7.279,8.288,8.255z"}}}]},tags:{d:1E3,it:1,sh:[{i:{a:{p:"M28.189,14.299c0.598,0.791,0.5,1.992,0,2.6l-9.489,9.98c0.602,0.697,1.5,0.395,2.281-0.387l8.208-8.602c1.098-1.1,1.098-3.301-0.102-4.5L18.9,3.549c-0.391-0.391-1.543-0.487-2.095-0.5L28.189,14.299z",
o:1,s:"none",fl:"#333"}},f:{0:{o:0},80:{},81:{o:1},100:{}}},{i:{a:{p:"M12.293,2H2.971C2.419,1.988,1.985,2.425,2,2.977v9.315C2.015,12.843,2.345,13.609,2.736,14l11.416,12C15.2,27.1,16,27,16.98,26L26,17.021c1.1-1.122,1.1-1.821,0-2.83L14,2.729C13.609,2.339,12.846,2.013,12.293,2zM8.188,8.255c-0.976,0.977-2.558,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.536c0.977-0.976,2.56-0.977,3.536,0C9.165,5.697,9.164,7.279,8.188,8.255z",o:0,s:"none",fl:"#333"}},f:{20:{t:"r45,6.5,7.5"},21:{o:0.6},30:{t:"r-20,6.5,7.5"},
60:{},70:{t:"",o:0},100:{}}},{i:{a:{p:"M12.293,2H2.971C2.419,1.988,1.985,2.425,2,2.977v9.315C2.015,12.843,2.345,13.609,2.736,14l11.416,12C15.2,27.1,16,27,16.98,26L26,17.021c1.1-1.122,1.1-1.821,0-2.83L14,2.729C13.609,2.339,12.846,2.013,12.293,2zM8.188,8.255c-0.976,0.977-2.558,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.536c0.977-0.976,2.56-0.977,3.536,0C9.165,5.697,9.164,7.279,8.188,8.255z",o:0,s:"none",fl:"#333"}},f:{10:{t:"r45,6.5,7.5"},11:{o:0.8},20:{t:"r0,6.5,7.5"},60:{},70:{t:"",o:0},100:{}}},
{i:{a:{p:"M12.293,2H2.971C2.419,1.988,1.985,2.425,2,2.977v9.315C2.015,12.843,2.345,13.609,2.736,14l11.416,12C15.2,27.1,16,27,16.98,26L26,17.021c1.1-1.122,1.1-1.821,0-2.83L14,2.729C13.609,2.339,12.846,2.013,12.293,2zM8.188,8.255c-0.976,0.977-2.558,0.977-3.536,0c-0.977-0.977-0.977-2.559,0-3.536c0.977-0.976,2.56-0.977,3.536,0C9.165,5.697,9.164,7.279,8.188,8.255z",s:"none",fl:"#333"}},f:{0:{t:""},10:{t:"r20,6.5,7.5"},60:{},70:{t:""},100:{}}}]},tasks:{d:800,it:1,sh:[{i:{a:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14.6V19.4C2,19.73,2.269,20,2.6,20H29.4c0.33,0,0.6-0.27,0.6-0.6V14.6c0-0.331-0.27-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6zM28,18H12v-2h16V18zM2,22.6V27.4C2,27.73,2.269,28,2.6,28H29.4c0.33,0,0.6-0.27,0.6-0.6V22.6c0-0.33-0.27-0.6-0.6-0.6H2.6C2.269,22,2,22.27,2,22.6zM28,26H18v-2h10V26z",
s:"none",fl:"#333"}},f:{7:{p:"M2,6L2,6L2,6L2,6L2,6L2,6L2,6L2,6L2,6zM2,6L2,6L2,6L2,6L2,6zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,14L2,14L2,14L2,14L2,14zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22zM2,22L2,22L2,22L2,22L2,22z"},10:{},17:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10H4V8h24V10zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,14L2,14L2,14L2,14L2,14zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22zM2,22L2,22L2,22L2,22L2,22z"},
20:{},27:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14L2,14zM2,14L2,14L2,14L2,14L2,14zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22zM2,22L2,22L2,22L2,22L2,22z"},30:{},37:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14.6V19.4C2,19.73,2.269,20,2.6,20H29.4c0.33,0,0.6-0.27,0.6-0.6V14.6c0-0.331-0.27-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6zM28,18H4v-2h24V18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22zM2,22L2,22L2,22L2,22L2,22z"},
40:{},47:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14.6V19.4C2,19.73,2.269,20,2.6,20H29.4c0.33,0,0.6-0.27,0.6-0.6V14.6c0-0.331-0.27-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6zM28,18H12v-2h16V18zM2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22L2,22zM2,22L2,22L2,22L2,22L2,22z"},50:{},57:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14.6V19.4C2,19.73,2.269,20,2.6,20H29.4c0.33,0,0.6-0.27,0.6-0.6V14.6c0-0.331-0.27-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6zM28,18H12v-2h16V18zM2,22.6V27.4C2,27.73,2.269,28,2.6,28H29.4c0.33,0,0.6-0.27,0.6-0.6V22.6c0-0.33-0.27-0.6-0.6-0.6H2.6C2.269,22,2,22.27,2,22.6zM28,26H4v-2h24V26z"},
60:{},67:{p:"M2,6.6V11.4C2,11.731,2.269,12,2.6,12H29.4c0.33,0,0.6-0.269,0.6-0.6V6.6C30,6.269,29.73,6,29.4,6H2.6C2.269,6,2,6.269,2,6.6zM28,10h-6V8h6V10zM2,14.6V19.4C2,19.73,2.269,20,2.6,20H29.4c0.33,0,0.6-0.27,0.6-0.6V14.6c0-0.331-0.27-0.6-0.6-0.6H2.6C2.269,14,2,14.269,2,14.6zM28,18H12v-2h16V18zM2,22.6V27.4C2,27.73,2.269,28,2.6,28H29.4c0.33,0,0.6-0.27,0.6-0.6V22.6c0-0.33-0.27-0.6-0.6-0.6H2.6C2.269,22,2,22.27,2,22.6zM28,26H18v-2h10V26z"},100:{}}}]},"thermo-down":{d:500,it:1,sh:[{i:{a:{p:"M22,19.125V6c0-2.762-2.238-5-5-5s-5,2.238-5,5v13.125C10.77,20.387,10,22.1,10,24c0,3.865,3.135,7,7,7s7-3.135,7-7C24,22.1,23.23,20.387,22,19.125zM17,29c-2.762,0-5-2.238-5-5c0-1.637,0.785-3.088,2-4V6c0-1.657,1.344-3,3-3s3,1.343,3,3v14h0.004v0.002C21.217,20.914,22,22.365,22,24C22,26.762,19.762,29,17,29z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M19,20.555V14h-4v6.555c-1.191,0.691-2,1.969-2,3.445c0,2.207,1.789,4,4,4c2.209,0,4-1.793,4-4C21,22.523,20.191,21.246,19,20.555z",s:"none",fl:"#333"}},f:{60:{p:"M21,24h-2h-4h-2l0,0c0,2.207,1.789,4,4,4C19.209,28,21,26.207,21,24L21,24z"},90:{},100:{p:"M19,20.555V14h-4v6.555c-1.191,0.691-2,1.969-2,3.445c0,2.207,1.789,4,4,4c2.209,0,4-1.793,4-4C21,22.523,20.191,21.246,19,20.555z"}}}]},"thermo-up":{d:500,it:1,sh:[{i:{a:{p:"M22,19.125V6c0-2.762-2.238-5-5-5s-5,2.238-5,5v13.125C10.77,20.387,10,22.1,10,24c0,3.865,3.135,7,7,7s7-3.135,7-7C24,22.1,23.23,20.387,22,19.125zM17,29c-2.762,0-5-2.238-5-5c0-1.637,0.785-3.088,2-4V6c0-1.657,1.344-3,3-3s3,1.343,3,3v14h0.004v0.002C21.217,20.914,22,22.365,22,24C22,26.762,19.762,29,17,29z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M19,20.555V14h-4v6.555c-1.191,0.691-2,1.969-2,3.445c0,2.207,1.789,4,4,4c2.209,0,4-1.793,4-4C21,22.523,20.191,21.246,19,20.555z",s:"none",fl:"#333"}},f:{60:{p:"M19,20.555V6c0-2.236-3.966-2.266-4,0v14.555c-1.191,0.691-2,1.969-2,3.445c0,2.207,1.789,4,4,4c2.209,0,4-1.793,4-4C21,22.523,20.191,21.246,19,20.555z"},90:{},100:{p:"M19,20.555V14h-4v6.555c-1.191,0.691-2,1.969-2,3.445c0,2.207,1.789,4,4,4c2.209,0,4-1.793,4-4C21,22.523,20.191,21.246,19,20.555z"}}}]},"thumbs-down":{d:600,
it:1,sh:[{i:{a:{p:"M11.654,2.469c-0.623,0.008-5.465-0.811-5.4,2.953C4.646,5.973,4.169,8.524,5.062,9.608C3.396,10.94,4,13.442,5.23,14.357l0,0c-1.5,0.668-1.189,4.5,1.91,4.538l3.314-0.032c-0.859,1.719-2.143,4.329-2.063,6.18c0.059,1.338,0.588,3.316,3.025,2.902c0,0,1.032-2.562,2.928-5.121c1.666-2.25,3.999-4.498,6.882-5.004v1.205h5.146c0.896,0,1.626-0.726,1.626-1.626V4.381c0-0.9-0.729-1.357-1.626-1.357h-5.146v1.172C16.621,3.481,14.111,2.456,11.654,2.469zM23.936,4.381v13.291h-1.554V4.381H23.936z",s:"none",
fl:"#333"}},f:{0:{t:"s0.4,0.4,28,4"},10:{},30:{t:""},50:{t:"t0,2"},70:{t:""},90:{t:"t0,2"},100:{t:""}}}]},"thumbs-up":{d:600,it:1,sh:[{i:{a:{p:"M20.387,28.53c0.623-0.008,5.465,0.811,5.4-2.953c1.607-0.551,2.084-3.102,1.191-4.186c1.666-1.332,1.063-3.834-0.168-4.749l0,0c1.5-0.668,1.189-4.501-1.91-4.538l-3.314,0.032c0.859-1.719,2.143-4.329,2.063-6.179c-0.059-1.338-0.588-3.316-3.025-2.902c0,0-1.032,2.562-2.928,5.121c-1.666,2.25-3.998,4.498-6.882,5.003v-1.205H5.667c-0.896,0-1.626,0.726-1.626,1.626v13.018c0,0.9,0.729,1.357,1.626,1.357h5.146v-1.172C15.42,27.519,17.93,28.544,20.387,28.53zM8.105,26.618V13.327h1.554v13.291H8.105z",
s:"none",fl:"#333"}},f:{0:{t:"s0.4,0.4,4,28"},10:{},30:{t:""},50:{t:"t0,-2"},70:{t:""},90:{t:"t0,-2"},100:{t:""}}}]},trash:{d:1200,it:1,sh:[{i:{a:{p:"M36.495,5.671l-2.29,0.9c0,0-0.906,0.76-1.254,0.553c-0.38-0.226-0.087-1.5-0.087-1.5l0.734-0.938L32,2.812l2.031-0.938c0,0,0.799-1.405,0.994-1.405c0.433,0,2.16,1.405,2.16,1.405l-0.992-1.078L37.186,0l3.025,0.936c0,0-0.863,1.407-0.432,1.876s0.822,4.313,0.391,4.313c-0.434,0-3.242-3.047-3.242-3.047l3.112,3.421l-1.644-0.173l-1.686,0.829l-2.896-0.891L36.495,5.671z",
o:0,s:"none",fl:"#333"}},f:{0:{o:0.6},30:{},50:{t:"t-26,4r-360"},60:{t:"t-23,1r0"},75:{t:"t-23,21r200"},80:{o:0},100:{t:""}}},{i:{a:{p:"M24.801,8.1H20V4.7c0-0.331-0.27-0.6-0.6-0.6H10.6c-0.331,0-0.6,0.269-0.6,0.6v3.4H5.2C4.537,8.1,4,8.637,4,9.3V11h22V9.3C26,8.637,25.463,8.1,24.801,8.1zM12,8.1v-2h6v2H12z",t:"s1r0",s:"none",fl:"#333"}},f:{10:{t:"s0.7,0.7,5,30"},30:{t:"s0.7,0.7,5,30r-80,5,12"},70:{},80:{t:"s0.7,0.7,5,30r0,5,12"},90:{t:""},100:{}}},{i:{a:{p:"M8.4,30h13.2c1.326,0,2.4-1.074,2.4-2.4V12H6V27.6C6,28.926,7.075,30,8.4,30zM10,26H8V14h2V26zM14,26h-2V14h2V26zM18,26h-2V14h2V26zM22,26h-2V14h2V26z",
s:"none",fl:"#333"}},f:{10:{t:"s0.7,0.7,5,30"},80:{},90:{t:""},100:{}}}]},tree:{d:800,it:1,sh:[{i:{a:{p:"M17.876,18.862c1.859-0.653,2.273-1.331,2.273-1.331c0.882,1.085,2.171,1.898,3.682,1.898c2.662,0,4.669-2.15,4.669-4.805c0-1.798-0.989-3.065-2.457-3.889c0,0,0.417-1.484,0.36-2.397c-0.202-3.247-3.335-3.323-3.335-3.323s0.41-2.536-3.564-2.913c-2.106-0.199-4.179,1.383-4.179,1.383s-0.08-1.401-3.019-1.483C6.949,1.854,8.107,6.686,8.107,6.686s-4.298-0.1-4.598,4.456c-0.099,1.495,0.641,2.848,1.664,3.792c0,0,0.408,0.128,0.3,0.772c-0.047,0.241-0.071,0.49-0.071,0.744c0,2.111,1.716,3.883,3.835,3.883c1.208,0,2.287-0.678,2.99-1.55c0,0,0.577,0.51,1.814,0.488l-0.009,0.46v9.309c0,0.53,0.431,0.961,0.964,0.961h1.928c0.531,0,0.963-0.431,0.963-0.961L17.876,18.862z",
s:"none",fl:"#333"}},f:{0:{p:"M16.423,26.027c0.134-0.558-0.038-0.344-0.038-0.344c0.118,0.204,0,0,0.042-0.249c0.059-0.342-0.01-0.723,0.021-1.354c0.032-0.642,0.208-1.134-0.107-1.428c0,0,0.012-0.458,0-0.784c-0.043-1.157-0.021-0.962-0.021-0.962s-0.118-0.742-0.257-0.857C15.936,19.941,16,20.584,16,20.584s0-0.784-0.107-0.535c-0.225,0.523-0.279,1.518-0.279,1.534c0,0,0.064-0.161,0,1.461c-0.021,0.533-0.198,1.057,0.021,1.392c0,0-0.02,0.02-0.043,0.25c-0.01,0.087-0.021,0.196-0.021,0.285c0,0.753-0.021,0.179,0,0.713c0.017,0.432-0.021,0.357,0.064,0.357l-0.034,0.131L15.6,26.339v3.318c0,0.189,0.092,0.343,0.207,0.343h0.413c0.114,0,0.207-0.153,0.207-0.343L16.423,26.027z"},
5:{p:"M16.423,26.027c0.134-0.558-0.038-0.344-0.038-0.344c0.118,0.204,0,0,0.042-0.249c0.059-0.342-0.01-0.723,0.021-1.354c0.032-0.642,0.208-1.134-0.107-1.428c0,0,0.012-0.458,0-0.784c-0.043-1.157-0.021-0.962-0.021-0.962s-0.118-0.742-0.257-0.857C15.936,19.941,16,20.584,16,20.584s0-0.784-0.107-0.535c-0.225,0.523-0.279,1.518-0.279,1.534c0,0,0.064-0.161,0,1.461c-0.021,0.533-0.198,1.057,0.021,1.392c0,0-0.02,0.02-0.043,0.25c-0.01,0.087-0.021,0.196-0.021,0.285c0,0.753-0.021,0.179,0,0.713c0.017,0.432-0.021,0.357,0.064,0.357l-0.034,0.131L15.6,26.339v3.318c0,0.189,0.092,0.343,0.207,0.343h0.413c0.114,0,0.207-0.153,0.207-0.343L16.423,26.027z"},
25:{p:"M17.876,18.862C18.5,17.3,17.7,17.9,17.7,17.9c0.551,0.569,0,0,0.2-0.7c0.274-0.961-0.047-2.024,0.1-3.8c0.147-1.792,0.968-3.177-0.5-4c0,0,0.057-1.287,0-2.2c-0.202-3.247-0.1-2.7-0.1-2.7s-0.549-2.074-1.2-2.4c-0.6-0.3-0.3,1.5-0.3,1.5s0-2.2-0.5-1.5c-1.048,1.467-1.301,4.253-1.3,4.3c0,0,0.3-0.456,0,4.1c-0.099,1.495-0.923,2.957,0.1,3.9c0,0-0.093,0.056-0.2,0.7c-0.047,0.241-0.1,0.546-0.1,0.8c0,2.11-0.1,0.5,0,2c0.081,1.206-0.1,1,0.3,1l-0.159,0.37l-0.009,0.46v9.309c0,0.53,0.431,0.961,0.964,0.961h1.928c0.531,0,0.963-0.431,0.963-0.961L17.876,18.862z"},
75:{p:"M17.876,18.862c1.859-0.653,2.273-1.331,2.273-1.331c0.882,1.085,2.171,1.898,3.682,1.898c2.662,0,4.669-2.15,4.669-4.805c0-1.798-0.989-3.065-2.457-3.889c0,0,0.417-1.484,0.36-2.397c-0.202-3.247-3.335-3.323-3.335-3.323s0.41-2.536-3.564-2.913c-2.106-0.199-4.179,1.383-4.179,1.383s-0.08-1.401-3.019-1.483C6.949,1.854,8.107,6.686,8.107,6.686s-4.298-0.1-4.598,4.456c-0.099,1.495,0.641,2.848,1.664,3.792c0,0,0.408,0.128,0.3,0.772c-0.047,0.241-0.071,0.49-0.071,0.744c0,2.111,1.716,3.883,3.835,3.883c1.208,0,2.287-0.678,2.99-1.55c0,0,0.577,0.51,1.814,0.488l-0.009,0.46v9.309c0,0.53,0.431,0.961,0.964,0.961h1.928c0.531,0,0.963-0.431,0.963-0.961L17.876,18.862z",
e:"elastic"},100:{}}}]},trophy:{d:800,it:1,sh:[{i:{a:{p:"M27.4,4h-3.373c0,0-0.078-0.352-0.031-0.902c0.047-0.55-0.451-1.041-1.111-1.098H9.115c-0.66,0.057-1.158,0.548-1.111,1.098C8.051,3.648,7.973,4,7.973,4H4.6C4.27,4,4,4.269,4,4.6v7c0,1.326,1.068,2.559,2.301,3.048c1.105,0.438,2.414,0.871,2.686,1.396C10,18,11.057,18.527,12,19c0.807,0.402,2,1,2,3v3.4c0,0.33-0.192,0.787-0.447,1c-0.604,0.502-1.743,1.324-2.957,1.545C10.27,28.004,10,28.27,10,28.6V30h12v-1.4c0-0.33-0.27-0.596-0.596-0.654c-1.215-0.221-2.355-1.045-2.959-1.547C18.191,26.188,18,25.73,18,25.4V22c0-2,1.193-2.598,2-3c0.943-0.473,2-1,3.014-2.957c0.271-0.524,1.58-0.957,2.686-1.396C26.932,14.158,28,12.926,28,11.6v-7C28,4.269,27.73,4,27.4,4zM6.998,12.666C6.447,12.298,6,11.463,6,10.8V6h2l1,8L6.998,12.666zM19.002,11.872L19.709,16l-3.708-1.95L12.294,16l0.707-4.128L10,8.947l4.146-0.604l1.854-3.756l1.854,3.756L22,8.947L19.002,11.872zM26,10.8c0,0.663-0.447,1.498-0.998,1.866L23,14l1-8h2V10.8z",
t:"",s:"none",fl:"#333"}},f:{0:{p:"M27.4,4h-3.373c0,0-0.078-0.352-0.031-0.902c0.047-0.55-0.451-1.041-1.111-1.098H9.115c-0.66,0.057-1.158,0.548-1.111,1.098C8.051,3.648,7.973,4,7.973,4H4.6C4.27,4,4,4.269,4,4.6v7c0,1.326,1.068,2.559,2.301,3.048c1.105,0.438,2.414,0.871,2.686,1.396C10,18,11.057,18.527,12,19c0.807,0.402,2,1,2,3v3.4c0,0.33-0.192,0.787-0.447,1c-0.604,0.502-1.743,1.324-2.957,1.545C10.27,28.004,10,28.27,10,28.6V30h12v-1.4c0-0.33-0.27-0.596-0.596-0.654c-1.215-0.221-2.355-1.045-2.959-1.547C18.191,26.188,18,25.73,18,25.4V22c0-2,1.193-2.598,2-3c0.943-0.473,2-1,3.014-2.957c0.271-0.524,1.58-0.957,2.686-1.396C26.932,14.158,28,12.926,28,11.6v-7C28,4.269,27.73,4,27.4,4zM6.998,12.666C6.447,12.298,6,11.463,6,10.8V6h2l1,8L6.998,12.666zM16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293L16,10.293zM26,10.8c0,0.663-0.447,1.498-0.998,1.866L23,14l1-8h2V10.8z",
t:"r90,40,40"},30:{t:""},35:{t:""},75:{p:"M27.4,4h-3.373c0,0-0.078-0.352-0.031-0.902c0.047-0.55-0.451-1.041-1.111-1.098H9.115c-0.66,0.057-1.158,0.548-1.111,1.098C8.051,3.648,7.973,4,7.973,4H4.6C4.27,4,4,4.269,4,4.6v7c0,1.326,1.068,2.559,2.301,3.048c1.105,0.438,2.414,0.871,2.686,1.396C10,18,11.057,18.527,12,19c0.807,0.402,2,1,2,3v3.4c0,0.33-0.192,0.787-0.447,1c-0.604,0.502-1.743,1.324-2.957,1.545C10.27,28.004,10,28.27,10,28.6V30h12v-1.4c0-0.33-0.27-0.596-0.596-0.654c-1.215-0.221-2.355-1.045-2.959-1.547C18.191,26.188,18,25.73,18,25.4V22c0-2,1.193-2.598,2-3c0.943-0.473,2-1,3.014-2.957c0.271-0.524,1.58-0.957,2.686-1.396C26.932,14.158,28,12.926,28,11.6v-7C28,4.269,27.73,4,27.4,4zM6.998,12.666C6.447,12.298,6,11.463,6,10.8V6h2l1,8L6.998,12.666zM19.002,11.872L19.709,16l-3.708-1.95L12.294,16l0.707-4.128L10,8.947l4.146-0.604l1.854-3.756l1.854,3.756L22,8.947L19.002,11.872zM26,10.8c0,0.663-0.447,1.498-0.998,1.866L23,14l1-8h2V10.8z",
e:"elastic"},100:{}}}]},truck:{d:1E3,it:1,sh:[{i:{a:{p:"M20.069,18.92c0.017-0.055,0.031-0.109,0.031-0.17c0-0.304-0.224-0.55-0.5-0.55c-0.134,0-0.254,0.06-0.344,0.153c-0.101-0.093-0.243-0.153-0.407-0.153c-0.304,0-0.55,0.201-0.55,0.45c0,0.127,0.065,0.24,0.169,0.322c-0.04,0.068-0.068,0.144-0.068,0.228c0,0.263,0.226,0.473,0.509,0.492c0.022,0.228,0.207,0.407,0.44,0.407c0.206,0,0.372-0.141,0.426-0.329c0.056,0.016,0.113,0.029,0.175,0.029c0.304,0,0.55-0.201,0.55-0.45C20.5,19.136,20.313,18.966,20.069,18.92z",
o:0,t:"t8,0s1",s:"none",fl:"#333"}},f:{9:{},12:{o:1},30:{o:0,t:"t8,0s5"},100:{t:"t8,0s1"}}},{i:{a:{p:"M20.069,18.92c0.017-0.055,0.031-0.109,0.031-0.17c0-0.304-0.224-0.55-0.5-0.55c-0.134,0-0.254,0.06-0.344,0.153c-0.101-0.093-0.243-0.153-0.407-0.153c-0.304,0-0.55,0.201-0.55,0.45c0,0.127,0.065,0.24,0.169,0.322c-0.04,0.068-0.068,0.144-0.068,0.228c0,0.263,0.226,0.473,0.509,0.492c0.022,0.228,0.207,0.407,0.44,0.407c0.206,0,0.372-0.141,0.426-0.329c0.056,0.016,0.113,0.029,0.175,0.029c0.304,0,0.55-0.201,0.55-0.45C20.5,19.136,20.313,18.966,20.069,18.92z",
o:0,t:"t-3,0s1",s:"none",fl:"#333"}},f:{19:{},23:{o:1},40:{o:0,t:"t-3,0s4"},100:{t:"t-3,0s1"}}},{i:{a:{p:"M14,6h15.125C29.607,6,30,6.387,30,6.867v12.268C30,19.613,29.607,20,29.125,20H14c-0.484,0-0.875-0.387-0.875-0.865V6.867C13.125,6.387,13.516,6,14,6zM5.6,23.2c0,1.544,1.253,2.8,2.8,2.8s2.8-1.256,2.8-2.8s-1.253-2.8-2.8-2.8S5.6,21.656,5.6,23.2zM13.889,24H23c0-1.359-0.834-3-0.834-3H13C13.1,22.951,13.889,24,13.889,24zM24.01,23.199c0,1.551,1.25,2.801,2.799,2.801c1.551,0,2.801-1.25,2.801-2.801c0-1.549-1.25-2.799-2.801-2.799C25.26,20.4,24.01,21.65,24.01,23.199zM6.584,8C5.463,8,4.708,9.17,4.708,9.17l-2.393,4.467C2.142,13.918,2,14.415,2,14.746v7.004c0,1.043,1.875,0.836,1.875,0.836c0.911,0,0.833-1.043,0.833-1.043c0-2.449,2.709-2.605,2.709-2.605h2.813c1.667,0,1.771-1.875,1.771-1.875V9.667C12,8,10.125,8,10.125,8S7.099,8,6.584,8zM10.203,10.764l0.028,4.297C10.231,15.829,9.737,16,9.32,16H5.778c-0.997,0-1.042,0.938-1.042,0.938H3.8v-0.73l2.367-5.603c0.417-0.834,1.644-0.781,1.644-0.781h1.51C10.289,9.823,10.203,10.764,10.203,10.764z",
s:"none",fl:"#333"}},f:{40:{t:"t-33,0",e:"<"},41:{t:"t-33,53"},42:{t:"t33,0"},80:{t:"",e:">"},100:{}}}]},twitter:{d:0,it:1,sh:[{i:{a:{p:"M27.133,10.912c0.014,0.247,0.019,0.497,0.019,0.744c0,7.591-5.775,16.358-16.346,16.344C5.851,27.996,2.466,25.779,2,25.42c4.55,0.591,7.817-1.741,8.505-2.378c-2.671,0.055-4.887-2.161-5.365-3.989c1.293,0.309,2.592-0.101,2.592-0.101c-3.165-0.639-4.682-3.557-4.607-5.705c0.976,0.515,1.675,0.631,2.603,0.719C3.517,12.479,2.233,9.212,3.95,6.297c4.699,5.598,10.65,5.949,11.84,6.002c0,0-0.149-0.859-0.149-1.31c0-3.173,2.572-5.744,5.744-5.744c1.651,0,3.146,0.697,4.193,1.815c1.309-0.258,2.538-0.737,3.649-1.394c-0.43,1.341-1.34,2.466-2.528,3.177c1.164-0.139,2.27-0.448,3.301-0.904C29.23,9.091,28.255,10.103,27.133,10.912z",
s:"none",fl:"#01BBF6"}},f:{}}]},"twitter-alt":{d:0,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.343,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.343,28.657,2,27,2zM24.748,11.574c0.008,0.194,0.013,0.388,0.013,0.583c0,5.965-4.539,12.852-12.842,12.843C8.024,24.996,5.367,23.254,5,22.971c3.575,0.468,6.142-1.366,6.683-1.868c-2.1,0.043-3.841-1.698-4.217-3.134c1.018,0.244,2.039-0.077,2.039-0.077c-2.488-0.504-3.68-2.795-3.62-4.483c0.765,0.404,1.315,0.496,2.043,0.564c-1.737-1.168-2.745-3.735-1.397-6.026c3.694,4.4,8.368,4.674,9.303,4.716c0,0-0.117-0.675-0.117-1.028c0-2.493,2.021-4.514,4.513-4.514c1.3,0,2.472,0.548,3.297,1.425c1.027-0.203,1.993-0.579,2.864-1.095c-0.336,1.054-1.053,1.938-1.983,2.497C25.32,9.839,26.191,9.597,27,9.237C26.395,10.143,25.63,10.938,24.748,11.574z",
s:"none",fl:"#01BBF6"}},f:{}}]},umbrella:{d:1E3,it:1,sh:[{i:{a:{p:"M15,30c1.657,0,3-1.344,3-3V14.5h-2V27c0,0.553-0.447,1-1,1s-1-0.447-1-1c0,0,0,0.275,0,0s-0.063-1-1-1l0,0c-0.553,0-1.01,0.449-1,1C12.031,28.75,13.343,30,15,30z",s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M12.401-1.209c0.95,0.213,1-3.5,1-3.5S11.432-1.426,12.401-1.209zM16.068-4.409c0.95,0.213,1-3.5,1-3.5S15.099-4.625,16.068-4.409zM19.401-7.7c0.949,0.213,1-3.5,1-3.5S18.432-7.917,19.401-7.7zM18.133-2.209c0.95,0.213,1-3.5,1-3.5S17.164-2.426,18.133-2.209zM22.9-5.4c0.949,0.213,1-3.5,1-3.5S21.932-5.617,22.9-5.4zM27.468-9.609c0.95,0.213,1-3.5,1-3.5S26.499-9.826,27.468-9.609zM24.169-1.709c0.948,0.213,0.999-3.5,0.999-3.5S23.2-1.926,24.169-1.709zM27.4-4.209c0.95,0.213,1-3.5,1-3.5S26.432-4.426,27.4-4.209zM30.4-1.209c0.949,0.213,1-3.5,1-3.5S29.432-1.426,30.4-1.209zM31.4-6.209c0.949,0.213,1-3.5,1-3.5S30.432-6.426,31.4-6.209zM14.568-7.8c0.95,0.213,1-3.5,1-3.5S13.599-8.017,14.568-7.8zM18.201-14.709c0,0-0.051,3.713-1,3.5C16.232-11.426,18.201-14.709,18.201-14.709zM16.567-15.309c0.95,0.213,1.001-3.5,1.001-3.5S15.599-15.525,16.567-15.309zM21.133-13.209c0.95,0.213,1-3.5,1-3.5S20.164-13.426,21.133-13.209zM25.401-15.209c0.949,0.213,1-3.5,1-3.5S24.433-15.426,25.401-15.209zM24.368-10.409c0.948,0.213,0.999-3.5,0.999-3.5S23.399-10.625,24.368-10.409zM30.4-15.209c0.95,0.213,1-3.5,1-3.5S29.432-15.426,30.4-15.209zM33.4-12.209c0.949,0.213,1-3.5,1-3.5S32.432-12.426,33.4-12.209zM9.768-3.309c0.949,0.213,1-3.5,1-3.5S8.799-3.525,9.768-3.309zM11.868-8.609c0.949,0.213,1-3.5,1-3.5S10.899-8.826,11.868-8.609zM12.768-14.309c0.949,0.213,1-3.5,1-3.5S11.799-14.525,12.768-14.309z",
o:0.7,t:"",s:"none",fl:"#333"}},f:{0:{o:0.7,t:""},30:{t:"t0,0"},90:{t:"t-4,13"},91:{o:0},100:{o:0,t:"t0,0"}}},{i:{a:{p:"M16,3.001C16,3.001,16.105,2,17,2c0.791,0,1,1.001,1,1.001V4c0,0,12,0,12,12c-2-4-8-4-8.801,0C20,12,14,12,12.8,16C12,12,6,12,4,16C4,4,16,4,16,4V3.001z",s:"none",fl:"#333"}},f:{0:{p:"M16,3.001C16,3.001,16.105,2,17,2c0.791,0,1,1.001,1,1.001V4c0,0,3,7,4,19c-2-4-2-4-2.801,0C18,19,16,19,14.8,23C14,19,14,19,12,23c1-12,4-19,4-19V3.001z"},25:{p:"M16,3.001C16,3.001,16.105,2,17,2c0.791,0,1,1.001,1,1.001V4c0,0,12,0,12,12c-2-4-8-4-8.801,0C20,12,14,12,12.8,16C12,12,6,12,4,16C4,4,16,4,16,4V3.001z"},
100:{}}}]},underline:{d:800,it:1,sh:[{i:{a:{p:"M19.127,5V4h7.684v1h-0.75c-0.785,0-1.39,0.329-1.811,0.987c-0.209,0.304-0.311,1.012-0.311,2.121v7.648c0,2.007-0.2,3.562-0.597,4.665c-0.398,1.105-1.178,2.054-2.343,2.845c-1.163,0.79-3.258,1.186-5.261,1.186c-2.18,0-3.835-0.378-4.965-1.134c-1.129-0.758-1.93-1.773-2.4-3.051c-0.314-0.874-0.472-2.514-0.472-4.923V7.99c0-1.228-0.17-2.033-0.508-2.416C7.055,5.191,6.508,5,5.751,5H5V4h8.902v1h-0.766c-0.825,0-1.415,0.26-1.768,0.781C11.123,6.134,11,6.871,11,7.99v8.252c0,0.775,0.071,1.667,0.213,2.669c0.144,1.001,0.401,1.781,0.774,2.343c0.373,0.558,0.911,1.021,1.612,1.384c0.703,0.363,1.592,0.545,2.614,0.545c1.304,0,2.472-0.284,3.503-0.854c1.031-0.569,1.538-1.298,1.916-2.187C22.01,19.253,22,17.747,22,15.623V7.99c0-1.247-0.137-2.027-0.412-2.342C21.204,5.215,20.635,5,19.878,5H19.127z",
s:"none",fl:"#333"}},f:{}},{i:{a:{p:"M26,26H6v2h20V26z",s:"none",fl:"#333"}},f:{0:{t:"s0.01,1,6,26"},15:{},70:{t:"",e:"<>"},100:{}}}]},undo:{d:500,it:2,sh:[{i:{a:{p:"M2.341,12.875l8.811,8.856C11.621,22.199,12,22.043,12,21.379V16c0,0,16,0,16,14C28,6,12,8,12,8V2.622c0-0.664-0.379-0.82-0.848-0.352l-8.811,8.857C1.886,11.61,1.886,12.394,2.341,12.875z",s:"none",fl:"#333"}},f:{0:{p:"M27.961,26.021l-0.447,0.555c-0.025,0.031-0.018,0.055,0.016,0.055l0.348,0.027c0,0,0.217,1.796,0.195,3.343c-0.021-1.133,0.021-3.343,0.021-3.343l0.375-0.015c0.033,0.001,0.041-0.023,0.018-0.053l-0.438-0.567C28.023,25.993,27.984,25.993,27.961,26.021z"},
15:{p:"M22.771,16.478l-0.258,2.869c-0.014,0.153,0.07,0.197,0.188,0.099l0.951-0.798c0,0,4.146,3.053,4.348,11.353c-0.201-6.6-2.936-12.538-2.936-12.538l0.951-0.797c0.117-0.098,0.088-0.189-0.064-0.202l-2.871-0.244C22.928,16.21,22.789,16.326,22.771,16.478z"},27:{p:"M17.146,13.411l2.461,5.312c0.131,0.283,0.324,0.275,0.432-0.018l0.861-2.371c0,0,7.699,4.465,7.1,13.666c0.699-10.8-5.816-17.188-5.816-17.188l0.861-2.37c0.107-0.292-0.035-0.423-0.318-0.291l-5.301,2.488C17.15,12.78,17.023,13.125,17.146,13.411z"},
39:{p:"M8.262,12.88l6.777,6.813c0.36,0.36,0.652,0.24,0.652-0.271v-4.138C15.692,15.284,28,16.7,28,30C28,11.538,15.692,9.131,15.692,9.131V4.993c0-0.511-0.292-0.631-0.652-0.271l-6.777,6.813C7.913,11.907,7.913,12.51,8.262,12.88z"},50:{p:"M2.341,12.875l8.811,8.856C11.621,22.199,12,22.043,12,21.379V16c0,0,16,0,16,14C28,6,12,8,12,8V2.622c0-0.664-0.379-0.82-0.848-0.352l-8.811,8.857C1.886,11.61,1.886,12.394,2.341,12.875z"},100:{}}}]},unlock:{d:700,it:1,sh:[{i:{a:{p:"M24.5,11c0-4.971-3.629-9-8.6-9c-4.971,0-8.4,4.029-8.4,9v1H10v-1c0-3.59,2.311-6.5,5.9-6.5S22,7.41,22,11v8.399h2.5V11z",
s:"none",fl:"#333"}},f:{0:{t:""},20:{t:"t0,4"},80:{t:"",e:"backOut"},100:{}}},{i:{a:{p:"M26,16H6c-1.104,0-2,0.896-2,2v10c0,1.105,0.896,2,2,2h20c1.104,0,2-0.895,2-2V18C28,16.896,27.104,16,26,16zM18,28h-3.898l1.029-4.207C14.463,23.469,14,22.791,14,22c0-1.104,0.896-2,2-2s2,0.896,2,2c0,0.754-0.423,1.403-1.039,1.744L18,28z",s:"none",fl:"#333"}},f:{}}]},upload:{d:400,it:3,sh:[{i:{a:{p:"M16.875,4.341l8.855,8.811C26.199,13.621,26.042,14,25.379,14h-5.378v6.8c0,0.662-0.537,1.199-1.2,1.199H13.2c-0.662,0-1.199-0.537-1.199-1.199V14H6.622c-0.664,0-0.82-0.379-0.352-0.848l8.857-8.811C15.61,3.886,16.393,3.886,16.875,4.341z",
s:"none",fl:"#333"}},f:{20:{t:"t0,1"},70:{t:"t0,-2"},100:{t:""}}},{i:{a:{p:"M30,26.8c0,0.663-0.537,1.2-1.2,1.2H3.2C2.537,28,2,27.463,2,26.8v-4.2C2,22.293,2.297,22,2.6,22h2.8C5.703,22,6,22.293,6,22.6V24h20v-1.4c0-0.307,0.299-0.6,0.601-0.6h2.8c0.302,0,0.6,0.293,0.6,0.6V26.8z",s:"none",fl:"#333"}},f:{}}]},"upload-alt":{d:400,it:2,sh:[{i:{a:{p:"M18,12h5.372c0.669-0.001,0.829-0.384,0.355-0.858l-6.869-6.868c-0.474-0.475-1.243-0.475-1.717,0l-6.868,6.868C7.799,11.617,7.959,12,8.629,12H14v10h4V12z",s:"none",
fl:"#333"}},f:{}},{i:{a:{p:"M16,14c-7.732,0-14,3.58-14,8s6.268,8,14,8c7.732,0,14-3.58,14-8S23.732,14,16,14zM16,25c-5.522,0-10-2.238-10-5s4.478-5,10-5c5.523,0,10,2.238,10,5S21.523,25,16,25z",s:"none",fl:"#333"}},f:{0:{t:""},80:{t:"t0,-12"},82:{t:""},100:{}}}]},user:{d:1E3,it:1,sh:[{i:{a:{p:"M21.291,21.271c-1.175-0.483-1.646-1.819-1.646-1.819s-0.529,0.304-0.529-0.544c0-0.85,0.529,0.544,1.06-2.729c0,0,1.468-0.426,1.176-3.941h-0.354c0,0,0.883-3.759,0-5.032c-0.882-1.273-1.234-2.121-3.177-2.729c-1.941-0.607-1.233-0.486-2.646-0.424c-1.412,0.061-2.589,0.849-2.589,1.272c0,0-0.882,0.061-1.234,0.425c-0.353,0.364-0.941,2.06-0.941,2.485s0.395,3.274,0.689,3.881l-0.451,0.121c-0.294,3.515,1.176,3.941,1.176,3.941c0.529,3.272,1.059,1.879,1.059,2.729c0,0.848-0.53,0.544-0.53,0.544s-0.47,1.336-1.646,1.819c-1.177,0.485-7.705,3.091-8.236,3.636C1.942,25.455,2.002,28,2.002,28h27.996c0,0,0.061-2.545-0.471-3.094C28.996,24.361,22.468,21.756,21.291,21.271z",
s:"none",fl:"#333"}},f:{10:{p:"M21.291,21.271c-1.175-0.483-1.646-1.819-1.646-1.819s-0.425,0.515-0.862-1.17c-0.213-0.821,0.631,0.422,0.468-2.891c0,0,1.348-0.724,0.331-4.101l-0.346,0.075c0,0,0.081-3.861-1.048-4.921c-1.127-1.06-1.648-1.815-3.674-2.001c-2.025-0.186-1.308-0.216-2.676,0.141C10.47,4.938,9.483,5.956,9.571,6.37c0,0-0.85,0.245-1.119,0.674c-0.27,0.43-0.492,2.213-0.403,2.628c0.088,0.416,0.969,3.14,1.382,3.672l-0.317,0.192c0.444,3.499,1.97,3.605,1.97,3.605c1.199,3.091,1.427,1.616,1.604,2.446l-0.335-0.138c0,0-0.47,1.336-1.646,1.819c-1.177,0.485-7.705,3.091-8.236,3.636C1.942,25.455,2.002,28,2.002,28h27.996c0,0,0.061-2.545-0.471-3.094C28.996,24.361,22.468,21.756,21.291,21.271z"},
50:{},60:{p:"M21.291,21.271c-1.175-0.483-1.646-1.819-1.646-1.819s-0.529,0.304-0.529-0.544c0-0.85,0.529,0.544,1.06-2.729c0,0,1.468-0.426,1.176-3.941h-0.354c0,0,0.883-3.759,0-5.032c-0.882-1.273-1.234-2.121-3.177-2.729c-1.941-0.607-1.233-0.486-2.646-0.424c-1.412,0.061-2.589,0.849-2.589,1.272c0,0-0.882,0.061-1.234,0.425c-0.353,0.364-0.941,2.06-0.941,2.485s0.395,3.274,0.689,3.881l-0.451,0.121c-0.294,3.515,1.176,3.941,1.176,3.941c0.529,3.272,1.059,1.879,1.059,2.729c0,0.848-0.53,0.544-0.53,0.544s-0.47,1.336-1.646,1.819c-1.177,0.485-7.705,3.091-8.236,3.636C1.942,25.455,2.002,28,2.002,28h27.996c0,0,0.061-2.545-0.471-3.094C28.996,24.361,22.468,21.756,21.291,21.271z"},
100:{}}}]},users:{d:1E3,it:1,sh:[{i:{a:{p:"M8.672,21.086c-0.099-0.192-0.148-0.331-0.148-0.331s-0.432,0.255-0.432-0.464s0.432,0.464,0.864-2.312c0,0,1.198-0.359,0.958-3.34H9.627c0,0,0.143-0.632,0.237-1.428c-0.004-0.33,0.006-0.681,0.037-1.066l0.038-0.456c-0.021-0.527-0.107-1.005-0.312-1.313c-0.72-1.078-1.008-1.797-2.591-2.312C5.453,7.55,6.028,7.652,4.878,7.705c-1.152,0.052-2.112,0.718-2.112,1.08c0,0-0.72,0.052-1.008,0.36c-0.271,0.29-0.705,1.565-0.757,2.018v0.301c0.047,0.699,0.258,2.622,0.469,3.076l-0.286,0.103c-0.238,2.98,0.959,3.341,0.959,3.341c0.432,2.772,0.864,1.591,0.864,2.31c0,0.72-0.432,0.463-0.432,0.463s-0.383,1.132-1.343,1.542C1.171,22.322,1.093,22.356,1,22.395v5.604h0.575c-0.029-1.367,0.077-3.134,0.746-3.848C2.677,23.771,3.844,23.146,8.672,21.086z",
o:1,s:"none",fl:"#333"}},f:{15:{o:0},16:{t:"t-10,0"},40:{},60:{o:1,t:""},100:{}}},{i:{a:{p:"M31,11.389c-0.041-0.405-0.127-0.766-0.293-1.013c-0.719-1.079-1.008-1.797-2.589-2.312c-1.584-0.514-1.008-0.412-2.16-0.36c-1.15,0.052-2.111,0.718-2.111,1.08c0,0-0.719,0.052-1.008,0.36c-0.271,0.292-0.709,1.576-0.758,2.025h0.033l0.08,0.977c0.02,0.248,0.021,0.467,0.027,0.691c0.09,0.713,0.209,1.445,0.33,1.702l-0.287,0.103c-0.238,2.98,0.961,3.341,0.961,3.341c0.432,2.772,0.863,1.591,0.863,2.31c0,0.72-0.434,0.463-0.434,0.463s-0.053,0.152-0.162,0.362c4.77,2.034,5.927,2.655,6.278,3.035c0.67,0.714,0.775,2.479,0.746,3.848h0.48v-5.681c-0.018-0.007-0.039-0.017-0.053-0.022c-0.959-0.411-1.344-1.542-1.344-1.542s-0.432,0.257-0.432-0.463c0-0.719,0.432,0.463,0.863-2.31c0,0,0.805-0.247,0.963-1.973v-1.313c0-0.019,0-0.036-0.002-0.055h-0.289c0,0,0.215-0.954,0.291-1.993v-1.259H31z",
o:1,s:"none",fl:"#333"}},f:{20:{},35:{o:0},36:{t:"t10,0"},60:{},80:{o:1,t:""},100:{}}},{i:{a:{p:"M21.14,21.271c-1.13-0.484-1.583-1.819-1.583-1.819s-0.51,0.303-0.51-0.545c0-0.849,0.51,0.545,1.02-2.729c0,0,1.413-0.425,1.132-3.94h-0.34c0,0,0.85-3.759,0-5.032c-0.849-1.273-1.188-2.121-3.058-2.728c-1.869-0.607-1.187-0.486-2.546-0.424c-1.359,0.061-2.492,0.849-2.492,1.272c0,0-0.849,0.061-1.188,0.425c-0.34,0.364-0.906,2.06-0.906,2.485s0.283,3.274,0.566,3.88l-0.337,0.122c-0.283,3.515,1.132,3.94,1.132,3.94c0.509,3.273,1.019,1.88,1.019,2.729c0,0.848-0.51,0.545-0.51,0.545s-0.452,1.335-1.584,1.819c-1.132,0.483-7.415,3.09-7.926,3.636c-0.511,0.548-0.453,3.093-0.453,3.093H29.52c0,0,0.059-2.545-0.453-3.093C28.556,24.36,22.272,21.754,21.14,21.271z",
s:"none",fl:"#333"}},f:{}}]},"video-play":{d:400,it:2,sh:[{i:{a:{p:"M6.866,4.105l18.775,11.446c0.479,0.246,0.479,0.65,0,0.898L6.866,27.894C6.388,28.143,6,27.94,6,27.445V4.557C6,4.059,6.388,3.859,6.866,4.105z",s:"none",fl:"#333"}},f:{48:{t:"t28,0"},49:{t:"t28,28"},50:{t:"t-28,28"},51:{t:"t-28,0"},100:{t:""}}}]},"video-play-alt":{d:400,it:2,sh:[{i:{a:{p:"M16,4C9.373,4,4,9.373,4,16s5.373,12,12,12s12-5.373,12-12S22.627,4,16,4zM21.82,16.226l-9.388,5.72C12.193,22.07,12,21.971,12,21.723V10.278c0-0.249,0.193-0.35,0.433-0.227l9.388,5.724C22.061,15.898,22.061,16.102,21.82,16.226z",
s:"none",fl:"#333"}},f:{25:{p:"M16,4C9.373,4,4,9.373,4,16s5.373,12,12,12s12-5.373,12-12S22.627,4,16,4zM25.82,16.226l-9.388,5.72C16.193,22.07,16,21.971,16,21.723V10.278c0-0.249,0.193-0.35,0.433-0.227l9.388,5.724C26.061,15.898,26.061,16.102,25.82,16.226z"},75:{p:"M16,4C9.373,4,4,9.373,4,16s5.373,12,12,12s12-5.373,12-12S22.627,4,16,4zM17.82,16.226l-9.388,5.72C8.193,22.07,8,21.971,8,21.723V10.278c0-0.249,0.193-0.35,0.433-0.227l9.388,5.724C18.061,15.898,18.061,16.102,17.82,16.226z"},100:{p:"M16,4C9.373,4,4,9.373,4,16s5.373,12,12,12s12-5.373,12-12S22.627,4,16,4zM21.82,16.226l-9.388,5.72C12.193,22.07,12,21.971,12,21.723V10.278c0-0.249,0.193-0.35,0.433-0.227l9.388,5.724C22.061,15.898,22.061,16.102,21.82,16.226z"}}}]},
"video-stop":{d:600,it:1,sh:[{i:{a:{p:"M16,4h11.4C27.781,4,28,4.266,28,4.6v10.951v0.898V27.4c0,0.35-0.281,0.6-0.6,0.6H16h-1H4.6C4.234,28,4,27.734,4,27.4V4.6C4,4.281,4.266,4,4.6,4H15H16z",s:"none",fl:"#333"}},f:{0:{p:"M6.866,4.105l10.105,6.161l0.481,0.293l8.189,4.993c0.479,0.246,0.479,0.65,0,0.898l-7.882,4.804l-0.507,0.31l-10.387,6.33C6.388,28.143,6,27.94,6,27.445V17v-1v-0.295v-1V4.557C6,4.059,6.388,3.859,6.866,4.105z"},40:{},60:{p:"M16,4h11.4C27.781,4,28,4.266,28,4.6v10.951v0.898V27.4c0,0.35-0.281,0.6-0.6,0.6H16h-1H4.6C4.234,28,4,27.734,4,27.4V4.6C4,4.281,4.266,4,4.6,4H15H16z"},
100:{}}}]},"video-pause":{d:500,it:1,sh:[{i:{a:{p:"M18,4.899C18,4.404,18.402,4,18.899,4h6.201C25.598,4,26,4.404,26,4.899v22.201C26,27.598,25.598,28,25.101,28h-6.201C18.402,28,18,27.598,18,27.101V4.899zM6,27.101C6,27.598,6.403,28,6.899,28h6.201C13.597,28,14,27.598,14,27.101V4.899C14,4.404,13.597,4,13.101,4H6.899C6.403,4,6,4.404,6,4.899V27.101z",s:"none",fl:"#333"}},f:{0:{p:"M34,4.899C34,4.404,34.402,4,34.899,4h6.201C41.598,4,42,4.404,42,4.899v22.201C42,27.598,41.598,28,41.101,28h-6.201C34.402,28,34,27.598,34,27.101V4.899zM-10,27.101C-10,27.598-9.597,28-9.101,28h6.201C-2.403,28-2,27.598-2,27.101V4.899C-2,4.404-2.403,4-2.899,4h-6.201C-9.597,4-10,4.404-10,4.899V27.101z"},
20:{},60:{p:"M18,4.899C18,4.404,18.402,4,18.899,4h6.201C25.598,4,26,4.404,26,4.899v22.201C26,27.598,25.598,28,25.101,28h-6.201C18.402,28,18,27.598,18,27.101V4.899zM6,27.101C6,27.598,6.403,28,6.899,28h6.201C13.597,28,14,27.598,14,27.101V4.899C14,4.404,13.597,4,13.101,4H6.899C6.403,4,6,4.404,6,4.899V27.101z",e:">"},100:{}}}]},"video-eject":{d:800,it:1,sh:[{i:{a:{p:"M4.105,17.48L15.552,6.215c0.246-0.287,0.65-0.287,0.898,0L27.894,17.48C28.143,17.768,27.94,18,27.445,18H4.557C4.059,18,3.859,17.768,4.105,17.48zM27.399,24C27.731,24,28,23.731,28,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6H4.6C4.269,20,4,20.269,4,20.6v2.8C4,23.731,4.269,24,4.6,24H27.399z",
s:"none",fl:"#333"}},f:{0:{p:"M10.053,15h5.723c0.123,0,0.325,0,0.449,0h5.721c0.127,0,0.023,0-0.223,0H10.278C10.029,15,9.93,15,10.053,15zM21.699,18C21.867,18,22,17.867,22,17.699v-1.4C22,16.135,21.867,16,21.699,16H10.3c-0.166,0-0.3,0.135-0.3,0.299v1.4C10,17.867,10.134,18,10.3,18H21.699z"},20:{},40:{p:"M4.105,18h11.446c0.246,0,0.65,0,0.898,0h11.443c0.249,0,0.047,0-0.448,0H4.557C4.059,18,3.859,18,4.105,18zM27.399,24C27.731,24,28,23.731,28,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6H4.6C4.269,20,4,20.269,4,20.6v2.8C4,23.731,4.269,24,4.6,24H27.399z",
e:">"},60:{},80:{p:"M4.105,17.48L15.552,6.215c0.246-0.287,0.65-0.287,0.898,0L27.894,17.48C28.143,17.768,27.94,18,27.445,18H4.557C4.059,18,3.859,17.768,4.105,17.48zM27.399,24C27.731,24,28,23.731,28,23.4V20.6c0-0.331-0.269-0.6-0.6-0.6H4.6C4.269,20,4,20.269,4,20.6v2.8C4,23.731,4.269,24,4.6,24H27.399z",e:">"},100:{}}}]},"video-backward":{d:400,it:2,sh:[{i:{a:{p:"M15.48,27.895L4.215,16.448c-0.287-0.246-0.287-0.65,0-0.898L15.48,4.107C15.768,3.858,16,4.06,16,4.555v22.888C16,27.941,15.768,28.141,15.48,27.895z",
s:"none",fl:"#333"}},f:{0:{t:"t30,0"},25:{t:"",e:">"},100:{}}},{i:{a:{p:"M27.48,27.895L16.215,16.448c-0.287-0.246-0.287-0.65,0-0.898L27.48,4.107C27.768,3.858,28,4.06,28,4.555v22.888C28,27.941,27.768,28.141,27.48,27.895z",s:"none",fl:"#333"}},f:{0:{t:"t30,0"},25:{},50:{t:"",e:">"},100:{}}}]},"video-step-backward":{d:500,it:1,sh:[{i:{a:{p:"M12,27.4c0,0.331-0.269,0.6-0.6,0.6H8.6C8.269,28,8,27.731,8,27.4V4.6C8,4.269,8.269,4,8.6,4h2.8C11.731,4,12,4.269,12,4.6V27.4z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},
25:{},50:{o:1},100:{}}},{i:{a:{p:"M23.48,27.895L12.215,16.448c-0.287-0.246-0.287-0.65,0-0.898L23.48,4.107C23.768,3.858,24,4.06,24,4.555v22.888C24,27.941,23.768,28.141,23.48,27.895z",s:"none",fl:"#333"}},f:{0:{t:"t22,0"},50:{},75:{t:"",e:">"},100:{}}}]},"video-fast-backward":{d:600,it:1,sh:[{i:{a:{p:"M6,27.4C6,27.731,5.731,28,5.4,28H2.6C2.269,28,2,27.731,2,27.4V4.6C2,4.269,2.269,4,2.6,4h2.8C5.731,4,6,4.269,6,4.6V27.4z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},15:{},30:{o:1},100:{}}},{i:{a:{p:"M17.48,27.895L6.215,16.448c-0.287-0.246-0.287-0.65,0-0.898L17.48,4.107C17.768,3.858,18,4.06,18,4.555v22.888C18,27.941,17.768,28.141,17.48,27.895z",
s:"none",fl:"#333"}},f:{0:{t:"t28,0"},30:{},50:{t:"",e:">"},100:{}}},{i:{a:{p:"M29.48,27.895L18.215,16.448c-0.287-0.246-0.287-0.65,0-0.898L29.48,4.107C29.768,3.858,30,4.06,30,4.555v22.888C30,27.941,29.768,28.141,29.48,27.895z",s:"none",fl:"#333"}},f:{0:{t:"t28,0"},50:{},70:{t:"",e:">"},100:{}}}]},"video-forward":{d:400,it:2,sh:[{i:{a:{p:"M4.52,4.105l11.266,11.447c0.287,0.246,0.287,0.648,0,0.896L4.52,27.895C4.232,28.142,4,27.941,4,27.442V4.555C4,4.059,4.232,3.859,4.52,4.105z",s:"none",fl:"#333"}},
f:{0:{t:"t-30,0"},25:{},50:{t:"",e:">"},100:{}}},{i:{a:{p:"M16.52,4.105l11.266,11.447c0.287,0.247,0.287,0.649,0,0.896L16.52,27.894C16.232,28.142,16,27.94,16,27.443V4.555C16,4.058,16.232,3.859,16.52,4.105z",s:"none",fl:"#333"}},f:{0:{t:"t-30,0"},25:{t:"",e:">"},100:{}}}]},"video-step-forward":{d:500,it:1,sh:[{i:{a:{p:"M20,4.6C20,4.269,20.269,4,20.601,4h2.8C23.731,4,24,4.269,24,4.6V27.4c0,0.331-0.269,0.6-0.6,0.6H20.6c-0.331,0-0.6-0.269-0.6-0.601V4.6z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},25:{},50:{o:1},
100:{}}},{i:{a:{p:"M8.52,4.105l11.266,11.446c0.287,0.246,0.287,0.65,0,0.898L8.52,27.893C8.232,28.142,8,27.939,8,27.444V4.557C8,4.059,8.232,3.859,8.52,4.105z",s:"none",fl:"#333"}},f:{0:{t:"t-22,0"},50:{},75:{t:"",e:">"},100:{}}}]},"video-fast-forward":{d:600,it:1,sh:[{i:{a:{p:"M26,4.6C26,4.269,26.269,4,26.601,4h2.8C29.731,4,30,4.269,30,4.6V27.4c0,0.331-0.269,0.6-0.6,0.6H26.6c-0.331,0-0.6-0.269-0.6-0.601V4.6z",o:1,s:"none",fl:"#333"}},f:{0:{o:0},15:{},30:{o:1},100:{}}},{i:{a:{p:"M14.52,4.105l11.266,11.446c0.287,0.246,0.287,0.65,0,0.898L14.52,27.894C14.232,28.143,14,27.94,14,27.445V4.557C14,4.059,14.232,3.859,14.52,4.105z",
s:"none",fl:"#333"}},f:{0:{t:"t-28,0"},30:{},50:{t:"",e:">"},100:{}}},{i:{a:{p:"M2.52,4.105l11.266,11.446c0.287,0.246,0.287,0.65,0,0.898L2.52,27.894C2.232,28.143,2,27.94,2,27.445V4.557C2,4.059,2.232,3.859,2.52,4.105z",s:"none",fl:"#333"}},f:{0:{t:"t-28,0"},50:{},70:{t:"",e:">"},100:{}}}]},warning:{d:400,it:1,sh:[{i:{a:{p:"M30.088,25.18L17.5,3.376c-0.828-1.435-2.171-1.435-3,0L1.912,25.18c-0.829,1.436-0.157,2.598,1.5,2.598h25.176C30.245,27.777,30.916,26.615,30.088,25.18zM14,9.7c0-1.104,0.9-2,2-2c1.1,0,2,0.896,2,2v7c0,1.104-0.9,2-2,2c-1.1,0-2-0.896-2-2V9.7zM16,24.3c-1.16,0-2.1-0.938-2.1-2.1c0-1.158,0.94-2.1,2.1-2.1c1.16,0,2.1,0.941,2.1,2.1C18.1,23.361,17.16,24.3,16,24.3z",
s:"none",fl:"#333"}},f:{0:{p:"M30.088,25.18L17.5,3.376c-0.828-1.435-2.171-1.435-3,0L1.912,25.18c-0.829,1.436-0.157,2.598,1.5,2.598h25.176C30.245,27.777,30.916,26.615,30.088,25.18zM14,18.692c0-0.001,0.9-0.002,2-0.002c1.1,0,2,0.001,2,0.002v0.006c0,0.001-0.9,0.002-2,0.002c-1.1,0-2-0.001-2-0.002V18.692zM16,24.3c-1.16,0-2.1-0.002-2.1-0.005s0.94-0.005,2.1-0.005c1.16,0,2.1,0.002,2.1,0.005S17.16,24.3,16,24.3z",t:"s0.2"},30:{t:"s1"},60:{p:"M30.088,25.18L17.5,3.376c-0.828-1.435-2.171-1.435-3,0L1.912,25.18c-0.829,1.436-0.157,2.598,1.5,2.598h25.176C30.245,27.777,30.916,26.615,30.088,25.18zM14,9.7c0-1.104,0.9-2,2-2c1.1,0,2,0.896,2,2v7c0,1.104-0.9,2-2,2c-1.1,0-2-0.896-2-2V9.7zM16,24.3c-1.16,0-2.1-0.938-2.1-2.1c0-1.158,0.94-2.1,2.1-2.1c1.16,0,2.1,0.941,2.1,2.1C18.1,23.361,17.16,24.3,16,24.3z",
e:"bounce"},100:{}}}]},"warning-alt":{d:400,it:1,sh:[{i:{a:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM14,9.7c0-1.104,0.9-2,2-2c1.1,0,2,0.896,2,2v7c0,1.104-0.9,2-2,2c-1.1,0-2-0.896-2-2V9.7zM16,24.3c-1.16,0-2.1-0.938-2.1-2.1c0-1.158,0.94-2.1,2.1-2.1c1.16,0,2.1,0.941,2.1,2.1C18.1,23.361,17.16,24.3,16,24.3z",s:"none",fl:"#333"}},f:{0:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM14,18.692c0-0.001,0.9-0.002,2-0.002c1.1,0,2,0.001,2,0.002v0.006c0,0.001-0.9,0.002-2,0.002c-1.1,0-2-0.001-2-0.002V18.692zM16,24.3c-1.16,0-2.1-0.002-2.1-0.005s0.94-0.005,2.1-0.005c1.16,0,2.1,0.002,2.1,0.005S17.16,24.3,16,24.3z",
t:"s0.2"},30:{t:"s1"},60:{p:"M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13c7.179,0,13-5.82,13-13S23.179,3,16,3zM14,9.7c0-1.104,0.9-2,2-2c1.1,0,2,0.896,2,2v7c0,1.104-0.9,2-2,2c-1.1,0-2-0.896-2-2V9.7zM16,24.3c-1.16,0-2.1-0.938-2.1-2.1c0-1.158,0.94-2.1,2.1-2.1c1.16,0,2.1,0.941,2.1,2.1C18.1,23.361,17.16,24.3,16,24.3z",e:"bounce"},100:{}}}]},windows:{d:0,it:1,sh:[{i:{a:{p:"M15.517,15.082c-3.751-1.941-5.478-3.879-10.583-1.083c0.95-3.328,1.424-4.992,2.374-8.321c5.107-2.796,6.833-0.859,10.584,1.082C16.941,10.088,16.467,11.752,15.517,15.082zM15.042,16.746c-3.752-1.94-5.478-3.879-10.584-1.083c-0.95,3.328-1.425,4.992-2.375,8.321c5.106-2.796,6.833-0.857,10.586,1.082C13.618,21.738,14.092,20.074,15.042,16.746zM29.918,7.716c-5.105,2.796-6.832,1.737-10.584-0.203c-0.95,3.329-1.425,4.994-2.375,8.322c3.752,1.941,5.478,3,10.584,0.203C28.492,12.709,28.968,11.045,29.918,7.716zM27.068,17.701c-5.106,2.798-6.833,1.737-10.585-0.203c-0.95,3.329-1.425,4.994-2.375,8.322c3.752,1.941,5.478,3.001,10.585,0.202C25.644,22.693,26.119,21.029,27.068,17.701z",
s:"none",fl:"#00CCFF"}},f:{}}]},windows8:{d:0,it:1,sh:[{i:{a:{p:"M13,17v11.266L2,26.5V17H13zM13,4.734L2,6.5V16h11V4.734zM30,16V2L14,4.563V16H30zM14,28.438L30,31V17H14V28.438z",s:"none",fl:"#00CCFF"}},f:{}}]},wordpress:{d:0,it:1,sh:[{i:{a:{p:"M5.5,16c0,4.047,2.415,7.546,5.918,9.203L6.409,11.838C5.827,13.11,5.5,14.518,5.5,16L5.5,16zM23.088,15.484c0-1.265-0.466-2.14-0.865-2.821c-0.532-0.843-1.031-1.556-1.031-2.398c0-0.94,0.731-1.815,1.763-1.815c0.047,0,0.091,0.005,0.137,0.008C21.223,6.792,18.733,5.773,16,5.773c-3.668,0-6.896,1.833-8.773,4.609c0.247,0.007,0.479,0.012,0.676,0.012c1.098,0,2.798-0.13,2.798-0.13c0.566-0.032,0.632,0.777,0.067,0.843c0,0-0.569,0.065-1.202,0.097l3.824,11.077l2.298-6.712l-1.635-4.365c-0.566-0.032-1.102-0.097-1.102-0.097c-0.566-0.032-0.5-0.875,0.067-0.843c0,0,1.733,0.13,2.765,0.13c1.098,0,2.799-0.13,2.799-0.13c0.565-0.032,0.633,0.777,0.066,0.843c0,0-0.569,0.065-1.201,0.097l3.795,10.992l1.047-3.407C22.743,17.375,23.088,16.358,23.088,15.484L23.088,15.484zM16.184,16.895l-3.15,8.915c0.941,0.27,1.936,0.417,2.966,0.417c1.223,0,2.396-0.205,3.487-0.58c-0.028-0.044-0.055-0.09-0.076-0.141L16.184,16.895zM25.214,11.094c0.045,0.326,0.07,0.675,0.07,1.051c0,1.038-0.199,2.205-0.798,3.664l-3.207,9.03C24.4,23.066,26.5,19.772,26.5,16C26.5,14.222,26.033,12.55,25.214,11.094L25.214,11.094zM16,2C8.268,2,2,8.268,2,16c0,7.731,6.268,14,14,14c7.731,0,14-6.269,14-14c0-3.152-1.042-6.062-2.8-8.402C24.646,4.199,20.579,2,16,2zM16,28.25C9.234,28.25,3.75,22.766,3.75,16S9.234,3.75,16,3.75c3.895,0,7.365,1.817,9.609,4.651c1.653,2.088,2.641,4.729,2.641,7.599C28.25,22.766,22.766,28.25,16,28.25z",
s:"none",fl:"#444"}},f:{}}]},"wordpress-alt":{d:0,it:1,sh:[{i:{a:{p:"M5.5,16c0,4.047,2.415,7.546,5.918,9.203L6.409,11.838C5.827,13.11,5.5,14.518,5.5,16L5.5,16zM23.088,15.484c0-1.265-0.466-2.14-0.865-2.821c-0.532-0.843-1.031-1.556-1.031-2.398c0-0.94,0.731-1.815,1.763-1.815c0.047,0,0.091,0.005,0.137,0.008C21.223,6.792,18.733,5.773,16,5.773c-3.668,0-6.896,1.833-8.773,4.609c0.247,0.007,0.479,0.012,0.676,0.012c1.098,0,2.798-0.13,2.798-0.13c0.566-0.032,0.632,0.777,0.067,0.843c0,0-0.569,0.065-1.202,0.097l3.824,11.077l2.298-6.712l-1.635-4.365c-0.566-0.032-1.102-0.097-1.102-0.097c-0.566-0.032-0.5-0.875,0.067-0.843c0,0,1.733,0.13,2.765,0.13c1.098,0,2.799-0.13,2.799-0.13c0.565-0.032,0.633,0.777,0.066,0.843c0,0-0.569,0.065-1.201,0.097l3.795,10.992l1.047-3.407C22.743,17.375,23.088,16.358,23.088,15.484L23.088,15.484zM16.184,16.895l-3.15,8.915c0.941,0.27,1.936,0.417,2.966,0.417c1.223,0,2.396-0.205,3.487-0.58c-0.028-0.044-0.055-0.09-0.076-0.141L16.184,16.895zM25.214,11.094c0.045,0.326,0.07,0.675,0.07,1.051c0,1.038-0.199,2.205-0.798,3.664l-3.207,9.03C24.4,23.066,26.5,19.772,26.5,16C26.5,14.222,26.033,12.55,25.214,11.094L25.214,11.094zM27,2H5C3.344,2,2,3.343,2,5v22c0,1.656,1.344,3,3,3h22c1.657,0,3-1.344,3-3V5C30,3.343,28.657,2,27,2zM16,28.25C9.234,28.25,3.75,22.766,3.75,16S9.234,3.75,16,3.75c3.895,0,7.365,1.817,9.609,4.651c1.653,2.088,2.641,4.729,2.641,7.599C28.25,22.766,22.766,28.25,16,28.25z",
s:"none",fl:"#444"}},f:{}}]},wrench:{d:1E3,it:1,sh:[{i:{a:{p:"M11.954,7.18l-1.928-2.298l-2.954,0.52L6.046,8.221l1.928,2.298l2.954-0.52L11.954,7.18zM7.851,8.665c-0.533-0.635-0.45-1.58,0.185-2.113c0.635-0.532,1.58-0.45,2.113,0.185c0.533,0.635,0.449,1.581-0.185,2.113C9.329,9.382,8.384,9.299,7.851,8.665z",o:0,s:"none",fl:"#333"}},f:{9:{o:0},10:{o:1},15:{t:"r-10,9,7.7"},25:{t:"r10,9,7.7"},30:{t:""},31:{o:0},100:{}}},{i:{a:{p:"M20.046,24.82l1.929,2.298l2.954-0.521l1.025-2.818l-1.928-2.298l-2.954,0.521L20.046,24.82zM24.149,23.336c0.532,0.635,0.45,1.58-0.185,2.113c-0.635,0.531-1.58,0.449-2.113-0.186s-0.449-1.58,0.185-2.113C22.671,22.618,23.616,22.701,24.149,23.336z",
o:0,s:"none",fl:"#333"}},f:{39:{o:0},40:{o:1},45:{t:"r-10,23,24.3"},55:{t:"r10,23,24.3"},60:{t:""},61:{o:0},100:{}}},{i:{a:{p:"M15.03,13.384l-11.06,9.644c-1.178,1.027-1.3,2.816-0.277,3.997c1.024,1.181,2.809,1.307,3.986,0.279l11.071-9.655c2.496,1.198,5.571,0.882,7.793-1.056c2.107-1.836,2.877-4.636,2.238-7.177l-4.297,3.694L20.979,11.9l-0.708-3.651l4.308-3.703c-2.428-1.004-5.314-0.634-7.431,1.212C14.916,7.704,14.178,10.73,15.03,13.384z",t:"r0",s:"none",fl:"#333"}},f:{10:{p:"M13.384,16.97l9.644,11.06c1.027,1.178,2.816,1.3,3.997,0.277c1.181-1.024,1.307-2.809,0.279-3.986L17.649,13.25c1.198-2.496,0.882-5.572-1.056-7.793c-1.836-2.107-4.636-2.877-7.177-2.239l3.694,4.297L11.9,11.022L8.249,11.73L4.545,7.422c-1.004,2.427-0.634,5.314,1.212,7.43C7.704,17.084,10.73,17.822,13.384,16.97z"},
15:{t:"r-10,9,7.7"},25:{t:"r10,9,7.7"},30:{t:""},40:{p:"M18.615,15.03L8.972,3.971c-1.027-1.178-2.816-1.3-3.997-0.277C3.794,4.718,3.668,6.502,4.696,7.68l9.655,11.07c-1.198,2.496-0.882,5.572,1.056,7.793c1.835,2.107,4.635,2.877,7.176,2.239l-3.694-4.298l1.211-3.506l3.651-0.709l3.703,4.309c1.004-2.428,0.634-5.314-1.212-7.431C24.296,14.916,21.27,14.178,18.615,15.03z"},45:{t:"r-10,23,24.3"},55:{t:"r10,23,24.3"},60:{t:""},70:{p:"M15.03,13.384l-11.06,9.644c-1.178,1.027-1.3,2.816-0.277,3.997c1.024,1.181,2.809,1.307,3.986,0.279l11.071-9.655c2.496,1.198,5.571,0.882,7.793-1.056c2.107-1.836,2.877-4.636,2.238-7.177l-4.297,3.694L20.979,11.9l-0.708-3.651l4.308-3.703c-2.428-1.004-5.314-0.634-7.431,1.212C14.916,7.704,14.178,10.73,15.03,13.384z"},
100:{}}}]},youtube:{d:0,it:1,sh:[{i:{a:{p:"M24.563,4H7.438C4.447,4,2,6.447,2,9.438v11.125C2,23.554,4.447,26,7.438,26h17.125C27.554,26,30,23.554,30,20.563V9.438C30,6.447,27.554,4,24.563,4zM28,20.449c0,0.942-0.372,1.833-1.051,2.506C26.272,23.629,25.377,24,24.429,24H7.572c-0.949,0-1.844-0.371-2.521-1.045C4.373,22.282,4,21.392,4,20.449V9.551c0-0.942,0.373-1.832,1.051-2.506C5.728,6.371,6.624,6,7.572,6h16.856c0.948,0,1.844,0.371,2.521,1.044C27.628,7.719,28,8.609,28,9.551V20.449zM12.442,21.89l7.374-6.5c0.244-0.214,0.244-0.565,0-0.779l-7.374-6.499C12.198,7.896,12,8.001,12,8.346v13.309C12,21.999,12.198,22.103,12.442,21.89z",
o:1,s:"none",fl:"#A72924"}},f:{}}]},"zoom-in":{d:1E3,it:1,sh:[{i:{a:{p:"M17,12h-3v3h-2v-3H9v-2h3V7h2v3h3V12z",s:"none",fl:"#333"}},f:{0:{t:"s0.3"},45:{t:"s1.7"},50:{t:""},100:{}},fIE:{0:{t:"s0.3,0.3,11.5,9.5"},45:{t:"s1.6,1.6,11.5,9.5"},50:{t:""},100:{}}},{i:{a:{p:"M29.947,25.809l-5.432-5.432c-0.443-0.443-1.164-0.443-1.607,0l-3.268-3.297c1.416-1.597,2.457-3.729,2.457-6.031C22.098,6.052,18.047,2,13.049,2C8.051,2,4,6.052,4,11.049c0,4.998,4.051,9.049,9.049,9.049c1.799,0,3.583-0.613,4.992-1.518l3.259,3.404c-0.444,0.445-0.444,1.164,0,1.609l5.433,5.432c0.443,0.443,1.164,0.443,1.607,0l1.607-1.607C30.393,26.973,30.393,26.254,29.947,25.809zM12.97,16.92c-3.324,0-6.018-2.756-6.018-6.08c0-3.324,2.694-6.019,6.018-6.019s6.143,2.694,6.143,6.019C19.113,14.164,16.294,16.92,12.97,16.92z",
s:"none",fl:"#333"}},f:{}}]},"zoom-out":{d:1E3,it:1,sh:[{i:{a:{p:"M17,12H9v-2h8V12z",s:"none",fl:"#333"}},f:{30:{t:"s0.3"},45:{},50:{t:""},100:{}},fIE:{30:{t:"s0.3,0.3,11.5,9.5"},45:{},50:{t:""},100:{}}},{i:{a:{p:"M29.947,25.809l-5.432-5.432c-0.443-0.443-1.164-0.443-1.607,0l-3.268-3.297c1.416-1.597,2.457-3.729,2.457-6.031C22.098,6.052,18.047,2,13.049,2C8.051,2,4,6.052,4,11.049c0,4.998,4.051,9.049,9.049,9.049c1.799,0,3.583-0.613,4.992-1.518l3.259,3.404c-0.444,0.445-0.444,1.164,0,1.609l5.433,5.432c0.443,0.443,1.164,0.443,1.607,0l1.607-1.607C30.393,26.973,30.393,26.254,29.947,25.809zM12.97,16.92c-3.324,0-6.018-2.756-6.018-6.08c0-3.324,2.694-6.019,6.018-6.019s6.143,2.694,6.143,6.019C19.113,14.164,16.294,16.92,12.97,16.92z",
s:"none",fl:"#333"}},f:{}}]},livicon:{d:800,it:1,sh:[{i:{a:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM8,15.4V6.6C8,6.269,8.269,6,8.6,6h8.8C17.731,6,18,6.269,18,6.6v8.8c0,0.332-0.269,0.6-0.6,0.6H8.6C8.269,16,8,15.731,8,15.4zM18,25.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6h2.8c0.331,0,0.6,0.269,0.6,0.6V25.4zM24,21.4c0,0.331-0.269,0.6-0.6,0.6H18.6c-0.331,0-0.6-0.269-0.6-0.6v-4.8c0-0.332,0.269-0.6,0.6-0.6H23.4c0.331,0,0.6,0.269,0.6,0.6V21.4z",
s:"none",fl:"#872632"}},f:{10:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26zM18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26zM18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26L18,26z"},20:{},30:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM18,22L18,22L18,22L18,22L18,22L18,22L18,22L18,22L18,22zM18,25.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6h2.8c0.331,0,0.6,0.269,0.6,0.6V25.4zM18,22L18,22L18,22L18,22L18,22L18,22L18,22L18,22L18,22z"},
40:{},50:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM18,16L18,16L18,16L18,16L18,16L18,16L18,16L18,16L18,16zM18,25.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6h2.8c0.331,0,0.6,0.269,0.6,0.6V25.4zM24,21.4c0,0.331-0.269,0.6-0.6,0.6H18.6c-0.331,0-0.6-0.269-0.6-0.6v-4.8c0-0.332,0.269-0.6,0.6-0.6H23.4c0.331,0,0.6,0.269,0.6,0.6V21.4z"},60:{},70:{p:"M27,2H5C3.343,2,2,3.344,2,5v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V5C30,3.344,28.657,2,27,2zM8,15.4V6.6C8,6.269,8.269,6,8.6,6h8.8C17.731,6,18,6.269,18,6.6v8.8c0,0.332-0.269,0.6-0.6,0.6H8.6C8.269,16,8,15.731,8,15.4zM18,25.4c0,0.331-0.269,0.6-0.6,0.6h-2.8c-0.332,0-0.6-0.269-0.6-0.6V22.6c0-0.331,0.269-0.6,0.6-0.6h2.8c0.331,0,0.6,0.269,0.6,0.6V25.4zM24,21.4c0,0.331-0.269,0.6-0.6,0.6H18.6c-0.331,0-0.6-0.269-0.6-0.6v-4.8c0-0.332,0.269-0.6,0.6-0.6H23.4c0.331,0,0.6,0.269,0.6,0.6V21.4z"},
100:{}}}]}}),lDI=lDI.replace(/\"d\":/g,'"duration":').replace(/\"i\":/g,'"init":').replace(/\"f\":/g,'"frames":').replace(/\"fIE\":/g,'"framesIE":').replace(/\"o\":/g,'"opacity":').replace(/\"t\":/g,'"transform":').replace(/\"it\":/g,'"iteration":').replace(/\"sh\":/g,'"shapes":').replace(/\"a\":/g,'"attr":').replace(/\"p\":/g,'"path":').replace(/\"fl\":/g,'"fill":').replace(/\"e\":/g,'"easing":').replace(/\"s\":/g,'"stroke-width":0,"stroke":'),liviconsdata=JSON.parse(lDI),sB=Raphael.svg,vB=Raphael.vml;
Raphael.fn.createLivicon=function(f,b,g,k,h,c,u,s,v,x,w,y,m){var e=[];g=clone(w);var d=g.shapes.length;s=s?s:g.iteration;var l=[],q=[],t=[],A="s"+y+","+y+",0,0";w=y=!1;if(b.match(/spinner/)){y=!0;var D=jQuery("#"+f),B=function(){if(D.is(":visible")){if(!z){for(var a=0;a<d;a++)e[a].animate(l[a].repeat(Infinity));z=!0}}else if(z){for(a=0;a<d;a++)e[a].stop();z=!1}}}b.match(/morph/)&&(w=!0);for(b=0;b<d;b++){var r=g.shapes[b].init,n;for(n in r)r[n].transform=A+r[n].transform}if(sB)for(b=0;b<d;b++)for(n in r=
g.shapes[b].frames,r)"transform"in r[n]&&(r[n].transform=A+r[n].transform);else for(b=0;b<d;b++)for(n in r=g.shapes[b].framesIE?g.shapes[b].framesIE:g.shapes[b].frames,r)"transform"in r[n]&&(r[n].transform=A+r[n].transform);for(b=0;b<d;b++)n=g.shapes[b].init.attr,"original"!=k&&(n.fill=k),t.push(n.fill),e[b]=this.path(n.path).attr(n);sB?jQuery("#"+f+" > svg").attr("id","canvas-for-"+f):jQuery("#"+f).children(":first-child").attr("id","canvas-for-"+f);f=jQuery("#"+f);m=m?m:f;if(!0==c){if(w){for(b=
0;b<d;b++)l.push(Raphael.animation(g.shapes[b].frames,mD)),q.push(g.shapes[b].init.attr);if(h){var C=clone(q);for(b=0;b<d;b++)C[b].fill=h}}else if(c=v?v:g.duration,!sB&&vB)for(b=0;b<d;b++)g.shapes[b].framesIE?l.push(Raphael.animation(g.shapes[b].framesIE,c)):l.push(Raphael.animation(g.shapes[b].frames,c)),q.push(g.shapes[b].init.attr);else for(b=0;b<d;b++)l.push(Raphael.animation(g.shapes[b].frames,c)),q.push(g.shapes[b].init.attr);if("click"==x)if(u&&!w)if(y){for(b=0;b<
d;b++)e[b].stop().animate(l[b].repeat(Infinity));var z=!0;setInterval(B,500)}else if(h){m.hover(function(){for(var a=0;a<d;a++)e[a].animate({fill:h},hD)},function(){for(var a=0;a<d;a++)e[a].animate({fill:t[a]},hD)});var p=!0;m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(p?l[a].repeat(u):q[a],0);p=!p})}else p=!0,m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(p?l[a].repeat(u):q[a],0);p=!p});else w?h?(m.hover(function(){for(var a=0;a<d;a++)e[a].animate({fill:h},
hD)},function(){for(var a=0;a<d;a++)e[a].animate({fill:t[a]},hD)}),p=!0,m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(p?l[a]:C[a],mD),p=!p})):(p=!0,m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(p?l[a]:q[a],mD),p=!p})):h?(m.hover(function(){for(var a=0;a<d;a++)e[a].animate({fill:h},hD)},function(){for(var a=0;a<d;a++)e[a].animate({fill:t[a]},hD)}),m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(l[a].repeat(s))})):
m.click(function(){for(var a=0;a<d;a++)e[a].stop().animate(l[a].repeat(s))});else if(u&&!w)if(y){for(x=0;x<d;x++)e[x].stop().animate(l[x].repeat(Infinity));z=!0;setInterval(B,500)}else h?m.hover(function(){for(var a=0;a<d;a++)e[a].stop().animate({fill:h},hD).animate(l[a].repeat(u))},function(){for(var a=0;a<d;a++)e[a].stop().animate(q[a],0)}):m.hover(function(){for(var a=0;a<d;a++)e[a].stop().animate(l[a].repeat(u))},function(){for(var a=0;a<d;a++)e[a].stop().animate(q[a],0)});else w?m.hover(function(){if(h)for(var a=
0;a<d;a++)e[a].stop().animate({fill:h},hD).animate(l[a]);else for(a=0;a<d;a++)e[a].stop().animate(l[a])},function(){for(var a=0;a<d;a++)e[a].stop().animate(q[a],mD)}):m.hover(function(){if(h)for(var a=0;a<d;a++)e[a].stop().animate(q[a],0).animate({fill:h},hD).animate(l[a].repeat(s));else for(a=0;a<d;a++)e[a].stop().animate(q[a],0).animate(l[a].repeat(s))},function(){for(var a=0;a<d;a++)e[a].animate({fill:t[a]},hD)})}else h&&m.hover(function(){for(var a=
0;a<d;a++)e[a].stop().animate({fill:h},hD)},function(){for(var a=0;a<d;a++)e[a].stop().animate({fill:t[a]},hD)});return!0};
(function(f){function b(){return b.counter++}b.counter=1;f.fn.extend({addLivicon:function(g){return this.each(function(){var k=f(this);if(!k.attr("id")){var h=b();k.attr("id","livicon-"+h)}var c=k.data();c.liviconRendered&&k.removeLivicon();c=fullNames(c);g&&(g=fullNames(g));var c=f.extend(c,g),h=k.attr("id"),u=k.parent(),s=c.name?c.name:dN,v=c.size?c.size:dS,x=c.eventtype?c.eventtype:dET,w=v/32;k[0].style.height?k.css("width",v):k.css({width:v,height:v});var y=s in liviconsdata?
liviconsdata[s]:liviconsdata[dN],m=k.hasClass(aC)||u.hasClass(aPC)?dAC:"original"==c.color?"original":c.color?c.color:dC,e=dA?!1==c.animate?c.animate:dA:!0==c.animate?c.animate:dA,d=dL?!1==c.loop?!1:Infinity:!0==c.loop?Infinity:!1,l=c.iteration?0<Math.round(c.iteration)?Math.round(c.iteration):!1:!1,q=c.duration?0<Math.round(c.duration)?Math.round(c.duration):!1:!1,t=dCCOH?dHC:!1;!1===c.hovercolor||
0===c.hovercolor?t=!1:!0===c.hovercolor||1===c.hovercolor?t=dHC:c.hovercolor&&(t=c.hovercolor);c=dOP?!1==c.onparent?!1:u:!0==c.onparent?u:!1;Raphael(h,v,v).createLivicon(h,s,v,m,t,e,d,l,q,x,y,w,c);k.data("liviconRendered",!0);return this})},removeLivicon:function(b){return this.each(function(){var k=f(this);k.data("liviconRendered",!1);if("total"===b)k.remove();else{var h=k.attr("id");f("#canvas-for-"+h).remove();return k}})},updateLivicon:function(b){return this.each(function(){var k=
f(this);k.removeLivicon().addLivicon(b);return k})}});f(".livicon").addLivicon()})(jQuery);function fullNames(f){f=JSON.stringify(f);f=f.replace(/\"n\":/g,'"name":').replace(/\"s\":/g,'"size":').replace(/\"c\":/g,'"color":').replace(/\"hc\":/g,'"hovercolor":').replace(/\"a\":/g,'"animate":').replace(/\"i\":/g,'"iteration":').replace(/\"d\":/g,'"duration":').replace(/\"l\":/g,'"loop":').replace(/\"et\":/g,'"eventtype":').replace(/\"op\":/g,'"onparent":');return f=JSON.parse(f)}
function clone(f){if(null==f||"object"!=typeof f)return f;var b=new f.constructor,g;for(g in f)b[g]=clone(f[g]);return b};});
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function ($) {
  var inviewObjects = {}, viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, expando = $.expando, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };

      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && !$.isEmptyObject(inviewObjects)) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}

      // Clear interval when we no longer have any elements listening
      if ($.isEmptyObject(inviewObjects)) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = [], elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      $elements.push(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize   = viewportSize   || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i<elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i][0])) {
          continue;
        }

        var $element      = $($elements[i]),
            elementSize   = { height: $element.height(), width: $element.width() },
            elementOffset = $element.offset(),
            inView        = $element.data('inview'),
            visiblePartX,
            visiblePartY,
            visiblePartsMerged;

        // Don't ask me why because I haven't figured out yet:
        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
        // Even though it sounds weird:
        // It seems that the execution of this function is interferred by the onresize/onscroll event
        // where viewportOffset and viewportSize are unset
        if (!viewportOffset || !viewportSize) {
          return;
        }

        if (elementOffset.top + elementSize.height > viewportOffset.top &&
            elementOffset.top < viewportOffset.top + viewportSize.height &&
            elementOffset.left + elementSize.width > viewportOffset.left &&
            elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
})(jQuery);
/*
 * Swiper 2.6.1
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: May 6, 2014
*/
var Swiper = function (selector, params) {
    'use strict';

    /*=========================
      A little bit dirty but required part for IE8 and old FF support
      ===========================*/
    if (document.body.__defineGetter__) {
        if (HTMLElement) {
            var element = HTMLElement.prototype;
            if (element.__defineGetter__) {
                element.__defineGetter__('outerHTML', function () { return new XMLSerializer().serializeToString(this); });
            }
        }
    }

    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') prop = 'styleFloat';
                if (re.test(prop)) {
                    prop = prop.replace(re, function () {
                        return arguments[2].toUpperCase();
                    });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        };
    }
    if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
    function $$(selector, context) {
        if (document.querySelectorAll)
            return (context || document).querySelectorAll(selector);
        else
            return jQuery(selector, context);
    }

    /*=========================
      Check for correct selector
      ===========================*/
    if (typeof selector === 'undefined') return;

    if (!(selector.nodeType)) {
        if ($$(selector).length === 0) return;
    }

     /*=========================
      _this
      ===========================*/
    var _this = this;

     /*=========================
      Default Flags and vars
      ===========================*/
    _this.touches = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
        abs: 0
    };
    _this.positions = {
        start: 0,
        abs: 0,
        diff: 0,
        current: 0
    };
    _this.times = {
        start: 0,
        end: 0
    };

    _this.id = (new Date()).getTime();
    _this.container = (selector.nodeType) ? selector : $$(selector)[0];
    _this.isTouched = false;
    _this.isMoved = false;
    _this.activeIndex = 0;
    _this.centerIndex = 0;
    _this.activeLoaderIndex = 0;
    _this.activeLoopIndex = 0;
    _this.previousIndex = null;
    _this.velocity = 0;
    _this.snapGrid = [];
    _this.slidesGrid = [];
    _this.imagesToLoad = [];
    _this.imagesLoaded = 0;
    _this.wrapperLeft = 0;
    _this.wrapperRight = 0;
    _this.wrapperTop = 0;
    _this.wrapperBottom = 0;
    _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
    var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;

    /*=========================
      Default Parameters
      ===========================*/
    var defaults = {
        eventTarget: 'wrapper', // or 'container'
        mode : 'horizontal', // or 'vertical'
        touchRatio : 1,
        speed : 300,
        freeMode : false,
        freeModeFluid : false,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        slidesPerView : 1,
        slidesPerGroup : 1,
        slidesPerViewFit: true, //Fit to slide when spv "auto" and slides larger than container
        simulateTouch : true,
        followFinger : true,
        shortSwipes : true,
        longSwipesRatio: 0.5,
        moveStartThreshold: false,
        onlyExternal : false,
        createPagination : true,
        pagination : false,
        paginationElement: 'span',
        paginationClickable: false,
        paginationAsRange: true,
        resistance : true, // or false or 100%
        scrollContainer : false,
        preventLinks : true,
        preventLinksPropagation: false,
        noSwiping : false, // or class
        noSwipingClass : 'swiper-no-swiping', //:)
        initialSlide: 0,
        keyboardControl: false,
        mousewheelControl : false,
        mousewheelControlForceToAxis : false,
        useCSS3Transforms : true,
        // Autoplay
        autoplay: false,
        autoplayDisableOnInteraction: true,
        autoplayStopOnLast: false,
        //Loop mode
        loop: false,
        loopAdditionalSlides: 0,
        // Round length values
        roundLengths: false,
        //Auto Height
        calculateHeight: false,
        cssWidthAndHeight: false,
        //Images Preloader
        updateOnImagesReady : true,
        //Form elements
        releaseFormElements : true,
        //Watch for active slide, useful when use effects on different slide states
        watchActiveIndex: false,
        //Slides Visibility Fit
        visibilityFullFit : false,
        //Slides Offset
        offsetPxBefore : 0,
        offsetPxAfter : 0,
        offsetSlidesBefore : 0,
        offsetSlidesAfter : 0,
        centeredSlides: false,
        //Queue callbacks
        queueStartCallbacks : false,
        queueEndCallbacks : false,
        //Auto Resize
        autoResize : true,
        resizeReInit : false,
        //DOMAnimation
        DOMAnimation : true,
        //Slides Loader
        loader: {
            slides: [], //array with slides
            slidesHTMLType: 'inner', // or 'outer'
            surroundGroups: 1, //keep preloaded slides groups around view
            logic: 'reload', //or 'change'
            loadAllSlides: false
        },
        //Namespace
        slideElement: 'div',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        wrapperClass: 'swiper-wrapper',
        paginationElementClass: 'swiper-pagination-switch',
        paginationActiveClass: 'swiper-active-switch',
        paginationVisibleClass: 'swiper-visible-switch'
    };
    params = params || {};
    for (var prop in defaults) {
        if (prop in params && typeof params[prop] === 'object') {
            for (var subProp in defaults[prop]) {
                if (! (subProp in params[prop])) {
                    params[prop][subProp] = defaults[prop][subProp];
                }
            }
        }
        else if (! (prop in params)) {
            params[prop] = defaults[prop];
        }
    }
    _this.params = params;
    if (params.scrollContainer) {
        params.freeMode = true;
        params.freeModeFluid = true;
    }
    if (params.loop) {
        params.resistance = '100%';
    }
    var isH = params.mode === 'horizontal';

    /*=========================
      Define Touch Events
      ===========================*/
    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];

    _this.touchEvents = {
        touchStart : _this.support.touch || !params.simulateTouch  ? 'touchstart' : desktopEvents[0],
        touchMove : _this.support.touch || !params.simulateTouch ? 'touchmove' : desktopEvents[1],
        touchEnd : _this.support.touch || !params.simulateTouch ? 'touchend' : desktopEvents[2]
    };

    /*=========================
      Wrapper
      ===========================*/
    for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {
        if (_this.container.childNodes[i].className) {
            var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/);
            for (var j = 0; j < _wrapperClasses.length; j++) {
                if (_wrapperClasses[j] === params.wrapperClass) {
                    wrapper = _this.container.childNodes[i];
                }
            }
        }
    }

    _this.wrapper = wrapper;
    /*=========================
      Slide API
      ===========================*/
    _this._extendSwiperSlide = function  (el) {
        el.append = function () {
            if (params.loop) {
                el.insertAfter(_this.slides.length - _this.loopedSlides);
            }
            else {
                _this.wrapper.appendChild(el);
                _this.reInit();
            }

            return el;
        };
        el.prepend = function () {
            if (params.loop) {
                _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                _this.wrapper.insertBefore(el, _this.wrapper.firstChild);
            }
            _this.reInit();
            return el;
        };
        el.insertAfter = function (index) {
            if (typeof index === 'undefined') return false;
            var beforeSlide;

            if (params.loop) {
                beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                if (beforeSlide) {
                    _this.wrapper.insertBefore(el, beforeSlide);
                }
                else {
                    _this.wrapper.appendChild(el);
                }
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                beforeSlide = _this.slides[index + 1];
                _this.wrapper.insertBefore(el, beforeSlide);
            }
            _this.reInit();
            return el;
        };
        el.clone = function () {
            return _this._extendSwiperSlide(el.cloneNode(true));
        };
        el.remove = function () {
            _this.wrapper.removeChild(el);
            _this.reInit();
        };
        el.html = function (html) {
            if (typeof html === 'undefined') {
                return el.innerHTML;
            }
            else {
                el.innerHTML = html;
                return el;
            }
        };
        el.index = function () {
            var index;
            for (var i = _this.slides.length - 1; i >= 0; i--) {
                if (el === _this.slides[i]) index = i;
            }
            return index;
        };
        el.isActive = function () {
            if (el.index() === _this.activeIndex) return true;
            else return false;
        };
        if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
        el.getData = function (name) {
            return el.swiperSlideDataStorage[name];
        };
        el.setData = function (name, value) {
            el.swiperSlideDataStorage[name] = value;
            return el;
        };
        el.data = function (name, value) {
            if (typeof value === 'undefined') {
                return el.getAttribute('data-' + name);
            }
            else {
                el.setAttribute('data-' + name, value);
                return el;
            }
        };
        el.getWidth = function (outer, round) {
            return _this.h.getWidth(el, outer, round);
        };
        el.getHeight = function (outer, round) {
            return _this.h.getHeight(el, outer, round);
        };
        el.getOffset = function () {
            return _this.h.getOffset(el);
        };
        return el;
    };

    //Calculate information about number of slides
    _this.calcSlides = function (forceCalcSlides) {
        var oldNumber = _this.slides ? _this.slides.length : false;
        _this.slides = [];
        _this.displaySlides = [];
        for (var i = 0; i < _this.wrapper.childNodes.length; i++) {
            if (_this.wrapper.childNodes[i].className) {
                var _className = _this.wrapper.childNodes[i].className;
                var _slideClasses = _className.split(/\s+/);
                for (var j = 0; j < _slideClasses.length; j++) {
                    if (_slideClasses[j] === params.slideClass) {
                        _this.slides.push(_this.wrapper.childNodes[i]);
                    }
                }
            }
        }
        for (i = _this.slides.length - 1; i >= 0; i--) {
            _this._extendSwiperSlide(_this.slides[i]);
        }
        if (oldNumber === false) return;
        if (oldNumber !== _this.slides.length || forceCalcSlides) {

            // Number of slides has been changed
            removeSlideEvents();
            addSlideEvents();
            _this.updateActiveSlide();
            if (_this.params.pagination) _this.createPagination();
            _this.callPlugins('numberOfSlidesChanged');
        }
    };

    //Create Slide
    _this.createSlide = function (html, slideClassList, el) {
        slideClassList = slideClassList || _this.params.slideClass;
        el = el || params.slideElement;
        var newSlide = document.createElement(el);
        newSlide.innerHTML = html || '';
        newSlide.className = slideClassList;
        return _this._extendSwiperSlide(newSlide);
    };

    //Append Slide
    _this.appendSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).append();
        }
        else {
            return _this.createSlide(html, slideClassList, el).append();
        }
    };
    _this.prependSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).prepend();
        }
        else {
            return _this.createSlide(html, slideClassList, el).prepend();
        }
    };
    _this.insertSlideAfter = function (index, html, slideClassList, el) {
        if (typeof index === 'undefined') return false;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).insertAfter(index);
        }
        else {
            return _this.createSlide(html, slideClassList, el).insertAfter(index);
        }
    };
    _this.removeSlide = function (index) {
        if (_this.slides[index]) {
            if (params.loop) {
                if (!_this.slides[index + _this.loopedSlides]) return false;
                _this.slides[index + _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[index].remove();
            return true;
        }
        else return false;
    };
    _this.removeLastSlide = function () {
        if (_this.slides.length > 0) {
            if (params.loop) {
                _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[_this.slides.length - 1].remove();
            return true;
        }
        else {
            return false;
        }
    };
    _this.removeAllSlides = function () {
        for (var i = _this.slides.length - 1; i >= 0; i--) {
            _this.slides[i].remove();
        }
    };
    _this.getSlide = function (index) {
        return _this.slides[index];
    };
    _this.getLastSlide = function () {
        return _this.slides[_this.slides.length - 1];
    };
    _this.getFirstSlide = function () {
        return _this.slides[0];
    };

    //Currently Active Slide
    _this.activeSlide = function () {
        return _this.slides[_this.activeIndex];
    };

    /*=========================
     Wrapper for Callbacks : Allows additive callbacks via function arrays
     ===========================*/
    _this.fireCallback = function () {
        var callback = arguments[0];
        if (Object.prototype.toString.call(callback) === '[object Array]') {
            for (var i = 0; i < callback.length; i++) {
                if (typeof callback[i] === 'function') {
                    callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        } else if (Object.prototype.toString.call(callback) === '[object String]') {
            if (params['on' + callback]) _this.fireCallback(params['on' + callback], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        } else {
            callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    };
    function isArray(obj) {
        if (Object.prototype.toString.apply(obj) === '[object Array]') return true;
        return false;
    }

    /**
     * Allows user to add callbacks, rather than replace them
     * @param callback
     * @param func
     * @return {*}
     */
    _this.addCallback = function (callback, func) {
        var _this = this, tempFunc;
        if (_this.params['on' + callback]) {
            if (isArray(this.params['on' + callback])) {
                return this.params['on' + callback].push(func);
            } else if (typeof this.params['on' + callback] === 'function') {
                tempFunc = this.params['on' + callback];
                this.params['on' + callback] = [];
                this.params['on' + callback].push(tempFunc);
                return this.params['on' + callback].push(func);
            }
        } else {
            this.params['on' + callback] = [];
            return this.params['on' + callback].push(func);
        }
    };
    _this.removeCallbacks = function (callback) {
        if (_this.params['on' + callback]) {
            _this.params['on' + callback] = null;
        }
    };

    /*=========================
      Plugins API
      ===========================*/
    var _plugins = [];
    for (var plugin in _this.plugins) {
        if (params[plugin]) {
            var p = _this.plugins[plugin](_this, params[plugin]);
            if (p) _plugins.push(p);
        }
    }
    _this.callPlugins = function (method, args) {
        if (!args) args = {};
        for (var i = 0; i < _plugins.length; i++) {
            if (method in _plugins[i]) {
                _plugins[i][method](args);
            }
        }
    };

    /*=========================
      Windows Phone 8 Fix
      ===========================*/
    if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {
        _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical'));
    }

    /*=========================
      Free Mode Class
      ===========================*/
    if (params.freeMode) {
        _this.container.className += ' swiper-free-mode';
    }

    /*==================================================
        Init/Re-init/Resize Fix
    ====================================================*/
    _this.initialized = false;
    _this.init = function (force, forceCalcSlides) {
        var _width = _this.h.getWidth(_this.container, false, params.roundLengths);
        var _height = _this.h.getHeight(_this.container, false, params.roundLengths);
        if (_width === _this.width && _height === _this.height && !force) return;
        
        _this.width = _width;
        _this.height = _height;

        var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft;
        var i; // loop index variable to avoid JSHint W004 / W038
        containerSize = isH ? _width : _height;
        var wrapper = _this.wrapper;

        if (force) {
            _this.calcSlides(forceCalcSlides);
        }

        if (params.slidesPerView === 'auto') {
            //Auto mode
            var slidesWidth = 0;
            var slidesHeight = 0;

            //Unset Styles
            if (params.slidesOffset > 0) {
                wrapper.style.paddingLeft = '';
                wrapper.style.paddingRight = '';
                wrapper.style.paddingTop = '';
                wrapper.style.paddingBottom = '';
            }
            wrapper.style.width = '';
            wrapper.style.height = '';
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }

            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true, params.roundLengths)) / 2;
                    _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true, params.roundLengths)) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true, params.roundLengths)) / 2;
                    _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true, params.roundLengths)) / 2;
                }
            }

            if (isH) {
                if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            slideLeft = 0;
            var centeredSlideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];

            slideMaxHeight = 0;
            for (i = 0; i < _this.slides.length; i++) {
                slideWidth = _this.slides[i].getWidth(true, params.roundLengths);
                slideHeight = _this.slides[i].getHeight(true, params.roundLengths);
                if (params.calculateHeight) {
                    slideMaxHeight = Math.max(slideMaxHeight, slideHeight);
                }
                var _slideSize = isH ? slideWidth : slideHeight;
                if (params.centeredSlides) {
                    var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true, params.roundLengths);
                    var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true, params.roundLengths);
                    var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight;
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft);
                        }
                        else {
                            for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                            }
                        }
                        _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                    }
                    else {
                        _this.snapGrid.push(centeredSlideLeft);
                        _this.slidesGrid.push(centeredSlideLeft);
                    }
                    centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                }
                else {
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize);
                        }
                        else {
                            if (containerSize !== 0) {
                                for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {
                                    _this.snapGrid.push(slideLeft + containerSize * k);
                                }
                            }
                            else {
                                _this.snapGrid.push(slideLeft);
                            }
                        }
                            
                    }
                    else {
                        _this.snapGrid.push(slideLeft);
                    }
                    _this.slidesGrid.push(slideLeft);
                }

                slideLeft += _slideSize;

                slidesWidth += slideWidth;
                slidesHeight += slideHeight;
            }
            if (params.calculateHeight) _this.height = slideMaxHeight;
            if (isH) {
                wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                wrapper.style.width = (slidesWidth) + 'px';
                wrapper.style.height = (_this.height) + 'px';
            }
            else {
                wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                wrapper.style.width = (_this.width) + 'px';
                wrapper.style.height = (slidesHeight) + 'px';
            }

        }
        else if (params.scrollContainer) {
            //Scroll Container
            wrapper.style.width = '';
            wrapper.style.height = '';
            wrapperWidth = _this.slides[0].getWidth(true, params.roundLengths);
            wrapperHeight = _this.slides[0].getHeight(true, params.roundLengths);
            wrapperSize = isH ? wrapperWidth : wrapperHeight;
            wrapper.style.width = wrapperWidth + 'px';
            wrapper.style.height = wrapperHeight + 'px';
            slideSize = isH ? wrapperWidth : wrapperHeight;

        }
        else {
            //For usual slides
            if (params.calculateHeight) {
                slideMaxHeight = 0;
                wrapperHeight = 0;
                //ResetWrapperSize
                if (!isH) _this.container.style.height = '';
                wrapper.style.height = '';

                for (i = 0; i < _this.slides.length; i++) {
                    //ResetSlideSize
                    _this.slides[i].style.height = '';
                    slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                    if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                }
                slideHeight = slideMaxHeight;
                _this.height = slideHeight;

                if (isH) wrapperHeight = slideHeight;
                else {
                    containerSize = slideHeight;
                    _this.container.style.height = containerSize + 'px';
                }
            }
            else {
                slideHeight = isH ? _this.height : _this.height / params.slidesPerView;
                if (params.roundLengths) slideHeight = Math.round(slideHeight);
                wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight;
            }
            slideWidth = isH ? _this.width / params.slidesPerView : _this.width;
            if (params.roundLengths) slideWidth = Math.round(slideWidth);
            wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width;
            slideSize = isH ? slideWidth : slideHeight;

            if (params.offsetSlidesBefore > 0) {
                if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
            }
            if (params.offsetSlidesAfter > 0) {
                if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
            }
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }
            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - slideSize) / 2;
                    _this.wrapperRight = (containerSize - slideSize) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - slideSize) / 2;
                    _this.wrapperBottom = (containerSize - slideSize) / 2;
                }
            }
            if (isH) {
                if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }

            wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
            if (!params.cssWidthAndHeight) {
                if (parseFloat(wrapperWidth) > 0) {
                    wrapper.style.width = wrapperWidth + 'px';
                }
                if (parseFloat(wrapperHeight) > 0) {
                    wrapper.style.height = wrapperHeight + 'px';
                }
            }
            slideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];
            for (i = 0; i < _this.slides.length; i++) {
                _this.snapGrid.push(slideLeft);
                _this.slidesGrid.push(slideLeft);
                slideLeft += slideSize;
                if (!params.cssWidthAndHeight) {
                    if (parseFloat(slideWidth) > 0) {
                        _this.slides[i].style.width = slideWidth + 'px';
                    }
                    if (parseFloat(slideHeight) > 0) {
                        _this.slides[i].style.height = slideHeight + 'px';
                    }
                }
            }

        }

        if (!_this.initialized) {
            _this.callPlugins('onFirstInit');
            if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this);
        }
        else {
            _this.callPlugins('onInit');
            if (params.onInit) _this.fireCallback(params.onInit, _this);
        }
        _this.initialized = true;
    };

    _this.reInit = function (forceCalcSlides) {
        _this.init(true, forceCalcSlides);
    };

    _this.resizeFix = function (reInit) {
        _this.callPlugins('beforeResizeFix');

        _this.init(params.resizeReInit || reInit);

        // swipe to active slide in fixed mode
        if (!params.freeMode) {
            _this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false);
            // Fix autoplay
            if (params.autoplay) {
                if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {
                    if (typeof autoplayTimeoutId !== 'undefined') {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                        _this.startAutoplay();
                    }
                }
                else {
                    if (typeof autoplayIntervalId !== 'undefined') {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                        _this.startAutoplay();
                    }
                }
            }
        }
        // move wrapper to the beginning in free mode
        else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(-maxWrapperPosition());
        }

        _this.callPlugins('afterResizeFix');
    };

    /*==========================================
        Max and Min Positions
    ============================================*/
    function maxWrapperPosition() {
        var a = (wrapperSize - containerSize);
        if (params.freeMode) {
            a = wrapperSize - containerSize;
        }
        // if (params.loop) a -= containerSize;
        if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {
            a = 0;
        }
        if (a < 0) a = 0;
        return a;
    }

    /*==========================================
        Event Listeners
    ============================================*/
    function initEvents() {
        var bind = _this.h.addEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                bind(eventTarget, 'touchstart', onTouchStart);
                bind(eventTarget, 'touchmove', onTouchMove);
                bind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                bind(eventTarget, 'mousedown', onTouchStart);
                bind(document, 'mousemove', onTouchMove);
                bind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            bind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            bind(document, _this.touchEvents.touchMove, onTouchMove);
            bind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            bind(window, 'resize', _this.resizeFix);
        }
        //Slide Events
        addSlideEvents();
        //Mousewheel
        _this._wheelEvent = false;
        if (params.mousewheelControl) {
            if (document.onmousewheel !== undefined) {
                _this._wheelEvent = 'mousewheel';
            }
            if (!_this._wheelEvent) {
                try {
                    new WheelEvent('wheel');
                    _this._wheelEvent = 'wheel';
                } catch (e) {}
            }
            if (!_this._wheelEvent) {
                _this._wheelEvent = 'DOMMouseScroll';
            }
            if (_this._wheelEvent) {
                bind(_this.container, _this._wheelEvent, handleMousewheel);
            }
        }

        //Keyboard
        function _loadImage(src) {
            var image = new Image();
            image.onload = function () {
                if (_this && _this.imagesLoaded !== undefined) _this.imagesLoaded++;
                if (_this.imagesLoaded === _this.imagesToLoad.length) {
                    _this.reInit();
                    if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
                }
            };
            image.src = src;
        }

        if (params.keyboardControl) {
            bind(document, 'keydown', handleKeyboardKeys);
        }
        if (params.updateOnImagesReady) {
            _this.imagesToLoad = $$('img', _this.container);

            for (var i = 0; i < _this.imagesToLoad.length; i++) {
                _loadImage(_this.imagesToLoad[i].getAttribute('src'));
            }
        }
    }

    //Remove Event Listeners
    _this.destroy = function () {
        var unbind = _this.h.removeEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                unbind(eventTarget, 'touchstart', onTouchStart);
                unbind(eventTarget, 'touchmove', onTouchMove);
                unbind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                unbind(eventTarget, 'mousedown', onTouchStart);
                unbind(document, 'mousemove', onTouchMove);
                unbind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            unbind(document, _this.touchEvents.touchMove, onTouchMove);
            unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            unbind(window, 'resize', _this.resizeFix);
        }

        //Init Slide Events
        removeSlideEvents();

        //Pagination
        if (params.paginationClickable) {
            removePaginationEvents();
        }

        //Mousewheel
        if (params.mousewheelControl && _this._wheelEvent) {
            unbind(_this.container, _this._wheelEvent, handleMousewheel);
        }

        //Keyboard
        if (params.keyboardControl) {
            unbind(document, 'keydown', handleKeyboardKeys);
        }

        //Stop autoplay
        if (params.autoplay) {
            _this.stopAutoplay();
        }
        _this.callPlugins('onDestroy');

        //Destroy variable
        _this = null;
    };

    function addSlideEvents() {
        var bind = _this.h.addEventListener,
            i;

        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                bind(links[i], 'click', preventClick);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
    }
    function removeSlideEvents() {
        var unbind = _this.h.removeEventListener,
            i;

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }
        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                unbind(links[i], 'click', preventClick);
            }
        }
    }
    /*==========================================
        Keyboard Control
    ============================================*/
    function handleKeyboardKeys(e) {
        var kc = e.keyCode || e.charCode;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
            var inView = false;
            //Check that swiper should be inside of visible area of window
            var swiperOffset = _this.h.getOffset(_this.container);
            var scrollLeft = _this.h.windowScroll().left;
            var scrollTop = _this.h.windowScroll().top;
            var windowWidth = _this.h.windowWidth();
            var windowHeight = _this.h.windowHeight();
            var swiperCoord = [
                [swiperOffset.left, swiperOffset.top],
                [swiperOffset.left + _this.width, swiperOffset.top],
                [swiperOffset.left, swiperOffset.top + _this.height],
                [swiperOffset.left + _this.width, swiperOffset.top + _this.height]
            ];
            for (var i = 0; i < swiperCoord.length; i++) {
                var point = swiperCoord[i];
                if (
                    point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth &&
                    point[1] >= scrollTop && point[1] <= scrollTop + windowHeight
                ) {
                    inView = true;
                }

            }
            if (!inView) return;
        }
        if (isH) {
            if (kc === 37 || kc === 39) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 39) _this.swipeNext();
            if (kc === 37) _this.swipePrev();
        }
        else {
            if (kc === 38 || kc === 40) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 40) _this.swipeNext();
            if (kc === 38) _this.swipePrev();
        }
    }

    _this.disableKeyboardControl = function () {
        params.keyboardControl = false;
        _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys);
    };

    _this.enableKeyboardControl = function () {
        params.keyboardControl = true;
        _this.h.addEventListener(document, 'keydown', handleKeyboardKeys);
    };

    /*==========================================
        Mousewheel Control
    ============================================*/
    var lastScrollTime = (new Date()).getTime();
    function handleMousewheel(e) {
        var we = _this._wheelEvent;
        var delta = 0;

        //Opera & IE
        if (e.detail) delta = -e.detail;
        //WebKits
        else if (we === 'mousewheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                    else return;
                }
            }
            else {
                delta = e.wheelDelta;
            }
        }
        //Old FireFox
        else if (we === 'DOMMouseScroll') delta = -e.detail;
        //New FireFox
        else if (we === 'wheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                    else return;
                }
            }
            else {
                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
            }
        }

        if (!params.freeMode) {
            if ((new Date()).getTime() - lastScrollTime > 60) {
                if (delta < 0) _this.swipeNext();
                else _this.swipePrev();
            }
            lastScrollTime = (new Date()).getTime();

        }
        else {
            //Freemode or scrollContainer:
            var position = _this.getWrapperTranslate() + delta;

            if (position > 0) position = 0;
            if (position < -maxWrapperPosition()) position = -maxWrapperPosition();

            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(position);
            _this.updateActiveSlide(position);

            // Return page scroll on edge positions
            if (position === 0 || position === -maxWrapperPosition()) return;
        }
        if (params.autoplay) _this.stopAutoplay(true);

        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    _this.disableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = false;
        _this.h.removeEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

    _this.enableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = true;
        _this.h.addEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

    /*=========================
      Grab Cursor
      ===========================*/
    if (params.grabCursor) {
        var containerStyle = _this.container.style;
        containerStyle.cursor = 'move';
        containerStyle.cursor = 'grab';
        containerStyle.cursor = '-moz-grab';
        containerStyle.cursor = '-webkit-grab';
    }

    /*=========================
      Slides Events Handlers
      ===========================*/

    _this.allowSlideClick = true;
    function slideClick(event) {
        if (_this.allowSlideClick) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideClick, _this, event);
        }
    }

    function slideTouch(event) {
        setClickedSlide(event);
        _this.fireCallback(params.onSlideTouch, _this, event);
    }

    function setClickedSlide(event) {

        // IE 6-8 support
        if (!event.currentTarget) {
            var element = event.srcElement;
            do {
                if (element.className.indexOf(params.slideClass) > -1) {
                    break;
                }
                element = element.parentNode;
            } while (element);
            _this.clickedSlide = element;
        }
        else {
            _this.clickedSlide = event.currentTarget;
        }

        _this.clickedSlideIndex     = _this.slides.indexOf(_this.clickedSlide);
        _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
    }

    _this.allowLinks = true;
    function preventClick(e) {
        if (!_this.allowLinks) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (params.preventLinksPropagation && 'stopPropagation' in e) {
                e.stopPropagation();
            }
            return false;
        }
    }
    function releaseForms(e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.returnValue = false;
        return false;

    }

    /*==================================================
        Event Handlers
    ====================================================*/
    var isTouchEvent = false;
    var allowThresholdMove;
    var allowMomentumBounce = true;
    function onTouchStart(event) {
        if (params.preventLinks) _this.allowLinks = true;
        //Exit if slider is already was touched
        if (_this.isTouched || params.onlyExternal) {
            return false;
        }

        if (params.noSwiping && (event.target || event.srcElement) && noSwipingSlide(event.target || event.srcElement)) return false;
        allowMomentumBounce = false;
        //Check For Nested Swipers
        _this.isTouched = true;
        isTouchEvent = event.type === 'touchstart';

        if (!isTouchEvent || event.targetTouches.length === 1) {
            _this.callPlugins('onTouchStartBegin');

            if (!isTouchEvent && !_this.isAndroid) {
                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;
            }

            var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            //Start Touches to check the scrolling
            _this.touches.startX = _this.touches.currentX = pageX;
            _this.touches.startY = _this.touches.currentY = pageY;

            _this.touches.start = _this.touches.current = isH ? pageX : pageY;

            //Set Transition Time to 0
            _this.setWrapperTransition(0);

            //Get Start Translate Position
            _this.positions.start = _this.positions.current = _this.getWrapperTranslate();

            //Set Transform
            _this.setWrapperTranslate(_this.positions.start);

            //TouchStartTime
            _this.times.start = (new Date()).getTime();

            //Unset Scrolling
            isScrolling = undefined;

            //Set Treshold
            if (params.moveStartThreshold > 0) {
                allowThresholdMove = false;
            }

            //CallBack
            if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this, event);
            _this.callPlugins('onTouchStartEnd');

        }
    }
    var velocityPrevPosition, velocityPrevTime;
    function onTouchMove(event) {
        // If slider is not touched - exit
        if (!_this.isTouched || params.onlyExternal) return;
        if (isTouchEvent && event.type === 'mousemove') return;

        var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
        var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

        //check for scrolling
        if (typeof isScrolling === 'undefined' && isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX));
        }
        if (typeof isScrolling === 'undefined' && !isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX));
        }
        if (isScrolling) {
            _this.isTouched = false;
            return;
        }

        //Check For Nested Swipers
        if (event.assignedToSwiper) {
            _this.isTouched = false;
            return;
        }
        event.assignedToSwiper = true;

        //Block inner links
        if (params.preventLinks) {
            _this.allowLinks = false;
        }
        if (params.onSlideClick) {
            _this.allowSlideClick = false;
        }

        //Stop AutoPlay if exist
        if (params.autoplay) {
            _this.stopAutoplay(true);
        }
        if (!isTouchEvent || event.touches.length === 1) {

            //Moved Flag
            if (!_this.isMoved) {
                _this.callPlugins('onTouchMoveStart');

                if (params.loop) {
                    _this.fixLoop();
                    _this.positions.start = _this.getWrapperTranslate();
                }
                if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
            }
            _this.isMoved = true;

            // cancel event
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;

            _this.touches.current = isH ? pageX : pageY;

            _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;

            //Resistance Callbacks
            if (_this.positions.current > 0 && params.onResistanceBefore) {
                _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
            }
            if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {
                _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
            }
            //Resistance
            if (params.resistance && params.resistance !== '100%') {
                var resistance;
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0) {
                    resistance = 1 - _this.positions.current / containerSize / 2;
                    if (resistance < 0.5)
                        _this.positions.current = (containerSize / 2);
                    else
                        _this.positions.current = _this.positions.current * resistance;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition()) {

                    var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                    resistance = (containerSize + diff) / (containerSize);
                    var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                    var stopPos = -maxWrapperPosition() - containerSize / 2;

                    if (newPos < stopPos || resistance <= 0)
                        _this.positions.current = stopPos;
                    else
                        _this.positions.current = newPos;
                }
            }
            if (params.resistance && params.resistance === '100%') {
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = 0;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = -maxWrapperPosition();
                }
            }
            //Move Slides
            if (!params.followFinger) return;

            if (!params.moveStartThreshold) {
                _this.setWrapperTranslate(_this.positions.current);
            }
            else {
                if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        _this.touches.start = _this.touches.current;
                        return;
                    }
                    _this.setWrapperTranslate(_this.positions.current);
                }
                else {
                    _this.positions.current = _this.positions.start;
                }
            }

            if (params.freeMode || params.watchActiveIndex) {
                _this.updateActiveSlide(_this.positions.current);
            }

            //Grab Cursor
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grabbing';
                _this.container.style.cursor = '-moz-grabbin';
                _this.container.style.cursor = '-webkit-grabbing';
            }
            //Velocity
            if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
            if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime();
            _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2;
            if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
            velocityPrevPosition = _this.touches.current;
            velocityPrevTime = (new Date()).getTime();
            //Callbacks
            _this.callPlugins('onTouchMoveEnd');
            if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this, event);

            return false;
        }
    }
    function onTouchEnd(event) {
        //Check For scrolling
        if (isScrolling) {
            _this.swipeReset();
        }
        // If slider is not touched exit
        if (params.onlyExternal || !_this.isTouched) return;
        _this.isTouched = false;

        //Return Grab Cursor
        if (params.grabCursor) {
            _this.container.style.cursor = 'move';
            _this.container.style.cursor = 'grab';
            _this.container.style.cursor = '-moz-grab';
            _this.container.style.cursor = '-webkit-grab';
        }

        //Check for Current Position
        if (!_this.positions.current && _this.positions.current !== 0) {
            _this.positions.current = _this.positions.start;
        }

        //For case if slider touched but not moved
        if (params.followFinger) {
            _this.setWrapperTranslate(_this.positions.current);
        }

        // TouchEndTime
        _this.times.end = (new Date()).getTime();

        //Difference
        _this.touches.diff = _this.touches.current - _this.touches.start;
        _this.touches.abs = Math.abs(_this.touches.diff);

        _this.positions.diff = _this.positions.current - _this.positions.start;
        _this.positions.abs = Math.abs(_this.positions.diff);

        var diff = _this.positions.diff;
        var diffAbs = _this.positions.abs;
        var timeDiff = _this.times.end - _this.times.start;

        if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {
            if (!params.freeMode && diffAbs !== 0) _this.swipeReset();
            //Release inner links
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }

        setTimeout(function () {
            //Release inner links
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }, 100);

        var maxPosition = maxWrapperPosition();

        //Not moved or Prevent Negative Back Sliding/After-End Sliding
        if (!_this.isMoved && params.freeMode) {
            _this.isMoved = false;
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }
        if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
            _this.swipeReset();
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }

        _this.isMoved = false;

        //Free Mode
        if (params.freeMode) {
            if (params.freeModeFluid) {
                var momentumDuration = 1000 * params.momentumRatio;
                var momentumDistance = _this.velocity * momentumDuration;
                var newPosition = _this.positions.current + momentumDistance;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                if (newPosition < -maxPosition) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                        afterBouncePosition = -maxPosition;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = -maxPosition;
                }
                if (newPosition > 0) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition > bounceAmount) newPosition = bounceAmount;
                        afterBouncePosition = 0;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = 0;
                }
                //Fix duration
                if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity);

                _this.setWrapperTranslate(newPosition);

                _this.setWrapperTransition(momentumDuration);

                if (params.momentumBounce && doBounce) {
                    _this.wrapperTransitionEnd(function () {
                        if (!allowMomentumBounce) return;
                        if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this);
                        _this.callPlugins('onMomentumBounce');

                        _this.setWrapperTranslate(afterBouncePosition);
                        _this.setWrapperTransition(300);
                    });
                }

                _this.updateActiveSlide(newPosition);
            }
            if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current);

            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }

        //Direction
        direction = diff < 0 ? 'toNext' : 'toPrev';

        //Short Touches
        if (direction === 'toNext' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipeNext(true);
        }

        if (direction === 'toPrev' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipePrev(true);
        }

        //Long Touches
        var targetSlideSize = 0;
        if (params.slidesPerView === 'auto') {
            //Define current slide's width
            var currentPosition = Math.abs(_this.getWrapperTranslate());
            var slidesOffset = 0;
            var _slideSize;
            for (var i = 0; i < _this.slides.length; i++) {
                _slideSize = isH ? _this.slides[i].getWidth(true, params.roundLengths) : _this.slides[i].getHeight(true, params.roundLengths);
                slidesOffset += _slideSize;
                if (slidesOffset > currentPosition) {
                    targetSlideSize = _slideSize;
                    break;
                }
            }
            if (targetSlideSize > containerSize) targetSlideSize = containerSize;
        }
        else {
            targetSlideSize = slideSize * params.slidesPerView;
        }
        if (direction === 'toNext' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipeNext(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (direction === 'toPrev' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipePrev(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
        _this.callPlugins('onTouchEnd');
    }


    /*==================================================
        noSwiping Bubble Check by Isaac Strack
    ====================================================*/
    function noSwipingSlide(el) {
        /*This function is specifically designed to check the parent elements for the noSwiping class, up to the wrapper.
        We need to check parents because while onTouchStart bubbles, _this.isTouched is checked in onTouchStart, which stops the bubbling.
        So, if a text box, for example, is the initial target, and the parent slide container has the noSwiping class, the _this.isTouched
        check will never find it, and what was supposed to be noSwiping is able to be swiped.
        This function will iterate up and check for the noSwiping class in parents, up through the wrapperClass.*/

        // First we create a truthy variable, which is that swiping is allowd (noSwiping = false)
        var noSwiping = false;

        // Now we iterate up (parentElements) until we reach the node with the wrapperClass.
        do {

            // Each time, we check to see if there's a 'swiper-no-swiping' class (noSwipingClass).
            if (el.className.indexOf(params.noSwipingClass) > -1)
            {
                noSwiping = true; // If there is, we set noSwiping = true;
            }

            el = el.parentElement;  // now we iterate up (parent node)

        } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) === -1); // also include el.parentElement truthy, just in case.

        // because we didn't check the wrapper itself, we do so now, if noSwiping is false:
        if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1)
            noSwiping = true; // if the wrapper has the noSwipingClass, we set noSwiping = true;

        return noSwiping;
    }

    function addClassToHtmlString(klass, outerHtml) {
        var par = document.createElement('div');
        var child;

        par.innerHTML = outerHtml;
        child = par.firstChild;
        child.className += ' ' + klass;

        return child.outerHTML;
    }


    /*==================================================
        Swipe Functions
    ====================================================*/
    _this.swipeNext = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipeNext');
        var currentPosition = _this.getWrapperTranslate();
        var newPosition = currentPosition;
        if (params.slidesPerView === 'auto') {
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i + 1];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'next');
        return true;
    };
    _this.swipePrev = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipePrev');

        var currentPosition = Math.ceil(_this.getWrapperTranslate());
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 1; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) {
                    newPosition = -_this.snapGrid[i - 1];
                    break;
                }
                if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize;
        }

        if (newPosition > 0) newPosition = 0;

        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'prev');
        return true;

    };
    _this.swipeReset = function () {
        _this.callPlugins('onSwipeReset');
        var currentPosition = _this.getWrapperTranslate();
        var groupSize = slideSize * params.slidesPerGroup;
        var newPosition;
        var maxPosition = -maxWrapperPosition();
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) return;
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1];
                    else newPosition = -_this.snapGrid[i];
                    break;
                }
            }
            if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
            if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
        }
        else {
            newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0;
        }
        if (params.scrollContainer)  {
            newPosition = currentPosition < 0 ? currentPosition : 0;
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (params.scrollContainer && (containerSize > slideSize)) {
            newPosition = 0;
        }

        if (newPosition === currentPosition) return false;

        swipeToPosition(newPosition, 'reset');
        return true;
    };

    _this.swipeTo = function (index, speed, runCallbacks) {
        index = parseInt(index, 10);
        _this.callPlugins('onSwipeTo', {index: index, speed: speed});
        if (params.loop) index = index + _this.loopedSlides;
        var currentPosition = _this.getWrapperTranslate();
        if (index > (_this.slides.length - 1) || index < 0) return;
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = -_this.slidesGrid[index];
        }
        else {
            newPosition = -index * slideSize;
        }
        if (newPosition < - maxWrapperPosition()) {
            newPosition = - maxWrapperPosition();
        }

        if (newPosition === currentPosition) return false;

        runCallbacks = runCallbacks === false ? false : true;
        swipeToPosition(newPosition, 'to', {index: index, speed: speed, runCallbacks: runCallbacks});
        return true;
    };

    function swipeToPosition(newPosition, action, toOptions) {
        var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed;
        var timeOld = + new Date();

        function anim() {
            var timeNew = + new Date();
            var time = timeNew - timeOld;
            currentPosition += animationStep * time / (1000 / 60);
            condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (condition) {
                _this.setWrapperTranslate(Math.round(currentPosition));
                _this._DOMAnimating = true;
                window.setTimeout(function () {
                    anim();
                }, 1000 / 60);
            }
            else {
                if (params.onSlideChangeEnd) {
                    if (action === 'to') {
                        if (toOptions.runCallbacks === true) _this.fireCallback(params.onSlideChangeEnd, _this);
                    }
                    else {
                        _this.fireCallback(params.onSlideChangeEnd, _this);
                    }
                    
                }
                _this.setWrapperTranslate(newPosition);
                _this._DOMAnimating = false;
            }
        }

        if (_this.support.transitions || !params.DOMAnimation) {
            _this.setWrapperTranslate(newPosition);
            _this.setWrapperTransition(speed);
        }
        else {
            //Try the DOM animation
            var currentPosition = _this.getWrapperTranslate();
            var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
            var direction = currentPosition > newPosition ? 'toNext' : 'toPrev';
            var condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (_this._DOMAnimating) return;

            anim();
        }

        //Update Active Slide Index
        _this.updateActiveSlide(newPosition);

        //Callbacks
        if (params.onSlideNext && action === 'next') {
            _this.fireCallback(params.onSlideNext, _this, newPosition);
        }
        if (params.onSlidePrev && action === 'prev') {
            _this.fireCallback(params.onSlidePrev, _this, newPosition);
        }
        //'Reset' Callback
        if (params.onSlideReset && action === 'reset') {
            _this.fireCallback(params.onSlideReset, _this, newPosition);
        }

        //'Next', 'Prev' and 'To' Callbacks
        if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true))
            slideChangeCallbacks(action);
    }
    /*==================================================
        Transition Callbacks
    ====================================================*/
    //Prevent Multiple Callbacks
    _this._queueStartCallbacks = false;
    _this._queueEndCallbacks = false;
    function slideChangeCallbacks(direction) {
        //Transition Start Callback
        _this.callPlugins('onSlideChangeStart');
        if (params.onSlideChangeStart) {
            if (params.queueStartCallbacks && _this.support.transitions) {
                if (_this._queueStartCallbacks) return;
                _this._queueStartCallbacks = true;
                _this.fireCallback(params.onSlideChangeStart, _this, direction);
                _this.wrapperTransitionEnd(function () {
                    _this._queueStartCallbacks = false;
                });
            }
            else _this.fireCallback(params.onSlideChangeStart, _this, direction);
        }
        //Transition End Callback
        if (params.onSlideChangeEnd) {
            if (_this.support.transitions) {
                if (params.queueEndCallbacks) {
                    if (_this._queueEndCallbacks) return;
                    _this._queueEndCallbacks = true;
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
                else {
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
            }
            else {
                if (!params.DOMAnimation) {
                    setTimeout(function () {
                        _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                    }, 10);
                }
            }
        }
    }

    /*==================================================
        Update Active Slide Index
    ====================================================*/
    _this.updateActiveSlide = function (position) {
        if (!_this.initialized) return;
        if (_this.slides.length === 0) return;
        _this.previousIndex = _this.activeIndex;
        if (typeof position === 'undefined') position = _this.getWrapperTranslate();
        if (position > 0) position = 0;
        var i;
        if (params.slidesPerView === 'auto') {
            var slidesOffset = 0;
            _this.activeIndex = _this.slidesGrid.indexOf(-position);
            if (_this.activeIndex < 0) {
                for (i = 0; i < _this.slidesGrid.length - 1; i++) {
                    if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {
                        break;
                    }
                }
                var leftDistance = Math.abs(_this.slidesGrid[i] + position);
                var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position);
                if (leftDistance <= rightDistance) _this.activeIndex = i;
                else _this.activeIndex = i + 1;
            }
        }
        else {
            _this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize);
        }

        if (_this.activeIndex === _this.slides.length) _this.activeIndex = _this.slides.length - 1;
        if (_this.activeIndex < 0) _this.activeIndex = 0;

        // Check for slide
        if (!_this.slides[_this.activeIndex]) return;

        // Calc Visible slides
        _this.calcVisibleSlides(position);

        // Mark visible and active slides with additonal classes
        if (_this.support.classList) {
            var slide;
            for (i = 0; i < _this.slides.length; i++) {
                slide = _this.slides[i];
                slide.classList.remove(params.slideActiveClass);
                if (_this.visibleSlides.indexOf(slide) >= 0) {
                    slide.classList.add(params.slideVisibleClass);
                } else {
                    slide.classList.remove(params.slideVisibleClass);
                }
            }
            _this.slides[_this.activeIndex].classList.add(params.slideActiveClass);
        } else {
            var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass);
            var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass);

            for (i = 0; i < _this.slides.length; i++) {
                _this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
                if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) {
                    _this.slides[i].className += ' ' + params.slideVisibleClass;
                }
            }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;
        }

        //Update loop index
        if (params.loop) {
            var ls = _this.loopedSlides;
            _this.activeLoopIndex = _this.activeIndex - ls;
            if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0;
        }
        else {
            _this.activeLoopIndex = _this.activeIndex;
        }
        //Update Pagination
        if (params.pagination) {
            _this.updatePagination(position);
        }
    };
    /*==================================================
        Pagination
    ====================================================*/
    _this.createPagination = function (firstInit) {
        if (params.paginationClickable && _this.paginationButtons) {
            removePaginationEvents();
        }
        _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0];
        if (params.createPagination) {
            var paginationHTML = '';
            var numOfSlides = _this.slides.length;
            var numOfButtons = numOfSlides;
            if (params.loop) numOfButtons -= _this.loopedSlides * 2;
            for (var i = 0; i < numOfButtons; i++) {
                paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>';
            }
            _this.paginationContainer.innerHTML = paginationHTML;
        }
        _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
        if (!firstInit) _this.updatePagination();
        _this.callPlugins('onCreatePagination');
        if (params.paginationClickable) {
            addPaginationEvents();
        }
    };
    function removePaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.removeEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function addPaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.addEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function paginationClick(e) {
        var index;
        var target = e.target || e.srcElement;
        var pagers = _this.paginationButtons;
        for (var i = 0; i < pagers.length; i++) {
            if (target === pagers[i]) index = i;
        }
        _this.swipeTo(index);
    }
    _this.updatePagination = function (position) {
        if (!params.pagination) return;
        if (_this.slides.length < 1) return;
        var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
        if (!activePagers) return;

        //Reset all Buttons' class to not active
        var pagers = _this.paginationButtons;
        if (pagers.length === 0) return;
        for (var i = 0; i < pagers.length; i++) {
            pagers[i].className = params.paginationElementClass;
        }

        var indexOffset = params.loop ? _this.loopedSlides : 0;
        if (params.paginationAsRange) {
            if (!_this.visibleSlides) _this.calcVisibleSlides(position);
            //Get Visible Indexes
            var visibleIndexes = [];
            var j; // lopp index - avoid JSHint W004 / W038
            for (j = 0; j < _this.visibleSlides.length; j++) {
                var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset;

                if (params.loop && visIndex < 0) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex;
                }
                if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                    visIndex = Math.abs(visIndex);
                }
                visibleIndexes.push(visIndex);
            }

            for (j = 0; j < visibleIndexes.length; j++) {
                if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass;
            }

            if (params.loop) {
                if (pagers[_this.activeLoopIndex] !== undefined) {
                    pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass;
                }
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass;
            }
        }
        else {
            if (params.loop) {
                if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
        }
    };
    _this.calcVisibleSlides = function (position) {
        var visibleSlides = [];
        var _slideLeft = 0, _slideSize = 0, _slideRight = 0;
        if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
        if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;

        for (var i = 0; i < _this.slides.length; i++) {
            _slideLeft += _slideSize;
            if (params.slidesPerView === 'auto')
                _slideSize  = isH ? _this.h.getWidth(_this.slides[i], true, params.roundLengths) : _this.h.getHeight(_this.slides[i], true, params.roundLengths);
            else _slideSize = slideSize;

            _slideRight = _slideLeft + _slideSize;
            var isVisibile = false;
            if (params.visibilityFullFit) {
                if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true;
                if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true;
            }
            else {
                if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true;
                if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true;
                if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true;
            }

            if (isVisibile) visibleSlides.push(_this.slides[i]);

        }
        if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]];

        _this.visibleSlides = visibleSlides;
    };

    /*==========================================
        Autoplay
    ============================================*/
    var autoplayTimeoutId, autoplayIntervalId;
    _this.startAutoplay = function () {
        if (_this.support.transitions) {
            if (typeof autoplayTimeoutId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplay();
        }
        else {
            if (typeof autoplayIntervalId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplayIntervalId = setInterval(function () {
                if (params.loop) {
                    _this.fixLoop();
                    _this.swipeNext(true);
                }
                else if (!_this.swipeNext(true)) {
                    if (!params.autoplayStopOnLast) _this.swipeTo(0);
                    else {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                    }
                }
            }, params.autoplay);
        }
    };
    _this.stopAutoplay = function (internal) {
        if (_this.support.transitions) {
            if (!autoplayTimeoutId) return;
            if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId);
            autoplayTimeoutId = undefined;
            if (internal && !params.autoplayDisableOnInteraction) {
                _this.wrapperTransitionEnd(function () {
                    autoplay();
                });
            }
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
        else {
            if (autoplayIntervalId) clearInterval(autoplayIntervalId);
            autoplayIntervalId = undefined;
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
    };
    function autoplay() {
        autoplayTimeoutId = setTimeout(function () {
            if (params.loop) {
                _this.fixLoop();
                _this.swipeNext(true);
            }
            else if (!_this.swipeNext(true)) {
                if (!params.autoplayStopOnLast) _this.swipeTo(0);
                else {
                    clearTimeout(autoplayTimeoutId);
                    autoplayTimeoutId = undefined;
                }
            }
            _this.wrapperTransitionEnd(function () {
                if (typeof autoplayTimeoutId !== 'undefined') autoplay();
            });
        }, params.autoplay);
    }
    /*==================================================
        Loop
    ====================================================*/
    _this.loopCreated = false;
    _this.removeLoopedSlides = function () {
        if (_this.loopCreated) {
            for (var i = 0; i < _this.slides.length; i++) {
                if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]);
            }
        }
    };

    _this.createLoop = function () {
        if (_this.slides.length === 0) return;
        if (params.slidesPerView === 'auto') {
            _this.loopedSlides = params.loopedSlides || 1;
        }
        else {
            _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
        }

        if (_this.loopedSlides > _this.slides.length) {
            _this.loopedSlides = _this.slides.length;
        }

        var slideFirstHTML = '',
            slideLastHTML = '',
            i;
        var slidesSetFullHTML = '';
        /**
                loopedSlides is too large if loopAdditionalSlides are set.
                Need to divide the slides by maximum number of slides existing.

                @author        Tomaz Lovrec <tomaz.lovrec@blanc-noir.at>
        */
        var numSlides = _this.slides.length;
        var fullSlideSets = Math.floor(_this.loopedSlides / numSlides);
        var remainderSlides = _this.loopedSlides % numSlides;
        // assemble full sets of slides
        for (i = 0; i < (fullSlideSets * numSlides); i++) {
            var j = i;
            if (i >= numSlides) {
                var over = Math.floor(i / numSlides);
                j = i - (numSlides * over);
            }
            slidesSetFullHTML += _this.slides[j].outerHTML;
        }
        // assemble remainder slides
        // assemble remainder appended to existing slides
        for (i = 0; i < remainderSlides;i++) {
            slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble slides that get preppended to existing slides
        for (i = numSlides - remainderSlides; i < numSlides;i++) {
            slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble all slides
        var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML;
        // set the slides
        wrapper.innerHTML = slides;

        _this.loopCreated = true;
        _this.calcSlides();

        //Update Looped Slides with special class
        for (i = 0; i < _this.slides.length; i++) {
            if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true);
        }
        _this.callPlugins('onCreateLoop');

    };

    _this.fixLoop = function () {
        var newIndex;
        //Fix For Negative Oversliding
        if (_this.activeIndex < _this.loopedSlides) {
            newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
            _this.swipeTo(newIndex, 0, false);
        }
        //Fix For Positive Oversliding
        else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {
            newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides;
            _this.swipeTo(newIndex, 0, false);
        }
    };

    /*==================================================
        Slides Loader
    ====================================================*/
    _this.loadSlides = function () {
        var slidesHTML = '';
        _this.activeLoaderIndex = 0;
        var slides = params.loader.slides;
        var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups);
        for (var i = 0; i < slidesToLoad; i++) {
            if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i];
            else {
                slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
        }
        _this.wrapper.innerHTML = slidesHTML;
        _this.calcSlides(true);
        //Add permanent transitionEnd callback
        if (!params.loader.loadAllSlides) {
            _this.wrapperTransitionEnd(_this.reloadSlides, true);
        }
    };

    _this.reloadSlides = function () {
        var slides = params.loader.slides;
        var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10);
        if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return; //<-- Exit
        _this.activeLoaderIndex = newActiveIndex;
        var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups);
        var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1);
        //Update Transforms
        if (newActiveIndex > 0) {
            var newTransform = -slideSize * (newActiveIndex - firstIndex);
            _this.setWrapperTranslate(newTransform);
            _this.setWrapperTransition(0);
        }
        var i; // loop index
        //New Slides
        if (params.loader.logic === 'reload') {
            _this.wrapper.innerHTML = '';
            var slidesHTML = '';
            for (i = firstIndex; i <= lastIndex; i++) {
                slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
            _this.wrapper.innerHTML = slidesHTML;
        }
        else {
            var minExistIndex = 1000;
            var maxExistIndex = 0;

            for (i = 0; i < _this.slides.length; i++) {
                var index = _this.slides[i].data('swiperindex');
                if (index < firstIndex || index > lastIndex) {
                    _this.wrapper.removeChild(_this.slides[i]);
                }
                else {
                    minExistIndex = Math.min(index, minExistIndex);
                    maxExistIndex = Math.max(index, maxExistIndex);
                }
            }
            for (i = firstIndex; i <= lastIndex; i++) {
                var newSlide;
                if (i < minExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                }
                if (i > maxExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.appendChild(newSlide);
                }
            }
        }
        //reInit
        _this.reInit(true);
    };

    /*==================================================
        Make Swiper
    ====================================================*/
    function makeSwiper() {
        _this.calcSlides();
        if (params.loader.slides.length > 0 && _this.slides.length === 0) {
            _this.loadSlides();
        }
        if (params.loop) {
            _this.createLoop();
        }
        _this.init();
        initEvents();
        if (params.pagination) {
            _this.createPagination(true);
        }

        if (params.loop || params.initialSlide > 0) {
            _this.swipeTo(params.initialSlide, 0, false);
        }
        else {
            _this.updateActiveSlide(0);
        }
        if (params.autoplay) {
            _this.startAutoplay();
        }
        /**
         * Set center slide index.
         *
         * @author        Tomaz Lovrec <tomaz.lovrec@gmail.com>
         */
        _this.centerIndex = _this.activeIndex;

        // Callbacks
        if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this);
        _this.callPlugins('onSwiperCreated');
    }

    makeSwiper();
};

Swiper.prototype = {
    plugins : {},

    /*==================================================
        Wrapper Operations
    ====================================================*/
    wrapperTransitionEnd : function (callback, permanent) {
        'use strict';
        var a = this,
            el = a.wrapper,
            events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i;

        function fireCallBack() {
            callback(a);
            if (a.params.queueEndCallbacks) a._queueEndCallbacks = false;
            if (!permanent) {
                for (i = 0; i < events.length; i++) {
                    a.h.removeEventListener(el, events[i], fireCallBack);
                }
            }
        }

        if (callback) {
            for (i = 0; i < events.length; i++) {
                a.h.addEventListener(el, events[i], fireCallBack);
            }
        }
    },

    getWrapperTranslate : function (axis) {
        'use strict';
        var el = this.wrapper,
            matrix, curTransform, curStyle, transformMatrix;

        // automatic axis detection
        if (typeof axis === 'undefined') {
            axis = this.params.mode === 'horizontal' ? 'x' : 'y';
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
        }
        else {
            if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0;
            if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0;
        }
        return curTransform || 0;
    },

    setWrapperTranslate : function (x, y, z) {
        'use strict';
        var es = this.wrapper.style,
            coords = {x: 0, y: 0, z: 0},
            translate;

        // passed all coordinates
        if (arguments.length === 3) {
            coords.x = x;
            coords.y = y;
            coords.z = z;
        }

        // passed one coordinate and optional axis
        else {
            if (typeof y === 'undefined') {
                y = this.params.mode === 'horizontal' ? 'x' : 'y';
            }
            coords[y] = x;
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
        }
        else {
            es.left = coords.x + 'px';
            es.top  = coords.y + 'px';
        }
        this.callPlugins('onSetWrapperTransform', coords);
        if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
    },

    setWrapperTransition : function (duration) {
        'use strict';
        var es = this.wrapper.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
        this.callPlugins('onSetWrapperTransition', {duration: duration});
        if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);

    },

    /*==================================================
        Helpers
    ====================================================*/
    h : {
        getWidth: function (el, outer, round) {
            'use strict';
            var width = window.getComputedStyle(el, null).getPropertyValue('width');
            var returnWidth = parseFloat(width);
            //IE Fixes
            if (isNaN(returnWidth) || width.indexOf('%') > 0) {
                returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            }
            if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            if (round) return Math.round(returnWidth);
            else return returnWidth;
        },
        getHeight: function (el, outer, round) {
            'use strict';
            if (outer) return el.offsetHeight;

            var height = window.getComputedStyle(el, null).getPropertyValue('height');
            var returnHeight = parseFloat(height);
            //IE Fixes
            if (isNaN(returnHeight) || height.indexOf('%') > 0) {
                returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            }
            if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            if (round) return Math.round(returnHeight);
            else return returnHeight;
        },
        getOffset: function (el) {
            'use strict';
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop  = el.clientTop  || body.clientTop  || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop  = window.pageYOffset || el.scrollTop;
            var scrollLeft = window.pageXOffset || el.scrollLeft;
            if (document.documentElement && !window.pageYOffset) {
                //IE7-8
                scrollTop  = document.documentElement.scrollTop;
                scrollLeft = document.documentElement.scrollLeft;
            }
            return {
                top: box.top  + scrollTop  - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        },
        windowWidth : function () {
            'use strict';
            if (window.innerWidth) return window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
        },
        windowHeight : function () {
            'use strict';
            if (window.innerHeight) return window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
        },
        windowScroll : function () {
            'use strict';
            if (typeof pageYOffset !== 'undefined') {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            }
            else if (document.documentElement) {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                };
            }
        },

        addEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.addEventListener) {
                el.addEventListener(event, listener, useCapture);
            }
            else if (el.attachEvent) {
                el.attachEvent('on' + event, listener);
            }
        },

        removeEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.removeEventListener) {
                el.removeEventListener(event, listener, useCapture);
            }
            else if (el.detachEvent) {
                el.detachEvent('on' + event, listener);
            }
        }
    },
    setTransform : function (el, transform) {
        'use strict';
        var es = el.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
    },
    setTranslate : function (el, translate) {
        'use strict';
        var es = el.style;
        var pos = {
            x : translate.x || 0,
            y : translate.y || 0,
            z : translate.z || 0
        };
        var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
        if (!this.support.transforms) {
            es.left = pos.x + 'px';
            es.top = pos.y + 'px';
        }
    },
    setTransition : function (el, duration) {
        'use strict';
        var es = el.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
    },
    /*==================================================
        Feature Detection
    ====================================================*/
    support: {

        touch : (window.Modernizr && Modernizr.touch === true) || (function () {
            'use strict';
            return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
        })(),

        transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
        })(),

        transforms : (window.Modernizr && Modernizr.csstransforms === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div);
        })(),

        transitions : (window.Modernizr && Modernizr.csstransitions === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div);
        })(),

        classList : (function () {
            'use strict';
            var div = document.createElement('div').style;
            return 'classList' in div;
        })()
    },

    browser : {

        ie8 : (function () {
            'use strict';
            var rv = -1; // Return value assumes failure.
            if (navigator.appName === 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (re.exec(ua) !== null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv !== -1 && rv < 9;
        })(),

        ie10 : window.navigator.msPointerEnabled,
        ie11 : window.navigator.pointerEnabled
    }
};

/*=========================
  jQuery & Zepto Plugins
  ===========================*/
if (window.jQuery || window.Zepto) {
    (function ($) {
        'use strict';
        $.fn.swiper = function (params) {
            var s = new Swiper($(this)[0], params);
            $(this).data('swiper', s);
            return s;
        };
    })(window.jQuery || window.Zepto);
}

// component
if (typeof(module) !== 'undefined')
{
    module.exports = Swiper;
}

// requirejs support
if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return Swiper;
    });
}

"use strict";

//Modernizr touch detect
Modernizr.load({
	test: Modernizr.touch,
	yep :['css/touch.css'],
	nope: ['js/waypoints.js'],
	complete : function () {
		if (Modernizr.touch){
			//initMobile

			$('.z-nav__list > .z-nav__item:has(.z-nav__list-secondary) > .z-nav__link').click(function(e){
				if ($(window).width() > 769) {
					e.preventDefault();
				};
			});

			$(".animationload").delay(1000).fadeOut("slow");
		}							 
		else{
			//initDesc
			
			//Animated header positioning
			var $head = $( '.header-fixed' );
			$( '.waypoint' ).each( function(i) {
				var $el = $( this ),
				animClassDown = $el.data( 'animateDown' ),
				animClassUp = $el.data( 'animateUp' );
							 
				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown) {
						$head.attr('class', 'header-fixed ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp){
						$head.attr('class', 'header-fixed ' + animClassUp);
					}
				}, { offset: -250 });
			});	
		}
	}  
});

//Test if classList exist
var test = false;
if ("document" in self && !("classList" in document.createElement("_"))){
	test = true;
}

Modernizr.load({
  test: test,
  yep : ['js/classList.js'],
  nope: []
});

//Plaeholder handler
if(!Modernizr.input.placeholder){             //placeholder for old brousers and IE
 
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

//Counter for progress bar and achivemt
function countValue(value, result, target, duration) {
    if(duration) {
        var count = 0;
        var speed = parseInt(duration / value);
        var interval = setInterval(function(){
            if(count - 1 < value) {
                target.html(count);
            }
            else {
                target.html(result);
                clearInterval(interval);
            }
            count++;
        }, speed);
    }
    else {
        target.html(result);
    }
}

function init_statsCounter(duration) {
	   $('.stat .stat__number').each(function() {
	       var container = $(this);
	       var value = container.attr('data-value');
	       var result = container.attr('data-result');
	                        
	       countValue(value, result, container, duration);
	   });
} 

// Progress bar and counter init in viewport
function init_progressBar(duration) {
	$('.progress-container').each(function() {
	        var container = $(this).find('.progress-value');
	        var value = $(this).find('.progress').attr('data-level');
	        var result = value;
	        if(Modernizr.csstransitions) {
	            $(this).find('.progress-bar').css({'width' : value + '%'});
	        }
	        else {
	            $(this).find('.progress-bar').animate({width : value + '%'}, 2500);
	        }
	                        
	        countValue(value, result, container, duration);
	});
}
    	
// Init for all template pages
$(document).ready(function() {
	$('.z-nav__list').mobileMenu({
	    triggerMenu:'.z-nav__toggle',
		subMenuTrigger: ".z-nav__toggle-sub",
		animationSpeed:500	
	});

	$('.z-nav__toggle').on('mousedown touchstart', function (){
		$('.z-nav__toggle').toggleClass('open-nav');
		var $mobileNav = $('.z-nav__list');
		var $cart = $('.cart__list');
		var $cartToggle = $('.cart__toggle');

		if($mobileNav.hasClass('open-nav')){
			$mobileNav.removeClass('open-nav close-nav');
			$mobileNav.addClass('close-nav');
		}
		else{
			$mobileNav.removeClass('open-nav close-nav');
			$mobileNav.addClass('open-nav');

			$cart.removeClass('open-nav close-nav');
			$cart.addClass('close-nav');
			$cartToggle.removeClass('open-nav close-nav');
			$cartToggle.addClass('close-nav');
		}
	});

   // hide .top-scroll first
    $(".top-scroll").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top-scroll').fadeIn(500);
            } else {
                $('.top-scroll').fadeOut(500);
            }
        });

        // scroll body to 0px on click
        $('.top-scroll').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

	// mega menu
	if($(".mega-menu").length==0){
			return 0;
	} else {
		$(".mega-menu").parent().addClass('skip-element');
	}

});

$(window).resize(function (){
	if (window.innerWidth > 768 ) {
		$('.z-nav__list').removeClass('close-nav');
	};
})

//Function section

//Start function
function cart() {

				function cartUsage(){
					$('.cart__toggle').toggleClass('open-nav');
					var $cart = $('.cart__list');
					var $mobileNav = $('.z-nav__list');
					var $navToggle = $('.z-nav__toggle');

					if($cart.hasClass('open-nav')){
						$cart.removeClass('open-nav close-nav');
						$cart.addClass('close-nav');	
					}
					else{
						$cart.removeClass('open-nav close-nav');
						$cart.addClass('open-nav');

						if($mobileNav.hasClass('open-nav')){
							$mobileNav.removeClass('open-nav close-nav');
							$mobileNav.addClass('close-nav');

							$navToggle.removeClass('open-nav close-nav');
							$navToggle.addClass('close-nav');
						}
					}
				}

				if( 'ontouchstart' in window ) {
					$('.cart__toggle').on('touchstart', function () {
						cartUsage();
					});			
				} else {
					$('.cart__toggle').on('click', function () {
						cartUsage();
					});
				}


}
//end function

//Start function
function revDefault() {

	var api = $('.banner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:560,

		onHoverStop:"on",
			         
		hideThumbs:0,
		hideTimerBar:"on",
			 
		navigationType:"none",
		navigationArrows:"solo",
			 
		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"bottom",
		soloArrowLeftHOffset:0,
		soloArrowLeftVOffset:-80,
			 
		soloArrowRightHalign:"right",
		soloArrowRightValign:"bottom",
		soloArrowRightHOffset:0,
		soloArrowRightVOffset:-80,

		hideSliderAtLimit: 640
	});

	api.bind("revolution.slide.onchange",function (e,data) {
        var slideText = $('.banner li').eq(data.slideIndex - 1).attr('data-text');
        $('.slider-info').text(slideText);
    });
}
//end function

//Start function
function revAlternative() {

	var api = $('.banner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:560,

		onHoverStop:"on",
			         
		hideThumbs:100,
		hideTimerBar:"on",
			 
		navigationType:"none",
		navigationArrows:"solo",
			 
		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:0,
		soloArrowLeftVOffset:0,
			 
		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:0,
		soloArrowRightVOffset:0,

		hideSliderAtLimit: 640
	});
}
//end function

//
function royalSlider(){

	$(".royalSlider").royalSlider({
		keyboardNavEnabled: true,
		loop:true,
		autoScaleSlider: true,
		autoScaleSliderHeight: 284,
		slidesSpacing: 0,
		autoPlay: {
			// autoplay options go gere
			enabled: true,
			pauseOnHover: true
		},
		controlNavigation: 'thumbnails',
		thumbs: {
			autoCenter: false,
			fitInViewport: false
		},
		controlsInside: false
	}); 

	var slider = $(".royalSlider").data('royalSlider');
}

//Start function
function flexSlider(){
	$('.flexslider').flexslider({
		controlNav: false,
		prevText: "", 
		nextText: "",
			after: function(){
                $('.slider-info').text($('.flex-active-slide').attr('data-text'));
			}
	});
}
//end function

//Start function
function staffSlider() {

	// Default view
    var minimalSwiper = $('.staff-slider').swiper({
		slidesPerView:1
	});

	//init slider navigation arrow
    $('.staff-slider-control .prev-arrow').on('click', function(e){
        e.preventDefault();
        minimalSwiper.swipePrev();
    });

    $('.staff-slider-control .next-arrow').on('click', function(e){
        e.preventDefault();
        minimalSwiper.swipeNext();
    });
}
//end function

//Start function
function minimalSlider(){

	// Default view
    var minimalSwiper = $('.minimal-slider').swiper({
		slidesPerView:1,
		loop:true,
	});

	//init slider navigation arrow

    $('.minimal-slider-control .prev-arrow').on('click', function(e){
           e.preventDefault();
           minimalSwiper.swipePrev();
    });

    $('.minimal-slider-control .next-arrow').on('click', function(e){
           e.preventDefault();
           minimalSwiper.swipeNext();
    });
}//end function

function dateSlider(){

	// Base slider with data init
    var dateSwiper = $('.date-slider').swiper({
		slidesPerView:1,
		loop:true,
		//mode: 'vertical',
		onSlideChangeStart:function change(index){
			changeDate();
		}
	});

    var slidesDate = $('.date-slider .swiper-slide');
	var placement = $('.date-slider-control .date-slide');
	
    function changeDate(){
        var slideText = slidesDate.eq(dateSwiper.activeIndex).attr('data-date');
        placement.text(slideText);
    }

    changeDate();
               	
	//init slider navigation arrow

    $('.date-slider-control .prev-arrow').on('click', function(e){
        e.preventDefault();
        dateSwiper.swipePrev();
    });

    $('.date-slider-control .next-arrow').on('click', function(e){
        e.preventDefault();
        dateSwiper.swipeNext();
    });
}
//end function



function itemCarousel(){

	// Full width carousel
    var carouselAllSwiper = $('.carousel-all').swiper({
				    slidesPerView:7,
				    speed: 500,
				    autoplay: 2000,
				    autoplayDisableOnInteraction:false,
				    loop: true
	});

	var actSlide = $('.carousel-all .swiper-slide-active');
	actSlide.css('margin-right', '-1px');
	
	//Detect size and set present optiom
	var displayWidth = $(window).width();

	switch (true) {
		case (displayWidth>992):
			carouselAllSwiper.params.slidesPerView=7;
			carouselAllSwiper.resizeFix();   
		break;
		case (displayWidth>769 && displayWidth<=992):
				carouselAllSwiper.params.slidesPerView=4;
			     carouselAllSwiper.resizeFix();
		break;
		case (displayWidth>400 && displayWidth<=769):
			carouselAllSwiper.params.slidesPerView=3;
			carouselAllSwiper.resizeFix();
		break;
		case (displayWidth<=400):
			carouselAllSwiper.params.slidesPerView=2;
			carouselAllSwiper.resizeFix();
		break;
	}

    //Resize detect
	$(window).resize(function(){
	    actSlide.css('margin-right', '-1px');
	    
	    var displayWidth = $(window).width();

		switch (true) {
			case (displayWidth>992):
				carouselAllSwiper.params.slidesPerView=7;
				carouselAllSwiper.reInit();  
			break;
			case (displayWidth>769 && displayWidth<=992):
				carouselAllSwiper.params.slidesPerView=4;
				carouselAllSwiper.reInit();
			break;
			case (displayWidth>400 && displayWidth<=769):
				carouselAllSwiper.params.slidesPerView=3;
				carouselAllSwiper.reInit();
			break;
			case (displayWidth<=400):
				carouselAllSwiper.params.slidesPerView=2;
				carouselAllSwiper.reInit();
			break;
		}
	});
}

//Start function
function scrollSlider() {

	//scroll testimonial
    $(".testimonial-wrap").mCustomScrollbar({
        axis:"x",
		advanced:{
			autoExpandHorizontalScroll:true
		},
	    autoDraggerLength : false
	});
}
//end function

//Start function
function featureSlider() {

	//Slider view
    var featureSwiper = $('.fearure-slider').swiper({
		slidesPerView: 1,
		loop: false,
		paginationClickable:true,
		pagination:'.feature-pagination'
	});
}
//end function

//Start function
function sliderSides () {

				//Swiper init
               	var prevContainer = $('.leftside-arrow .img-prev');
				var nextContainer = $('.rightside-arrow .img-next');
				var prevName = $('.leftside-arrow .arrow-heading');
				var nextName = $('.rightside-arrow .arrow-heading');
				

               	// Side arrow carousel
               	var carouselSwiper = $('.carousel-sides').swiper({
				    slidesPerView:4,
				    loop: true,
				    speed: 600
				});

				var slideArray = $('.carousel-sides .swiper-slide');

				function previewPrev(){
				 	var prevImg = slideArray.eq(carouselSwiper.activeIndex - 1).attr('data-src');
		            var nextImg = slideArray.eq(carouselSwiper.activeIndex + carouselSwiper.params.slidesPerView).attr('data-src');
		            var prevHead = slideArray.eq(carouselSwiper.activeIndex - 1).attr('data-head');
		            var nextHead = slideArray.eq(carouselSwiper.activeIndex + carouselSwiper.params.slidesPerView).attr('data-head');

				    prevContainer.attr('src', prevImg);
				    nextContainer.attr('src', nextImg);
				    prevName.text(prevHead);
				    nextName.text(nextHead);
				}

				function previewNext(){
				    var prevImg = slideArray.eq(carouselSwiper.previousIndex).attr('data-src');
		            var nextImg = slideArray.eq(carouselSwiper.previousIndex + carouselSwiper.params.slidesPerView+1).attr('data-src');
		            var prevHead = slideArray.eq(carouselSwiper.previousIndex).attr('data-head');
		            var nextHead = slideArray.eq(carouselSwiper.previousIndex + carouselSwiper.params.slidesPerView+1).attr('data-head');

				    prevContainer.attr('src', prevImg);
				    nextContainer.attr('src', nextImg);
				    prevName.text(prevHead);
				    nextName.text(nextHead);
				}

				//init slider navigation arrow

                $('.leftside-arrow').on('click', function(e){
                    e.preventDefault();
                    carouselSwiper.swipePrev();
                    
                    previewPrev();
                });

                $('.rightside-arrow').on('click', function(e){
                    e.preventDefault();
                    carouselSwiper.swipeNext();

                    previewNext();
                });

                //Start arrow contant init	
                previewPrev();



				     var displayWidth = $(window).width();

				    switch (true) {
					  	case (displayWidth>992):
					   		carouselSwiper.params.slidesPerView=4;
				        	carouselSwiper.resizeFix();   
					   	break;
					  	case (displayWidth>640 && displayWidth<=992):
					   		carouselSwiper.params.slidesPerView=3;
				         	carouselSwiper.resizeFix();
					   	break;
					   	case (displayWidth>400 && displayWidth<=640):
					   		carouselSwiper.params.slidesPerView=2;
				         	carouselSwiper.resizeFix();
					   	break;
					   	case (displayWidth<=400):
					   		carouselSwiper.params.slidesPerView=1;
				         	carouselSwiper.resizeFix();
					   	break;
					}

                    //Resize detect
	                $(window).resize(function(){
	                	var displayWidth = $(window).width();

						switch (true) {
						  	case (displayWidth>992):
						   		carouselSwiper.params.slidesPerView=4;
					        	carouselSwiper.reInit();  
						   	break;
						  	case (displayWidth>640 && displayWidth<=992):
						   		carouselSwiper.params.slidesPerView=3;
					         	carouselSwiper.reInit();
						   	break;
						   	case (displayWidth>400 && displayWidth<=640):
						   		carouselSwiper.params.slidesPerView=2;
					         	carouselSwiper.reInit();
						   	break;
						   	case (displayWidth<=400):
						   		carouselSwiper.params.slidesPerView=1;
					         	carouselSwiper.reInit();
						   	break;
						}
	                 });
}
//end function

//Start function
function sliderSidesAdvanced() {

				sliderSides();

	             var slidesSlides = $('.carousel-sides .swiper-slide');
	             var sliderInfo = $('.slider-information__item');

	             slidesSlides.mouseenter(function (e){
	             	slidesSlides.removeClass('carousel-slide-active');
	             	$(this).addClass('carousel-slide-active');

	             	var sidesFilter = $(this).attr('data-head').toLowerCase();

	             	sliderInfo.hide(0);
	             	$('.' + sidesFilter).show(0);
	             }).mouseleave(function(){ slidesSlides.removeClass('carousel-slide-active'); });
}
//end function

//Start function
function fadingSlider() {

				//Slider view
               	var fadeSwiper = $('.fading-slider').swiper({
				    slidesPerView: 5,
				    loop: true,
				    paginationClickable:true,
				    pagination:'.fade-pagination',
				    noSwiping:true,
				    onSlideChangeStart:function(index){
				    	fadingSlide.removeClass('slide-disabled')
						i = index.activeIndex;
						fadingSlide.eq(i).addClass('slide-disabled');

						i2 = fadeSwiper.activeIndex + fadeSwiper.params.slidesPerView -1;
	                 	fadingSlide.eq(i2).addClass('slide-disabled');
					}
				});

				//init slider navigation arrow

                $('.fade-slider-control .prev-arrow').on('click', function(e){
                    e.preventDefault();
                    fadeSwiper.swipePrev();
                });

                $('.fade-slider-control .next-arrow').on('click', function(e){
                    e.preventDefault();
                    fadeSwiper.swipeNext();
                });

                //function init
                function fadeSlideResize(){
					i = fadeSwiper.activeLoopIndex;
	                fadeSwiper.swipeTo(i, 0, function (e) {
	                    i2 = fadeSwiper.activeIndex + fadeSwiper.params.slidesPerView -1;
	                 	fadingSlide.eq(i2).addClass('slide-disabled');
	                });
				}

                var displayWidth = $(window).width();

			    switch (true) {
				  	case (displayWidth>1350):
				   		fadeSwiper.params.slidesPerView=5;
			        	fadeSwiper.resizeFix();   
				   	break;
				  	case (displayWidth>1150 && displayWidth<=1350):
				   		fadeSwiper.params.slidesPerView=4;
			         	fadeSwiper.resizeFix();
				   	break;
				   	case (displayWidth>760 && displayWidth<=1150):
				   		fadeSwiper.params.slidesPerView=3;
			         	fadeSwiper.resizeFix();
				   	break;
				   	case (displayWidth<=760):
				   		fadeSwiper.params.slidesPerView=1;
				   		fadeSwiper.params.noSwiping=false;
			         	fadeSwiper.resizeFix();
				   	break;
				}

                    //Resize detect
	                $(window).resize(function(){

	                     if ($(window).width() >1150 & $(window).width() <  1350  ){
	                        fadeSwiper.params.slidesPerView=4;        
	                        fadeSwiper.reInit();

	                        fadeSlideResize();
	                    }
	                    else
	                     if ($(window).width() > 760 &  $(window).width() < 1150 ){
	                         fadeSwiper.params.slidesPerView=3;
	                         fadeSwiper.reInit();

	                         fadeSlideResize(); 
	                    } else
	                     if ($(window).width() < 760){
	                         fadeSwiper.params.slidesPerView=1;
	                         fadeSwiper.params.noSwiping=false;
	                         fadeSwiper.reInit();   
	                    }

	                    else{
	                        fadeSwiper.params.slidesPerView=5;
	                        fadeSwiper.reInit();
	                        
	                        fadeSlideResize();
	                    }
	                 });

	                var fadingSlide = $('.fading-slider .swiper-slide');

	                var i = fadeSwiper.activeIndex;
	                fadingSlide.eq(i).addClass('slide-disabled');

	                var i2 = fadeSwiper.activeIndex + fadeSwiper.params.slidesPerView -1;
	                fadingSlide.eq(i2).addClass('slide-disabled');
}
//end function

//Start function
function sliderSidebar() {

				// Slider with sidebar
               	var siderbarSwiper = $('.slider-siderbar').swiper({
				    slidesPerView:1,
				    speed: 600,
				    autoplay: 4000,
				    autoplayDisableOnInteraction:false,
				    loop: true,
				     onSlideChangeStart:function change(index){
				     	current = siderbarSwiper.activeLoopIndex+1;
		                slideActive.text(current);

		                infoHeading.text(slidesSB.eq(current-1).attr('data-heading'));
		                infoText.text(slidesSB.eq(current-1).attr('data-text'));

				     }
				});

				//init slider navigation arrow

                $('.slider-siderbar-control .prev-arrow').on('click', function(e){
                    e.preventDefault();
                    siderbarSwiper.swipePrev();
                });

                $('.slider-siderbar-control .next-arrow').on('click', function(e){
                    e.preventDefault();
                    siderbarSwiper.swipeNext();
                });

                var slidesSB = $('.slider-siderbar .swiper-slide');

                var slideActive = $('.current-slide');
                var slideAll = $('.all-slide')
                var current = siderbarSwiper.activeLoopIndex+1;
                var all = siderbarSwiper.slides.length-2;
  
                slideActive.text(current);
                slideAll.text(all);

                //Slide infobox
                var infoHeading = $('.slide-info__heading');
                var infoText = $('.slide-info__text');
                infoHeading.text(slidesSB.eq(current-1).attr('data-heading'));
                infoText.text(slidesSB.eq(current-1).attr('data-text'));
}
//end function

//Start function
function sliderSidebarFull() {

	 			// Slider with sidebar
               	var siderbarSwiper = $('.slider-siderbar').swiper({
				    slidesPerView:1,
				    speed: 600,
				    autoplay: 4000,
				    autoplayDisableOnInteraction:false,
				    loop: true,
				     onSlideChangeStart:function change(index){
				     	current = siderbarSwiper.activeLoopIndex+1;
		                slideActive.text(current);

		                infoIcon.html(slidesSB.eq(current-1).attr('data-icon'));
		                infoHeading.text(slidesSB.eq(current-1).attr('data-heading'));
		                infoText.text(slidesSB.eq(current-1).attr('data-text'));

				     }
				});

				//init slider navigation arrow

                $('.slider-siderbar-control .prev-arrow').on('click', function(e){
                    e.preventDefault();
                    siderbarSwiper.swipePrev();
                });

                $('.slider-siderbar-control .next-arrow').on('click', function(e){
                    e.preventDefault();
                    siderbarSwiper.swipeNext();
                });

                var slidesSB = $('.slider-siderbar .swiper-slide');

                var slideActive = $('.current-slide');
                var slideAll = $('.all-slide')
                var current = siderbarSwiper.activeLoopIndex+1;
                var all = siderbarSwiper.slides.length-2;
  
                slideActive.text(current);
                slideAll.text(all);

                //Slide infobox
                var infoIcon = $('.slide-info__icon');
                var infoHeading = $('.slide-info__heading');
                var infoText = $('.slide-info__text');

                infoIcon.html(slidesSB.eq(current-1).attr('data-icon'));
                infoHeading.text(slidesSB.eq(current-1).attr('data-heading'));
                infoText.text(slidesSB.eq(current-1).attr('data-text'));
}
//end function

//Start function
function productSlider(){

	// Product slider
    var product = $('.product-slider').swiper({
		slidesPerView:1,
		paginationClickable:true,
		pagination:'.product-slider-pagination'
	});
}
//end function

//Start function
function flickr() {

	//init flickr
	$('#flickr').jflickrfeed({
        limit:          15,
        qstrings:       {id: '52617155@N08'},
        itemTemplate:   '<li><a href="{{image_b}}" data-rel="colorbox"><img src="{{image_s}}" alt="{{title}}" /><span class="hover-effect"></span></a></li>'
        },function(data){$('#flickr a').colorbox({'data-rel':'colorbox'});}
    );

    //Colorbox responsive
	$.colorbox.settings.maxWidth  = '95%';
	$.colorbox.settings.maxHeight = '95%';

   	/* Colorbox resize function */
	var resizeTimer;
	function resizeColorBox()
	{
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
				$.colorbox.load(true);
			}
		}, 300)
	}

	// Resize Colorbox when resizing window or changing mobile device orientation
	$(window).resize(resizeColorBox);
		window.addEventListener("orientationchange", resizeColorBox, false);
	}
//end function

//Start function
function isotopeFilters() {

					/* ------------------- Isotope filters --------------------------*/
			
					var $container = $('#blog-random');
			 		$container.isotope({
					  itemSelector : '.post',
					    masonry: {
						  isFitWidth: true
						}
					});
				 	
					// filter items when filter link is clicked
					$('#filters li').click(function(){
					  var $allFilters = $('#filters li');
					  $allFilters.removeClass('tags__link--active');
					  $(this).addClass('tags__link--active');

					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  setProjects();	
					  return false;

					});
					
					function splitColumns() { 
						var winWidth = $(window).width(), 
							columnNumb = 1;
						
						
							if (winWidth > 1200) {
								columnNumb = 4;
							} else if (winWidth > 900) {
								columnNumb = 3;
							} else if (winWidth > 600) {
								columnNumb = 2;
							} else if (winWidth > 200) {
								columnNumb = 1;
							}
						
						return columnNumb;
					}		
					
					function setColumns() { 
						var winWidth = $(window).width(), 
							columnNumb = splitColumns(), 
							postWidth = Math.floor(winWidth / columnNumb);
						
						
						$container.find('.item').each(function () { 
							$(this).css( { 
								width : postWidth + 'px',
								height : postWidth + 'px' 
							});
						});
					}		
					
					function setProjects() { 
						setColumns();
						$container.isotope('reLayout');
					}		
					
					$container.imagesLoaded(function () { 
						setProjects();
					});
					
				
					$(window).bind('resize', function () { 
						setProjects();			
					});
}
//end function


//Start function
function isotopeGallery() {

				var $container = $('.gallery-full');
			 		$container.isotope({
					  itemSelector : '.gallery-item',
					  //layoutMode : 'fitRows'
					    masonry: {
						  //columnWidth: 100,
						  isFitWidth: true
						}
					});
				 	
					// filter items when filter link is clicked
					$('#filters li').click(function(){
					  var $allFilters = $('#filters li');
					  $allFilters.removeClass('tags__link--active');
					  $(this).addClass('tags__link--active');

					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  setProjects();	
					  return false;

					});
					
					function splitColumns() { 
						var winWidth = $(window).width(), 
							columnNumb = 1;
						
							if (winWidth > 2100) {
								columnNumb = 9;
							} else if (winWidth > 1200) {
								columnNumb = 7;
							} else if (winWidth > 900) {
								columnNumb = 5;
							} else if (winWidth > 600) {
								columnNumb = 3;
							} else if (winWidth > 300) {
								columnNumb = 2;
							}
						
						return columnNumb;
					}		
					
					function setColumns() { 
						var winWidth = $(window).width(), 
							columnNumb = splitColumns(), 
							postWidth = Math.floor(winWidth / columnNumb);
						
						
						$container.find('.gallery-item').each(function () { 
							$(this).css( { 
								width : postWidth + 'px'
								//height : postWidth + 'px' 
							});
						});
					}		
					
					function setProjects() { 
						setColumns();
						$container.isotope('reLayout');
					}		
					
					$container.imagesLoaded(function () { 
						setProjects();
					});
					
				
					$(window).bind('resize', function () { 
						setProjects();			
					});
}
//end function

//Start function
function checkNext() {

	$(".checkout-next").click(function (e) {
		e.preventDefault();

		var next = $(this).attr('data-page');
		$('.' + next ).find('.collapsed').trigger('click');
	});
}
//end function

//Start function
function selectBox() {

	//Select box
	$('.select-box').selectpicker();
}
//end function

//Start function
function initMap() {

	//Map start init - location New York
    var mapOptions = {
        scaleControl: true,
        center: new google.maps.LatLng(40.705002, -73.983450),
        zoom: 9,
        // disableDefaultUI: false,
        zoomControl: true,
        panControl: false,
	    mapTypeControl: false,
	    streetViewControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myIcon = new google.maps.MarkerImage("http://atech.designzway.com/demo/images/components/marker.png", null, null, null, new google.maps.Size(57,64));
                    
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: myIcon 
    });

    // marker.setIcon('http://google.com/mapfiles/ms/micons/ltblue-dot.png');
}
//end function

//Start function
function initMapVintage() {

	//Map start init - location New York
    var mapOptions = {
        scaleControl: true,
        center: new google.maps.LatLng(40.705002, -73.983450),
        zoom: 8,
        // disableDefaultUI: false,
        zoomControl: true,
        panControl: false,
	    mapTypeControl: false,
	    streetViewControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var myIcon = new google.maps.MarkerImage("http://atech.designzway.com/demo/images/components/marker.png", null, null, null, new google.maps.Size(57,64));

    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: myIcon 
    });

     var roadAtlasStyles = [
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "lightness": -8 },
        { "gamma": 1.18 }
      ]
  }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "gamma": 1 },
        { "lightness": -24 }
      ]
  }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "transit",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "road",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "landscape",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "poi",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
  }
            ]

             var styledMapOptions = {
                
            };

            var usRoadMapType = new google.maps.StyledMapType(
                roadAtlasStyles, styledMapOptions);

            map.mapTypes.set('usroadatlas', usRoadMapType);
            map.setMapTypeId('usroadatlas');

		//marker.setIcon('http://google.com/mapfiles/ms/micons/ltblue-dot.png');
}
//end function

//Start function
function initMapLocation() {

	//Map start init
    var mapOptions = {
        scaleControl: true,
        center: new google.maps.LatLng(51.546109, -0.146007),
        zoom: 13,
        // disableDefaultUI: false,
        zoomControl: true,
        panControl: false,
	    mapTypeControl: false,
	    streetViewControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myIcon = new google.maps.MarkerImage("http://atech.designzway.com/demo/images/components/marker.png", null, null, null, new google.maps.Size(57,64));
                    
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter(),
        icon: myIcon
 
    });

    //Custome map style
    var map_style = [{stylers:[{saturation:-100},{gamma:3}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:0},{gamma:2},{hue:"#aaaaaa"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]}]

    //Then we use this data to create the styles.
    var styled_map = new google.maps.StyledMapType(map_style, {name: "Cusmome style"});

    map.mapTypes.set('map_styles', styled_map);
    map.setMapTypeId('map_styles');

    //marker.setIcon('http://google.com/mapfiles/ms/micons/ltblue-dot.png');
}
//end function

//Start function
function galleryPopup() {

	$('.gallery-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
}
//end function

//Start function
function shopPopup() {
	
	$('.product-wrapper').magnificPopup({
		delegate: '.product__control-right',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

	$('.product__control-right').click(function (){
		$(this).blur();
	})
}
//end function

//Start function
function galletyThumbs() {

	// Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs').galleriffic({
        imageContainerSel:         '#slideshow',
        // delay: 2000,
        // onSlideChange: function(){
        // 	var currentSlide = $(this).prev().children().clone();
        // 	$(this).prev().children().remove();
        // 	$(this).prev().append(currentSlide);
        // }
    });

}
//end function

//Start function
function numberStart() {

	$('#number-start').one('inview', function (event, visible) {
	   	if (visible == true) {
	       	init_statsCounter(2000);
	    }
	});
}
//end function

//Start function
function progressStart() {

	$('#progress-start').one('inview', function (event, visible) {
	    if (visible == true) {
	       	init_progressBar(2500);
	    }
	});
}
//end function

//Start function
function rocketsStart() {

	$('.rocket-container').one('inview', function (event, visible) {
        if (visible == true) {
            $('.rocket-top').addClass('rocket-ftop');
            $('.small-left').addClass('rocket-fleft');
            $('.small-right').addClass('rocket-fright');
        }
    });
				
}
//end function

//Start function
function rangeSlider(){

	$('.range-slider').noUiSlider({
		start: [ 109, 385 ],
		range: {
			'min': [  0 ],
			'max': [ 1000 ]
		},
		serialization: {
			lower: [
				$.Link({
					target: $('#range-min'),
					format: {
						decimals: 0
					}
				})
			],
			upper: [
				$.Link({
					target: $('#range-max'),
					format: {
						decimals: 0
					}
				})
			]
		}
	});
}
//end function

//Start function
function ratyDefault() {

	//Rating stars
	$('.score').raty({
		score: 5,
		size: 120,
		starOff : 'external/raty/images/star-off.svg',
  		starOn  : 'external/raty/images/star-on.svg'
	});
}
//end function

//Start function
function ratyDisabled() {

	$('.comment-score').raty({
		readOnly: true,
		score: 5,
		size: 120,
		starOff : 'external/raty/images/star-off.svg',
  		starOn  : 'external/raty/images/star-on.svg'
	});
}
//end function

//Start function
function sequence(parrent) {
			var sequence =  $(parrent +' .sequence__item');
				
			sequence.click(function (e) {
				e.preventDefault();

				sequence.removeClass('sequence__item--active');
				$(this).addClass('sequence__item--active');

				var sepatators = $('.sequence--clickable .sequence__separator');
				var defaultSeparator = '<span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span>';
				var prevSeparator= '<span class="sequence__devider sequence__color--one"></span><span class="sequence__devider sequence__color--one1"></span><span class="sequence__devider sequence__color--one2"></span><span class="sequence__devider sequence__color--one3"></span><span class="sequence__devider sequence__color--two3"></span><span class="sequence__devider sequence__color--two2"></span><span class="sequence__devider sequence__color--two1"></span><span class="sequence__devider sequence__color--two"></span>';
				var nextSeparator = '<span class="sequence__devider sequence__color--two"></span><span class="sequence__devider sequence__color--two1"></span><span class="sequence__devider sequence__color--two2"></span><span class="sequence__devider sequence__color--two3"></span><span class="sequence__devider sequence__color--one3"></span><span class="sequence__devider sequence__color--one2"></span><span class="sequence__devider sequence__color--one1"></span><span class="sequence__devider sequence__color--one"></span>';

				sepatators.html(defaultSeparator);
				$(this).prev('.sequence__separator').html(prevSeparator);
				$(this).next('.sequence__separator').html(nextSeparator);
			});
}
//end function	

//Start function
function sequenceExp() {
				var sequence =  $('.sequence__item');
				
				sequence.click(function (e) {
					e.preventDefault();

					sequence.removeClass('sequence__item--active');
					$(this).addClass('sequence__item--active');

					var sepatators = $('.sequence--clickable .sequence__separator');
					var connector = $(this).attr('data-connect');
					var textArea = $('.sequence__text');

					textArea.hide(0);
					$('.'+ connector).show();

					var defaultSeparator = '<span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span><span class="sequence__devider"></span>';
					var prevSeparator= '<span class="sequence__devider sequence__color--one"></span><span class="sequence__devider sequence__color--one1"></span><span class="sequence__devider sequence__color--one2"></span><span class="sequence__devider sequence__color--one3"></span><span class="sequence__devider sequence__color--two3"></span><span class="sequence__devider sequence__color--two2"></span><span class="sequence__devider sequence__color--two1"></span><span class="sequence__devider sequence__color--two"></span>';
					var nextSeparator = '<span class="sequence__devider sequence__color--two"></span><span class="sequence__devider sequence__color--two1"></span><span class="sequence__devider sequence__color--two2"></span><span class="sequence__devider sequence__color--two3"></span><span class="sequence__devider sequence__color--one3"></span><span class="sequence__devider sequence__color--one2"></span><span class="sequence__devider sequence__color--one1"></span><span class="sequence__devider sequence__color--one"></span>';

					sepatators.html(defaultSeparator);
					$(this).prev('.sequence__separator').html(prevSeparator);
					$(this).next('.sequence__separator').html(nextSeparator);
				});
}
//end function

//Start function
function qNumber() {

	// This button will increment the value
	$('.qtyplus').click(function(e){
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var fieldName = $(this).attr('data-field');
		// Get its current value
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		// If is not undefined
		if (!isNaN(currentVal)) {
			// Increment
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			// Otherwise put a 0 there
			$('input[name='+fieldName+']').val(0);
		}
	});
	// This button will decrement the value till 0
	$(".qtyminus").click(function(e) {
		// Stop acting like a button
		e.preventDefault();
		// Get the field name
		var fieldName = $(this).attr('data-field');
		// Get its current value
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		// If it isn't undefined or its greater than 0
		if (!isNaN(currentVal) && currentVal > 0) {
			// Decrement one
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {
			// Otherwise put a 0 there
			$('input[name='+fieldName+']').val(0);
		}
	});
}
//end function

//Start function
function scrollControls() {


	//Scroll down navigation function
	//scroll down
	$('.tags__item--comment').click(function (ev) {
		ev.preventDefault();
		$('html, body').stop().animate({'scrollTop': $('#comment-start').offset().top-100}, 900, 'swing');
	});

	$('.tags__item--user').click(function (ev) {
		ev.preventDefault();
		$('html, body').stop().animate({'scrollTop': $('#user-post-start').offset().top-100}, 900, 'swing');
	});
}
//end function

//Start function
function smoothLink() {

					// Smooth scroll
		            $('.scroll-link').bind('click.smoothscroll',function (e) {
		                e.preventDefault();

		                var target = this.hash,
		                $target = $(target);

		                if($target.offset() == undefined) return;

		                $('html, body').stop().animate({
		                    'scrollTop': $target.offset().top-110
		                }, 900, 'swing', function () {
		                    if($('body').hasClass('auto-close-menu') && $('.menu-open').length > 0){
		                        $('#menuToggle, #menuToggleLeft').click();
		                    }
		                    
		                });
		            });

		             if (!Modernizr.touch) {
					 	$('.scroll-link').click(function (e) {
					 		$('#review').trigger('click');
					 	});
					 } else {
					 	$('.scroll-link').on('touchstart', function (e) {
					 		$('#review').trigger('click');
					 	});
					 }
}
//end function

//Start function
function smoothScrollInit() {

					if (!Modernizr.touch) {
	 				// Smooth scroll
		            $('a[href^="#"]').bind('click.smoothscroll',function (e) {
		                e.preventDefault();

		                var target = this.hash,
		                $target = $(target);

		                if($target.offset() == undefined) return;

		                $('html, body').stop().animate({
		                    'scrollTop': $target.offset().top-110
		                }, 900, 'swing', function () {
		                    if($('body').hasClass('auto-close-menu') && $('.menu-open').length > 0){
		                        $('#menuToggle, #menuToggleLeft').click();
		                    }
		                    
		                });
		            });

		            } else {
		            // Smooth scroll
		            $('a[href^="#"]').bind('touchstart.smoothscroll',function (e) {
		                e.preventDefault();

		                var target = this.hash,
		                $target = $(target);

		                if($target.offset() == undefined) return;

		                $('html, body').stop().animate({
		                    'scrollTop': $target.offset().top-110
		                }, 900, 'swing', function () {
		                    if($('body').hasClass('auto-close-menu') && $('.menu-open').length > 0){
		                        $('#menuToggle, #menuToggleLeft').click();
		                    }
		                    
		                });
		            });
		            }
}
//end function


//Start function
function wijimoCharts() {

//Chart vars
var $wijlinechart = $("#wijlinechart");
var $wijbarchart = $("#wijbarchart");
var $wijpiechart = $("#wijpiechart");
var $wijlinechartLarge = $("#wijlinechart-large");

//Chart widget init
$wijlinechart.wijlinechart({
	showChartLabels: false,
	hint: {
		enable: false
	},
	axis: {
	    y: {labels: {style: {fill: "#737c85"}},
			gridMajor: {
				visible: true, 
				style: {
					stroke: "#dadede", 
					"stroke-width": "1"
				}
			},
			max:100,
			min:0,
			annoMethod: "values",
	    },
	    x: {labels: {style: {fill: "#737c85"}}}
	},
	legend: {
	    visible: false
	},               
	seriesList: [
	    {
	        data: {
	            x: [2,4,6,8,10,12],
	            y: [60, 65, 90, 55, 39, 44]
	        },
	        markers: {visible: true, type: "circle",
	            style: {
					stroke: "#f3f7f7", 
					"stroke-width": "1" 
				}
			}
	    },
	    {
		    data: {
		        x: [2,4,6,8,10,12],
		        y: [52, 44, 68, 80, 99, 70]
		    },
	        markers: {visible: true, type: "circle",
	          	style: {
					stroke: "#f3f7f7", 
					"stroke-width": "1" 
				}
			}
	    }
	],
	seriesStyles: [
	    {stroke: "#fe8f8c", "stroke-width": 1, opacity: 1}, 
	    {stroke: "#85d6de", "stroke-width": 1, opacity: 1}
	],
});
	                

//BarChart init

$wijbarchart.wijbarchart({
	horizontal: false, 
	autoResize: "true",
	shadow: false,
	stacked: true,
	hint: {
		enable: false
	},
	axis: {
		y: {
			labels: 
				{style: {fill: "#737c85"}
			},
			gridMajor: {
				visible: false, 
			},
			max:100,
			min:0
	    },
	    x: {
	    	labels: 
	    		{style: {fill: "#34495e"},
				gridMajor: {
					isible: false, 
				}
			}
		}
	},
	legend: {
		visible: false
	}, 
	seriesList: [{
		label: "tests",
		legendEntry: true,
		data: { x: ['S', 'M', 'T','W', 'T', 'F', 'S' ], y: [42, 30, 65, 60, 50, 66, 80] }
	},
	{
		label: "Max",
		data: { x: ['S', 'M', 'T','W', 'T', 'F', 'S' ], y: [100, 100, 100, 100, 100, 100, 100] }
	}],
	seriesStyles: [
		{fill: "#85d6de", stroke: "#85d6de", opacity: 1, rx: 10, ry: 10}, 
		{fill: "#e3edee", stroke: "#e3edee", opacity: 1}
    ]
});
					
//Pie chart
$wijpiechart.wijpiechart({
	radius: 72,
	animation: { enabled: false },
	legend: {
		compass: "north", // legend position relative to the chart 
	    orientation: "horizontal", // legend elements orientation 
	    textMargin: {left: 0, right: 0, top: 140, bottom: 0},
	    textStyle: {fill: "#737c85", "font-size": 11}, 
	},
	hint: {
		enable: false
	},
	labels: { 
	    // setup label style 
	    style: { 
	        "font-size": 16,
	        "font-family": "Varela Round",
	        fill:"#85d6de"
	    }, 
	    // setup label content 
	    formatter: function () { 
	        return Globalize.format(this.value / this.total, "p0"); 
	    },
	    connectorStyle: {
			"stroke-width": 0
		},                  
	    position: "outside", 
	    offset: 10 
	}, 
	seriesList: [{
		label: "$, Dollar",
		data: 56,
		offset: 0
		}, {
		label: "€, Euro",
		data: 25,
		offset: 0
		}, {
		label: "£, Pound",
		data: 19,
		offset: 0
	}],
	seriesStyles: [{
		fill: "#85d6de", 
		stroke: "#fff", 
		"stroke-width": 1
		}, {
		fill: "#7bc7d1", 
		stroke: "#fff", 
		"stroke-width": 1
		}, {
		fill: "#68aab8", 
		stroke: "#fff", 
		"stroke-width": 1
	}]
});


//Circle diagram
$(".dial").knob();

//Large chart
$wijlinechartLarge.wijlinechart({
	showChartLabels: false,
	type: "area",
	legend: {
		visible: false
	}, 
	hint: {
		enable: false
	},
	axis: {
		y: {labels: {style: {fill: "#737c85", x:30}},
			gridMajor: {
				visible: true, 
				style: {
					stroke: "#dadede", 
					"stroke-width": "1", 
				}
			},
			max:52000,
			min:10000
	    },
	    x: {labels: {style: {fill: "#737c85", y:150}}}
	},               
	seriesList: [{              	
		fitType: "spline",
		data: {
		    x: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23"],
		    y: [11000, 35000, 12000, 28000, 12000, 40000, 12500, 46000, 23000, 31000, 15000, 19000, 15000, 18000, 31000, 17000, 24000, 19500, 30500, 16000, 14000, 12000, 10000]
		},
		markers: {visible: false}
		},{
		fitType: "spline",
		data: {
		    x: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23"],
		    y: [10500, 18000, 12000, 30000, 40500, 29000, 18500, 25000, 15000, 51000, 16000, 23000, 11000, 33000, 11500, 17000, 22000, 17000, 43000, 13000, 12000, 11000, 10000]
		},
		markers: {visible: false}
	}],
	seriesStyles: [
		{fill: "#85d6de", stroke: "#85d6de", "stroke-width": 5, opacity: 1}, 
		{fill: "#fed37f", stroke: "#fed37f", "stroke-width": 5, opacity: 1}
	],
});
						
	//Charts redraw on resize
	$(window).resize(function(){
		$wijlinechart.wijlinechart("redraw");
		$wijbarchart.wijbarchart("redraw");
		$wijpiechart.wijpiechart("redraw");
		$wijlinechartLarge.wijlinechart("redraw");
	});

}
//end function

//Start function
function tooltips() {
	$('.tooltip-link').tooltip();
}
//end function

//Start function
function preloader() {
	$(window).load(function() {
		$(".animationload").delay(600).fadeOut("slow");
	});
}
//end function

function videoLoop(elem) {
	if($(elem).length==0){
			return 0;
	};

	var myVideo = document.getElementById(elem);
	if (typeof myVideo.loop == 'boolean') { // loop supported
	    myVideo.loop = true;
	} else { // loop property not supported
	    myVideo.on('ended', function () {
	    this.currentTime = 0;
	    this.play();
	    }, false);
	}
	myVideo.play();
}
//# sourceMappingURL=all.js.map