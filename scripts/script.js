let form = document.querySelector('form');

function llenarsexo(){
    let sexo = ['Femenino','Masculino'];
    let select = document.getElementById("sexo");

    for(let i=0; i < sexo.length; i++){
        let option = document.createElement("option"); 
        option.innerHTML = sexo[i];
        select.appendChild (option);
}
}

    llenarsexo();


form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
});

function calcularIMC() {
    imcDataList = [];

    var imcData = {
        edad: document.getElementById("edad").value,
        sexo: document.getElementById("sexo").value,
        peso: document.getElementById("peso").value,
        estatura: document.getElementById("estatura").value
    }

    if (localStorage.getItem('datos') === null) {
        imcDataList.push(imcData);
        localStorage.setItem('datos', JSON.stringify(imcDataList));
    } else {
        imcDataList = JSON.parse(localStorage.getItem('datos'));
        imcDataList.push(imcData);
        //var localData = localStorage.getItem('datos');
        //imcJsonData = JSON.stringify(imcData);
        //var data = localData.concat(",").concat(imcJsonData);
        localStorage.setItem('datos', JSON.stringify(imcDataList));
    }
    let imc = imcData.peso / (imcData.estatura ** 2);
    let abajo = " / Por debajo del peso";
    let saludable =  " / Saludable";

    switch (true) {
        case imc < 18.5:
            document.getElementById("resultado").innerHTML =  imc.toFixed(2) + abajo;
            //alert(imc + " Por debajo del peso");
            break;
        case imc >= 18.5 && imc < 25:
            document.getElementById("resultado").innerHTML =  imc.toFixed(2) + saludable;
            //alert(imc + " Saludable");
            break;
        case imc >= 25 && imc < 30:
            document.getElementById("resultado").innerHTML =  imc.toFixed(2) + " / Con sobrepeso";
           // alert(imc + " Con sobrepeso");
            break;
        case imc >= 30 && imc <= 40:
            document.getElementById("resultado").innerHTML =  imc.toFixed(2) + " / Obeso";
            //alert(imc + " Obeso");
            break;
        case imc > 40:
            document.getElementById("resultado").innerHTML =  imc.toFixed(2) + " / Obesidad extrema o alto riesgo";
            //alert(imc.toFixed(2) + " Obesidad extrema o alto riesgo");
            break;
        }


}

