'use client';


import { useSearchParams } from '@/node_modules/next/navigation';
import React from 'react'

export default function Button() {
  const serchParam = useSearchParams();
  console.log(serchParam.get('id'));
  return (
    <div className='mt-5'>
    <button className='bg-green-500 rounded-sm px-4 py-1'
     onClick={()=>console.log("I Have Clicked Here")}>Click here</button> 
     </div>
  )
}
