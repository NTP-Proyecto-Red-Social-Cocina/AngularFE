import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { User } from '../modelos/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
   getUsuarios(): Observable<User[]>{
     return this.http.get<User[]>('http://ctb.test/api/parcial2/users');
   }
}
