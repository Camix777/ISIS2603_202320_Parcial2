import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Curso } from './Curso';
import { CursoDetail } from './curso-detail';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

private apiUrl: string = environment.baseUrl + 'cursos';

constructor(private http: HttpClient) { }

getCursos(): Observable<Curso[]>{
  return this.http.get<Curso[]>(this.apiUrl);
}

getCursoDetail(id:number): Observable<CursoDetail>{
  return this.http.get<CursoDetail>(`${this.apiUrl}/${id}`);
}
}