import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  serviceCards:{src:string; title:string; description:string}[] = [
    {
      src: '../../../assets/arrow-cycle.png',
      title: 'Engage Directly',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    },
    {
      src: '../../../assets/building.png',
      title: 'Gain Insights',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    },
    {
      src: '../../../assets/search.png',
      title: 'Build Lasting Relationships',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    },
    {
      src: '../../../assets/target.png',
      title: 'Focus on core business',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    },
    {
      src: '../../../assets/payment.png',
      title: 'Pay per delivery',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    },
    {
      src: '../../../assets/badge.png',
      title: 'Get faster payments',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, deleniti Lorem ipsum dolor sit amet consectetur'
    }
  ]
}
