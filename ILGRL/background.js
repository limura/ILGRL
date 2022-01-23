var NORMAL_SEARCH = "normal_search";
var IM_FEELING_LUCKEY = "im_fealing_luckey";
var SEARCH_QUERY = "https://www.google.com/search?q=";
var IM_FEELING_LUCKY_QUERY = "https://www.google.co.jp/search?btnI=I%27m+Feeling+Lucky&q=";


var linkText = undefined;

// add context menu
chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"type": "normal"
		// TODO: chrome.i18n.getMessage が service worker でも動くようになったらこのコメントを外して多国語化する。
		, "title": "リンクの文字列を検索"//chrome.i18n.getMessage("ContextMenuText_NormalSearch")
		, "id": NORMAL_SEARCH
		, "contexts": ["link"]
		, "documentUrlPatterns": ["http://*/*", "https://*/*"]
	});
	chrome.contextMenus.create({
		"type": "normal"
		// TODO: chrome.i18n.getMessage が service worker でも動くようになったらこのコメントを外して多国語化する。
		, "title": "リンクの文字列を検索 (I'm Feeling Lucky)"//chrome.i18n.getMessage("ContextMenuText_ImFeelingLuckySearch")
		, "id": IM_FEELING_LUCKEY
		, "contexts": ["link"]
		, "documentUrlPatterns": ["http://*/*", "https://*/*"]
	});
});

// add context menu clicke event handler
chrome.contextMenus.onClicked.addListener(function(info, tab){
	//console.log("context menu clicked", info, tab, linkText);
	if(info.menuItemId == IM_FEELING_LUCKEY){
		chrome.tabs.create({
			openerTabId: tab.id,
			url: IM_FEELING_LUCKY_QUERY + linkText
		});
	}else{
		chrome.tabs.create({
			openerTabId: tab.id,
			url: SEARCH_QUERY + linkText
		});
	}
});

// add message handler for content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	linkText = msg;
});
