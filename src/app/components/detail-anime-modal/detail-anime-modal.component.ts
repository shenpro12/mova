import { Component } from '@angular/core';
import { AnimeSeason } from 'src/store/reducers/anime.reducer';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { initStar } from 'src/app/core/helpers/rate.helper';

@Component({
  selector: 'detail-anime-modal',
  templateUrl: './detail-anime-modal.component.html',
})
export class DetailAnimeModalPage {
  data: AnimeSeason;
  isOpen: boolean = false;

  icon = icon;

  initStar = initStar;
  constructor() {}

  toggleModal(bool: boolean) {
    this.isOpen = bool;
  }
}
