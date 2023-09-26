document.addEventListener("DOMContentLoaded", function () {
    const telaLogin = document.getElementById("login");
    const telaSorteio = document.getElementById("tela-sorteio");
    const telaRegras = document.getElementById("tela-regras");
    const usernameInput = document.getElementById("username");
    const loginBtn = document.getElementById("loginBtn");
    const sortearLetraBtn = document.getElementById("sortearLetra");
    const letraSorteadaSpan = document.getElementById("letraSorteada");
    const nomeRegrasSpan = document.getElementById("nomeRegras");

    // Evento de clique no botão de login
    loginBtn.addEventListener("click", function () {
        const username = usernameInput.value;
        if (username.trim() !== "") {
            // Armazena o nome do usuário na sessionStorage
            sessionStorage.setItem("nomeDaSessao", username);
            // Oculta a tela de login e mostra a tela de sorteio
            telaLogin.style.display = "none";
            telaSorteio.style.display = "block";
        }
    });

    // Evento de clique no botão de sorteio
    sortearLetraBtn.addEventListener("click", function () {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
        letraSorteadaSpan.textContent = letraSorteada;
        mostrarTelaRegras();
    });

    // Função para mostrar a tela de regras
    function mostrarTelaRegras() {
        const nomeDaSessao = sessionStorage.getItem("nomeDaSessao");
        if (nomeDaSessao) {
            telaSorteio.style.display = "none";
            telaRegras.style.display = "block";
            nomeRegrasSpan.textContent = nomeDaSessao;
        }
    }

    // Verifica se o nome da sessão já existe e mostra a tela de regras
    const nomeDaSessaoExistente = sessionStorage.getItem("nomeDaSessao");
    if (nomeDaSessaoExistente) {
        mostrarTelaRegras();
    } else {
        // Caso contrário, mostra a tela de login
        telaLogin.style.display = "block";
    }
});

