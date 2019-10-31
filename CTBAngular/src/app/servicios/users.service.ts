import { Injectable } from '@angular/core';
import { User } from '../modelos/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
  getHeroes(): Observable<User[]> {
    return this.http.get<User[]>('http://ctb.test/api/parcial2/users');
      }
}
