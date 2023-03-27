import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }
  cadastrar(obj: any){
    console.log("Estamos aqui novamente");
    console.log(obj);
  }
}
