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



document.getElementById('btnGetCompanyList').addEventListener('click',function (){
    // 
    function funa(){
        var xhr=new XMLHttpRequest();
        xhr.open('GET','http://www.financedatas.com/component/cninfo/get/task/');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onreadystatechange = function(){
　　　　        if ( xhr.readyState == 4 && xhr.status == 200 ) {
                console.log(xhr.response.company);
                if(xhr.response.company[1] != 0){
                    chrome.tabs.create({url:xhr.response.company[1]});
                }
　　　　    } 
　　      };
    };
    // funa();
    setInterval(funa,3000);
});

