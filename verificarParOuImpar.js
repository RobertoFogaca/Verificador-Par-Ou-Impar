const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function novaAnalize(){
    rl.question(`Quer analizar outro numero? (Sim/Não) `, (nova) => {
        const novaAnalize = nova;
        if(novaAnalize.toLowerCase() === 'sim'){
            console.log('Otimo! vamos para outro teste então!')
            return analizarParOuImpar()
        }else{
            console.log('Ok, entendo, muito obrigado por testar esse codigo, até mais!')
            rl.close()
        }
    })
}

function analizarParOuImpar(){
    rl.question('Digite seu um numero: ', (num) => {
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