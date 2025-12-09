import { Container } from "inversify";
import "reflect-metadata";
import { IRepositoryPersonas, PersonasRepository } from "../Data/Repositories/PersonasRepository";
import { PeopleListVM } from "../UI/ViewModel/PeopleListVM";
import { TYPES } from "./types";

const container = new Container();

// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };