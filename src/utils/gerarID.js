
export function gerarID() {
    let numero = Math.random();
    numero *= 100000;
    return numero.toFixed();
}