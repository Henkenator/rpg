import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProtagonistComponent } from './protagonist/protagonist.component';
import {ActionReducer, State, StoreModule} from '@ngrx/store';
import {attack, defend} from './reducers';
import { AntagonistComponent } from './antagonist/antagonist.component';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [
    AppComponent,
    ProtagonistComponent,
    AntagonistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {attack: attack, defend: defend},
      {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
