import AdaptableBlotter, {
  AdaptableNoCodeWizard,
} from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { startCase } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';

import nocode from '@adaptabletools/adaptable-plugin-nocode-aggrid';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

import { ColDef } from '@ag-grid-community/all-modules';
import Adaptable from '@adaptabletools/adaptable/agGrid';

export default () => {
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Nocode Plugin Basic Demo',

    predefinedConfig: demoConfig,

    plugins: [
      nocode({
        // headerMessage: 'Welcome to Adaptable!',
        // // actionMessage: 'D&D an excel or json file',
        // dropActionMessage: 'Drop it while its hot!',
        // theme: 'light',
        // loadingMessage: 'Please wait ...',
        onInit: adaptableOptions => {
          console.log(adaptableOptions);
          adaptableOptions.vendorGrid.suppressFieldDotNotation = true;
          adaptableOptions.vendorGrid.modules = AllEnterpriseModules;
        },
      }),
    ],
  };

  Adaptable.initLazy(adaptableOptions).then(api => {
    console.log(api, '!!!');
  });

  return { adaptableOptions };
};

const demoConfig: PredefinedConfig = {
  Theme: {
    // CurrentTheme: 'dark',
  },
};
