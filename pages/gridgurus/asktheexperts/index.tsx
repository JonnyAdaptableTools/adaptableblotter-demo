import React from 'react';
import '../index.scss';
import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Ask The Experts</h4>
      </p>
      <p>
        In August 2020, we are providing a free service to the wider developer
        community, in which our Grid Gurus team will answer DataGrid-related
        questions.
      </p>
      <p>
        Please email{' '}
        <a href="mailto:support@adaptabletools.com">Adaptable Tools Support</a>{' '}
        with your question and we guarantee to send a full and personalised
        response within 48 hours.
      </p>
      <p>
        We have received a huge number of questions, and so we decided to
        display here some of those which we thought might be of general interest
        or benefit.
      </p>
      <h3>General Data Grid Questions</h3>
      <p className="gridGuruQuestion">
        <b>What is the best DataGrid on the market</b>
        <br />
        This is perhaps the most common question we receive and the only one we
        wont answer! <br />
        There are plenty of excellent DataGrids to choose from and each offer
        different benefits.
        <br />
        Having said that, its only fair to add that the overwhelming majority of
        AdapTable users combine it with ag-Grid, and the feedback we receive is
        that they are really happy with that DataGrid.
        <br />
        From our perspective, when using ag-Grid (which all the demos on this
        site do), we can readily see why it has such overwhelming market share.
      </p>
      <p className="gridGuruQuestion">
        <b>Should we filter on the Server or the Client?</b>
        <br />
        The short answer is that depends entirely on your requirements and is
        not something we can answer without knowing more about your particular
        use case. <br />
        But, as general advice: <b>only</b> do server searching and filtering if
        you really have to. <br />
        We are consulted by plently of clients who only have 100,000 (or fewer)
        rows in their dataset and yet made the decision to do server searching,
        with all the additional complexity that brings. <br />
        In our view that is mistaken; modern browsers are capable of easily
        managing datasets of that size and performing instantaneous filtering
        and sorting. <br />
        By all means, do use the server if you have to, but we would advise you
        first to check if you can do everything you need on the server, and only
        if you cannot then to enable server filtering.
      </p>
      <h3>ag-Grid Questions</h3>
      <p className="gridGuruQuestion">
        <b>
          We set <i>enableValue</i> to 'false' for a column but it still
          displays an aggregated value when grouping - we assumed setting this
          property would remove it?
        </b>
        <br />
        That is expected ag-Grid behaviour: <i>enableValue</i> (and{' '}
        <i>enablePivot</i> for pivoting and <i>enableRowGroup</i> for grouping)
        are <b>UI instructions</b>.<br />
        This means that if these are set to 'false', the User cannot change the
        behaviour at run-time (i.e. in your case, create a new aggregation or
        drop it into the 'Values' section in the Column sidebar).
        <br />
        However if the column's <i>ColDef</i> definition has the 'aggFunc'
        property already set (which we assume yours does) then it will still
        display that aggregated value in grouped rows.
      </p>{' '}
      <p className="gridGuruQuestion">
        <b>How do we always make the column menu icon appear?</b>
        <br />
        Set the <b>suppressMenuHide</b> property in GridOptions to <i>true.</i>
      </p>{' '}
      <p className="gridGuruQuestion">
        <b>Is it possible to show aggregated totals at the top of a group?</b>
        <br />
        Yes, you need to create a pinned row at the top of the grid and then
        each time the model's data updates, you should set that pinned row with
        the <i>aggData</i> from the model's <b>root node</b>
        <br />
        As it happens AdapTable can wrap this functionality for you via the{' '}
        <a href="https://docs.adaptabletools.com/docs/adaptable-options/general-options">
          showGroupingTotalsAsHeader
        </a>{' '}
        option property (as you can see in{' '}
        <a href="../aggridfeatures/aggridrowgroupingdemo">this demo</a>
        ).
      </p>
      <p className="gridGuruQuestion">
        <b>Should we use Master / Detail or Tree View?</b>
        <br />
        In our view it depends on your data structure. If the 'sub' rows are
        naturally related to the Master then a Tree View is best e.g. for
        showing directories and containing files, or a company structure
        <br />
        If they are linked conceptually but not intrinsically in your data set
        then Master / Detail is more suitable. <br />
        Be aware when making your choice, that a Tree View has additional
        restrictions, e.g. row groping are pivoting are not available.
      </p>
    </MainPage>
  );
};
