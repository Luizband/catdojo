// faixas.js
// Tabela Oficial de Progressão de XP, Cores, Slots e Imagens do GDD

export const FAIXAS = {
    1:  { cor: "Branca", xpProxFaixa: 200, slotsBatalha: 2, imagem: "imagens/01.png" },
    2:  { cor: "Cinza/Branco", xpProxFaixa: 300, slotsBatalha: 2, imagem: "imagens/02.png" },
    3:  { cor: "Cinza", xpProxFaixa: 400, slotsBatalha: 2, imagem: "imagens/03.png" },
    4:  { cor: "Cinza/Preto", xpProxFaixa: 500, slotsBatalha: 2, imagem: "imagens/04.png" },
    5:  { cor: "Amarela/Branco", xpProxFaixa: 600, slotsBatalha: 2, imagem: "imagens/05.png" },
    6:  { cor: "Amarelo", xpProxFaixa: 700, slotsBatalha: 3, imagem: "imagens/06.png" },
    7:  { cor: "Amarelo/Preto", xpProxFaixa: 800, slotsBatalha: 3, imagem: "imagens/07.png" },
    8:  { cor: "Laranja/Branco", xpProxFaixa: 900, slotsBatalha: 3, imagem: "imagens/08.png" },
    9:  { cor: "Laranja", xpProxFaixa: 1000, slotsBatalha: 4, imagem: "imagens/09.png" },
    10: { cor: "Laranja/Preto", xpProxFaixa: 1100, slotsBatalha: 4, imagem: "imagens/10.png" },
    11: { cor: "Verde/Branco", xpProxFaixa: 1200, slotsBatalha: 4, imagem: "imagens/11.png" },
    12: { cor: "Verde", xpProxFaixa: 1300, slotsBatalha: 4, imagem: "imagens/12.png" },
    13: { cor: "Verde/Preto", xpProxFaixa: 1400, slotsBatalha: 4, imagem: "imagens/13.png" },
    14: { cor: "Azul", xpProxFaixa: 1500, slotsBatalha: 4, imagem: "imagens/14.png" },
    15: { cor: "Roxa", xpProxFaixa: 1650, slotsBatalha: 5, imagem: "imagens/15.png" },
    16: { cor: "Marrom", xpProxFaixa: 1800, slotsBatalha: 5, imagem: "imagens/16.png" },
    17: { cor: "Vermelho/Branco", xpProxFaixa: 2000, slotsBatalha: 5, imagem: "imagens/17.png" },
    18: { cor: "Vermelho", xpProxFaixa: 2200, slotsBatalha: 5, imagem: "imagens/18.png" },
    19: { cor: "Vermelho/Preto", xpProxFaixa: 2450, slotsBatalha: 5, imagem: "imagens/19.png" },
    20: { cor: "Preta", xpProxFaixa: Infinity, slotsBatalha: 6, imagem: "imagens/20.png" } // MÁXIMO
};

// Constante global de pontos ganhos por cada Level Up (GDD)
export const PONTOS_POR_EVOLUCAO = 7;

/**
 * Função utilitária para calcular o nível atual e se há pontos pendentes.
 * Pode ser usada no Dormitório ou no Tatame para recalcular o gato.
 * @param {number} xpAtual - O XP total acumulado do gato no banco de dados
 * @returns {object} { nivelAtual, xpProxFaixa }
 */
export function calcularNivelPorXp(xpAtual) {
    let nivelAlcancado = 1;
    
    // Percorre do nível 1 ao 19 verificando se o XP atual ultrapassa a exigência
    for (let i = 1; i < 20; i++) {
        if (xpAtual >= FAIXAS[i].xpProxFaixa) {
            nivelAlcancado = i + 1;
        } else {
            break; // Parou de subir de nível
        }
    }
    
    return {
        nivelAtual: nivelAlcancado,
        xpProxFaixa: FAIXAS[nivelAlcancado].xpProxFaixa
    };
}
