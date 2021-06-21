// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let BotaoCalcular = document.querySelector('#calcular');
BotaoCalcular.addEventListener('click', function() {
    const Gravidade = document.querySelector('#constante').value;
    const Massa1 = document.querySelector('#massa1').value;
    const Massa2 = document.querySelector('#massa2').value;
    const distancia = document.querySelector('#distancia').value;
    document.querySelector('#resultado').value = Calculo(Gravidade, Massa1, Massa2, distancia);
});

function Calculo(Gravidade, Massa1, Massa2, distancia) {
    const resultado =  (Gravidade*Massa1*Massa2)/(distancia*distancia)
    return resultado ;
}