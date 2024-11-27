import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import ShopList from './ShopList';
import Login from './Login';
import AboutUs from './AboutUsPage';
import BlogCard from './BlogCard';
import Contact from './Contact'
import Error404 from './Error404'
import Home from './Home'
import Faq2 from './Faq2'
import SignUp from './SignUp';
import Wishlist from './Wishlist';
import CartPage from './CartPage';
import AdminLogin from './AdminLogin';
import ReduxContainer from '../Redux/ReduxContainer';

const PageRouter = createBrowserRouter([
    {
        path : "/",
        element : <Navbar/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
              path : '/shop',
              element : <ShopList/>
            },
            {
              path : '/about',
              element : <AboutUs/>
            },
            {
              path : '/login',
              element : <Login/>
            },
            {
              path : '/blogCard',
              element : <BlogCard/>
            },
            {
              path : '/contact',
              element : <Contact/>
            },
            {
              path : '/error',
              element : <Error404/>
            },
            {
              path : '/faq2',
              element : <Faq2/>
            },
            {
              path : '/signup',
              element : <SignUp/>
            },
            {
              path : '/wishlist',
              element : <Wishlist/>
            },
            {
              path : '/cart',
              element : <CartPage/>
            },
            {
              path : '/product/:productId',
              element : <ProductCard/>
            },
            {
              path : '/admin-login',
              element : <AdminLogin/>
          },
          {
            path : '/redux',
            element : <ReduxContainer/>
          }
        ]
    }
])

const Layout = () => {
  return (
    <div>
      <RouterProvider router={PageRouter}></RouterProvider>
    </div>
  )
}

export default Layout
