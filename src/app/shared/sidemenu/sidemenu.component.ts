import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  route: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'basics',
      route: './template/basics'
    },
    {
      text: 'dinamics',
      route: './template/dinamics'
    },
    {
      text: 'switches',
      route: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'basics',
      route: './reactive/basics'
    },
    {
      text: 'dinamics',
      route: './reactive/dinamics'
    },
    {
      text: 'switches',
      route: './reactive/switches'
    }
  ];

  authMenu: MenuItem[] = [
    {
      text: 'register',
      route: './auth/register'
    },
    {
      text: 'login',
      route: './auth/login'
    }
  ];

  constructor() { }

}
