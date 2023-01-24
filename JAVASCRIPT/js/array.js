let selipan = function () {
    return "selipan";
}

let buah = ['mangga', 'jeruk', 'apel', 11, selipan(),
    (tes = () => "function in array"),
    function name() {
        return 'another one';
    },
];
console.log(buah);

for (let i in buah) {
    console.log(buah[i]);
};

console.log(buah[5]());
console.log(buah[6]());
