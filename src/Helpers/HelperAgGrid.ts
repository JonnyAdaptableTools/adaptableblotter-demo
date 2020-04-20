import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { LicenseManager } from '@ag-grid-enterprise/all-modules';
import { ITrade } from './Trade';
import {
  ColDef,
  GridOptions,
  Module,
  GridReadyEvent,
} from '@ag-grid-community/all-modules';

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

  private timeFormatter = (params: any) => {
    return params.value ? params.value.toLocaleTimeString() : null;
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

  public getGridOptions(
    columndefs: any,
    data: any,
    closeSideBar: boolean = true
  ): GridOptions & { modules?: Module[] } {
    const gridOptions: GridOptions = {
      enableRangeSelection: true,
      floatingFilter: false,
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
      columnDefs: columndefs,
      rowData: data,
      onGridReady: function(gridReady: GridReadyEvent) {
        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
        //visible and won't be autosized
        if (!gridReady.columnApi) {
          throw 'NO COLUMN API FOUND!';
          return;
        }
        gridReady.columnApi!.autoSizeAllColumns();
        setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

        if (closeSideBar) {
          gridReady.api!.closeToolPanel();
        }
        gridReady.api!.addEventListener('newColumnsLoaded', function() {
          gridReady.columnApi!.autoSizeAllColumns();
        });
      },
    };
    return gridOptions;
  }

  public getAdaptableOptions(
    gridOptions: GridOptions,
    pk: string,
    adaptableId: string,
    config: any
  ): AdaptableOptions {
    let adaptableOptions: AdaptableOptions = {
      primaryKey: pk,
      vendorGrid: gridOptions,
      userName: 'Demo User',
      adaptableId: adaptableId,
      predefinedConfig: config,
      layoutOptions: {
        includeVendorStateInLayouts: true,
        autoSaveLayouts: true,
      },
    };
    return adaptableOptions;
  }

  private getAadaptableOptionsWithDivNames(
    gridOptions: GridOptions,
    pk: string,
    adaptableId: string,
    config: any,
    gridName: string,
    abName: string
  ): AdaptableOptions {
    let adaptableOptions: AdaptableOptions = {
      primaryKey: pk,
      vendorGrid: gridOptions,
      userName: 'Demo User',
      adaptableId: adaptableId,

      predefinedConfig: config,
      layoutOptions: {
        includeVendorStateInLayouts: true,
        autoSaveLayouts: true,
      },
      containerOptions: {
        vendorContainer: gridName,
        adaptableContainer: abName,
      },
      chartOptions: {
        displayOnStartUp: true,
        showModal: false,
        pieChartMaxItems: 50,
      },
    };
    return adaptableOptions;
  }

  public getBasicNorthwindColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getContactDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    schema.push(this.getShipCountryDef());
    schema.push(this.getShippedDateDef());

    return schema;
  }

  public getFullNorthwindColumnSchema(): any[] {
    var returnSchema = this.getBasicNorthwindColumnSchema();
    returnSchema.splice(5, 0, this.getLastUpdatedTimeDef());
    returnSchema.splice(8, 0, this.getIsValidDef());
    return returnSchema;
  }

  public getShortNorthwindColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getContactDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    return schema;
  }

  public getConditionalstyleNorthwindColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getContactDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    schema.push(this.getShipCountryDef());
    schema.push(this.getShippedDateDef());
    return schema;
  }

  public getPercentBarNorthwindColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getContactDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    schema.push(this.getShipCountryDef());
    schema.push(this.getShippedDateDef());
    return schema;
  }

  public getFlashingCellColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getContactDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    schema.push(this.getShipCountryDef());
    schema.push(this.getShippedDateDef());
    return schema;
  }

  public getFilteredColumnSchema(): any[] {
    var schema = [];
    schema.push(this.getOrderColumnDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getShipCountryDef());
    schema.push(this.getShippedDateDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());

    return schema;
  }

  public getRowSelectionNorthwindColumnSchema(): any[] {
    var schema = [];

    schema.push(this.getCustRefDef());
    schema.push(this.getContactDef());

    schema.push(this.getOrderDateDef());
    let orderColDef = this.getOrderColumnDef();
    orderColDef.checkboxSelection = true;
    schema.push(orderColDef);
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    let employeeColDef = this.getEmployeeDef();
    employeeColDef.rowGroupIndex = 0;
    schema.push(employeeColDef);
    let shipCountryColDef = this.getShipCountryDef();
    shipCountryColDef.rowGroupIndex = 1;
    schema.push(shipCountryColDef);
    return schema;
  }

  public getRowGroupingNorthwindColumnSchema(): any[] {
    var schema = [];
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

    schema.push(this.getOrderColumnDef());
    schema.push(this.getCustRefDef());
    schema.push(this.getInvoicedDef());
    schema.push(this.getOrderCostDef());
    schema.push(this.getPackageCostDef());
    schema.push(this.getItemCostDef());
    schema.push(this.getItemCountDef());
    schema.push(this.getChangeLastOrderDef());
    schema.push(this.getEmployeeDef());
    schema.push(this.getContactDef());
    schema.push(this.getOrderDateDef());
    schema.push(this.getCompanyDef());
    schema.push(this.getShipViaDef());
    schema.push(this.getFreightDef());
    schema.push(this.getShipNameDef());
    schema.push(this.getShippedDateDef());
    return schema;
  }

  public getColumnGroupingNorthwindColumnSchema(): any[] {
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
          //  aggFunc: 'sum',
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
          //   aggFunc: 'sum',
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

  public getFTSECloseSchema(): any[] {
    var schema = [];
    schema.push({
      headerName: 'Close Date',
      field: 'CloseDate',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefDate',
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
    });
    schema.push({
      headerName: 'Open',
      field: 'Open',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'High',
      field: 'High',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Low',
      field: 'Low',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Close',
      field: 'Close',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'High/Low Diff',
      field: 'HighLowDifference',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
      valueFormatter: this.fourDecimalPlaceFormatter,
    });
    schema.push({
      headerName: 'Day Spread',
      field: 'DaySpread',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
      valueFormatter: this.fourDecimalPlaceFormatter,
    });
    schema.push({
      headerName: 'Volume',
      field: 'Volume',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Adjusted Close',
      field: 'AdjustedClose',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
      valueFormatter: this.fourDecimalPlaceFormatter,
    });
    schema.push({
      headerName: 'Percent Change',
      field: 'PercentChange',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefNumber',
      valueFormatter: this.fourDecimalPlaceFormatter,
    });

    return schema;
  }

  private getOrderColumnDef(): ColDef {
    return {
      headerName: 'Order Id',
      field: 'OrderId',
      editable: true,
      cellClass: 'number-cell',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    };
  }
  private getCustRefDef(): ColDef {
    return {
      headerName: 'Cust. Ref',
      field: 'CustomerReference',
      editable: true,
      filter: true,
      sortable: true,
      resizable: true,
      type: 'abColDefString',
    };
  }
  private getContactDef(): ColDef {
    return {
      headerName: 'Contact',
      field: 'ContactName',
      filter: true,
      editable: true,
      sortable: true,
      enableRowGroup: true,
      enablePivot: true,
      type: 'abColDefString',
    };
  }
  private getEmployeeDef(): ColDef {
    return {
      headerName: 'Employee',
      field: 'Employee',
      filter: 'agSetColumnFilter',
      editable: true,
      sortable: true,
      enableRowGroup: true,
      enablePivot: true,
      type: 'abColDefString',
    };
  }
  private getOrderDateDef(): ColDef {
    return ({
      headerName: 'Order Date',
      field: 'OrderDate',
      editable: true,
      enableRowGroup: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    } as any) as ColDef;
  }
  private getInvoicedDef(): ColDef {
    return ({
      headerName: 'Invoiced',
      field: 'InvoicedCost',
      cellClass: 'number-cell',
      aggFunc: 'sum',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      sortable: true,
      enableValue: true,
      type: 'abColDefNumber',
    } as any) as ColDef;
  }
  private getOrderCostDef(): ColDef {
    return ({
      headerName: 'Order Cost',
      field: 'OrderCost',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      enableValue: true,
      sortable: true,
      type: 'abColDefNumber',
    } as any) as ColDef;
  }
  private getPackageCostDef(): any {
    return {
      headerName: 'Package Cost',
      field: 'PackageCost',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    };
  }
  private getItemCostDef(): any {
    return {
      headerName: 'Item Cost',
      field: 'ItemCost',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      enableValue: true,
      aggFunc: 'avg',
      cellRenderer: this.currencyRendereragGrid,
      type: 'abColDefNumber',
    };
  }
  private getItemCountDef(): any {
    return {
      headerName: 'Item Count',
      field: 'ItemCount',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      enableValue: true,
      aggFunc: 'sum',
      type: 'abColDefNumber',
    };
  }
  private getCompanyDef(): any {
    return {
      headerName: 'Company',
      field: 'CompanyName',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    };
  }
  private getShipViaDef(): any {
    return {
      headerName: 'Ship Via',
      field: 'ShipVia',
      filter: 'text',
      editable: true,
      sortable: true,
      enableRowGroup: true,
      enablePivot: true,
      type: 'abColDefString',
    };
  }
  private getFreightDef(): any {
    return {
      headerName: 'Freight',
      field: 'Freight',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
      editable: true,
      sortable: true,
      filter: 'text',
      type: 'abColDefNumber',
    };
  }
  private getShipNameDef(): any {
    return {
      headerName: 'Ship Name',
      field: 'ShipName',
      columnGroupShow: 'open',
      editable: true,
      sortable: true,
      type: 'abColDefString',
      filter: 'text',
    };
  }
  private getChangeLastOrderDef(): any {
    return {
      headerName: 'Order Chg.',
      field: 'ChangeLastOrder',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    };
  }
  private getShipCountryDef(): any {
    return {
      headerName: 'Ship Country',
      field: 'ShipCountry',
      filter: 'agSetColumnFilter',
      editable: true,
      sortable: true,
      enablePivot: true,
      enableRowGroup: true,
      type: 'abColDefString',
    };
  }
  private getShippedDateDef(): any {
    return {
      headerName: 'Shipped Date',
      field: 'ShippedDate',
      editable: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      hide: true,
      sortable: true,
      type: 'abColDefDate',
    };
  }
  private getLastUpdatedTimeDef(): any {
    return {
      headerName: 'Last Updated',
      field: 'LastUpdatedTime',
      editable: false,
      valueFormatter: this.timeFormatter,
      filter: true,
      sortable: true,
      cellStyle: { ' text-align': 'right' },
      type: 'abColDefDate',
    };
  }
  private getIsValidDef(): any {
    return {
      headerName: 'Is Valid',
      field: 'IsValid',
      editable: false,
      filter: true,
      cellClass: 'bool-cell',
      cellRenderer: (params: any) =>
        `<input disabled type='checkbox' ${params.value ? 'checked' : ''} />`,
      type: 'abColDefBoolean',
    };
  }

  private getBasicTradeSchema(): ColDef[] {
    var schema: any[] = [];
    schema.push({
      headerName: 'Trade Id',
      field: 'tradeId',
      editable: true,
      type: 'abColDefNumber',
      sortable: true,
      filter: true,
    });
    schema.push({
      headerName: 'Notional',
      field: 'notional',
      enableValue: true,
      editable: true,
      // valueFormatter: notionalFormatter,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
      filter: true,
      cellRenderer: this.currencyRendereragGrid,
      sortable: true,
      aggFunc: 'sum',
    });
    schema.push({
      headerName: 'Counterparty',
      field: 'counterparty',
      editable: true,
      enableRowGroup: true,
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });

    schema.push({
      headerName: 'Change',
      field: 'changeOnYear',
      filter: true,
      editable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Currency',
      field: 'currency',
      editable: true,
      enableRowGroup: true,
      sortable: true,
      filter: 'agTextColumnFilter',
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'B/O Spread',
      field: 'bidOfferSpread',
      columnGroupShow: 'open',
      enableValue: true,
      editable: true,
      filter: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Price',
      field: 'price',
      columnGroupShow: 'open',
      editable: true,
      enableValue: true,
      cellClass: 'number-cell',
      enableRowGroup: true,
      filter: 'agNumberColumnFilter',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Country',
      field: 'country',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Ask',
      field: 'ask',
      columnGroupShow: 'closed',
      filter: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Bid',
      field: 'bid',
      columnGroupShow: 'closed',
      filter: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });

    schema.push({
      headerName: 'Bbg Ask',
      field: 'bloombergAsk',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Bbg Bid',
      field: 'bloombergBid',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Moodys',
      field: 'moodysRating',
      editable: true,
      filter: 'text',
      type: 'abColDefString',
    });

    return schema;
  }

  public getTradeSchema(): ColDef[] {
    var schema: any[] = this.getBasicTradeSchema();
    schema.push({
      headerName: 'Trade Date',
      field: 'tradeDate',
      editable: true,
      cellEditorParams: {
        useFormatter: true,
      },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'SandP',
      field: 'sandpRating',
      editable: true,
      sortable: true,
      filter: 'text',
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Settlement Date',
      field: 'settlementDate',
      editable: true,
      cellEditorParams: {
        useFormatter: true,
      },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Last Updated By',
      field: 'lastUpdatedBy',
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Last Updated',
      field: 'lastUpdated',
      editable: true,
      cellEditorParams: {
        useFormatter: true,
      },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Pct Change',
      field: 'percentChange',
      editable: true,
      filter: 'text',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Desk No.',
      field: 'deskId',
      editable: true,
      type: 'abColDefNumber',
      enableRowGroup: true,
    });
    return schema;
  }

  public getTradeSchemaWithSparkline(): ColDef[] {
    let schema = this.getTradeSchema();
    let historyArray = {
      headerName: 'History',
      field: 'history',
      editable: false,
      type: 'abColDefNumberArray',
      resizable: true,
    };
    schema.splice(3, 0, historyArray);
    return schema;
  }

  public getPriceTradeSchema(): ColDef[] {
    var schema: any[] = this.getBasicTradeSchema();

    schema.push({
      headerName: 'Markit Ask',
      field: 'markitAsk',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Markit Bid',
      field: 'markitBid',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });

    schema.push({
      headerName: 'Indicative Ask',
      field: 'indicativeAsk',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Indicative Bid',
      field: 'indicativeBid',
      columnGroupShow: 'closed',
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });

    return schema;
  }

  public createTrade(
    i: number,
    currency?: string,
    tradeSeed: number = 1000
  ): ITrade {
    var price = this.getMeaningfulDouble();
    var bidOfferSpread = this.getRandomItem(this.getBidOfferSpreads());
    var ask = this.roundTo4Dp(price + bidOfferSpread / 2);
    var bid = this.roundTo4Dp(price - bidOfferSpread / 2);
    var tradeDate = this.generateRandomDateAndTime(-tradeSeed, tradeSeed);
    var moodyRating = this.getRandomItem(this.getMoodysRatings());
    let tradeCurrency = currency
      ? currency
      : this.getRandomItem(this.getCurrencies());
    var trade: ITrade = {
      tradeId: i,
      history: [...new Array(this.generateRandomInt(5, 20))].map(_ =>
        this.generateRandomInt(1, 30)
      ),
      notional: this.getRandomItem(this.getNotionals()),
      deskId: this.generateRandomInt(0, 250),
      counterparty: this.getRandomItem(this.getCounterparties()),
      currency: tradeCurrency,
      country: this.getRandomItem(this.getCountries()),
      changeOnYear: this.getMeaningfulPositiveNegativeDouble(),
      price: price,
      bid: bid,
      ask: ask,
      bidOfferSpread: bidOfferSpread,
      isLive: this.generateRandomBool(),
      moodysRating: moodyRating,
      fitchRating: this.getRatingFromMoodyRating(moodyRating),
      sandpRating: this.getRatingFromMoodyRating(moodyRating),
      tradeDate: tradeDate,
      settlementDate: this.addDays(tradeDate, 3),
      bloombergAsk: this.roundTo4Dp(ask + 0.01),
      bloombergBid: this.roundTo4Dp(bid - 0.01),
      indicativeAsk: this.roundTo4Dp(ask + 0.02),
      indicativeBid: this.roundTo4Dp(bid - 0.02),
      markitAsk: this.roundTo4Dp(ask + 0.03),
      markitBid: this.roundTo4Dp(bid - 0.03),
      percentChange: this.generateRandomNullableDouble() as number,
      lastUpdated: this.generateRandomDateAndTime(-7, 0),
      lastUpdatedBy: this.getRandomItem(this.getNames()),
    };
    return trade;
  }

  getDollarTrades(count: number): ITrade[] {
    let trades: ITrade[] = [];
    for (let i = 1; i <= count; i++) {
      trades.push(this.createTrade(i, 'USD'));
    }
    return trades;
  }
  getGBPTrades(count: number): ITrade[] {
    let trades: ITrade[] = [];
    for (let i = 1; i <= count; i++) {
      trades.push(this.createTrade(i, 'GBP'));
    }
    return trades;
  }
  getEuroTrades(count: number): ITrade[] {
    let trades: ITrade[] = [];
    for (let i = 1; i <= count; i++) {
      trades.push(this.createTrade(i, 'EUR'));
    }
    return trades;
  }
  getThisYearTrades(count: number): ITrade[] {
    let trades: ITrade[] = [];
    for (let i = 1; i <= count; i++) {
      trades.push(this.createTrade(i, '', 50));
    }
    return trades;
  }
  getTrades(count: number): ITrade[] {
    let trades: ITrade[] = [];
    for (let i = 1; i <= count; i++) {
      trades.push(this.createTrade(i));
    }
    return trades;
  }

  protected generateRandomNullableString(
    myString: string | null
  ): string | null {
    var randomInt = this.generateRandomInt(1, 10);
    if (randomInt > 7) {
      myString = null;
    }
    return myString;
  }

  public getMeaningfulDouble(): number {
    return this.roundTo4Dp(
      this.generateRandomInt(10, 150) + this.generateRandomDouble()
    );
  }

  protected getMeaningfulPositiveNegativeDouble(): number {
    return this.roundTo4Dp(
      this.generateRandomInt(-150, 150) + this.generateRandomDouble()
    );
  }

  protected roundTo4Dp(val: number): number {
    return Math.round(val * 10000) / 10000;
  }

  protected getMeaningfulDoubleInRange(min: number, max: number): number {
    return this.roundTo4Dp(
      this.generateRandomInt(min, max) + this.generateRandomDouble()
    );
  }

  protected getMeaningfulDoubleTest(): number {
    return (
      Math.round((100 + this.generateRandomDouble()) * 10) / 10 +
      this.generateRandomDouble() / 1000
    );
  }

  protected generateRandomDateAndTime(minDays: number, maxDays: number): Date {
    var currentDate = new Date(); // Fix it
    var start = this.addDays(currentDate, minDays);
    var end = this.addDays(currentDate, maxDays);
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  protected addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  protected generateRandomDate(minDays: number, maxDays: number): Date {
    var date = this.generateRandomDateAndTime(minDays, maxDays);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    //return toDateTimeString(date);
  }

  protected toDateTimeString(date: Date) {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleTimeString('en-us', options);
  }

  protected generateCounterparty(): string {
    var counterparties = this.getCounterparties();
    return (counterparties[
      this.generateRandomInt(0, counterparties.length - 1)
    ] as any) as string;
  }

  protected generateCurrency(): string {
    var currencies = this.getCurrencies();
    return currencies[this.generateRandomInt(0, currencies.length - 1)];
  }

  public getRandomItem(ary: any[], max?: number): any {
    if (max) {
      return ary[this.generateRandomInt(0, Math.min(max, ary.length - 1))];
    } else {
      return ary[this.generateRandomInt(0, ary.length - 1)];
    }
  }

  public getNotionals(): number[] {
    var notionals = [1000000, 2000000, 5000000, 7500000, 10000000];
    return notionals;
  }
  protected getBidOfferSpreads(): number[] {
    var counterparties = [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5];
    return counterparties;
  }
  protected getCounterparties(): (string | null | undefined)[] {
    var counterparties = [
      'Goldman Sachs',
      'Societe Generale',
      'Bank of America',
      'RBS',
      'Barcap',
      'JP Morgan',
      'Morgan Stanley',
      'BNP',
      'Lloyds TSB',
      'MUFJ',
      'Rabobank',
      'Deutsche Bank',
      'Credit Suisse',
      'Nomura',
      null,
      undefined,
    ];
    return counterparties;
  }

  protected getCurrencies(): string[] {
    var currencies = ['EUR', 'USD', 'GBP', 'CHF', 'CAD', 'AUD', 'ZAR'];
    return currencies;
  }

  protected getCountries(): string[] {
    var countries = [
      'Argentina',
      'Australia',
      'Belgium',
      'Brazil',
      'Canada',
      'China',
      'Denmark',
      'Egypt',
      'France',
      'Germany',
      'Holland',
      'Hungary',
      'India',
      'Ireland',
      'Italy',
      'Israel',
      'Indonesia',
      'Japan',
      //  'Kenya',
      'Luxembourg',
      //   'Portugal',
      //    'Qatar',
      'Russia',
      'Spain',
      //      'Thailand',
    ];
    return countries;
  }

  protected getMoodysRatings(): string[] {
    var moodysRatings = [
      'Aaa',
      'Aa1',
      'Aa2',
      'Aa3',
      'A1',
      'A2',
      'A3',
      'Baa1',
      'Baa2',
      'Baa3',
      'Ba1',
      'Ba2',
      'Ba3',
      'B1',
      'B2',
      'B3',
      'Caa',
      'Ca',
      'C',
      'WR',
      'NR',
    ];
    return moodysRatings;
  }

  // for s&P and Fitch we got one of 3 ratings based off the moodys rating
  protected getRatingFromMoodyRating(moodysRating: string): string {
    switch (moodysRating) {
      case 'Aaa':
        return this.getRandomItem(['AAA', 'AA+']);
      case 'Aa1':
        return this.getRandomItem(['AAA', 'AA+', 'AA']);
      case 'Aa2':
        return this.getRandomItem(['AA+', 'AA', 'AA-']);
      case 'Aa3':
        return this.getRandomItem(['AA', 'AA-', 'A+']);
      case 'A1':
        return this.getRandomItem(['AA-', 'A+', 'A']);
      case 'A2':
        return this.getRandomItem(['A+', 'A', 'A-']);
      case 'A3':
        return this.getRandomItem(['A', 'A-', 'BBB+']);
      case 'Baa1':
        return this.getRandomItem(['A-', 'BBB+', 'BBB']);
      case 'Baa2':
        return this.getRandomItem(['BBB+', 'BBB', 'BBB-']);
      case 'Baa3':
        return this.getRandomItem(['BBB', 'BBB-', 'BB+']);
      case 'Ba1':
        return this.getRandomItem(['BBB-', 'BB+', 'BB']);
      case 'Ba2':
        return this.getRandomItem(['BB+', 'BB', 'BB-']);
      case 'Ba3':
        return this.getRandomItem(['BB', 'BB-', 'B+']);
      case 'B1':
        return this.getRandomItem(['BB-', 'B+', 'B']);
      case 'B2':
        return this.getRandomItem(['B+', 'B', 'B-']);
      case 'B3':
        return this.getRandomItem(['B', 'B-', 'CCC']);
      case 'Caa':
        return this.getRandomItem(['B-', 'CCC', 'CC']);
      case 'Ca':
        return this.getRandomItem(['CCC', 'CC']);
      case 'C':
        return this.getRandomItem(['CC', 'D']);
      case 'WR':
        return 'SD';
      case 'NR':
        return 'NR';
    }
    return '';
  }

  protected getNames(): string[] {
    var names: string[] = [
      'Stacee Dreiling',
      'Cecil Staab',
      'Sheba Dowdy',
      'Loralee Stalker',
      'Sanjuana Kimsey',
      'Shante Hey',
      'Magen Willison',
      'Casimira Tabler',
      'Annemarie Rybicki',
      'Granville Westfall',
      'Colby Troupe',
      'Wei Frith',
      'Sarai Pilgrim',
      'Yael Rich',
      'Hester Bluhm',
      'Season Landreth',
      'Britany Saffell',
      'Kelley Babb',
      'Bradley Chumley',
      'Louella Spiker',
    ];
    return names;
  }

  // If minValue is 1 and maxValue is 2, then Math.random()*(maxValue-minValue+1)
  // generates a value between 0 and 2 =[0, 2), adding 1 makes this
  // [1, 3) and Math.floor gives 1 or 2.
  public generateRandomInt(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  protected generateRandomBool(): boolean {
    var amount = this.generateRandomInt(0, 1);
    return amount === 0;
  }

  // [0, 1)
  protected generateRandomDouble(): number {
    return Math.random();
  }

  protected generateRandomNullableDouble(): number | null {
    var myValue: number | null = this.generateRandomDouble();
    var randomInt = this.generateRandomInt(1, 10);
    if (randomInt > 7) {
      myValue = null;
    }

    if (randomInt % 2 === 0 && myValue != null) {
      myValue = myValue * -1;
    }

    return myValue;
  }

  private fourDecimalPlaceFormatter = (params: any) => {
    return params.value ? this.roundTo4Dp(params.value) : null;
  };

  public convertExcelData(rowData: any) {
    for (let i = 0; i < rowData.length; i++) {
      let row = rowData[i];
      if (row) {
        if (row.OrderDate) {
          row.OrderDate = new Date(row.OrderDate);
        }
        if (row.ShippedDate) {
          row.ShippedDate = new Date(row.ShippedDate);
        }
        if (row.LastUpdatedTime) {
          row.LastUpdatedTime = new Date(row.LastUpdatedTime);
        }
        if (row.IsValid) {
          row.IsValid = row.IsValid === 'TRUE' ? true : false;
        }
      }
    }
    return rowData;
  }

  public convertFTSEData(rowData: any) {
    for (let i = 0; i < rowData.length; i++) {
      let row = rowData[i];
      if (row) {
        if (row.CloseDate) {
          let myDate: Date = new Date(row.CloseDate);
          // row.CloseDate = new Date(row.CloseDate);
          myDate.setHours(0, 0, 0, 0);
          row.CloseDate = myDate;
        }
      }
    }
    return rowData;
  }

  public updateItemCount(rowData: any) {
    for (let i = 0; i < rowData.length; i++) {
      let row = rowData[i];
      if (row) {
        if (row.ItemCount) {
          let increment: Number = this.generateRandomInt(1, 50) + 100;
          row.ItemCount = row.ItemCount + increment;
        }
      }
    }
    return rowData;
  }
  // private twoDecimalPlaceFormatter = (params: any) => {
  //   return params.value ? this.roundTo2Dp(params.value) : null;
  // };
}
