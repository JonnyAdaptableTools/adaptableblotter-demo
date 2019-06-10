import { ITrade } from './Trade';

export class DataGenerator {
  getTrades(): ITrade[] {
    var trades: ITrade[] = [];
    for (var i = 1; i < 301; i++) {
      //  var trade = null;// HelperAgGrid.createTrade(i);
      //  trades.push(trade);
    }
    return trades;
  }

  protected generateUuid(): string {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
}
