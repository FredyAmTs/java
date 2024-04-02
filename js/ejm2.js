var nom,anio,edad,dia;
nom=prompt("nombre: ");
anio=parseInt(prompt("año de nacimiento: "));
edad=2024-anio;
if(edad>=18)
{
    document.writeln(nom+" eres mayor de edad");
}
else
{
    document.writeln(nom+ " eres menor de edad")
}
dia=parseInt( prompt("Ingrese un numero de dia entre 1 y 7"));
switch(dia)
{
    case 1: alert("lun");break;
    case 2: alert("mar");break;
    case 3: alert("mie");break;
    case 4: alert("jue");break;
    case 5: alert("vie");break;
    case 6: alert("sab");break;
    case 7: alert("dom");break;
    default: alert("fuera de rango");
}
