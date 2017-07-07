function getHistory(){
    //*/
    var tb=document.getElementsByTagName('table')[0];
    var index=null;
    var row=null;
    for(var i=0;i<tb.rows.length;i++){
        var contract=tb.rows[i].cells[0].innerText;
        if(contract=='Au99.99'){
            console.log(contract);
            index=i;
            row=tb.rows[i];
        }
    }
    var data={};
    data['contract']=row.cells[0].innerText;
    data['openingPrice']=row.cells[1].innerText;
    data['highestPrice']=row.cells[2].innerText;
    data['minimumPrice']=row.cells[3].innerText;
    data['closingPrice']=row.cells[4].innerText;
    var sp=document.getElementsByTagName('span')[13];
    dt=sp.innerText.split(':')[1];
    data['pushDate']=dt;
    data['target']='http://www.workstudio.com/'
    console.log(data);
    //*/
}

getHistory();

