import { getAllPosts } from '@/lib/getAllPosts';
import Link from '@/node_modules/next/link';
import React from 'react'

export default async function() {
    var posts : any = await getAllPosts();
    console.log(posts);
  return (
    <div className='mt-6'>
       <h1>
           All Post
        </h1> 
        <ul>
        {posts.map((post : any)=> (
            <li key={post.id} className='mb-5'>
                <Link href={{pathname: '/post/'+post.id, query:{
                    id : post.title
                },}}>{post.title}</Link> 
            </li>
        ))}
    </ul>


    </div>
  )
}
