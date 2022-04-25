let buttonDitado = document.getElementById('button-ditado');
let ditado = document.getElementById('ditado');

buttonDitado.addEventListener('click', geraDitado);

function geraDitado() {
    let rng = Math.floor(Math.random() * 50);
    if(rng < 32){
        let rng2 = Math.floor(Math.random() * (adjetivosMasc.length - 1));
        let rng3 = Math.floor(Math.random() * (atividades.length - 1));
        ditado.innerText = animais[rng] + ' ' + adjetivosMasc[rng2] + ' ' + atividades[rng3] + '.';
    }else {
        let rng2 = Math.floor(Math.random() * (adjetivosFem.length - 1));
        let rng3 = Math.floor(Math.random() * (atividades.length -1));
        ditado.innerText = animais[rng] + ' ' + adjetivosFem[rng2] + ' ' + atividades[rng3] + '.';
    }
    
}

let animais = ['Avestruz',  'Beija-flor', 'Bezerro',  'Cachorro', 'Canguru', 'Caranguejo', 'Dinossauro', 'Dromedário', 'Elefante', 'Escorpião', 'Esquilo', 'Gato', 'Golfinho', 'Hamster', 'Hipopótamo', 'Jacaré', 'Leão', 'Morcego', 'Mamute', 'Urso Panda', 'Papagaio', 'Pato', 'Peixe-boi', 'Pinguim','Sabiá', 'Sirí', 'Tamanduá', 'Tatu', 'Tubarão', 'Touro', 'Urubu', 'Vagalume', 'Arara', 'Abelha', 'Aranha', 'Barata', 'Borboleta', 'Cobra', 'Formiga', 'Foca',  'Girafa', 'Joaninha', 'Lagartixa', 'Lombriga', 'Minhoca', 'Ovelha', 'Onça', 'Raposa', 'Rã', 'Tartaruga', 'Zebra'];



let adjetivosMasc = ['ansioso', 'apressado', 'atrevido', 'arrogante', 'bem comportado', 'brilhante', 'calmo', 'capacitado', 'chateado', 'curioso', 'criativo', 'desenrolado', 'disciplinado', 'dissimulado', 'egoísta', 'esclarecido', 'estressado', 'esperto', 'fanático', 'feroz', 'ganancioso', 'grosseiro', 'guloso', 'hipócrita', 'humilde', 'ignorante', 'indeciso', 'inocente', 'letrado', 'lúcido', 'maduro', 'magoado', 'mentiroso', 'mimado', 'obediente', 'otimista', 'paciente', 'perseverante', 'preparado', 'qualificado', 'realista', 'revoltado', 'romântico', 'sábio', 'sensato', 'talentoso', 'trapaceiro', 'vaidoso', 'vingativo', 'zangado', 'magro', 'careca'];



let adjetivosFem = ['ansiosa', 'apressada', 'atrevida', 'arrogante', 'bem comportada', 'brilhante', 'calma', 'capacitada', 'chateada', 'curiosa', 'criativa', 'desenrolada', 'disciplinada', 'dissimulada', 'egoísta', 'esclarecida', 'estressada', 'esperto', 'fanática', 'feroz', 'gananciosa', 'grosseira', 'gulosa', 'hipócrita', 'humilde', 'ignorante', 'indecisa', 'inocente', 'letrada', 'lúcida', 'madura', 'magoada', 'mentirosa', 'mimada', 'obediente', 'otimista', 'paciente', 'perseverante', 'preparada', 'qualificada', 'realista', 'revoltada', 'romântica', 'sábia', 'sensata', 'talentosa', 'trapaceira', 'vaidosa', 'vingativa', 'zangada', 'magra', 'careca'];

let atividades = ['não faz panqueca no sábado', 'não faz sombra pra ninguém estacionar', 'não precisa de avião', 'não ouve música alta', 'não nasce na sexta feira', 'não pula do barco sem saber nadar', 'não adivinha chuva', 'não escova os dentes sem comer', 'não para em máquina de frango assado', 'não come folha em árvore baixa', 'não toca piano em noite de chuva', 'não volta pra casa descalço', 'não leva carne pra churrasco', 'não houve disco arranhado', 'anda sempre de olho aberto', 'sai do circo antes do palhaço', 'não anda de celta em trilha', 'não assusta quem cuida da sorte', 'não tem ré', 'não corre atrás de carro parado', 'não anda de bicicleta em dia de semana', 'não late pra linguiça', 'não pula portão aberto', 'não lê jornal em pé', 'nunca ganha na mega-sena', 'não se mistura com zebra molhada', 'não descansa em sombra de coqueiro', 'não come olhando pros lados', 'não passa perto de muro azul', 'não sobe em árvore sem fruta'];

