export interface IDataSetConfiguration {
    name: string
    primaryKey: string
    manipulateInitialDate: (data: any[]) => void
    getSchema: (data: any[]) => any[]
    setGridProperties: (grid: any) => void
    tickData: (grid: any) => void
}
