function solve(arr) {
    let currArr = arr;
    while (currArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < currArr.length; i++) {
            let firstElement = currArr[i];
            let secondElement = currArr[i + 1];
            newArr.push(firstElement + secondElement);
        }
        currArr = newArr;
    }
    console.log(currArr);
}

