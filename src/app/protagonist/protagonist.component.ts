import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {DEFEND, HERO_ATTACK} from '../reducers';

@Component({
  selector: 'app-protagonist',
  templateUrl: './protagonist.component.html',
  styleUrls: ['./protagonist.component.css']
})
export class ProtagonistComponent implements OnInit {

  states$;

  constructor(private store: Store<any>) {
    //this.states$ = store.pipe(select('attack'));
    //this.states$.subscribe();
    //console.log(this.states$);
    store.pipe(select('attack'))
      .subscribe(state => {
        this.states$ = state;
      });
  }

  ngOnInit() {
  }

  heroAttack() {
    this.store.dispatch({type: HERO_ATTACK});
  }

  heroDefend() {
    this.store.dispatch({type: DEFEND});
  }
}
