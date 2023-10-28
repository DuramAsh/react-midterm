import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import PostDetails from './pages/PostDetails/PostDetails'
import Profile from './pages/Profile/Profile'
import ErrorPage from './pages/ErrorPage/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);