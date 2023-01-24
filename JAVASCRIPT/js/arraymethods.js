let nilai = [
    {nama: "budi", ipa: 90, math: 89, bahasa: 76},
    {nama: "jhoni", ipa: 76, math: 90, bahasa: 89},
    {nama: "bejo", ipa: 67, math: 77, bahasa: 98},
    {nama: "siti", ipa: 87, math: 99, bahasa: 79},
];

let nama = ['budi', 'jhoni', 'bejo', 'siti'];
// nama.push("neni", "nana");

// console.log(nama.shift());
// nama.unshift("bob","roki");

// console.log(nama.slice(0, 2));

// console.log(nama.splice(5, 2));
// console.log(nama.pop());
// console.log(nilai[0].nama);
// console.log(nama);

let mapel = ["ipa", "math", "bahasa"];

// console.log(nama.concat(['ips', 'pkn', 'sejarah']));

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
// }

// nama.forEach(function (a) {
//         console.log(a);
//     }
// )

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// })

// nilai.filter((a) => (a.ipa > 80 ? console.log(a) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })
// let siswa = nilai.map((a) => [a.nama, a.ipa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa)
// }, 0);

let hasil = nilai.reduce((a, b) => (a += b.ipa), 0);

console.log(hasil)