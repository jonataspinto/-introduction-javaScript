
const calculaImc = (peso,altura) =>{
    var imc = 0;
    imc = peso / (altura * altura);    
    return imc.toFixed(2);
}

let pacientes = document.querySelectorAll(".paciente");    
for(let i = 0; i < pacientes.length ; i++){
    let paciente = pacientes[i]
    let tdPeso = paciente.querySelector(".info-peso").textContent;
    let tdAltura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");
        
    if(!validaPeso(tdPeso)){
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }
    else{
        if(!validaAltura(tdAltura)){
            tdImc.textContent = "Altura Inválida"
            paciente.classList.add("paciente-invalido")
        }
        else{
            var imc = calculaImc(tdPeso,tdAltura);
            tdImc.textContent = imc;
        }
    }
}





