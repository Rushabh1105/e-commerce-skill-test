import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import jsonData from '../data.json';
import '../Styles/ProductDetail.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductDetail() {

    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const product = jsonData.products.filter((prod) => prod.id === Number(id))
        setData(product[0])
    }, [data]);
    // console.log(data)

  return (
    <div className='product-detail'>
        <div className='product-image'>
            <img src={data.image} alt='prod' />
        </div>
        <div className='product-info'>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p><b>Category :</b> {data.category}</p>
            <h4><b>Price :</b> $ {data.price} </h4>
            <p><b>Rating :</b> {data.rating?data.rating.rate:""} <FontAwesomeIcon icon={faStar} /></p>
            <p><b>Total Reviews: </b>{data.rating?data.rating.count:""}</p>

            <button className='add details'> Add To Cart </button>
        </div>
    </div>
  )
}

export default ProductDetail