import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [{
    name: "Soft Drinks",
    description: "placeholder content",
    image: "drinks/coke.jpg"
  },
  {
    name: "Mains",
    description: "some text",
    image: "french_toast.jpg"
  }, {
    name: "Hot Beverages",
    description: "something something",
    image: "drinks/coffee.jpg"
  }, {
    name: "Sides",
    description: "Fries and others",
    image: "pancake.jpg"
  }]



}
