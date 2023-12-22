import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAnimes } from 'src/store/selectors/anime.selector';
import { AppState } from '@capacitor/app';
import { AnimeItem } from 'src/store/reducers/anime.reducer';
import { AnimeTagListComponent } from './components/anime-tag-list/anime-tag-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  animeList: Array<AnimeItem>;
  @ViewChild('animeTagList') animeTagList: AnimeTagListComponent;

  constructor(private store: Store<AppState | AnimeItem | any>) {}

  ngOnInit(): void {
    this.store.pipe(select(selectAnimes)).subscribe((res: Array<AnimeItem>) => {
      this.animeList = res;
    });
  }

  setMenuProps(event) {
    this.animeTagList.title = event.title;
    this.animeTagList.query = event.query;
    this.animeTagList.setData(event.query, this.animeList);
  }
}
