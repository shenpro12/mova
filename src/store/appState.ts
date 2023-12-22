import { AnimeState } from './reducers/anime.reducer';

export interface AppState {
  app: {
    animes: AnimeState;
  };
}
