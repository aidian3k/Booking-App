import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import App from "./App";
import {Authorization} from "./pages/Authorization";
import {Navbar} from "./components/navbar/Navbar";
import {PropertyList} from "./components/main-page/PropertyList";
import {PropertyPage} from "./components/property-page/PropertyPage";

const routes = createBrowserRouter([{
    path: '/',
    element: <App/>
    },
    {
        path: '/auth',
        element: <Authorization/>
    },
    {
        path: '/main',
        element: <><Navbar/> <PropertyList/></>
    },
    {
        path: '/property-page',
        element: <PropertyPage/>
    }
    ]
)

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

