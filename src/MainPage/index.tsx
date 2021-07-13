import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';

import './index.scss';
import Sidebar from '../Sidebar';
import Logo from '../components/Logo';

export type MainPageProps = {
  pageTitle: string;
  children?: ReactNode;
  className?: string;
  documentClassName?: string;
  description?: ReactNode;
};

const wait = (time: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

const initDocsearch = async () => {
  if (!(window as any).docsearch) {
    await wait(500);
    initDocsearch();
    return;
  }

  (window as any).docsearch({
    apiKey: process.env.ALGOLIA_KEY,
    indexName: 'adaptableblotter',
    inputSelector: '#searchInput',
    debug: true, // Set debug to true if you want to inspect the dropdown
  });
};

type Decorator = {
  addClassName: (...className: string[]) => void;
  removeClassName: (...className: string[]) => void;
};
const getDecorator = () => {
  const oldAdd = document.documentElement.classList.add;
  const oldRemove = document.documentElement.classList.remove;

  return {
    addClassName: (...className: string[]) => {
      oldAdd.call(document.documentElement.classList, ...className);
    },
    removeClassName: (...className: string[]) => {
      oldRemove.call(document.documentElement.classList, ...className);
    },
  };
};

let decorator: Decorator | null = process.browser ? getDecorator() : null;

export default ({
  className,
  documentClassName,
  pageTitle,
  children,
  description,
}: MainPageProps) => {
  const [darkTheme, setDarkTheme] = React.useState(false);

  useEffect(() => {
    if (process.env.ALGOLIA_KEY) {
      initDocsearch();
    }
  });

  useEffect(() => {
    const check = () => {
      const darkTheme = document.documentElement.classList.contains(
        'ab--theme-dark'
      );
      setDarkTheme(darkTheme);
    };

    document.documentElement.classList.add = (...args: string[]) => {
      decorator!.addClassName(...args);
      check();
    };

    document.documentElement.classList.remove = (...args: string[]) => {
      decorator!.removeClassName(...args);

      check();
    };

    check();

    if (documentClassName) {
      decorator!.addClassName(documentClassName);
    }

    return () => {
      if (documentClassName) {
        decorator!.removeClassName(documentClassName);
      }
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexFlow: 'row',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Sidebar />

      <div className="main">
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 'var(--demo-space-3)',
          }}
        >
          <Logo dark={darkTheme} />
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              flexFlow: 'column',
            }}
          >
            <div style={{ marginBottom: 'var(--demo-space-2)' }}>
              <a
                style={{
                  padding: 'var(--demo-space-2)',
                  color: 'white',
                  display: 'inline-block',
                  borderRadius: 'var(--ab__border-radius)',
                  background: 'var(--demo-color-blue)',
                  textAlign: 'center',
                  minWidth: '15rem',
                  fontWeight: 'bold',
                  marginRight: 'var(--demo-space-2)',
                }}
                href="https://docs.adaptabletools.com/"
                target="_blank"
              >
                AdapTable Documentation
              </a>
              <a
                style={{
                  padding: 'var(--demo-space-2)',
                  color: 'white',
                  display: 'inline-block',
                  borderRadius: 'var(--ab__border-radius)',
                  background: 'var(--demo-color-blue)',
                  textAlign: 'center',
                  minWidth: '9rem',
                  fontWeight: 'bold',
                }}
                href="https://adaptabletools.com/book-demo"
                target="_blank"
              >
                Book a Demo
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                flexFlow: 'row',
              }}
            >
              <input
                style={{
                  padding: 'var(--demo-space-2)',
                  minWidth: '15rem',
                  border: '1px solid var(--demo-color-washedblue)',
                  color: 'var(--ab-color-inputcolor)',
                  borderRadius: 'var(--ab__border-radius)',

                  background: 'var(--demo-color-washedblue)',
                }}
                type="text"
                id="searchInput"
                placeholder="Search AdapTable Demos"
              />{' '}
              <button
                title="Clear all state from all demos to return to original predefined config"
                style={{
                  padding: 'var(--demo-space-2) var(--demo-space-2)',
                  cursor: 'pointer',

                  textAlign: 'center',
                  minWidth: '9rem',
                  fontSize: 'var(--sidebar_font-size)',
                  // marginBottom: 'var(--demo-space-1)',
                  marginLeft: 'var(--demo-space-2)',
                  background: 'var(--demo-color-defaultbackground)',
                  borderRadius: 'var(--ab__border-radius)',
                  color: 'var(--ab-color-text-on-defaultbackground)',
                  border: '1px solid var(--ab-color-inputborder)',
                }}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = window.location.href;
                }}
              >
                Clear State
              </button>
            </div>
          </div>
        </div>

        {description ? (
          <div className="demodescription">{description}</div>
        ) : null}
        <div id="aboveGridDiv"></div>
        {children}
      </div>
    </div>
  );
};
