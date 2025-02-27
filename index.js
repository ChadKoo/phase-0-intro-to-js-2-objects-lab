const employee = {
    name: "Ashley",
    streetAddress: "19 Wall St."

};
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj; 

  }
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;

    return obj
}

function deleteFromEmployeeByKey(obj,key){
        // Destructure the object, excluding the specified key
        const { [key]: _, ...newObj } = obj;
        return newObj; // Return a new object without the specified key
}
function destructivelyDeleteFromEmployeeByKey(obj,key){
        delete obj[key];
        return obj
}