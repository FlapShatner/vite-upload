import React from 'react'
import { useState } from 'react'

export default function VariantBadge({ variant }) {
  const [selected, setSelected] = useState(false)
  const handleClick = (e) => {
    setSelected(e.target.value)
  }
  return <div key={variant.id} className='cursor-pointer'></div>
}
