export default {
  Dashboard: {
    VisibleToolbars: ['Application', 'SystemStatus'],
  },

  SystemStatus: {
    ShowAlert: false,
    DefaultStatusMessage: 'Everything is fine (default)',
    DefaultStatusType: 'Success',
    StatusMessage: 'Possible problem on server',
    StatusType: 'Warning',
  },
  Application: {
    ApplicationToolbarButtons: [
      {
        Name: 'info',
        Caption: 'Info',
        Variant: 'text',
      },
      {
        Name: 'success',
        Caption: 'Success',
        Variant: 'text',
      },
      {
        Name: 'warning',
        Caption: 'Warning',
        Variant: 'text',
      },
      {
        Name: 'error',
        Caption: 'Error',
        Variant: 'text',
      },
      {
        Name: 'clear',
        Caption: 'Clear',
        Variant: 'raised',
      },
    ],
  },
};
