export class Infanteria{
    constructor(){
        this.dañoDeEspada = 15;
    }

    obtenerDaño(){
        return this.dañoDeEspada;
    }

    modificarDaño(daño){
        this.dañoDeEspada =this.dañoDeEspada + daño;
    }
}