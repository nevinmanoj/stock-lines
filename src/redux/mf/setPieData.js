


export const computePieData=(state,action)=>{
  var pData=[];
var counter={};
let tempSet = new Set();
var deets=action.payload
console.log(deets);
for(var i=0;i<deets.length;i++){
  
    for(var j=0;j<deets[i]["holdings"].length;j++){
        tempSet.add(deets[i]["holdings"][j]["company_name"]);
        // if(!(deets[i]["holdings"][j]["company_name"])){
        //     console.log(deets[i]["holdings"][j]);
        // }
        // if (counter[deets[i]["holdings"][j]["company_name"]]) {
        //     counter[deets[i]["holdings"][j]["company_name"]]++;
        //   } else {
           
        //     counter[deets[i]["holdings"][j]["company_name"]] = 1;
        //   }
    }
   
    tempSet.forEach(item => {
        if(counter[item]){
            counter[item]++;
        }else{
            counter[item]=1;
        }
       
    });

    tempSet.clear();
}
let countGroups = {};
 counter = new Map(Object.entries(counter));
counter.forEach((count, item) => {
  
    if (!countGroups[count]) {
      countGroups[count] = [];
    }
    
    countGroups[count].push(item);
  });
  var sData=[];
  for (let count in countGroups) {
    pData.push({ id: count, value: countGroups[count].length, label: "Common in " +count +" funds" });
    sData.push({ id: count, value: countGroups[count]});

  }
  state.pieData=pData;
  state.sideBarData=sData;
}