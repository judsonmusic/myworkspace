import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [CommonModule, PostsModule],
  declarations: [],
  exports: [PostsComponent],
})
export class UiModule {}
