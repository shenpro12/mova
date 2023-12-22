import { Component, OnInit } from '@angular/core';
import { AnimeService } from './core/services/anime.service';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { initAnime } from 'src/store/actions/anime.action';
import { AnimeState } from 'src/store/reducers/anime.reducer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private animeService: AnimeService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.animeService.getAllAnime().subscribe((res: AnimeState) => {
      this.store.dispatch(initAnime({ animes: res }));
    });
  }
}
