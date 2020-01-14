import AdaptableBlotter, {
  AdaptableBlotterWizard,
} from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { startCase } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';

import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import { IAdaptableBlotterWizard } from '@adaptabletools/adaptable/App_Scripts/BlotterInterfaces/IAdaptableBlotterWizard';
import { ColDef } from '@ag-grid-community/all-modules';

export default () => {
  const adaptableBlotterOptions: AdaptableOptions = {
    primaryKey: 'dtmKey', // will be added later ...
    //adaptableId: 'Position Monitor',
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
