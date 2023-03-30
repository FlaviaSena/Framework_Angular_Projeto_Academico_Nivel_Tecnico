import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = "http://localhost:8080/api/aluno";

  constructor( private http: HttpClient) { }
  cadastrar(obj: any){
    console.log(" Primeiro vez que cheguei no service que é a minha barreira de frontEnd");
    console.log(obj);
    return this.http.post(this.url, obj); 
    
  }
  busca(){
    return this.http.get(this.url);
  }
}
