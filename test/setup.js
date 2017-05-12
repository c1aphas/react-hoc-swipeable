import {JSDOM} from 'jsdom';

global.document = new JSDOM('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
