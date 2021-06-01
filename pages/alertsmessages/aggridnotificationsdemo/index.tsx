import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridnotificationsdemo')}
      pageTitle={'Notifications Demo'}
      description={
        <div>
          <p>
            There are many options provided in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
              target="_blank"
            >
              Alert Options
            </a>{' '}
            to control how the Toast-style Notification will look.
          </p>
          <p>
            In this demo we have set up the Notifications with these properties:
            <ul>
              <li>
                <b>position</b>: BottomRight
              </li>
              <li>
                <b>duration</b>: 10000
              </li>
              <li>
                <b>showProgressBar</b>: true
              </li>
              <li>
                <b>closeWhenClicked</b>: true
              </li>
              <li>
                <b>pauseWhenHovering</b>:true
              </li>
              <li>
                <b>isDraggable</b>: false
              </li>
              <li>
                <b>transition</b>: Flip
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alert Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Expressions
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
            target="_blank"
          >
            Alert Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
            target="_blank"
          >
            Alert Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert API
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/alert-fired-event"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
