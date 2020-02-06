export class CFGHelperAgGrid {
  private numberFormatter = (params: any) => {
    return this.formatNumber(params.value);
  };
  private formatNumber(number: any) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

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

  private decimalPlaceRendereragGrid = (minDigits: number, maxDigits: number) =>
    function(params: any) {
      if (params.value) {
        var decimalPlaceFormatter = new Intl.NumberFormat('en-GB', {
          minimumFractionDigits: minDigits,
          maximumFractionDigits: maxDigits,
        });
        return decimalPlaceFormatter.format(params.value);
      }
    };

  public getCFGDataSchema(): any[] {
    var schema = [];
    schema.push({
      headerName: 'Order ID',
      field: 'Order ID',
      editable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Account Code',
      field: 'Account Code',
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Account Name',
      field: 'Account Name',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Side',
      field: 'Side',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Amount',
      field: 'Amount',
      cellClass: 'number-cell',
      editable: true,

      type: 'abColDefNumber',
      valueFormatter: this.numberFormatter,
    });
    schema.push({
      headerName: 'Ticker',
      field: 'Ticker',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Security Name',
      field: 'Security Name',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'USD Principal',
      field: 'USD Principal',
      type: 'abColDefNumber',
      cellClass: 'number-cell',
      cellRenderer: this.currencyRendereragGrid,
    });
    schema.push({
      headerName: 'Executed Shares',
      field: 'Executed Shares',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
      valueFormatter: this.numberFormatter,
    });
    schema.push({
      headerName: 'Average Price',
      field: 'Average Price',
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Leaves',
      field: 'Leaves',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
      valueFormatter: this.numberFormatter,
    });
    schema.push({
      headerName: 'Exchange Code',
      field: 'Exchange Code',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Exchange Name',
      field: 'Exchange Name',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Region',
      field: 'Region',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Order Type',
      field: 'Order Type',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Limit Price',
      field: 'Limit Price',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Time In Force',
      field: 'Time In Force',
      editable: true,
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Expiry Date',
      field: 'Expiry Date',

      type: 'abColDefDate',
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
    });
    schema.push({
      headerName: 'Stop Price',
      field: 'Stop Price',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Locate Status',
      field: 'Locate Status',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'GTC Total Target Shares',
      field: 'GTC Total Target Shares',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'GTC Total Executed Shares',
      field: 'GTC Total Executed Shares',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Trader ID',
      field: 'Trader ID',
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Trader Name',
      field: 'Trader Name',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Last Price Local',
      field: 'Last Price Local',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Last Price USD',
      field: 'Last Price USD',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Directed Order',
      field: 'Directed Order',
      type: 'abColDefBoolean',
      editable: true,
    });
    schema.push({
      headerName: 'Benchmark',
      field: 'Benchmark',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Clearing Method',
      field: 'Clearing Method',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Trade Status',
      field: 'Trade Status',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Cancel Status',
      field: 'Cancel Status',

      type: 'abColDefBoolean',
    });
    schema.push({
      headerName: 'Cross Trade',
      field: 'Cross Trade',
      editable: true,
      type: 'abColDefBoolean',
    });
    schema.push({
      headerName: 'Client Trader',
      field: 'Client Trader',
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Client Notes',
      field: 'Client Notes',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'TCA Notes',
      field: 'TCA Notes',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });

    schema.push({
      headerName: 'TCA Exclude from LiquidMetrix',
      field: 'TCA Exclude from LiquidMetrix',
      type: 'abColDefBoolean',
      editable: true,
    });

    schema.push({
      headerName: 'TCA Include Premarket',
      field: 'TCA Include Premarket',
      type: 'abColDefBoolean',
      editable: true,
    });
    schema.push({
      headerName: 'Date Created',
      field: 'Date Created',

      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'USD Commission',
      field: 'USD Commission',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Local Commission',
      field: 'Local Commission',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Currency',
      field: 'Currency',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Spot FX Rate',
      field: 'Spot FX Rate',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Client Comm Rate',
      field: 'Client Comm Rate',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Client Comm Type',
      field: 'Client Comm Type',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Research Credit Rate',
      field: 'Research Credit Rate',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Broker Code',
      field: 'Broker Code',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Broker Comm Rate',
      field: 'Broker Comm Rate',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Broker Comm Type',
      field: 'Broker Comm Type',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Verified By',
      field: 'Verified By',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Order Source',
      field: 'Order Source',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'High',
      field: 'High',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Low',
      field: 'Low',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'VWAP',
      field: 'VWAP',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Arrival',
      field: 'Arrival',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Closing Price',
      field: 'Closing Price',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Portfolio',
      field: 'Portfolio',
      type: 'abColDefString',
      enableRowGroup: true,
      editable: true,
    });
    schema.push({
      headerName: 'Execution Reason Code',
      field: 'Execution Reason Code',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Reason for Accepting Max USD Principal',
      field: 'Reason for Accepting Max USD Principal',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Trade Date',
      field: 'Trade Date',

      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Settle Date',
      field: 'Settle Date',

      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Archive Flag',
      field: 'Archive Flag',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Order Status',
      field: 'Order Status',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Original Order ID',
      field: 'Original Order ID',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'FIX Acceptor ClOrdId',
      field: 'FIX Acceptor ClOrdId',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Broadcort File Sent',
      field: 'Broadcort File Sent',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Broadcort File',
      field: 'Broadcort File',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'FCA2 Sent File',
      field: 'FCA2 Sent File',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'FCA2 File',
      field: 'FCA2 File',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Client LEI',
      field: 'Client LEI',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'ETC Status',
      field: 'ETC Status',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Settle Avg Price',
      field: 'Settle Avg Price',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Settle Currency',
      field: 'Settle Currency',

      type: 'abColDefString',
      enableRowGroup: true,
    });

    schema.push({
      headerName: 'Settle FX Rate',
      field: 'Settle FX Rate',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Settle FX Type',
      field: 'Settle FX Type',

      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Prince Decimal Places',
      field: 'Prince Decimal Places',

      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Money Decimal Places',
      field: 'Money Decimal Places',
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Done for Day Flag',
      field: 'Done for Day Flag',
      type: 'abColDefString',
      editable: true,
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Settle Method Code',
      field: 'Settle Method Code',
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Clearing Fee',
      field: 'Clearing Fee',
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Clearing Fee Currency',
      field: 'Clearing Fee Currency',
      type: 'abColDefString',
      enableRowGroup: true,
    });
    schema.push({
      headerName: 'Tax Stamp Meth',
      field: 'Tax Stamp Meth',
      type: 'abColDefString',
      enableRowGroup: true,
    });

    return schema;
  }
}
