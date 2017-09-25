export interface IDataSetConfiguration {
    //Name of the config. Predefined config, Data filename etc... have to match this name without the spaces
    name: string
    //Primary key from the data
    primaryKey: string
    //if you need to manipulate the data before setting the datasource on the grid
    //One good example is for date columns. We want them to be Date objects which doesn;t exist in json
    manipulateInitialData: (data: any[]) => void
    //return the schema of the data. 
    getSchema: (data: any[]) => any[]
    //Set some properties for grid such as formatting, editor and shit
    setGridProperties: (grid: any) => void
    //make the data to tick where require. It's called every x sec from the main project. 
    //Do not put a SetInterval in there
    tickData: (grid: any) => void
}
