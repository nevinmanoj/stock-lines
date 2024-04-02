
export const  csvJSON =(csv) =>{
    //Item, qty. buy date, buy price, sell date, sell price
    var lines = csv.split("\n");
  
    var jlist = [];

    var headers = lines[0].split(",");
   
    for (var i = 1; i < lines.length; i++) {

        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            if(currentline[j]===""){
                obj[headers[j]]="nan"  
            }
            else{
                obj[headers[j]] = currentline[j];
            }
           
        }

        jlist.push(obj);
    }
    console.log(jlist);
     
  
    var today =new Date()
    var finalData={};
    for(var a=0;a<jlist.length;a++){
        var item=jlist[a];
        // var x=new Date(item.buydate);
        var x = parse(item["buydate"]);
        
        var y=today;
        if(item.selldate!=="nan"){
            
              y = parse(item["selldate"]);
              console.log(y);
        }
       
        while(y.getTime()>=x.getTime()){
                if(finalData[x]==undefined){
                    // finalData[x]={"invested":0,"market":0}
                    finalData[x]=0;
                }
                // finalData[x]["invested"]=finalData[x]["invested"]+item.quantity*item.buyprice;
                finalData[x]=finalData[x]+item.quantity*item.buyprice;
                x.setDate(x.getDate() + 1);
            }
        
        
       

    }
    return finalData;
}


const parse=(dateStr)=>{
    if(dateStr==undefined)
     return
    let [day, month, year] = dateStr.split('-');
    // Parse the parts as integers
    day = parseInt(day, 10);
    month = parseInt(month, 10) - 1; // Subtract 1 because months are zero-based
    year = parseInt(year, 10);
    let date = new Date(year, month, day);
    return date
}