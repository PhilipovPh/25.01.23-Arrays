function solve(index) {
    let sum = 0;

    for (let i = 0; i < index.length; i++) {
        if (index[i] % 2 ===0) {
            sum += Number(index[i]);
        }
        
    }
    console.log(sum);
}

solve(['2','4','6','8','10'])