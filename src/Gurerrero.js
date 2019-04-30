import { Arquero } from "./Arquero";
import { Infanteria } from "./Infanteria";

export class Guerrero{
    creadorDeGuerrero(tipoDeGuerrero){
        switch (tipoDeGuerrero) {
            case "arquero":
                return new Arquero();
                break;
            default:
                return new Infanteria();
                break;
        }
    }
}
