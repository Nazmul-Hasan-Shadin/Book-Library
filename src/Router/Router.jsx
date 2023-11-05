import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks/AddBooks';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import BookCard from '../Pages/Home/BooksCard/BookCard';
import BookCards from '../Pages/Home/BooksCard/BookCards';

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
          element:<BookCards></BookCards>,


        }

      ],
    },
  ]);

export default router;