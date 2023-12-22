import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { register } from 'swiper/element/bundle';
import { AnimeTagSlideComponent } from './components/anime-tag-slide/anime-tag-slide.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainSlideComponent } from './components/main-slide/main-slide.component';
import { SearchComponent } from './components/search/search.component';
import { AnimeTagListComponent } from './components/anime-tag-list/anime-tag-list.component';
import { ComponentsModule } from 'src/app/components/components.module';

register();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    ComponentsModule,
  ],
  declarations: [
    HomePage,
    AnimeTagSlideComponent,
    MainSlideComponent,
    SearchComponent,
    AnimeTagListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
