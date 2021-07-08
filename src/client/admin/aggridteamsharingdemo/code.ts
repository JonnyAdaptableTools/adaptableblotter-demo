import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  AdaptableState,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import * as firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'demos-adaptabletools.firebaseapp.com',
  databaseURL: 'https://demos-adaptabletools.firebaseio.com',
  projectId: 'demos-adaptabletools',
  storageBucket: 'demos-adaptabletools.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    ModuleButtons: ['TeamSharing', 'ConditionalStyle', 'FormatColumn'],
    Tabs: [
      {
        Name: 'Demo Toolbar',
        Toolbars: ['Layout', 'Query'],
      },
    ],
  },
  Query: {
    NamedQueries: [
      {
        Name: 'high-invoice-cost',
        BooleanExpression: '[InvoicedCost] > 1000',
      },
      {
        Name: 'medium-invoice-cost',
        BooleanExpression: '[InvoicedCost] >= 500',
      },
      {
        Name: 'low-invoice-cost',
        BooleanExpression: '[InvoicedCost] < 500',
      },
    ],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        Query: {
          ScalarExpression: `QUERY('high-invoice-cost') ? 'High' : QUERY('medium-invoice-cost') ? 'Medium': 'Low'`,
        },
        ColumnId: 'InvoicedCostLabel',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Additional Notes',
        DataType: 'String',
      },
    ],
  },
};

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
  };

  const stateId = localStorage.getItem('firebaseprefix-state') || uuidv4();
  const teamsharingId =
    localStorage.getItem('firebaseprefix-teamsharing') || uuidv4();
  const username = localStorage.getItem('teamsharing-demo-user') || 'Demo User';

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: `${username}`,
    adaptableId: 'Team Sharing Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    teamSharingOptions: {
      // enable Team Sharing by setting this property to true
      enableTeamSharing: true,
      // check every 1 minute if any active shared entities were updated and...
      updateInterval: 1,
      // ...display a system status message in that case
      updateNotification: 'SystemStatus',

      // provide a function implementation for retrieving items from Team Sharing
      // here we are using a remote firebase store
      getSharedEntities(adaptableId) {
        return firebase
          .database()
          .ref(`teamsharing/${teamsharingId}`)
          .once('value')
          .then(function(snapshot) {
            const stringValue = snapshot.val();
            return stringValue ? JSON.parse(stringValue) : {};
          });
      },

      // provide a function implementation for persisting items into Team Sharing
      // here we are using a remote firebase store
      async setSharedEntities(adaptableId, sharedEntities) {
        return firebase
          .database()
          .ref(`teamsharing/${teamsharingId}`)
          .set(JSON.stringify(sharedEntities));
      },
    },
    stateOptions: {
      loadState: () => {
        return firebase
          .database()
          .ref(`predefinedconfig/${stateId}`)
          .once('value')
          .then(function(snapshot) {
            const str = snapshot.val();
            return str ? JSON.parse(str) : {};
          });
      },
      persistState: (state: Partial<AdaptableState>) => {
        return firebase
          .database()
          .ref(`predefinedconfig/${stateId}`)
          .set(JSON.stringify(state))
          .then(() => Promise.resolve(true));
      },
    },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  // this is just for test purposes, to allow dynamically defined teamsharing firebase prefixes
  adaptableApi.eventApi.on('AdaptableReady', () => {
    // check if teamsharing document exists in firebase
    firebase
      .database()
      .ref(`teamsharing/${teamsharingId}`)
      .once('value')
      .then(snapshot => {
        if (!snapshot.exists()) {
          // if not, create it
          firebase
            .database()
            .ref(`teamsharing/${teamsharingId}`)
            .set(JSON.stringify([]));
        }
      });
  });

  return { adaptableOptions, adaptableApi };
};
