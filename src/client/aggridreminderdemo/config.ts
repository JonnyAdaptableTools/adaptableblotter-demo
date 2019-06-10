export default {
  Dashboard: {
    VisibleButtons: ['Reminder'],
  },
  Reminder: {
    Reminders: [
      {
        Alert: {
          Header: "Run 'All Data' Report",
          MessageType: 'Info',
          Msg: "Run the 'All Data' report so MO have full view of activity",
          ShowAsPopup: true,
        },
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 17,
          Minute: 30,
          OneOffDate: null,
        },
      },
    ],
  },
};
