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
      <div className='flex mt-2'>
        <div onClick={handleDecrement} className='px-4 flex items-center border border-txt-secondary border-r-bg-primary'>
          <QuantIcons name='minus' size='12' />
        </div>
        <input
          className='border border-txt-secondary bg-bg-primary text-txt-primary w-12 h-10 text-center'
          value={quantity}
          readOnly
          id='quantity'
          name='quantity'
          min='1'
        />
        <div onClick={handleIncrement} className='px-4 border flex items-center  border-txt-secondary border-l-bg-primary'>
          <QuantIcons name='plus' size='12' />
        </div>
      </div>
    </div>
  )
}

export default Quantity
