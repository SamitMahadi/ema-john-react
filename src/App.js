import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inventory/Inventory'
import { ProductAndCartLoader } from './Loader/ProductAndCartLoader';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>

        },
        {
          path:'/Orders',
          loader:ProductAndCartLoader,
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        },
        {
          
            path:'about',
            element: <About></About>
          
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
    }
    
  ])

  return (
    <div>
     <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
