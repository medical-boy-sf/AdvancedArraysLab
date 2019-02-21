function solve(array) {
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let sum = firstElement + lastElement;
    return sum;
}