// Base de dados oficial do Quadro de Missões do CatDojo
export const MISSOES = {
    // ================= RANK D (Foco: Início, rotatividade rápida) =================
    // Parâmetros: 1 Hora | 10 Moedas | 15 XP | 1 Reputação | Risco 15 | Custo 15% HP | Faixa 1 (Branca)
    D1: {
        id: "D1", rank: "D",
        nome: "O Treino da Folha Cadente",
        desc: "Pegar folhas de cerejeira com as garras antes que toquem o chão.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D2: {
        id: "D2", rank: "D",
        nome: "O Vagalume Enganador",
        desc: "Perseguir a luz mística nos jardins do templo sem fazer barulho.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D3: {
        id: "D3", rank: "D",
        nome: "Guarda da Ração Sagrada",
        desc: "Proteger as oferendas de peixe do pequeno santuário local.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D4: {
        id: "D4", rank: "D",
        nome: "Resgate do Novelo de Jade",
        desc: "Recuperar a relíquia redonda caída no lago de carpas koi.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D5: {
        id: "D5", rank: "D",
        nome: "Meditação no Pagode",
        desc: "Praticar a quietude absoluta e o ronronar focado nos degraus do templo.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D6: {
        id: "D6", rank: "D",
        nome: "Afugentar os Corvos Espiões",
        desc: "Expulsar as aves ninjas do clã rival que vigiam o pátio.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D7: {
        id: "D7", rank: "D",
        nome: "Busca nos Pergaminhos Antigos",
        desc: "Encontrar técnicas esquecidas na biblioteca empoeirada do mestre.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D8: {
        id: "D8", rank: "D",
        nome: "Mensageiro das Sombras",
        desc: "Entregar um recado secreto e selado ao mestre do dojo aliado vizinho.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D9: {
        id: "D9", rank: "D",
        nome: "O Susto no Monge Novato",
        desc: "Um teste clássico de furtividade felina saltando das sombras.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },
    D10: {
        id: "D10", rank: "D",
        nome: "O Besouro Samurai",
        desc: "Capturar o inseto cascudo voador que desafia a agilidade dos iniciantes.",
        tempoBase: 1, riscoBase: 15, custoHpPct: 15, moedasBase: 10, xpBase: 15, repBase: 1, minFaixa: 1
    },

    // ================= RANK C (Foco: Desafios diários) =================
    // Parâmetros: 4 Horas | 50 Moedas | 60 XP | 5 Reputação | Risco 40 | Custo 35% HP | Faixa 3 (Cinza)
    C1: {
        id: "C1", rank: "C",
        nome: "Travessia do Vale Nebuloso",
        desc: "Cruzar a ponte pênsil de bambu sem ser detectado pelos guardas.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C2: {
        id: "C2", rank: "C",
        nome: "Duelo dos Ronins",
        desc: "Bater de frente com gatos sem mestre que ameaçam as fronteiras.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C3: {
        id: "C3", rank: "C",
        nome: "Infiltração no Mercado de Seda",
        desc: "Recuperar suprimentos de ervas furtados pelos rivais.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C4: {
        id: "C4", rank: "C",
        nome: "Escolta do Herdeiro",
        desc: "Proteger um filhote da linhagem real durante uma perigosa viagem.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C5: {
        id: "C5", rank: "C",
        nome: "Confronto nos Telhados de Bambu",
        desc: "Resolver uma disputa territorial nas alturas com acrobacias.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C6: {
        id: "C6", rank: "C",
        nome: "O Canto da Lótus Noturna",
        desc: "Emitir o sinal sonoro de miados para reunir os aliados do clã.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C7: {
        id: "C7", rank: "C",
        nome: "A Trilha da Serpente",
        desc: "Perseguir um espião ágil e venenoso pelos bosques fechados.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C8: {
        id: "C8", rank: "C",
        nome: "Fuga das Águas Termais",
        desc: "Escapar da indesejada cerimônia de purificação (banho) das sacerdotisas.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C9: {
        id: "C9", rank: "C",
        nome: "Patrulha da Lua Crescente",
        desc: "Vigiar as fronteiras noturnas do xogunato felino.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },
    C10: {
        id: "C10", rank: "C",
        nome: "A Perseguição dos Cães de Fu",
        desc: "Correr e desviar das estátuas de guarda de pedra que ganharam vida.",
        tempoBase: 4, riscoBase: 40, custoHpPct: 35, moedasBase: 50, xpBase: 60, repBase: 5, minFaixa: 3
    },

    // ================= RANK B (Foco: Risco noturno, grande recompensa) =================
    // Parâmetros: 10 Horas | 130 Moedas | 180 XP | 15 Reputação | Risco 75 | Custo 65% HP | Faixa 9 (Laranja)
    B1: {
        id: "B1", rank: "B",
        nome: "O Clã dos Lobos Negros",
        desc: "Invadir o acampamento inimigo dos cães selvagens nas montanhas.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B2: {
        id: "B2", rank: "B",
        nome: "O Roubo da Carpa Dourada",
        desc: "Missão tática e silenciosa de invasão no palácio imperial.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B3: {
        id: "B3", rank: "B",
        nome: "Fuga da Prisão de Bambu",
        desc: "Salvar aliados felinos capturados pelas forças do imperador.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B4: {
        id: "B4", rank: "B",
        nome: "A Fúria do Deus do Trovão",
        desc: "Sobreviver a uma tempestade mística de raios no pico da montanha.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B5: {
        id: "B5", rank: "B",
        nome: "Rebelião da Província do Gato",
        desc: "Liderar uma revolta camponesa felina contra cobradores de impostos.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B6: {
        id: "B6", rank: "B",
        nome: "O Yokai dos Esgotos",
        desc: "Caçar um espírito corrompido com garras gigantes nos subterrâneos da capital.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B7: {
        id: "B7", rank: "B",
        nome: "A Escalada da Grande Muralha",
        desc: "Chegar ao topo da fortificação antiga para acender o farol de alerta.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B8: {
        id: "B8", rank: "B",
        nome: "O Mastim do Shogun",
        desc: "Derrubar o enorme guarda-costas canino que protege a fortaleza.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B9: {
        id: "B9", rank: "B",
        nome: "A Máscara de Oni",
        desc: "Recuperar um artefato demoníaco roubado sem ser corrompido por sua aura.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },
    B10: {
        id: "B10", rank: "B",
        nome: "O Torneio Subterrâneo",
        desc: "Participar de um clube de luta clandestino de artes marciais felinas.",
        tempoBase: 10, riscoBase: 75, custoHpPct: 65, moedasBase: 130, xpBase: 180, repBase: 15, minFaixa: 9
    },

    // ================= RANK A (Foco: O Desafio Final) =================
    // Parâmetros: 24 Horas | 350 Moedas | 500 XP | 35 Reputação | Risco 130 | Custo 95% HP | Faixa 14 (Azul)
    A1: {
        id: "A1", rank: "A",
        nome: "O Shogun Tigre de Jade",
        desc: "Derrotar o mestre tirano que domina as artes proibidas na capital do leste.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A2: {
        id: "A2", rank: "A",
        nome: "A Lenda de Sun Wukong",
        desc: "Enfrentar o Rei Macaco em um duelo de ilusões, bastões mágicos e esquivas.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A3: {
        id: "A3", rank: "A",
        nome: "O Despertar do Dragão Ancestral",
        desc: "Acalmar o espírito milenar e escamoso que repousa farto e furioso sob o vulcão.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A4: {
        id: "A4", rank: "A",
        nome: "O Último Samurai de Hokkaido",
        desc: "Sobreviver à tempestade de neve na praça central contra as facções de assassinos de elite.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A5: {
        id: "A5", rank: "A",
        nome: "O Cerco do Imperador Canino",
        desc: "Batalhar contra um general Akita implacável e suas tropas imperiais por 24 horas ininterruptas.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A6: {
        id: "A6", rank: "A",
        nome: "O Sindicato do Lótus Negro",
        desc: "Impedir que os alquimistas ninjas envenenem os rios da região com poções sombrias.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A7: {
        id: "A7", rank: "A",
        nome: "A Queda da Fênix",
        desc: "Escapar da fúria celestial e dos ataques em rasante de uma ave mística de chamas.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A8: {
        id: "A8", rank: "A",
        nome: "A Batalha de Sekigahara Felina",
        desc: "Defender as portas sagradas do dojo sozinho contra 50 guerreiros inimigos em sequência.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A9: {
        id: "A9", rank: "A",
        nome: "A Jornada do Tigre Agachado",
        desc: "Atravessar a floresta de espadas e armadilhas sem tocar o chão envenenado.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    },
    A10: {
        id: "A10", rank: "A",
        nome: "A Dinastia das Sombras",
        desc: "A batalha épica final contra os monges corrompidos pela magia das trevas.",
        tempoBase: 24, riscoBase: 130, custoHpPct: 95, moedasBase: 350, xpBase: 500, repBase: 35, minFaixa: 14
    }
};
