import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/cart'

export default configureStore({
    reducer:{
        cart: cartSlice
    },
}) 