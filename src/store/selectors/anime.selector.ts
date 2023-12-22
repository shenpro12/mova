import { createSelector } from '@ngrx/store';
import { AppState } from '../appState';

export const selectAnimes = createSelector(
  (state: AppState) => state,
  (items: AppState) => items.app.animes.items
);
