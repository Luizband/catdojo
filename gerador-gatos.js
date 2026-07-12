// Lista global de nomes disponíveis para o jogo inteiro
export const NOMES_GATOS = [
    "Ronin", "Sombra", "Yuki", "Tigre", "Ninja",
    "Fumaça", "Loki", "Simba", "Felix", "Neko",
    "Salem", "Luna", "Tom", "Frajola", "Zoro",
    "Kira", "Goku", "Arya", "Leo", "Miau",
    "Thor", "Zeus", "Apolo", "Nero", "Fera",
    "Pudim", "Cacau", "Mel", "Pipoca", "Koda",
    "Milo", "Oliver", "Chico", "Barth", "Jorge",
    "Freddy", "Dexter", "Tito", "Ryu", "Ken",
    "Akuma", "Bison", "Sagat", "Vega", "Chun",
    "Gohan", "Bidu", "Nala", "Mia", "Zeca"
];

// Função que gera um gato zerado (usada na criação da conta)
export function gerarGatoInicial() {
    const nomeSorteado = NOMES_GATOS[Math.floor(Math.random() * NOMES_GATOS.length)];
    const numeroFoto = Math.floor(Math.random() * 17) + 1;
    const fotoSorteada = `imagens/gato${String(numeroFoto).padStart(2, '0')}.png`;

    let atributos = { forca: 1, agilidade: 1, resistencia: 1, foco: 1 };
    const chavesAtributos = Object.keys(atributos);
    
    for (let i = 0; i < 6; i++) {
        const sorteado = chavesAtributos[Math.floor(Math.random() * chavesAtributos.length)];
        atributos[sorteado]++;
    }

    const hpCalculado = 250 + (atributos.resistencia * 15);

    return {
        id: crypto.randomUUID(), 
        nome: nomeSorteado,
        foto: fotoSorteada,
        idadeHoras: 0,
        fome: 100,
        hpAtual: hpCalculado,
        hpMax: hpCalculado,
        faixa: "Branca",
        xpAtual: 0,
        xpProxFaixa: 500,
        atributos: atributos,
        estado: "Saudável"
    };
}
