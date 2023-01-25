function solve(n) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (n >= 1 && n <= 7) {
        console.log(day[n - 1]);
    } else {
        console.log('Invalid day!');
    }
}
solve(7);