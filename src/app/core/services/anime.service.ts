import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAllAnime(): Observable<any> {
    return this.http.get<any>(`http://localhost:3001/api/anime`);
  }
}
