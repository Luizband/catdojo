// Base de dados oficial de Artes Marciais e Técnicas do GDD do CatDojo
export const ARTES_MARCIAIS = {
    garate: {
        nome: "Garatê", 
        cor: "#cc3333", 
        icone: "icones/garate.png",
        tecnicas: [
            { nome: "Pata Frontal", pe: 50, custo_pa: 0, recarga: 0, tipo: "Ataque", desc: "Básico. Causa 100% de Dano e gera 10 PA." },
            { nome: "Bloqueio Duro", pe: 150, custo_pa: 15, recarga: 2, tipo: "Defesa", desc: "Aumenta Defesa em 30% no próximo turno." },
            { nome: "Soco Quebra-Telha", pe: 300, custo_pa: 20, recarga: 1, tipo: "Ataque", desc: "Causa 130% de Dano." },
            { nome: "Foco Predatório", pe: 500, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Cada golpe dado aumenta o Crítico em 2%." },
            { nome: "Garra Perfurante", pe: 800, custo_pa: 35, recarga: 2, tipo: "Ataque", desc: "Ignora 50% da Resistência inimiga." },
            { nome: "Postura do Arqueado", pe: 1200, custo_pa: 40, recarga: 4, tipo: "Buff", desc: "Aumenta Força em 40% por 3 turnos. (Garante 1 turno de vulnerabilidade do gato sem o buff)." },
            { nome: "Voadora Pesada", pe: 1700, custo_pa: 50, recarga: 3, tipo: "Ataque", desc: "Causa 150% de Dano. 20% chance de atordoar." },
            { nome: "Punhos de Aço", pe: 2300, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Sempre que recebe dano crítico, ganha 20 PA." },
            { nome: "Combo Tsunami", pe: 3000, custo_pa: 75, recarga: 4, tipo: "Ataque", desc: "Três golpes rápidos, cada um causa 80% de Dano." },
            { nome: "O Tigre Oculto", pe: 4000, custo_pa: 100, recarga: 5, tipo: "Ataque Supremo", desc: "Causa 300% de Dano." }
        ]
    },
    meowjitsu: {
        nome: "Meow-Jitsu", 
        cor: "#993399", 
        icone: "icones/meowjitsu.png",
        tecnicas: [
            { nome: "Bofetada Base", pe: 50, custo_pa: 0, recarga: 0, tipo: "Ataque", desc: "Básico. Causa 90% de Dano e gera 15 PA." },
            { nome: "Queda Felina", pe: 150, custo_pa: 20, recarga: 2, tipo: "Debuff", desc: "Derruba inimigo, reduzindo Agilidade dele pela metade." },
            { nome: "Chave de Pata", pe: 300, custo_pa: 25, recarga: 2, tipo: "Ataque", desc: "Causa 110% de Dano e o inimigo perde 10 PA." },
            { nome: "Pelagem Grossa", pe: 500, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Sofre 15% a menos de Dano Crítico." },
            { nome: "Imobilização", pe: 800, custo_pa: 40, recarga: 4, tipo: "Debuff", desc: "O inimigo pula o próximo turno." },
            { nome: "Respiração de Solo", pe: 1200, custo_pa: 35, recarga: 3, tipo: "Cura", desc: "Recupera HP igual a 20% da sua Resistência." },
            { nome: "Estrangulamento", pe: 1700, custo_pa: 50, recarga: 2, tipo: "Ataque Especial", desc: "Causa 140% de Dano que ignora qualquer Esquiva." },
            { nome: "Jiu-Gato", pe: 2300, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Se errar um golpe, recupera metade do PA gasto." },
            { nome: "Quebra-Ossos", pe: 3000, custo_pa: 80, recarga: 4, tipo: "Ataque", desc: "Causa 200% de Dano e zera o PA do inimigo." },
            { nome: "O Triângulo de Ferro", pe: 4000, custo_pa: 100, recarga: 6, tipo: "Ataque Supremo", desc: "Causa 250% de Dano e inimigo não pode usar habilidades por 2 turnos." }
        ]
    },
    catpoeira: {
        nome: "Catpoeira", 
        cor: "#339966", 
        icone: "icones/catpoeira.png",
        tecnicas: [
            { nome: "Rabo de Arraia", pe: 50, custo_pa: 0, recarga: 0, tipo: "Ataque", desc: "Básico. Causa 90% de Dano e gera 10 PA." },
            { nome: "Ginga", pe: 150, custo_pa: 15, recarga: 2, tipo: "Buff", desc: "Aumenta Esquiva em 20% no próximo turno." },
            { nome: "Meia-Lua", pe: 300, custo_pa: 20, recarga: 1, tipo: "Ataque", desc: "Causa 120% de Dano." },
            { nome: "Reflexo Malandro", pe: 500, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Toda vez que esquiva, ganha 5 PA grátis." },
            { nome: "Armada", pe: 800, custo_pa: 30, recarga: 3, tipo: "Ataque", desc: "Causa 100% de Dano e ataca primeiro no próximo turno." },
            { nome: "Axé", pe: 1200, custo_pa: 40, recarga: 4, tipo: "Buff", desc: "Aumenta Agilidade em 50% por 3 turnos." },
            { nome: "Martelo", pe: 1700, custo_pa: 50, recarga: 2, tipo: "Ataque", desc: "Causa 160% de Dano. Se esquivou no turno anterior, dá dano dobrado." },
            { nome: "Vento Forte", pe: 2300, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Golpes normais têm 15% de chance de bater duas vezes." },
            { nome: "Parafuso", pe: 3000, custo_pa: 75, recarga: 3, tipo: "Ataque", desc: "4 acertos rápidos. Causa 60% de Dano cada." },
            { nome: "O Salto da Pantera", pe: 4000, custo_pa: 90, recarga: 5, tipo: "Ataque Supremo", desc: "Causa 280% de Dano e garante esquiva perfeita no próximo turno." }
        ]
    },
    felinethai: {
        nome: "Feline Thai", 
        cor: "#ff6600", 
        icone: "icones/felinethai.png",
        tecnicas: [
            { nome: "Cotovelada", pe: 50, custo_pa: 0, recarga: 0, tipo: "Ataque", desc: "Básico. Causa 110% de Dano e gera 5 PA." },
            { nome: "Canelada", pe: 150, custo_pa: 20, recarga: 1, tipo: "Ataque", desc: "Causa 120% de Dano." },
            { nome: "Arranhão Profundo", pe: 300, custo_pa: 25, recarga: 2, tipo: "Ataque Especial", desc: "Causa 100% de Dano e inimigo perde 5% de HP todo turno (Sangramento)." },
            { nome: "Sede de Sangue", pe: 500, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Todo dano crítico cura o gato em 10% do dano causado." },
            { nome: "Joelhada Voadora", pe: 800, custo_pa: 40, recarga: 2, tipo: "Ataque", desc: "Causa 150% de Dano." },
            { nome: "Instinto Assassino", pe: 1200, custo_pa: 45, recarga: 3, tipo: "Buff", desc: "Próximo ataque tem 100% de chance de Crítico." },
            { nome: "Quebra-Costelas", pe: 1700, custo_pa: 60, recarga: 5, tipo: "Ataque Especial", desc: "Causa 180% de Dano e destrói 20% da Defesa inimiga pro resto da luta." },
            { nome: "Dor Ignorada", pe: 2300, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Quanto menor o HP do gato, mais dano ele causa (até +30%)." },
            { nome: "Chuva de Lâminas", pe: 3000, custo_pa: 85, recarga: 4, tipo: "Ataque Especial", desc: "Aplica 3 acúmulos de Sangramento de uma vez." },
            { nome: "O Rei dos Becos", pe: 4000, custo_pa: 100, recarga: 5, tipo: "Ataque Supremo", desc: "Causa 350% de Dano. O gato toma 15% de recuo no próprio HP." }
        ]
    },
    ronrondo: {
        nome: "Ron-Ron-Dô", 
        cor: "#3366cc", 
        icone: "icones/ronrondo.png",
        tecnicas: [
            { nome: "Pata Pacífica", pe: 50, custo_pa: 0, recarga: 0, tipo: "Ataque", desc: "Básico. Causa 80% de Dano e gera 15 PA." },
            { nome: "Postura da Paz", pe: 150, custo_pa: 15, recarga: 2, tipo: "Defesa", desc: "Absorve 50% do próximo dano." },
            { nome: "Bloqueio Macio", pe: 300, custo_pa: 25, recarga: 2, tipo: "Defesa", desc: "Bloqueia e converte 20% do dano recebido em HP." },
            { nome: "Calma Mental", pe: 500, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Ganha 3 PA extras todo fim de turno." },
            { nome: "Empurrão Suave", pe: 800, custo_pa: 30, recarga: 2, tipo: "Ataque Especial", desc: "Causa 90% de Dano e reduz Força inimiga em 20%." },
            { nome: "Meditação", pe: 1200, custo_pa: 40, recarga: 3, tipo: "Cura", desc: "Cura 30% da Vida Máxima." },
            { nome: "Espelho d'Água", pe: 1700, custo_pa: 50, recarga: 3, tipo: "Defesa Especial", desc: "Devolve 100% do dano recebido no turno inimigo." },
            { nome: "Zen", pe: 2300, custo_pa: 0, recarga: 0, tipo: "Passiva", desc: "[Passiva] Imune a atordoamento e sangramento." },
            { nome: "Palma do Destino", pe: 3000, custo_pa: 70, recarga: 4, tipo: "Ataque", desc: "Causa 200% de Dano (baseado no HP do gato)." },
            { nome: "O Velho e o Marlim", pe: 4000, custo_pa: 100, recarga: 99, tipo: "Suprema (Uso Único)", desc: "Cura 100% do HP e limpa debuffs. O gato fica exausto e não ganha PA por 2 turnos." }
        ]
    }
};
