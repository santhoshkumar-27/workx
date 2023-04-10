import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { concatMap, exhaustMap, switchMap, tap } from 'rxjs/operators'
import { DbjsonService } from './dbjson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  post$: Subject<{ id: number }> = new Subject<{ id: number }>();
  title = 'workx';
  constructor(
    private dbjson: DbjsonService
  ) {

  }
  ngOnInit(): void {
    this.post$.pipe(
      tap(value => console.log('value', value)),
      // switchMap(innerStream => this.dbjson.getById(innerStream.id))
      // concatMap(innerStream => this.dbjson.getById(innerStream.id))
      exhaustMap(innerStream => this.dbjson.getById(innerStream.id))
    ).subscribe((res: any) => console.log('response', res));
  }
}
