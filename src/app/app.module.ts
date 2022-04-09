import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {POKEAPI_CONFIG_TOKEN, POKEAPI_URL} from "./core/tokens/pokeapi.token";
import {environment} from "../environments/environment";
import {pokeapiConfig} from "./configs/pokeapi.config";
import {HttpClientModule} from "@angular/common/http";
import {ThemeModule} from "./views/theme/theme.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule
  ],
  providers: [{
    provide: POKEAPI_URL,
    useValue: environment.pokeApi,
  }, {
    provide: POKEAPI_CONFIG_TOKEN,
    useValue: pokeapiConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
