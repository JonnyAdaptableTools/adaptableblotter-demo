import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';

import { GridOptions } from '@ag-grid-community/all-modules';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

import Adaptable from '@adaptabletools/adaptable/agGrid';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,

    columnDefs: columnDefs,
    rowData: rowData,
    floatingFilter: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'No Config Demo',

    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig: {},
  };

  await Adaptable.init(adaptableOptions);
};
