/*/
完成对中国人民银行官方储备资产的数据收集
//*/

function getCurrentOfficeReserveAssetInfo(){
    //当月官方储备资产信息收集
    
    // 准备
    var dts={};
    var tb=document.getElementsByTagName('table')[0];
    var tmp=[];
    var foreignCurrentReservesRow=tb.rows[5];
    var imfReservesRow=tb.rows[6];
    var sdrReservesRow=tb.rows[7];
    var goldReservesRow=tb.rows[9];
    var otherReservesRow=tb.rows[10];
    var totalReservesRow=tb.rows[11];
    var value=0;

    // 外汇储备
    tmp=[];
    value=0;
    for(var i=1;i<foreignCurrentReservesRow.cells.length;i=i+2){
        // 遍历收集不为空的值，那么有多少个值就相关于公布了多少个月
        value=foreignCurrentReservesRow.cells[i].innerText;
        if(value != ''){
            tmp.push(value);
        }
    }
    dts['foreignCurrentReserve']=Number(tmp[tmp.length - 1]);
    dts['month']=tmp.length;
    
    // 基金组织储备头寸
    tmp=[];
    value=0;
    for(var i=1;i<imfReservesRow.cells.length;i=i+2){
        value=imfReservesRow.cells[i].innerText;
        if(value !=''){
            tmp.push(value);
        }
    }
    dts['imfReserve']=Number(tmp[tmp.length-1]);

    // 特别提款权
    tmp=[];
    value=0;
    for(var i=1;i<sdrReservesRow.cells.length;i=i+2){
        value=sdrReservesRow.cells[i].innerText;
        if(value !=''){
            tmp.push(value);
        }
    }
    dts['sdrReserve']=Number(tmp[tmp.length-1]);

    // 黄金
    tmp=[];
    value=0;
    for(var i=1;i<goldReservesRow.cells.length;i=i+2){
        value=goldReservesRow.cells[i].innerText;
        if(value != ''){
            value=parseFloat(goldReservesRow.cells[i].innerText);
            tmp.push(value);
        }
    }
    dts['goldReserve']=tmp[tmp.length -1];

    // 其他储备资产
    tmp=[];
    value=0;
    for(var i=1;i<otherReservesRow.cells.length;i=i+2){
        value=otherReservesRow.cells[i].innerText;
        if(value != ''){
            tmp.push(value);
        }
    }
    dts['otherReserve']=Number(tmp[tmp.length -1]);

    // 总资产
    tmp=[];
    value=0;
    for(var i=1;i<totalReservesRow.cells.length;i=i+2){
        value=totalReservesRow.cells[i].innerText;
        if(value != ''){
            tmp.push(value);
        }
    }
    dts['totalReserve']=Number(tmp[tmp.length -1]);

    jdts=JSON.stringify(dts);
    alert(jdts);

    chrome.runtime.sendMessage(jdts, function(response){
    //*/
    // 当收到background的响应时，就关闭当前的tab。
    window.close();
    //*/
    });
}

getCurrentOfficeReserveAssetInfo();

