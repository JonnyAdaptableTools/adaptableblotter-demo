import * as Helper from '../../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  IAdaptableBlotter,
} from 'adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let adaptableblotter: IAdaptableBlotter;
  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getFilteredColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Blotter API Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  adaptableblotter = new AdaptableBlotter(blotterOptions);

  const testDiv: HTMLElement | null = document.getElementById('aboveGridDiv');
  if (testDiv != null) {
    testDiv.style.backgroundColor = 'lightGray';
    testDiv.style.marginBottom = '10px';
    testDiv.style.padding = '10px';
    var para = document.createElement('P');
    para.innerHTML =
      'Using the Adaptable Blotter API: Click "Run Quick Search" (or "Clear Quick Search") to call the equivalent Quick Search API functions.  And use other buttons to set Dashboard visibility and load a layout.';
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
    showOrdersLayoutButton.innerHTML = 'Show Orders Layout';
    showOrdersLayoutButton.onclick = () => showOrdersLayout();
    showOrdersLayoutButton.style.marginRight = '10px';
    testDiv.appendChild(showOrdersLayoutButton);
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
        adaptableblotter.api.quickSearchApi.applyQuickSearch(searchValue);
      }
    }
  }

  function clearQuickSearchViaAPI() {
    const element: any = document.getElementById('txtQuickSearchText');
    if (element != null) {
      element.value = '';
      adaptableblotter.api.quickSearchApi.clearQuickSearch();
    }
  }

  function minimiseDashboard() {
    adaptableblotter.api.dashboardApi.Minimise();
  }

  function maximiseadshboard() {
    adaptableblotter.api.dashboardApi.SetVisibility('Visible');
  }

  function showOrdersLayout() {
    adaptableblotter.api.layoutApi.setLayout('Orders');
  }
};
