function nhapTen(){
    let name = document.getElementById("name").value;
    // var sex = confirm("Ban gioi tinh Nam phai khong");
    document.getElementById("demo").innerHTML = "Ho va ten la: " + name;
}
document.getElementById("name1").addEventListener("click", nhapTen);