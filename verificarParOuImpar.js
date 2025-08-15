const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function novaAnalize(){
    rl.question(`Quer analisar outro numero? (Sim/Não) `, (nova) => {
        const analize = nova;
        if(analize.toLowerCase() === 'sim'){
            console.log('Otimo! vamos para outro teste então!')
            return analizarParOuImpar()
        }else if(analize.toLowerCase() === 'não' || analize.toLowerCase() === 'nao'){
            console.log('Ok, entendo, muito obrigado por testar esse codigo, até mais!')
            rl.close()
        }
        
        else{
            console.log('Putz cara, infelizmente não entendi sua resposta, por favor, responda com Sim ou Não.');
            return novaAnalize()
        }
    })
}

function analizarParOuImpar(){
    rl.question('Digite algum numero por favor: ', (num) => {
        const numero = parseInt(num);
        if(isNaN(numero)){
            console.log('Por favor, insira um numero válido.')
            return analizarParOuImpar()
        }else if(num % 2 === 0) {
            console.log(`o numero ${num} é um numero par`)
            novaAnalize()
        }else{
            console.log(`O numero ${num} é impar`)
            novaAnalize()
        }
    });
}
analizarParOuImpar()