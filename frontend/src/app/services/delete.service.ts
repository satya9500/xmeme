import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }
  deleteMeme(id: string) {
    return this.http.delete(`/memes/${id}`);
  }
}
