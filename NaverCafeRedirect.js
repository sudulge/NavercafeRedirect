// ==UserScript==
// @name        Naver Cafe Redirect from mobile to PC
// @namespace   https://github.com/sudulge/NavercafeRedirect
// @updateURL   https://github.com/sudulge/NavercafeRedirect/raw/main/NaverCafeRedirect.js
// @downloadURL https://github.com/sudulge/NavercafeRedirect/raw/main/NaverCafeRedirect.js
// @author      https://github.com/sudulge/NavercafeRedirect
// @match       *://m.cafe.naver.com/*
// @grant       none
// @version     1.0
// @run-at      document-start
// @description redirect from mobile url to PC url
// ==/UserScript==

(function(){
    let nowURL = window.location.pathname
    
    let cafeName = nowURL.split("/")[1]
    let articleNumber = nowURL.split("/")[2]
    
    window.location.href = `https://cafe.naver.com/${cafeName}/${articleNumber}`
})();
