import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import finance from '@adaptabletools/adaptable-plugin-finance';
import { InstrumentContext } from '@adaptabletools/adaptable-plugin-finance/src/FDC3Types';

var adaptableApi: AdaptableApi;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'Name',
    userName: 'Demo User',
    adaptableId: 'FDC3 Instrument Demo',
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [
      finance({
        instrumentColumns: [
          {
            columnId: 'Name',
            tickerColumnId: 'Ticker',
            cusipColumnId: 'Cusip',
          },
        ],
      }),
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'BroadcastInstrument',
    (context: InstrumentContext) => {
      console.log(context);
    }
  );

  return { adaptableOptions, adaptableApi };
};
