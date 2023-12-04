import { useState, useEffect } from 'react'
import { getCurrentUrl, getCustomVariant, getSelectedVariant } from './utils'
import ImageUpload from './Dropzone'

export default function App({ home }) {
  console.log('Home', home)
  const [open, setOpen] = useState(false)
  const [customVariantId, setCustomVariantId] = useState(null)
  const [imageAvailable, setImageAvailable] = useState(false)

  const selectedVariantId = getSelectedVariant()

  getCustomVariant().then((res) => {
    setCustomVariantId(res[0].id)
  })

  useEffect(() => {
    if (selectedVariantId === customVariantId) {
      setImageAvailable(true)
    }
    console.log('Custom Variant Id', customVariantId, 'Selected Variant Id', selectedVariantId)
  }, [selectedVariantId])

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className='w-full flex justify-center'>
      {open && imageAvailable ? (
        <>
          <ImageUpload cancel={handleClick} customVariantId={customVariantId} />
        </>
      ) : (
        <p onClick={handleClick} className='cursor-pointer border border-bg-secondary text-bg-secondary p-4 rounded-md'>
          Upload Custom Image
        </p>
      )}
    </div>
  )
}
