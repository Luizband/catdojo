// ==========================================
// BLOCO 1: CLÃ DOS CANINOS
// ==========================================
const claDosCaninos = [
    { 
      id: "cpu1", cla: "Clã dos Caninos", nome: "Cão de Rua", foto: "imagens/cpu01.png", 
      faixa: 1, slots: 2, 
      forca: 2, agilidade: 1, resistencia: 2, foco: 1, vigor: 1, recompensa: "Baixa",
      habilidadesEquipadas: ["Soco Quebra-Telha", "Pata Frontal"]
    },
    { 
      id: "cpu2", cla: "Clã dos Caninos", nome: "Líder da Matilha", foto: "imagens/cpu02.png", 
      faixa: 5, slots: 2, 
      forca: 10, agilidade: 5, resistencia: 12, foco: 5, vigor: 5, recompensa: "Média",
      habilidadesEquipadas: ["Canelada", "Cotovelada"]
    },
    { 
      id: "cpu3", cla: "Clã dos Caninos", nome: "Mastim de Guarda", foto: "imagens/cpu03.png", 
      faixa: 9, slots: 4, 
      forca: 25, agilidade: 15, resistencia: 30, foco: 10, vigor: 15, recompensa: "Alta",
      habilidadesEquipadas: ["Empurrão Suave", "Bloqueio Duro", "Bloqueio Macio", "Pata Pacífica"]
    },
    { 
      id: "cpu4", cla: "Clã dos Caninos", nome: "Tenente Lobo", foto: "imagens/cpu04.png", 
      faixa: 14, slots: 4, 
      forca: 45, agilidade: 30, resistencia: 50, foco: 20, vigor: 35, recompensa: "Épica",
      habilidadesEquipadas: ["Joelhada Voadora", "Arranhão Profundo", "Canelada", "Cotovelada"]
    },
    { 
      id: "cpu5", cla: "Clã dos Caninos", nome: "General Akita", foto: "imagens/cpu05.png", 
      faixa: 20, slots: 6, 
      forca: 80, agilidade: 50, resistencia: 100, foco: 40, vigor: 60, recompensa: "Lendária (Boss)",
      habilidadesEquipadas: ["O Rei dos Becos", "Quebra-Costelas", "Instinto Assassino", "Postura do Arqueado", "Soco Quebra-Telha", "Rabo de Arraia"]
    }
];

// ==========================================
// EXPORTAÇÃO OFICIAL PARA A ARENA
// ==========================================
export const LISTA_NPCS = [
    ...claDosCaninos
];
