import { TradeBlotterBond } from './DataSets/Old/TradeBlotterBond/TradeBlotterBondHypergrid';
import { IDataSetConfiguration } from './IDataSetConfiguration';
import { Contacts } from './DataSets/Old/Contacts/ContactsHypergrid';
import { BugTracker } from './DataSets/Old/BugTracker/BugTrackerHypergrid';
import { FTSEClose } from './DataSets/Old/FTSEClose/FTSECloseHypergrid';
import { InternationalHolidays } from './DataSets/Old/InternationalHolidays/InternationalHolidaysHypergrid';
import { NorthwindOrders } from './DataSets/Old/NorthwindOrders/NorthwindOrdersHypergrid';
import { PriceBlotterBond } from './DataSets/Old/PriceBlotterBond/PriceBlotterBondHypergrid';
import { PriceBlotterCDSIndex } from './DataSets/Old/PriceBlotterCDSIndex/PriceBlotterCDSIndexHypergrid';
import { PriceBlotterCommodity } from './DataSets/Old/PriceBlotterCommodity/PriceBlotterCommodityHypergrid';
import { PriceBlotterFX } from './DataSets/Old/PriceBlotterFX/PriceBlotterFXHypergrid';
import { TradeBlotterCDS } from './DataSets/Old/TradeBlotterCDS/TradeBlotterCDSHypergrid';
import { TradeBlotterCDSIndex } from './DataSets/Old/TradeBlotterCDSIndex/TradeBlotterCDSIndexHypergrid';
import { TradeBlotterCommodity } from './DataSets/Old/TradeBlotterCommodity/TradeBlotterCommodityHypergrid';
import { TradeBlotterFX } from './DataSets/Old/TradeBlotterFX/TradeBlotterFXHypergrid';
import { Swaps } from './DataSets/Old/Swaps/SwapsHypergrid';

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
