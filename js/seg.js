/*/
seg.js 用于完成对上海黄金交易所金价的收集
    1、定位到记录着金价的表
    2、抽取出innerText值
    3、抽取出合约(au99.99)和它对应的价格
//*/

dts={};
tb=document.getElementById("tableinfo").childNodes[1].childNodes[0].childNodes[0];
// 去掉空白
text=tb.innerText.replace('	',',');
text=text.replace('	',',');
text=text.replace('	',',');
text=text.replace('	',',');
// 取第一行
text=text.split('\n')[0];

// 抽取数据
dts['contract']=text.split(',')[0];
dts['openingPrice']=text.split(',')[1];
dts['closingPrice']=text.split(',')[2];
dts['highestPrice']=text.split(',')[3];
dts['minimumPrice']=text.split(',')[4];
dts['target']='http://www.financedatas.com/component/glod/webclient/upload/';

// 如果还没有收盘，那么收盘价会被记为'-'；在这里判断如果收盘价是'-'，那么就把它设置为-1
if(dts['closingPrice']=='-'){
    dts['closingPrice']=-1;
}

chrome.runtime.sendMessage(dts, function(response){
    //*/
    // 当收到background的响应时，就关闭当前的tab。
    window.close();
    //*/
});


