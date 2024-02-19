import { notFound } from '@/node_modules/next/navigation'
import React from 'react'

export default function BlogPage({ params }: { params: { id: string } }) {
    if(params.id ==="3"){
        notFound();
    }
  return (
    <div>BlogPage {params.id}</div>
  )
}
