import { TradeBlotterBond } from "./DataSets/TradeBlotterBond/TradeBlotterBondHypergrid";
import { IDataSetConfiguration } from "./IDataSetConfiguration";
import { Contacts } from "./DataSets/Contacts/ContactsHypergrid";
import { FTSEClose } from "./DataSets/FTSEClose/FTSECloseHypergrid";
import { Holidays } from "./DataSets/Holidays/HolidaysHypergrid";
import { NorthwindOrders } from "./DataSets/NorthwindOrders/NorthwindOrdersHypergrid";
import { PriceBlotterBond } from "./DataSets/PriceBlotterBond/PriceBlotterBondHypergrid";
import { PriceBlotterCDSIndex } from "./DataSets/PriceBlotterCDSIndex/PriceBlotterCDSIndexHypergrid";
import { PriceBlotterCommodity } from "./DataSets/PriceBlotterCommodity/PriceBlotterCommodityHypergrid";
import { PriceBlotterFX } from "./DataSets/PriceBlotterFX/PriceBlotterFXHypergrid";
import { TradeBlotterCDS } from "./DataSets/TradeBlotterCDS/TradeBlotterCDSHypergrid";
import { TradeBlotterCDSIndex } from "./DataSets/TradeBlotterCDSIndex/TradeBlotterCDSIndexHypergrid";
import { TradeBlotterCommodity } from "./DataSets/TradeBlotterCommodity/TradeBlotterCommodityHypergrid";
import { TradeBlotterFX } from "./DataSets/TradeBlotterFX/TradeBlotterFXHypergrid";


export var AvailableDatasetConfigs = new Map<string, IDataSetConfiguration>([
    [Contacts.name, Contacts],
    [FTSEClose.name, FTSEClose],
    [Holidays.name, Holidays],
    [NorthwindOrders.name, NorthwindOrders],
    [PriceBlotterBond.name, PriceBlotterBond],
    [PriceBlotterCDSIndex.name, PriceBlotterCDSIndex],
    [PriceBlotterCommodity.name, PriceBlotterCommodity],
    [PriceBlotterFX.name, PriceBlotterFX],
    [TradeBlotterBond.name, TradeBlotterBond],
    [TradeBlotterCDS.name, TradeBlotterCDS],
    [TradeBlotterCDSIndex.name, TradeBlotterCDSIndex],
    [TradeBlotterCommodity.name, TradeBlotterCommodity],
    [TradeBlotterFX.name, TradeBlotterFX]
]);
