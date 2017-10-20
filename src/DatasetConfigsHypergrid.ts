import { TradeBlotterBond } from "./DataSets/TradeBlotterBond/TradeBlotterBondHypergrid";
import { IDataSetConfiguration } from "./IDataSetConfiguration";
import { Contacts } from "./DataSets/Contacts/ContactsHypergrid";
import { BugTracker } from "./DataSets/BugTracker/BugTrackerHypergrid";
import { FTSEClose } from "./DataSets/FTSEClose/FTSECloseHypergrid";
import { InternationalHolidays } from "./DataSets/InternationalHolidays/InternationalHolidaysHypergrid";
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
    [BugTracker.name, BugTracker],
    [FTSEClose.name, FTSEClose],
    [InternationalHolidays.name, InternationalHolidays],
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

