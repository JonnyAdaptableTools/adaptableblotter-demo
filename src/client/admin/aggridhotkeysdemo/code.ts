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
import Mousetrap from 'mousetrap';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['FormatColumn', 'GradientColumn'],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Hot Keys Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  // Define 4 Hotkeys using mousetrap as dependency
  // Mousetrap is a 3rd party library we imported in our demos (NOT in core Adaptable)
  Mousetrap.bind('alt+shift+s', () =>
    adaptableApi.scheduleApi.showSchedulePopup()
  );
  Mousetrap.bind('alt+shift+c', () =>
    adaptableApi.calculatedColumnApi.showCalculatedColumnPopup()
  );

  // Define a hotkey using NO dependency - just the native 'keydown' event
  document.addEventListener('keydown', event => {
    const { key, shiftKey, metaKey } = event;

    // metaKey is 'command key' on Mac and 'windows key' on PC
    if (key === 'l' && metaKey && shiftKey) {
      event.preventDefault();
      adaptableApi.layoutApi.showLayoutPopup();
    }
    if (key === 'q' && metaKey && shiftKey) {
      event.preventDefault();
      adaptableApi.quickSearchApi.showQuickSearchPopup();
    }
  });

  return { adaptableOptions, adaptableApi };
};
