import React from 'react';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks/AddBooks';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: '/addbooks',
          element: <AddBooks></AddBooks>
        }
      ],
    },
  ]);

export default router;