import {Inject, Component, Input, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES  } from '@angular/router';
import { RouteConfig, Router, RouteParams, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {BaCard} from '../../../../theme/components';

import {Client} from '../../../../models/Client';

@Component({
  selector: 'suerveyActions',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, ROUTER_DIRECTIVES],
  styles: [],
  providers: [],
  template: require('./suerveyActions.html'),
})
export class SurveyActions {
  survey: any;
  sub: any;

  constructor(private router: Router, private routeParams: RouteParams) {
  }

  ngOnInit() {
    this.survey = this.routeParams.get('survey');
    console.log('este es el id -------> ' + this.survey);

  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
