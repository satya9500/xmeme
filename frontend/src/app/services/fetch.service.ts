import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) {
  }

  getMemes(): any {
    return this.http.get(`${this.baseUrl}/memes`);
  }

  getMeme(id): any {
    return this.http.get(`${this.baseUrl}/memes/${id}`);
  }
}
