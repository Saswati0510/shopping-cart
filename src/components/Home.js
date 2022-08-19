import React from 'react'
import './styles.css'
import { CartStates } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {

  const { state :{products},productState:{byStock, byRating, sort, byFastDelivery,searchQuery}} = CartStates();
 const transformedProducts=()=>{
  let sortedProducts=products;
  if(sort){
    sortedProducts=sortedProducts.sort((a,b)=>sort==='lowToHigh'?a.price-b.price:b.price-a.price)
  }
  if(!byStock){
    sortedProducts=sortedProducts.filter((p)=>p.inStock)
  }
  if(byFastDelivery){
    sortedProducts=sortedProducts.filter((p)=>p.fastDelivery)
  }
  if(byRating){
    sortedProducts=sortedProducts.filter((p)=>p.ratings >= byRating)
  }
  if(searchQuery){
    sortedProducts=sortedProducts.filter((p)=>p.name.toLowerCase().includes(searchQuery))
  }
  
  return sortedProducts;
 }

  return (
    <div className='home'>
      <Filter></Filter>
      <div className='productContainer'>
        {transformedProducts().map((p)=>{
          return <SingleProduct prod={p} key={p.id} />
        })
        }
      </div>
    </div>
  )
}

export default Home