Feature: String replaceAll() methode

String replaceAll() methode vervangt alle exemplaren van een tekenreeks door de waarde van een andere tekenreeks. 
Er bestaat ook een gelijkaardige functie replace() . Deze veranderd enkel de eerste instanties van de exemplaren door de nieuwe waarde.

Voorbeeld:
const str = "De ijsmaker maakt ijs";
const newStr = str.replaceAll("ijs", "schoenen");
console.log(newStr); // "de schoenmaker maakt schoenen"