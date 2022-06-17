function timMin(num) {
     num=[]
    min = num[0]
    for (i = 0; i < 3; i++) {
        if (num[i] <= min) {
            min = num[i]
        }
    }
    return min
}
let arr = []
for(i=0;i<3;i++){
    let num = +prompt("Nhập vào 1 số nguyên:")
    arr.push(num)
}
console.log(arr)
console.log(timMin(arr))