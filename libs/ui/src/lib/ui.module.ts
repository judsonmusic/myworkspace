import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
import { PostsComponent } from './posts/posts.component';
import { PostsModule } from './posts/posts.module';
import { rootReducer } from './posts/state/posts.reducer';

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
    StoreModule.forRoot(rootReducer, {
      metaReducers: [storageSyncMetaReducer],
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  declarations: [],
  exports: [PostsComponent],
})
export class UiModule {}
