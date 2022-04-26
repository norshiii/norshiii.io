function kalkulator() {
    areal = document.getElementById("areal").value;
    uVerdiGammel = document.getElementById("uverdiGammel").value;
    uVerdiNy = document.getElementById("uverdiNy").value;
    uteTemp = document.getElementById("utemp").value;
    inneTemp = document.getElementById("itemp").value;
    dager = document.getElementById("dager").value;

    differanse  = inneTemp - uteTemp;
    snittpris = 1.648; /* kr */

    varmetapGammelResultat = areal * uVerdiGammel * differanse * dager * 24 / 1000;
    varmetapNyResultat = areal * uVerdiNy * differanse * dager * 24 / 1000;

    document.getElementById("varmetapGammelRes").innerHTML = "mens de gamle vinduene dine ville brukt " + (areal * uVerdiGammel * differanse * dager * 24 / 1000) + " kwh på samme tidsrom per vindu";
    document.getElementById("varmetapNyRes").innerHTML = "Om du bytter vinduer vil du bruke " + (areal * uVerdiNy * differanse * dager * 24 / 1000) + " kwh mindre på " + dager + " dager";
    wattDiff = varmetapGammelResultat - varmetapNyResultat; /* i kwh */
    document.getElementById("fortjeneste").innerHTML = "Du vil da spare " + (wattDiff * 1.648) + "kr på " + dager + " dager" + "",""
}

function temperaturdiff() {
    inneTemp = document.getElementById("itemp").value;
    uteTemp = document.getElementById("utemp").value;
    document.getElementById("tempdiff").innerHTML = inneTemp - uteTemp + " °C forskjell mellom inne- og ute-temperatur";
}
