import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

/*
In this demo we add the following css for the Date Picker:
  --ab-cmp-datepicker__background: #c3e7fd;
  --ab-cmp-datepicker__selected-color: #654321;
  --ab-cmp-datepicker__selected-text-color: #ffffe0;
  --ab-cmp-datepicker__selected-border-radius: 5%;
  --ab-cmp-datepicker__hover-color: #b0b3b8;
  --ab-cmp-datepicker__font-family: 'Verdana';
  --ab-cmp-datepicker__border: 3px solid #7c5295;
  --ab-cmp-datepicker__cell-size: 35px;
*/

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Date Picker Demo',
    userInterfaceOptions: {
      dateInputOptions: {
        datepickerButtons: ['today', '-', 'tomorrow', '-', 'yesterday'],
        showOutsideDays: false,
        showWeekNumber: true,
        dateFormat: 'MMM do yyyy',
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
