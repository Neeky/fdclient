// popup.js

/*
// 点击browser_action的按钮时打开app的主页
chrome.browserAction.onClicked.addListener(function(tab){
    alert("hello world");
    // 解析出扩展页面的url
    mainPageUrl=chrome.extension.getURL('html/index.html');
    // 打开扩展页面
    chrome.tabs.create({url:mainPageUrl});
});
//*/

/*
document.getElementById("btnStartCollect").onclick(function(){
    alert("hello world");
    // 解析出扩展页面的url
    mainPageUrl=chrome.extension.getURL('../html/index.html');
    // 打开扩展页面
    chrome.tabs.create({url:mainPageUrl});
}); //*/