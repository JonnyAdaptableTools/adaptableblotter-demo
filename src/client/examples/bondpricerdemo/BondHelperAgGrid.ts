export class BondHelperAgGrid {
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

  public getBondPricerSchema(): any[] {
    var schema = [];
    schema.push({
      headerName: 'Isin',
      field: 'Isin',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Issuer',
      field: 'IssuerTicker',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });

    schema.push({
      headerName: 'Sector',
      field: 'Sector',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Price',
      field: 'Price',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellRenderer: this.decimalPlaceRendereragGrid(2, 4),
    });
    schema.push({
      headerName: 'B/O Spread',
      field: 'BidOfferSpread',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Bid',
      field: 'Bid',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellRenderer: this.decimalPlaceRendereragGrid(2, 4),
    });
    schema.push({
      headerName: 'Ask',
      field: 'Ask',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
      cellRenderer: this.decimalPlaceRendereragGrid(2, 4),
    });
    schema.push({
      headerName: 'Rating',
      field: 'Rating',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });

    schema.push({
      headerName: 'Instrument',
      field: 'Instrument',
      editable: true,
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Coupon',
      field: 'Coupon',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });

    schema.push({
      headerName: 'Maturity Date',
      field: 'MaturityDate',
      editable: true,
      cellEditorParams: { useFormatter: true },
      valueParser: this.dateParseragGrid,
      valueFormatter: this.shortDateFormatteragGrid,
      filter: true,
      sortable: true,
      type: 'abColDefDate',
    });
    schema.push({
      headerName: 'Currency',
      field: 'Currency',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Tier',
      field: 'Tier',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Depth',
      field: 'Depth',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Spread',
      field: 'Spread',
      cellClass: 'number-cell',
      editable: true,
      filter: true,
      sortable: true,
      type: 'abColDefNumber',
    });

    schema.push({
      headerName: 'Country',
      field: 'Country',
      filter: true,
      sortable: true,
      enableRowGroup: true,
      type: 'abColDefString',
    });
    return schema;
  }
}
