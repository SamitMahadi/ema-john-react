import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About'
import Main from './Layouts/Main';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import { ProductAndCartLoader } from'./Loader/ProductAndCartLoader';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './Routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: ProductAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
       {
        path:'shipping',
        element:<PrivateRoutes><Shipping></Shipping></PrivateRoutes>
      
      },
        {
          path:'about',
          element:<About></About>
        },

        {
          path:'login',
          element:<Login></Login>
        },
      
        {
         path:'signup',
        element: <Signup></Signup>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;