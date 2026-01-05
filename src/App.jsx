import { lazy, Suspense } from 'react';
import {Routes,Route } from 'react-router';
const NavBar = lazy(()=>import("./components/NavBar2"));
const NavBar1 = lazy(()=>import("./components/NavBar1"));
const Footer = lazy(()=>import("./components/Footer"));
const Home = lazy(()=>import("./components/Home"));
const AboutUs = lazy(()=>import("./components/AboutUs"));
const PEB =lazy(()=>import("./components/PEB"));
const Portfolio = lazy(()=>import("./components/Portfolio"));
const ContactUS = lazy(()=>import("./components/ContactUS"));
const ScrollTop = lazy(()=>import("./components/ScrollTop"));
const Idlers = lazy(()=>import("./Products/Idlers"));
const OtherProducts = lazy(()=>import("./Products/OtherProducts"));
const Convers =lazy(()=>import("./Products/Convers"));
const Pulleys=lazy(()=>import("./Products/Pulleys"));

const ScrollToTopButton =lazy(()=>import("./components/ScrollTOTop"));
const Loading =lazy(()=>import("./components/Loading"));

import "./App.css";
import "./Mobile.css"
export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <NavBar/>
      <NavBar1/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
       <Route path='/PEB' element={ <PEB/>}/>
      <Route path='/Portfolio' element={ <Portfolio/>}/>
      <Route path='/ContactUS' element={ <ContactUS/>}/>
      <Route path='/Conveyors' element={ <Convers/>}/>
       <Route path='/Idlers' element={ <Idlers/>}/>
        <Route path='/Pulleys' element={ <Pulleys/>}/>
           <Route path='/OtherProducts' element={ <OtherProducts/>}/>
     </Routes>
       <Footer/>
        <ScrollTop/> 
        <ScrollToTopButton/>
      </Suspense>
    </>
  )
}
