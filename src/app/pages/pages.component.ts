import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

import {Dashboard} from './dashboard';
import {Clients} from './clients';
import {Projects} from './projects';
import {Ui} from './ui';
import {Maps} from './maps';
import {Charts} from './charts';
import {Forms} from './forms';
import {Tables} from './tables';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>
    `
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Clients',
    component: Clients,
    path: '/clients/...', 
  },
  {
    name: 'Projects',
    component: Projects,
    path: '/projects/...', 
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
  },
  {
    name: 'Maps',
    component: Maps,
    path: '/maps/...',
  },
  {
    name: 'Charts',
    component: Charts,
    path: '/charts/...',
  },
  {
    name: 'Forms',
    component: Forms,
    path: '/forms/...',
  },
  {
    name: 'Tables',
    component: Tables,
    path: '/tables/...',
  }
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
