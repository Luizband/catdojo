// ==========================================
// BLOCO 1: CLÃ DOS CANINOS (Foco em Defesa e Força Bruta)
// ==========================================
const claDosCaninos = [
    { 
      id: "cpu1", cla: "Clã dos Caninos", nome: "Rocco", foto: "imagens/cpu01.png", 
      faixa: 1, slots: 2, 
      forca: 2, agilidade: 1, resistencia: 2, foco: 1, vigor: 1,
      habilidadesEquipadas: ["Soco Quebra-Telha", "Pata Frontal"]
    },
    { 
      id: "cpu2", cla: "Clã dos Caninos", nome: "Brutus", foto: "imagens/cpu02.png", 
      faixa: 5, slots: 2, 
      forca: 10, agilidade: 5, resistencia: 12, foco: 5, vigor: 5,
      habilidadesEquipadas: ["Canelada", "Cotovelada"]
    },
    { 
      id: "cpu3", cla: "Clã dos Caninos", nome: "Chumbo", foto: "imagens/cpu03.png", 
      faixa: 9, slots: 4, 
      forca: 25, agilidade: 15, resistencia: 30, foco: 10, vigor: 15,
      habilidadesEquipadas: ["Empurrão Suave", "Bloqueio Duro", "Bloqueio Macio", "Pata Pacífica"]
    },
    { 
      id: "cpu4", cla: "Clã dos Caninos", nome: "Razor", foto: "imagens/cpu04.png", 
      faixa: 14, slots: 4, 
      forca: 45, agilidade: 30, resistencia: 50, foco: 20, vigor: 35,
      habilidadesEquipadas: ["Joelhada Voadora", "Arranhão Profundo", "Canelada", "Cotovelada"]
    },
    { 
      id: "cpu5", cla: "Clã dos Caninos", nome: "Mestre Akita", foto: "imagens/cpu05.png", 
      faixa: 20, slots: 6, 
      forca: 80, agilidade: 50, resistencia: 100, foco: 40, vigor: 60, 
      isBoss: true, custoRep: 150, moedasBoss: 1000, xpBoss: 500, repBoss: 50,
      habilidadesEquipadas: ["O Rei dos Becos", "Quebra-Costelas", "Instinto Assassino", "Postura do Arqueado", "Soco Quebra-Telha", "Rabo de Arraia"]
    }
];

// ==========================================
// BLOCO 2: CLÃ DA PRESA (Foco em Agilidade e Esquiva - Catpoeira)
// ==========================================
const claDaPresa = [
    { 
      id: "cpu6", cla: "Clã da Presa", nome: "Cobra John", foto: "imagens/cpu06.png", 
      faixa: 2, slots: 2, 
      forca: 2, agilidade: 5, resistencia: 1, foco: 2, vigor: 2,
      habilidadesEquipadas: ["Rabo de Arraia", "Ginga"]
    },
    { 
      id: "cpu7", cla: "Clã da Presa", nome: "Sander", foto: "imagens/cpu07.png", 
      faixa: 6, slots: 2, 
      forca: 8, agilidade: 18, resistencia: 5, foco: 10, vigor: 8,
      habilidadesEquipadas: ["Armada", "Meia-Lua"]
    },
    { 
      id: "cpu8", cla: "Clã da Presa", nome: "Mestre Tuta", foto: "imagens/cpu08.png", 
      faixa: 11, slots: 4, 
      forca: 20, agilidade: 40, resistencia: 15, foco: 25, vigor: 20,
      habilidadesEquipadas: ["Martelo", "Axé", "Armada", "Rabo de Arraia"]
    },
    { 
      id: "cpu9", cla: "Clã da Presa", nome: "Cameo", foto: "imagens/cpu09.png", 
      faixa: 16, slots: 4, 
      forca: 35, agilidade: 65, resistencia: 30, foco: 40, vigor: 40,
      habilidadesEquipadas: ["Parafuso", "Martelo", "Meia-Lua", "Reflexo Malandro"]
    },
    { 
      id: "cpu10", cla: "Clã da Presa", nome: "Don Dilo", foto: "imagens/cpu10.png", 
      faixa: 20, slots: 6, 
      forca: 60, agilidade: 120, resistencia: 50, foco: 70, vigor: 70, 
      isBoss: true, custoRep: 250, moedasBoss: 2000, xpBoss: 1200, repBoss: 100,
      habilidadesEquipadas: ["O Salto da Pantera", "Parafuso", "Axé", "Armada", "Meia-Lua", "Vento Forte"]
    }
];

// ==========================================
// BLOCO 3: CLÃ ARCHEA (Foco em Foco e Debuffs - Meow-Jitsu)
// ==========================================
const claArchea = [
    { 
      id: "cpu11", cla: "Clã Archea", nome: "Pio", foto: "imagens/cpu11.png", 
      faixa: 3, slots: 2, 
      forca: 3, agilidade: 2, resistencia: 3, foco: 5, vigor: 3,
      habilidadesEquipadas: ["Bofetada Base", "Queda Felina"]
    },
    { 
      id: "cpu12", cla: "Clã Archea", nome: "Rojo", foto: "imagens/cpu12.png", 
      faixa: 8, slots: 3, 
      forca: 12, agilidade: 10, resistencia: 15, foco: 20, vigor: 12,
      habilidadesEquipadas: ["Chave de Pata", "Queda Felina", "Bofetada Base"]
    },
    { 
      id: "cpu13", cla: "Clã Archea", nome: "Sisyphus", foto: "imagens/cpu13.png", 
      faixa: 13, slots: 4, 
      forca: 30, agilidade: 25, resistencia: 35, foco: 45, vigor: 30,
      habilidadesEquipadas: ["Imobilização", "Chave de Pata", "Respiração de Solo", "Pelagem Grossa"]
    },
    { 
      id: "cpu14", cla: "Clã Archea", nome: "Penumbra", foto: "imagens/cpu14.png", 
      faixa: 18, slots: 4, 
      forca: 50, agilidade: 40, resistencia: 60, foco: 80, vigor: 50,
      habilidadesEquipadas: ["Estrangulamento", "Imobilização", "Quebra-Ossos", "Bofetada Base"]
    },
    { 
      id: "cpu15", cla: "Clã Archea", nome: "Conde Pena", foto: "imagens/cpu15.png", 
      faixa: 20, slots: 6, 
      forca: 90, agilidade: 70, resistencia: 110, foco: 150, vigor: 100, 
      isBoss: true, custoRep: 400, moedasBoss: 4000, xpBoss: 2500, repBoss: 200,
      habilidadesEquipadas: ["O Triângulo de Ferro", "Quebra-Ossos", "Estrangulamento", "Respiração de Solo", "Imobilização", "Jiu-Gato"]
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
