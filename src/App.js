// Import react native modules
import React, { useEffect } from 'react'
// Import Navbar component
import Navbar from './Component/Navbar';
// Import react-router modules
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Import Product Component
import Product from './Pages/Product';
// Import Cart component
import Cart from './Pages/Cart';
// Import New Product Component
import NewProduct from './Pages/NewProduct';
// Import Update Product form
import UpdateProductForm from './Pages/UpdateProductForm';
// Import Product Detail Component
import ProductDetail from './Pages/ProductDetail';
// Import redux hook
import { useDispatch } from 'react-redux';
// Import reducer async action
import { getCartThunk, getProductsThunk } from './Redux/ProductReducer';

// App Component
function App() {
  // Make a dispatch method
  const dispatch = useDispatch();
  // Load initial data from server
  useEffect(() => {
    // get products from server
    dispatch(getProductsThunk());
    // get cart items from server
    dispatch(getCartThunk());
  }, [dispatch]);

  // Make a router provider for different routes
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

  // Return JSX
  return (
    <>
      {/* Return various components depending on routes */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
