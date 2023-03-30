import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/servicos/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno?: any;
  constructor (private service: AlunoService){
    
  }
  ngOnInit(): void{
    this.retrieve();
    console.log(this.aluno);
  }
  retrieve(): void {
    this.service.busca()
    .subscribe({
      next: (data) => {
        this.aluno = data;
        console.log(data);
      },
      error:(e) => console.error(e)
    });
  }
  }