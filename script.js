// Carne - 400g por pessoa + de 6 horas - 650g
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/Agua - 1000ml por pessoa + de 6 horas 1500ml

// Crianças valem por 0,5



    let inputAdultos = document.getElementById("adultos");

    let inputCriancas = document.getElementById("criancas");
    
    let inputDuracao = document.getElementById("duracao");
    
    let resultado = document.getElementById("resultado");



    function calcular(){

    // Convertendo os valores para numeros inteiros
    let adultos = parseInt(inputAdultos.value.trim()) || 0 ;
    let criancas = parseInt(inputCriancas.value.trim()) || 0 ;
    let duracao = parseInt(inputDuracao.value.trim()) || 0 ;

    // Verifica se os inputs são válidos
    if(!validarInputs(adultos, criancas, duracao)){
        alert("Preencha todos os campos corretamente!");
        return;  
    } 
    

    // Calculos das quantidades
    let qtdTotalCarne = calcularCarne(duracao, adultos, criancas);
    let qtdTotalCerveja = calcularCerveja(duracao, adultos);
    let qtdTotalBebidas = calcularBebidas(duracao, adultos, criancas);

    
    // Exibindo os resultados formatados
    resultado.innerHTML = `
    <p><strong>${(qtdTotalCarne / 1000).toFixed(2)}</strong> Kg de Carne</p>
    <p><strong>${Math.ceil(qtdTotalCerveja / 355)}</strong> Latas de Cerveja</p>
    <p><strong>${Math.ceil(qtdTotalBebidas / 2000)}</strong> Garrafas de Bebidas</p>
    `;

}

function validarInputs(adultos, criancas, duracao){
    return adultos >= 0 && criancas >= 0 && duracao > 0;
}

function calcularCarne(duracao, adultos, criancas){
    let carnePorHora = 400 / 6;
    return (carnePorHora * duracao * adultos) + (carnePorHora * duracao * criancas);
}

function calcularCerveja (duracao, adultos){
    let cervejaPorHora = 1200 / 6;
    return cervejaPorHora * duracao * adultos;

}

function calcularBebidas(duracao, adultos, criancas){
    let bebidasPorHora = 1000 / 6;
    return (bebidasPorHora * duracao * adultos) + (bebidasPorHora * duracao * criancas * 0.5)    

}

window.calcular = calcular;

