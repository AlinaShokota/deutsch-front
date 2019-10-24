import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noun } from '../model/noun';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NounService {

  constructor(private http: HttpClient) { }

  getAllNouns(): Observable<Noun[]> {
    return this.http.get<Noun[]>('http://localhost:8080/nouns/all');
  }

  getCategories(): Observable<String[]> {
    return this.http.get<String[]>('http://localhost:8080/nouns/categories');
  }

  getByCategory(category: string): Observable<Noun> {
    return this.http.get<Noun>('http://localhost:8080/nouns/get/random/'+category);
  }

  get(id: number): Observable<Noun> {
    return this.http.get<Noun>('http://localhost:8080/nouns/get/'+id);
  }

  getRandom(): Observable<Noun> {
    return this.http.get<Noun>('http://localhost:8080/nouns/get/random');
  }

  save(noun: Noun): Observable<Object> {
    return this.http.post('http://localhost:8080/nouns/save', noun);
  }

  update(noun: Noun): Observable<Object> {
    return this.http.put('http://localhost:8080/nouns/update', noun);
  }

  delete(id: number): Observable<Noun> {
    return this.http.delete<Noun>('http://localhost:8080/nouns/delete/'+id);
  }
}
