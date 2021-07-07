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

const demoConfig: PredefinedConfig = {
  Dashboard: {
    ModuleButtons: ['TeamSharing', 'ConditionalStyle', 'FormatColumn'],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Team Sharing Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    teamSharingOptions: {
      // enable Team Sharing by setting this property to true
      enableTeamSharing: true,

      // provide a function implementation for retrieving items from Team Sharing
      // here we are using local storage but users will likely select a remote destination
      async getSharedEntities(adaptableId) {
        return new Promise(resolve => {
          const sharedEntities = JSON.parse(
            localStorage.getItem(`TEAM_SHARING:${adaptableId}`) || '[]'
          );
          setTimeout(() => resolve(sharedEntities), 1000);
        });
      },

      // provide a function implementation for persisting items into Team Sharing
      // here we are using local storage but users will likely select a remote destination
      async setSharedEntities(adaptableId, sharedEntities) {
        return new Promise(resolve => {
          localStorage.setItem(
            `TEAM_SHARING:${adaptableId}`,
            JSON.stringify(sharedEntities)
          );
          setTimeout(() => resolve(), 1000);
        });
      },
    },
    entitlementOptions: {
      moduleEntitlements: [
        {
          adaptableModule: 'ConditionalStyle',
          accessLevel: 'ReadOnly',
        },
      ],
    },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
