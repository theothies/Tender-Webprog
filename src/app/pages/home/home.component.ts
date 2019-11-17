import { Component, OnInit, OnDestroy} from '@angular/core';
import { Carousel } from '../../shared/models/carousel.model';
import { Cow } from '../../shared/models/cow.model'
import { CowService } from '../../shared/services/cow.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  cowList: Cow[];
  carouselList: Carousel[] = [];
  serviceSub: any;

  constructor(private readonly cowservice: CowService){}

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  getCows(): Cow[]{
    return this.cowList;
  }

  ngOnInit(){
    this.serviceSub = this.cowservice.getAllCows().subscribe(cows => {
      this.cowList = cows;
      this.generateCarouselFromCows();
    });
  }

  generateCarouselFromCows() {
    this.cowList.forEach(cow => {
      this.carouselList.push(new Carousel(cow.imageUrl, cow.name,cow.age, cow.race, cow.hof, 'Bild von ' + cow.name, this.generateDetailLink(cow.id), false));
    })
    
  }

  generateDetailLink(id:string): string{
    return '/detail/' + id;
  }

  ngOnDestroy(){
    this.serviceSub.unsubscribe();
  }
}
