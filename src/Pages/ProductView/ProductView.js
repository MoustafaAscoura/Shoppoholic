import { useParams } from "react-router-dom"
import { axiosInstance } from '../../api/config'
import { useEffect, useState } from 'react'
import Stars from '../../components/Stars/Stars'
import {Badge} from 'react-bootstrap';
import AddCartButton from "../../components/AddCartButton/AddCartButton";

export default function ProductView () {
    const params = useParams()
    const [ productData, setProductData ] = useState(null)

    useEffect(() => {
        axiosInstance.get(`${params.id}`)
        .then((res) => {
          setProductData(res.data)
        })
        .catch((err) => <h2>Error 500: Couldn't Fetch Data!</h2>);
    },[]);


    return productData? (<div className="container">
        <div className="row g-5">
            <div className="col-12 col-md-6 sec-border p-3">
                <img className="w-100 product-main-img" src={productData.thumbnail} alt=""></img>
                <div className="mt-2 d-flex h-auto justify-content-between">
                    {productData.images.slice(0,3).map((imageURL, index)=>{
                        return <img className="product-img img-fluid" src={imageURL} key={index} alt="Product"/> 
                    })}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="mb-5">
                    <h1>{productData.title}</h1>
                    <p className="text-wrap">{productData.description}</p>
                    <Badge bg="secondary">{productData.category}</Badge>
                </div>
                <hr/>
                <div className="my-5">
                    <Stars rating={productData.rating}/>
                    <h2 className={productData.discountPercentage? 'd-inline-block text-decoration-line-through':''} >$ {productData.price}</h2>
                    {productData.discountPercentage?
                    
                        <><h2 className="fst-italic d-inline-block mt-2 ms-3">${((100 - productData.discountPercentage) * productData.price / 100).toFixed(1)}</h2>
                        <span className="fst-italic ms-5" >{productData.discountPercentage}% off for a limited time!</span></>
                        :<></>}
                </div>
                <hr/>
                <div className="mb-5">
                    <div className="d-flex justify-content-around align-items-center mb-5">
                        {productData.stock?<Badge bg="success">{productData.stock} Items In Stock</Badge>
                        :<Badge bg="danger">Out of Stock</Badge>}
                        <p className="m-0 d-flex align-items-center"><strong>Brand:</strong>{productData.brand}</p>
                    </div>
                    <AddCartButton product={productData} className="mt-1 h-25"/>
                </div>
            </div>
        </div>
    </div>) : <></>
}