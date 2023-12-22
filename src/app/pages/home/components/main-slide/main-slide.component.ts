import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { dataFormat, queryData } from 'src/app/core/helpers/queryData.helper';
import { AnimeItem, AnimeSeason } from 'src/store/reducers/anime.reducer';
import { SwiperContainer } from 'swiper/element';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'main-slide',
  templateUrl: './main-slide.component.html',
})
export class MainSlideComponent implements AfterViewInit, OnChanges {
  @Input() AnimeList: Array<AnimeItem>;
  @ViewChild('swiper') swiper: ElementRef<SwiperContainer>;
  @ViewChild('search') search: SearchComponent;

  icon = icon;

  data: Array<AnimeSeason> = [];

  ngOnChanges(): void {
    let temp: Array<AnimeSeason> = [];
    for (let i = 0; i <= 3; i++) {
      temp.push(queryData(dataFormat(this.AnimeList), 'all')[i]);
    }

    this.data = temp.filter((i) => (i ? true : false));
  }

  ngAfterViewInit(): void {
    this.swiper.nativeElement.slidesPerView = 1;
    this.swiper.nativeElement.loop = true;
    this.swiper.nativeElement.autoplay = true;
  }

  setOpen(isOpen: boolean) {
    this.search.isModalOpen = isOpen;
  }
}
