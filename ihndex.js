document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll("button");

    botoes.forEach((botao) => {
        botao.onclick = function () {
            document.body.innerHTML = `
                <div style="
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    background:#ea1d2c;
                    color:white;
                    flex-direction:column;
                    font-family:Arial,sans-serif;
                ">
                    <h1>Página indisponível no momento</h1>
                    <p>Tente novamente mais tarde.</p>
                </div>
            `;
        };
    });
});