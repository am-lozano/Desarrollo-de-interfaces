import Person from "../Entity/PersonModel";

class RepositoryPerson{

    static getPerson() : Person[]{
        return[
            new Person(1, "Mario", "Rossi"),
            new Person(2, "Luigi", "Verdi"),
            new Person(3, "Giovanni", "Bianchi"),
            new Person(4, "Antonio", "Neri"),
            new Person(5, "Francesco", "Gialli"),
            new Person(6, "Marco", "Azzurri"),
            new Person(7, "Luca", "Rosa"),
            new Person(8, "Paolo", "Viola"),
            new Person(9, "Giuseppe", "Arancioni"),
            new Person(10, "Roberto", "Celesti"),
            new Person(11, "Stefano", "Marroni"),
            new Person(12, "Alessandro", "Grigi"),
            new Person(13, "Nicola", "Nocciola"),
            new Person(14, "Matteo", "Turchini"),
            new Person(15, "Davide", "Indaco"),
            new Person(16, "Simone", "Lilla"),
            new Person(17, "Giorgio", "Oro"),
            new Person(18, "Fabio", "Argento"),
            new Person(19, "Vincenzo", "Bronzo"),
            new Person(20, "Salvatore", "Rame")
        ]
    }
}

export default RepositoryPerson;