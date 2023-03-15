import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { ProfessoresComponent } from './paginas/professores/professores.component';
import { TurmasComponent } from './paginas/turmas/turmas.component';

const routes: Routes = [
    {path:'', redirectTo: 'index', pathMatch:'full'},
    {path:'index', component: IndexComponent},
    {path:'cursos',component: CursosComponent},
    {path:'turmas', component: TurmasComponent},
    {path:'alunos', component: AlunosComponent},
    {path:'Professores', component: ProfessoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }