import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import ProductView from '../Pages/ProductView/ProductView'
import Offers from '../Pages/Offers/Offers'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Cart from '../Pages/Cart/Cart'
import NotFound from '../Pages/NotFound/NotFound'

export default function Router () {
    return (<Routes>
        <Route path="Shoppoholic" element={<Home />} />
        <Route path="Shoppoholic/products" element={<Products />} />
        <Route path="Shoppoholic/product/:id" element={<ProductView />} />
        <Route path="Shoppoholic/offers" element={<Offers />} />
        <Route path="Shoppoholic/login" element={<Login />} />
        <Route path="Shoppoholic/signup" element={<Signup />} />
        <Route path="Shoppoholic/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
    </Routes>)
}
