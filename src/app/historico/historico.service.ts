import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  url = 'https://localhost:44372/api/historico';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllHistoricos(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/listar');
  }
}
