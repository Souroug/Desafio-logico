//definir os nomes das variáveis 
let nomeHeroi = "sourou"
let quantExp = 3500 // pode ser substituido esse valor pela quantidade

// usando if else para a estructura de decisão
var nivelHeroi

if (quantExp<1000){
nivelHeroi = "Ferro"

} else if (quantExp>1.001 && quantExp <2.000){
var nivelHeroi = "Bronze"

} else if (quantExp> 2.001 && quantExp <5000){
    var nivelHeroi = "Prata"

} else if (quantExp> 6.001 && quantExp <7.000){
    var nivelHeroi = "Ouro"

} else if (quantExp> 7.001 && quantExp <8.000){
    var nivelHeroi = "Platina Diamante"

} else if (quantExp> 8.001 && quantExp <90.00){
    var nivelHeroi = "Ascendente"
} else if (quantExp> 9.001 && quantExp <10.000){
    var nivelHeroi = "Imortal"
}else if (quantExp>= 10.001){
    var nivelHeroi = "Radiante"
}

console.log ( "o heroi de", +nome+ "está no nível", +nivelHeroi)