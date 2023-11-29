import { useState } from 'react'
import ImageUpload from './Dropzone'

export default function App({ home }) {
  console.log('Home', home)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='w-full flex justify-center'>
      <ImageUpload />{' '}
    </div>
  )
}
