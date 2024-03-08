import React from 'react'
import Navbar from './Component/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NewProductForm from './Pages/NewProductForm';
import UpdateProductForm from './Pages/UpdateProductForm';
import ProductDetail from './Pages/ProductDetail';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {index: true, element: <Product />},
        {path: '/cart', element: <Cart />},
        {path: '/newProduct', element: <NewProductForm />},
        {path: '/:id/update', element: <UpdateProductForm />},
        {path: '/:id/details', element: <ProductDetail />}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
