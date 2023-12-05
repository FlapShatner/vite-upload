import React from 'react'

export default function VariantBadge({ variant, size, setSize }) {
 const isSelected = variant.id === size
 return (
  <div
   className={`relative border bg-bg-secondary border-bg-primary py-4 ${isSelected ? 'bg-bg-primary border-txt-secondary' : ''}`}
   key={variant.id}>
   <input
    className='hidden'
    id={variant.id}
    name={variant.id}
    type='radio'
    checked={isSelected}
    onChange={() => setSize(variant.id)}
   />
   <label
    className='p-4'
    htmlFor={variant.id}>
    {variant.title}
   </label>
  </div>
 )
}
