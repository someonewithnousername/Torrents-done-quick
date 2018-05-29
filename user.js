// ==UserScript==
// @name         Torrents done quick
// @namespace    https://forums.e-hentai.org/index.php?showuser=2725435
// @version      0.2
// @description  Embeding the torrent window in the original gallary
// @author       someguywith
// @match        https://e-hentai.org/g/*
// @match        https://exhentai.org/g/*
// ==/UserScript==
/*
TO-DO
  Make the objects fit better
  Make both objects the same size, or atleast make the border look the same size.
*/
var link = window.location.href;
var regex = new RegExp("https:\/\/e(?<id>.)hentai.org\/g\/(?<gid>.*)\/(?<gt>.*?)\/");
var matches = regex.exec(window.location.href);
var gid = matches.groups.gid;
var gt = matches.groups.gt;
var site = matches.groups.id;
var torrent = document.createElement("div");
var torrentobj = '<object type="text/html" data="https://e' +site+ 'hentai.org/gallerytorrents.php?gid=' + gid + '&t=' + gt + '" width="675" height="582"></object>';
var expurgeobj = '<object type="text/html" data="https://e' +site+ 'hentai.org/gallerypopups.php?gid=' + gid + '&t=' + gt + '&act=expunge" width="675" height="582"></object>';

torrent.innerHTML = '<div style="width:100%; overflow:hidden;"> ' + torrentobj + expurgeobj + '</div>';

document.body.insertBefore(torrent, document.querySelector(".gm").nextElementSibling);
