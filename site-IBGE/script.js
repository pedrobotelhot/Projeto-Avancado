window.onload = function() {
    if(window.document.readyState == "complete"){
        selectStates();
        document.querySelector('#states').onchange = mostrar_states;
    }
};

function selectStates(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

                var lista = document.querySelector('#states');
                lista.innerHTML == ""

                response.forEach(function(el) {
                    option = document.createElement("option");      
                    option.innerHTML =  el.nome;
                    option.value = el.sigla;             
                    option.setAttribute('nome', JSON.stringify(el.nome))

                    lista.appendChild(option);
                });

                
            }   
        }
    }
    httpRequest.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    httpRequest.send();
}
function mostrar_states(ev){
    selected = ev.target;
    console.log(document.querySelector("#states").value);
}

function mostrar_city(ev){
    selected = ev.ta
}