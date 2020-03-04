function sum(num1, num2) {
    console.log(arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
        
    }

    const a = [...arguments]
    console.log(a)
    
    return num1 + num2;

    
}

sum(1,3,5,6)
