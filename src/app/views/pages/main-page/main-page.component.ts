import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../../core/services/poke-api.service";
import {PokemonResultItem} from "../../../core/interafaces/pokemon-result-item.interface";
import {SelectableListElementModel} from "../../../components/selectable-list/selectable-list-element.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonModel} from "../../../core/models/pokemon.model";
import {zip} from "rxjs";
import {SpeciesModel} from "../../../core/models/species.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  readonly pageSize = 20;
  pokemonList: SelectableListElementModel<PokemonResultItem>[] = [];
  pokemonModelList: PokemonModel[] = Array(this.pageSize).fill(new PokemonModel());
  pokemonsCount = 0;
  pageOffset = 0;
  currentPage = 1;
  loading = false;

  constructor(
    private readonly api: PokeApiService,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((q) => {
      const page = parseInt(q.get('page') || '0', 10);
      const offset = page * this.pageSize;
      this.fetchPokemons(offset);
    });
  }

  fetchPokemons(offset: number) {
    this.loading = true;
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
        setTimeout(() => {
          this.loading = false
        }, 1000);
      })
    });
  }

  onPageChange(page: number) {
    this.pageOffset = this.pageSize * (page - 1);
    this.router.navigate(['/pokedex'], {queryParams: {page}});
    this.currentPage = page;
  }

  onPokemonSelect(selectedPokemon: PokemonResultItem) {
    this.api.getPokemon(selectedPokemon.url).subscribe((res) => {
      this.router.navigate(['/details/', res.id])
    });
  }

}
