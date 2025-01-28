const removeFromArray = function(array, ...args) {
    let elementPresent = true;
    while (elementPresent){
        for (arg of args){
            console.log(arg)
            if (array.indexOf(arg) !== -1){
                array.splice(array.indexOf(arg),1);
            }
        }
        if (array.indexOf(arg) == -1){
            elementPresent = false;
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
