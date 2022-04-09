import {PokemonResultItem} from "../interafaces/pokemon-result-item.interface";

export interface PokemonResponse {
  count: number,
  next: string,
  previous: string,
  results: PokemonResultItem[]
}
