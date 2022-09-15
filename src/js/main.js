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
import './components/select';
import oneTimePasswd from "./components/oneTimePasswd";
import './components/popup';
import {bottomSheet} from "./components/bottomSheet";
import {initFilter} from "./components/filter";

bottomSheet();
ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

headerInit();
initSearchbar()
lazyLoading.init();
oneTimePasswd.init();

initFilter()