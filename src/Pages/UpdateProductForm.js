import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productSelector, updateProductThunk } from '../Redux/ProductReducer'
import { useParams } from 'react-router-dom';

function UpdateProductForm() {

    const { product } = useSelector(productSelector);
    const [productData, setProductData] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      if(product){
        setProductData({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          rating: product.rating
        })
      }else{
        setProductData({
          id: id,
          title: '',
          price: '',
          image: '',
          rating: '',
        })
      }

    }, [product, id])

    const handleUpdate = () => {
      dispatch(updateProductThunk(productData));  
    }

    return (
      <div>
        <div className='new'>
        <div className='add-new-product'>
          <h2>Update Product Here</h2>
          <div className='addproduct-form'>
              <div className='form-element'>
                  <label for= 'name' >Title</label>
                  <input type='text' id='name' required onChange={(e) => setProductData({...productData, title: e.target.value})} value={productData.title}/>
              </div>
              <div className='form-element'>
                  <label for= 'price' >Price</label>
                  <input type='number' id='price' required onChange={(e) => setProductData({...productData, price: e.target.value})} value={productData.price}/>
              </div>
              <div className='form-element'>
                  <label for= 'category' >Category</label>
                  <input type='text' id='category' required onChange={(e) => setProductData({...productData, category: e.target.value})} value={productData.category}/>
              </div>
              <div className='form-element'>
                  <label for= 'image' >Image URL</label>
                  <input type='url' id='image' required onChange={(e) => setProductData({...productData, image: e.target.value})} value={productData.image}/>
              </div>
              <button onClick={handleUpdate}>Update Product</button>
          </div>
        </div>
      </div>
      </div>
    )
}

export default UpdateProductForm