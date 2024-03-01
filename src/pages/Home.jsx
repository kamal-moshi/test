import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
const [bookdata,setbookdata]= useState([{
  "_id": "65d24153bf9097aba07d87cf",
  "title": "node js",
  "author": "kml",
  "memberId": "65d23e3275f197ccf350ca77",
  "category": "sci fi",
  "subcategory": "action",
  "price": 1000,
  "Isdeleted": false,
  "availablebooks": 50
}])
useEffect(()=>{
  fetchbookdata()
  
},[])
const fetchbookdata= async()=>{
try {
  const response= await axios.get("http://localhost:4000/book/allbooks")
  console.log(response.data.data)
  setbookdata(response.data.data);
} catch (err) {
  alert(err.message)
}

}
const clickfunction=()=>{
 
}
  return (
    <>
    <h1>ALL Books</h1>

    <div className='flex justify-around flex-wrap'>
      {bookdata.map((book,index)=>{
        return(
          <div key={index} className='bg-slate-300 p-4 m-4 w-[300px] h-auto rounded-lg'>
          <img className='object-cover w-full rounded-lg' src="https://source.unsplash.com/1600x900/?book" alt="#" />
          <div className='text-center mt-3'>
            <h1 className='font-bold'>Name:{book.title}</h1>
            <p>category: {book.category}</p>
            <p>subcategory: {book.subcategory}</p>
            <p>authorname: {book.author}</p>
            <p>availablebooks: {book.availablebooks}</p>
            <p>Price:  {book.price}</p>
            </div>
            <div className='flex justify-center mt-2'>
            <Link to={`/checkout/${book._id}`} className=' bg-yellow-400 text-black font-semibold text-center p-3 rounded-md justify-center'>Checkout</Link>
            </div>
          
          </div>
        )
      })}

    </div>
    
    
    </>
  )
}

export default Home