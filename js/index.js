//*

document.getElementById("btnShiborCollect").addEventListener('click',function(){
    // 打开扩展页面
    // alert("hello click...");
    chrome.tabs.create({url:"http://www.shibor.org/shibor/web/html/shibor.html#"});
}); //*/

document.getElementById("btnSegCollect").addEventListener('click',function(){
    // 打开扩展页面
    // alert("hello click...");
    chrome.tabs.create({url:"http://www.sge.com.cn/"});
}); //*/

document.getElementById("btnReserveCollect").addEventListener('click',function(){
    chrome.tabs.create({url:"http://www.pbc.gov.cn/diaochatongjisi/resource/cms/2017/06/2017060716033391362.htm"});
});


