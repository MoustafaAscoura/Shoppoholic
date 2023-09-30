import { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/config'
import Product  from '../../components/Product/Product'

export default function Products () {

    const [ productsList, setProductsList ] = useState([])

    useEffect(() => {
        axiosInstance.get().then((res) => {
            const {limit, products, total} = res.data
            setProductsList(products)
        }).catch((err) => {
            console.log(err)
            return <h2>Error 500: Couldn't Fetch Data!</h2>
        })
    },[])

    return (<div className="container mt-5" id="products">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {productsList.map((product) => <Product product={product} key={product.id}/>)}
        </div>
        <br/>
    </div>)
}