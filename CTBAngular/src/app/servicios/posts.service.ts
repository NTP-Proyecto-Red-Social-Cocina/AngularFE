import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { Post } from '../modelos/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json'
    }),
  };

  getPostUsuario(): Observable<Post[]> {
    return this.http.get<Post[]>('http://ctb.test/api/parcial2/posts', this.httpOptions
    ).pipe(
      tap(_ => console.log(`fetched product`)),
      catchError(this.handleError<any>(`getProduct`))
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
