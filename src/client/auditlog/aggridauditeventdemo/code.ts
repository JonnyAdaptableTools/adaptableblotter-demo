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
import {
  AuditLogEventArgs,
  DataChangedDetails,
} from '@adaptabletools/adaptable/src/Api/Events/AuditEvents';

var adaptableApi: AdaptableApi;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Audit Event Demo',
    auditOptions: {
      auditCellEdits: {
        auditAsEvent: true,
      },
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.auditEventApi.on(
    'AuditCellEdited',
    (auditLogEventArgs: AuditLogEventArgs) => {
      const dataChangeDetails: DataChangedDetails | undefined =
        auditLogEventArgs.data[0].id.data_change_details;
      console.log(
        'The "AuditCellEdited" event was fired because in the Column: "' +
          dataChangeDetails?.column_id +
          '" we changed "' +
          dataChangeDetails?.previous_value +
          '" to: "' +
          dataChangeDetails?.new_value +
          '"'
      );
    }
  );

  return { adaptableOptions, adaptableApi };
};
