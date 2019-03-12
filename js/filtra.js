let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",  function () {
    console.log(this.value);
    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach(pac =>{
            let tdNome = pac.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");
            
            if(!expressao.test(nome)){
                pac.classList.add("invisivel");
            }else{
                pac.classList.remove("invisivel");
            }
        })
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        })
    }
});