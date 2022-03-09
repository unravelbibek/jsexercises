function deepComparison(first, second, indentation='') {
    if (typeof first === typeof second) {
        if (typeof first === "object") {
      if (first !== null) {
        firstKeys = Object.keys(first);
        secondKeys = Object.keys(second);
        if (firstKeys.length == secondKeys.length) {
          trackInequalities = [];
          for (i=0; i<=firstKeys.length-1; i++) {
            trackInequalities.push(deepComparison(first[firstKeys[i]],second[secondKeys[i]], '    '));
          }
          return !trackInequalities.includes(false)
        } else {
          
          return false;
        }  
      } else {
        
        return true; 
      }
        } else {
            return first === second
        }
    } else {
        return false;
    }
}

console.log(deepComparison({bibek:'subedi'},{bibek:'subedi'}))
console.log(deepComparison({bibek:'dai'},{bibek:'subedi'}))