import {SpeciesDto} from "../dto";
import {PokemonColor} from "../enums";
import {EggEnum} from "../enums/egg.enum";

export class SpeciesModel {
  baseHappiness = 0;
  captureRate = 0;
  color: PokemonColor = PokemonColor.Brown;
  flavorText = '';
  eggGroups: EggEnum[] = [];

  static fromDto(dto: SpeciesDto): SpeciesModel {
    const model = new SpeciesModel();
    model.baseHappiness = dto.base_happiness;
    model.captureRate = dto.capture_rate;
    model.color = dto.color.name as PokemonColor;
    model.flavorText = dto.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text.replace(/\/f/g,'') || '';
    model.eggGroups = dto.egg_groups.map(eggGroup => eggGroup.name as EggEnum);
    return model;
  }
}
