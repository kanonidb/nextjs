import Button from '@/app/components/Button';
import notFound from '@/app/not-found';
import { getComments } from '@/lib/getAllPosts';
import React from 'react'

export default async function PostPage({ params }: { params: { id: string } }) {
    var posts  = await getComments(params.id);
    if(params.id ==="3"){
        notFound();
    }
  return (
    <div className='mt-6'>
        
       <h2> Get API id : {posts.id} </h2>
       <h2> Get API Title : {posts.title} </h2>
       <p> Get API Body : {posts.body} </p>
       <Button/>

        </div>
  )
}
