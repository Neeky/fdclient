function getCompanyInfo(){
    target='http://www.financedatas.com/component/cninfo/add/company/';
    var companys=document.getElementsByClassName("company-list");// 所以公司 [ul,ul,ul,...]

    var tmp=companys[0].getElementsByTagName('li'); // 深市主版 [li,li,li,...]
    var sszb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='深市主板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        console.log(JSON.stringify(dts));
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    tmp=companys[1].getElementsByTagName('li'); // 中小企业板 [li,li,li,...]
    var zxqyb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='中小企业板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    tmp=companys[2].getElementsByTagName('li'); // 创业板 [li,li,li,...]
    var cyb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='创业板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    tmp=companys[3].getElementsByTagName('li'); // 沪市主板 [li,li,li,...]
    var hszb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='沪市主板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    tmp=companys[4].getElementsByTagName('li'); // 香港主板 [li,li,li,...]
    var xgzb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='香港主板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    tmp=companys[5].getElementsByTagName('li'); // 香港创业板 [li,li,li,...]
    var xgcyb=[];
    for(var i=0;i<tmp.length;i++){
        var stockCode=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(0,6).trim();;
        var companyName=tmp[i].getElementsByTagName('a')[0].innerHTML.slice(6).trim();;
        var mainPage=tmp[i].getElementsByTagName('a')[0].href.trim();;
        var partition='香港创业板';
        var dts={
            'stockCode':stockCode,
            'companyName':companyName,
            'mainPage':mainPage,
            'section':partition,
            'target':target
        };
        chrome.runtime.sendMessage(dts, function(response){
            //*/
            // 当收到background的响应时，就关闭当前的tab。
            // window.close();
            //*/
        });
    }

    

}
getCompanyInfo();

