import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  @Input() data$: Observable<string>;

  constructor() {}
}
