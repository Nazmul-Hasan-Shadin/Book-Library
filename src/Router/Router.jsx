import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks/AddBooks';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import BookCard from '../Pages/Home/BooksCard/BookCard';
import BookCards from '../Pages/Home/BooksCard/BookCards';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DetailsBooks from '../Pages/DetailsBook/DetailsBook';

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
          element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/bookcards/:id',
          element:<PrivateRoute><BookCards></BookCards></PrivateRoute>,


        },
        {
          path: '/details/:id',
          element: <DetailsBooks></DetailsBooks>
        }

      ],
    },
  ]);

export default router;