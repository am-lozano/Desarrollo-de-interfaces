class Persona{

    private id : number;
    private name : string;
    private surname : string;

    constructor(id : number, name : string, surname : string){

        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    get getId() : number{
        return this.id;
    }

    get getName() : string{
        return this.name;
    }

    get getSurname() : string{
        return this.surname;
    }

    set setName(newName : string){
        
        if (newName != null && newName == ""){
            this.name = newName;
        }
    }

    set setSurname(newSurname : string){
        if (newSurname != null && newSurname == ""){
            this.surname = newSurname;
        }
    }
}

export { Persona };