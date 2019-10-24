import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Verb } from '../model/verb';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor(private http:HttpClient) { }

  getAllVerbs(): Observable<Verb[]> {
    return this.http.get<Verb[]>('http://localhost:8080/verbs/all');
  }

  get(id: number): Observable<Verb> {
    return this.http.get<Verb>('http://localhost:8080/verbs/get/'+id);
  }

  getRandom(): Observable<Verb> {
    return this.http.get<Verb>('http://localhost:8080/verbs/get/random');
  }

  save(verb: Verb): Observable<Object> {
    return this.http.post('http://localhost:8080/verbs/save', verb);
  }

  update(verb: Verb): Observable<Object> {
    return this.http.put('http://localhost:8080/verbs/update', verb);
  }

  delete(id: number): Observable<Verb> {
    return this.http.delete<Verb>('http://localhost:8080/verbs/delete/'+id);
  }
}
