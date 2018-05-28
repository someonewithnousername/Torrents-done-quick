// ==UserScript==
// @name         Torrents done quick
// @namespace    https://forums.e-hentai.org/index.php?showuser=2725435
// @version      0.1
// @description  Embeding the torrent window in the original gallary
// @author       someguywith
// @match        https://e-hentai.org/g/*
// @match        https://exhentai.org/g/*
// ==/UserScript==
/*
TO-DO
  Make the objects fit better
  Ad an 'e-' > 'ex' conferter if current link is 'ex'
  Make both objects the same size, or atleast make the border look the same size.
*/
var link = window.location.href;
var gid = link.substr(23, 7); //dirty, I don't know how to search between characters
var gt = link.substr(31, 10);
var torrent = document.createElement("div");
var torrentobj = '<object type="text/html" data="https://e-hentai.org/gallerytorrents.php?gid=' + gid + '&t=' + gt + '" width="675" height="582"></object>';
var expurgeobj = '<object type="text/html" data="https://e-hentai.org/gallerypopups.php?gid=' + gid + '&t=' + gt + '&act=expunge" width="675" height="582"></object>';

torrent.innerHTML = '<div style="width:100%; overflow:hidden;"> ' + torrentobj + expurgeobj + '</div>';

document.body.insertBefore(torrent, document.querySelector(".gm").nextElementSibling);
