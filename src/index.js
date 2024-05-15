const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomeHeroi;
let saldoVitorias;
let qtdVitorias;
let qtdDerrotas;
let nivel;
let nivelCalculado;

function getSaldoRankeadas(vitorios, derrotas) {
    saldoVitorias = vitorios - derrotas;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

rl.question('Digite seu nome de Herói: ', (resposta) => {
    nomeHeroi = resposta;

    rl.question('Digite a quantidade de vitórias: ', (resposta) => {
        qtdVitorias = parseInt(resposta.replace(/[^0-9]/g, ''));

        rl.question('Digite a quantidade de derrotas: ', (resposta) => {
            qtdDerrotas = parseInt(resposta.replace(/[^0-9]/g, ''));

            nivelCalculado = getSaldoRankeadas(qtdVitorias, qtdDerrotas);
            console.log("O Herói **" + nomeHeroi + "** de saldo de **" + saldoVitorias + "** está no nível de **" + nivelCalculado + "**");

            rl.close();
        });
    });
});
