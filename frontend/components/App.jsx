import { useState } from 'react'
import ImageUpload from './Dropzone'

export default function App({ home }) {
  console.log('Home', home)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  return <div className='w-full flex justify-center'>{open ? <ImageUpload /> : <h1 onClick={handleClick}>Click here to upload custom image</h1>}</div>
}
