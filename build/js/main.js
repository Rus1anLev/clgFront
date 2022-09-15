/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/bottomSheet.js":
/*!******************************************!*\
  !*** ./src/js/components/bottomSheet.js ***!
  \******************************************/
/*! exports provided: bottomSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomSheet", function() { return bottomSheet; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");



const bottomSheet = function () {
  window.lastModalShown;
  $(document).ready(function () {
    window.openBottomModal = openBottomModal;
    window.closeBottomModal = closeBottomModal;
    $(".js-open-modal").click(function () {
      var target = '#' + $(this).data('target');
      openModal(target);
    });
    $('.bottom-sheet .overlay').click(function () {
      setIsSheetShown(false, '#' + $(this).parent().attr('id'));
    });

    const openModal = function (modalID) {
      // lockScroll()
      if ($(modalID).length > 0) {
        if ($(window).width() >= 576 || $(modalID).hasClass('bottom-full')) {
          $.fancybox.open({
            src: modalID,
            scrolling: 'hidden'
          });
        } else {
          window.openBottomModal(modalID);
        }
      }
    };

    const closeModal = function () {
      if ($(window).width() > 959) {
        $.fancybox.close();
      } else {
        window.closeBottomModal();
      }
    };

    window.closeModal = closeModal;

    const setModalHeight = function (height, modalID) {
      console.log(modalID);

      if (modalID == undefined) {
        modalID = window.lastModalShown;
      }

      setSheetHeight(getVH(height), window.lastModalShown);
    };

    const modalAutoHeight = function (modalID = 'auto') {
      if (modalID == 'auto') {
        modalID = window.lastModalShown;
      }

      var newHeight = $(modalID).find('.body > *').outerHeight() + 80;
      console.log(newHeight);
      setSheetHeight(getVH(newHeight), modalID);
    };

    window.setModalHeight = setModalHeight;
    window.modalAutoHeight = modalAutoHeight;
    window.openModal = openModal; // openModal('#subscription-modal');
  });
  let sheetHeight; // in vh

  const openBottomModal = function (target) {
    window.lastModalShown = target;

    if ($(target).hasClass('auto-height')) {
      var height = $(target).find('.body > *').outerHeight() + 80;
      openBottomSheet(target, getVH(height));
    } else {
      openBottomSheet(target, 50);
    }

    let selector = `${target} input:enabled`;
    console.log(selector);
    let firstInput = document.querySelector(selector);
    window.setTimeout(() => firstInput.focus(), 100);
    console.log(target); // if ($el.length) {
    //   $el.trigger("focus");
    // } else {
    //   self.focus(null, true);
    // }
  };

  const closeBottomModal = function (target) {
    window.lastModalShown = target;
    closeBottomSheet(target);
  };

  function openBottomSheet(modalID, vh) {
    setSheetHeight(vh, modalID);
    setIsSheetShown(true, modalID);
  }

  function closeBottomSheet(modalID) {
    setSheetHeight(0, modalID);
    setIsSheetShown(false, modalID);
  }

  function setSheetHeight(value, modalID) {
    // if (value === 100) {
    // 	value = 99
    // }
    // if ($('html').hasClass('is-os-ios') && value > 90) {
    // 	value = 90
    // }
    if (value > 90) {
      value = 90;
    }

    sheetHeight = Math.max(0, Math.min(100, value));
    $(modalID).find('.contents').css('height', `${sheetHeight}vh`);

    if (sheetHeight === 100) {
      $(modalID).find('.contents').addClass("fullscreen");
    } else {
      $(modalID).find('.contents').removeClass("fullscreen");
    }
  }

  function unlockScroll() {
    $('html, body').css('overflow', 'inherit');
  }

  function lockScroll() {
    $('html, body').css('overflow', 'hidden');
  }

  const setIsSheetShown = (value, modalID) => {
    if (value == false) {
      unlockScroll();
    } else {
      lockScroll();
    }

    if (modalID !== undefined) {
      document.querySelector(modalID).setAttribute("aria-hidden", String(!value));
    } else {
      $('.bottom-sheet').attr("aria-hidden", String(!value));
    }
  };

  const touchPosition = event => event.touches ? event.touches[0] : event;

  let dragPosition;

  const onDragStart = event => {
    console.log('drag started');
    dragPosition = touchPosition(event).pageY;
    Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["hideAll"])();
    $(window.lastModalShown).find('.contents').addClass("not-selectable");
    document.body.style.cursor = "grabbing";
    $(window.lastModalShown).find(".draggable-area").css('cursor', document.body.style.cursor);
  };

  const onDragMove = event => {
    if (dragPosition === undefined) return;
    const y = touchPosition(event).pageY;
    const deltaY = dragPosition - y;
    const deltaHeight = deltaY / window.innerHeight * 100;

    if ($(window.lastModalShown).hasClass('from-top')) {
      setSheetHeight(getVH(y - window.scrollY), window.lastModalShown);
    } else {
      setSheetHeight(sheetHeight + deltaHeight, window.lastModalShown);
    }

    dragPosition = y;
  };

  const onDragEnd = () => {
    dragPosition = undefined;
    $(window.lastModalShown).find('.contents').removeClass("not-selectable");
    document.body.style.cursor = "";
    $(window.lastModalShown).find(".draggable-area").css('cursor', document.body.style.cursor);

    if (sheetHeight < 30) {
      setIsSheetShown(false, window.lastModalShown);
    } else if (sheetHeight > 75) {
      setSheetHeight(99, window.lastModalShown);
    } else {
      // setSheetHeight(50, window.lastModalShown)
      modalAutoHeight(window.lastModalShown);
    }
  };

  var drags = document.querySelectorAll('.draggable-area');
  Array.from(drags).forEach(drag => {
    drag.addEventListener("mousedown", onDragStart);
    drag.addEventListener("touchstart", onDragStart);
  });
  window.addEventListener("mousemove", onDragMove);
  window.addEventListener("touchmove", onDragMove);
  window.addEventListener("mouseup", onDragEnd);
  window.addEventListener("touchend", onDragEnd);
};

function getVH(height) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  if (height > h) {
    return 100;
  } else {
    return height / h * 100;
  }
}



/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: headerInit, closeBurgerWindow, closeBurgerMenu, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerInit", function() { return headerInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBurgerWindow", function() { return closeBurgerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBurgerMenu", function() { return closeBurgerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchbar */ "./src/js/components/searchbar.js");

let $header = $('.header'),
    $headerBurgerBtn = $('.header-burger'),
    $burgerOpenBtn = $('.js-burger-open'),
    $burgerCloseBtn = $('.js-burger-close'),
    $burgerBg = $('.burger-bg');

function openBurgerWindow(window) {
  let targetWindow = $(`[data-burger="${window}"]`);
  targetWindow.find('.burger__window-nav').scrollTop(0);
  targetWindow.addClass('is-open');
}

function closeBurgerWindow(window) {
  if (window === 'all') {
    $("[data-burger]").removeClass('is-open');
  } else {
    $(`[data-burger="${window}"]`).removeClass('is-open');
  }
}

function openBurgerMenu() {
  $burgerBg.fadeIn(400);
  $headerBurgerBtn.addClass('is-open');
  $header.addClass('is-open');
  openBurgerWindow('main');
}

function closeBurgerMenu() {
  $burgerBg.fadeOut(400);
  $headerBurgerBtn.removeClass('is-open');
  $header.removeClass('is-open');
  closeBurgerWindow('all');
}

function handlerBurgerButton() {
  Object(_searchbar__WEBPACK_IMPORTED_MODULE_0__["closeSearchbar"])();

  if ($headerBurgerBtn.hasClass('is-open')) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
}

function handlerBurgerOpen() {
  let target = $(this).data('open-burger');
  openBurgerWindow(target);
}

function handlerBurgerClose() {
  let target = $(this).data('close-burger');
  closeBurgerWindow(target);
}

function initBurger() {
  $headerBurgerBtn.on('click', handlerBurgerButton);
  $burgerBg.on('click', closeBurgerMenu);
  $burgerOpenBtn.on('click', handlerBurgerOpen);
  $burgerCloseBtn.on('click', handlerBurgerClose);
}

function destroyBurger() {
  $headerBurgerBtn.off('click', handlerBurgerButton);
  $burgerBg.off('click', closeBurgerMenu);
  $burgerOpenBtn.off('click', handlerBurgerOpen);
  $burgerCloseBtn.off('click', handlerBurgerClose);
  closeBurgerMenu();
  closeBurgerWindow('all');
}

let $megaMenuItem = $('.js-mega-menu-item'),
    $megaMenuWindow = $('.mega-menu__window');

function MegaMenuClose() {
  $header.removeClass('is-open');
  $megaMenuItem.removeClass('is-open');
  $megaMenuWindow.removeClass('is-open');
}

function MegaMenuOpen() {
  Object(_searchbar__WEBPACK_IMPORTED_MODULE_0__["closeSearchbar"])();
  let $btn = $(this),
      target = $btn.data('mega-menu-dropdown');
  $header.addClass('is-open');
  $btn.addClass('is-open');
  $(`[data-mega-menu-dropdown="${target}"]`).addClass('is-open');
}

function initMegaMenu() {
  $megaMenuItem.on('mouseenter', MegaMenuOpen);
  $megaMenuItem.on('mouseleave', MegaMenuClose);
  $megaMenuWindow.on('mouseenter', MegaMenuOpen);
  $megaMenuWindow.on('mouseleave', MegaMenuClose);
}

function destroyMegaMenu() {
  $megaMenuItem.off('mouseenter', MegaMenuOpen);
  $megaMenuItem.off('mouseleave', MegaMenuClose);
  $megaMenuWindow.off('mouseenter', MegaMenuOpen);
  $megaMenuWindow.off('mouseleave', MegaMenuClose);
  $("[data-mega-menu-dropdown]").removeClass('is-open');
}

function headerInit() {
  initBurger();
  initMegaMenu();
}

function destroy() {
  destroyBurger();
  destroyMegaMenu();
}



/***/ }),

/***/ "./src/js/components/oneTimePasswd.js":
/*!********************************************!*\
  !*** ./src/js/components/oneTimePasswd.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);


function inputInsideOtpInput(el) {
  if (el.value.length > 1) {
    el.value = el.value[el.value.length - 1];
  }

  try {
    if (el.value == null || el.value == "") {
      foucusOnInput(el.previousElementSibling);
    } else {
      foucusOnInput(el.nextElementSibling);
    }
  } catch (e) {
    console.log(e);
  }
}

function foucusOnInput(ele) {
  ele.focus().select();
  let val = ele.value;
  ele.value = ""; // ele.value = val;

  setTimeout(() => {
    ele.value = val;
  });
}

function init() {
  var selectors = document.querySelectorAll(".block_callback__form-input input[name=PHONE]");
  var im = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a("+7 (999) 999-99-99");
  var firstPhoneInput = document.querySelector(".block_callback__form-input input[name=PHONE]");
  firstPhoneInput.focus();
  selectors.forEach(x => {
    im.mask(x);
  });

  if ($('.sms-code').length > 0) {
    $('.sms-code input').on('input', function () {
      inputInsideOtpInput(this);
    });
    foucusOnInput($('.sms-code input').first());
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init
});

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


$.fancybox.defaults = {
  // Close existing modals
  // Set this to false if you do not need to stack multiple instances
  closeExisting: false,
  // Enable infinite gallery navigation
  loop: false,
  // Horizontal space between slides
  gutter: 50,
  // Enable keyboard navigation
  keyboard: true,
  // Should allow caption to overlap the content
  preventCaptionOverlap: true,
  // Should display navigation arrows at the screen edges
  arrows: true,
  // Should display counter at the top left corner
  infobar: true,
  // Should display close button (using `btnTpl.smallBtn` template) over the content
  // Can be true, false, "auto"
  // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
  smallBtn: "auto",
  // Should display toolbar (buttons at the top)
  // Can be true, false, "auto"
  // If "auto" - will be automatically hidden if "smallBtn" is enabled
  toolbar: "auto",
  // What buttons should appear in the top right corner.
  // Buttons will be created using templates from `btnTpl` option
  // and they will be placed into toolbar (class="fancybox-toolbar"` element)
  buttons: ["zoom", //"share",
  "slideShow", //"fullScreen",
  //"download",
  "thumbs", "close"],
  // Detect "idle" time in seconds
  idleTime: 3,
  // Disable right-click and use simple image protection for images
  protect: false,
  // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
  modal: false,
  image: {
    // Wait for images to load before displaying
    //   true  - wait for image to load and then display;
    //   false - display thumbnail and load the full-sized image over top,
    //           requires predefined image dimensions (`data-width` and `data-height` attributes)
    preload: false
  },
  ajax: {
    // Object containing settings for ajax request
    settings: {
      // This helps to indicate that request comes from the modal
      // Feel free to change naming
      data: {
        fancybox: true
      }
    }
  },
  iframe: {
    // Iframe template
    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
    // Preload iframe before displaying it
    // This allows to calculate iframe content width and height
    // (note: Due to "Same Origin Policy", you can't get cross domain data).
    preload: true,
    // Custom CSS styling for iframe wrapping element
    // You can use this to set custom iframe dimensions
    css: {},
    // Iframe tag attributes
    attr: {
      scrolling: "auto"
    }
  },
  // For HTML5 video only
  video: {
    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
    format: "",
    // custom video format
    autoStart: true
  },
  // Default content type if cannot be detected automatically
  defaultType: "image",
  // Open/close animation type
  // Possible values:
  //   false            - disable
  //   "zoom"           - zoom images from/to thumbnail
  //   "fade"
  //   "zoom-in-out"
  //
  animationEffect: "zoom",
  // Duration in ms for open/close animation
  animationDuration: 366,
  // Should image change opacity while zooming
  // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
  zoomOpacity: "auto",
  // Transition effect between slides
  //
  // Possible values:
  //   false            - disable
  //   "fade'
  //   "slide'
  //   "circular'
  //   "tube'
  //   "zoom-in-out'
  //   "rotate'
  //
  transitionEffect: "fade",
  // Duration in ms for transition animation
  transitionDuration: 366,
  // Custom CSS class for slide element
  slideClass: "",
  // Custom CSS class for layout
  baseClass: "",
  // Base template for layout
  baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' + '</div>' + '</div>',
  // Loading indicator template
  spinnerTpl: '<div class="fancybox-loading"></div>',
  // Error message template
  errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
  btnTpl: {
    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
    // Arrows
    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
    // This small close button will be appended to your html/inline/ajax content by default,
    // if "smallBtn" option is not set to false
    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + `<svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
			<path d="M18 6L6 18" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M6 6L18 18" stroke="#2C2C2C" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			` + "</button>"
  },
  // Container is injected into this element
  parentEl: "body",
  // Hide browser vertical scrollbars; use at your own risk
  hideScrollbar: true,
  // Focus handling
  // ==============
  // Try to focus on the first focusable element after opening
  autoFocus: true,
  // Put focus back to active element after closing
  backFocus: true,
  // Do not let user to focus on element outside modal content
  trapFocus: true,
  // Module specific options
  // =======================
  fullScreen: {
    autoStart: false
  },
  // Set `touch: false` to disable panning/swiping
  touch: false,
  // Hash value when initializing manually,
  // set `false` to disable hash change
  hash: null,
  // Customize or add new media types
  // Example:

  /*
    media : {
  	youtube : {
  	  params : {
  		autoplay : 0
  	  }
  	}
    }
  */
  media: {},
  slideShow: {
    autoStart: false,
    speed: 3000
  },
  thumbs: {
    autoStart: false,
    // Display thumbnails on opening
    hideOnClose: true,
    // Hide thumbnail grid when closing animation starts
    parentEl: ".fancybox-container",
    // Container is injected into this element
    axis: "y" // Vertical (y) or horizontal (x) scrolling

  },
  // Use mousewheel to navigate gallery
  // If 'auto' - enabled for images only
  wheel: "auto",
  // Callbacks
  //==========
  // See Documentation/API/Events for more information
  // Example:

  /*
    afterShow: function( instance, current ) {
  	console.info( 'Clicked element:' );
  	console.info( current.opts.$orig );
    }
  */
  onInit: $.noop,
  // When instance has been initialized
  beforeLoad: $.noop,
  // Before the content of a slide is being loaded
  afterLoad: $.noop,
  // When the content of a slide is done loading
  beforeShow: $.noop,
  // Before open animation starts
  afterShow: $.noop,
  // When content is done loading and animating
  beforeClose: $.noop,
  // Before the instance attempts to close. Return false to cancel the close.
  afterClose: $.noop,
  // After instance has been closed
  onActivate: $.noop,
  // When instance is brought to front
  onDeactivate: $.noop,
  // When other instance has been activated
  // Interaction
  // ===========
  // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
  // each option can be string or method that returns value.
  //
  // Possible values:
  //   "close"           - close instance
  //   "next"            - move to next gallery item
  //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
  //   "toggleControls"  - show/hide controls
  //   "zoom"            - zoom image (if loaded)
  //   false             - do nothing
  // Clicked on the content
  clickContent: function (current, event) {
    return current.type === "image" ? "zoom" : false;
  },
  // Clicked on the slide
  clickSlide: "close",
  // Clicked on the background (backdrop) element;
  // if you have not changed the layout, then most likely you need to use `clickSlide` option
  clickOutside: "close",
  // Same as previous two, but for double click
  dblclickContent: false,
  dblclickSlide: false,
  dblclickOutside: false,
  // Custom options when mobile device is detected
  // =============================================
  mobile: {
    preventCaptionOverlap: false,
    idleTime: false,
    clickContent: function (current, event) {
      return current.type === "image" ? "toggleControls" : false;
    },
    clickSlide: function (current, event) {
      return current.type === "image" ? "toggleControls" : "close";
    },
    dblclickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },
    dblclickSlide: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    }
  },
  // Internationalization
  // ====================
  lang: "en",
  i18n: {
    en: {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
      PLAY_START: "Start slideshow",
      PLAY_STOP: "Pause slideshow",
      FULL_SCREEN: "Full screen",
      THUMBS: "Thumbnails",
      DOWNLOAD: "Download",
      SHARE: "Share",
      ZOOM: "Zoom"
    },
    de: {
      CLOSE: "Schliessen",
      NEXT: "Weiter",
      PREV: "Zurück",
      ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
      PLAY_START: "Diaschau starten",
      PLAY_STOP: "Diaschau beenden",
      FULL_SCREEN: "Vollbild",
      THUMBS: "Vorschaubilder",
      DOWNLOAD: "Herunterladen",
      SHARE: "Teilen",
      ZOOM: "Maßstab"
    }
  }
}; // if ($('#subscription-modal').length > 0) {
// 	if ($(window).width() > 959) {
// 		$.fancybox.open({
// 			src: '#subscription-modal',
// 			scrolling: 'hidden',
// 		})
// 	}
// }

$(document).ready(function () {
  if (window.getCookie("cookie_accepted") !== 'YES') {
    $('.cookie').css('display', 'flex');
  }

  $('#privateHouse').change(function () {
    if (this.checked) {
      $('#modal-add-address .inline-labels').hide();
    } else {
      $('#modal-add-address .inline-labels').show();
    }

    window.modalAutoHeight();
  });
});
$('.cookie-accept').click(function () {
  $('.cookie').fadeOut(400);
  window.setCookie("cookie_accepted", "YES", 3600); //set "user_email" cookie, expires in 30 days
});
$('.cookie-more').click(function () {
  $(this).addClass('d-none');
  $('.cookie-more--show').addClass('d-inline');
});

/***/ }),

/***/ "./src/js/components/searchbar.js":
/*!****************************************!*\
  !*** ./src/js/components/searchbar.js ***!
  \****************************************/
/*! exports provided: initSearchbar, closeSearchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearchbar", function() { return initSearchbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSearchbar", function() { return closeSearchbar; });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/components/header.js");

let $header = $('.header'),
    $searchbar = $('.searchbar'),
    $searchbarBtn = $('.js-searchbar-btn');

const closeSearchbar = () => {
  $header.removeClass('is-open');
  $searchbar.removeClass('is-open');
};

function handlerSwitcherSearchbar() {
  Object(_header__WEBPACK_IMPORTED_MODULE_0__["closeBurgerWindow"])('all');
  Object(_header__WEBPACK_IMPORTED_MODULE_0__["closeBurgerMenu"])();
  $header.toggleClass('is-open');
  $searchbar.toggleClass('is-open');
}

function initSearchbar() {
  $searchbarBtn.on('click', handlerSwitcherSearchbar);
}



/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);


if (document.querySelector('[data-social]')) {
  const list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, item => {
    item.addEventListener('click', e => {
      const social = e.currentTarget.dataset.social;
      const url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

let vars = {};
vars.path = "/";
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);

vars.isMobile = () => innerWidth <= 960;

vars.isIE = () => vars.$html.hasClass('is-browser-ie');

vars.isIOS = () => vars.$html.hasClass('is-os-ios');

vars.winWidth = window.innerWidth;
/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/

vars.clearText = text => {
  return text.trim().replace(/\s+/g, ' ');
};
/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/


vars.setCookie = (name, value, days) => {
  let expires = '';

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};

window.setCookie = vars.setCookie;
/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/

vars.getCookie = name => {
  let nameEQ = `${name}=`;
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};

window.getCookie = vars.getCookie;
/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/

vars.eraseCookie = name => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};

let dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/

vars.lockScroll = (state, $element, name) => {
  const element = $element.get(0) ? $element.get(0) : $element;

  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }

  let scrollLocks = dataScrollLocks;

  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(() => {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks.delete(name);
    }

    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);

    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};
/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/


vars.scrollTo = ($container, time = 500, offset = 0) => {
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: `${$container.offset().top + parseInt(offset, 10)}`
  }, parseInt(time, 10));
  setTimeout(() => {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};

let scrollDiv;
/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/

vars.getScrollbarWidth = () => {
  const width = window.innerWidth - vars.$html.get(0).clientWidth;

  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  } // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it


  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }

  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/


function hasHoverSupport() {
  let hoverSupport;

  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }

  return hoverSupport;
}

if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
/**
* Переопределение доступности ховера
*/


function resize() {
  setTimeout(() => {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }

      vars.winWidth = window.innerWidth;
    }
  }, 300);
}

vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_actualYear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actualYear */ "./src/js/modules/actualYear.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/searchbar */ "./src/js/components/searchbar.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");
/* harmony import */ var _components_oneTimePasswd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/oneTimePasswd */ "./src/js/components/oneTimePasswd.js");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/popup */ "./src/js/components/popup.js");
/* harmony import */ var _components_bottomSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bottomSheet */ "./src/js/components/bottomSheet.js");













Object(_components_bottomSheet__WEBPACK_IMPORTED_MODULE_12__["bottomSheet"])();
Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__["vhFix"])();
Object(_modules_actualYear__WEBPACK_IMPORTED_MODULE_5__["actualYear"])();
_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_9__["default"].init();
Object(_components_header__WEBPACK_IMPORTED_MODULE_6__["headerInit"])();
Object(_components_searchbar__WEBPACK_IMPORTED_MODULE_7__["initSearchbar"])();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_8__["default"].init();
_components_oneTimePasswd__WEBPACK_IMPORTED_MODULE_10__["default"].init();

/***/ }),

/***/ "./src/js/modules/actualYear.js":
/*!**************************************!*\
  !*** ./src/js/modules/actualYear.js ***!
  \**************************************/
/*! exports provided: actualYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualYear", function() { return actualYear; });
/**
* Модуль "Актуальный год"
*/
const actualYear = () => {
  const year = new Date().getFullYear();

  if (document.querySelector('[data-actual-year]')) {
    document.querySelector('[data-actual-year]').textContent = year;
  }
};

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

let observer;
/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/

const init = () => {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,

    // it will reload the new image when validating attributes changes
    loaded(el) {
      el.classList.add('is-loaded');
    }

  });
  observer.observe();
};
/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/


const trigger = img => {
  observer.triggerLoad(img);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  trigger
});

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


/**
* Модуль "Плавный переход к якорю"
*/

const init = () => {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on('click.anchor', '.js-to-anchor', e => {
    e.preventDefault();
    e.stopPropagation();
    const id = $(e.currentTarget).attr('href');
    const speed = $(e.currentTarget).data('speed') || 500;
    const offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : 0;
    _components_header__WEBPACK_IMPORTED_MODULE_0__["default"].closeMenu().then(() => {
      $('.js-burger').removeClass('is-active');
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    });
  });
};

const destroy = () => {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off('.anchor');
};

/* harmony default export */ __webpack_exports__["default"] = ({
  init,
  destroy
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);




 // import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()(); // objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a; // window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/
const ieFix = () => {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    } // thanks IE8


    Date.now = Date.now || function () {
      return new Date().getTime();
    };

    if ("now" in window.performance == false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); // forEach


  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function (searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      let matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  } // closest


  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      let el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty(`prepend`)) {
        return;
      }

      Object.defineProperty(item, `prepend`, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          let argArr = Array.prototype.slice.call(arguments);
          let docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            let isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty(`append`)) {
        return;
      }

      Object.defineProperty(item, `append`, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          let argArr = Array.prototype.slice.call(arguments);
          let docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            let isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty(`before`)) {
        return;
      }

      Object.defineProperty(item, `before`, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          let argArr = Array.prototype.slice.call(arguments);
          let docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            let isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty(`remove`)) {
        return;
      }

      Object.defineProperty(item, `remove`, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, `startsWith`, {
      value(search, rawPos) {
        let pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }

    });
  } // Fixes
  //---------------------------------
  // ie download


  const ie11Download = el => {
    if (el.href === ``) {
      throw Error(`The element has no href value.`);
    }

    let filename = el.getAttribute(`download`);

    if (filename === null || filename === ``) {
      const tmp = el.href.split(`/`);
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener(`click`, evt => {
      evt.preventDefault();
      const xhr = new XMLHttpRequest();

      xhr.onloadstart = () => {
        xhr.responseType = `blob`;
      };

      xhr.onload = () => {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open(`GET`, el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    const downloadLinks = document.querySelectorAll(`a[download]`);

    if (downloadLinks.length) {
      downloadLinks.forEach(el => {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  const unfocusableSvg = () => {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    const svg = document.querySelectorAll('svg');
    svg.forEach(el => {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  const ieFooterNailing = () => {
    const main = document.querySelector('main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    let headerH;
    let footerH;
    let mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    const mainHeight = () => {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
const vhFix = () => {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map