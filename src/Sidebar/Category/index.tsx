import React, { ReactNode, ReactElement, useState } from 'react';
import { withRouter } from 'next/router';
import ArrowDown from './arrow-down.tsx';
import ArrowRight from './arrow-right.tsx';

const preventDefault = e => e.preventDefault();
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
    const [expanded, setExpanded] = useState(true);

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
          {title}
        </div>
        <div className="sidebar-category-content">
          {expanded ? children : null}
        </div>
      </div>
    );
  }
);

export default Category;
