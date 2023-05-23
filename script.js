let $nome;
let $idade;
const $formulario = document.querySelector('form');

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
    }

    // Resetando os valores dos campos para esvaziar o formulario
    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
});

function criar_elemento() {
    for (element in localStorage) {
        if (element != 'clear' &&
        element != 'length' &&
        element != 'getItem' &&
        element != 'setItem' &&
        element != 'key' && 
        element != 'removeItem') {
            div = document.createElement('div').className('cadastro');

            document.appendChild(div);
            console.log(element);
        }
    }
}

function reset() {
    localStorage.clear();
}