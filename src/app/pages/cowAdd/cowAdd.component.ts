import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

<<<<<<< HEAD
import { CowService, Cow} from '@shared';
=======
import { CowService } from '@shared/services/cow.service';
>>>>>>> f358161b600d15761756697b120c398cc0709932

@Component({
    selector: 'app-cowAdd',
    templateUrl: './cowAdd.component.html',
    styleUrls: ['./cowAdd.component.scss']
})

export class CowAddComponent {
    
    constructor(private CowService: CowService) {}

    // Button zieht alle Variabeln aus dem Bogen heraus
    public onSubmit(form: NgForm) {
        const age = form.value.age;
        const diet = form.value.diet;
        const sex = form.value.sex;
        const date = form.value.date;
        const weight = form.value.weight;
        const hof = form.value.hof;
        const name = form.value.name;
        const quality = form.value.quality;
        const race = form.value.race;
        const imageUrl = form.value.imageUrl

        //schickt alle herausgezogenen Parameter an CowService
        return this.CowService.cowFormSend(age, diet, sex, date, weight, hof, name , quality, race, imageUrl);

    }
}