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

import '../../../DemoPage/aggriddemo.css';
import json from '../../../DataSets/Json/NorthwindOrders.json';

import * as Helper from '../../../src/Helper';

import {
  setUpAgGridLicence,
  getBasicNorthwindColumnSchema,
  getGridOptions,
} from '../../../src/HelperAgGrid';

Helper.MakeAllRecordsColumnsDateProperDates(json);
setUpAgGridLicence();

const columndefs = getBasicNorthwindColumnSchema();

const gridOptions = getGridOptions(columndefs, json);

const adaptableBlotterOptions: IAdaptableBlotterOptions = {
  primaryKey: 'OrderId',
  userName: 'demo user',
  blotterId: 'basic demo',
  licenceKey: process.env.ENTERPRISE_LICENSE,
};

export default () => (
  <AdaptableBlotterReact
    style={{ height: '100%' }}
    gridOptions={gridOptions}
    blotterOptions={adaptableBlotterOptions}
  />
);
