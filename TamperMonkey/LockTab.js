// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-08-24
// @description  try to take over the world!
// @author       You
// @match        https://web.whatsapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const correctPassword = "ChangeMe";

    let userPassword = prompt("Sayfaya erişmek için şifreyi girin:");

    console.log("script calisiyor...");

    while (userPassword !== correctPassword) {
        userPassword = prompt("Hatalı şifre! Lütfen tekrar deneyin:");
    }

    console.log("MALAFAT: ", document.getElementsByTagName("html")[0])

    alert("Doğru şifre! Sayfaya erişim sağlandı.");
})();
