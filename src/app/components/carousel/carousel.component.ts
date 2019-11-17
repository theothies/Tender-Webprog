import { Component, Input } from '@angular/core';
import { Carousel } from '@shared/models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  constructor() {
  }

  @Input() public carouselList: Carousel[];
}