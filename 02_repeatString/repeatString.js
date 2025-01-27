const repeatString = function(text, repetitons) {
    let newText ="";
    if (repetitons >= 0){
        for(let i = 0; i < repetitons; i++){
            newText+=text;
        }
        return newText;
    }else return "ERROR"
    
};


// Do not edit below this line
module.exports = repeatString;
