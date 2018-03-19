import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ATTACK} from '../reducers';

@Component({
  selector: 'app-antagonist',
  templateUrl: './antagonist.component.html',
  styleUrls: ['./antagonist.component.css']
})
export class AntagonistComponent implements OnInit {

  states$;

  constructor(private store: Store<>) {

  }

  ngOnInit() {
    this.store.pipe(select('attack'))
      .subscribe(state => {
        this.states$ = state;
      });
  }

  enemyAttack() {
    this.store.dispatch({type: ATTACK, payload: {attacker: 'enemy', defender: 'hero'}});
  }

}
