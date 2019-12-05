export interface DemoCategory {
  CategoryName: string;
  Link: string;
  Pages: DemoPage[];
}
export interface DemoPage {
  Name: string;
  Link: string;
  Description: string;
}
export interface DemoPageStructure {
  Categories: DemoCategory[];
}

export function getDemoPageStructure(): DemoPageStructure {
  let pageStructure: DemoPageStructure = {
    Categories: [
      {
        CategoryName: 'Config',
        Link: '/config',
        Pages: [
          {
            Name: 'No Config',
            Link: '/config/aggridnoconfigdemo',
            Description:
              'An Adaptable Blotter with no Predefined Config supplied.  This is unlikely to be the case in a production scenario as you will pre-ship the Blotter with your objects.',
          },
          {
            Name: 'Predefined Config',
            Link: '/config/aggridpredefinedconfigdemo',
            Description:
              'An Adaptable Blotter with lots of different Predefined Config elements supplied.',
          },
        ],
      },
      {
        CategoryName: 'Search',
        Link: '/search',
        Pages: [
          {
            Name: 'Quick Search',
            Link: '/search/aggridquicksearchdemo',
            Description:
              'Search across all columns using a simple text search (includes wildcards like ">").',
          },
          {
            Name: 'Advanced Search',
            Link: '/search/aggridadvancedsearchdemo',
            Description:
              'Saveable multiple-column search facility including a huge array of ranges and search criteria.',
          },
          {
            Name: 'Quick Filter Bar',
            Link: '/search/aggridquickfilterdemo',
            Description:
              'A textbox below the Column Header that allows you to quickly search in a column (includes wildcards like ">").',
          },
          {
            Name: 'Column Filters',
            Link: '/search/aggridcolumnfiltersdemo',
            Description:
              'A filter panel available as a dropdown from the Column Header which allows you to perform complex filtering for a particular column.  Can be saved as User Filters.',
          },
          {
            Name: 'User Filters',
            Link: '/search/aggriduserfiltersdemo',
            Description:
              'Column Filters which have been named and saved and so are usable across multiple functions that use queries (like Conditional Styles, Reports or Advanced Search)',
          },
          {
            Name: 'Named Filters',
            Link: '/search/aggridnamedfiltersdemo',
            Description:
              'Named Filters are provided by users at design-time and include a custom Predicate function that is run each time the filter is applied',
          },
          {
            Name: 'Data Source Selector',
            Link: '/search/aggriddatasourcedemo',
            Description:
              'A list of Data Sources provided at run-time (e.g. books, stored procs); when one is selected an event is fired that you can listen to and then populate the Blotter with data via the API.',
          },
        ],
      },
      {
        CategoryName: 'Edit',
        Link: '/edit',
        Pages: [
          {
            Name: 'Smart Edit',
            Link: '/edit/aggridsmarteditdemo',
            Description:
              'Update contiguous numeric cells using a mathmatical operation (e.g. Multiply, Divide, Add, Subtract).',
          },
          {
            Name: 'Bulk Update',
            Link: '/edit/aggridbulkupdatedemo',
            Description:
              'Update contiguous cells in a column to all contain the same value - can be existing or new column value.',
          },
          {
            Name: 'Shortcut',
            Link: '/edit/aggridshortcutdemo',
            Description:
              'Avoid fat finger issues and speed up / automate data entry for numeric and date columns.',
          },
          {
            Name: 'Shortcut',
            Link: '/edit/aggridplusminusdemo',
            Description:
              'Set up "nudge" rules for numeric columns to respond when the "+" or "-" keys are pressed.',
          },
          {
            Name: 'Cell Validation',
            Link: '/edit/aggridcellvalidationdemo',
            Description:
              'Create rules to prevent (or show warnings) when particular cell edits take place. These will run on the client.',
          },
          {
            Name: 'Server Validation',
            Link: '/edit/aggridservervalidationdemo',
            Description:
              'Provide a function (and promise) that wil check edits and return a validation response (with optional message and replacement value).',
          },
          {
            Name: 'Edit Dropdowns',
            Link: '/edit/aggrideditdropdownsdemo',
            Description:
              'List which columns will automatically show a dropdown (select) when editing and optionally provide the values which it displays.',
          },
        ],
      },
      {
        CategoryName: 'Styling',
        Link: '/style',
        Pages: [
          {
            Name: 'Conditional Style',
            Link: '/style/aggridconditionalstyledemo',
            Description:
              'Style cells, columns and rows in striking ways when their data matches rules that you create.',
          },
          {
            Name: 'Format Column',
            Link: '/style/aggridformatcolumndemo',
            Description:
              'Style an entire column so that it has a distinctive look.',
          },
          {
            Name: 'Flashing Cell',
            Link: '/style/aggridflashingcelldemo',
            Description:
              'Have cells flash briefly when their contents change (using colours and duration you specify).',
          },
          {
            Name: 'Updated Rows',
            Link: '/style/aggridupdatedrowsdemo',
            Description:
              'Colour (and jump to) rows as they update so you can see which rows have changed.',
          },
          {
            Name: 'Percent Bar',
            Link: '/style/aggridpercentbardemo',
            Description:
              'Show numeric columns as a bar, that is filled according to the cell value as a %.',
          },
          {
            Name: 'Row Style',
            Link: '/style/aggridrowstyledemo',
            Description:
              'Choose to style rows in the Adaptable Blotter using your preferred colour scheme.',
          },
        ],
      },
      {
        CategoryName: 'Theming',
        Link: '/theme',
        Pages: [
          {
            Name: 'Dark Theme',
            Link: '/theme/aggriddarkthemedemo',
            Description:
              'See the Adaptable Blotter using the shipped Dark Theme. When you use this theme the Adaptable Blotter will automatically update the underlying vendor grid to match.',
          },
          {
            Name: 'Custom Theme',
            Link: '/theme/aggridcustomthemedemo',
            Description:
              'See the Adaptable Blotter using a custom theme (based on Wimbledon tennis colours).',
          },
          {
            Name: 'Custom Icons',
            Link: '/theme/aggridcustomicondemo',
            Description:
              'You can provide your own icons to the Adaptable Blotter to use in place of the defaults - this demo shows how.',
          },
        ],
      },
      {
        CategoryName: 'Columns',
        Link: '/column',
        Pages: [
          {
            Name: 'Calculated Column',
            Link: '/column/aggridcalculatedcolumndemo',
            Description:
              'Create your own custom columns where the value is derived based on other columns in the Grid.  Use an Expression so that the value is evaluated dynamically.',
          },
          {
            Name: 'Free Text Column',
            Link: '/column/aggridfreetextcolumndemo',
            Description:
              'Create your own column where you can insert your own values (e.g. comments) that are stored separately from the Data Source.',
          },
          {
            Name: 'Column Category Demo',
            Link: '/column/aggridcolumncategorydemo',
            Description:
              'Group columns together logically to help you to manipulate grids with very large numbers of columns.',
          },
          {
            Name: 'Column Info Demo',
            Link: '/column/aggridcolumninfodemo',
            Description:
              'Find out all the objects associated with a column with a single lookup.',
          },
          {
            Name: 'Action Column',
            Link: '/column/aggridactioncolumnsdemo',
            Description:
              'Specify a column with a button (that you can render) and listen to the clicked event to perform any logic you reqiure.',
          },
          {
            Name: 'Sparkline Column',
            Link: '/column/aggridsparklinecolumnsdemo',
            Description:
              'Visualise columns that contain a range / array of numeric cells by using a Sparkline.',
          },
        ],
      },
      {
        CategoryName: 'Charts',
        Link: '/charts',
        Pages: [
          {
            Name: 'Category Charts',
            Link: '/charts/aggridcategorychartsdemo',
            Description:
              'Create standard, saveable, bar or line charts, with many different visualation options.',
          },
          {
            Name: 'Pie Charts',
            Link: '/charts/aggridpiechartsdemo',
            Description:
              'Create a saveable Pie (or doughnut) Chart.  It contains the ability to group data if you have multiple values.',
          },
          {
            Name: 'Pie Charts (Column)',
            Link: '/charts/aggridpiechartscolumndemo',
            Description:
              'Select a column (or cells within a column) and see it as a pie chart',
          },
        ],
      },
      {
        CategoryName: 'Grid Management',
        Link: '/gridmanagement',
        Pages: [
          {
            Name: 'Custom Sort',
            Link: '/gridmanagement/aggridcustomsortdemo',
            Description:
              'Create your own sort orders for columns (e.g. Ratings, Tenors, Sectors) where the default alphabetical sort doesnt make sense.',
          },
          {
            Name: 'Export',
            Link: '/gridmanagement/aggridexportdemo',
            Description:
              'Send grid data to a number of destinations using System or Custom reports and schedule them if you would like.',
          },
          {
            Name: 'Layout',
            Link: '/gridmanagement/aggridlayoutdemo',
            Description:
              'Create views (column grouping, visibility, order, sorts) so you can see the subset of columns you need at the click of a button.',
          },
          {
            Name: 'Cell Summary',
            Link: '/gridmanagement/aggridcellsummarydemo',
            Description:
              'See the summarised contents of groups of numeric cells using many different mathematical operations.',
          },
          {
            Name: 'Grid Info',
            Link: '/gridmanagement/aggridgridinfodemo',
            Description:
              'Click in the "info" button in the Home Toolbar to see summary information about the grid, your licence and the Options you have set.',
          },
          {
            Name: 'Calendar',
            Link: '/gridmanagement/aggridcalendardemo',
            Description:
              'Select which Holiday Calendar you wish the Adaptable Blotter to use when calculating Working Days (in Filters, Queries etc).',
          },
        ],
      },
      {
        CategoryName: 'Alerts & Messages',
        Link: '/alertsmessages',
        Pages: [
          {
            Name: 'Alert',
            Link: '/alertsmessages/aggridalertdemo',
            Description:
              'Be notified as soon as data changes that you need to know about.',
          },
          {
            Name: 'Reminder',
            Link: '/alertsmessages/aggridreminderdemo',
            Description:
              'Set up scheduled notifications so you can be reminded of important actions.',
          },
          {
            Name: 'System Status',
            Link: '/alertsmessages/aggridsystemstatusdemo',
            Description:
              'Have your users be notified automatically when something happens to the System (or Server) that they need to know.',
          },
        ],
      },
      {
        CategoryName: 'Dashboard',
        Link: '/dashboard',
        Pages: [
          {
            Name: 'Toolbars',
            Link: '/dashboard/aggriddashboardtoolbarsdemo',
            Description:
              'The Adaptable Blotter provides a number of Toolbars to provide easy access to functions. You can choose which ones you want in the Dashbboard',
          },
          {
            Name: 'Buttons',
            Link: '/dashboard/aggriddashboardbuttonsdemo',
            Description:
              'You can select which buttons - and dropdowns -you wish to see in the Home Toolbar',
          },
          {
            Name: 'Dashboard Visbility',
            Link: '/dashboard/aggriddashboardvisibilitydemo',
            Description:
              'Select whether the Dasbhoard is visible, minimised (so only a button is shown) or hidden altogether.',
          },
          {
            Name: 'Application Toolbar',
            Link: '/dashboard/aggriddashboardapplicationtoolbardemo',
            Description:
              'Use the Application Toolbar to render your own content in the Dashboard or to provide buttons (which when clicked trigger an Event that you can listen to).',
          },
        ],
      },
      {
        CategoryName: 'Partners',
        Link: '/partners',
        Pages: [
          {
            Name: 'Finsemble',
            Link: '/partners/finsembledemo',
            Description:
              'We leverage the powerful offering to enable multiple Blotter to share state, data and events.',
          },
          {
            Name: 'iPushPull',
            Link: '/partners/ipushpulldemo',
            Description:
              'Export Blotter data to Excel (with Live Updates) or Symphony and elsewhere by using the services of our partner iPushPull.',
          },
          {
            Name: 'OpenFin',
            Link: '/partners/openfindemo',
            Description:
              'If you are using this popular container we offer "Live Updates" so that data exported to Excel updates in real time as the Blotter ticks or is edited.',
          },
        ],
      },
      {
        CategoryName: 'Admin',
        Link: '/admin',
        Pages: [
          {
            Name: 'Entitlements',
            Link: '/admin/aggridentitlementsdemo',
            Description: 'Manage which functions your users have access to.',
          },
          {
            Name: 'Audit Log',
            Link: '/admin/aggridauditdemo',
            Description:
              'Every data change, user action, state change and function action is auditable and availalbe for you to listen to in a number of ways, making support a breeze and enabling data playback.',
          },
          {
            Name: 'Blotter API',
            Link: '/admin/aggridblotterapidemo',
            Description:
              'Access the Adaptable Blotter functionality and state through the Blotter API which contains hundreds of functions giving full programmatic access to everything the Adaptable Blotter provides.',
          },
          {
            Name: 'Big Data',
            Link: '/admin/aggridbigdatademo',
            Description:
              'See the Adaptable Blotter (and ag-Grid) with 100,000 rows of client side data.',
          },
          {
            Name: 'Data Source Changes',
            Link: '/admin/aggriddatasourcechangesdemo',
            Description:
              'Any changes made to the data source to the underlying DataGrid (in this example ag-Grid) is automatically reflected in the Adaptable Blotter and it will be picked up by all relevant functions.',
          },
          {
            Name: 'No Code',
            Link: '/admin/aggridnocodedemo',
            Description:
              'The no code version allows you to create an Adaptable Blotter at runtime from any JSON or Excel file that you give it. Immediately you will have an Adaptable Blotter with all the rich functions it contains including advanced functionality like state management and full audit.',
          },
        ],
      },
      {
        CategoryName: 'ag-Grid Features',
        Link: '/aggridfeatures',
        Pages: [
          {
            Name: 'Row Grouping',
            Link: '/aggridfeatures/aggridrowgroupingdemo',
            Description:
              'The Adaptable Blotter works fully when the ag-Grid column row grouping functionality is applied.',
          },
          {
            Name: 'Column Grouping',
            Link: '/aggridfeatures/aggridcolumngroupingdemo',
            Description:
              'The Adaptable Blotter works fully when the ag-Grid column banding (grouping) functionality is applied.',
          },
          {
            Name: 'Pivoting',
            Link: '/aggridfeatures/aggridpivotingdemo',
            Description:
              'The Adaptable Blotter enables you to create layouts that take pivoting into account.',
          },
          {
            Name: 'Master Detail',
            Link: '/aggridfeatures/aggridmasterdetaildemo',
            Description:
              'The Adaptable Blotter supports Master / Detail grids where the underlying vendor grid offers it.',
          },
          {
            Name: 'Row Selection',
            Link: '/aggridfeatures/aggridrowselectiondemo',
            Description:
              'The Adaptable Blotter fires an event each time the cell or row selection changes. This includes full detials of the cells and rows selected.',
          },
        ],
      },
      {
        CategoryName: 'Blotter Options',
        Link: '/blotteroptions',
        Pages: [
          {
            Name: 'Ignore Case in Queries',
            Link: '/blotteroptions/aggridignorecasequeriesdemo',
            Description:
              'By default case is ignored when running queries against string columns but you can change this behaviour.',
          },
          {
            Name: 'Vendor Grid Filters',
            Link: '/blotteroptions/aggridvendorgridfiltersdemo',
            Description:
              'You can use the agGrid Floating Filter and Filter Form if you wish instead of the Adaptable Blotter Quick Filter and Filter Form respectively.',
          },
          {
            Name: 'Auto Apply Filters',
            Link: '/blotteroptions/aggridautoapplyfiltersdemo',
            Description:
              'In Column Filters the default is to filter each time a value in the dropdown is clicked. But if you prefer, you can apply the filters only after an "Apply" button is clicked (useful if doing server side filtering).',
          },
        ],
      },
      {
        CategoryName: 'Column Lookups',
        Link: '/lookups',
        Pages: [
          {
            Name: 'Max Items Displayed',
            Link: '/lookups/aggridmaxitemsqueriesdemo',
            Description:
              'Set the maximum number of distinct column values to show in column lookups and the Query Builder.',
          },
          {
            Name: 'Server Lookups',
            Link: '/lookups/aggridserverlookupsdemo',
            Description:
              'Provide the Adaptable Blotter dynamically with the list of values to be displayed each time distinct cell values are required.',
          },
          {
            Name: 'Permitted Values',
            Link: '/lookups/aggridpermittedvaluesdemo',
            Description:
              'Provide a list of column names and a list of values which should be displayed when getting distinct values for that column.',
          },
        ],
      },
    ],
  };
  return pageStructure;
}
