import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }
  updateMeme(id, data) {
    return this.http.put(`${this.baseUrl}/memes/${id}`, data)
  }
}
