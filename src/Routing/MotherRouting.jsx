import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from '../Component/Subcomponent/Hero/Hero'
import Navbar from '../Component/Subcomponent/Header/Navbar'
import Footer from '../Component/Subcomponent/Footer/Footer'
import Carti from '../Component/Subcomponent/Cart/Cart'
import ProductPage from '../Component/Subcomponent/Product/Product Page/ProductPage'
import ProductDetails from '../Component/Subcomponent/Product/Individual Product/IndividualProduct'
import LoginPage from '../Component/Subcomponent/Authentication/Login'
import NoPage from '../Component/Subcomponent/NoPage/NoPage'
import AboutUs from '../Component/Subcomponent/About/AboutUs'
import Deals from '../Component/Subcomponent/Deals/Deals'
import Categories from '../Component/Subcomponent/Catagories/Catagories'

function MotherRouting() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/cart' element={<Carti/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/shop' element={<ProductPage/>}/>
            <Route path='/deals' element={<Deals/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default MotherRouting
