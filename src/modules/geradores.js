const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraMumero = () => String.fromCharCode(rand(48, 58))
const simbolos = '<>:?;.,[]{}!@#$%¨&*()_+='
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    qtd = Number(qtd)

    
    for (let i = 0; i < qtd; i++) {
        
        const arr = []

        maiusculas && arr.push(geraMaiuscula())
        minusculas && arr.push(geraMinuscula())
        numeros && arr.push(geraMumero())
        simbolos && arr.push(geraSimbolo())
    
        
        senhaArray.push(arr[rand(0, arr.length)])
    }

    return senhaArray.join('')
}