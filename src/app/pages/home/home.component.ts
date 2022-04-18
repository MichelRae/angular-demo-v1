import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Online Learning with"
  titleTag="72 courses"
  image= "../assets/img/1920x800/img2.jpg"
  subTitle="Join our community"
  description="Were on a mission to make high-quality courses for our community"
  constructor() { }

  ngOnInit(): void {
  }

}
