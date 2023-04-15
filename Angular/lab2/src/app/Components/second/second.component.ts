import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  imgSrcarr = [
    'https://pe-images.s3.amazonaws.com/type/effects/image-in-text/new/hawaii.jpg',
    'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg',
    'https://www.w3schools.com/css/img_5terre.jpg',
    'https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg',
    'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
  ];
  imgSrc = this.imgSrcarr[0];
  i: number = 0;
  interval: any;
  next() {
    if (this.i < this.imgSrcarr.length - 1) {
      this.i++;
      this.imgSrc = this.imgSrcarr[this.i];
    }
  }

  prev() {
    if (this.i > 0) {
      this.i--;
      this.imgSrc = this.imgSrcarr[this.i];
    }
  }
  slide() {
    this.interval = setInterval(() => {
      this.next();
      if (this.i == this.imgSrcarr.length - 1) {
        this.i = -1;
      }
    }, 2000);
  }
  stop() {
    clearInterval(this.interval);
  }
}
