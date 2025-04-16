//Desafio 1

var nome = "Miguel"
var idade = 18
var cidade = "Valença"
var estudando = true

console.log("O nome do estudante é " + nome)
console.log("Ele tem " + idade + " anos")
console.log("Ele mora na cidade de " + cidade)
console.log("Ele está estudando")

//Desafio 2

if(idade>=13){
    console.log("Acesso liberado à plataforma!");
}
else {
    console.log("Você ainda não tem idade suficiente para participar.");
}


//Desafio 3

function saudacao(nome, cidade){

        console.log("Olá, " + nome + "! Seja bem-vindo(a) à nossa plataforma. Vejo que você é de " + cidade + "!")

}

saudacao("Miguel", "Valença")


//Desafio 4

function calcularMedia(nota1, nota2, nota3){
        var media = (nota1 + nota2 + nota3) / 3
        if (media>=7){
            console.log("Desempenho bom!");
        }
        else {
            console.log("É necessário melhorar.");
        }


}

calcularMedia(10, 3, 7)