
//* 
// 点击browser_action的按钮时打开app的主页-------------------------
chrome.browserAction.onClicked.addListener(function(tab){
    // alert("hello world");
    // 解析出扩展页面的url
    mainPageUrl=chrome.extension.getURL('../html/index.html');
    // 打开扩展页面
    chrome.tabs.create({url:mainPageUrl});
});
//*/

//*/
// 发送数据到服务器------------------------------------------------
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    //*/
    // post数据到服务器
    var xhr = new XMLHttpRequest();
    xhr.open("POST", message['target'], true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Content-Length', JSON.stringify(message).length);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            /*/ 在收到服务器的回应后要触发的动作、目前不做回应。
            alert(xhr.responseText);
            //*/
        }
    }
    xhr.send(JSON.stringify(message));
    // 通知content_script关闭tab
    sendResponse('please close the tab');
    //*/
});
//*/