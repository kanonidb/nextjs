import Button from '@/app/components/Button'
import Image from '@/node_modules/next/image'
import thumb from '@/public/GP.jpg'
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
     <Button/>
        </main>
    )
  }
