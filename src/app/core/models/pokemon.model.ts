import {Ability, PokemonDto, Stat, Type} from "../dto";

export class PokemonModel {
  abilities: Ability[] = [];
  name: string = '';
  stats: Stat[] = [];
  sprite: string = '';
  types: Type[] = [];

  static fromDto(dto: PokemonDto): PokemonModel {
    const model = new PokemonModel();
    model.abilities = dto.abilities;
    model.name = dto.name.split('-')[0];
    model.stats = dto.stats;
    model.sprite = dto.sprites.other.dream_world.front_default || dto.sprites.front_default;
    model.types = dto.types;
    return model;
  }
}
