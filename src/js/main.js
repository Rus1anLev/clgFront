import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import {headerInit} from './components/header';
import {initSearchbar} from './components/searchbar';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import Inputmask from "inputmask";
import './components/select';
import './components/popup';
import "./components/copyToClipboard";
import {bottomSheet} from "./components/bottomSheet";
import {initFilter} from "./components/filter";
import {initAccordion} from "./components/accordion";
import {initProductSlider} from "./components/product";
import {tabs} from "./components/tabs";
import {initProductsSlider} from "./components/block/products_slider";
import {initCityBox} from "./components/city-box";
import {initCookie} from "./components/cookie";
import {initInputFile} from "./components/inputFile";

import '../../node_modules/jquery-ui-dist/jquery-ui.min';
import './vendor/jquery.ui.touch-punch';

// import $ from 'jquery';
// import datepickerFactory from 'jquery-datepicker';
// import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';
// // Just pass your jquery instance and you're done
// datepickerFactory($);

window.inputMask = Inputmask

bottomSheet();
ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

headerInit();
initSearchbar()
lazyLoading.init();
tabs();
initFilter()
initAccordion()

initProductSlider()
initProductsSlider()
initCityBox()
initCookie()

initInputFile()