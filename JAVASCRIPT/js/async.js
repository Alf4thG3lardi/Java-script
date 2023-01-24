document.querySelector("#klik").addEventListener("click", tampil);

async function tampil() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);

    const data = await res.json();

    let output = "<ul>";

    data.forEach(element => {
        console.log(element.name);
        output += `<li>${element.name}</li>`
    });

    output += "</ul>";
    document.querySelector("#isi").innerHTML= output;
}