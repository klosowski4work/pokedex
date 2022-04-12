import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CaughtPokemonService {
  readonly storageKey = '__pokedex_caught_pokemons__';
  caughtPokemonIds: Set<number>;

  constructor() {
    const savedIds = localStorage.getItem(this.storageKey);
    this.caughtPokemonIds = new Set(savedIds?.split(',').map(id => parseInt(id, 10)))
  }

  caught(id: number): void {
    this.caughtPokemonIds.add(id);
    this.save();
  }

  isCaught(id: number): boolean {
    return this.caughtPokemonIds.has(id);
  }

  getCaughtPokemons(): number[]{
    return [...this.caughtPokemonIds];
  }

  save() {
    localStorage.setItem('__pokedex_caught_pokemons__', [...this.caughtPokemonIds].toString())
  }

}
