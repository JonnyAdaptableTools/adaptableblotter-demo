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
import { v4 as uuidv4 } from 'uuid';
import * as firebase from 'firebase/app';
import 'firebase/database';

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
const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const id = localStorage.getItem('firebaseprefix') || uuidv4();

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'State Functions Demo',
    stateOptions: {
      /**
       * The loadState function is used to load the predefined config
       * from a remote source - namely firebase in this example
       *
       * It returns a promise which is resolved when the Predefined Config is
       * retrieved from firebase.
       */
      loadState: () => {
        return firebase
          .database()
          .ref(`predefinedconfig/${id}`)
          .once('value')
          .then(function(snapshot) {
            const str = snapshot.val();
            return str ? JSON.parse(str) : {};
          });
      },

      /**
       * The persistState function is called with the state that needs to be persisted.
       * By default, state is persisted in localStorage, but this example
       * illustrates how you can persist it to a remote datastore (Firebase, etc)
       */
      persistState: (state: Partial<AdaptableState>) => {
        return firebase
          .database()
          .ref(`predefinedconfig/${id}`)
          .set(JSON.stringify(state))
          .then(() => Promise.resolve(true));
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);
  return { adaptableOptions, adaptableApi };
};
