// ==UserScript==
// @name        Enlarge Instagram Following Dialog
// @namespace   pootz10
// @description Enlarge Instagram Following Dialog
// @include     https://instagram.com/*/
// @include     https://instagram.com/*/following/
// @include     https://www.instagram.com/*/
// @include     https://www.instagram.com/*/following/
// @exclude     https://www.instagram.com/p/*/
// @exclude     https://instagram.com/p/*/
// @version     1.3
// @history     1.3 - new fix
// @history     1.2 - fix [obsolete]
// @history     1.1 - enlarge text window [obsolete]
// @license     MIT
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// @updateURL   https://github.com/pootz10/Enlarge-Instagram-Following-Dialog/raw/master/Enlarge_Instagram_Following_Dialog.user.js
// @downloadURL https://github.com/pootz10/Enlarge-Instagram-Following-Dialog/raw/master/Enlarge_Instagram_Following_Dialog.user.js
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle(`
div.j4yusqav, .h6an9nv3, .od1n8kyl, .pi61vmqs, .e793r6ar, .h98he7qt, .kzt5xp73, .flebnqrf, .qg4pu3sx {
    min-height: 9500px !important;
}
div._aano {
    min-height: 9500px !important;
}
`);
