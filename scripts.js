


// kintamuju sarasas pradzia

let patiekalai = document.getElementById('patiekaluSarasas')

let pirmasPatiekalas = document.getElementById('pirmasPatiekalas')

let antrasPatiekalas = document.getElementById('antrasPatiekalas')

let treciasPatiekalas = document.getElementById('treciasPatiekalas')

let var1 = document.getElementById("var1")

let var2 = document.getElementById("var2")

let var3 = document.getElementById("var3")


var slider = document.getElementById("myRange");

var output = document.getElementById("output");

// kintamuju sarasas pabaiga


// receptai pradzia

const receptasPirmas = {

    produktai: ['Vištienos krūtinėlė', 'romaninės salotos', 'Fetos sūris', 'Alyvuogių aliejus'],
    kiekis: [180, 100, 50, 1],
    vienetas: ['g', 'g', 'g', 'šaukštai']
}

const receptasAntras = {

    produktai: ['Mėlynės', 'Varškė', 'Sviestas', 'Kondensuotas pienas'],
    kiekis: [100, 200, 50, 50],
    vienetas: ['g', 'g', 'g', 'ml']
}

const receptasTrecias = {

    produktai: ['Malta mėsa', 'Pomidorai', 'Makaronai', 'Vanduo'],
    kiekis: [100, 100, 200, 150],
    vienetas: ['g', 'g', 'g', 'ml']
}


// receptai pabaiga


// slideris pradzia


output.innerHTML = (`${slider.value} porcijos (-ų)`);


slider.oninput = function () {
    output.innerHTML = (`${this.value} porcijos (-ų)`);
    if (var1.style.display === "block") {receptoPasirinkimas(1)}
    else if (var2.style.display === "block") {receptoPasirinkimas(2)}
    else if (var3.style.display === "block") {receptoPasirinkimas(3)}


}

// slideris pabaiga




function receptoPasirinkimas(number) {
    let masyvas;
    let rezultatas = document.querySelector(".rezultatas");
    rezultatas.innerHTML = "";

    if (number === 1) {
        var1.style.display = "block";
        var2.style.display = "none";
        var3.style.display = "none";

        masyvas = receptasPirmas;
    } else if (number === 2) {
        var2.style.display = "block";
        var1.style.display = "none";
        var3.style.display = "none";

        masyvas = receptasAntras;
    } else if (number === 3) {
        var3.style.display = "block";
        var1.style.display = "none";
        var2.style.display = "none";

        masyvas = receptasTrecias;
    }


    for (let i = 0; i < masyvas.produktai.length; i++) {
        rezultatas.innerHTML +=
            `<p>${masyvas.produktai[i]}: <span class="ingredintukiekiai">${masyvas.kiekis[i] * slider.value}</span> 
            <span class="ingredintukiekiai">${masyvas.vienetas[i]}</span></p>`;
    }
}

