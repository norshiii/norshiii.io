function kalkulator() {
    areal = document.getElementById("areal").value;
    uVerdiGammel = document.getElementById("uverdiGammel").value;
    uVerdiNy = document.getElementById("uverdiNy").value;
    uteTemp = document.getElementById("utemp").value;
    inneTemp = document.getElementById("itemp").value;
    dager = document.getElementById("dager").value;

    uteTempK = uteTemp + 273.15;
    inneTempK = inneTemp + 273.15;

    differanse  = inneTempK - uteTempK;

    varmetapNy = differanse * areal * uVerdiNy;
    varmetapGammel = differanse * areal * uVerdiGammel;

    document.getElementById("varmetapNyRes").innerHTML = varmetapNy;
    document.getElementById("varmetapGammelRes").innerHTML = varmetapGammel;
}

function temperaturdiff() {
    inneTemp = document.getElementById("itemp").value;
    uteTemp = document.getElementById("utemp").value;
    document.getElementById("tempdiff").innerHTML = inneTemp - uteTemp + " grader forskjell mellom inne og ute";
    document.getElementById("varmetapGammelRes").innerHTML = areal * uVerdiGammel * differanse * 24 / 1000 + " kwh";

}


/*prototype 2*/
/*
function kalkulator() {
    areal = document.getElementById("areal").value;
    inneTemp = document.getElementById("itemp").value;
    uteTemp = document.getElementById("utemp").value;
    uVerdiGammel = document.getElementById("uverdiGammel").value;
    dager = document.getElementById("dager").value;
    uVerdiNy = document.getElementById("uverdiNy").value;
    differanse = inneTemp - uteTemp;
    document.getElementById("varmetapGammelRes").innerHTML = areal * uVerdiGammel * differanse * 24 / 1000 + " kWh";
}

*/