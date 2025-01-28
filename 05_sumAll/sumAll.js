const sumAll = function(lowerBound,upperBound) {
    if ( lowerBound % 1 === 0 && upperBound % 1 === 0 && typeof lowerBound === "number" && typeof upperBound === "number" && lowerBound >= 0 && upperBound >= 0){
        if (lowerBound > upperBound){
            let temporaryStorage = upperBound;
            upperBound = lowerBound;
            lowerBound = temporaryStorage;
        }  
        for (let i = lowerBound+1; i <= upperBound; i++)
        {
            lowerBound+=i;
        }
        return lowerBound;
    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
