function solve(input) {
    let buff = '';

    for (let i = input.length - 1; i >= 0; i--) {
        buff += input[i] + ' ';
    }
    console.log(buff);
}