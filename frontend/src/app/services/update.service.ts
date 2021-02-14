import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }
  updateMeme(id, data) {
    return this.http.put(`/memes/${id}`, data)
  }
}
