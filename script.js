let algo = document.getElementById("algo");
let btn = document.getElementById("convert");
btn.addEventListener("click", convert);

let caracterePrime = ["'", "`", "’"];

function convert() {
    stock = algo.value;
    for(let i = 0; i < caracterePrime.length; i++) {
        stock = stock.replace(new RegExp(caracterePrime[i], "gi"), "i");
    }
    stock = stock.split(" ");
    affichage(stock);
}


function affichage(stock) {
    let result = document.getElementById("result");
    for(let i = 0; i < stock.length; i++) {
        let img = document.createElement("img");
        img.src = "move_rubiks_cube_3x3/" + stock[i] + ".png";
        result.appendChild(img);
    }
}

