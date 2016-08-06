import {Inject,Component, Input, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES  } from '@angular/router';
import { RouteConfig,Router,RouteParams, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {BaCard} from '../../../../theme/components';

import {Client} from '../../../../models/Client';
import {Project} from '../../../../models/Project';

@Component({
  selector: 'clientActions',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, ROUTER_DIRECTIVES],
  styles: [],
  providers: [],
  template: require('./clientActions.html'),
})
export class ClientActions {
  client: any;
  sub: any;

  constructor(private router: Router, private routeParams: RouteParams) {
  }

  ngOnInit() {    
    console.log('entrando al ON INIT');
    this.client = this.routeParams.get('id');
    console.log('este es el id -------> '+ this.client);
    
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  selectProject(project: Project) {
    console.log(project);
    this.router.navigate(['ProjectActions', { project: project }]);
  }
}
