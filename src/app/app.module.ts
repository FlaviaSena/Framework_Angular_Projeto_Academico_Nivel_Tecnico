import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { TurmasComponent } from './paginas/turmas/turmas.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { ProfessoresComponent } from './paginas/professores/professores.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CursosComponent,
    TurmasComponent,
    AlunosComponent,
    ProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
