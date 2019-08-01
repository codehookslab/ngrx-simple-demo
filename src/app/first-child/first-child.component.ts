import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../store/store.actions';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit() {

  }

  handleIncrement() {
    console.log('Handling increment');
    this.store.dispatch(new Increment());
  }

  handleDecrement() {
    console.log('Handling decrement');
    this.store.dispatch(new Decrement());
  }

  handleReset() {
    console.log('Handling reset');
    this.store.dispatch(new Reset());
  }

}
