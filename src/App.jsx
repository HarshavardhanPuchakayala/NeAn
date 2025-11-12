import { lazy, Suspense } from 'react';
import {Routes,Route } from 'react-router';


const NavBar = lazy(()=>import("./components/NavBar"));
const Footer = lazy(()=>import("./components/Footer"));

const Home = lazy(()=>import("./components/Home"));

const AboutUs = lazy(()=>import("./components/AboutUs"));

const PEB =lazy(()=>import("./components/PEB"));
const Products = lazy(()=>import("./components/Products"));

const Portfolio = lazy(()=>import("./components/Portfolio"));

const ContactUS = lazy(()=>import("./components/ContactUS"));

const ScrollTop = lazy(()=>import("./components/ScrollTop"));



const Loading =lazy(()=>import("./components/Loading"));

import "./App.css";
import "./Mobile.css"
export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
       <Route path='/PEB' element={ <PEB/>}/>
      <Route path='/Portfolio' element={ <Portfolio/>}/>
      <Route path='/Products' element={ <Products/>}/>
      <Route path='/ContactUS' element={ <ContactUS/>}/>
     </Routes>
       <Footer/>
        <ScrollTop/> 
      </Suspense>
    </>
  )
}
