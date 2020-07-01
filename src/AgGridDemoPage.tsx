import React, { useEffect, useState, ReactNode } from 'react';
import copy from 'copy-to-clipboard';
import { cloneDeepWith } from 'lodash';
import MainPage, { MainPageProps } from './MainPage';

const arrowRight = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

export type AgGridDemoPageProps = {
  config?: any;
  loaded?: boolean;
  adaptableOptions?: any;
  className?: string;
  agGridTheme?: string;

  exampleCode?: string;
  description?: any;
  helpResources?: any;
} & MainPageProps;

const CopyToClibpoard = ({ value }: { value: string }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (showFeedback) {
      setTimeout(() => {
        setShowFeedback(false);
      }, 2000);
    }
  }, [showFeedback]);

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        copy(value);
        setShowFeedback(true);
      }}
      style={{
        display: 'inline-block',
        transition: 'opacity 0.3s',
        opacity: showFeedback ? 0.8 : 1,
      }}
    >
      {' '}
      {showFeedback ? 'DONE!' : '- Click to copy to clipboard'}
    </a>
  );
};

const Snippet = ({
  title,
  children,
  shouldCopy,
  className,
}: {
  title: ReactNode;
  children: string;
  shouldCopy: boolean;
  className: string;
}) => {
  const [expanded, setExpanded] = useState(true);
  if (!children) {
    return null;
  }
  return (
    <div className={className}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          //  flexWrap: 'wrap',
        }}
      >
        <div
          title={`Click to ${expanded ? 'collapse' : 'expand'}`}
          onClick={() => {
            setExpanded(!expanded);
          }}
          style={{
            display: 'flex',
            flexFlow: 'row',
            marginRight: 'var(--demo-space-2)',
            alignItems: 'center',
            userSelect: 'none',
            cursor: 'pointer',
          }}
        >
          {React.cloneElement(arrowRight, {
            style: {
              marginRight: 'var(--demo-space-2)',
              transition: 'transform 0.2s',
              transform: !expanded ? 'rotate(0deg)' : 'rotate(90deg)',
              transformOrigin: 'center',
            },
          })}
          {title}
        </div>
        {shouldCopy && <CopyToClibpoard value={children} />}
      </div>

      {expanded ? <pre>{children}</pre> : null}
    </div>
  );
};

const HelpResources = ({ children }: { children: string }) => {
  if (!children) {
    return null;
  }
  return (
    <div className="helpResource">
      <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
        <span style={{ marginLeft: '5px' }}>
          {<b>AdapTable Help Resources: </b>}{' '}
        </span>
        <span style={{ marginLeft: '5px' }}>{children}</span>
      </div>
    </div>
  );
};

const AgGridDemoPage = ({
  pageTitle,
  children,
  description,
  config,
  loaded,
  exampleCode,
  className,
  agGridTheme,
  adaptableOptions,
  helpResources,
}: //testDescription,
AgGridDemoPageProps) => {
  if (config) {
    const removeUuid = (value: any): any => {
      if (value && value.Uuid) {
        delete value.Uuid;
      }
    };
    config = cloneDeepWith(config, removeUuid);
    config = JSON.stringify(config, null, 2);
  }

  return (
    <MainPage className={className} pageTitle={pageTitle}>
      <div
        style={{
          paddingRight: 40 /*makes it easier to scroll to bottom, since you have some extra space*/,
        }}
      >
        {' '}
        <Snippet
          title={<b>{pageTitle}</b>}
          shouldCopy={false}
          className={'description'}
        >
          {description}
        </Snippet>
        <HelpResources>{helpResources}</HelpResources>
        <div id="adaptable" />
        <p />
        <div
          id="grid"
          className={agGridTheme || 'ag-theme-balham'}
          style={{ height: loaded ? 700 : 0 }}
        />
        {children}
        {exampleCode ? (
          <Snippet title={<b>Code</b>} shouldCopy={true} className={'config'}>
            {exampleCode}
          </Snippet>
        ) : (
          <>
            <Snippet
              title={<b>Predefined Config</b>}
              shouldCopy={true}
              className={'config'}
            >
              {config}
            </Snippet>

            <Snippet
              title={<b>Adaptable Options</b>}
              shouldCopy={true}
              className={'config'}
            >
              {adaptableOptions}
            </Snippet>
          </>
        )}
      </div>
    </MainPage>
  );
};

export default AgGridDemoPage;
