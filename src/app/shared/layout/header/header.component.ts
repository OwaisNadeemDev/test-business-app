import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    activeUrl:string = '';
    navItems:{name:string; path?:string}[] = [
      {
        name:'Home',
      },
      {
        name:'Business',
        path:'/business'
      },
      {
        name:'C2C',
      },
      {
        name:'Story',
      },
      {
        name:'Blog',
      },
      {
        name:'Careers',
        path:'/careers'
      },
    ];

    constructor(private router: Router){
      this.router.events.subscribe((event)=>{
        if(event instanceof NavigationEnd){
            this.activeUrl = event.url;
        }
      })
    }
}

