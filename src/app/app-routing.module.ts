import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListComponent } from './Curso/CursoList/CursoList.component';

const routes: Routes = [
  { path: 'Curso', component: CursoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }