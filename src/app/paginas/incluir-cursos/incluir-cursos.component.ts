import { Component } from '@angular/core';

@Component({
  selector: 'app-incluir-cursos',
  templateUrl: './incluir-cursos.component.html',
  styleUrls: ['./incluir-cursos.component.css']
})
export class IncluirCursosComponent {
  curso = {nome: '', valor: 0};

  constructor(){
  }


  cadastrar(){
    alert(this.curso.nome + '\n' + this.curso.valor);
   }
  
}
