import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursoService } from '../Curso.service';
import { CursoDetail } from '../curso-detail';
import { get } from 'http';

@Component({
  selector: 'app-CursoList',
  templateUrl: './CursoList.component.html',
  styleUrls: ['./CursoList.component.css']
})
export class CursoListComponent implements OnInit {

  cursos:Array<Curso> = [];
  selectedCurso!: CursoDetail;
  selected: boolean = false;
  constructor(private cursoService: CursoService) { }

  getCursos(): void{
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
  }


  selectCurso(curso: Curso){
    this.cursoService.getCursoDetail(curso.id).subscribe(curso => this.selectedCurso = curso);
    this.selected = true;
  }

  ngOnInit() {
  }

}
