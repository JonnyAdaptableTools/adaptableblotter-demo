export class CFGHelperAgGrid {
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
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Account Code',
      field: 'Account Code',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Account Name',
      field: 'Account Name',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Side',
      field: 'Side',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Amount',
      field: 'Amount',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellRenderer: this.currencyRendereragGrid,
    });
    schema.push({
      headerName: 'Ticker',
      field: 'Ticker',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Security Name',
      field: 'Security Name',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'USD Principal',
      field: 'USD Principal',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Executed Shares',
      field: 'Executed Shares',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Average Price',
      field: 'Average Price',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Leaves',
      field: 'Leaves',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Exchange Code',
      field: 'Exchange Code',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Exchange Name',
      field: 'Exchange Name',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Region',
      field: 'Region',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Order Type',
      field: 'Order Type',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Limit Price',
      field: 'Limit Price',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Time In Force',
      field: 'Time In Force',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Expiry Date',
      field: 'Expiry Date',
      filter: true,
      sortable: true,
      type: 'abColDefDate',
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
    });
    schema.push({
      headerName: 'Stop Price',
      field: 'Stop Price',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Locate Status',
      field: 'Locate Status',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'GTC Total Target Shares',
      field: 'GTC Total Target Shares',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'GTC Total Executed Shares',
      field: 'GTC Total Executed Shares',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Trader ID',
      field: 'Trader ID',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Trader Name',
      field: 'Trader Name',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Last Price Local',
      field: 'Last Price Local',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Last Price USD',
      field: 'Last Price USD',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Directed Order',
      field: 'Directed Order',
      filter: true,
      sortable: true,
      type: 'abColDefBoolean',
    });
    schema.push({
      headerName: 'Benchmark',
      field: 'Benchmark',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Clearing Method',
      field: 'Clearing Method',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Trade Status',
      field: 'Trade Status',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Cancel Status',
      field: 'Cancel Status',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Cross Trade',
      field: 'Cross Trade',
      filter: true,
      sortable: true,
      type: 'abColDefBoolean',
    });
    schema.push({
      headerName: 'Client Trader',
      field: 'Client Trader',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Client Notes',
      field: 'Client Notes',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'TCA Notes',
      field: 'TCA Notes',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });

    schema.push({
      headerName: 'TCA Exclude from LiquidMetrix',
      field: 'TCA Exclude from LiquidMetrix',
      filter: true,
      sortable: true,
      type: 'abColDefBoolean',
    });

    schema.push({
      headerName: 'TCA Include Premarket',
      field: 'TCA Include Premarket',
      filter: true,
      sortable: true,
      type: 'abColDefBoolean',
    });
    schema.push({
      headerName: 'Date Created',
      field: 'Date Created',
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'USD Commission',
      field: 'USD Commission',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Local Commission',
      field: 'Local Commission',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Currency',
      field: 'Currency',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Spot FX Rate',
      field: 'Spot FX Rate',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Client Comm Rate',
      field: 'Client Comm Rate',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Client Comm Type',
      field: 'Client Comm Type',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Research Credit Rate',
      field: 'Research Credit Rate',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Broker Code',
      field: 'Broker Code',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Broker Comm Rate',
      field: 'Broker Comm Rate',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Broker Comm Type',
      field: 'Broker Comm Type',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Verified By',
      field: 'Verified By',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Order Source',
      field: 'Order Source',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'High',
      field: 'High',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Low',
      field: 'Low',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'VWAP',
      field: 'VWAP',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Arrival',
      field: 'Arrival',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Closing Price',
      field: 'Closing Price',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Portfolio',
      field: 'Portfolio',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Execution Reason Code',
      field: 'Execution Reason Code',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Reason for Accepting Max USD Principal',
      field: 'Reason for Accepting Max USD Principal',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Trade Date',
      field: 'Trade Date',
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Settle Date',
      field: 'Settle Date',
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Archive Flag',
      field: 'Archive Flag',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Order Status',
      field: 'Order Status',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Original Order ID',
      field: 'Original Order ID',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'FIX Acceptor ClOrdId',
      field: 'FIX Acceptor ClOrdId',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Broadcort File Sent',
      field: 'Broadcort File Sent',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Broadcort File',
      field: 'Broadcort File',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'FCA2 Sent File',
      field: 'FCA2 Sent File',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'FCA2 File',
      field: 'FCA2 File',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Client LEI',
      field: 'Client LEI',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'ETC Status',
      field: 'ETC Status',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Settle Avg Price',
      field: 'Settle Avg Price',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Settle Currency',
      field: 'Settle Currency',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });

    schema.push({
      headerName: 'Settle FX Rate',
      field: 'Settle FX Rate',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Settle FX Type',
      field: 'Settle FX Type',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Prince Decimal Places',
      field: 'Prince Decimal Places',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Money Decimal Places',
      field: 'Money Decimal Places',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Done for Day Flag',
      field: 'Done for Day Flag',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Settle Method Code',
      field: 'Settle Method Code',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'EMAIL SENT',
      field: 'EMAIL SENT',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Clearing Fee',
      field: 'Clearing Fee',
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellClass: 'number-cell',
    });
    schema.push({
      headerName: 'Clearing Fee Currency',
      field: 'Clearing Fee Currency',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Tax Stamp Meth',
      field: 'Tax Stamp Meth',
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });

    return schema;
  }
}
