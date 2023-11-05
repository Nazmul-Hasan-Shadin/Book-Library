import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks/AddBooks';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import BookCard from '../Pages/Home/BooksCard/BookCard';
import BookCards from '../Pages/Home/BooksCard/BookCards';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DetailsBook from '../Pages/DetailsBook/DetailsBook';
import DetailsBooks from '../Pages/DetailsBook/DetailsBooks';
import BorrowedBooks from '../Pages/BorrowdBooks/BorrowedBooks';


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
          path: '/findbooksbyid/:id',
          element: <DetailsBooks></DetailsBooks>
        },
        {
          path: '/borrowed-books',
          element: <BorrowedBooks></BorrowedBooks>
        }

      ],
    },
  ]);

export default router;