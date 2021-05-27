import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateAndCityService {

  constructor(private http: HttpClient) { }

  getState(): Promise<Array<any>> {
    return this.http.get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .toPromise()
  }

  getCity(sigla: string): Promise<Array<any>> {
    return this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
      .toPromise()
  }

}
