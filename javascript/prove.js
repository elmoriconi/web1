const prompt = require('prompt-sync')();
/*console.log("ciao");
function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var str = prompt('Enter a string: ');
console.log("Hai inserito " + str);
str = capitalizeFirstLetter(str);
console.log("Hai inserito " + str);
process.exit(0);
*/

//Inserisci primo numero e salvi su sPrimoNumero
//Inserisci secnondo numero
//Stampi a schermo la somma

function mioParseInt(string) {
    for (i = 0; i <= string.length; i++) {
        if ((string.charAt(i)>='0') || (string.charAt(i)<='9')) {
        }
        else {
            return false
        }
    }
    return true
}

/*function VerificaFallita(numero) 
{
    bEsito = mioParseInt(numero);
    if (bEsito == true)
        return parseInt(numero);
    for(i = 0; i <= 3; i++)
    {
        numero = prompt('Attenzione numero errato, riprova: ');
        bEsito = mioParseInt(numero);
        if (bEsito == true)
            return parseInt(numero);
    }
    return null;
}*/

var sPrimoNumero = prompt('Enter first number: ');

flag = mioParseInt(sPrimoNumero)
if (flag == true) {
    sPrimoNumero = parseInt(sPrimoNumero);
}
else {
    console.log("Hai inserito caratteri non numerici");
}
var sSecondoNumero = prompt('Enter second number: ');
flag = mioParseInt(sSecondoNumero)
if (flag == true) {
    sSecondoNumero = parseInt(sSecondoNumero);
}
else {
    console.log("Hai inserito caratteri non numerici");
}
var sSomma = sPrimoNumero + sSecondoNumero
console.log("Somma " + sSomma);
process.exit(0);
