import {Component, Input} from '@angular/core';
import {PokemonModel} from "../../core/models/pokemon.model";
import {CaughtPokemonService} from "../../core/services/caught-pokemon.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  pokemon = new PokemonModel();
  rotating = false;
  isRotated = false;

  @Input()
  loading = false;

  constructor(private readonly caughtPokemonService: CaughtPokemonService) {
  }


  get className() {
    return {
      'pokemon-card--backface': this.isRotated,
      'pokemon-card--rotate': this.rotating,
      'pokemon-card--loading': this.loading,
      [`pokemon-card--${this.pokemon.species.color}`]: true
    };
  }

  rotate() {
    this.rotating = true;
    setTimeout(() => this.rotating = false, 300);
    this.isRotated = !this.isRotated;
  }

  catch() {
    this.caughtPokemonService.caught(this.pokemon.id);
  }

  isCaught(): boolean {
    return this.caughtPokemonService.isCaught(this.pokemon.id);
  }
}
