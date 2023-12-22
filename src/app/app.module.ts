import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { StoreModule, combineReducers } from '@ngrx/store';
import { AnimeReducer } from 'src/store/reducers/anime.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AnimeService } from './core/services/anime.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({
      app: combineReducers({
        animes: AnimeReducer,
      }),
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AnimeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
