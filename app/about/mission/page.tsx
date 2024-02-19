import Button from '@/app/components/Button'
import Image from '@/node_modules/next/image'
import thumb from '@/public/GP.jpg'
import Link from 'next/link'
import React from 'react'

export default function Mission() {
    return (
        <main className='mt-10'>
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat nobis quod culpa obcaecati repudiandae! Corporis 
          facere nisi enim ut deserunt optio neque, 
          accusamus quam tempora eum laudantium voluptatibus? Nisi, deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat nobis quod culpa obcaecati repudiandae! Corporis 
          facere nisi enim ut deserunt optio neque, 
          accusamus quam tempora eum laudantium voluptatibus? Nisi, deserunt?
      </div>
        <div className="w-[100px]">
        <Image src={thumb} alt="Next Img"/>
        </div>
        <Link href="?modal=true">
                    <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
                </Link> 
     <Button/>
        </main>
    )
  }
