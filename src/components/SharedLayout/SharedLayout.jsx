import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

export const SharedLayout = data => {
  return (
    <div>
      <header>
        <nav className={css.navigationList}>
          {data.data.map(element => (
            <Link
              key={element.id}
              to={`/${element.id}`}
              className={css.navigationListItem}
            >
              {element.title}
            </Link>
          ))}
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <p>LOADING...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
