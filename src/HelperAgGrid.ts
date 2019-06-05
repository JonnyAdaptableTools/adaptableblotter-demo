import * as Helper from './Helper';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';
import { LicenseManager } from 'ag-grid-enterprise';

export class HelperAgGrid {
  private currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  private currencyRendereragGrid = (params: any) => {
    try {
      if (params.value) {
        return this.currencyFormatter.format(params.value);
      } else {
        return null;
      }
    } catch (ex) {
      console.error(
        'Error formatting the currency for value: ' +
          params.value +
          ' and node : ',
        params.node
      );
    }
  };

  private shortDateFormatter = new Intl.DateTimeFormat('en-GB');
  private shortDateFormatteragGrid = (params: any) => {
    try {
      if (params.value) {
        return this.shortDateFormatter.format(params.value);
      } else {
        return null;
      }
    } catch (ex) {
      console.error(
        'Error formatting the date for value: ' + params.value + ' and node : ',
        params.node
      );
    }
  };

  private boolParseragGrid = (params: any) => {
    try {
      return `<input type='checkbox'   ${params.value ? 'checked' : ''} />`;
    } catch (ex) {
      console.error(
        'Error parsing the date value: ' + params.newValue + ' and node : ',
        params.node
      );
    }
  };

  private numberToBool = (params: any) => {
    if (params.value === 0) {
      return 'false';
    } else {
      return 'true';
    }
  };

  private dateParseragGrid = (params: any) => {
    try {
      return this.stringToDate(params.newValue, 'dd/mm/yyyy', '/');
    } catch (ex) {
      console.error(
        'Error parsing the date value: ' + params.newValue + ' and node : ',
        params.node
      );
    }
  };

  public setUpAgGridLicence(): void {
    LicenseManager.setLicenseKey(process.env.AG_GRID_LICENSE as string);
  }

  private stringToDate(date: string, format: string, delimiter: string) {
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = date.split(delimiter);
    var monthIndex = formatItems.indexOf('mm');
    var dayIndex = formatItems.indexOf('dd');
    var yearIndex = formatItems.indexOf('yyyy');
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(
      parseInt(dateItems[yearIndex]),
      month,
      parseInt(dateItems[dayIndex])
    );
    return formatedDate;
  }

  private startTickingDataagGrid(gridOptions: any) {
    setInterval(() => {
      let orderId = Helper.generateRandomInt(11020, 11060);
      if (gridOptions != null && gridOptions.api != null) {
        gridOptions.api.forEachNode((rowNode: any, index: number) => {
          if (rowNode.group) {
            return;
          }
          let rowOrderId = gridOptions.api.getValue('OrderId', rowNode);
          if (rowOrderId != orderId) {
            return;
          }

          let numberToAdd: number =
            Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
          let trade = rowNode;
          let columnName = 'ItemCost';
          let initialItemCost = gridOptions.api.getValue(columnName, trade);
          let newItemCost = Helper.roundTo4Dp(initialItemCost + numberToAdd);

          trade.setDataValue(columnName, newItemCost);

          let itemCount = gridOptions.api.getValue('ItemCount', trade);
          let newOrderCost = itemCount * newItemCost;
          trade.setDataValue('OrderCost', newOrderCost);
        });
      }
    }, 500);
  }

  public getGridOptions(columndefs: any, data: any): GridOptions {
    let gridOptions: GridOptions = {
      animateRows: true,
      enableRangeSelection: true,
      floatingFilter: false,
      suppressAggFuncInHeader: true,
      sideBar: true,
      suppressMenuHide: true,
      columnTypes: {
        // not required but helpful for column data type identification
        abColDefNumber: {},
        abColDefString: {},
        abColDefBoolean: {},
        abColDefDate: {},
        abColDefObject: {},
      },
      columnDefs: columndefs,
      rowData: data,
      onGridReady: function() {
        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
        //visible and won't be autosized
        gridOptions.columnApi!.autoSizeAllColumns();
        setTimeout(() => gridOptions.columnApi!.autoSizeAllColumns(), 1);

        gridOptions.api!.closeToolPanel();
        gridOptions.api!.addEventListener('cellEditingStopped', () => {});

        gridOptions.api!.addEventListener('newColumnsLoaded', function() {
          gridOptions.columnApi!.autoSizeAllColumns();
        });
      },
    };
    return gridOptions;
  }

  public getAdaptableBlotterOptions(
    gridOptions: GridOptions,
    pk: string,
    blotterId: string,
    config: any
  ): IAdaptableBlotterOptions {
    let blotterOptions: IAdaptableBlotterOptions = {
      primaryKey: pk,
      vendorGrid: gridOptions,
      userName: 'Demo User',
      blotterId: blotterId,
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: config,
      layoutOptions: {
        includeVendorStateInLayouts: true,
        autoSaveLayouts: true,
      },
      chartOptions: {
        displayOnStartUp: true,
        showModal: false,
        pieChartMaxItems: 50,
      },
    };
    return blotterOptions;
  }

  private getAadaptableBlotterOptionsWithDivNames(
    gridOptions: GridOptions,
    pk: string,
    blotterId: string,
    config: any,
    gridName: string,
    abName: string
  ): IAdaptableBlotterOptions {
    let blotterOptions: IAdaptableBlotterOptions = {
      primaryKey: pk,
      vendorGrid: gridOptions,
      userName: 'Demo User',
      blotterId: blotterId,
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: config,
      layoutOptions: {
        includeVendorStateInLayouts: true,
        autoSaveLayouts: true,
      },
      containerOptions: {
        vendorContainer: gridName,
        adaptableBlotterContainer: abName,
      },
      chartOptions: {
        displayOnStartUp: true,
        showModal: false,
        pieChartMaxItems: 50,
      },
    };
    return blotterOptions;
  }

  public getBasicNorthwindColumnSchema(): any[] {
    var schema = [];
    schema.push({
      headerName: 'Order Id',
      field: 'OrderId',
      editable: true,
      cellClass: 'number-cell',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Cust. Ref',
      field: 'CustomerReference',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Contact',
      field: 'ContactName',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Employee',
      field: 'Employee',
      filter: 'text',
      editable: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Order Date',
      field: 'OrderDate',
      editable: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Invoiced',
      field: 'InvoicedCost',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Order Cost',
      field: 'OrderCost',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Package Cost',
      field: 'PackageCost',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Item Cost',
      field: 'ItemCost',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Item Count',
      field: 'ItemCount',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Company',
      field: 'CompanyName',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Change Last Order',
      field: 'ChangeLastOrder',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Ship Via',
      field: 'ShipVia',
      filter: 'text',
      editable: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Freight',
      field: 'Freight',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Ship Name',
      field: 'ShipName',
      columnGroupShow: 'open',
      editable: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Ship Country',
      field: 'ShipCountry',
      filter: 'text',
      editable: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Shipped Date',
      field: 'ShippedDate',
      editable: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    return schema;
  }

  public getGroupingNorthwindColumnSchema(): any[] {
    var schema = [];
    // do a column group for Customer
    schema.push({
      headerName: 'Customer Info',
      marryChildren: true,
      children: [
        {
          headerName: 'Customer Reference',
          field: 'CustomerReference',
          columnGroupShow: 'open',
          editable: true,
          filter: true,
          sortable: true,
          type: 'abColDefString',
        },
        {
          headerName: 'Company Name',
          field: 'CompanyName',
          columnGroupShow: 'closed',
          editable: true,
          filter: true,
          sortable: true,
          type: 'abColDefString',
        },
        {
          headerName: 'Contact Name',
          field: 'ContactName',
          columnGroupShow: 'closed',
          filter: true,
          sortable: true,
          type: 'abColDefString',
        },
      ],
    });

    // do a column group for Order
    schema.push({
      headerName: 'Order',
      marryChildren: true,
      children: [
        {
          headerName: 'Order Id',
          field: 'OrderId',
          editable: true,
          columnGroupShow: 'open',
          cellClass: 'number-cell',
          filter: true,
          sortable: true,
          type: 'abColDefNumber',
        },
        {
          headerName: 'Order Date',
          field: 'OrderDate',
          editable: true,
          columnGroupShow: 'closed',
          cellEditorParams: { useFormatter: true },
          valueParser: this.dateParseragGrid,
          valueFormatter: this.shortDateFormatteragGrid,
          filter: true,
          sortable: true,
          type: 'abColDefDate',
        },
        {
          headerName: 'Shipped Date',
          field: 'ShippedDate',
          editable: true,
          columnGroupShow: 'closed',
          cellEditorParams: { useFormatter: true },
          valueParser: this.dateParseragGrid,
          valueFormatter: this.shortDateFormatteragGrid,
          enableValue: false,
          filter: true,
          sortable: true,
          type: 'abColDefDate',
        },
        {
          headerName: 'Order Cost',
          field: 'OrderCost',
          cellClass: 'number-cell',
          cellRenderer: this.currencyRendereragGrid,
          columnGroupShow: 'closed',
          editable: true,
          enableValue: true,
          filter: true,
          sortable: true,
          aggFunc: 'sum',
          type: 'abColDefNumber',
        },
        {
          headerName: 'Package Cost',
          field: 'PackageCost',
          cellClass: 'number-cell',
          cellRenderer: this.currencyRendereragGrid,
          editable: true,
          filter: true,
          sortable: true,
          type: 'abColDefNumber',
          aggFunc: 'sum',
        },
      ],
    });
    schema.push({
      headerName: 'Item Cost',
      field: 'ItemCost',
      cellClass: 'number-cell',
      columnGroupShow: 'closed',
      editable: true,
      enableValue: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Item Count',
      field: 'ItemCount',
      cellClass: 'number-cell',
      columnGroupShow: 'closed',
      editable: true,
      enableValue: true,
      filter: true,
      sortable: true,
      aggFunc: 'sum',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Employee',
      field: 'Employee',
      filter: 'text',
      editable: true,
      enableRowGroup: true,
      hide: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Freight',
      field: 'Freight',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      enableValue: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Arrived On Time',
      field: 'ArrivedOnTime',
      editable: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      sortable: true,
      type: 'abColDefBoolean',
    });

    // do a column group for shipping
    schema.push({
      headerName: 'Shipping Details',
      children: [
        {
          headerName: 'Ship Name',
          field: 'ShipName',
          columnGroupShow: 'open',
          editable: true,
          sortable: true,
          type: 'abColDefString',
        },
        {
          headerName: 'Ship Via',
          field: 'ShipVia',
          columnGroupShow: 'closed',
          editable: true,
          sortable: true,
          type: 'abColDefString',
        },
      ],
    });
    schema.push({
      headerName: 'Ship Country',
      field: 'ShipCountry',
      filter: 'text',
      editable: true,
      rowGroup: true,
      enableRowGroup: true,
      hide: true,
      sortable: true,
      type: 'abColDefString',
    });

    return schema;
  }

  public getWorldStatsSchema(): any[] {
    var schema = [];
    schema.push({
      headerName: 'Country',
      field: 'Country',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Code',
      field: 'Code',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Region',
      field: 'Region',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Population',
      field: 'Population',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Density',
      field: 'Density',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Growth (%)',
      field: 'Growth (%)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Urbanization (%)',
      field: 'Urbanization (%)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Birth Rate',
      field: 'Birth Rate',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Death Rate',
      field: 'Death Rate',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Life Expectancy',
      field: 'Life Expectancy',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Land Area',
      field: 'Land Area',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'GDP (T)',
      field: 'GDP (T)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'GDP per Capita (K)',
      field: 'GDP per Capita (K)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'GDP Growth (%)',
      field: 'GDP Growth (%)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Trade (% of GDP)',
      field: 'Trade (% of GDP)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Debt Total (T)',
      field: 'Debt Total (T)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Debt per Capita (K)',
      field: 'Debt per Capita (K)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Debt per GDP (%)',
      field: 'Debt per GDP (%)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Internet Users',
      field: 'Internet Users',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Internet Rate',
      field: 'Internet Rate',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Electricity Usage (M)',
      field: 'Electricity Usage (M)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Electricity Production (T)',
      field: 'Electricity Production (T)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Coal (% of EP)',
      field: 'Coal %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Water (% of EP)',
      field: 'Water %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Gas (% of EP)',
      field: 'Gas %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Nuclear (% of EP)',
      field: 'Nuclear %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Oil (% of EP)',
      field: 'Oil %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Renewable (% of EP)',
      field: 'Renewable %',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Roads Density',
      field: 'Roads Density',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Air Passengers',
      field: 'Air Passengers',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Motor Vehicles',
      field: 'Motor Vehicles',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Hospital Beds',
      field: 'Hospital Beds',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Mobile Phones',
      field: 'Mobile Phones',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Armed Forces (% labor force)',
      field: 'Armed Forces (% labor force)',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Armed Forces Total',
      field: 'Armed Forces Total',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });

    return schema;
  }
}
