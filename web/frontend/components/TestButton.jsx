import { useState } from 'react'
export function TestButton() {
  const [data, setData] = useState(null)

  const handleClick = async () => {
    console.log('test')
    const res = await fetch('/a/test/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    console.log(data)
    setData(data)
  }

  return (
    <div>
      <span>{data ? data : ''}</span>
      <button className='text-txt-primary bg-black p-2' onClick={handleClick}>
        test
      </button>
    </div>
  )
}
