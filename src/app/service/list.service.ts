import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiUrl = "http://localhost:3000/animals";

  getAll() : Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);

  }

  constructor(private http: HttpClient) { }

  remove(id: Number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);

  }
  getItem(id: number):Observable<Animal> {

    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

}
