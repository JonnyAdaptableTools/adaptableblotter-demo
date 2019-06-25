import { ColDef, GridOptions } from 'ag-grid-community';

export interface IFootballTeam {
  name: string;
  country: string;
  stadium: string;
  yearEstablished: number;
  squad: IFootballPlayer[];
}

export interface IFootballPlayer {
  name: string;
  age: number;
  position: string;
}

export class DummyDataHelper {
  public getMasterGridOptionsFootball(): GridOptions {
    return {
      columnDefs: this.getFootballTeamSchema(),
      rowData: this.getFootballData(),
      masterDetail: true,
      detailCellRendererParams: {
        // provide detail grid options
        detailGridOptions: this.getDetailGridOptionsFootball(),

        // extract and supply row data for detail
        getDetailRowData: function(params: any) {
          params.successCallback(params.data.squad);
        },
      },
      enableRangeSelection: true,
      floatingFilter: true,
      suppressColumnVirtualisation: false,
      suppressMenuHide: true,
      sideBar: undefined,
      columnTypes: {
        abColDefNumber: {},
        abColDefString: {},
        abColDefBoolean: {},
        abColDefDate: {},
        abColDefObject: {},
      },
    };
  }

  public getFootballTeamSchema(): ColDef[] {
    var schema: any[] = [];
    schema.push({
      headerName: 'Name',
      field: 'name',
      editable: false,
      filter: false,
      cellRenderer: 'agGroupCellRenderer',
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Country',
      field: 'country',
      editable: false,
      filter: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Stadium',
      field: 'stadium',
      editable: false,
      filter: true,
      type: 'abColDefString',
    });
    schema.push({
      headerName: 'Year Established',
      field: 'yearEstablished',
      filter: true,
      editable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    return schema;
  }

  public getDetailGridOptionsFootball(): GridOptions {
    return {
      columnDefs: this.getFootballPlayerSchema(),
      columnTypes: {
        abColDefNumber: {},
        abColDefString: {},
        abColDefBoolean: {},
        abColDefDate: {},
        abColDefObject: {},
      },
    };
  }

  public getFootballPlayerSchema(): ColDef[] {
    var schema: any[] = [];

    schema.push({
      headerName: 'Name',
      field: 'name',
      filter: true,
      editable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Age',
      field: 'age',
      filter: true,
      editable: true,
      cellClass: 'number-cell',
      type: 'abColDefNumber',
    });
    schema.push({
      headerName: 'Position',
      field: 'position',
      filter: true,
      editable: true,
      type: 'abColDefString',
    });

    return schema;
  }

  getFootballData(): IFootballTeam[] {
    let footballTeams: IFootballTeam[] = [];

    // Liverpool
    let liverpool: IFootballTeam = {
      name: 'Liverpool',
      country: 'England',
      stadium: 'Anfield',
      yearEstablished: 1896,
      squad: [
        {
          age: 32,
          name: 'Mo Salah',
          position: 'Striker',
        },
        {
          age: 43,
          name: 'Alisson',
          position: 'Goalkeeper',
        },
      ],
    };
    footballTeams.push(liverpool);
    // barca
    let barcelona: IFootballTeam = {
      name: 'Barcelona',
      country: 'Spain',
      stadium: 'Nou Camp',
      yearEstablished: 1875,
      squad: [
        {
          age: 32,
          name: 'Messi',
          position: 'Striker',
        },
        {
          age: 32,
          name: 'Coutinho',
          position: 'Midfielder',
        },
      ],
    };
    footballTeams.push(barcelona);

    return footballTeams;
  }
}
