import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }
  postMeme(data): any {
    return this.http.post(`${this.baseUrl}/memes`, data);
  }
}
