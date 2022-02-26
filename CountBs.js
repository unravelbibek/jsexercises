/*
Question : 


*/ 

function countChar(stringToBeCounted, match) {
    let counted = 0;
    for (let i = 0; i < stringToBeCounted.length; i++) {
      if (stringToBeCounted[i].toUpperCase() == match.toUpperCase()) {
        counted += 1;
      }
    }
    return counted;
  }
  
  console.log(countChar("Subedi Bibek", "K"));