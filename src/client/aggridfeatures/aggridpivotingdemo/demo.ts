import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import './pivoting.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData, false);
  gridOptions.sideBar = true;
  gridOptions.modules = AllEnterpriseModules;

  (gridOptions.processSecondaryColDef = function(colDef) {
    //  console.log(colDef);
    let col = colDef.pivotKeys?.find(pk => pk === 'Speedy Express');
    if (col) {
      // make all the columns upper case
      colDef.headerName = colDef.headerName!.toUpperCase();
      colDef.headerClass = 'secondary-column-color-background';
      // the pivot keys are the keys use for the pivot
      // don't change these, but you can use them for your information
      //    console.log('Pivot Keys:');
      //     console.log(colDef.pivotKeys);
      // the value column is the value we are aggregating on
      //    console.log('Pivot Value Keys:');
      //    console.log(colDef.pivotValueColumn);
    }
  }),
    // this is a callback that gets called on each group definition
    (gridOptions.processSecondaryColGroupDef = function(colGroupDef) {
      console.log(colGroupDef);
      let col = colGroupDef.pivotKeys?.find(pk => pk === 'Speedy Express');
      if (col) {
        colGroupDef.headerClass = 'secondary-group-column-color-background';
        colGroupDef.headerName = colGroupDef.headerName + ' !!!';
      }
      // put 'year' in front of each group
    });

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Pivoting Demo',
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
