function solve(n, input) {
    let buff = '';

    for( let i = n - 1; i >= 0; i--) {
         buff += input[i] + ' ';
    }
    console.log(buff);
}

solve(3, [10, 20, 30, 40, 50])