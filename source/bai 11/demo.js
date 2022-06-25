let a = 6
let b = 2
let s = 0;
if (a > b) {
    for (let i = a; i >= b; i--) {
        s = s + i;
    }
    document.getElementById('in').innerHTML = "Tổng các số từ " + a + " đến " + b + "= " + s
    console.log(s)
}
else  for (let i = a; i <= b; i++) {
    s = s + i;
}
document.getElementById('in').innerHTML = "Tổng các số từ " + a + " đến " + b + "= " + s
console.log(s)