import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { dataFormat, queryData } from 'src/app/core/helpers/queryData.helper';
import { AnimeItem, AnimeSeason } from 'src/store/reducers/anime.reducer';
import { SwiperContainer } from 'swiper/element';
import { initStar } from 'src/app/core/helpers/rate.helper';
import { DetailAnimeModalPage } from 'src/app/components/detail-anime-modal/detail-anime-modal.component';

@Component({
  selector: 'anime-tag-slide',
  templateUrl: './anime-tag-slide.component.html',
})
export class AnimeTagSlideComponent implements AfterViewInit, OnChanges {
  @Input() Query: string;
  @Input() Title: string;
  @Input() AnimeList: Array<AnimeItem>;
  @ViewChild('swiper') swiper: ElementRef<SwiperContainer>;
  @ViewChild('detailAnimeModal') detailAnimeModal: DetailAnimeModalPage;
  @Output() openList: EventEmitter<any> = new EventEmitter<any>();

  data: Array<AnimeSeason> = [];

  initStar = initStar;

  ngOnChanges(): void {
    let temp: Array<AnimeSeason> = [];
    for (let i = 0; i <= 9; i++) {
      temp.push(queryData(dataFormat(this.AnimeList), this.Query)[i]);
    }

    this.data = temp.filter((i) => (i ? true : false));
  }

  ngAfterViewInit(): void {
    this.swiper.nativeElement.slidesPerView = 3;
    this.swiper.nativeElement.spaceBetween = 10;
    this.swiper.nativeElement.freeMode = true;
  }

  openAllListMenu() {
    this.openList.emit({
      title: this.Title,
      query: this.Query,
    });
  }

  openDetailPage(item: AnimeSeason) {
    this.detailAnimeModal.toggleModal(true);
    this.detailAnimeModal.data = item;
  }
}
