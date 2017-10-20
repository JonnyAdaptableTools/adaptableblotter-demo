import { TradeBlotterBond } from "./DataSets/TradeBlotterBond/TradeBlotterBondKendo";
import { IDataSetConfiguration } from "./IDataSetConfiguration";
import { Contacts } from "./DataSets/Contacts/ContactsKendo";
import { BugTracker } from "./DataSets/BugTracker/BugTrackerKendo";
import { FTSEClose } from "./DataSets/FTSEClose/FTSECloseKendo";
import { InternationalHolidays } from "./DataSets/InternationalHolidays/InternationalHolidaysKendo";
import { NorthwindOrders } from "./DataSets/NorthwindOrders/NorthwindOrdersKendo";
import { PriceBlotterBond } from "./DataSets/PriceBlotterBond/PriceBlotterBondKendo";
import { PriceBlotterCDSIndex } from "./DataSets/PriceBlotterCDSIndex/PriceBlotterCDSIndexKendo";
import { PriceBlotterCommodity } from "./DataSets/PriceBlotterCommodity/PriceBlotterCommodityKendo";
import { PriceBlotterFX } from "./DataSets/PriceBlotterFX/PriceBlotterFXKendo";
import { TradeBlotterCDS } from "./DataSets/TradeBlotterCDS/TradeBlotterCDSKendo";
import { TradeBlotterCDSIndex } from "./DataSets/TradeBlotterCDSIndex/TradeBlotterCDSIndexKendo";
import { TradeBlotterCommodity } from "./DataSets/TradeBlotterCommodity/TradeBlotterCommodityKendo";
import { TradeBlotterFX } from "./DataSets/TradeBlotterFX/TradeBlotterFXKendo";


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

