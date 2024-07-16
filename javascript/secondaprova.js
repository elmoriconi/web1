/*var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");*/

var C = 13;
console.log("Il tipo della var C e' " + typeof(C) + "\n");
C = "che bella giornata"
console.log("Il tipo della var C e' " + typeof(C) + "\n");

var iPosizione;
var sMiaStringa;
sMiaStringa = "pazperinoz"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
						console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");

var iPosizione;
var sMiaStringa;
sMiaStringa = "giovanni"
iPosizione = sMiaStringa.indexOf("f");
if(iPosizione == -1)
                    console.log("La f non c'è")
else
    console.log("La f c'è");


function TerminaConLettera(sStringa, sTermine)
{
    //prendi la lunghezza di sTermine
    //usa indexOf partendo da lunghezza di sStringa - lunghezza di sTermine
    //ritorna 0 oppure 1
    if (sStringa.length < sTermine.length)
        return 0
    else
        var iPos = sStringa.indexOf(sTermine, sStringa.length - sTermine.length);
        if (iPos == -1)
            return 0;
        else
            return 1;
}

var sStringa = "giovanni";
var sTermine = "i";
bRet = TerminaConLettera(sStringa, sTermine);
if (bRet == 1)
    console.log(sStringa + " termina con " + sTermine)
else
    console.log(sStringa + " non termina con " + sTermine)

function Macchinetta(iSoldi, sCodiceProdotto)
{
if (sCodiceProdotto == "31")
    if (iSoldi == 1)
        return {CocaCola, 0:0};
    if (iSoldi < 1)
        return {null : null, iSoldi};
    if (iSoldi > 1)
        iSoldi = iSoldi - 1
        return {CocaCola, iSoldi}
}