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
  AdaptableButton,
  AlertButtonContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert', 'Custom'],
      },
    ],
    CustomToolbars: [
      {
        Name: 'Custom',
        Title: 'Custom',
        CustomToolbarButtonLabels: ['Change Contact First Row'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ContactName'],
        },
        MessageType: 'Info',
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },

        AlertProperties: {
          DisplayNotification: true,
        },
        AlertForm: {
          buttons: [
            {
              onClick: ['undo', 'highlight-cell', 'jump-to-cell'],
              buttonStyle: {
                tone: 'accent',
                variant: 'raised',
              },
              label: 'Undo',
            },
            {
              onClick: ['overwrite'],
              buttonStyle: {
                tone: 'accent',
                variant: 'raised',
              },
              label: 'Overwrite',
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
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
    adaptableId: 'Alert Actions Demo',
    alertOptions: {
      duration: 10000,
      showProgressBar: true,
      closeWhenClicked: true,
      pauseWhenHovering: true,
    },
    dashboardOptions: {
      customToolbarButtons: [
        {
          label: 'Change Contact First Row',
          onClick: () => {
            changeContactName('James Dean', 10248);
          },
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };

  function changeContactName(contactName: string, primaryKeyValue: any): void {
    adaptableApi.gridApi.setCellValue(
      'ContactName',
      contactName,
      primaryKeyValue,
      false
    );
  }
};
