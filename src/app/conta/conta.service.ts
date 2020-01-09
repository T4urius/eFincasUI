import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conta } from './conta';
import { Observable } from 'rxjs';
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  url = 'https://localhost:44372/api/conta';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.url + '/listar');
  }

  registrarConta(conta: any): Observable<Conta> {
    return this.http.post<Conta>(this.url + '/registrar', conta, {
      headers: this.headers.append('Content-Type', 'application/json')
    });
  }

  atualizarConta(conta: any): Observable<any> {
    return this.http.put<any>(this.url + '/atualizar', conta, {
      headers: this.headers.append('Content-Type', 'application/json')
    })
  }

  deleteConta(id: any): Observable<Conta> {
    return this.http.delete<Conta>(this.url + '/deletar?id=' + id, {
      headers: this.headers.append('Content-Type', 'application/json'),      
    });
  }
}
