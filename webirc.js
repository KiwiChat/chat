/* 
 * ShowChat www.showchat.tk by BaiatRau (qwebirc)
 */

'use strict';

function build_embed_src() {
    // Variables
    const base_url = 'https://irc.romaniachat.eu';
	const port = '9090';
	const nick = 'RomaniaChat..';
	const channels = 'Romania,RadioClick';
	const conect = '1';  /* 1 sau 0 */
	const tema = 'd4'; /* d4 - MTE9MzY5cf */
	

    // Get page URL information
    let url = new URL(window.location);
    // Construct the iframe src URL
    let src = base_url;
	if (port) {
        src += ':' + port;
    }
	if (nick) {
        src += '/?nick=' + nick;
    }
	 if (channels) {
        src += '&channels=' + channels;
    }
	if (conect) {
        src += '&prompt=' + conect;
    }
	if (tema) {
        src += '&uio=' + tema;
    }
    return src;
}
function change_embed_dimensions() {
    let embed = document.getElementById('chat-iframe');
    embed.setAttribute('height', window.innerHeight);
    embed.setAttribute('width', window.innerWidth);
}
