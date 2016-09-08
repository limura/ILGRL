document.addEventListener( "contextmenu", function(event) {
    var node = event.target;
    var limit = 5;
    while ( node && ( limit-- > 0 ) ) {
        if ( node.nodeName === "A" && node.href != undefined ) {
            chrome.extension.sendMessage(node.innerText);
            return true;
        } else {
            node = node.parentNode;
        }
    }
}, false);
