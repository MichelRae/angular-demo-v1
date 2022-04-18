import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() title?: string;
  @Input() titleTag?: string;
  @Input() image?: string;
  @Input() subTitle?: string;
  @Input() description?: string;

  hero: Hero = {
    title: 'title',
    titleTag:'titleTag',
    image: 'image',
    subTitle:'subTitle',
    description: 'description'
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
    console.log(this.titleTag)
  }

}

export interface Hero {
  title ?: string
  titleTag?: string
  image: string
  subTitle: string
  description: string
}
