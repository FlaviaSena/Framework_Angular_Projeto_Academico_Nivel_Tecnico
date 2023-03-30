import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CursoService } from 'src/app/servicos/curso.service';


@Component({
  selector: 'app-incluir-cursos',
  templateUrl: './incluir-cursos.component.html',
  styleUrls: ['./incluir-cursos.component.css']
})
export class IncluirCursosComponent {
  curso = {nome: '', valor: 0};

  constructor (private service: CursoService,
    private roteador: Router
    ){
  }


  cadastrar(){
    alert(this.curso.nome + '\n' + this.curso.valor);
    this.service.cadastrar(this.curso).subscribe({
      next: (res) => {
        console.log(res);
        this.roteador.navigate(['/cursos']);
      },
      error:(e) => console.error(e)
    });
   }
  
}
