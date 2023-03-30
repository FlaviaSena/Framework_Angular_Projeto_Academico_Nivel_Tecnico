import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/servicos/aluno.service';


@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.css']
})
export class IncluirAlunoComponent {
  aluno = {id: 0, nome: '', email:'', telefone: 0};

  constructor (private service: AlunoService, private roteador: Router){
  }


  cadastrar(){
    alert(this.aluno.id + '\n' + this.aluno.nome + '\n' + this.aluno.email+'\n' + this.aluno.telefone);
    this.service.cadastrar(this.aluno).subscribe({
      next: (res) => {
        console.log(res);
        this.roteador.navigate(['/alunos']);
      },
      error:(e) => console.error(e)
    });
   }
}
