import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { addToCart, deleteAllFromCart } from '../../store/Slices/cart';

export default function AddCartButton (props) {
    let {className:classes_, product} = props
    const [ classes, setclasses ] = useState(classes_)
    const [ content , setContent ] = useState("Remove from Cart")
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cartbody)
    
    useEffect(() => {
        if (!Object.keys(cart).includes(String(product.id))) {
            setContent("Add to Cart")
            setclasses(classes + " primary")
        }
    },[])


    const handleClick = (e) => {
        e.target.innerText === "Add to Cart" ? 
        dispatch(addToCart(product))
        : dispatch(deleteAllFromCart(product));
        
        e.target.innerText = e.target.classList.toggle('primary')? "Add to Cart":"Remove from Cart";
    }

    return product.stock ? <Button onClick={e => handleClick(e)} variant="secondary" className={classes + " w-100"}>{content}</Button>
    : <Button variant="danger" className="w-100" disabled>Out of stock</Button>

}
