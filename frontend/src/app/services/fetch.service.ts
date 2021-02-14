import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) {
  }

  getMemes(): any {
    return this.http.get(`/memes`);
  }

  getMeme(id): any {
    return this.http.get(`/memes/${id}`);
  }
}
