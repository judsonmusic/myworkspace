import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/pages/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  error$: Observable<string>;
  data$: Observable<string>;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.data$ = this.postsService.getPosts();
  }
}
