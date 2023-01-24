let btn = document.querySelectorAll(".btn-angka > button");
let mat = document.querySelectorAll(".btn-mat > button");
let output = document.querySelector("#output");
let pilihan = null;
let x;
let y;
let hasil;
// output.value = btn[5].innerHTML;

// console.log(mat);

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = function () {
        // console.log(btn[index].innerHTML);
        if (output.value == "0") {
            output.value = btn[index].innerHTML;
        } else {
            output.value += btn[index].innerHTML;
        }
    }
    
}

mat[0].onclick = function () {
    output.value = "0";
    pilihan = null;
}

mat[1].onclick = function () {
    pilihan = 'tambah';
    x = output.value;
    output.value = "0";
}
mat[2].onclick = function () {
    pilihan = 'kurang';
    x = output.value;
    output.value = "0";
}
mat[3].onclick = function () {
    pilihan = 'kali';
    x = output.value;
    output.value = "0";
}
mat[4].onclick = function () {
    pilihan = 'bagi';
    x = output.value;
    output.value = "0";
}
mat[5].onclick = function () {
    y = output.value;
    output.value = kalkulator(pilihan);
}
    
function kalkulator(pilihan) {
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);
                break;
        }
        return hasil;
    }
}