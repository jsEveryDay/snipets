// ==UserScript==
// @name Open CodeProject Links
// @namespace http://hibbard.eu/
// @version 0.1
// @description Opens all links in the CodeProject newsletter 
// @match http://www.codeproject.com/script/Mailouts/*
// @copyright 2012+, hibbard.eu
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


addGlobalStyle('.h-80 {
	display: none;
}')

addGlobalStyle('.entryBody { max-width: 900px !important; }');
addGlobalStyle('#feedlyFrame { width: 1230px !important; }');
addGlobalStyle('#feedlyPage { width: 900px !important; }');
addGlobalStyle('.entryBody .content img { max-width: 850px !important; width: auto !important; height: auto !important; max-height: 600px !important;}');