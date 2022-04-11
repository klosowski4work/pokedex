import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {POKEAPI_CONFIG_TOKEN, POKEAPI_URL} from "../tokens/pokeapi.token";
import {Observable, of, tap} from "rxjs";
import {PokemonResponse} from "../dto/pokemon.response";
import {PokeapiConfigInterface} from "../interafaces/pokeapi-config.interface";
import {PokemonDto} from "../dto";
import {SpeciesDto} from "../dto/pokemon-species.dto";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  cachedPokemons = new Map<string, PokemonDto>();
  cachedPokemonSpecies = new Map<string, SpeciesDto>();
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(POKEAPI_URL) private readonly baseUrl: string,
    @Inject(POKEAPI_CONFIG_TOKEN) private readonly apiConfig: PokeapiConfigInterface,
  ) {
  }

  fetchPokemons(offset?: number, limit?: number): Observable<PokemonResponse> {
    const { offset: defaultOffset, limit: defaultLimit} = this.apiConfig.pokemon.defaults;
    let params = new HttpParams();
    params = params.set('offset', offset || defaultOffset);
    params = params.set('limit', limit || defaultLimit);

    return this.httpClient.get<PokemonResponse>(`${this.baseUrl}/pokemon?${params.toString()}`);
  }

  // simple cache mechanism
  getPokemon(url: string): Observable<PokemonDto> {
    if (this.cachedPokemons.has(url)) {
      return of(this.cachedPokemons.get(url) as PokemonDto);
    }
    return this.httpClient.get<PokemonDto>(url).pipe(tap(pokemon => {
      this.cachedPokemons.set(url, pokemon);
    }));
  }

  getPokemonSpecies(url: string): Observable<SpeciesDto> {
    if (this.cachedPokemonSpecies.has(url)) {
      return of(this.cachedPokemonSpecies.get(url) as SpeciesDto);
    }
    return this.httpClient.get<SpeciesDto>(url).pipe(tap(species => {
      this.cachedPokemonSpecies.set(url, species);
    }))
  }

  getPokemonById(id: number): Observable<PokemonDto> {
    return this.getPokemon(`${this.baseUrl}/pokemon/${id}/`)
  }
}
