import AdaptableBlotter from 'adaptableblotter/Hypergrid';

import {
  getSchema,
  setNorthwindHyperGridProperties,
} from '../../HelperHypergrid';

import * as Helper from '../../Helper';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../../../ExtLibs/hypergrid/fin-hypergrid';

import '../../../DemoPage/demo.css';
import '../../../DemoPage/hypergriddemo.css';

import {
  IAdaptableBlotter,
  AdaptableBlotterOptions,
} from 'adaptableblotter/types';

import json from '../../../DataSets/Json/NorthwindOrders.json';

import jsonConfig from './config';

export class Demo {
  private adaptableblotter: IAdaptableBlotter;
  private grid: any;
  constructor() {
    let rowData = JSON.parse(JSON.stringify(json));
    Helper.MakeAllRecordsColumnsDateProperDates(rowData);
    let schema: any = getSchema(rowData);

    this.grid = new fin.Hypergrid('#grid', {
      data: rowData,
      schema: schema,
    });

    setNorthwindHyperGridProperties(this.grid);
    this.grid.addEventListener('fin-after-cell-edit', (e: any) => {
      let row = this.grid.behavior.dataModel.getRow(
        e.detail.input.event.visibleRow.rowIndex
      );
      this.grid.repaint();
    });

    //create Adaptable Blotter
    let blotterOptions: AdaptableBlotterOptions = {
      primaryKey: 'OrderId',
      vendorGrid: this.grid,
      userName: 'Demo User',
      blotterId: 'Basic Demo',
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: jsonConfig,
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
