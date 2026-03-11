export function validarNivel (nivel) {
    const nivelRegex = /^(1|2|3|4|5)$/
    return nivelRegex.test(nivel)
}