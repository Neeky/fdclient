/*
    在公司的信息披露主页要执行的逻辑...

    1、页面由一个iframe 来引用信息、在查看特写信息时、只是重新加载相关的iframe
*/

var target='http://www.workstudio.com';

function getLastest(){
    /*
    收集lastest 页面的数据

    */
}

function getBrief(){
    /*
    收集brief 页面的数据
    */
    var stockCodeTable=document.getElementById('i_nr').contentDocument.getElementsByTagName('table')[0];
    var stockCode=stockCodeTable.rows[0].cells[0].innerText;
    //  这个时候的stockCode大概是这个样子的 
    //  股票代码：000625 股票简称：长安汽车
    //  为了得到证券代码，所以先把'股票代码' & '股票简称' 去掉；然后再用 ':'号分隔出想要的值
    stockCode=stockCode.replace('股票代码','').replace('股票简称','');
    stockCode=stockCode.split('：')[1].trim();

    //  第一个class:clear div 中的第一个table 保存着公司的简介信息.
    var briefTable=document.getElementById('i_nr').contentDocument.getElementsByClassName('clear')[0].getElementsByTagName('table')[0];
    var briefInfo={};
    briefInfo['stockCode']=stockCode;
    //  fullName 公司全称
    briefInfo['fullName']=briefTable.rows[0].cells[1].innerText.trim();
    //  enlishName 英文名称
    briefInfo['enlishName']=briefTable.rows[1].cells[1].innerText.trim();
    //  registeredAddress 注册地址
    briefInfo['registeredAddress']=briefTable.rows[2].cells[1].innerText.trim();
    //  briefName 公司简称
    briefInfo['briefName']=briefTable.rows[3].cells[1].innerText.trim();
    //  legalPerson  法定代表人
    briefInfo['legalPerson']=briefTable.rows[4].cells[1].innerText.trim();
    //  secretaries  董秘
    briefInfo['secretaries']=briefTable.rows[5].cells[1].innerText.trim();
    //  egisteredCapital  注册资本
    var egisteredCapital=briefTable.rows[6].cells[0].innerText.trim();
    var i=egisteredCapital.indexOf('万元');
    if(i != -1){
        //  注册资本以万元为单位
        egisteredCapital=briefTable.rows[6].cells[1].innerText.trim().replace(',','');
        egisteredCapital=parseFloat(egisteredCapital) * 10000;
    }
    else{
        //  注册资本以元为单位
        egisteredCapital=briefTable.rows[6].cells[1].innerText.trim().replace(',','');
        egisteredCapital=parseFloat(egisteredCapital);
    }
    briefInfo['registeredCapital']=egisteredCapital;
    //  industry  行业种类
    briefInfo['industry']=briefTable.rows[7].cells[1].innerText.trim();
    //  postalCode 邮政编码
    briefInfo['postalCode']=briefTable.rows[8].cells[1].innerText.trim();
    //  companyPhone 公司电话
    briefInfo['companyPhone']=briefTable.rows[9].cells[1].innerText.trim();
    //  companyFax  公司传真
    briefInfo['companyFax']=briefTable.rows[10].cells[1].innerText.trim();
    //  companyWebsite 公司网站
    briefInfo['companyWebsite']=briefTable.rows[11].cells[1].innerText.trim();
    //  listingTime  上市时间
    briefInfo['listingTime']=briefTable.rows[12].cells[1].innerText.trim();
    //  prospectusTime  招股时间
    briefInfo['prospectusTime']=briefTable.rows[13].cells[1].innerText.trim();
    //  issuedQuantity 发行股数
    var issuedQuantity=briefTable.rows[14].cells[0].innerText.trim();
    if(issuedQuantity.indexOf('万股')!=-1){
        //  说明发行股数心‘万股’为单位
        issuedQuantity=briefTable.rows[14].cells[1].innerText.trim();
        issuedQuantity=issuedQuantity.replace(',','');
        issuedQuantity=parseFloat(issuedQuantity)*10000;
    }
    else{
        issuedQuantity=briefTable.rows[14].cells[1].innerText.trim();
        issuedQuantity=issuedQuantity.replace(',','');
        issuedQuantity=parseFloat(issuedQuantity);      
    }
    briefInfo['issuedQuantity']=issuedQuantity;
    //  issuePrice  发行价格
    var issuePrice=briefTable.rows[15].cells[1].innerText.trim();
    briefInfo['issuePrice']=parseFloat(issuePrice);
    //  ipoPERate  发行市盈率
    var ipoPERate=briefTable.rows[16].cells[1].innerText.trim();
    if(! ipoPERate){
        ipoPERate=0;
    }
    briefInfo['ipoPERate']=parseFloat(ipoPERate);

    //  issueMode  发行方式
    briefInfo['issueMode']=briefTable.rows[17].cells[1].innerText.trim();
    //  leadUnderwrite 主承销商
    briefInfo['leadUnderwrite']=briefTable.rows[18].cells[1].innerText.trim();
    //  issueRecommender  上市推荐人
    briefInfo['issueRecommender']=briefTable.rows[19].cells[1].innerText.trim();
    //  sponsor
    briefInfo['sponsor']=briefTable.rows[20].cells[1].innerText.trim();
    briefInfo['target']=target+'/component/cninfo/update/company/brief/info';

    var dts=briefInfo;
    //alert(JSON.stringify(dts));
    console.log(JSON.stringify(dts));
    chrome.runtime.sendMessage(dts, function(response){
    //*/
    // 当收到background的响应时，就关闭当前的tab。
        //alert("this is callback");
        window.close();
    //*/
    });
    //console.log(briefTable);
}


function main (){
    document.getElementById('i_nr').onload=getBrief;
    document.getElementById('brief').getElementsByTagName('a')[0].click();
}

main();

