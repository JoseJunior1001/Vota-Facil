document.addEventListener("DOMContentLoaded", function() {
    const nomes = [];
    const numeros = [];
    const listaCandidatos = document.getElementById('listaCandidatos');  // Elemento UL onde os candidatos serão listados
    const nomeCandidato = document.getElementById('nomeCandidato');
    const numeroCandidato = document.getElementById('numeroCandidato');

    window.cadastroCandidato = function() {
        const nome = nomeCandidato.value;
        const numero = parseInt(numeroCandidato.value);

        if (nome && !isNaN(numero)) {
            nomes.push(nome);
            numeros.push(numero);

            const novoItem = document.createElement('li');
            novoItem.textContent = `${nome} (${numero})`;

            listaCandidatos.appendChild(novoItem);

            nomeCandidato.value = '';
            numeroCandidato.value = '';
        } else {
            alert("Por favor, preencha corretamente o nome e número do candidato.");
        }
    };
});
