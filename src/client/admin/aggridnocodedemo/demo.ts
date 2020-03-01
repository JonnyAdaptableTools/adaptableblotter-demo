import AdaptableBlotter, {
  AdaptableNoCodeWizard,
} from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { startCase } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';

import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';

//import { IAdaptableNoCodeWizard } from '@adaptabletools/adaptable/src/AdaptableInterfaces/IAdaptableNoCodeWizard';
// import { IAdaptableBlotterWizard } from '@adaptabletools/adaptable/src/BlotterInterfaces/IAdaptableBlotterWizard';
import { ColDef } from '@ag-grid-community/all-modules';

export default () => {
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'dtmKey', // will be added later ...
    //adaptableId: 'Position Monitor',
    userName: 'No Data User',
    // predefinedConfig: demoConfig,
  };
  new AdaptableNoCodeWizard(adaptableOptions, {
    /*
      onInit: ({ adaptableOptions, gridOptions }) => {
        adaptableOptions.filterOptions 
          adaptableOptions.filterOptions || {};
        gridOptions.columnDefs = gridOptions.columnDefs!.map(c => {
          return {
            ...c,
            headerName: startCase((c as ColDef).field),
          };
        });
      },
*/
  });
};
