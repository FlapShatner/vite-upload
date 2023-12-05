import React from 'react'

export default function VariantBadge({ variant, size, setSize, setProductPrice }) {
  const isSelected = variant.id === size
  const handleChange = () => {
    setSize(variant.id)
    setProductPrice(variant.price)
  }

  return (
    <div
      className={`relative border cursor-pointer bg-bg-secondary border-bg-primary ${isSelected ? 'bg-bg-primary border-txt-secondary' : ''}`}
      key={variant.id}>
      <input className='hidden' id={variant.id} name={variant.id} type='radio' checked={isSelected} onChange={handleChange} />
      <label className='p-2 cursor-pointer text-sm' htmlFor={variant.id}>
        {variant.title}
      </label>
    </div>
  )
}
