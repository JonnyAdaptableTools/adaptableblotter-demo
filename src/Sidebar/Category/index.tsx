import React, {
  ReactNode,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from 'react';
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
  if (key === '/admin') {
    console.log('value', storageValue);
  }

  const currentValue =
    storageValue == null ? defaultValue : JSON.parse(storageValue);

  const [_, refresh] = useState(1);

  return [
    currentValue,
    (value: boolean) => {
      requestAnimationFrame(() => {
        store.setItem(key, JSON.stringify(value));

        refresh(_ + 1);
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

    const style = {
      display: expanded ? 'block' : 'none',
    };

    const contentRef = useRef<HTMLDivElement>(null);

    const Arrow = expanded ? ArrowDown : ArrowRight;

    useEffect(() => {
      if (expanded) {
        // have to do this because of a bug when picking up SSR-ed content
        contentRef.current!.style.display = style.display;
      }
    }, []);

    const icon = (global as any).document ? (
      <Arrow
        onMouseDown={preventDefault}
        onClick={() => {
          setExpanded(!expanded);
        }}
        size={22}
        style={{
          marginRight: 8,
          marginTop: 5,
          cursor: 'pointer',
          fill: 'currentColor',
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      />
    ) : null;

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
        <div
          className="sidebar-category-content"
          style={style}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Category;
