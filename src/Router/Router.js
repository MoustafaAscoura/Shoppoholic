import {Route, Routes} from 'react-router-dom'
import React, { Suspense } from 'react'
import Loader from "../components/Loader/Loader";

/*
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import ProductView from '../Pages/ProductView/ProductView'
import Offers from '../Pages/Offers/Offers'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Cart from '../Pages/Cart/Cart'
import NotFound from '../Pages/NotFound/NotFound'
*/

const Home = React.lazy(() => import('../Pages/Home/Home'));
const Products = React.lazy(() => import('../Pages/Products/Products'));
const ProductView = React.lazy(() => import('../Pages/ProductView/ProductView'));
const Offers = React.lazy(() => import('../Pages/Offers/Offers'));
const Login = React.lazy(() => import('../Pages/Login/Login'));
const Signup = React.lazy(() => import('../Pages/Signup/Signup'));
const Cart = React.lazy(() => import('../Pages/Cart/Cart'));
const NotFound = React.lazy(() => import('../Pages/NotFound/NotFound'));

export default function Router () {
    return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />}/> 
        </Routes>
    </Suspense>
    )
}
