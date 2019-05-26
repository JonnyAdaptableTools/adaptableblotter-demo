import { AvailableDatasetConfigs } from './DatasetConfigsagGrid';
import * as Helper from '../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import {
  IAdaptableBlotter,
  IAdaptableBlotterOptions,
} from 'adaptableblotter/types';

export class agGridDemo {
  private themeName = '';
  private adaptableblotter: IAdaptableBlotter;
  constructor() {
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
        // let the grid know which columns and what data to use
        var gridOptions: GridOptions = {
          columnDefs: selectedConfig.getSchema(data),
          rowData: data,
          enableRangeSelection: true,
          floatingFilter: true,
          suppressMenuHide: true,
          suppressColumnVirtualisation: false,
          sideBar: true, // this puts in filters and columns by default
          columnTypes: {
            // not required but helpful for column data type identification
            abColDefNumber: {},
            abColDefString: {},
            abColDefBoolean: {},
            abColDefDate: {},
            abColDefObject: {},
          },
          onGridReady: function() {
            //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
            //visible and won't be autosized
            gridOptions.columnApi.autoSizeAllColumns();
            setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);

            gridOptions.api.addEventListener(
              'cellEditingStopped',
              (params: any) => {
                selectedConfig.ActionWhenRecordUpdatedOrEdited(params.node);
              }
            );

            gridOptions.api.addEventListener('newColumnsLoaded', function(
              params: any
            ) {
              gridOptions.columnApi.autoSizeAllColumns();
            });

            gridOptions.api.closeToolPanel();
          },
        };
        var eGridDiv = document.getElementById('grid');
        new Grid(eGridDiv, gridOptions);

        //Make the data to tick every 0.5s
        setInterval(() => selectedConfig.tickData(gridOptions), 500);
        //set all the properties such as editor etc....
        selectedConfig.setGridProperties(gridOptions);

        let config: any = selectedConfig.name.replace(/ /g, '') + 'Config.json';

        //create Adaptable Blotter
        let blotterId: string = selectedConfig.name.replace(/\s/g, '');
        let blotterOptions: IAdaptableBlotterOptions = {
          predefinedConfig: config,
          primaryKey: selectedConfig.primaryKey,
          vendorGrid: gridOptions,
          userName: 'Demo',
          blotterId: blotterId,
          licenceKey: Helper.getdemolicencekey(),
          layoutOptions: {
            includeVendorStateInLayouts: true,
            autoSaveLayouts: true,
          },
          iPushPullConfig: {
            api_key: 'CbBaMaoqHVifScrYwKssGnGyNkv5xHOhQVGm3cYP',
            api_secret:
              'xYzE51kuHyyt9kQCvMe0tz0H2sDSjyEQcF5SOBlPQmcL9em0NqcCzyqLYj5fhpuZxQ8BiVcYl6zoOHeI6GYZj1TkUiiLVFoW3HUxiCdEUjlPS8Vl2YHUMEPD5qkLYnGj',
            api_url: 'https://www.ipushpull.com/api/1.0',
            hsts: false,
          },
        };
        this.adaptableblotter = new (<any>(
          window
        )).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
      });
  }
}
