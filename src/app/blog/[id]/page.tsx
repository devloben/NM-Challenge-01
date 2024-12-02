import React from 'react'
import Link from 'next/link'

interface Post {
    id: number
    title: string
    body: string
}

interface PageProps {
    params: {
        id: string
    }
}

async function page({params}: PageProps) {
    const {id} = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: Post = await res.json()

    return (
        <main className='mx-auto w-1/2 shadow rounded-md max-w-2xl mt-5 p-4 bg-gray-600 shadow-xl'>
            <h2 className='text-3xl font-bold mb-4'>{post.title}</h2>
            <p className='text-gray-200 mb-8'>{post.body}</p>
            <Link href="/blog" className="text-blue-300 hover:underline">← Retour au Blog</Link>

        </main>
    )
}

export default page