export class Dolgozat {
    constructor() {
        this.pontok = [];
    }

    PontFelvesz(x) {
        if (x < -1 || x > 100) {
            throw new Error('Érvénytelen paraméter');
        }
        this.pontok.push(x);
    }

    MindenkiMegirta() {
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] === -1) {
                return false;
            }
        }
        return true;
    }

    Bukas() {
        let bukasokSzama = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] !== -1 && this.pontok[i] !== 50) {
                bukasokSzama++;
            }
        }
        return bukasokSzama;
    }

    Elegseges() {
        let elegsegesSzama = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] >= 50 && this.pontok[i] <= 60) {
                elegsegesSzama++;
            }
        }
        return elegsegesSzama;
    }

    Kozepes() {
        let kozepesSzama = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] >= 61 && this.pontok[i] <= 70) {
                kozepesSzama++;
            }
        }
        return kozepesSzama;
    }

    Jo() {
        let joSzama = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] >= 71 && this.pontok[i] <= 85) {
                joSzama++;
            }
        }
        return joSzama;
    }

    Jeles() {
        let jelesSzama = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] >= 86) {
                jelesSzama++;
            }
        }
        return jelesSzama;
    }

    Gyanus(kivalok) {
        kivalok = 0;
        if (kivalok < this.Jeles()) {
            this.Gyanus = false;
            throw new Error('Érvénytelen paraméter');
        }
        else {
            this.Gyanus = true;
        }
        return this.Gyanus;
    }

    Ervenytelen() {
        let nemIrtDolgozatot = 0;
        for (let i = 0; i < this.pontok.length; i++) {
            if (this.pontok[i] === -1) {
                nemIrtDolgozatot++;
            }
        }
        return nemIrtDolgozatot > this.pontok.length / 2;
    }

}
