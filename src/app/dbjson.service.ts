import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbjsonService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(`http://localhost:3000/posts/${id}`)
  }
}
