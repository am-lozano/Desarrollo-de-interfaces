import { Persona } from "../../Domain/Entities/Persona";
import { inject } from "inversify";
import { TYPES } from "../../Core/types";
import { IRepositoryPersonas } from "../../Data/Repositories/PersonasRepository";

export class PeopleListVM {

    private _personasList: Persona[] = [];
    private _personaSeleccionada: Persona;

    constructor(
        @inject(TYPES.IRepositoryPersonas)
        private RepositoryPersonas: IRepositoryPersonas
    ) {

        this._personaSeleccionada = new Persona(0, 'Fernando', 'Galiana');

        this._personasList = this.RepositoryPersonas.getListadoCompletoPersonas();

    }

    public get personasList(): Persona[] {
        return this._personasList;
    }

    public get personaSeleccionada(): Persona {
        return this._personaSeleccionada;
    }

    public set personaSeleccionada(value: Persona) {
        this._personaSeleccionada = value;
        // alert(`Persona seleccionada en el VM: ${this._personaSeleccionada.getName} ${this._personaSeleccionada.getSurname}`);
    }

}
