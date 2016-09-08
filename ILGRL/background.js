var NORMAL_SEARCH = "normal_search";
var IM_FEELING_LUCKEY = "im_fealing_luckey";
var SEARCH_QUERY = "https://www.google.com/search?q=";
var IM_FEELING_LUCKY_QUERY = "https://www.google.com/search?btnI=I'm Feeling Lucky&q=";

var linkText = undefined;

// add context menu
chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"type": "normal"
		, "title": chrome.i18n.getMessage("ContextMenuText_NormalSearch")
		, "id": NORMAL_SEARCH
		, "contexts": ["link"]
		, "documentUrlPatterns": ["http://*/*", "https://*/*"]
	});
//	chrome.contextMenus.create({
//		"type": "normal"
//		, "title": chrome.i18n.getMessage("ContextMenuText_ImFeelingLuckySearch")
//		, "id": IM_FEELING_LUCKEY
//		, "contexts": ["link"]
//		, "documentUrlPatterns": ["http://*/*", "https://*/*"]
//	});
});

// add context menu clicke event handler
chrome.contextMenus.onClicked.addListener(function(info, tab){
	//console.log("context menu clicked", info, tab, linkText);
	if(info.menuItemId == IM_FEELING_LUCKEY){
		window.open(IM_FEELING_LUCKY_QUERY + linkText);
	}else{
		window.open(SEARCH_QUERY + linkText);
	}
});

// add message handler for content script
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
	linkText = msg;
});

