import ImageUpload from './Dropzone'

export default function App({ home }) {
  console.log('Home', home)

  return (
    <div className=''>
      <ImageUpload />
    </div>
  )
}
