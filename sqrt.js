var prompt = require("prompt-sync")();

function sqrt(a) {
    return (Math.sqrt(a));
} //Fungsi Akar Kuadrat

const a = prompt('Input number : ');

if (a < 0){
    console.log("idak bisa input bilangan negatif");
} else if (a%2 != 0){
    console.log("Tidak bisa input bilangan ganjil");
} else{
    console.log(sqrt(a));  
}

  