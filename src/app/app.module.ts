import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { TurmasComponent } from './paginas/turmas/turmas.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { ProfessoresComponent } from './paginas/professores/professores.component';
import { IncluirCursosComponent } from './paginas/incluir-cursos/incluir-cursos.component';

import { FormsModule } from '@angular/forms';
import { IncluirAlunoComponent } from './paginas/incluir-aluno/incluir-aluno.component';
import{HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CursosComponent,
    TurmasComponent,
    AlunosComponent,
    ProfessoresComponent,
    IncluirCursosComponent,
    IncluirAlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
