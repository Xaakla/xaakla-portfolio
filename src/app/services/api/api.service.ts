import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API: string = environment.API;

  constructor(private http: HttpClient) { }

  findAllProjects(): any {
    return this.http.get<any>(`${this.API}/project/list`)
      .pipe(take(1));
  }

  sendMail(data: any): any {
    return this.http.post<any>(`${this.API}/email`, data)
      .pipe(take(1));
  }

}
