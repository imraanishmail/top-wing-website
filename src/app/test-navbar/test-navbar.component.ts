import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-navbar',
  templateUrl: './test-navbar.component.html',
  styleUrls: ['./test-navbar.component.css']
})
export class TestNavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  about = 'about'
  menu = 'menu'

}
