alert("Bienvenido, en esta seccion podra saber su signo zodiacal basado en su nacimiento")

var mes = Number(prompt("Ingrese el mes de nacimiento (En numeros del 1 al 12)"));
var dia = Number(prompt("Ingrese el dia de su nacimiento (En numeros del 1 al 31)"));

if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)) {alert("Su signo zodiacal es Acuario")
} else if ((mes===2 && dia >=20)|| (mes=== 3 && dia <=20)) {alert("Su signo zodiacal es Piscis")
} else if ((mes===3 && dia >=21)|| (mes===4 && dia <=20)) {alert("Su signo zodiacal es Aries")
} else if ((mes===4 && dia >=21)|| (mes=== 5 && dia <= 20)) {alert("Su signo zodiacal es Tauro")
} else if ((mes===5 && dia>= 21)|| (mes===6 && dia<=20)) {alert("Su signo zodiacal es Geminis")
} else if ((mes===6 && dia>= 21)|| (mes===7 && dia<=22)) {alert("Su signo zodiacal es Cancer")
} else if ((mes===7 && dia>= 23)|| (mes===8 && dia<=23)) {alert("Su signo zodiacal es Leo")
} else if ((mes===8 && dia>= 24)|| (mes===9 && dia<=22)) {alert("Su signo zodiacal es Virgo")
} else if ((mes===9 && dia>= 23)|| (mes===10 && dia<=23)) {alert("Su signo zodiacal es Libra")
} else if ((mes===10 && dia>= 24)|| (mes===11 && dia<=22)) {alert("Su signo zodiacal es Escorpio")
} else if ((mes===11 && dia>= 23)|| (mes===12 && dia<=21)) {alert("Su signo zodiacal es Sagitario")
} else if ((mes===12 && dia>= 22)|| (mes===1 && dia<=20)) {alert("Su signo zodiacal es Capricornio")
};