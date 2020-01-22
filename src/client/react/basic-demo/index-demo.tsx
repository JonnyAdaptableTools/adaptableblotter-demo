import React from 'react';

// import Adaptable and types
import AdaptableReact from '@adaptabletools/adaptable-react-aggrid';
import { AdaptableOptions } from '@adaptabletools/adaptable-react-aggrid';

// import Adaptable css and themes
import '@adaptabletools/adaptable-react-aggrid/base.css';
import '@adaptabletools/adaptable-react-aggrid/themes/light.css';
import '@adaptabletools/adaptable-react-aggrid/themes/dark.css';

// import aggrid themes
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';

import { LicenseManager } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';
import json from '../../../../DataSets/Json/NorthwindOrders.json';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

const helperAgGrid = new HelperAgGrid();
helperAgGrid.setUpAgGridLicence();
Helper.MakeAllRecordsColumnsDateProperDates(json);

LicenseManager.setLicenseKey(process.env.AG_GRID_LICENSE as string);

const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

const gridOptions = helperAgGrid.getGridOptions(columndefs, json);

const adaptableOptions: AdaptableOptions = {
  primaryKey: 'OrderId',
  userName: 'demo user',
  adaptableId: 'basic demo',
};

export default () => (
  <AdaptableReact
    style={{ height: '100%' }}
    gridOptions={gridOptions}
    adaptableOptions={adaptableOptions}
  />
);
