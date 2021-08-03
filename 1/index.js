var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var flag=true;
//console.log(Object.keys(obj1).length);
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1){
        //console.log(obj1[key]);
        //console.log(obj2[key]);
        if(obj1[key]==obj2[key]){
            continue;
        }
        else{
            flag=false;
            break;
        }
    }
}
else{
    flag=false;
}
console.log('objects are'+' '+flag);