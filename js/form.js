let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", event => {
    event.preventDefault();    
    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);
    adicionarPacienteNaTabela(paciente);
    let erros = validaPaciente(paciente)
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        return;
    }
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

const adicionarPacienteNaTabela = (paciente)=>{
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

const obtemPacienteDoFormulario = (form) => {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}
                    
const validaPaciente = (paciente) =>{
    let erros = [];
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("peso é invalido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("altura é invalida");
    }
    return erros;
}

const montaTr = (paciente) => {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

const montaTd = (dado,classe) => {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

const validaPeso = (peso) =>{
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

const validaAltura = (altura) =>{
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

const exibeMensagensDeErro = (erros) =>{
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
