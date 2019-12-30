import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import './viletheme.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let blotterApi: BlotterApi;
  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getFilteredColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Adaptable API Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  blotterApi = AdaptableBlotter.init(blotterOptions);

  const testDiv: HTMLElement | null = document.getElementById('aboveGridDiv');
  if (testDiv != null) {
    testDiv.style.backgroundColor = 'lightGray';
    testDiv.style.marginBottom = '10px';
    testDiv.style.padding = '10px';
    var para = document.createElement('P');
    para.innerHTML =
      'Using the Adaptable API: Click "Run Quick Search" (or "Clear Quick Search") to call the equivalent Quick Search API functions.  And use other buttons to set Dashboard visibility and load a layout.';
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

    var minimiseDasahboardButton = document.createElement('BUTTON');
    minimiseDasahboardButton.innerHTML = 'Minimise Dasbhoard';
    minimiseDasahboardButton.onclick = () => minimiseDashboard();
    minimiseDasahboardButton.style.marginRight = '10px';
    testDiv.appendChild(minimiseDasahboardButton);

    var maximiseDasahboardButton = document.createElement('BUTTON');
    maximiseDasahboardButton.innerHTML = 'Maximise Dasbhoard';
    maximiseDasahboardButton.onclick = () => maximiseadshboard();
    maximiseDasahboardButton.style.marginRight = '30px';
    testDiv.appendChild(maximiseDasahboardButton);

    var showOrdersLayoutButton = document.createElement('BUTTON');
    showOrdersLayoutButton.innerHTML = 'Load Orders Layout';
    showOrdersLayoutButton.onclick = () => showOrdersLayout();
    showOrdersLayoutButton.style.marginRight = '10px';
    testDiv.appendChild(showOrdersLayoutButton);

    var loadVileThemeButton = document.createElement('BUTTON');
    loadVileThemeButton.innerHTML = 'Load Vile Theme';
    loadVileThemeButton.onclick = () => loadVileTheme();
    loadVileThemeButton.style.marginRight = '10px';
    testDiv.appendChild(loadVileThemeButton);

    var showColumnChooserPopupButton = document.createElement('BUTTON');
    showColumnChooserPopupButton.innerHTML = 'Show Column Chooser';
    showColumnChooserPopupButton.onclick = () => showColumnChooserPopup();
    showColumnChooserPopupButton.style.marginRight = '10px';
    testDiv.appendChild(showColumnChooserPopupButton);
  }

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function runQuickSearchViaAPI() {
    const element: any = document.getElementById('txtQuickSearchText');
    if (element != null) {
      let searchValue = element.value;
      if (searchValue != null && searchValue != '') {
        blotterApi.quickSearchApi.applyQuickSearch(searchValue);
      }
    }
  }

  function clearQuickSearchViaAPI() {
    const element: any = document.getElementById('txtQuickSearchText');
    if (element != null) {
      element.value = '';
      blotterApi.quickSearchApi.clearQuickSearch();
    }
  }

  function minimiseDashboard() {
    blotterApi.dashboardApi.Minimise();
  }

  function maximiseadshboard() {
    blotterApi.dashboardApi.SetVisibility('Visible');
  }

  function showOrdersLayout() {
    blotterApi.layoutApi.setLayout('Orders');
  }

  function loadVileTheme() {
    blotterApi.themeApi.loadTheme('vile-theme');
  }

  function showColumnChooserPopup() {
    blotterApi.columnChooserApi.showColumnChooserPopup();
  }
};
