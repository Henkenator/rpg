import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProtagonistComponent } from './protagonist/protagonist.component';
import {StoreModule} from '@ngrx/store';
import {attack, defend} from './reducers';
import { AntagonistComponent } from './antagonist/antagonist.component';


@NgModule({
  declarations: [
    AppComponent,
    ProtagonistComponent,
    AntagonistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({attack: attack, defend: defend})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
