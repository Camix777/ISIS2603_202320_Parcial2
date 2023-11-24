
import { Curso } from './Curso';

export class CursoDetail extends Curso{
    imagen:string;
    certificado:boolean; 
    titulo:string;
    descripcion:string;   
    constructor(id:number, nombre:string, plataforma:string, lanzamiento:string, duracion:number, imagen:string, certificado:boolean, descripcion:string, titulo:string){
        super(id, nombre, plataforma, lanzamiento, duracion);
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.certificado = certificado;
        this.titulo = titulo;
    }
}