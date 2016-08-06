import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
 
@Component({
  selector: 'createProject',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [],
  template: require('./createProject.html'),
})
export class CreateProject {

  constructor() {
  }

  ngOnInit() {
    console.log('ENTRANDOOOO');
    
  }
}
