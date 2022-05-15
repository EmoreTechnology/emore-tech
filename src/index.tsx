import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Home from './page/home/home.page';
import './i18n/i18n';
import './index.css';
import MyLoader from './page/skeleton/skeleton.page';

const Home = lazy(() => import('./page/home/home.page'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<MyLoader />}>
      <Home />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
