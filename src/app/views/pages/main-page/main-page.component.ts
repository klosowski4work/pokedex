import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../../core/services/poke-api.service";
import {PokemonResultItem} from "../../../core/interafaces/pokemon-result-item.interface";
import {SelectableListElementModel} from "../../../components/selectable-list/selectable-list-element.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  pokemonList: SelectableListElementModel<PokemonResultItem>[] = [];

  constructor(private readonly api: PokeApiService, private readonly router: Router, private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.api.fetchPokemons(undefined, 20).subscribe((res) => {
      this.pokemonList = res.results.map(item => new SelectableListElementModel<PokemonResultItem>(item.name, item));
    });
  }

  onPokemonSelect(selectedPokemon: PokemonResultItem) {
    this.api.getPokemon(selectedPokemon.url).subscribe((res)=> {
      this.router.navigate(['/details/',res.id])
    });
  }

}
