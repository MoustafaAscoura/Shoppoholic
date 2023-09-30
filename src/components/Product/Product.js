import './Product.css'
import Stars from '../Stars/Stars'
import { useNavigate } from "react-router-dom";
import AddCartButton from '../AddCartButton/AddCartButton'
export default function Product (props) {
    const navigate = useNavigate()
    const {product} = props
    const showProductDetails = (id) => {
        navigate(`/product/${id}`)
    }

    return(
    <div className="col" key={product.id}>
        <div className="card h-100 p-2 sec-border">
            {product.stock ? <span className="badge text-bg-success">In Stock</span>
            : <span className="badge text-bg-danger">Out of Stock</span>}
            <img src={product.thumbnail} className="card-img-top img-fluid" alt="product thumbnail" 
            onClick={() => showProductDetails(product.id)} />
            <div className="card-body rounded mt-1 d-flex flex-column justify-content-between">
                <div>
                    <h5 className="d-inline-block card-title w-75 text-wrap" 
                    onClick={() => showProductDetails(product.id)}>{product.title}</h5>
                    <h5 className="d-inline float-end">${product.price}</h5>
                    <p className="card-text mt-2 text-dark p-1">{product.description}</p>
                </div>
                <div>
                    <Stars rating={product.rating}/>
                    <AddCartButton product={product} className="p-absolute bottom-0 mt-3"/>
                </div>
            </div>
        </div>
    </div>
    )
}
