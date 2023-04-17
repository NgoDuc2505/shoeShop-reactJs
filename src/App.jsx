import { useState } from 'react'
import './App.css'
import ShoeStore from './module/shoe_store/ShoeStore'
import Header from './module/header/Header'
import Footer from './module/footer/Footer'
import Banner from './module/banner/Banner'
import BackToTop from './module/backToTop/BackToTop'


function App() {
  let [cartArr, setCartArr] = useState([])
  let[cartClose,setCartClose] = useState(true)
  let [empty,setEmpty] = useState(true)
  let [amount,setAmount] = useState(0)
  return (
    <div className="App">
      <Header 
      cartClose={cartClose} 
      setCartClose={setCartClose}
      amount={amount}/>
      <Banner/>
      <ShoeStore 
      cart={cartArr} 
      setCart={setCartArr} 
      cartClose={cartClose} 
      setCartClose={setCartClose}
      empty={empty}
      setEmpty={setEmpty}
      setAmount={setAmount}/>
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default App
