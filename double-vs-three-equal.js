const a = 1;
const b = true;
 // akhane jeno kono akta value type cast kore tarpor check kore...tai 1 r true same value
if (a==b ) { // result True
    console.log("Condition is True");
    
} else {
    console.log("Condition is false");
    
}

//better style === use kora
if (a===b)  {  // result False
    console.log("Condition is True");
    
} else {
    console.log("Condition is false");
    
}