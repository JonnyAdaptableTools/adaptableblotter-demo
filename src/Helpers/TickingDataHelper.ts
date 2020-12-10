import { GridOptions, RowNode } from '@ag-grid-community/all-modules';
import { ITrade } from './Trade';
import { HelperAgGrid } from './HelperAgGrid';
import {
  AdaptableApi,
  DataUpdateConfig,
} from '@adaptabletools/adaptable/types';

export class TickingDataHelper {
  private isTicking: boolean = false;

  public testTickingDataagGrid(
    gridOptions: any,
    adaptableApi: AdaptableApi,
    tickingFrequency: number,
    tradeCount: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      const helperAgGrid = new HelperAgGrid();

      let useAdaptableAPIUpdateGridData: boolean = false;
      let useRowNodeSetDataValue: boolean = true;
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
          let tradeId = this.generateRandomInt(1, tradeCount);
          let rowNode: RowNode = gridOptions.api!.getRowNode(tradeId);

          const trade: ITrade = { ...gridOptions.rowData[tradeId] };
          const randomInt = this.generateRandomInt(1, 2);
          const numberToAdd: number = randomInt == 1 ? -0.5 : 0.5;
          const directionToAdd: number = randomInt == 1 ? -0.01 : 0.01;
          const newPrice = this.roundTo4Dp(trade.price + numberToAdd);
          const bidOfferSpread = trade.bidOfferSpread;
          const ask = this.roundTo4Dp(newPrice + bidOfferSpread / 2);
          const bid = this.roundTo4Dp(newPrice - bidOfferSpread / 2);
          const bloombergAsk = this.roundTo4Dp(ask + directionToAdd);
          const bloombergBid = this.roundTo4Dp(bid - directionToAdd);
          const notional = this.getRandomItem(helperAgGrid.getNotionals());
          const changeOnYear = helperAgGrid.getMeaningfulDouble();

          if (useAdaptableAPIUpdateGridData) {
            trade.price = newPrice;
            trade.bid = bid;
            trade.ask = ask;
            trade.bloombergAsk = bloombergAsk;
            trade.bloombergBid = bloombergBid;
            trade.notional = notional;
            trade.changeOnYear = changeOnYear;
            adaptableApi.gridApi.updateGridData([trade]);
          }

          if (useRowNodeSetDataValue) {
            rowNode.setDataValue('price', newPrice);
            rowNode.setDataValue('bid', bid);
            rowNode.setDataValue('ask', ask);
            rowNode.setDataValue('bloombergAsk', bloombergAsk);
            rowNode.setDataValue('bloombergBid', bloombergBid);
            rowNode.setDataValue('notional', notional);
            rowNode.setDataValue('changeOnYear', changeOnYear);
            rowNode.setDataValue('price', newPrice);
            rowNode.setDataValue('price', newPrice);
          }
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridOrders(
    gridOptions: any,
    adaptableApi: AdaptableApi,
    tickingFrequency: number,
    startOrderId: number,
    endOrderId: number,
    includeItemCount: boolean = false
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
          let index: number = this.generateRandomInt(startOrderId, endOrderId);
          let rowNode: RowNode = gridOptions.api!.getRowNode(index);
          if (rowNode) {
            //  const order: any = { ...gridOptions.rowData[tradeId] };
            const order: any = { ...rowNode.data };
            if (order) {
              if (!includeItemCount) {
                let numberToAdd: number =
                  this.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;

                let columnName = 'ItemCost';
                let initialItemCost = gridOptions.api.getValue(
                  columnName,
                  rowNode
                );
                let newItemCost = this.roundTo4Dp(
                  initialItemCost + numberToAdd
                );
                order.ItemCost = newItemCost;
                //     rowNode.setDataValue(columnName, newItemCost);

                let itemCount = gridOptions.api.getValue('ItemCount', rowNode);
                let newOrderCost = itemCount * newItemCost;
                order.OrderCost = newOrderCost;
                //   rowNode.setDataValue('OrderCost', newOrderCost);

                let packageCost = gridOptions.api.getValue(
                  'PackageCost',
                  rowNode
                );
                let newInvoicedCost = newOrderCost - packageCost;
                order.InvoicedCost = newInvoicedCost;
                //    rowNode.setDataValue('InvoicedCost', newInvoicedCost);

                let incdec: number = this.generateRandomInt(1, 2) == 1 ? -1 : 1;
                let changeLastOrder = gridOptions.api.getValue(
                  'ChangeLastOrder',
                  rowNode
                );
                order.ChangeLastOrder = incdec + changeLastOrder;
                //       rowNode.setDataValue('ChangeLastOrder', incdec + changeLastOrder);

                order.ItemCount = this.generateRandomInt(1, 2000);
              } else {
                let numberToAdd: number = this.generateRandomInt(1, 10);
                let itemCount = gridOptions.api.getValue('ItemCount', rowNode);
                if (numberToAdd < 8) {
                  order.ItemCount = itemCount + 1;
                  //         rowNode.setDataValue('ItemCount', itemCount + 1);
                } else {
                  order.ItemCount = itemCount * 3;
                  //          rowNode.setDataValue('ItemCount', itemCount * 3);
                }
              }
              // gridOptions.api!.updateRowData({ update: [order] });
              adaptableApi.gridApi.updateGridData([order]);
            }
          }
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridPivot(
    gridOptions: any,
    adaptableApi: AdaptableApi,
    tickingFrequency: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
          let possIds: number[] = [10982, 10949, 10810, 10620, 10339];
          let test: number = this.generateRandomInt(0, 4);
          let orderId = possIds[test];
          let rowNode: RowNode = gridOptions.api!.getRowNode(orderId);
          if (rowNode) {
            const order: any = { ...rowNode.data };
            if (order) {
              let invoicedCost = gridOptions.api.getValue(
                'InvoicedCost',
                rowNode
              );
              order.InvoicedCost = invoicedCost + 5;
              adaptableApi.gridApi.updateGridData([order]);
            }
          }
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridTradesUpdateData(
    gridOptions: GridOptions,
    adaptableApi: AdaptableApi,
    tickingFrequency: number,
    tradeCount: number,
    updateNotional: boolean = false
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      const helperAgGrid = new HelperAgGrid();
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
          let tradeId = this.generateRandomInt(1, tradeCount);

          const node: any = gridOptions.api?.getRowNode(String(tradeId));
          if (!node) {
            return;
          }
          const trade: ITrade = { ...node.data };

          if (updateNotional) {
            const randomInt = this.generateRandomInt(1, 2);
            const numberToAdd: number = randomInt == 1 ? -0.5 : 0.5;
            const directionToAdd: number = randomInt == 1 ? -0.01 : 0.01;
            const newPrice = this.roundTo4Dp(trade.price + numberToAdd);
            const bidOfferSpread = trade.bidOfferSpread;
            const ask = this.roundTo4Dp(newPrice + bidOfferSpread / 2);
            const bid = this.roundTo4Dp(newPrice - bidOfferSpread / 2);

            trade.price = newPrice;
            trade.bid = bid;
            trade.ask = ask;
            trade.bloombergAsk = this.roundTo4Dp(ask + directionToAdd);
            trade.bloombergBid = this.roundTo4Dp(bid - directionToAdd);
            trade.notional = this.getRandomItem(helperAgGrid.getNotionals());
            trade.changeOnYear = helperAgGrid.getMeaningfulDouble();
          } else {
            let numberToAdd: number = this.generateRandomInt(1, 3);
            if (numberToAdd == 1) {
              // if 1 then update a number up
              trade.price = trade.price + 1;
            } else if (numberToAdd == 2) {
              // if 2 then update a number down
              trade.price = trade.price - 1;
            } else if (numberToAdd == 3) {
              // if 3 then update a country
              trade.currency = 'JPY';
            }
          }
          //  node.setData(trade);
          adaptableApi.gridApi.updateGridData([trade]);
          //  gridOptions.api?.setRowData([trade]);
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridTrade(
    api: AdaptableApi,
    gridOptions: any,
    tickingFrequency: number,
    upperLevel: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      this.isTicking = true;
      const helperAgGrid = new HelperAgGrid();
      setInterval(() => {
        if (this.isTicking) {
          let index: number = this.generateRandomInt(1, upperLevel);
          let rowNode: RowNode = gridOptions.api!.getRowNode(index);
          if (rowNode) {
            // NOTE:  You need to make a COPY of the data that you are changing...
            const trade: ITrade = rowNode.data;
            if (trade) {
              const randomInt = this.generateRandomInt(1, 2);
              const numberToAdd: number = randomInt == 1 ? -0.5 : 0.5;
              const directionToAdd: number = randomInt == 1 ? -0.01 : 0.01;
              const newPrice = this.roundTo4Dp(trade.price + numberToAdd);
              const bidOfferSpread = trade.bidOfferSpread;
              const ask = this.roundTo4Dp(newPrice + bidOfferSpread / 2);
              const bid = this.roundTo4Dp(newPrice - bidOfferSpread / 2);

              trade.price = newPrice;
              trade.bid = bid;
              trade.ask = ask;
              trade.bloombergAsk = this.roundTo4Dp(ask + directionToAdd);
              trade.bloombergBid = this.roundTo4Dp(bid - directionToAdd);

              //    trade.notional = this.generateRandomInt(1, 50);
              trade.changeOnYear = helperAgGrid.getMeaningfulDouble();

              let config: DataUpdateConfig = {
                runAsync: true,
                // callback: test,
              };
              api.gridApi.updateGridData([trade], config);
            }
          }
        }
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridTradeBatch(
    adaptableApi: AdaptableApi,
    gridOptions: GridOptions,
    helperAgGrid: HelperAgGrid,
    tickingFrequency: number,
    tradeCount: number,
    batchSize: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      const counterparties = helperAgGrid.getCounterparties();
      const counterpartyindex = counterparties.length - 1;
      const currencies = helperAgGrid.getCurrencies();
      const currencyindex = currencies.length - 1;
      const countries = helperAgGrid.getCountries();
      const countryIndex = countries.length - 1;
      const notionals = helperAgGrid.getNotionals();

      let callbackFn = function resultCallback() {
        console.log('batch update occurred');
      };
      let config = {
        runAsync: true,
        callbackFn: callbackFn,
      };

      setInterval(() => {
        let tradeBatch: ITrade[] = [];
        for (let i = 0; i < batchSize; i++) {
          let tradeId = this.generateRandomInt(1, tradeCount);

          const node: any = gridOptions.api?.getRowNode(String(tradeId));
          if (!node) {
            return;
          }
          const trade: ITrade = { ...node.data };
          const randomInt = this.generateRandomInt(1, 2);
          const counterparty =
            counterparties[this.generateRandomInt(0, counterpartyindex)];
          const currency = currencies[this.generateRandomInt(0, currencyindex)];
          const country = countries[this.generateRandomInt(0, countryIndex)];
          const numberToAdd: number = randomInt == 1 ? -0.5 : 0.5;
          const directionToAdd: number = randomInt == 1 ? -0.01 : 0.01;
          const price = this.roundTo4Dp(trade.price + numberToAdd);
          const bidOfferSpread = trade.bidOfferSpread;
          const ask = this.roundTo4Dp(price + bidOfferSpread / 2);
          const bid = this.roundTo4Dp(price - bidOfferSpread / 2);
          const notional = this.getRandomItem(notionals);
          const changeOnYear = helperAgGrid.getMeaningfulDouble();

          trade.price = price;
          trade.bid = bid;
          trade.ask = ask;
          trade.bidOfferSpread = bidOfferSpread;
          trade.notional = notional;
          trade.changeOnYear = changeOnYear;
          trade.counterparty = String(counterparty);
          trade.currency = currency;
          trade.country = country;

          tradeBatch.push(trade);
        }
        adaptableApi.gridApi.updateGridData(tradeBatch, config);
      }, tickingFrequency);
    }
  }

  public startTickingDataagGridTradeBatchAddDeleteUpdate(
    adaptableApi: AdaptableApi,
    gridOptions: GridOptions,
    helperAgGrid: HelperAgGrid,
    tickingFrequency: number,
    tradeCount: number,
    updateBatchSize: number,
    addDeleteBatchSize: number
  ) {
    if (gridOptions != null && gridOptions.api != null) {
      const counterparties = helperAgGrid.getNamedCounterparties();
      const counterpartyindex = counterparties.length - 1;

      let config: DataUpdateConfig = {
        runAsync: true,
      };

      setInterval(() => {
        let tradeBatch: ITrade[] = [];
        let rowCount: number = gridOptions.api!.getDisplayedRowCount();
        for (let i = 0; i < updateBatchSize; i++) {
          const rowId: number = this.generateRandomInt(0, rowCount - 1);
          let rowNode = gridOptions.api!.getDisplayedRowAtIndex(rowId);
          if (!rowNode) {
            return;
          }
          const trade: ITrade = { ...rowNode.data };
          const randomInt = this.generateRandomInt(-1, 1);
          const counterparty =
            counterparties[this.generateRandomInt(0, counterpartyindex)];
          const price = this.roundTo4Dp(trade.price + randomInt);
          const bidOfferSpread = trade.bidOfferSpread;
          const ask = this.roundTo4Dp(price + bidOfferSpread / 2);
          const bid = this.roundTo4Dp(price - bidOfferSpread / 2);

          trade.price = price;
          trade.bid = bid;
          trade.ask = ask;
          trade.counterparty = String(counterparty);

          tradeBatch.push(trade);
        }
        adaptableApi.gridApi.updateGridData(tradeBatch, config);
      }, tickingFrequency);

      let addRow: boolean = true;
      let tradeId = tradeCount;
      setInterval(() => {
        let tradeBatch: ITrade[] = [];
        if (addRow) {
          for (let i = 0; i < addDeleteBatchSize; i++) {
            tradeId++;
            const newTrade = helperAgGrid.createTrade(tradeId);
            if (newTrade) {
              tradeBatch.push(newTrade);
            }
          }
          adaptableApi.gridApi.addGridData(tradeBatch, config);
          addRow = false;
        } else {
          let rowCount: number = gridOptions.api!.getDisplayedRowCount();
          for (let i = 0; i < addDeleteBatchSize; i++) {
            const rowId: number = this.generateRandomInt(0, rowCount - 1);

            let rowNode = gridOptions.api!.getDisplayedRowAtIndex(rowId);
            if (rowNode) {
              let rowToDelete = rowNode.data;
              if (rowToDelete) {
                tradeBatch.push(rowToDelete);
              }
            }
          }
          adaptableApi.gridApi.deleteGridData(tradeBatch, config);
          addRow = true;
        }
      }, 3000);
    }
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
      this.isTicking = true;
      let rowCount: number = gridOptions.api!.getDisplayedRowCount();
      let newRowCount: number = rowCount + 1;
      const helperAgGrid = new HelperAgGrid();
      setInterval(() => {
        if (this.isTicking) {
          ++newRowCount;
          if (newRowCount < maxNumber) {
            const newRow = helperAgGrid.createTrade(newRowCount);
            if (newRow) {
              console.log('adding row with Id: ' + newRowCount);
              gridOptions.api!.updateRowData({ add: [newRow] });
            }
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
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
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
        }
      }, tickingFrequency);
    }
  }

  useTickingDataTreeGrid(gridOptions: any, tickingFrequency: number) {
    if (gridOptions != null && gridOptions.api != null) {
      let govIds: number[] = [
        1,
        2,
        3,
        4,
        5,
        7,
        8,
        9,
        10,
        11,
        13,
        14,
        15,
        16,
        17,
        18,
        20,
        21,
        22,
        23,
        25,
        25,
        27,
        28,
        29,
        30,
        31,
        33,
        34,
        35,
        36,
        37,
      ];
      this.isTicking = true;
      setInterval(() => {
        if (this.isTicking) {
          let randomId = this.generateRandomInt(0, 29);
          let govId: number = govIds[randomId];

          const row: any = { ...gridOptions.rowData[govId] };
          if (!row) {
            return;
          }
          const staffToAdd: number = this.generateRandomInt(-5, 5);
          const staff = row['staff'] + staffToAdd;
          const budgetToAdd: number = staffToAdd * 85;
          const budget = row['budget'] + budgetToAdd;

          row['staff'] = staff;
          row['budget'] = budget;

          gridOptions.api!.updateRowData({ update: [row] });
        }
      }, tickingFrequency);
    }
  }

  public turnOffTicking() {
    this.isTicking = false;
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
