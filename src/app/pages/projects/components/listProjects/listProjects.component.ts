import {Component, ViewEncapsulation} from '@angular/core';
import { RouteConfig,Router } from '@angular/router-deprecated';

import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BasicTablesService} from './basicTables.service';

import {BaCard} from '../../../../theme/components';

import {Client} from '../../../../models/Client';

 
import {BaSidebarService} from '../../../../theme/components/baSidebar/baSidebar.service';
import {Dashboard} from '../../../dashboard'; 

@Component({
  selector: 'listProjects-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./listProjects.scss')],
  template: require('./listProjects.html'),
  providers: [BasicTablesService,BaSidebarService]
}) 
export class ListProjects {


  clients: Array<Client>;

  constructor(
    private router: Router,
    private _basicTablesService: BasicTablesService) {
    this.clients = _basicTablesService.clients;
  }

  ngOnInit() { 
  }

  onSelect(client:Client) {
    console.log(client);
    this.router.navigate(['ClientActions',{id:client}]);
 
  }
}



