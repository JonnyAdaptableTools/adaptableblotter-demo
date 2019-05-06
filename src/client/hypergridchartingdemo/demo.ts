import AdaptableBlotter from 'adaptableblotter/Hypergrid';

import {
  getSchema,
  setNorthwindHyperGridProperties
} from '../../HelperHypergrid';

import * as Helper from '../../Helper';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../../../ExtLibs/hypergrid/fin-hypergrid';

import '../../../DemoPage/demo.css';
import '../../../DemoPage/hypergriddemo.css';

import {
  IAdaptableBlotter,
  IAdaptableBlotterOptions
} from 'adaptableblotter/types';

import data from '../../../DataSets/Json/NorthwindOrders.json';

// import jsonConfig from './config';

const jsonConfig = {}; // TODO see why the config in the file is not rendering any chart

export class Demo {
  private adaptableblotter: IAdaptableBlotter;
  private grid: any;
  constructor() {
    Helper.MakeAllRecordsColumnsDateProperDates(data);
    let schema: any = getSchema(data);
    this.grid = new fin.Hypergrid('#grid', {
      data: data,
      schema: schema
    });

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
      blotterId: 'Charting Demo',
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: jsonConfig,
      chartOptions: {
        displayOnStartUp: true,
        showModal: false,
        pieChartMaxItems: 50
      }
    };

    this.adaptableblotter = new AdaptableBlotter(blotterOptions);
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
  }
}
