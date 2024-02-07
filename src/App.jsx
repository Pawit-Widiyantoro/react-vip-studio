import React from 'react'

const Button = ({variant = 'bg-black', children = '...'}) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} children-white`} type='submit'>
      {children}
    </button>
  )
}

function App() {
  return (
    <div className='flex justify-center bg-blue-600 text-white min-h-screen items-center'>
      <div className='flex gap-x-3'>
        <Button variant='bg-red-700'>Login</Button>
        <Button variant='bg-slate-700'>Register</Button>
        <Button variant='bg-black'>Logout</Button>
      </div>
    </div>
  )
}

export default App
