import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';

import data from '../data/tabs.json';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout data={data} />}>
          <Route index element={getComponent(data[0])} />

          {data.map(element => (
            <Route
              key={element.id}
              path={`/${element.id}`}
              element={getComponent(element)}
            />
          ))}

          <Route path="*" element={<Navigate to={`/${data[0].id}`} />} />
        </Route>
      </Routes>
    </div>
  );
};

function getComponent(element) {
  switch (element.id) {
    case 'dummyChart':
      const DummyChart = lazy(() => import(`./${element.path}`));
      return <DummyChart data={element} />;
    case 'dummyList':
      const DummyList = lazy(() => import(`./${element.path}`));
      return <DummyList data={element} />;
    case 'dummyTable':
      const DummyTable = lazy(() => import(`./${element.path}`));
      return <DummyTable data={element} />;
    default:
      return null;
  }
}
