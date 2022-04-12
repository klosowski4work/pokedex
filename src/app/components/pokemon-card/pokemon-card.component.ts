import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PokemonModel} from "../../core/models/pokemon.model";

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

  @ViewChild('pokeball')
  pokeball!: ElementRef<HTMLDivElement>;

  @Input()
  loading = false;


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
    console.log(this.pokemon);
  }

}
