import {useSelector} from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Cart () {
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart.cartbody)
    return (<div id="cart">
        {Object.keys(cart).length ? 
        <table className='table align-middle text-center'>
              <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(cart).map((product) => <CartItem product={product}/>)}
                <tr>
                    <th className="text-end" colSpan={3}>Total Price:</th>
                    <td>${Object.values(cart).map((product) => product.price * product.count).reduce(((acc,curr)=>acc+curr),0)}</td>
                </tr>
            </tbody>
        </table>
        :<div class="alert alert-secondary d-flex justify-content-between align-items-center" role="alert">
            No Items in your cart!
            <Button onClick={() => navigate('/products')}>Shop Now</Button>
        </div>}
    </div>)
}