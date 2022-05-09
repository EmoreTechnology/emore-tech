import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './page/home/home.page';
import './i18n/i18n';
const Home = lazy(() => import('./page/home/home.page'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
