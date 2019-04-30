import { Guerrero } from "../Gurerrero";

describe("Tests", function () {
    let guerrero = new Guerrero();
    let arquero;
    let infanteria;

    beforeAll(function(){
        arquero = guerrero.creadorDeGuerrero("arquero");
        infanteria = guerrero.creadorDeGuerrero("infanteria");
    });

    test("Cuando se crea un arquero su daño inicial deberia ser 10 ", function () {
        expect(arquero.dañoDeFlechas).toBe(10);
    });

    test("Cuando se crea un guerrero de Infanteria su daño inicial deberia ser 15", function () {
        expect(infanteria.dañoDeEspada).toBe(15);
    });

    test("El daño de un arquero con espada de fuego debe ser ", function () {
        expect(true).toBe(true);
    });

    test("El daño de un arquero con espada de fuego y hierro debe ser ", function () {
        expect(true).toBe(true);
    });

    test("El daño de un arquero con espada de fuego y madera debe ser ", function () {
        expect(true).toBe(true);
    });

    test("El daño de un arquero con espada de fuego, madera y hierro debe ser ", function () {
        expect(true).toBe(true);
    });

    test("", function () {
        expect(true).toBe(true);
    });
});
