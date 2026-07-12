// Base de dados oficial de Itens (Loja, Depósito e Consumíveis) do CatDojo
export const ITENS = {
    // ==========================================
    // ALIMENTOS (Recuperam Saciedade)
    // ==========================================
    racao_barata: {
        id: "racao_barata",
        nome: "Ração Barata",
        tipo: "alimento",
        preco: 2,
        espaco: { largura: 1, altura: 1 }, 
        recuperaFome: 20,
        icone: "imagens/racao.png",
        desc: "Uma ração simples. +20 Saciedade."
    },
    sardinha: {
        id: "sardinha",
        nome: "Sardinha",
        tipo: "alimento",
        preco: 4,
        espaco: { largura: 1, altura: 1 }, 
        recuperaFome: 50,
        icone: "imagens/sardinha.png",
        desc: "Peixe fresco e nutritivo. +50 Saciedade."
    },
    whiskas: {
        id: "whiskas",
        nome: "Whiskas",
        tipo: "alimento",
        preco: 7,
        espaco: { largura: 1, altura: 2 }, // 2 espaços na vertical
        recuperaFome: 100,
        icone: "imagens/whiskas.png",
        desc: "A ração favorita. Enche completamente a barra (+100 Saciedade)."
    },

    // ==========================================
    // MEDICINA E STATUS
    // ==========================================
    remedio: {
        id: "remedio",
        nome: "Remédio",
        tipo: "medicina",
        preco: 40,
        espaco: { largura: 1, altura: 2 }, // 2 espaços na vertical
        icone: "imagens/remedio.png",
        desc: "Cura a Doença e envia o gato para descanso imediato."
    },
    biscoitinho: {
        id: "biscoitinho",
        nome: "Biscoitinho",
        tipo: "magico",
        preco: 100,
        espaco: { largura: 1, altura: 1 },
        icone: "imagens/biscoito.png",
        desc: "Reseta os pontos de atributos de um gato para serem redistribuídos."
    },

    // ==========================================
    // EQUIPAMENTOS E BUFFS DE MISSÃO
    // ==========================================
    kimono: {
        id: "kimono",
        nome: "Kimono",
        tipo: "missao",
        preco: 30,
        espaco: { largura: 2, altura: 2 }, // 4 espaços (2x2)
        icone: "imagens/kimono.png",
        desc: "Reduz o custo de HP da missão em 25%."
    },
    catnip: {
        id: "catnip",
        nome: "Catnip",
        tipo: "missao",
        preco: 30,
        espaco: { largura: 2, altura: 1 }, // 2 espaços na horizontal
        icone: "imagens/catnip.png",
        desc: "Aumenta o ganho final de XP da missão em +50%."
    },
    churu: {
        id: "churu",
        nome: "Churu",
        tipo: "missao",
        preco: 25,
        espaco: { largura: 2, altura: 1 }, // 2 espaços na horizontal
        icone: "imagens/churu.png",
        desc: "Aumenta o ganho final de Moedas da missão em +50%."
    },
    shuriken: {
        id: "shuriken",
        nome: "Shuriken",
        tipo: "missao",
        preco: 25,
        espaco: { largura: 1, altura: 1 },
        icone: "imagens/shuriken.png",
        desc: "Reduz o risco absoluto de falha da missão em 15%."
    },
    botas: {
        id: "botas",
        nome: "Botas",
        tipo: "missao",
        preco: 30,
        espaco: { largura: 2, altura: 2 }, // 4 espaços (2x2)
        icone: "imagens/bota.png",
        desc: "Corta 20% do tempo final da duração da missão."
    }
};
