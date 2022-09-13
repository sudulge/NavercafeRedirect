// ==UserScript==
// @name        Naver Cafe Redirect from mobile to PC
// @namespace   Violentmonkey Scripts
// @match       *://m.cafe.naver.com/*
// @grant       none
// @version     1.0
// @author      sudulge
// @run-at      document-start
// @description redirect from mobile url to PC url
// ==/UserScript==

let nowURL = window.location.pathname

let cafeName = nowURL.split("/")[1]
let articleNumber = nowURL.split("/")[2]

window.location.href = `https://cafe.naver.com/${cafeName}/${articleNumber}`