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
  const pageStructure: DemoPageStructure = {
    Categories: [
      {
        CategoryName: 'Getting Started',
        Link: '/gettingstarted',
        Pages: [
          {
            Name: 'Basic Set Up',
            Link: '/gettingstarted/aggridbasicsetupdemo',
            Description:
              'Showing how to create a basic instance of AdapTable using ag-Grid.',
          },
          {
            Name: 'Set Up Columns',
            Link: '/gettingstarted/aggridsetupcolumnsdemo',
            Description:
              'Showing how to set up columns in AdapTable and ag-Grid.',
          },
          {
            Name: 'No Config',
            Link: '/gettingstarted/aggridnoconfigdemo',
            Description:
              'An AdapTable instance with no Predefined Config supplied.  This is unlikely to be the case in a production scenario as you will pre-ship AdapTable with your objects.',
          },
          {
            Name: 'Delayed Data',
            Link: '/gettingstarted/aggriddelayeddatademo',
            Description:
              'Shows how (one of many ways) to set up AdapTable when your data comes into the grid after it has loaded.',
          },
        ],
      },

      {
        CategoryName: 'Searching',
        Link: '/search',
        Pages: [
          {
            Name: 'Quick Search',
            Link: '/search/aggridquicksearchdemo',
            Description:
              'Search across all columns using a simple text search (includes wildcards like ">").',
          },
          {
            Name: 'Current Query',
            Link: '/search/aggridcurrentquerydemo',
            Description: 'Set the current query to use at start up.',
          },
          {
            Name: 'Data Source Selector',
            Link: '/search/aggriddatasourcedemo',
            Description:
              'A list of Data Sources provided at run-time (e.g. books, stored procs); when one is selected an event is fired that you can listen to and then populate AdapTable with data via the API.',
          },
        ],
      },
      {
        CategoryName: 'Filtering',
        Link: '/filters',
        Pages: [
          {
            Name: 'Quick Filter Bar',
            Link: '/filters/aggridquickfilterdemo',
            Description:
              'A textbox below the Column Header that allows you to quickly search in a column (includes wildcards like ">").',
          },
          {
            Name: 'Column Filters',
            Link: '/filters/aggridcolumnfiltersdemo',
            Description:
              'A filter panel available as a dropdown from the Column Header which allows you to filter the column using a "Predicate".',
          },
          /*
          {
            Name: 'User Filters',
            Link: '/filters/aggriduserfiltersdemo',
            Description:
              'Column Filters which have been named and saved and so are usable across multiple functions that use queries (like Conditional Styles or Reports).',
          },
          */
          {
            Name: 'Custom Predicates',
            Link: '/filters/aggridcustompredicatesdemo',
            Description:
              'Customs Filters are "Predicate Functions" provided by users at design-time with a scope that determines where and when the Predicate is applied.',
          },
          {
            Name: 'System Filters',
            Link: '/filters/aggridsystemfiltersdemo',
            Description:
              'System Filters are those provided by AdapTable (e.g. "Blanks", "Yeserday", "Positive"); you can choose which - if any - of these are available.',
          },
        ],
      },
      {
        CategoryName: 'Editing',
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
            Name: 'Plus / Minus',
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
            Name: 'Gradient Column',
            Link: '/style/aggridgradientcolumndemo',
            Description:
              'Style a column so that each cell is shaded in proportion of its value to that of the maximum value.',
          },
          {
            Name: 'Flashing Cell',
            Link: '/style/aggridflashingcelldemo',
            Description:
              'Have cells flash briefly when their contents change (using colours and duration you specify).',
          },
          {
            Name: 'Updated Row',
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
              'Choose to style rows in AdapTable using your preferred colour scheme.',
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
              'See AdapTable using the shipped Dark Theme. When you use this theme AdapTable will automatically update the underlying vendor grid to match.',
          },
          {
            Name: 'Custom Theme',
            Link: '/theme/aggridcustomthemedemo',
            Description:
              'See AdapTable using a custom theme (based on Wimbledon tennis colours).',
          },
          {
            Name: 'Custom Icons',
            Link: '/theme/aggridcustomicondemo',
            Description:
              'You can provide your own icons to AdapTable to use in place of the defaults - this demo shows how.',
          },
          {
            Name: 'Alpine Theme',
            Link: '/theme/aggridalpinethemedemo',
            Description:
              'Showing ag-Grid (in AdapTable)  with the new Alpine theme introduced in Version 23.',
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
            Name: 'Financial Charts',
            Link: '/charts/aggridfinancialchartsdemo',
            Description: 'Create financial charts',
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
              'Select a column (or cells within a column) and see it as a Pie Chart',
          },
          {
            Name: 'Sparkline Charts',
            Link: '/charts/aggridsparklinechartsdemo',
            Description:
              'Create a saveable SparkLine chart, which will show data as a series of points or graphs',
          },
          {
            Name: 'Sparkline (Column)',
            Link: '/charts/aggridsparklinecolumndemo',
            Description:
              'Select a column (or cells within a column) and see it as a Sparkline Chart',
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
            Name: 'Cell Summary',
            Link: '/gridmanagement/aggridcellsummarydemo',
            Description:
              'See the summarised contents of groups of numeric cells using many different mathematical operations.',
          },
          {
            Name: 'Grid Info',
            Link: '/gridmanagement/aggridgridinfodemo',
            Description:
              'Click the "info" button in the Dashboard Header to see summary information about the grid and the Adaptable Options you have set.',
          },
          /*
          {
            Name: 'Context Menu',
            Link: '/gridmanagement/aggridcontextmenudemo',
            Description:
              'You can choose which items will appear in the Context Menu and additionally add your own.',
          },
          */
          {
            Name: 'Calendar',
            Link: '/gridmanagement/aggridcalendardemo',
            Description:
              'Select which Holiday Calendar you wish AdapTable to use when calculating Working Days (in Filters, Queries etc).',
          },
        ],
      },
      {
        CategoryName: 'Export',
        Link: '/export',
        Pages: [
          {
            Name: 'System Reports',
            Link: '/export/aggridsystemreportsdemo',
            Description:
              'Send grid data to a number of destinations using System Reports e.g. All Data, Visible Data or Selected Rows.',
          },
          {
            Name: 'User Reports',
            Link: '/export/aggriduserreportsdemo',
            Description:
              'Create bespoke reports either at design time or run time that will include a query to retrieve the data to export each time the report run.',
          },
          {
            Name: 'Custom Reports',
            Link: '/export/aggridcustomreportsdemo',
            Description:
              'Custom Reports are created only at design-time and can include columns and data not in the grid, and are run using a custom function.',
          },
          {
            Name: 'Custom Destination',
            Link: '/export/aggridcustomdestinationdemo',
            Description:
              'Send a report to the destination of your choice - by providing a function which AdapTable will call when the report is ready to send.',
          },
        ],
      },
      {
        CategoryName: 'Layout',
        Link: '/layout',
        Pages: [
          {
            Name: 'Basic Layout',
            Link: '/layout/aggridbasiclayoutdemo',
            Description:
              'A basic Layout(i.e. set of column grouping, visibility, order, sorts) so you can see the subset of columns you need at the click of a button.',
          },
          {
            Name: 'Grouped Layout',
            Link: '/layout/aggridgroupedlayoutdemo',
            Description:
              'Grouped Layouts can be created which include row grouping details',
          },
          {
            Name: 'Pivot Layout',
            Link: '/layout/aggridpivotlayoutdemo',
            Description:
              'A pivot layout defines how the grid should look in "Pivot Mode", i.e. which columns are pivoted, grouped and aggregated.',
          },
          {
            Name: 'Auto Save Layout',
            Link: '/layout/aggridautosavelayoutdemo',
            Description:
              'Layouts can be saved automatically whenever anything changes',
          },
          {
            Name: 'Column Widths',
            Link: '/layout/aggridcolumnwidthslayoutdemo',
            Description:
              'Provide column width information to Layout definition; and they will also be automatically saved by AdapTable',
          },
          {
            Name: 'Pinned Columns',
            Link: '/layout/aggridpinnedcolumslayoutdemo',
            Description:
              'You can define pinned columns as part of your Layout config',
          },
          {
            Name: 'Advanced Layouts',
            Link: '/layout/aggridadvancedlayoutdemo',
            Description:
              'A more advanced set of different types of Layouts (e.g. Sorted, Pivoted, Grouped etc)',
          },
        ],
      },
      {
        CategoryName: 'Alerts & Messages',
        Link: '/alertsmessages',
        Pages: [
          {
            Name: 'System Status',
            Link: '/alertsmessages/aggridsystemstatusdemo',
            Description:
              'Have your users be notified automatically when something happens to the System (or Server) that they need to know.',
          },
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
            Name: 'Schedules',
            Link: '/alertsmessages/aggridschedulesdemo',
            Description:
              'Create schedules for Reminders, Exports and Live Data Reports',
          },
        ],
      },
      {
        CategoryName: 'Dashboard',
        Link: '/dashboard',
        Pages: [
          {
            Name: 'Dashboard Tabs',
            Link: '/dashboard/aggriddashboardtabsdemo',
            Description:
              'AdapTable provides a number of Toolbars to provide easy access to functions. You can put these into Tabs that you create.',
          },
          {
            Name: 'Floating Dashboard',
            Link: '/dashboard/aggriddashboardfloatingdemo',
            Description:
              'Save screen estate by making the Dashboard "float" when not in use',
          },
          {
            Name: 'Function Buttons',
            Link: '/dashboard/aggriddashboardbuttonsdemo',
            Description:
              'You can select which Function Buttons you wish to see in the Dashboard Header',
          },
          {
            Name: 'Dashboard Visibility',
            Link: '/dashboard/aggriddashboardvisibilitydemo',
            Description:
              'Select whether the Dasbhoard is visible, minimised (so only a button is shown) or hidden altogether.',
          },
          {
            Name: 'Custom Toolbars',
            Link: '/dashboard/aggriddashboardcustomtoolbarsdemo',
            Description:
              'Use Custom Toolbars to render your own content in the Dashboard or to provide buttons (which when clicked trigger an Event that you can listen to).',
          },
          {
            Name: 'Custom Buttons',
            Link: '/dashboard/aggriddashboardcustombuttonsdemo',
            Description:
              'Add Custom Buttons to the Dashboard (which when clicked trigger an Event that you can listen to).',
          },
          {
            Name: 'Dashboard Title',
            Link: '/dashboard/aggriddashboardtitledemo',
            Description: 'Set the title of the Dashboard header.',
          },
          {
            Name: 'Dashboard Inline',
            Link: '/dashboard/aggriddashboardinlinedemo',
            Description: 'Set the Dashboard in "Expanded" view to be inline.',
          },
        ],
      },
      {
        CategoryName: 'Tool Panel',
        Link: '/toolpanel',
        Pages: [
          {
            Name: 'Adaptable Tool Panel',
            Link: '/toolpanel/aggridtoolpaneldemo',
            Description:
              'Use the Adaptable Tool Panel as a Dashboard alternative for quick access to commonly used functions and screens',
          },
          {
            Name: 'Tool Panel Name',
            Link: '/toolpanel/aggridtoolpanelnamedemo',
            Description: 'Set your own name for the Tool Panel',
          },
        ],
      },
      {
        CategoryName: 'Menus',
        Link: '/menus',
        Pages: [
          {
            Name: 'Column Menu',
            Link: '/menus/aggridcolumnmenudemo',
            Description:
              'Add your custom menu items to the Column Header Menu (and also choose with shipped items are available)',
          },
          {
            Name: 'Context Menu',
            Link: '/menus/aggridcontextmenudemo',
            Description:
              'Add your custom menu items to the (right-click) Context Menu (and choose with shipped items are available)',
          },
        ],
      },
      {
        CategoryName: 'Audit Log',
        Link: '/auditlog',
        Pages: [
          {
            Name: 'Audit to Channel',
            Link: '/auditlog/aggridauditchanneldemo',
            Description:
              'Sends all Audit Log messages to an Http Channel so you can hook it up to listening software like Elastic Stack for full oversight of everything that takes place in AdapTable.',
          },
          {
            Name: 'Audit to Console',
            Link: '/auditlog/aggridauditconsoledemo',
            Description:
              'Sends all Audit Log messages to the Console - particularly useful for Support or for when debugging.',
          },
          {
            Name: 'Audit as Event',
            Link: '/auditlog/aggridauditeventdemo',
            Description:
              'Publishes an event whenever an Audit Log message is triggered - you can listen to Audit Events the same way as for all AdapTable events.',
          },
          {
            Name: 'Audit as Alert',
            Link: '/auditlog/aggridauditalertdemo',
            Description:
              'Fires an AdapTable Alert whenever an Audit Log message is triggered - ideally used for more occasional scenarios (e.g. the Function Applied Audit type).',
          },
        ],
      },
      {
        CategoryName: 'Admin',
        Link: '/admin',
        Pages: [
          {
            Name: 'Adaptable API',
            Link: '/admin/aggridblotterapidemo',
            Description:
              'Access AdapTable functionality and state through the Adaptable API which contains hundreds of functions giving full programmatic access to everything AdapTable provides.',
          },
          {
            Name: 'Big Data',
            Link: '/admin/aggridbigdatademo',
            Description:
              'See AdapTable (and ag-Grid) with 100,000 rows of client side data.',
          },
          {
            Name: 'Changing Data',
            Link: '/admin/aggriddatasourcechangesdemo',
            Description:
              'Any changes made to the data source to the underlying DataGrid (in this example ag-Grid) is automatically reflected in AdapTable and it will be picked up by all relevant functions.',
          },
          {
            Name: 'Batch Data',
            Link: '/admin/aggridbatchdatademo',
            Description:
              'This demo shows how you can update data in transactional batches to improve update performance',
          },

          {
            Name: 'No Code',
            Link: '/admin/aggridnocodedemo',
            Description:
              'Create an AdapTable instance dynamically from a JSON or Excel file that you provide; your AdapTable instance will include the full range of functions and all the advanced functionality like state management and audit.',
          },
          {
            Name: 'Team Sharing',
            Link: '/admin/aggridteamsharingdemo',
            Description:
              'Dynamically share Adaptable Objects you create at run-time with other team members and colleagues.',
          },
          {
            Name: 'Hot Keys',
            Link: '/admin/aggridhotkeysdemo',
            Description:
              'Set up "Hot Keys" to open Adaptable Functions and windows with bespoke key combinations',
          },
          {
            Name: 'Performance',
            Link: '/admin/aggridperformancedemo',
            Description:
              'Test the performance of AdapTable with fast updates and lots of changes',
          },
        ],
      },
      {
        CategoryName: 'Entitlements',
        Link: '/entitlements',
        Pages: [
          {
            Name: 'Entitlements: List',
            Link: '/entitlements/aggridentitlementslistdemo',
            Description:
              'Provide a list at in Predefined Config specifying which functions Users are permissioned for.',
          },
          {
            Name: 'Entitlements: Func',
            Link: '/entitlements/aggridentitlementsfunctiondemo',
            Description:
              'Supply a function (that can use external lookups or systems) which will be run each time an Entitlement is required.',
          },
          {
            Name: 'Entitlements: Default',
            Link: '/entitlements/aggridentitlementsdefaultdemo',
            Description:
              'Set a default Entitlement Access Level to be used if not Entitlement is explicitly provided.',
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
              'AdapTable works fully when the ag-Grid column row grouping functionality is applied.',
          },
          {
            Name: 'Column Grouping',
            Link: '/aggridfeatures/aggridcolumngroupingdemo',
            Description:
              'AdapTable works fully when the ag-Grid column banding (grouping) functionality is applied.',
          },
          {
            Name: 'Pivoting',
            Link: '/aggridfeatures/aggridpivotingdemo',
            Description:
              'AdapTable enables you to create layouts that take pivoting into account.',
          },
          {
            Name: 'Master Detail',
            Link: '/aggridfeatures/aggridmasterdetaildemo',
            Description:
              'AdapTable supports Master / Detail grids where the underlying vendor grid offers it.',
          },
          {
            Name: 'Tree Data View',
            Link: '/aggridfeatures/aggridtreegriddemo',
            Description:
              'AdapTable supports ag-Grid Tree Views with all standard filtering and styling functionality included.',
          },
          {
            Name: 'Row Selection',
            Link: '/aggridfeatures/aggridrowselectiondemo',
            Description:
              'AdapTable fires an event each time the cell or row selection changes. This includes full detials of the cells and rows selected.',
          },
          {
            Name: 'Fixed Column',
            Link: '/aggridfeatures/aggridfixedcolumndemo',
            Description: 'Create some columns to be fixed in place',
          },
          {
            Name: 'Community Version',
            Link: '/aggridfeatures/aggridcommunityversiondemo',
            Description:
              'Running AdapTable only using the ag-Grid Community version',
          },
          {
            Name: 'Server Row Model',
            Link: '/aggridfeatures/aggridservermodedemo',
            Description:
              'How to run AdapTable when ag-Grid is using the Server Row Model - and to perform filtering yourself.',
          },
        ],
      },
      {
        CategoryName: 'AdaptableState',
        Link: '/adaptablestate',
        Pages: [
          {
            Name: 'Predefined Config',
            Link: '/adaptablestate/aggridpredefinedconfigdemo',
            Description:
              'An AdapTable instance with lots of different Predefined Config elements supplied.',
          },
          {
            Name: 'State Functions',
            Link: '/adaptablestate/aggridstatefunctionsdemo',
            Description:
              'A group of functions which allow developers complete control over how and where User State is stored.',
          },
          {
            Name: 'Application Data',
            Link: '/adaptablestate/aggridapplicationdataentriesdemo',
            Description:
              'Store bespoke information in Adaptable State as Key / Value pairs.',
          },
          {
            Name: 'Multiple Views',
            Link: '/adaptablestate/adaptablestatekeyusage',
            Description:
              'Leverage the "adaptableStateKey" property in AdaptableOptions to enable multiple, named, views or your Adaptable State.',
          },
        ],
      },
      {
        CategoryName: 'Adaptable Options',
        Link: '/adaptableoptions',
        Pages: [
          {
            Name: 'Ignore Case in Queries',
            Link: '/adaptableoptions/aggridignorecasequeriesdemo',
            Description:
              'By default case is ignored when running queries against string columns but you can change this behaviour',
          },
          {
            Name: 'Vendor Grid Filters',
            Link: '/adaptableoptions/aggridvendorgridfiltersdemo',
            Description:
              'You can use the agGrid Floating Filter and Filter Form if you wish instead of AdapTable Quick Filter and Filter Form respectively',
          },
          {
            Name: 'Auto Apply Filters',
            Link: '/adaptableoptions/aggridautoapplyfiltersdemo',
            Description:
              'In Column Filters the default is to filter each time a value in the dropdown is clicked. But if you prefer, you can apply the filters only after an "Apply" button is clicked (useful if doing server side filtering).',
          },
          {
            Name: 'Quick Search Columns',
            Link: '/adaptableoptions/aggridexcludecolumnsfromquicksearchdemo',
            Description:
              'Provide a function which will specify if some columns should be excluded from Quick Search results.',
          },
          {
            Name: 'Mac Like Scrollbars',
            Link: '/adaptableoptions/aggridmaclikescrollbars',
            Description:
              'When running AdapTable on Windows make the scrollbars appear much thinner (as on a Mac).',
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
              'Set the maximum number of distinct column values to show in column lookups and the Query Builder',
          },
          /*
          {
            Name: 'Server Lookups',
            Link: '/lookups/aggridserverlookupsdemo',
            Description:
              'Provide AdapTable dynamically with the list of values to be displayed each time distinct cell values are required',
          },
          */
          {
            Name: 'Permitted Values',
            Link: '/lookups/aggridpermittedvaluesdemo',
            Description:
              'Provide a list of column names and a list of values which should be displayed when getting distinct values for that column',
          },
        ],
      },
      {
        CategoryName: 'Events',
        Link: '/events',
        Pages: [
          {
            Name: 'Adaptable Ready',
            Link: '/events/adaptablereadyeventdemo',
            Description:
              'Event that fires as soon as Adaptable has completed its initialisation',
          },
          {
            Name: 'Search Changed',
            Link: '/events/searchchangedeventdemo',
            Description:
              'Event that fires whenever any of state elements in the Search or Filter related functions change',
          },
        ],
      },

      {
        CategoryName: 'Partners',
        Link: '/partners',
        Pages: [
          {
            Name: 'ipushpull',
            Link: '/partners/ipushpulldemo',
            Description:
              'Export AdapTable data to Excel (with Live Updates) or Symphony and elsewhere by using the services of our partner ipushpull',
          },
          {
            Name: 'Glue42',
            Link: '/partners/glue42demo',
            Description:
              'AdapTable integrates very closely with Glue42 so that your Grids and Blotters communicate with other widgets including Excel (with 2-way validated updates).',
          },
          {
            Name: 'OpenFin',
            Link: '/partners/openfindemo',
            Description:
              'If you are using this popular container we offer "Live Updates" so that data exported to Excel updates in real time as AdapTable data ticks or is edited',
          },
          {
            Name: 'Finsemble',
            Link: '/partners/finsembledemo',
            Description:
              'We leverage the powerful offering to enable multiple AdapTable instances to share state, data and events',
          },
          {
            Name: 'Cyoda',
            Link: '/partners/cyodademo',
            Description:
              'Use Cyoda as a server-side solution if you want to run AdapTable on large volumes of back end data',
          },
        ],
      },
      {
        CategoryName: 'GridGurus',
        Link: '/gridgurus',
        Pages: [
          {
            Name: 'Ask the Experts',
            Link: '/gridgurus/asktheexperts',
            Description:
              'At Grid Gurus we receive lots of DataGrid related questions - here we list some which we think others will find of interest',
          },
        ],
      },
    ],
  };
  return pageStructure;
}
