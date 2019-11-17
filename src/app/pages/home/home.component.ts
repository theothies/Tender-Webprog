import { Component, OnInit, OnDestroy} from '@angular/core';
import { Cow, Carousel } from '../../shared/models';
import { CowService } from '../../shared/services';
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
