/* global window */
window.jQuery = window.$ = require('jquery');

const $ = window.$;

require('bootstrap');

const myutils = require('./utils/myutils.js');

$(() => {
    console.log('Hello World!');
    myutils();
});
