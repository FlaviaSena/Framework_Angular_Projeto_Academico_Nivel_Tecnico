import { Component } from '@angular/core';
import { CursoService } from 'src/app/servicos/curso.service';


@Component({
  selector: 'app-incluir-cursos',
  templateUrl: './incluir-cursos.component.html',
  styleUrls: ['./incluir-cursos.component.css']
})
export class IncluirCursosComponent {
  curso = {nome: '', valor: 0};

  constructor (private service: CursoService){
  }


  cadastrar(){
    alert(this.curso.nome + '\n' + this.curso.valor);
   }
  
}
