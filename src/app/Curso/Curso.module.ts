import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './CursoList/CursoList.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CursoListComponent],
  declarations: [CursoListComponent]

})
export class CursoModule { }
