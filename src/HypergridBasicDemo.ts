import * as Helper from './Helper';
import {
  IAdaptableBlotter,
  IAdaptableBlotterOptions,
} from 'adaptableblotter/types';
import { getSchema, setNorthwindHyperGridProperties } from './HelperHypergrid';

export class HypergridBasicDemo {
  private adaptableblotter: IAdaptableBlotter;
  private grid: any;
  constructor() {
    let data: any[];
    Helper.getDataFromJson('NorthwindOrders.json')
      .then(json => (data = json))
      .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data))
      .then(() => {
        //create the Hypergrid
        let schema: any = getSchema(data);
        this.grid = new (<any>window).fin.Hypergrid('#' + 'grid', {
          data: data,
          schema: schema,
        });
        //Make the data to tick every 0.5s
        //     setInterval(() =>                     selectedConfig.tickData(this.grid), 500)

        //set all the properties such as editor etc....
        setNorthwindHyperGridProperties(this.grid);

        this.grid.addEventListener('fin-after-cell-edit', (e: any) => {
          let row = this.grid.behavior.dataModel.getRow(
            e.detail.input.event.visibleRow.rowIndex
          );
          this.grid.repaint();
        });

        //create Adaptable Blotter
        let blotterOptions: IAdaptableBlotterOptions = {
          primaryKey: 'OrderId',
          vendorGrid: this.grid,
          userName: 'Jonathan',
          blotterId: 'Basic Demo',
          licenceKey: Helper.getdemolicencekey(),
          //  predefinedConfig: json // no config in this basic demo?
        };

        this.adaptableblotter = new (<any>(
          window
        )).adaptableblotterhypergrid.AdaptableBlotter(blotterOptions);
        //alternate rows
        var origgetCell = this.grid.behavior.dataModel.getCell;
        this.grid.behavior.dataModel.getCell = function(
          config: any,
          declaredRendererName: any
        ) {
          if (config.isDataRow) {
            var y = config.dataCell.y;
            if (y % 2) {
              config.backgroundColor = config.altbackground;
            }
          }
          return origgetCell.call(
            this.grid.behavior.dataModel,
            config,
            declaredRendererName
          );
        };
      });
  }
}

let json = {
  Dashboard: {
    VisibleToolbars: ['AdvancedSearch', 'Layout', 'QuickSearch', 'Chart'],
    VisibleButtons: [
      'About',
      'Dashboard',
      'QuickSearch',
      'SmartEdit',
      'ColumnChooser',
      'BulkUpdate',
    ],
    Zoom: '1',
  },
};
