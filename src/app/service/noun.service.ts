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

  get(id: number): Observable<Noun> {
    return this.http.get<Noun>('http://localhost:8080/nouns/get/'+id);
  }

  getRandom(): Observable<Noun> {
    return this.http.get<Noun>('http://localhost:8080/nouns/get/random');
  }

  save(noun: Noun): Observable<Object> {
    return this.http.post('http://localhost:8080/nouns/save', noun);
  }

  delete(id: number): Observable<Noun> {
    return this.http.delete<Noun>('http://localhost:8080/nouns/delete/'+id);
  }
}
