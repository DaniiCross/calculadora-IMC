function calcularIMC(){

    var imcData = {
        edad: document.getElementById('edad').Value,
        sexo: document.getElementById('sexo'),
        peso: document.getElementById("peso").value,
        estatura: document.getElementById("estatura").value
    }

    let imc = imcData.peso/(imcData.estatura**2);

    switch(true){
        case imc<18.5:
            alert(imc + " Por debajo del peso");
            break;
        case imc>=18.5 && imc < 25:
            alert(imc + " Saludable");
            break;
        case imc >= 25 && imc < 30:
            alert(imc + " Con sobrepeso");
            break;
        case imc >= 30 && imc <= 40:
            alert(imc + " Obeso");
            break;
        case imc > 40:
            alert(imc + " Obesidad extrema o alto riesgo");
            break;
    }

    console.log(imcData);

}