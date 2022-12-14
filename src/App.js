
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>

        <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/cart" element={<Cart></Cart>}></Route>
     
        </Routes>
         

    
    </BrowserRouter>


  );
}

export default App;
