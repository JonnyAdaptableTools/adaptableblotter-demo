import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['Reminder'],
  },
  Reminder: {
    Reminders: [
      {
        Alert: {
          Header: "Run 'All Data' Report",
          Msg: "Run the 'All Data' report so MO have full view of activity",
          AlertDefinition: {
            MessageType: 'Warning',
            AlertProperties: {
              ShowPopup: true,
            },
          },
        },
        ScheduleType: 'Reminder',
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 17,
          Minute: 30,
        },
      },
    ],
  },
} as PredefinedConfig;
