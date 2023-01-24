let a = 0;

naik.onclick =  function () {
    a++;
    document.querySelector("h1").innerHTML = a;
}

down.onclick =  function () {
    if (a > 0) {
        a--;
        document.querySelector("h1").innerHTML = a;
    }
}
