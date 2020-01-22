import React, { ReactNode, ReactElement, useState } from 'react';
import { withRouter } from 'next/router';
import ArrowDown from './arrow-down';
import ArrowRight from './arrow-right';

const preventDefault = (e: any) => e.preventDefault();

const store = (global as any).localStorage || {
  getItem: () => {},
  setItem: () => {},
};
const useExpanded = (defaultValue: boolean, key: string) => {
  key = `expandstate-${key}`;
  const storageValue = store.getItem(key) || null;

  const currentValue =
    storageValue == null ? defaultValue : JSON.parse(storageValue);

  const [expanded, setExpanded] = useState(currentValue);

  return [
    expanded,
    (value: boolean) => {
      requestAnimationFrame(() => {
        store.setItem(key, JSON.stringify(value));
        setExpanded(value);
      });
    },
  ];
};

const Category = withRouter(
  ({
    router,
    children,
    title,
  }: {
    router: any;
    children: ReactNode;
    title: ReactElement;
  }) => {
    const key = title.props.href;
    const [expanded, setExpanded] = useExpanded(false, key);

    const Arrow = expanded ? ArrowDown : ArrowRight;
    const icon = (
      <Arrow
        onMouseDown={preventDefault}
        onClick={() => {
          setExpanded(!expanded);
        }}
        size={22}
        style={{
          marginRight: 8,
          marginTop: 2,
          cursor: 'pointer',
          fill: 'currentColor',
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      />
    );

    const active = expanded
      ? router.pathname === title.props.href
      : router.pathname.indexOf(title.props.href) === 0;

    return (
      <div className="sidebar-category">
        <div
          className={`sidebar-category-title ${
            active ? 'sidebar-category-title--active' : ''
          }`}
        >
          {icon}
          <div style={{ fontSize: 'larger' }}>{title}</div>
        </div>
        <div
          className="sidebar-category-content"
          style={{
            display: expanded ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Category;
