import { createReducer, on } from '@ngrx/store';
import { initAnime } from '../actions/anime.action';

export interface AnimeSeason {
  name: {
    jp: string;
    vn: string;
    en: string;
  };
  views: {
    day: {
      total: number;
      dateOfRecord: number;
    };
    month: {
      total: number;
      dateOfRecord: number;
    };
    week: {
      total: number;
      dateOfRecord: number;
    };
    total_view: number;
  };
  season: string;
  thumb_url: string;
  background_url: string;
  description: string;
  release_year: number;
  total_episode: Array<string>;
  total_ep: number;
  category: Array<string>;
  director: string;
  country: string;
  done: boolean;
  studio: string;
  rating: number;
  trailer: string;
  image: string;
  star:
    | Array<{
        userId: string;
        point: number;
        _id: string;
      }>
    | Array<any>;
  updatedAt: number;
  _id: string;
}

export interface AnimeItem {
  name: {
    jp: string;
    vn: string;
    en: string;
  };
  _id: string;
  season: AnimeSeason;
}

export interface AnimeState {
  items: AnimeItem | Array<any>;
}

const initialState: AnimeState = { items: [] };

export const AnimeReducer = createReducer(
  initialState,
  on(initAnime, (state, { animes }) => {
    return { items: [...animes.data] };
  })
);
