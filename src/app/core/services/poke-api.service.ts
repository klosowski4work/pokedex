import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {POKEAPI_CONFIG_TOKEN, POKEAPI_URL} from "../tokens/pokeapi.token";
import {Observable} from "rxjs";
import {PokemonResponse} from "../dto/pokemon.response";
import {PokeapiConfigInterface} from "../interafaces/pokeapi-config.interface";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

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


}
