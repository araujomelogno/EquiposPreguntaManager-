import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Panelistas activos',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Estudios',
        stats: '1230',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Encuestas completas',
        stats: '17.391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Taza Respusta',
        stats: '70',
        icon: 'refresh',
      }
    ];
  }
}
