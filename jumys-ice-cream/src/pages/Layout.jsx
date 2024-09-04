import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from '../Components/Navbar';
// import Shop from './Shop';
import Login from './Login';
import AboutUs from './AboutUsPage';
import BlogCard from './BlogCard';
import Contact from './Contact'
import Error404 from './Error404'
import Home from './Home'
import Faq2 from './Faq2'
import SignUp from './SignUp';
import Wishlist from './Wishlist';


// Outlet

const PageRouter = createBrowserRouter([
    {
        path : "/",
        element : <Navbar/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            // {
            //   path : '/shop',
            //   element : <Shop/>
            // },
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
