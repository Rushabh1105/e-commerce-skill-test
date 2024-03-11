// import react modules
import React, { useState } from 'react';
// import styling
import '../Styles/NewProduct.css';
// import form
import NewProductForm from '../Component/NewProductForm';
// import redux hooks
import { useDispatch, useSelector } from 'react-redux';
// import async actions
import { addNewProductThunk, productSelector } from '../Redux/ProductReducer';
// import router hooks
import { useNavigate } from 'react-router-dom';
// toast message
import { toast } from 'react-toastify';

// New Product Page
function NewProduct() {

  // get data from selector
  const { error, products } = useSelector(productSelector);
  // state to handle input data
  const [productData, setProductData] = useState({});
  // dispatch method
  const dispath = useDispatch();
  // navigate method
  const navigate = useNavigate();

  // add to cart function
  const handleAddProduct = () => {
    // dispath add to product action
    dispath(addNewProductThunk({
      id: products.length+1, 
      ...productData,
      rating: {
        rate: 0,
        count: 0,
      }
    }))
    if(!error){
      toast.success('Product added...')
      navigate('/')
    }else{
      toast.error(error);
    }
  }

  // Return JSX
  return (
    <div className='new'>
      <div className='add-new-product'>
        <h2>Add New Product Here</h2>
        {/* new product add form */}
        <NewProductForm productData={productData} setProductData={setProductData} handleAddProduct={handleAddProduct} />
      </div>
    </div>
  )
}

export default NewProduct