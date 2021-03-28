import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  baseUrl: string = environment.backend.baseURL;

  constructor(private http: HttpClient) { }
  deleteMeme(id: string) {
    return this.http.delete(`${this.baseUrl}/memes/${id}`);
  }
}
