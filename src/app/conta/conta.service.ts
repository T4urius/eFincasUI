import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from './conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  url = 'https://localhost:44372/api/conta';

  constructor(private http: HttpClient) { }

  getAllContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.url + '/listar');
  }
}
