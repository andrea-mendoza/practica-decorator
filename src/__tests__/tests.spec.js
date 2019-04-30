import { Guerrero } from "../Gurerrero";
import { Madera, Fuego, Hierro } from "../DecoradorArma";

describe("Tests", function () {
    let guerrero = new Guerrero();
    let arquero;
    let infanteria;

    beforeEach(function(){
        arquero = guerrero.creadorDeGuerrero("arquero");
        infanteria = guerrero.creadorDeGuerrero("infanteria");
    });

    test("Cuando se crea un arquero su daño inicial deberia ser 10 ", function () {
        expect(arquero.dañoDeFlechas).toBe(10);
    });

    test("Cuando se crea un guerrero de Infanteria su daño inicial deberia ser 15", function () {
        expect(infanteria.dañoDeEspada).toBe(15);
    });

    test("El daño de un arquero con flecha de madera debe ser 20", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(arquero);
        expect(arquero.dañoDeFlechas).toBe(15);
    });

    test("El daño de un arquero con flecha de fuego y hierro debe ser 35", function () {
        let decorador = new Hierro();
        decorador.aumentarDaño(arquero);
        decorador = new Fuego();
        decorador.aumentarDaño(arquero);
        expect(arquero.dañoDeFlechas).toBe(35);
    });

    test("El daño de un arquero con flecha de fuego y madera debe ser 30", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(arquero);
        decorador = new Fuego();
        decorador.aumentarDaño(arquero);
        expect(arquero.dañoDeFlechas).toBe(30);
    });

    test("El daño de un arquero con flechas de fuego, madera y hierro debe ser 40", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(arquero);
        decorador = new Hierro();
        decorador.aumentarDaño(arquero);
        decorador = new Fuego();
        decorador.aumentarDaño(arquero);
        expect(arquero.dañoDeFlechas).toBe(40);
    });

    test("El daño de un guerrero de infanteria con espada de madera debe ser 20", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(infanteria);
        expect(infanteria.dañoDeEspada).toBe(20);
    });

    test("El daño de un guerrero de infanteria con espada de fuego y hierro debe ser ", function () {
        let decorador = new Hierro();
        decorador.aumentarDaño(infanteria);
        decorador = new Fuego();
        decorador.aumentarDaño(infanteria);
        expect(infanteria.dañoDeEspada).toBe(40);
    });

    test("El daño de un guerrero de infanteria con espada de fuego y madera debe ser ", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(infanteria);
        decorador = new Fuego();
        decorador.aumentarDaño(infanteria);
        expect(infanteria.dañoDeEspada).toBe(35);
    });

    test("El daño de un guerrero de infanteria con espada de fuego, madera y hierro debe ser ", function () {
        let decorador = new Madera();
        decorador.aumentarDaño(infanteria);
        decorador = new Hierro();
        decorador.aumentarDaño(infanteria);
        decorador = new Fuego();
        decorador.aumentarDaño(infanteria);
        expect(infanteria.dañoDeEspada).toBe(45);
    });
});
