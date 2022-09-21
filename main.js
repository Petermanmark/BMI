function bmicalc(){
    let testsuly = parseFloat(document.getElementById('testsuly').value);
    let magassag = document.getElementById('magassag').value;
    let szamitas = testsuly / (magassag / 100) ** 2;
    document.getElementById('eredmeny').textContent = szamitas.toFixed(1);
    let table = document.getElementById('table');
    let testvege = document.getElementById('testsulyvege').textContent = testsuly;
    let szelsoertekplus = document.getElementById('szelsoertekplus').textContent = testsuly + 10;
    let szelsoertekminus = document.getElementById('szelsoertekminus').textContent = testsuly - 10;

    if (szamitas < 18.5) {
        table.children[0].classList.toggle
    }
    else if(szamitas > 18.5 || szamitas < 24.9){

    }
    else if(szamitas > 30 || szamitas < 34.9){

    }
    else if(szamitas > 35 || szamitas < 39.9){

    }
    else{

    }
}

function init(){
    document.getElementById('szamitas').addEventListener('click', bmicalc)
    document.getElementById('testsulyvege').addEventListener('input', bmicalc)
    document.getElementById('szelsoertekplus').addEventListener('input', bmicalc)
    console.log('Init');
}

document.addEventListener('DOMContentLoaded', init);
console.log("JS fájl vége");