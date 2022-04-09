import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "./core/services/poke-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

}
