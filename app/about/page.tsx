import Link from '@/node_modules/next/link'
import React from 'react'


export default function About() {
  //throw new Error("Here is an error");
  return (
    <main className='mt-10'>
    <div>
    About us Page  
     <Link href="?modal=true">
                    <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
                </Link>   
                <Link href="?basicmodal=true">
                    <button type="button" className="bg-blue-500 text-white p-2">Open Modal 1</button>
                </Link> 
    

    </div>    
    </main>
  )
}
