function solve(arr1, arr2) {
    let sum1 = 0;
    let areEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            areEqual = true;
        }
    }

    if (areEqual != false) {
        console.log(`Arrays are identical. Sum: ${sum1}`);
    }
}
solve(['10','20','30'], ['10','10','30']);