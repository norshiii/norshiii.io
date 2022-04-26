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

    document.getElementById("varmetapGammelRes").innerHTML = "mens de gamle vinduene dine ville brukt " + (areal * uVerdiGammel * differanse * dager * 24 / 1000) + " kwh på samme tidsrom per vindu."; /*regner ut varmetapet i kwh på gamle config av vindu*/
    document.getElementById("varmetapNyRes").innerHTML = "Om du bytter vinduer vil du bruke " + (areal * uVerdiNy * differanse * dager * 24 / 1000) + " kwh mindre på " + dager + " dager"; /*regner ut varmetap på ny config av vindu*/
    wattDiff = varmetapGammelResultat - varmetapNyResultat; /* i kwh */
    document.getElementById("fortjeneste").innerHTML = "Du vil da spare ca." + (wattDiff * 1.648) + "kr på " + dager + " dager" /*ca mengde med penger spart*/
}