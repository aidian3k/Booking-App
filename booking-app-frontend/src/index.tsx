import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { Authorization } from './pages/Authorization';

const routes = createBrowserRouter([{
    path: '/',
    element: <Authorization/>
}])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={routes}/>
      </Provider>
  </React.StrictMode>
);

