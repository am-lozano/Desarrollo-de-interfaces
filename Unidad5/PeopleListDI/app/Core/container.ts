import { Container } from "inversify";
import "reflect-metadata";
// cambiar PersonasRepository por PersonasRepositoryEmpty o PersonasRepository100 para probar
import { IRepositoryPersonas, PersonasRepository100 } from "../Models/Data/personasRepository";
import { PeopleListVM } from "../ViewModel/PeopleListVM";
import { TYPES } from "../Core/types";


const container = new Container();


// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository100); // Cambiar aquí también para probar las otras implementaciones
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };