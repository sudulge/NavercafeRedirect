// ==UserScript==
// @name        Naver Blog Redirect from mobile to PC
// @match       *://m.blog.naver.com/*
// @grant       none
// @version     1.0
// @run-at      document-start
// @description redirect from mobile url to PC url
// ==/UserScript==

(function(){
    let nowURL = window.location.href

    if (nowURL.includes('m.blog')) {
        window.location.href = nowURL.replace('m.blog', 'blog')
    }
})();
