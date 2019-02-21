function solve(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            newArr.push(array[i]);
        } else {
            newArr.unshift(array[i]);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}