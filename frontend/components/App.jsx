import { useState, useEffect } from 'react'
import { getCurrentUrl, getCustomVariant, getSelectedVariant } from './utils'
import Form from './Form'
import ImageUpload from './Dropzone'

export default function App({ home }) {
  console.log('Home', home)

  return (
    <div className='w-full flex'>
      <ImageUpload />
      <Form />
    </div>
  )
}
