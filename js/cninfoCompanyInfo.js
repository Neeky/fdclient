/*
    在公司的信息披露主页要执行的逻辑...

    1、页面由一个iframe 来引用信息、在查看特写信息时、只是重新加载相关的iframe
*/

var target = 'http://www.financedatas.com';
//var target ='http://www.workstudio.com';

function getLastest() {
    /*
    收集lastest 页面的数据

    */
}

function getBrief() {
    /*
    收集brief 页面的数据
    */
    console.log("进入 get brief 函数");
    var briefInfo = {};
    var stockcode = null;
    try {
        var stockCodeTable = document.getElementById('i_nr').contentDocument.getElementsByTagName('table')[0];
        var stockCode = stockCodeTable.rows[0].cells[0].innerText;
        //  这个时候的stockCode大概是这个样子的 
        //  股票代码：000625 股票简称：长安汽车
        //  为了得到证券代码，所以先把'股票代码' & '股票简称' 去掉；然后再用 ':'号分隔出想要的值
        stockCode = stockCode.replace('股票代码', '').replace('股票简称', '');
        stockCode = stockCode.split('：')[1].trim();

        //  第一个class:clear div 中的第一个table 保存着公司的简介信息.
        var briefTable = document.getElementById('i_nr').contentDocument.getElementsByClassName('clear')[0].getElementsByTagName('table')[0];
        briefInfo = {};
        briefInfo['stockCode'] = stockCode;
        stockcode = stockCode;
        //  fullName 公司全称
        briefInfo['fullName'] = briefTable.rows[0].cells[1].innerText.trim();
        //  enlishName 英文名称
        briefInfo['enlishName'] = briefTable.rows[1].cells[1].innerText.trim();
        //  registeredAddress 注册地址
        briefInfo['registeredAddress'] = briefTable.rows[2].cells[1].innerText.trim();
        //  briefName 公司简称
        briefInfo['briefName'] = briefTable.rows[3].cells[1].innerText.trim();
        //  legalPerson  法定代表人
        briefInfo['legalPerson'] = briefTable.rows[4].cells[1].innerText.trim();
        //  secretaries  董秘
        briefInfo['secretaries'] = briefTable.rows[5].cells[1].innerText.trim();
        //  egisteredCapital  注册资本
        var egisteredCapital = briefTable.rows[6].cells[0].innerText.trim();
        var i = egisteredCapital.indexOf('万元');
        if (i != -1) {
            //  注册资本以万元为单位
            egisteredCapital = briefTable.rows[6].cells[1].innerText.trim().replace(',', '');
            egisteredCapital = parseFloat(egisteredCapital) * 10000;
            if(egisteredCapital == null){
                egisteredCapital=0;
            }
        }
        else {
            //  注册资本以元为单位
            egisteredCapital = briefTable.rows[6].cells[1].innerText.trim().replace(',', '');
            egisteredCapital = parseFloat(egisteredCapital);
            if(egisteredCapital=null){
                egisteredCapital=0;
            }
        }
        briefInfo['registeredCapital'] = egisteredCapital;
        //  industry  行业种类
        briefInfo['industry'] = briefTable.rows[7].cells[1].innerText.trim();
        //  postalCode 邮政编码
        briefInfo['postalCode'] = briefTable.rows[8].cells[1].innerText.trim();
        //  companyPhone 公司电话
        briefInfo['companyPhone'] = briefTable.rows[9].cells[1].innerText.trim();
        //  companyFax  公司传真
        briefInfo['companyFax'] = briefTable.rows[10].cells[1].innerText.trim();
        //  companyWebsite 公司网站
        briefInfo['companyWebsite'] = briefTable.rows[11].cells[1].innerText.trim();
        //  listingTime  上市时间
        briefInfo['listingTime'] = briefTable.rows[12].cells[1].innerText.trim();
        //  prospectusTime  招股时间
        briefInfo['prospectusTime'] = briefTable.rows[13].cells[1].innerText.trim();
        //  issuedQuantity 发行股数
        var issuedQuantity = briefTable.rows[14].cells[0].innerText.trim();
        if (issuedQuantity.indexOf('万股') != -1) {
            //  说明发行股数心‘万股’为单位
            issuedQuantity = briefTable.rows[14].cells[1].innerText.trim();
            issuedQuantity = issuedQuantity.replace(',', '');
            issuedQuantity = parseFloat(issuedQuantity) * 10000;
            if(issuedQuantity == null){
                issuedQuantity=0;
            }
        }
        else {
            issuedQuantity = briefTable.rows[14].cells[1].innerText.trim();
            issuedQuantity = issuedQuantity.replace(',', '');
            issuedQuantity = parseFloat(issuedQuantity);
            if(issuedQuantity == null){
                issuedQuantity=0;
            }
        }
        briefInfo['issuedQuantity'] = issuedQuantity;
        //  issuePrice  发行价格
        var issuePrice = briefTable.rows[15].cells[1].innerText.trim();
        briefInfo['issuePrice'] = parseFloat(issuePrice);
        if (briefInfo['issuePrice'] == null){
            briefInfo['issuePrice']=0;
        }
        //  ipoPERate  发行市盈率
        var ipoPERate = briefTable.rows[16].cells[1].innerText.trim();
        if (!ipoPERate) {
            ipoPERate = 0;
        }
        briefInfo['ipoPERate'] = parseFloat(ipoPERate);

        //  issueMode  发行方式
        briefInfo['issueMode'] = briefTable.rows[17].cells[1].innerText.trim();
        //  leadUnderwrite 主承销商
        briefInfo['leadUnderwrite'] = briefTable.rows[18].cells[1].innerText.trim();
        //  issueRecommender  上市推荐人
        briefInfo['issueRecommender'] = briefTable.rows[19].cells[1].innerText.trim();
        //  sponsor
        briefInfo['sponsor'] = briefTable.rows[20].cells[1].innerText.trim();
        briefInfo['target'] = target + '/component/cninfo/update/company/brief/info';
        briefInfo['status'] = 'ok';
    }
    catch (error) {
        console.log('enter catch');
        briefInfo['stockCode'] = stockcode;
        briefInfo['status'] = 'shortinput';
        briefInfo['target'] = target + '/component/cninfo/update/company/brief/info';
        console.log('exit catch');
    }
    var dts = briefInfo;
    console.log('get Brief 收集到如下信息');
    console.log(JSON.stringify(dts));
    console.log('get Brief 准备把数据发向服务器');
    chrome.runtime.sendMessage(dts, function (response) {
        //*/
        console.log('get Brief 收到服务器的返回,正准备关闭tab');
        window.close();
        //*/
    });
}


function main() {
    console.log('main 进入页面的main函数');
    try {
        console.log('main 开始把处理逻辑到 i_nr.load事件');
        document.getElementById('i_nr').onload = getBrief;
        document.getElementById('brief').getElementsByTagName('a')[0].click();
        console.log('main 处理逻辑到 i_nr.load事件完成');
    }
    catch (error) {
        console.log('main 函数出现了异常');
        console.log(error);
        window.close();
    }

    function tm() {
        try {
            console.log('开始进入 main 函数的tm 函数');
            var briefInfo = {};
            var stockCodeTable = document.getElementById('i_nr').contentDocument.getElementsByTagName('table')[0];
            var stockCode = stockCodeTable.rows[0].cells[0].innerText;
            //  这个时候的stockCode大概是这个样子的 
            //  股票代码：000625 股票简称：长安汽车
            //  为了得到证券代码，所以先把'股票代码' & '股票简称' 去掉；然后再用 ':'号分隔出想要的值
            stockCode = stockCode.replace('股票代码', '').replace('股票简称', '');
            stockCode = stockCode.split('：')[1].trim();
            briefInfo['stockCode'] = stockCode;
            briefInfo['status'] = 'shortinput';
            briefInfo['target'] = target + '/component/cninfo/update/company/brief/info';
            var dts = briefInfo;
            console.log('this information is printed by tm function:')
            console.log(JSON.stringify(dts));
        }
        catch(error){
            console.log('tm 函数中遇到了异常');
        }
        chrome.runtime.sendMessage(dts, function (response) {
            //
            window.close();
            //
        });
        //window.location.href="about:blank";
        //window.close();
        window.open('','_self','');
        window.close();
    }
    setTimeout(tm, 8000);

}

main();

