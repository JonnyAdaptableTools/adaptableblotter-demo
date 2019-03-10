import { IDataSetConfiguration } from "./IDataSetConfiguration";
import { Contacts } from "./DataSets/Old/Contacts/ContactsagGrid";
import { BugTracker } from "./DataSets/Old/BugTracker/BugTrackeragGrid";
import { FTSEClose } from "./DataSets/Old/FTSEClose/FTSECloseagGrid";
import { InternationalHolidays } from "./DataSets/Old/InternationalHolidays/InternationalHolidaysagGrid";
import { NorthwindOrders } from "./DataSets/Old/NorthwindOrders/NorthwindOrdersagGrid";
import { PriceBlotterBond } from "./DataSets/Old/PriceBlotterBond/PriceBlotterBondagGrid";
import { PriceBlotterCDSIndex } from "./DataSets/Old/PriceBlotterCDSIndex/PriceBlotterCDSIndexagGrid";
import { PriceBlotterCommodity } from "./DataSets/Old/PriceBlotterCommodity/PriceBlotterCommodityagGrid";
import { PriceBlotterFX } from "./DataSets/Old/PriceBlotterFX/PriceBlotterFXagGrid";
import { TradeBlotterCDS } from "./DataSets/Old/TradeBlotterCDS/TradeBlotterCDSagGrid";
import { TradeBlotterCDSIndex } from "./DataSets/Old/TradeBlotterCDSIndex/TradeBlotterCDSIndexagGrid";
import { TradeBlotterCommodity } from "./DataSets/Old/TradeBlotterCommodity/TradeBlotterCommodityagGrid";
import { TradeBlotterFX } from "./DataSets/Old/TradeBlotterFX/TradeBlotterFXagGrid";
import { Swaps } from "./DataSets/Old/Swaps/SwapsagGrid";
import { TradeBlotterBond } from "./DataSets/Old/TradeBlotterBond/TradeBlotterBondagGrid";



export var AvailableDatasetConfigs = new Map<string, IDataSetConfiguration>([
  [Contacts.name, Contacts],
  //  [BugTracker.name, BugTracker],
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
  [TradeBlotterFX.name, TradeBlotterFX],
  [Swaps.name, Swaps],
]);

