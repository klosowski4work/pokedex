import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../../core/services";
import {ActivatedRoute} from "@angular/router";
import {PokemonModel} from "../../../core/models/pokemon.model";
import {PokemonDto} from "../../../core/dto";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  pokemonId: number;
  pokemon: PokemonModel = new PokemonModel();
  tmp: PokemonDto | null = null;
  constructor(private readonly api: PokeApiService, readonly activatedRouter: ActivatedRoute) {
    this.pokemonId = parseInt(this.activatedRouter.snapshot.paramMap.get('id') || '-1', 10);
  }

  ngOnInit(): void {
    this.api.getPokemonById(this.pokemonId).subscribe(pokemonDto => {
      this.pokemon = PokemonModel.fromDto(pokemonDto)
      console.log(this.pokemon);
    });
  }

}
