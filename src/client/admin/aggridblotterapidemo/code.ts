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
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'Layout', 'Theme'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Shipping',
    Layouts: [
      {
        Columns: ['OrderId', 'Employee', 'ShipCountry', 'Freight'],
        ColumnSorts: [],
        Name: 'Orders',
      },
      {
        Columns: ['OrderId', 'ShipVia', 'Freight', 'ShipName', 'ShipCountry'],
        ColumnSorts: [
          {
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
        ],
        Name: 'Shipping',
      },
    ],
  },
} as PredefinedConfig;

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

  const testDiv: HTMLElement | null = document.getElementById('aboveGridDiv');
  if (testDiv != null) {
    testDiv.style.backgroundColor = 'lightGray';
    testDiv.style.marginBottom = '10px';
    testDiv.style.padding = '10px';
    var para = document.createElement('P');
    para.innerHTML = '<b>Using the Adaptable Api</b><br/>';
    para.innerHTML +=
      'Click "Run Quick Search" (or "Clear Quick Search") to call the equivalent Quick Search Api functions.<br/>';
    para.innerHTML +=
      'And use other buttons to set Dashboard visibility, load a layout and display a popup.';
    testDiv.appendChild(para);

    var textBox = document.createElement('input');
    textBox.id = 'txtQuickSearchText';
    textBox.name = 'txtQuickSearchText';
    textBox.style.marginRight = '10px';
    testDiv.appendChild(textBox);

    var runQuickSearchButton = document.createElement('BUTTON');
    runQuickSearchButton.innerHTML = 'Run Quick Search';
    runQuickSearchButton.onclick = () => runQuickSearchViaAPI();
    runQuickSearchButton.style.marginRight = '10px';
    testDiv.appendChild(runQuickSearchButton);

    var clearQuickSearchButton = document.createElement('BUTTON');
    clearQuickSearchButton.innerHTML = 'Clear Quick Search';
    clearQuickSearchButton.onclick = () => clearQuickSearchViaAPI();
    clearQuickSearchButton.style.marginRight = '50px';
    testDiv.appendChild(clearQuickSearchButton);

    var floatDashboardButton = document.createElement('BUTTON');
    floatDashboardButton.innerHTML = 'Float Dashboard';
    floatDashboardButton.onclick = () => floatDashboard();
    floatDashboardButton.style.marginRight = '10px';
    testDiv.appendChild(floatDashboardButton);

    var deleteFirstRowButton = document.createElement('BUTTON');
    deleteFirstRowButton.innerHTML = 'Delete First Row';
    deleteFirstRowButton.onclick = () => deleteFirstRow();
    deleteFirstRowButton.style.marginRight = '30px';
    testDiv.appendChild(deleteFirstRowButton);

    var showOrdersLayoutButton = document.createElement('BUTTON');
    showOrdersLayoutButton.innerHTML = 'Load Orders Layout';
    showOrdersLayoutButton.onclick = () => showOrdersLayout();
    showOrdersLayoutButton.style.marginRight = '10px';
    testDiv.appendChild(showOrdersLayoutButton);

    var showCustomSortPopupButton = document.createElement('BUTTON');
    showCustomSortPopupButton.innerHTML = 'Open Custom Sort Popup';
    showCustomSortPopupButton.onclick = () => showCustomSortPopup();
    showCustomSortPopupButton.style.marginRight = '10px';
    testDiv.appendChild(showCustomSortPopupButton);
  }

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Adaptable Api Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  function runQuickSearchViaAPI() {
    const element: any = document.getElementById('txtQuickSearchText');
    if (element != null) {
      let searchValue = element.value;
      if (searchValue != null && searchValue != '') {
        adaptableApi.quickSearchApi.runQuickSearch(searchValue);
      }
    }
  }

  function clearQuickSearchViaAPI() {
    const element: any = document.getElementById('txtQuickSearchText');
    if (element != null) {
      element.value = '';
      adaptableApi.quickSearchApi.clearQuickSearch();
    }
  }

  function floatDashboard() {
    // use api method
    adaptableApi.dashboardApi.floatDashboard();
  }

  function deleteFirstRow() {
    let firstRow: any = adaptableOptions.vendorGrid.api.getDisplayedRowAtIndex(
      0
    );
    if (firstRow && firstRow.data) {
      adaptableApi.gridApi.deleteGridData([firstRow.data]);
    }
  }

  function showOrdersLayout() {
    adaptableApi.layoutApi.setLayout('Orders');
  }

  function showCustomSortPopup() {
    adaptableApi.customSortApi.showCustomSortPopup();
  }

  return { adaptableOptions, adaptableApi };
};
