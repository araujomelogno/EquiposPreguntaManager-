import {Inject, Component, Input, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES  } from '@angular/router';
import { RouteConfig, Router, RouteParams, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {BaCard} from '../../../../theme/components';

import {Client} from '../../../../models/Client';
import {Survey} from '../../../../models/Survey';

@Component({
  selector: 'projectActions',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, ROUTER_DIRECTIVES],
  styles: [],
  providers: [],
  template: require('./projectActions.html'),
})
export class ProjectActions {
  project: any;
  sub: any;

  constructor(private router: Router, private routeParams: RouteParams) {
  }

  ngOnInit() {
    this.project = this.routeParams.get('project');
    console.log('este es el id -------> ' + this.project);

  }

  selectSurvey(survey: Survey) {
    console.log(survey);
    this.router.navigate(['SurveyActions', { survey: survey }]);
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
