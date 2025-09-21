function filterNumbers(numbers) {
    return numbers.filter(num => num > 10);
}
const numbers = [2, 5, 8, 11, 15, 20, 25];
console.log(filterNumbers(numbers));