import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
 
@Component({
  selector: 'createClient',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [],
  template: require('./createClient.html'),
})
export class CreateClient {

  constructor() {
  }

  ngOnInit() {
    console.log('ENTRANDOOOO');
    
  }
}
