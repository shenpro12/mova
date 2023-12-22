import { Component, OnChanges } from '@angular/core';
import { dataFormat, queryData } from 'src/app/core/helpers/queryData.helper';
import { AnimeItem, AnimeSeason } from 'src/store/reducers/anime.reducer';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/store/appState';
import { selectAnimes } from 'src/store/selectors/anime.selector';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.scss',
})
export class SearchComponent {
  icon = icon;
  isModalOpen = false;
  animeList: Array<AnimeItem>;
  keyword: string;

  data: Array<AnimeSeason> | undefined = undefined;

  constructor(private store: Store<AppState | AnimeItem | any>) {
    this.store.pipe(select(selectAnimes)).subscribe((res: Array<AnimeItem>) => {
      this.animeList = dataFormat(res);
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.data = [];
    this.keyword = '';
  }

  handleInput(event: any) {
    this.keyword = event.target.value;
    if (event.target.value) {
      this.data = queryData(this.animeList, {
        category: [`name=${event.target.value}`],
      });
      return;
    }
    this.data = [];
  }
}
