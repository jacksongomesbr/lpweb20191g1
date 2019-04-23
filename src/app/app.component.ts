import { Component } from '@angular/core';
import { GOTService } from './got.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = 'inicial';
  jogoAvancarContador = 0;
  nome = null;
  casa = null;
  personagem = null;

  constructor(private service: GOTService) {

  }

  inicialAvancar() {
    this.tela = 'jogo';
    this.service.salvarJogador(this.nome);
  }

  jogoAvancar() {
    this.jogoAvancarContador += 1;
    this.service.salvarEscolha(this.nome, this.casa, this.personagem);
    this.casa = null;
    this.personagem = null;
    if (this.jogoAvancarContador === 3) {
      this.tela = 'resultado';
    }
  }

  reiniciar() {
    this.tela = 'inicial';
    this.jogoAvancarContador = 0;
    this.nome = null;
  }
}
