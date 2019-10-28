"use strict";

/**
 * Klasse stellt Detailseite der App zur Verfügung
 */
class PageDetail {
    /**
     * Konstruktor
     * @param {App} app Zentrale Instanz der App-Klasse
     */
    constructor(app){
        this._app = app;
        this._recordId = -1;
        this._data = null;
    }

    /**
     * Seite anzeigen. Wird von App-Klasse aufgerufen.
     */
    async show(matches){
        //URL-Parameter auswerten
        this._recordId = matches[1];
        this._data = this._app.database.getRecordById(this._recordId);

        //Anzuzeigenden Seiteninhalt nachladen
        let html = await fetch("page-detail/page-detail.html");
        let css = await fetch("page-detail/page-detail.css");

        if (html.ok && css.ok) {
            html = await html.text();
            css = await css.text();
        } else {
            console.error("Fehler beim Laden des HTML/CSS-Inhalts")
            return;
        }

        //Seite zu Anzeige bringen
        let pageDom = this._processTemplate(html);

        this._app.setPageTitle('Rind ${this._data.name}', {isSubPage: true});
        this._app.setPageCss(css);
        this._app.setPageHeader(pageDom.querySelector("header"));
        this._app.setPageContent(pageDom.querySelector("main"));
    }

    /**
     * Hilfsmethode, die HTML-Code der gelesenen HTML-Datei bearbeitet
     * Event Handler für Button registriert.
     * 
     * @param {HTMLElement} pageDom Wurzelelement der eingelesenen HTML mit HTML-Template der Seite.
     */
    _processTemplate(html) {
        //Platzhalter mit gelesenen Daten ersetzen
        html = html.replace(/{IMG}/g, this._data.img);
        html = html.replace(/{NAME}g/, this._data.name);
        html = html.replace(/{BAUERNHOF}/g, this._data.bauernhof);
        html = html.replace(/{GEWICHT}/g, this._app.weight);
        html = html.replace(/{RACE}/g, this._app.race);
        html = html.replace(/{DATE}/g, this._app.date);
        html = html.replace(/{AGE}/g, this._app.date);
        html = html.replace(/{DIET}/g, this._app.diet);
        html = html.replace(/{QUALITY}/g, this._app.quality);

        //HTML-Template in DOM-Objekte umwandeln, um mit JS DOM-Methoden
        // weiter zu arbeiten.
        let pageDom = document.createElement("div");
        pageDom.innerHTML = html;

        //Event Handler für addToCart Button
        pageDom.querySelector(".id").forEach(e => e.textContent = this._recordID);
        pageDom.querySelector("#add-to-cart-button").addEventListener("click", () => this._onAddToCartButtonClicked());

        // Bearbeitetes HTML-Element zurückgeben

        return pageDom;
    }

    /**
     * EventHandler, der bei Klick auf add-to-cart-button aufgerufen wird.
     */
    _onAddToCartButtonClicked() {
        //addToCart implementieren
    }
}