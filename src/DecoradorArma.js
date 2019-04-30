// export class DecoradorArma{
//     constructor(){

//     }
// }
export class Madera{
    aumentarDaño(guerrero){
        guerrero.modificarDaño(5);
    }
}

export class Fuego{
    aumentarDaño(guerrero){
        guerrero.modificarDaño(15);
    }
}

export class Hierro {
    aumentarDaño(guerrero){
        guerrero.modificarDaño(10);
    }
}
