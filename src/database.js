"use strict";

/**
 * Zentrale Klasse für alle Datenbazugriffe.
 *
 * Vgl. https://firebase.google.com/docs/firestore?authuser=0
 * Vgl. https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
 * Vgl. https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
 * Vgl. https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
 * Vgl. https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
 */
class Database {
    /**
     * Konstruktor. Hier wird die Verbindung zur Firebase-Datenbank
     * hergestellt.
     *
     * Vgl. https://firebase.google.com/docs/firestore/quickstart
     */
    constructor() {
        
        firebase.initializeApp({
            apiKey: "AIzaSyD0P-LxU0nvFuo8oh8GIyi4eDorUwr6YCE",
            authDomain: "tender-6183d.firebaseapp.com",
            databaseURL: "https://tender-6183d.firebaseio.com",
            projectId: "tender-6183d",
            storageBucket: "tender-6183d.appspot.com",
            messagingSenderId: "323930966139",
            appId: "1:323930966139:web:279e6f9403dd82a6f53ade",
            measurementId: "G-TT8NKYP7X9"
        });

        // Dieses Objekt dient dem eigentlichen Datenbankzugriff.
        // Dabei können beliebig viele "Collections" angesprochen werden,
        // die in etwa den Tabellen einer klassischen Datenbank entsprechen.
        this._db = firebase.firestore();
        this._books = this._db.collection("books");
    }

    /**
     * Gibt alle in der Datenbank gespeicherten Rinder zurück. Hier gilt
     * dasselbe wie im Kommentar zur Methode createDemoData() geschrieben.
     * Alle Dokumente auf einmal auszulesen ist nur dann eine gute Idee,
     * wenn man weiß, dass es nicht viele geben kann. Besser wäre daher,
     * die Menge mit der where()-Funktion von Firebase einzuschränken.
     *
     * @returns Promise-Objekt mit den gespeicherten Rindern
     */
    async selectAllRinds() {
        let result = await this._rinds.orderBy("Alter").get();
        let rinds = [];

        result.forEach(entry => {
            let rind = entry.data();
            rinds.push(rind);
        });

        return rinds;
    }

    /**
     * Gibt ein einzelnes Rind anhand seiner ID zurück.
     * @param id: ID des gesuchten Rindes
     * @returns Promise-Objekt mit dem gesuchten Rind
     */
    async selectRindById(id) {
        let result = await this._rinds.doc(id).get();
        return result.data();
    }

    /**
     * Löscht ein einzelnes Rind aus der Datenbank.
     * @param id: ID des zu löschenden Rindes
     * @returns Promise-Objekt zum Abfangen von Fehlern oder Warten auf Erfolg
     */
    async deleteBookById(id) {
        return this._books.doc(id).delete();
    }
}
