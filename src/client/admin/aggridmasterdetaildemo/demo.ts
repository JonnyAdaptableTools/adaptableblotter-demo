import * as Helper from '../../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import { HelperAgGrid } from '../../../HelperAgGrid';
import { FootballDataHelper } from '../../../FootballDataHelper';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let footballDataHelper = new FootballDataHelper();

  const gridOptions = footballDataHelper.getMasterGridOptionsFootball();

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'name',
    userName: 'Demo User',
    blotterId: 'Master Detail Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};