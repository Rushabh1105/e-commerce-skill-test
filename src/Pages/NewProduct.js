import React, { useState } from 'react';
import '../Styles/NewProduct.css'
import NewProductForm from '../Component/NewProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProductThunk, productSelector } from '../Redux/ProductReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function NewProduct() {

  const { error, products } = useSelector(productSelector);
  const [productData, setProductData] = useState({});
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = () => {
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

  return (
    <div className='new'>
      <div className='add-new-product'>
        <h2>Add New Product Here</h2>
        <NewProductForm productData={productData} setProductData={setProductData} handleAddProduct={handleAddProduct} />
      </div>
    </div>
  )
}

export default NewProduct