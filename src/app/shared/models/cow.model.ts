export class Cow {
    id: string;
    age: number;
    diet: string;
    sex: string;
    date: any;
    weight: number;
    hof: string;
    name: string;
    quality: string;
    race: string;
    imageUrl: string;
    price: number;
    
    constructor( age: number,
         diet: string,
        sex: string,
        date: any,
        weight: number,
        hof: string, name: string,
        quality: string,
        race: string,
        imageUrl: string,
        price: number){
            this.age = age;
            this.diet = diet;
            this.sex = sex;
            this.date = date;
            this.weight = weight;
            this.hof = hof;
            this.name = name;
            this.quality = quality;
            this.race  = race;
            this.imageUrl  = imageUrl;
            this.price = price;
    }
}