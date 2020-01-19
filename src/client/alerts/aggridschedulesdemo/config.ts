import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['Reminder', 'Schedule'],
    VisibleToolbars: ['QuickSearch', 'Export'],
  },
  Reminder: {
    Reminders: [
      {
        Alert: {
          Header: 'Update Invoices',
          Msg: 'Check all invoices are accurate',
          AlertDefinition: {
            MessageType: 'Warning',
            AlertProperties: {
              ShowPopup: true,
            },
          },
        },
        ScheduleType: 'Reminder',
        Schedule: {
          DaysOfWeek: [5],
          Hour: 17,
          Minute: 0,
        },
      },
    ],
  },
  Export: {
    CurrentReport: 'Current Orders',
    Reports: [
      {
        ColumnIds: [
          'OrderId',
          'ChangeLastOrder',
          'ContactName',
          'InvoicedCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'OrderDate',
        ],
        Name: 'Current Orders',
        ReportColumnScope: 'BespokeColumns',
        ReportRowScope: 'VisibleRows',
      },
    ],
    ReportSchedules: [
      {
        ScheduleType: 'Report',
        ReportName: 'Current Orders',
        ExportDestination: 'CSV',
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 12,
          Minute: 30,
        },
      },
    ],
  },
} as PredefinedConfig;
