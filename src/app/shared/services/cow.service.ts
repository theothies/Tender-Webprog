import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cow } from '../models';

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

    public getAllCows(): Observable<Cow[]>{
        return this.cows;
    };

    public generateLink(id: string): string{
        return '/detail/$(id)';
    }

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