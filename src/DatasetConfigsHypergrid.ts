import { TradeBlotterBond } from "./DataSets/TradeBlotterBond/TradeBlotterBondHypergrid";
import { IDataSetConfiguration } from "./IDataSetConfiguration";


export var AvailableDatasetConfigs = new Map<string, IDataSetConfiguration>([
    [TradeBlotterBond.name, TradeBlotterBond]
]);

