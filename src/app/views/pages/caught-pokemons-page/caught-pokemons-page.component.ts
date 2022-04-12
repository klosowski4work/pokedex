import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../../core/services";
import {PokemonResultItem} from "../../../core/interafaces/pokemon-result-item.interface";
import {SelectableListElementModel} from "../../../components/selectable-list/selectable-list-element.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonModel} from "../../../core/models/pokemon.model";
import {zip} from "rxjs";
import {SpeciesModel} from "../../../core/models/species.model";
import {CaughtPokemonService} from "../../../core/services/caught-pokemon.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './caught-pokemons-page.component.html',
  styleUrls: ['./caught-pokemons-page.component.scss']
})
export class CaughtPokemonsPageComponent implements OnInit {
  readonly pageSize = 20;
  pokemonModelList: PokemonModel[] = Array(this.pageSize).fill(new PokemonModel());
  pokemonsCount = 0;
  pageOffset = 0;
  currentPage = 1;
  loading = false;

  constructor(
    private readonly api: PokeApiService,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly caughtPokemonsService: CaughtPokemonService
  ) {
  }

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((q) => {
      const page = parseInt(q.get('page') || '0', 10);
      const offset = page * this.pageSize;
      this.fetchPokemons();
    });
  }

  fetchPokemons() {
    this.loading = true;
    const pokemonIds = this.caughtPokemonsService.getCaughtPokemons();
    this.pokemonsCount = pokemonIds.length;
    const requests$ = pokemonIds.map(id => this.api.getPokemonById(id))

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
  }

  onPageChange(page: number) {
    this.pageOffset = this.pageSize * (page - 1);
    this.router.navigate(['/pokedex'], {queryParams: {page}});
    this.currentPage = page;
  }
}
