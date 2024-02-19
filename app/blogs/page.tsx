import Link from '@/node_modules/next/link'
import React from 'react'
const blogs =[{
    id : 1,
    title: "Blogs 1",
    description: "Blog 1 description"
},
{
    id : 2,
    title: "Blogs 2",
    description: "Blog 2 description"
}]
export default function Blogs() {
  return (
    <main className='mt-10'>
   
    <ul>
        {blogs.map((blog)=> (
            <li key={blog.id} className='mb-5'>
                <Link href={{pathname: '/blogs/'+blog.id}}>{blog.title}</Link> 
            </li>
        ))}
    </ul>
  </main>
  )
}
