import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cow } from '../models';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class CowService {
    private cowsCollection: AngularFirestoreCollection<Cow>;
    cows: Observable<Cow[]>;
    cow: Observable<Cow>;
    
    constructor(private db: AngularFirestore) {
      this.cowsCollection = db.collection<Cow>('cows');
      //this.cows = this.cowsCollection.valueChanges();
  
      this.cows = this.cowsCollection.snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Cow;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
    }

    // Für die Card/Carousel Ansicht, damit alle Rinderprofile übergeben werden zum Anzeigen auf der Seite
    public getAllCows(): Observable<Cow[]>{
        return this.cows;
    };

    // Generiert einen Link für die Detailansicht
    public generateLink(id: string): string{
        return '/detail/$(id)';
    }

    public   getCow(id: string): Observable<Cow> {
        const cowDocuments = this.db.doc<Cow>('cows/' + id);
        console.log(cowDocuments);
        this.cow = cowDocuments.snapshotChanges().map(actions => {
            const data = actions.payload.data() as Cow;
            const id = actions.payload.id;
            return { id, ...data};
          });
        console.log(this.cow);
        return this.cow;
      }

    // Nimmt Parameter aus der cowAdd.component und erstellt einen Datenbankeintrag
    cowFormSend(age, diet, sex, date, weight, hof, name, quality, race, imageUrl : any): void {
        this.db.collection("cows").add({
            age: age,
            diet: diet,
            sex: sex,
            date: date,
            weight: weight,
            hof: hof,
            name: name,
            quality: quality,
            race: race,
            imageUrl: imageUrl
        })    
        .then(function(Cow){
            console.log("Cow added with ID: ", Cow.id)
        })
        .catch(function(error){
            console.error("Error adding cow ", error)
        })
    }

}    