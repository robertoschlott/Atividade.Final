document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const tabelaCadastros = document.getElementById('tabelaCadastros');
    const novaLinha = tabelaCadastros.insertRow();
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = email;

    document.getElementById('cadastroForm').reset();
});
