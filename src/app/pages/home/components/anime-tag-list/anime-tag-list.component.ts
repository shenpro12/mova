import { Component, ViewChild } from '@angular/core';
import { AnimeItem, AnimeSeason } from 'src/store/reducers/anime.reducer';
import { dataFormat, queryData } from 'src/app/core/helpers/queryData.helper';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { initStar } from 'src/app/core/helpers/rate.helper';
import {
  Classify,
  NewClassifyConstant,
  UpcomingClassifyConstant,
} from 'src/app/core/constants/classifyAnime.constant';
import { DetailAnimeModalPage } from 'src/app/components/detail-anime-modal/detail-anime-modal.component';

@Component({
  selector: 'anime-tag-list',
  templateUrl: './anime-tag-list.component.html',
  styleUrl: './anime-tag-list.scss',
})
export class AnimeTagListComponent {
  data: Array<AnimeItem> = [];
  animeList: Array<AnimeSeason>;
  query: string;
  title: string;

  icon = icon;
  initStar = initStar;

  classify: Array<Classify>;

  @ViewChild('detailAnimeModal') detailAnimeModal: DetailAnimeModalPage;

  setData(query: string, list: Array<AnimeItem>): void {
    this.data = list;
    this.animeList = queryData(dataFormat(list), query);
  }

  openMenuHandle() {
    if (this.query == 'all') {
      this.classify = NewClassifyConstant;
    }
    if (this.query == 'day') {
      this.classify = UpcomingClassifyConstant;
    }
  }

  selectChangeHandle(event: CustomEvent) {
    if (this.data) {
      this.animeList = queryData(dataFormat(this.data), event.detail.value);
    }
  }

  openDetailPage(item: AnimeSeason) {
    this.detailAnimeModal.toggleModal(true);
    this.detailAnimeModal.data = item;
  }
}
