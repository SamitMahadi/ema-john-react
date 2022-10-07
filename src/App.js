import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inventory/Inventory'
import { ProductAndCartLoader } from './Loader/ProductAndCartLoader';

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
