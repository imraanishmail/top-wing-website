import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-navbar-b',
  templateUrl: './test-navbar-b.component.html',
  styleUrls: ['./test-navbar-b.component.css']
})
export class TestNavbarBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navLinks = [
    {
      title: 'features',
      divider: '|'
    },
    {
      title: 'how it works',
      divider:'|'
    }, 
    {
      title: 'testimonials'
    }
  ]
}
