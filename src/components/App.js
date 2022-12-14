import { useState } from 'react';
import UserContext from '../contexts/UserContext';
import ProductsSelectedContext from '../contexts/ProductsSelectedContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import MainPage from "./Main/MainPage";
import Login from "./Login and Register/Login";
import Register from "./Login and Register/Register";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout"
import ProductsPage from './ProductsPage/ProductsPage';
import ProductPage from './ProductsPage/ProductPage';



export default function App (){
    const [user, setUser] = useState(null);
    const [productsSelected, setProductsSelected] = useState([]);
    const [total, setTotal] = useState(0);

    function getProductsSelecteds (prod) {
        const arr = productsSelected;
        const price = Number(prod.price.replace('R$ ', "").replace(",", "."));
        const result = window.confirm("Deseja adicionar esse item no carrinho ?");
        if(!result) {
            return
        }
        setTotal(total + price);
        setProductsSelected([...arr, prod]);
    }
    console.log(productsSelected)
    return(
        <UserContext.Provider value={{user, setUser}}>
            <ProductsSelectedContext.Provider value={{productsSelected, setProductsSelected}}>
                <BrowserRouter>
                    <Topbar/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/products" element={<ProductsPage/>}/>
                        <Route path="/products/:productId" element={<ProductPage getProductsSelecteds={getProductsSelecteds} />}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Routes>
                </BrowserRouter>
            </ProductsSelectedContext.Provider>
        </UserContext.Provider>
    )
}