import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [
    {
      id : 1,
      title : 'T-shirts'
    },
    {
      id : 2,
      title : 'Laptops'
    },
    {
      id : 3,
      title : 'Earphones'
    }
  ];

  return (
    <>

      {products.map(single => {
        return (
            <li key={single.id}>
                  {single.title}
            </li>
        )
      })}
        
    </>
  )
}

export default App
