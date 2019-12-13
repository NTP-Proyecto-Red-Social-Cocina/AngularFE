import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { User } from '../modelos/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json'
    }),
  };

  getUsuario(id: number): Observable<User> {
    return this.http.get<User>('http://ctb.test/api/parcial2/users/' + id, this.httpOptions
    ).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<any>(`getProduct id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error.message); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
