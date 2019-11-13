import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter, {
  AdaptableBlotterWizard,
} from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { startCase } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import { IAdaptableBlotterWizard } from '@adaptabletools/adaptableblotter/App_Scripts/BlotterInterfaces/IAdaptableBlotterWizard';
import { ColDef } from 'ag-grid-community';

export default () => {
  const adaptableBlotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'dtmKey', // will be added later ...
    //blotterId: 'Position Monitor',
    userName: 'No Data User',
    // predefinedConfig: demoConfig,
  };
  let abWizard: IAdaptableBlotterWizard = new AdaptableBlotterWizard(
    adaptableBlotterOptions,
    {
      /*
      onInit: ({ adaptableBlotterOptions, gridOptions }) => {
        adaptableBlotterOptions.filterOptions =
          adaptableBlotterOptions.filterOptions || {};
        gridOptions.columnDefs = gridOptions.columnDefs!.map(c => {
          return {
            ...c,
            headerName: startCase((c as ColDef).field),
          };
        });
      },
*/
    }
  );
};
