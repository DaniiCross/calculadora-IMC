function promedioHombres() {
    imcDataList = JSON.parse(localStorage.getItem('datos'));
    let sumaImc = 0;
    let contadorHombres = 0;
    imcDataList.forEach(element => {
        if(element.sexo === "Masculino"){
            let imc = element.peso / (element.estatura ** 2);
            sumaImc = sumaImc + imc;
            contadorHombres++;
        }
    });
    let promedio = sumaImc / contadorHombres;
    console.log(promedio);
    document.getElementById("resultadoPromedio").innerHTML = "El promedio de IMC entre " + contadorHombres + " hombres es igual a: " +  promedio;
}

function promedioMujeres() {
    imcDataList = JSON.parse(localStorage.getItem('datos'));
    let sumaImc = 0;
    let contadorMujeres = 0;
    imcDataList.forEach(element => {
        if(element.sexo === "Femenino"){
            let imc = element.peso / (element.estatura ** 2);
            sumaImc = sumaImc + imc;
            contadorMujeres++;
        }
    });
    let promedio = sumaImc / contadorMujeres;
    console.log(promedio);
    document.getElementById("resultadoPromedio").innerHTML = "El promedio de IMC  entre " +contadorMujeres+ " Mujeres es igual a: " +  promedio;
}