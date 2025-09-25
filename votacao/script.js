document.addEventListener("DOMContentLoaded", function() {
    const nomes = [];
    const numeros = [];
    const tabelaCandidatos = document.getElementById('tabelaCandidatos').getElementsByTagName('tbody')[0];
    const nomeCandidato = document.getElementById('nomeCandidato');
    const numeroCandidato = document.getElementById('numeroCandidato');

    window.cadastroCandidato = function() {
        const nome = nomeCandidato.value;
        const numero = parseInt(numeroCandidato.value);

        if (nome && !isNaN(numero)) {
            nomes.push(nome);
            numeros.push(numero);

            const novaLinha = tabelaCandidatos.insertRow();
            const celulaNome = novaLinha.insertCell(0);
            const celulaNumero = novaLinha.insertCell(1);

            celulaNome.textContent = nome;
            celulaNumero.textContent = numero;

            nomeCandidato.value = '';
            numeroCandidato.value = '';
        } else {
            alert("Por favor, preencha corretamente o nome e número do candidato.");
        }
      };
    });