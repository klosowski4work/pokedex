import {Ability, PokemonDto, Stat, Type} from "../dto";
import {SpeciesModel} from "./species.model";

export class PokemonModel {
  abilities: Ability[] = [];
  name: string = 'Pokemon';
  stats: Stat[] = [];
  sprite: string = '';
  types: Type[] = [];
  species = new SpeciesModel();


  static fromDto(dto: PokemonDto): PokemonModel {
    const model = new PokemonModel();
    const {sprites} = dto;
    model.abilities = dto.abilities;
    model.name = dto.name.split('-')[0];
    model.stats = dto.stats;
    model.sprite = sprites.other.dream_world.front_default || sprites.front_default || sprites.other.home.front_default;
    model.types = dto.types;
    return model;
  }
}
