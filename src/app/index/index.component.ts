import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
declare let $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  imageObject = [{
    image: 'assets/img/11.jpg',
    alt: 'alt of image',
    title: 'title of image'
  },
  {
    image: 'assets/img/22.jpg',
    alt: 'alt of image',
    title: 'title of image'
  },
  {
    image: 'assets/img/44.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }]
  constructor() { }

  ngOnInit(): void {
    $('#demo1').skdslider({
      'delay': 5000,
      'animationSpeed': 2000,
      'showNextPrev': true,
      'showPlayButton': true,
      'autoSlide': true,
      'animationType': 'fading'
  });
  }

}
