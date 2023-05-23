let $nome;
let $idade;
const $formulario = document.querySelector('form');
const $div_nome = document.getElementById('nome_container');
const $div_idade = document.getElementById('idade_container');

// Adicionando o evento de submit no formulario e executando função ao enviar os dados.
$formulario.addEventListener('submit', function formulario_controller(info_formulario) {

    // o metodo preventDefault é para evitar o comportamento padrão do submit que é de
    // recarregar a pagina.
    info_formulario.preventDefault();

    // Selecionando elementos do formulario com o metodo querySelector e armazenando os
    // valores em variaveis.
    $nome = document.querySelector('#nome').value;
    $idade = document.querySelector('#idade').value;

    // Executando console log somente se os 2 campos estiverem preenchidos
    if(document.querySelector('#nome').value != '' &&
    document.querySelector('#idade').value != '') {
        localStorage.setItem($nome, $idade);
        criar_elemento();
    }

    // Resetando os valores dos campos para esvaziar o formulario
    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
});

function criar_elemento() {
    $div_nome.querySelectorAll('div').forEach((element) => $div_nome.removeChild(element));
    $div_idade.querySelectorAll('div').forEach((element) => $div_idade.removeChild(element));


    for (element in localStorage) {
        if (element != 'clear' &&
        element != 'length' &&
        element != 'getItem' &&
        element != 'setItem' &&
        element != 'key' && 
        element != 'removeItem') {
            div_1 = document.createElement('div');
            div_2 = document.createElement('div');

            div_1.innerHTML = element;
            div_2.innerHTML = localStorage.getItem(element)

            $div_nome.appendChild(div_1);
            $div_idade.appendChild(div_2);
            console.log(element);
        }
    }
}

function reset() {
    $div_nome.querySelectorAll('div').forEach((element) => $div_nome.removeChild(element));
    $div_idade.querySelectorAll('div').forEach((element) => $div_idade.removeChild(element));
    localStorage.clear();
}