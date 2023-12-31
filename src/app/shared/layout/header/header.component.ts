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
  isMobileMenuOpen: any;

    constructor(private router: Router){
      this.router.events.subscribe((event)=>{
        if(event instanceof NavigationEnd){
            this.activeUrl = event.url;
        }
      })
    }

    toggleMobileMenu(navigateUrl?:string){
      const mobileMenu:HTMLElement | null = document.getElementById('mobile-menu');
      if(!mobileMenu){
        return;
      }
      if(!this.isMobileMenuOpen){
        this.isMobileMenuOpen = true;
        mobileMenu.style.transform = 'translate3d(0px, 0px, 0px)';
      }
      else{
        this.isMobileMenuOpen = false;
        mobileMenu.style.transform = 'translate3d(-100%, 0px, 0px)';
        if(navigateUrl){
          setTimeout(()=>{
            this.navigate(navigateUrl);
          },500)
        }
      }
    }

    navigate(url:string){
      this.router.navigateByUrl(url);
    }

}

