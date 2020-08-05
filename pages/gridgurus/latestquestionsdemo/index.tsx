import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Grid Gurus Latest Questions</h4>
      </p>
      <p>
        In August 2020, we are offering a free{' '}
        <b>DataGrid-related Q & A service</b> to the wider developer community.
      </p>
      <p>
        So please email{' '}
        <a href="mailto:support@adaptabletools.com">Adaptable Tools Support</a>{' '}
        with your question and we guarantee to send an answer within 72 hours.
      </p>
      <p>
        We have already received a huge number of questions, and we show here
        some of those which we think may of general interest or benefit.
      </p>
      <h3>General Data Grid Questions</h3>
      <p>
        <b>What is the best DataGrid on the market</b>
        <br />
        This is perhaps our most common question and the only one we wont
        answer! <br />
        There are plenty of excellent DataGrids to choose from and each offer
        different benefits.
        <br />
        Having said that, its true to say that the overwhelming majority of
        AdapTable users combine it with ag-Grid and from what we hear they are
        really happy with that DataGrid, and we can see why it has such
        overwhelming market share. All the demos in this site use ag-Grid for
        that reason.
      </p>
      <p>
        <b>Should we filter on the Server or the Client?</b>
        <br />
        The short answer is that depends entirely on your requirements. <br />
        What we would say is that <b>only</b> do server searching and filtering
        if you have to. We see plently of clients who only have 100,000 (or
        fewer) rows in their dataset and yet made the decision to do server
        searching, with all the additional complexity that brings. <br />
        In our view that is mistaken; modern browsers like Chrome are capable to
        easily managing datasets of that size and performing instantaneous
        filtering and sorting. So do use the server if you have to, but we would
        advise you first to check if you can do everything you need on the
        server, and only if you cannot then do enable server filtering.
      </p>
      <h3>ag-Grid Questions</h3>
      <p>
        <b>Is it possible to show aggregated totals at the top of a group?</b>
        <br />
        Yes, you need to create a pinned row at the top of the grid and then
        each time the model's data updates, you should set that pinned row with
        the <i>aggData</i> from the model's <b>root node</b>
        <br />
        As it happens AdapTable will wrap this functionality for you via the{' '}
        <a href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_generaloptions_.generaloptions.html#showgroupingtotalsasheader">
          showGroupingTotalsAsHeader
        </a>{' '}
        property (as you can see in{' '}
        <a href="../aggridfeatures/aggridrowgroupingdemo">this demo</a>
        ).
      </p>
      <p>
        <b>How do we always make the column menu icon appear?</b>
        <br />
        Set the <b>suppressMenuHide</b> property in GridOptions to <i>true.</i>
      </p>
      <p>
        <b>Should we use Master / Detail or Tree View?</b>
        <br />
        In our view it depends on your data structure. If the 'sub' rows are
        naturally related to the Master then a Tree View is best e.g. for
        showing directories and containing files, or a company structure
        <br />
        If they are linked conceptually but not intrinsically in your data set
        then Master / Detail is more suitable. <br />
        Note also that in a Tree View, row groping are pivoting are not
        available.
      </p>
    </MainPage>
  );
};
