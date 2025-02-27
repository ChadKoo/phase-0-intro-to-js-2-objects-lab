const employee = {
    name: "Ashley",
    streetAddress: "19 Wall St."
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = { ...obj };
    newObj[key] = value;  
    return newObj 
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj
}
function deleteFromEmployeeByKey(obj,key){
    const { [key]: _, ...newObj } = obj;
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj
}