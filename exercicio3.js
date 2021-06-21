// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botoes = document.querySelectorAll(".botao-expandir-retrair");

for (let botao of botoes) {
    botao.addEventListener("click", () => {
    botao.parentNode.classList.toggle("expandido");
      if (botao.innerHTML == "+") {
        botao.innerHTML = "-"
      }
      else {
        botao.innerHTMl = "+"
       }
  });
}