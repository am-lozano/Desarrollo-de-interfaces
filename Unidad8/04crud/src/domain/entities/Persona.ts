export class Persona{

    private _id : number;
    private _nombre : string;
    private _apellido : string;
    private _fechaNacimiento : Date;
    private _direccion : string;
    private _telefono : string;
    private _foto : string;
    private _idDepartamento : number;

    constructor(id : number, nombre : string, apellido : string, fechaNacimiento : Date, direccion : string, telefono : string, foto : string, idDepartamento : number){
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacimiento = fechaNacimiento;
        this._direccion = direccion;
        this._telefono = telefono;
        this._foto = foto;
        this._idDepartamento = idDepartamento;
    }

    //#region Getters y Setters
    get id() : number{
        return this._id;
    }
    get nombre() : string{
        return this._nombre;
    }
    get apellido() : string{
        return this._apellido;
    }
    get fechaNacimiento() : Date{
        return this._fechaNacimiento;
    }
    get direccion() : string{
        return this._direccion;
    }
    get telefono() : string{
        return this._telefono;
    }
    get foto() : string{
        return this._foto;
    }
    get idDepartamento() : number{
        return this._idDepartamento;
    }

    set nombre(newNombre : string){
        if (newNombre != null && newNombre != ""){
            this._nombre = newNombre;
        }
    }

    set apellido(newApellido : string){
        if (newApellido != null && newApellido != ""){
            this._apellido = newApellido;
        }
    }
    set fechaNacimiento(newFechaNacimiento : Date){
        if (newFechaNacimiento != null){
            this._fechaNacimiento = newFechaNacimiento;
        }
    }

    set direccion(newDireccion : string){
        if (newDireccion != null && newDireccion != ""){
            this._direccion = newDireccion;
        }
    }
    set telefono(newTelefono : string){
        if (newTelefono != null && newTelefono != ""){
            this._telefono = newTelefono;
        }
    }
    set foto(newFoto : string){
        if (newFoto != null && newFoto != ""){
            this._foto = newFoto;
        }
    }
    set idDepartamento(newIdDepartamento : number){
        if (newIdDepartamento != null && newIdDepartamento > 0){
            this._idDepartamento = newIdDepartamento;
        }
    }
    //#endregion
}