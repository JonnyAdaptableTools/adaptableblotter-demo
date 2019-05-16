import React from 'react';

// import the blotter and types
import AdaptableBlotterReact from 'adaptableblotter-react-aggrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter-react-aggrid';

// import blotter css and themes
import 'adaptableblotter-react-aggrid/base.css';
import 'adaptableblotter-react-aggrid/themes/light.css';
import 'adaptableblotter-react-aggrid/themes/dark.css';

// import aggrid themes
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import { LicenseManager } from 'ag-grid-enterprise';
import '../../../../DemoPage/aggriddemo.css';
import json from '../../../../DataSets/Json/NorthwindOrders.json';

import { HelperAgGrid } from '../../../HelperAgGrid';
import * as Helper from '../../../Helper';

const helperAgGrid = new HelperAgGrid();
helperAgGrid.setUpAgGridLicence();
Helper.MakeAllRecordsColumnsDateProperDates(json);

LicenseManager.setLicenseKey(process.env.AG_GRID_LICENSE as string);

const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

const gridOptions = helperAgGrid.getGridOptions(columndefs, json);

const adaptableBlotterOptions: IAdaptableBlotterOptions = {
  primaryKey: 'OrderId',
  userName: 'demo user',
  blotterId: 'basic demo',
  licenceKey: process.env.VALID_BLOTTER_LICENSE,
};

export default () => (
  <AdaptableBlotterReact
    style={{ height: '100%' }}
    gridOptions={gridOptions}
    blotterOptions={adaptableBlotterOptions}
  />
);
