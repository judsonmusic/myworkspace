import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnChanges {
  @Input() data$: Observable<string>;

  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('These are the changes:', changes);
  }
}
