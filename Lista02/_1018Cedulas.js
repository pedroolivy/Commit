var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor %= nota;
}