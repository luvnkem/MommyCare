import logo from './logo.svg';
import './App.css';
import Home from './Page/Home'
import Navbar from './Page/Navbar';
import GirlClothes from './Page/GirlClothes';
import Toys from './Page/Toys';
import BoyClothes from './Page/BoyClothes';
import Shoes  from './Page/Shoes';
import ProductDetails from './Page/ProductDetails';
import CheckOutPage2 from './Page/CheckOutPage2';

function App() {
  return (
    <div className="App">
      
      <Navbar />

<Home />
<GirlClothes/>
<Toys/>
<BoyClothes/>
< Shoes />
<ProductDetails/>
<CheckOutPage2/>

    </div>
  
  );
}

export default App;
