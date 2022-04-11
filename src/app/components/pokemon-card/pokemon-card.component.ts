import {Component, Input, OnInit} from '@angular/core';
import {PokemonModel} from "../../core/models/pokemon.model";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  pokemon = new PokemonModel();

  isRotated = false;

get className(){
  return { 'pokemon-card--backface': this.isRotated, [`pokemon-card--${this.pokemon.species.color}`]: true };
}
  rotate() {
    this.isRotated = !this.isRotated;
  }

  catch(event: MouseEvent) {
    console.log('catch', this.pokemon);
  }

}
