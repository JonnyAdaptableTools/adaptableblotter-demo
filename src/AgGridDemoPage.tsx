import React, { useEffect, useState, ReactNode } from 'react';
import copy from 'copy-to-clipboard';
import MainPage, { MainPageProps } from './MainPage';

const arrowRight = (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

export type AgGridDemoPageProps = {
  config?: any;
  blotterOptions?: any;
  description: any;
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
}: {
  title: ReactNode;
  children: string;
}) => {
  const [expanded, setExpanded] = useState(true);
  if (!children) {
    return null;
  }
  return (
    <div className="config">
      <div
        title={`Click to ${expanded ? 'collapse' : 'expand'}`}
        onClick={() => {
          setExpanded(!expanded);
        }}
        style={{
          display: 'inline-block',
          position: 'relative',
          top: 4,
          userSelect: 'none',
          cursor: 'pointer',
          marginRight: 10,
          transition: 'transform 0.2s',
          transform: !expanded ? 'rotate(0deg)' : 'rotate(90deg)',
          transformOrigin: 'center',
        }}
      >
        {arrowRight}
      </div>
      {title} <CopyToClibpoard value={children} />
      <br />
      {expanded ? <pre>{children}</pre> : null}
    </div>
  );
};

export default ({
  pageTitle,
  children,
  description,
  config,
  blotterOptions,
}: AgGridDemoPageProps) => {
  return (
    <MainPage pageTitle={pageTitle} description={description}>
      <div id="adaptableBlotter" />
      <p />
      <div id="grid" className="ag-theme-balham" style={{ height: 570 }} />

      {children}

      <Snippet title={<b>Predefined Config</b>}>{config}</Snippet>
      <Snippet title={<b>Blotter Options</b>}>{blotterOptions}</Snippet>
    </MainPage>
  );
};
