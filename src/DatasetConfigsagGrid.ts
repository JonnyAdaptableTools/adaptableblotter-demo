import { TradeBlotterBond } from "./DataSets/TradeBlotterBond/TradeBlotterBondagGrid";
import { IDataSetConfiguration } from "./IDataSetConfiguration";
import { Contacts } from "./DataSets/Contacts/ContactsagGrid";
import { BugTracker } from "./DataSets/BugTracker/BugTrackeragGrid";
import { FTSEClose } from "./DataSets/FTSEClose/FTSECloseagGrid";
import { InternationalHolidays } from "./DataSets/InternationalHolidays/InternationalHolidaysagGrid";
import { NorthwindOrders } from "./DataSets/NorthwindOrders/NorthwindOrdersagGrid";
import { PriceBlotterBond } from "./DataSets/PriceBlotterBond/PriceBlotterBondagGrid";
import { PriceBlotterCDSIndex } from "./DataSets/PriceBlotterCDSIndex/PriceBlotterCDSIndexagGrid";
import { PriceBlotterCommodity } from "./DataSets/PriceBlotterCommodity/PriceBlotterCommodityagGrid";
import { PriceBlotterFX } from "./DataSets/PriceBlotterFX/PriceBlotterFXagGrid";
import { TradeBlotterCDS } from "./DataSets/TradeBlotterCDS/TradeBlotterCDSagGrid";
import { TradeBlotterCDSIndex } from "./DataSets/TradeBlotterCDSIndex/TradeBlotterCDSIndexagGrid";
import { TradeBlotterCommodity } from "./DataSets/TradeBlotterCommodity/TradeBlotterCommodityagGrid";
import { TradeBlotterFX } from "./DataSets/TradeBlotterFX/TradeBlotterFXagGrid";


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

