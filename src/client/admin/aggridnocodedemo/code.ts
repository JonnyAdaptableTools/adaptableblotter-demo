import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';

import '../../../../DemoPage/aggriddemo.css';

import nocode from '@adaptabletools/adaptable-plugin-nocode-aggrid';
import {
  AdaptableOptions,
  PredefinedConfig,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

import Adaptable from '@adaptabletools/adaptable/agGrid';

export default () => {
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Nocode Plugin Basic Demo',

    predefinedConfig: {} as PredefinedConfig,

    plugins: [
      nocode({
        onInit: adaptableOptions => {
          adaptableOptions.vendorGrid.suppressFieldDotNotation = true;
          adaptableOptions.vendorGrid.modules = AllEnterpriseModules;
        },
      }),
    ],
  };

  Adaptable.initLazy(adaptableOptions).then(api => {
    console.log(api, '!');
  });

  return { adaptableOptions };
};
