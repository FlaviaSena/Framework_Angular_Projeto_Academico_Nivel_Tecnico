import { Component } from '@angular/core';
import { AlunoService } from 'src/app/servicos/aluno.service';


@Component({
  selector: 'app-incluir-aluno',
  templateUrl: './incluir-aluno.component.html',
  styleUrls: ['./incluir-aluno.component.css']
})
export class IncluirAlunoComponent {
  aluno = {nome: '', email:'', telefone: 0};

  constructor (private service: AlunoService){
  }


  cadastrar(){
    alert(this.aluno.nome + '\n' + this.aluno.email+ '\n'+ this.aluno.telefone);
   }
  
}
