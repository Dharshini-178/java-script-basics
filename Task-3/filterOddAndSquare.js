const numbers = [2, 5, 8, 11, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {      
        const square = numbers[i] * numbers[i]; 
        console.log(square);
    }
}
