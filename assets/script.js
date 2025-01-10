let emissioniTotali = 0;
let emissioniCarbonio = 0;

document.getElementById("button").addEventListener("click", function() {
    const consumoEnergetico = parseFloat(document.getElementById("energia").value);

    if(isNaN(consumoEnergetico) || consumoEnergetico <= 0) {
        document.getElementById("risultato").innerText = "Inserisci un consumo!";
    }else{
        const coefficienteCO2 = 0.233;
        emissioniTotali = consumoEnergetico * coefficienteCO2;
    
        document.getElementById("risultato").innerText = `Le tue emissioni di CO2 sono: ${emissioniTotali.toFixed(2)} kg.`;
    };

    calcolaTotale();
})

document.getElementById("button1").addEventListener("click", function() {
    const kmPercorsi = parseFloat(document.getElementById("km").value);

    if(isNaN(kmPercorsi) || kmPercorsi <= 0) {
        document.getElementById("risultato1").innerText = "Inserisci i km percorsi!";
    }else{
        const coefficienteCO2b = 0.21;
        emissioniCarbonio = kmPercorsi * coefficienteCO2b;

        document.getElementById("risultato1").innerText = `Le tue emissionicarbonio sono di: ${emissioniCarbonio.toFixed(2)} kg.`;
    };

    calcolaTotale();
})

function calcolaTotale() {
    const totaleEmissioni = emissioniTotali + emissioniCarbonio;
    document.getElementById("totale").innerText = `Le tue emissioni totali sono di: ${totaleEmissioni.toFixed(2)} kg`;
}
