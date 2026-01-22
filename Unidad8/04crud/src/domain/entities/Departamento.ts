export class Departamento {
    
    private id: number;
    private nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }

    get getId(): number {
        return this.id;
    }

    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(newNombre: string) {
        if (newNombre != null && newNombre !== "") {
            this.nombre = newNombre;
        }
    }
}