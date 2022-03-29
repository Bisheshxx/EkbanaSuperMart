import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggled: boolean =true;

  toggle() {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
