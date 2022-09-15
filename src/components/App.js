import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import MainPage from "./Main/MainPage";
import Login from "./Login and Register/Login";
import Register from "./Login and Register/Register";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout"



export default function App (){
    return(
        <BrowserRouter>
            <Topbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    )
}