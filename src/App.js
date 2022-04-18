import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/components/RequireAuth';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import Footer from './Pages/SharedPages/Footer/Footer';
import Header from './Pages/SharedPages/Header/Header';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App pt-20">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/:serviceId' element={<RequireAuth><ServiceDetails/></RequireAuth>}/>
        <Route path='/checkout' element={<RequireAuth><Checkout/></RequireAuth>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
