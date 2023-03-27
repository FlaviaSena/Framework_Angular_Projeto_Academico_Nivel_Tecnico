import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
   url = "http://localhost:8080/api/cursos";

  constructor( private http: HttpClient) { }
  cadastrar(obj: any){
    console.log(" Primeiro vez que cheguei no service que é a minha barreira de frontEnd");
    console.log(obj);
    this.http.post(this.url, obj);
  }
}
