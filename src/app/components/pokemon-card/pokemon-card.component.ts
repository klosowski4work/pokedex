import {Component, HostListener, Input, OnInit} from '@angular/core';
import {PokemonModel} from "../../core/models/pokemon.model";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon = new PokemonModel();

  isRotated = false;

    constructor() {
  }

  @HostListener('click')
  rotate() {
    this.isRotated = !this.isRotated;
  }

  ngOnInit(): void {
  }

}
