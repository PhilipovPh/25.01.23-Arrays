function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
       arr[i] = Number(arr[i]);

       if (arr[i] % 2 === 0) {
        evenSum += arr[i];
       } else {
        oddSum += arr[i];
       }
    }
    let difference = evenSum - oddSum;
    console.log(difference);
}
solve([3,5,7,9]);