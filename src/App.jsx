import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/header";
import { AboutUs } from "./pages/About_Us/AboutUs";
import { ErrorPage } from "./pages/Error/errorPage";
import { Footer } from "./components/Footer/footer";
import { PropertyRental } from './pages/Property_Rental/PropertyRental'
import './style/App.scss'


function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<AboutUs />} />
          <Route path="/propertyrental/:propertyRentalId" element={<PropertyRental/>} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
