
var target="http://www.financedatas.com/component/pbc/webclient/upload/"

function MoneySupply(){
    //  找到货币供应量所在的表
    var tbs=document.getElementsByTagName('table');
    var tb=tbs[0];
    //  找到最新记录在第几列
    var cellIndex=0;
    var pushDate='';
    var money2=-1; // M2
    var money1=-1; // M1
    var money0=-1; // M0
    for(var i=0;i<tb.rows[7].cells.length;i++){
        //console.log(i);
        if(tb.rows[7].cells[i].innerText){
            //console.log(tb.rows[7].cells[i].innerText);
            cellIndex=i;
        }

    }
    for(var j=0;j<tb.rows.length;j++){
        console.log(j);
        console.log(tb.rows[j]);
    }
    // 5 月份
    // 7 M2
    // 9 M1
    // 11 M0
    dts={};
    pushDate=tb.rows[5].cells[cellIndex].innerText;
    m2=tb.rows[7].cells[cellIndex].innerText;
    m1=tb.rows[9].cells[cellIndex+1].innerText;
    m0=tb.rows[11].cells[cellIndex+2].innerText;
    dts['pushDate']=pushDate;
    dts['m2']=m2;
    dts['m1']=m1;
    dts['m0']=m0;
    dts['target']=target;

    alert(JSON.stringify(dts));

}

function MoneySupplyInit(){
    // 在初始化货币供应量时用到，用于收集页面中的所有数据。
    var tbs=document.getElementsByTagName('table');
    var tb=tbs[0];
    // 用于保存所有月份的数据。
    var dts=[]
    for(var i=0;i<tb.rows[7].cells.length;i++){
        if(tb.rows[7].cells[i].innerText){
            maxIndex=i;
        }
    }
    for(var i=1;i<=maxIndex;i++){
        var pushDate=tb.rows[5].cells[i].innerText;
        var m2=tb.rows[7].cells[i].innerText;
        var m1=tb.rows[9].cells[i+1].innerText;
        var m0=tb.rows[11].cells[i+2].innerText;
        var dt={};
        dt['pushDate']=pushDate;
        dt['m2']=m2;
        dt['m1']=m1;
        dt['m0']=m0;
        dt['target']=target;
        dts.push(dt);
    }
    //console.log(dts);
    for(var i=0;i<dts.length;i++){
        alert(JSON.stringify(dts[i]));
        chrome.runtime.sendMessage(dts[i], function(response){
        //*/
        // 当收到background的响应时，就关闭当前的tab。
        //window.close();
        //*/
        });
    }
    
}

MoneySupplyInit();