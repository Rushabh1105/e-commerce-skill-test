import React, { useEffect } from 'react'
import Navbar from './Component/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import NewProduct from './Pages/NewProduct';
import UpdateProductForm from './Pages/UpdateProductForm';
import ProductDetail from './Pages/ProductDetail';
import { useDispatch } from 'react-redux';
import { getCartThunk, getProductsThunk } from './Redux/ProductReducer';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCartThunk());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {index: true, element: <Product />},
        {path: '/cart', element: <Cart />},
        {path: '/newProduct', element: <NewProduct />},
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
