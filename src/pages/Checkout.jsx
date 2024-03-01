import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  const { id } = useParams()
  console.log(id)
  useEffect(() =>{
    
  },[])
  return (
    <div>Checkout</div>
  )
}

export default Checkout