import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {HERO_ATTACK, ENEMY_ATTACK} from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //state$: Observable<any>;

  //constructor(private store: Store) {
  constructor() {
    //this.state$ = store.pipe(select('attack'));
  }



  enemyAttack() {
    //this.store.dispatch({type: ENEMY_ATTACK});
  }

}
