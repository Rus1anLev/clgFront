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

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

headerInit();
initSearchbar()
lazyLoading.init();
