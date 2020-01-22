import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';

import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { FootballDataHelper } from '../../../Helpers/FootballDataHelper';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let footballDataHelper = new FootballDataHelper();

  const gridOptions = footballDataHelper.getMasterGridOptionsFootball();
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'name',
    userName: 'Demo User',
    adaptableId: 'Master Detail Demo',

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
