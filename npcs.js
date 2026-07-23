// ==========================================
// BLOCO 1: CLÃ DOS CANINOS (Foco em Defesa e Vigor - Os Tanques)
// ==========================================
const claDosCaninos = [
    { 
      // Tier 1 (10 pts). Faixa 1 (10 pts total)
      id: "cpu1", cla: "Clã dos Caninos", nome: "Rocco", foto: "imagens/cpu01.png", 
      faixa: 1, slots: 2, 
      forca: 2, agilidade: 1, resistencia: 4, foco: 1, vigor: 2,
      habilidadesEquipadas: ["Pata Frontal", "Soco Quebra-Telha"]
    },
    { 
      // Tier 1. Faixa 5 (+28 pts = 38 pts total)
      id: "cpu2", cla: "Clã dos Caninos", nome: "Brutus", foto: "imagens/cpu02.png", 
      faixa: 5, slots: 2, 
      forca: 8, agilidade: 3, resistencia: 15, foco: 2, vigor: 10,
      habilidadesEquipadas: ["Cotovelada", "Canelada"]
    },
    { 
      // Tier 1. Faixa 9 (+56 pts = 66 pts total)
      id: "cpu3", cla: "Clã dos Caninos", nome: "Chumbo", foto: "imagens/cpu03.png", 
      faixa: 9, slots: 4, 
      forca: 15, agilidade: 5, resistencia: 26, foco: 4, vigor: 16,
      habilidadesEquipadas: ["Pata Pacífica", "Bloqueio Duro", "Bloqueio Macio", "Empurrão Suave"]
    },
    { 
      // Tier 1. Faixa 14 (+91 pts = 101 pts total)
      id: "cpu4", cla: "Clã dos Caninos", nome: "Razor", foto: "imagens/cpu04.png", 
      faixa: 14, slots: 4, 
      forca: 25, agilidade: 8, resistencia: 40, foco: 6, vigor: 22,
      habilidadesEquipadas: ["Cotovelada", "Canelada", "Arranhão Profundo", "Joelhada Voadora"]
    },
    { 
      // Tier 1. Faixa 20 (+133 pts = 143 pts total) -> O Teto do Clã 1
      id: "cpu5", cla: "Clã dos Caninos", nome: "Don Lorenzo", foto: "imagens/cpu05.png", 
      faixa: 20, slots: 6, 
      forca: 35, agilidade: 12, resistencia: 56, foco: 10, vigor: 30, 
      isBoss: true, custoRep: 150, moedasBoss: 1000, xpBoss: 500, repBoss: 50,
      habilidadesEquipadas: ["Pata Frontal", "Soco Quebra-Telha", "Quebra-Costelas", "Postura do Arqueado", "Instinto Assassino", "O Rei dos Becos"]
    }
];

// ==========================================
// BLOCO 2: CLÃ DA PRESA (Foco em Agilidade e Esquiva - Os Assassinos)
// ==========================================
const claDaPresa = [
    { 
      // Tier 3 (15 pts). Faixa 2 (+7 pts = 22 pts total)
      id: "cpu6", cla: "Clã da Presa", nome: "Cobra John", foto: "imagens/cpu06.png", 
      faixa: 2, slots: 2, 
      forca: 4, agilidade: 9, resistencia: 2, foco: 5, vigor: 2,
      habilidadesEquipadas: ["Rabo de Arraia", "Ginga"]
    },
    { 
      // Tier 3. Faixa 6 (+35 pts = 50 pts total)
      id: "cpu7", cla: "Clã da Presa", nome: "Cameo", foto: "imagens/cpu07.png", 
      faixa: 6, slots: 2, 
      forca: 10, agilidade: 20, resistencia: 4, foco: 11, vigor: 5,
      habilidadesEquipadas: ["Rabo de Arraia", "Meia-Lua"]
    },
    { 
      // Tier 3. Faixa 11 (+70 pts = 85 pts total)
      id: "cpu8", cla: "Clã da Presa", nome: "Zeca Tocaia", foto: "imagens/cpu08.png", 
      faixa: 11, slots: 4, 
      forca: 18, agilidade: 34, resistencia: 8, foco: 17, vigor: 8,
      habilidadesEquipadas: ["Rabo de Arraia", "Meia-Lua", "Armada", "Axé"]
    },
    { 
      // Tier 3. Faixa 16 (+105 pts = 120 pts total)
      id: "cpu9", cla: "Clã da Presa", nome: "Ouro Fino", foto: "imagens/cpu09.png", 
      faixa: 16, slots: 4, 
      forca: 25, agilidade: 47, resistencia: 12, foco: 24, vigor: 12,
      habilidadesEquipadas: ["Rabo de Arraia", "Meia-Lua", "Martelo", "Parafuso"]
    },
    { 
      // Tier 3. Faixa 20 (+133 pts = 148 pts total) -> O Teto do Clã 2
      id: "cpu10", cla: "Clã da Presa", nome: "Mestre Sabota", foto: "imagens/cpu10.png", 
      faixa: 20, slots: 6, 
      forca: 30, agilidade: 57, resistencia: 16, foco: 31, vigor: 14, 
      isBoss: true, custoRep: 250, moedasBoss: 2000, xpBoss: 1200, repBoss: 100,
      habilidadesEquipadas: ["Rabo de Arraia", "Ginga", "Meia-Lua", "Armada", "Parafuso", "O Salto da Pantera"]
    }
];

// ==========================================
// BLOCO 3: CLÃ ARCHEA (Foco em Foco e Controle - A Elite Tática)
// ==========================================
const claArchea = [
    { 
      // Tier 4 (17 pts). Faixa 3 (+14 pts = 31 pts total)
      id: "cpu11", cla: "Clã Archea", nome: "Pio", foto: "imagens/cpu11.png", 
      faixa: 3, slots: 2, 
      forca: 4, agilidade: 3, resistencia: 9, foco: 10, vigor: 5,
      habilidadesEquipadas: ["Bofetada Base", "Queda Felina"]
    },
    { 
      // Tier 4. Faixa 8 (+49 pts = 66 pts total)
      id: "cpu12", cla: "Clã Archea", nome: "Talon", foto: "imagens/cpu12.png", 
      faixa: 8, slots: 3, 
      forca: 10, agilidade: 8, resistencia: 18, foco: 20, vigor: 10,
      habilidadesEquipadas: ["Bofetada Base", "Queda Felina", "Chave de Pata"]
    },
    { 
      // Tier 4. Faixa 13 (+84 pts = 101 pts total)
      id: "cpu13", cla: "Clã Archea", nome: "Sisyphus", foto: "imagens/cpu13.png", 
      faixa: 13, slots: 4, 
      forca: 16, agilidade: 12, resistencia: 28, foco: 30, vigor: 15,
      habilidadesEquipadas: ["Pata Pacífica", "Chave de Pata", "Respiração de Solo", "Imobilização"]
    },
    { 
      // Tier 4. Faixa 18 (+119 pts = 136 pts total)
      id: "cpu14", cla: "Clã Archea", nome: "Penumbra", foto: "imagens/cpu14.png", 
      faixa: 18, slots: 4, 
      forca: 22, agilidade: 16, resistencia: 38, foco: 40, vigor: 20,
      habilidadesEquipadas: ["Bofetada Base", "Imobilização", "Estrangulamento", "Quebra-Ossos"]
    },
    { 
      // Tier 4. Faixa 20 (+133 pts = 150 pts total) -> O Ponto Máximo do Jogo!
      id: "cpu15", cla: "Clã Archea", nome: "Conde Zero", foto: "imagens/cpu15.png", 
      faixa: 20, slots: 6, 
      forca: 25, agilidade: 20, resistencia: 42, foco: 45, vigor: 18, 
      isBoss: true, custoRep: 400, moedasBoss: 4000, xpBoss: 2500, repBoss: 200,
      habilidadesEquipadas: ["Bofetada Base", "Chave de Pata", "Respiração de Solo", "Estrangulamento", "Quebra-Ossos", "O Triângulo de Ferro"]
    }
];

// ==========================================
// EXPORTAÇÃO OFICIAL PARA A ARENA
// ==========================================
export const LISTA_NPCS = [
    ...claDosCaninos,
    ...claDaPresa,
    ...claArchea
];
