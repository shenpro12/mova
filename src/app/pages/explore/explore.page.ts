import { Component, OnInit, ViewChild } from '@angular/core';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { DetailAnimeModalPage } from 'src/app/components/detail-anime-modal/detail-anime-modal.component';
import {
  CategoryFilter,
  TypeFilter,
  YearFilter,
} from 'src/app/core/constants/filterAnime.constant';
import { dataFormat, queryData } from 'src/app/core/helpers/queryData.helper';
import { initStar } from 'src/app/core/helpers/rate.helper';
import { AppState } from 'src/store/appState';
import { AnimeItem, AnimeSeason } from 'src/store/reducers/anime.reducer';
import { selectAnimes } from 'src/store/selectors/anime.selector';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  animeList: Array<AnimeItem>;
  data: Array<AnimeSeason>;
  icon = icon;
  categoryFilter = CategoryFilter;
  yearFilter = YearFilter;
  typeFilter = TypeFilter;
  listCategory: Array<string> = [];
  year: number | undefined;
  type: string | undefined;
  keyword: string | undefined;

  initStar = initStar;

  @ViewChild('detailAnimeModal') detailAnimeModal: DetailAnimeModalPage;

  constructor(private store: Store<AppState | AnimeItem | any>) {}

  ngOnInit(): void {
    this.store.pipe(select(selectAnimes)).subscribe((res: Array<AnimeItem>) => {
      this.animeList = res;
      this.load();
    });
  }

  categoryChange(event: any, category: any) {
    if (event.target.checked && !this.listCategory.includes(category)) {
      this.listCategory.push(category);
    } else {
      this.listCategory = this.listCategory.filter((i) => i != category);
    }
  }

  yearChange(year: number) {
    this.year = year;
  }

  typeChange(type: any) {
    this.type = type;
  }

  apllyFilter(filterModal?: any) {
    if (filterModal) {
      filterModal.dismiss();
    }
    this.load();
  }

  keywordChange(keyword?: any) {
    this.keyword = keyword.detail.value;
    this.load();
  }

  load() {
    if (this.animeList) {
      this.data = queryData(dataFormat(this.animeList), {
        category:
          !this.year && !this.listCategory.length && !this.type
            ? 'all'
            : [...this.listCategory, this.type],
        year: this.year,
        keyword: this.keyword,
      });
    }
  }

  resetFilter() {
    this.listCategory = [];
    this.type = undefined;
    this.year = undefined;
    this.load();
  }

  openDetailPage(item: AnimeSeason) {
    this.detailAnimeModal.toggleModal(true);
    this.detailAnimeModal.data = item;
  }
}
