import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url =  environment.apiUrl;

  constructor(private http: HttpClient) { }

   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getEndereco(cnpj: String): Observable<String> {
    console.log(`${this.url}/${cnpj}`);
    return this.http.get<String>(`${this.url}/empresa/find/${cnpj}`, this.httpOptions);
  }

  soma(numero1:number, numero2: number): Observable<Number>{
    const body = JSON.stringify({ numero1: numero1, numero2: numero2});
    return this.http.post<Number>(`${this.url}/empresa/media`, body, this.httpOptions);
  }
}
