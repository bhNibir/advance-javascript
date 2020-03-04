// Falsely value 
// 0
// ""
// false
// undefined
// null
// NaN

// truly Value
// [] empty array true
// {} empty object

// " " space is true

let value = 0;

if (value) {
    console.log(`${value} is truthy value`);
    
}
else{
    console.log(`${value} is falsely value`);
    
}
