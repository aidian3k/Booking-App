import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {AuthorizationPage} from "./pages/AuthorizationPage";
import {SinglePropertyPage} from "./pages/SinglePropertyPage";
import {ErrorPage} from "./pages/ErrorPage";
import {ProfilePage} from "./pages/ProfilePage";
import {UserAccommodationPage} from "./pages/UserAccommodationPage";
import {AccommodationAddPage} from "./pages/AccommodationAddPage";
import {MyBookingsPage} from "./pages/MyBookingsPage";
import {MainPage} from "./pages/MainPage";
import {AccommodationEditPage} from "./pages/AccommodationEditPage";
import {LoginCallback} from "./components/authorization/LoginCallback";

const routes = createBrowserRouter([
        {
            path: '/',
            element: <MainPage/>
        },
        {
            path: '/authorization',
            element: <AuthorizationPage/>
        },
        {
            path: '/accommodation/:id',
            element: <SinglePropertyPage/>
        },
        {
            path: '/profile',
            element: <ProfilePage/>
        },
        {
            path: '/profile/accommodations',
            element: <UserAccommodationPage/>
        },
        {
            path: '/profile/accommodations/add',
            element: <AccommodationAddPage/>
        },
        {
          path: '/profile/accommodations/edit/:id',
          element: <AccommodationEditPage/>
        },
        {
            path: '*',
            element: <ErrorPage/>
        },
        {
            path: '/oauth2/react/login',
            element: <LoginCallback/>
        },
        {
            path: '/profile/bookings',
            element: <MyBookingsPage/>
        },
    ]
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
);

