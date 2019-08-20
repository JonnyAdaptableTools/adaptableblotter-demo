import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsHypergrid';
import * as Helper from '../Helpers/Helper';
import {
  IAdaptableBlotter,
  AdaptableBlotterOptions,
} from '@adaptabletools/adaptableblotter/types';

export class HypergridDemo {
  private themeName = '';
  private adaptableblotter: IAdaptableBlotter;
  private grid: any;
  constructor(private gridContainer: string, private blotterContainer: string) {
    //Generate the dumy data
    let selectedConfig = Helper.manageDomDataSetSelectAndReturnSelectDataset(
      AvailableDatasetConfigs
    );
    if (!selectedConfig) {
      return;
    }

    let data: any[];
    Helper.getDataFromJson(selectedConfig.name.replace(/ /g, '') + '.json')
      .then(json => (data = json))
      .then(data => selectedConfig.manipulateInitialData(data))
      .then(() => {
        //create the Hypergrid
        this.grid = new (<any>window).fin.Hypergrid('#' + gridContainer, {
          data: data,
          schema: selectedConfig.getSchema(data),
        });

        selectedConfig.tickData(this.grid);

        //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells.
        this.grid.addProperties({ renderFalsy: true });
        this.grid.addProperties({ editOnKeydown: false });

        this.grid.localization.add(
          'USDCurrencyFormat',
          new this.grid.localization.NumberFormatter('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })
        );

        this.grid.localization.add(
          'twoDPFormat',
          new this.grid.localization.NumberFormatter('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })
        );

        this.grid.localization.add(
          'fourDPFormat',
          new this.grid.localization.NumberFormatter('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          })
        );

        var shortDateOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        this.grid.localization.add(
          'shortDateFormat',
          new this.grid.localization.DateFormatter('en-EN', shortDateOptions)
        );

        var longDateOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'short',
        };
        this.grid.localization.add(
          'longDateFormat',
          new this.grid.localization.DateFormatter('en-EN', longDateOptions)
        );

        //Make the data to tick every 0.5s
        setInterval(() => selectedConfig.tickData(this.grid), 500);

        //set all the properties such as editor etc....
        selectedConfig.setGridProperties(this.grid);

        this.grid.addEventListener('fin-after-cell-edit', (e: any) => {
          let row = this.grid.behavior.dataModel.getRow(
            e.detail.input.event.visibleRow.rowIndex
          );
          selectedConfig.ActionWhenRecordUpdatedOrEdited(row);
          this.grid.repaint();
        });

        let config: any = selectedConfig.name.replace(/ /g, '') + 'Config.json';
        let blotterId: string = selectedConfig.name.replace(/\s/g, '');

        //create Adaptable Blotter
        let blotterOptions: AdaptableBlotterOptions = {
          primaryKey: selectedConfig.primaryKey,
          vendorGrid: this.grid,
          userName: 'Demo User',
          blotterId: blotterId,
          licenceKey: 'xs2543-as6b8esw3-e94fyjzc7a',
        };

        this.adaptableblotter = new (<any>(
          window
        )).adaptableblotterhypergrid.AdaptableBlotter(blotterOptions);
        //alternate rows
        var origgetCell = this.grid.behavior.dataModel.getCell;
        this.grid.behavior.dataModel.getCell = function(
          config: any,
          declaredRendererName: any
        ) {
          if (config.isDataRow) {
            var y = config.dataCell.y;
            if (y % 2) {
              config.backgroundColor = config.altbackground;
            }
          }
          return origgetCell.call(
            this.grid.behavior.dataModel,
            config,
            declaredRendererName
          );
        };
        //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
        //      this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
        //       this.grid.addProperties(lightTheme);
      });
  }
}
