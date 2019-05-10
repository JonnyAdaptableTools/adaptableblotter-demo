export interface IDataSetConfiguration {
  //Name of the config. Predefined config, Data filename etc... have to match this name without the spaces
  name: string;
  //Primary key from the data
  primaryKey: string;
  //When in group mode, data should be grouped by that field when opened
  //  openGroupingField?: string
  //When in group mode, data can be grouped by that field if chosen in the columns panel to the side
  //  availableGroupingFields?: string[]
  // Do we have any column groups?
  //  columnGroupInfos?: IColumnGroupInfo[]
  //if you need to manipulate the data before setting the datasource on the grid
  //One good example is for date columns. We want them to be Date objects which doesn;t exist in json
  manipulateInitialData: (data: any[]) => void;
  //return the schema of the data.
  getSchema: (data: any[]) => any[];
  //Set some properties for grid such as formatting, editor and shit
  setGridProperties: (grid: any) => void;
  //make the data to tick where require. It's called every x sec from the main project.
  //Do not put a SetInterval in there
  tickData: (grid: any) => void;
  //method to be called when the record is edited by the user or updated with the TickData method
  // a good example is the computation of Bid and Ask when the Price is either updated or edited
  ActionWhenRecordUpdatedOrEdited: (record: any) => any;
}

export interface IColumnGroupInfo {
  groupName: string;
  openChildren: string[];
  closedChildren: string[];
}
