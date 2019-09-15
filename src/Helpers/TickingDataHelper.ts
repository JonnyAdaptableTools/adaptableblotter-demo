import { GridOptions, RowNode } from 'ag-grid-community';
import { ITrade } from './Trade';
import { HelperAgGrid } from './HelperAgGrid';

export class TickingDataHelper {
  public startTickingDataagGridOrders(
    gridOptions: any,
    tickingFrequency: number,
    includeItemCount: boolean = false
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      setInterval(() => {
        let rowNode: RowNode = gridOptions.api!.getRowNode(
          this.generateRandomInt(11074, 11142)
        );
        if (rowNode) {
          if (!includeItemCount) {
            let numberToAdd: number =
              this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;

            let columnName = 'ItemCost';
            let initialItemCost = gridOptions.api.getValue(columnName, rowNode);
            let newItemCost = this.roundTo4Dp(initialItemCost + numberToAdd);

            rowNode.setDataValue(columnName, newItemCost);

            let itemCount = gridOptions.api.getValue('ItemCount', rowNode);
            let newOrderCost = itemCount * newItemCost;
            rowNode.setDataValue('OrderCost', newOrderCost);

            let packageCost = gridOptions.api.getValue('PackageCost', rowNode);
            let newInvoicedCost = newOrderCost - packageCost;
            rowNode.setDataValue('InvoicedCost', newInvoicedCost);
            let incdec: number = this.generateRandomInt(1, 2) == 1 ? -1 : 1;
            let changeLastOrder = gridOptions.api.getValue(
              'ChangeLastOrder',
              rowNode
            );
            rowNode.setDataValue('ChangeLastOrder', incdec + changeLastOrder);
          } else {
            let numberToAdd: number = this.generateRandomInt(1, 10);
            let itemCount = gridOptions.api.getValue('ItemCount', rowNode);
            if (numberToAdd < 8) {
              rowNode.setDataValue('ItemCount', itemCount + 1);
            } else {
              rowNode.setDataValue('ItemCount', itemCount * 3);
            }
          }
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridTrade(
    gridOptions: any,
    tickingFrequency: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      setInterval(() => {
        let rowNode: RowNode = gridOptions.api!.getRowNode(
          this.generateRandomInt(1, 30)
        );
        if (rowNode) {
          const randomInt = this.generateRandomInt(1, 2);
          const numberToAdd: number = randomInt == 1 ? -0.5 : 0.5;
          const directionToAdd: number = randomInt == 1 ? -0.01 : 0.01;
          const columnName = 'price';
          const initialPrice = gridOptions.api!.getValue(columnName, rowNode);
          const newPrice = this.roundTo4Dp(initialPrice + numberToAdd);
          rowNode.setDataValue(columnName, newPrice);
          const bidOfferSpread = gridOptions.api!.getValue(
            'bidOfferSpread',
            rowNode
          );
          const ask = this.roundTo4Dp(newPrice + bidOfferSpread / 2);
          rowNode.setDataValue('ask', ask);
          const bid = this.roundTo4Dp(newPrice - bidOfferSpread / 2);
          rowNode.setDataValue('bid', bid);
          rowNode.setDataValue(
            'bloombergAsk',
            this.roundTo4Dp(ask + directionToAdd)
          );
          rowNode.setDataValue(
            'bloombergBid',
            this.roundTo4Dp(bid - directionToAdd)
          );
        }
      }, tickingFrequency);
    }
  }

  startTickingDataHypergrid(grid: any) {
    setInterval(() => {
      const numberToAdd: number =
        this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
      // pick a random trade in the first ten
      const trade = this.getRandomItem(grid.behavior.getData(), 20);
      // pick a random colum in the numeric col
      const columnName = 'price'; // this.getRandomItem(this._numericCols);
      const initialNewValue = trade[columnName];
      const newValue = this.roundTo4Dp(initialNewValue + numberToAdd);
      trade[columnName] = newValue;

      trade.ask = this.roundTo4Dp(trade.price - trade.bidOfferSpread / 2);
      trade.bid = this.roundTo4Dp(trade.price + trade.bidOfferSpread / 2);

      trade.bloombergAsk = this.roundTo4Dp(trade.ask + 0.01);
      trade.bloombergBid = this.roundTo4Dp(trade.bid - 0.01);
      // grid.behavior.reindex();
      grid.repaint();
    }, 1000);
  }

  startTickingDataagGridAddRow(
    gridOptions: GridOptions,
    rowData: any,
    tickingFrequency: number,
    maxNumber: number
  ) {
    if (
      gridOptions != null &&
      gridOptions.api != null &&
      gridOptions.api != undefined &&
      rowData != null
    ) {
      let rowCount: number = gridOptions.api!.getDisplayedRowCount();
      let newRowCount: number = rowCount + 1;
      const helperAgGrid = new HelperAgGrid();
      setInterval(() => {
        ++newRowCount;
        if (newRowCount < maxNumber) {
          const newRow = helperAgGrid.createTrade(newRowCount);
          if (newRow) {
            console.log('adding row with Id: ' + newRowCount);
            gridOptions.api!.updateRowData({ add: [newRow] });
          }
        }
      }, tickingFrequency);
    }
  }

  startTickingDataagGridDeleteRow(
    gridOptions: GridOptions,
    rowData: any,
    tickingFrequency: number,
    minNumber: number
  ) {
    if (
      gridOptions != null &&
      gridOptions.api != null &&
      gridOptions.api != undefined &&
      rowData != null
    ) {
      setInterval(() => {
        let rowCount: number = gridOptions.api!.getDisplayedRowCount();
        if (rowCount > minNumber) {
          const rowId: number = this.generateRandomInt(0, rowCount - 1);

          let rowNode = gridOptions.api!.getDisplayedRowAtIndex(rowId);
          if (rowNode) {
            let rowToDelete = rowNode.data;
            if (rowToDelete) {
              console.log('deleting row with Id:: ' + rowToDelete.tradeId);
              gridOptions.api!.updateRowData({ remove: [rowToDelete] });
            }
          }
        }
      }, tickingFrequency);
    }
  }

  public getRandomItem(ary: any[], max?: number): any {
    if (max) {
      return ary[this.generateRandomInt(0, Math.min(max, ary.length - 1))];
    }
    return ary[this.generateRandomInt(0, ary.length - 1)];
  }

  public generateRandomInt(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  protected roundTo4Dp(val: number): number {
    return Math.round(val * 10000) / 10000;
  }
}
