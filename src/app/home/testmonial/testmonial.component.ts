import { Component, OnInit } from '@angular/core';
import { TestmonialVM } from '../../view-models/testmonial-vm'
@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit {

  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];

  images:TestmonialVM[] = [
    {name:'test 1', url: '../assets/images/avatar.jpg', position: 'manager', text: 'Text will add herer'},
    {name:'test 2', url: '../assets/images/avatar.jpg', position: 'manager', text: 'Text will add herer'},
    {name:'test 3', url: '../assets/images/avatar.jpg', position: 'manager', text: 'Text will add herer'},
    {name:'test 4', url: '../assets/images/avatar.jpg', position: 'manager', text: 'Text will add herer'}
]
  ;
  constructor() { 
    
    this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}

  ngOnInit(): void {
  }

}
