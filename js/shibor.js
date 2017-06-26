/*
shibor.js用于完成对shibor利率的收集
    1、定位到shibor所在的table元素-->getElementsByClassName("shiborquxian")[0]
    2、从第0行开始到第7行依次oneNight oneWeek twoWeek oneMonth threeMonth sixMonth nineMonth oneYear
    3、第0列为对应基期的利率
*/

// class 等于shiborquxian的table只有一个
quxian=document.getElementsByClassName("shiborquxian")[0];
// 把利率收集到tmp中
tmp=[];
for(var i=0;i<8;i++){
    tmp[i]=quxian.rows[i].cells[2].innerHTML;
}
// 包装成对象 datas(dts)
dts={};
dts['oneNight']=Number(tmp[0]);
dts['oneWeek']=Number(tmp[1]);
dts['twoWeek']=Number(tmp[2]);
dts['oneMonth']=Number(tmp[3]);
dts['threeMonth']=Number(tmp[4]);
dts['sixMonth']=Number(tmp[5]);
dts['nineMonth']=Number(tmp[6]);
dts['oneYear']=Number(tmp[7]);
dts['target']='shibor';
// 把数据保存成json
jdts=JSON.stringify(dts);
//*/ 
// 发送数据到后台
chrome.runtime.sendMessage(jdts, function(response){
    //*/
    // 当收到background的响应时，就关闭当前的tab。
    window.close();
    //*/
});
//*/