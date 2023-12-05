import React from 'react'
import QuantIcons from './QuantIcons'

function Quantity({ quantity, setQuantity }) {
 const handleIncrement = () => {
  setQuantity(quantity + 1)
 }
 const handleDecrement = () => {
  setQuantity(quantity - 1)
 }

 return (
  <div className='flex flex-col'>
   <label htmlFor='quantity'>Quantity</label>
   <div className='flex'>
    <button
     onClick={handleDecrement}
     className='px-6 border border-txt-secondary border-r-bg-primary'>
     <QuantIcons
      name='minus'
      size='12'
     />
    </button>
    <input
     className='border border-txt-secondary bg-bg-primary text-txt-primary w-24 h-20 text-center'
     value={quantity}
     id='quantity'
     name='quantity'
     min='1'
     defaultValue='1'
    />
    <button
     onClick={handleIncrement}
     className='px-6 border border-txt-secondary border-l-bg-primary'>
     <QuantIcons
      name='plus'
      size='12'
     />
    </button>
   </div>
  </div>
 )
}

export default Quantity
