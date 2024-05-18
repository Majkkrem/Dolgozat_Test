import { expect, it, beforeEach, describe } from "vitest";
import { Dolgozat } from "./dolgozat";

describe('Dolgozat', () => {
    let dolgozat;

    beforeEach(() => {
        dolgozat = new Dolgozat([]);
    });

    it('should add the score to the list when PontFelvesz is called', () => {
        dolgozat.PontFelvesz(50);
        expect(dolgozat.pontok).toContain(50);
    });

    it('should throw an error when PontFelvesz is called with an invalid score', () => {
        expect(() => dolgozat.PontFelvesz(101)).toThrow('Érvénytelen paraméter');
    });

    it('should return whether everyone wrote the test when MindenkiMegirta is called', () => {
        dolgozat.PontFelvesz(50);
        expect(dolgozat.MindenkiMegirta()).toBe(true);
    });


    it('should return the number of satisfactory scores when Elegseges is called', () => {
        dolgozat.PontFelvesz(50);
        expect(dolgozat.Elegseges()).toBe(1);
    });

    it('should return the number of medium scores when Kozepes is called', () => {
        dolgozat.PontFelvesz(61);
        expect(dolgozat.Kozepes()).toBe(1);
    });

    it('should return the number of good scores when Jo is called', () => {
        dolgozat.PontFelvesz(71);
        expect(dolgozat.Jo()).toBe(1);
    });

    it('should return the number of excellent scores when Jeles is called', () => {
        dolgozat.PontFelvesz(86);
        expect(dolgozat.Jeles()).toBe(1);
    });

    it('should return the number of failed students when Bukas is called', () => {
        dolgozat.PontFelvesz(49);
        expect(dolgozat.Bukas()).toBe(1);
    });

    it('should return true if there are more excellent grades than the number of outstanding students when Gyanus is called', () => {
        dolgozat.PontFelvesz(50);
        expect(dolgozat.Gyanus()).toBe(false);
    });

    it('should return true if less people wrote the test, than half of the students when Ervenytelen is called', () => {
        dolgozat.PontFelvesz(50);
        expect(dolgozat.Ervenytelen()).toBe(false);
    });
});