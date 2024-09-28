let nome
let idade

console.log('O tipo da variável nome é: ',typeof nome,'\nO tipo da variável idade é: ',typeof idade)
//Ambos os tipo das variáveis serão impressas no console como undefined pois nenhum valor foi inserido.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade")

console.log('O tipo da variável nome é: ',typeof nome,'\nO tipo da variável idade é: ',typeof idade)
//Ambos os tipo das variáveis serão impressas no console como string pois esse é o tipo padrão de dados retornado pela função prompt.

console.log('Olá',nome,', você tem ',idade,' anos')