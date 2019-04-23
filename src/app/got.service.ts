import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GOTService {
  casas = [
    {
      'nome': 'Stark',
      'personagens': [
        'Benjen',
        'Eddard',
        'Catelyn',
        'Lyanna',
        'Robb',
        'Arya',
        'Bran',
        'Sansa'
      ]
    },
    {
      'nome': 'Targaryen',
      'personagens': [
        'Danerys',
        'Viserys',
        'Rhaegar',
        'Aegon'
      ]
    },
    {
      'nome': 'Lannister',
      'personagens': [
        'Tywin',
        'Joanna',
        'Cersei',
        'Jaime',
        'Tyrion'
      ]
    },
    {
      'nome': 'Baratheon',
      'personagens': [
        'Steffon',
        'Cassana',
        'Renly',
        'Robert',
        'Stannys'
      ]
    },
    {
      'nome': 'Greyjoy',
      'personagens': [
        'Ballon',
        'Euron',
        'Urrigon',
        'Aeron',
        'Yara',
        'Theon'
      ]
    }
  ];

  jogadas = [];
  constructor() { }
  listaDeCasas() {
    return this.casas;
  }
  listaDePersonagens() {
    let personagens = [];
    for (let casa of this.casas) {
      for (let p of casa.personagens) {
        personagens.push(p);
      }
    }
    return personagens;
  }
  salvarJogador(nome) {
    let j = {
      'nome': nome,
      'escolhas': [

      ]
    };
    this.jogadas.push(j);
  }
  salvarEscolha(nome, casa, personagem) {
    for (let jogada of this.jogadas) {
      if (jogada.nome === nome) {
        jogada.escolhas.push(
          {
            'casa': casa,
            'personagem': personagem
          }
        );
      }
    }
  }
  quantidadeDeAcertos(nome) {
    let acertos = 0;
    for (let jogada of this.jogadas) {
      if (jogada.nome === nome) {
        for (let escolha of jogada.escolhas) {
          for (let casa of this.casas) {
            if (casa.nome == escolha.casa) {
              if (casa.personagens.indexOf(escolha.personagem) != -1) {
                acertos++;
              }
            }
          }
        }
      }
    }
    return acertos;
  }
}
