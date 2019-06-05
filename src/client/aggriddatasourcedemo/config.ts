export default {
  DataSource: {
    DataSources: [
      {
        Name: 'Book 1',
        Description: 'First Book to use',
      },
      {
        Name: 'Book 2',
        Description: 'Second Book to use',
      },
      {
        Name: 'Stored Proc 1',
        Description: 'First Stored Proc to use',
      },
      {
        Name: 'Stored Proc 2',
        Description: 'Second Stored Proc to use',
      },
    ],
    CurrentDataSource: 'Book 1',
  },
  Dashboard: {
    VisibleToolbars: ['DataSource'],
  },
};
