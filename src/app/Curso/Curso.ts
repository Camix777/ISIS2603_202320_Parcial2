export class Curso {
    id:number;
    nombre:string;
    plataforma:string;
    lanzamiento:string;
    duracion:number;

    constructor(id:number, nombre:string, plataforma:string, lanzamiento:string, duracion:number){
        this.id=id
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.lanzamiento = lanzamiento;
        this.duracion = duracion;
    }


}

