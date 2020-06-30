import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from '@myworkspace/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsPageRoutingModule } from './posts-routing.module';
import { PostsPage } from './posts.page';
import { PostsEffects } from './state/posts.effects';
import { rootReducer } from './state/posts.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule,
    PostsPageRoutingModule,
    StoreModule.forFeature('postsState', rootReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  declarations: [PostsPage],
})
export class PostsPageModule {}
