function solve(array) {
    let k = array.shift();
    let message = '';
    for (let i = 0; i < k; i++) {
        message += array[i] + " ";
    }
    message = message.trim();
    console.log(message);

    message = '';

    for (let i = array.length - k; i < array.length; i++) {
        message += array[i] + " ";
    }

    message = message.trim();
    console.log(message);
}