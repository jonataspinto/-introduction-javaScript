botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            erroAjax.classList.remove(".mensagens-erro");
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente =>{
                adicionarPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("mensagens-erro");
        }
    });
    xhr.send();
});