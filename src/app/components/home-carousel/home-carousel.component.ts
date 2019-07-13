import { Component, OnInit } from '@angular/core';
import { HomeCarouselService } from './HomeCarouselService';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  promotionalImgs: string[];
  errorMessage: string;

  // constructor Injection
  constructor(private homeCarouselService: HomeCarouselService) { }


  ngOnInit() {
    console.log('noi');
    this.homeCarouselService.getImages().subscribe(
      pImages => {
        this.promotionalImgs = pImages;
      },
      error => this.errorMessage = error as any
    );
  }

}
