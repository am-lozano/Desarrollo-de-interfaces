import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";


export interface IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[];
}


@injectable()
export class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
        ];
    }
}

@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            
        ];
    }
}

@injectable()
export class PersonasRepository100 implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
            new Persona(7, 'Sofía', 'Vega Jiménez'),
            new Persona(8, 'Javier', 'Cruz Romero'),
            new Persona(9, 'Marta', 'Ortiz Herrera'),
            new Persona(10, 'Alberto', 'Ruiz Castillo'),
            new Persona(11, 'Isabel', 'Fernández Navarro'),
            new Persona(12, 'Pablo', 'García Molina'),
            new Persona(13, 'Carmen', 'López Sánchez'),
            new Persona(14, 'Diego', 'Martín Jiménez'),
            new Persona(15, 'Elena', 'Gómez Torres'),
            new Persona(16, 'Rubén', 'Sanz Medina'),
            new Persona(17, 'Patricia', 'Díaz Castro'),
            new Persona(18, 'Adrián', 'Romero Vidal'),
            new Persona(19, 'Marina', 'Castro Ruiz'),
            new Persona(20, 'Jorge', 'González Morales'),
            new Persona(21, 'Lucía', 'Hernández Serrano'),
            new Persona(22, 'Daniel', 'Pérez Santos'),
            new Persona(23, 'Sara', 'Muñoz Ortega'),
            new Persona(24, 'Víctor', 'Morales Rivas'),
            new Persona(25, 'Andrea', 'Santos Blanco'),
            new Persona(26, 'Mario', 'Blanco Molina'),
            new Persona(27, 'Cristina', 'Serrano Vega'),
            new Persona(28, 'Hugo', 'Ortega Cruz'),
            new Persona(29, 'Paula', 'Rivas Torres'),
            new Persona(30, 'Álvaro', 'Vidal García'),
            new Persona(31, 'Clara', 'Medina Ruiz'),
            new Persona(32, 'Roberto', 'Navarro Pérez'),
            new Persona(33, 'Natalia', 'Molina López'),
            new Persona(34, 'Óscar', 'Torres Martínez'),
            new Persona(35, 'Beatriz', 'Jiménez Sánchez'),
            new Persona(36, 'Gabriel', 'Castro Fernández'),
            new Persona(37, 'Emma', 'Ruiz González'),
            new Persona(38, 'Marcos', 'Sánchez Morales'),
            new Persona(39, 'Julia', 'Morales Castro'),
            new Persona(40, 'Alejandro', 'Vega Díaz'),
            new Persona(41, 'Valeria', 'Cruz Santos'),
            new Persona(42, 'Leo', 'Ortiz Blanco'),
            new Persona(43, 'Martina', 'Herrera Vidal'),
            new Persona(44, 'Bruno', 'Castillo Serrano'),
            new Persona(45, 'Luna', 'Jiménez Ortega'),
            new Persona(46, 'Samuel', 'Pérez Rivas'),
            new Persona(47, 'Carla', 'López Medina'),
            new Persona(48, 'Lucas', 'García Navarro'),
            new Persona(49, 'Olivia', 'Martínez Molina'),
            new Persona(50, 'Nicolás', 'Sánchez Torres'),
            new Persona(51, 'Eva', 'González Castro'),
            new Persona(52, 'Mateo', 'Torres Ruiz'),
            new Persona(53, 'Alma', 'Díaz Morales'),
            new Persona(54, 'Alex', 'Romero Santos'),
            new Persona(55, 'Noa', 'Castro Blanco'),
            new Persona(56, 'Adriana', 'Vidal Vega'),
            new Persona(57, 'Leo', 'Medina Cruz'),
            new Persona(58, 'Vera', 'Navarro Ortiz'),
            new Persona(59, 'Ian', 'Molina Herrera'),
            new Persona(60, 'Lola', 'Ruiz Castillo'),
            new Persona(61, 'Thiago', 'Fernández Jiménez'),
            new Persona(62, 'Daniela', 'López Pérez'),
            new Persona(63, 'Oliver', 'García López'),
            new Persona(64, 'Alba', 'Martín García'),
            new Persona(65, 'Dylan', 'Gómez Martín'),
            new Persona(66, 'Chloe', 'Sanz Gómez'),
            new Persona(67, 'Max', 'Díaz Sanz'),
            new Persona(68, 'Lara', 'Romero Díaz'),
            new Persona(69, 'Adam', 'Castro Romero'),
            new Persona(70, 'Mía', 'González Castro'),
            new Persona(71, 'Eric', 'Hernández González'),
            new Persona(72, 'Nora', 'Pérez Hernández'),
            new Persona(73, 'Iker', 'Muñoz Pérez'),
            new Persona(74, 'Zoe', 'Morales Muñoz'),
            new Persona(75, 'Unai', 'Santos Morales'),
            new Persona(76, 'Abril', 'Blanco Santos'),
            new Persona(77, 'Joel', 'Serrano Blanco'),
            new Persona(78, 'Jimena', 'Ortega Serrano'),
            new Persona(79, 'Jan', 'Rivas Ortega'),
            new Persona(80, 'Ainara', 'Vidal Rivas'),
            new Persona(81, 'Marc', 'Medina Vidal'),
            new Persona(82, 'Claudia', 'Navarro Medina'),
            new Persona(83, 'Asier', 'Molina Navarro'),
            new Persona(84, 'Candela', 'Torres Molina'),
            new Persona(85, 'Nil', 'Jiménez Torres'),
            new Persona(86, 'Ariadna', 'Castro Jiménez'),
            new Persona(87, 'Axel', 'Ruiz Castro'),
            new Persona(88, 'Iria', 'Sánchez Ruiz'),
            new Persona(89, 'Héctor', 'Morales Sánchez'),
            new Persona(90, 'África', 'Vega Morales'),
            new Persona(91, 'Rayan', 'Cruz Vega'),
            new Persona(92, 'Leyre', 'Ortiz Cruz'),
            new Persona(93, 'Mohamed', 'Herrera Ortiz'),
            new Persona(94, 'Iris', 'Castillo Herrera'),
            new Persona(95, 'Alan', 'Jiménez Castillo'),
            new Persona(96, 'Gala', 'Pérez Jiménez'),
            new Persona(97, 'Liam', 'López Pérez'),
            new Persona(98, 'Nerea', 'García López'),
            new Persona(99, 'Noah', 'Martínez García'),
            new Persona(100, 'Vega', 'Sánchez Martínez')
        ];
    }
}