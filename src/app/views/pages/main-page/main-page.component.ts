import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../../core/services/poke-api.service";
import {PokemonResultItem} from "../../../core/interafaces/pokemon-result-item.interface";
import {SelectableListElementModel} from "../../../components/selectable-list/selectable-list-element.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PokemonModel} from "../../../core/models/pokemon.model";
import {zip} from "rxjs";
import {SpeciesModel} from "../../../core/models/species.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  pokemonList: SelectableListElementModel<PokemonResultItem>[] = [];
  pokemonModelList: PokemonModel[] = [];
  readonly pageSize = 20;
  pokemonsCount = 0;
  pageOffset = 0;
  currentPage = 1;

  constructor(private readonly api: PokeApiService, private readonly router: Router, private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPokemons(0);
  }

  fetchPokemons(offset: number) {
    this.api.fetchPokemons(offset, this.pageSize).subscribe((res) => {
      this.pokemonList = res.results.map(item => new SelectableListElementModel<PokemonResultItem>(item.name, item));
      const requests$ = res.results.map(item => this.api.getPokemon(item.url));
      this.pokemonsCount = res.count;

      zip(...requests$).subscribe(pokemonDtoList => {
        this.pokemonModelList = pokemonDtoList.map(dto => {
          const pokemonModel = PokemonModel.fromDto(dto)
          this.api.getPokemonSpecies(dto.species.url).subscribe(res => {
            pokemonModel.species = SpeciesModel.fromDto(res);
          })
          return pokemonModel;
        });
      })
    });
  }

  onPageChange(page: number) {
    this.pageOffset = this.pageSize * page - 1;
    this.fetchPokemons(this.pageOffset);
    this.currentPage = page;
  }

  onPokemonSelect(selectedPokemon: PokemonResultItem) {
    this.api.getPokemon(selectedPokemon.url).subscribe((res) => {
      this.router.navigate(['/details/', res.id])
    });
  }

}
