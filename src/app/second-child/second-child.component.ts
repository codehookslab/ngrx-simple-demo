import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit() {
    console.log('Second Child');
    this.counter = this.store.select('count');
  }

}
