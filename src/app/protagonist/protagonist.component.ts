import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ATTACK, DEFEND} from '../reducers';

@Component({
  selector: 'app-protagonist',
  templateUrl: './protagonist.component.html',
  styleUrls: ['./protagonist.component.css']
})
export class ProtagonistComponent implements OnInit {

  states$;

  constructor(private store: Store<any>) {
    store.pipe(select('attack'))
      .subscribe(state => {
        this.states$ = state;
      });
  }

  ngOnInit() {
  }

  heroAttack() {
    this.store.dispatch({type: ATTACK, payload: {attacker: 'hero', defender: 'enemy'}});
  }

  heroDefend() {
    this.store.dispatch({type: DEFEND});
  }
}
