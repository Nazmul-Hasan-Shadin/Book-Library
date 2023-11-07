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
import AllBooks from '../Pages/AllBooks/AllBooks';
import UpdateBook from '../Pages/Update/UpdateBook';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ReadPage from '../Pages/ReadPage/ReadPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    
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
          element:<BookCards></BookCards>,


        },
        {
          path: '/findbooksbyid/:id',
          element: <PrivateRoute><DetailsBooks></DetailsBooks></PrivateRoute>
        },
        {
          path: '/borrowed-books',
          element: <BorrowedBooks></BorrowedBooks>
        },
        {
          path: '/allbooks',
          element:<AllBooks></AllBooks>,
          
        },
        {
          path:'/updatebook/:id',
          element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
          loader: ({params})=> fetch(`https://books-server-six.vercel.app/single-book/${params.id}`)
     
          // loader: ({params})=> fetch(`http://localhost:5000/single-book/${params.id}`)
          
        },
        {
          path:'/readbook/:id',
          element:<ReadPage></ReadPage>
        }

      ],
    },
  ]);

export default router;