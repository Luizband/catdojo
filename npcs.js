// ==========================================
// BLOCO 1: CLÃ DOS CANINOS
// ==========================================
const claDosCaninos = [
    { 
      id: "cpu1", cla: "Clã dos Caninos", nome: "Cão de Rua", foto: "imagens/cpu01.png", faixa: 1, 
      forca: 2, agilidade: 1, resistencia: 2, foco: 1, vigor: 1, recompensa: "Baixa" 
    },
    { 
      id: "cpu2", cla: "Clã dos Caninos", nome: "Líder da Matilha", foto: "imagens/cpu02.png", faixa: 5, 
      forca: 10, agilidade: 5, resistencia: 12, foco: 5, vigor: 5, recompensa: "Média" 
    },
    { 
      id: "cpu3", cla: "Clã dos Caninos", nome: "Mastim de Guarda", foto: "imagens/cpu03.png", faixa: 9, 
      forca: 25, agilidade: 15, resistencia: 30, foco: 10, vigor: 15, recompensa: "Alta" 
    },
    { 
      id: "cpu4", cla: "Clã dos Caninos", nome: "Tenente Lobo", foto: "imagens/cpu04.png", faixa: 14, 
      forca: 45, agilidade: 30, resistencia: 50, foco: 20, vigor: 35, recompensa: "Épica" 
    },
    { 
      id: "cpu5", cla: "Clã dos Caninos", nome: "General Akita", foto: "imagens/cpu05.png", faixa: 20, 
      forca: 80, agilidade: 50, resistencia: 100, foco: 40, vigor: 60, recompensa: "Lendária" 
    }
];

// ==========================================
// BLOCO 2: ESPAÇO PARA FUTUROS CLÃS
// ==========================================
const claDosRoedores = [
    // Quando for criar os próximos vilões, basta seguir o mesmo modelo acima e colocar aqui!
];


// ==========================================
// EXPORTAÇÃO OFICIAL PARA A ARENA
// ==========================================
// Os "três pontinhos" (spread operator) espalham todos os membros 
// dos clãs dentro da lista mestre que a Arena vai ler.
export const LISTA_NPCS = [
    ...claDosCaninos,
    // ...claDosRoedores, (Descomente quando o clã for criado)
];
