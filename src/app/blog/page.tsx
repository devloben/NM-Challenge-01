import Link from "next/link";
import React from "react";

interface Post {
  id: number
  title: string
  body: string
}

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()

  return (
    <main>
      <h1 className="text-4xl p-4">Blog</h1>
      <p className="text-lg mb-8 p-4">Derniers posts</p>
      <div className="grid grid-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {posts.map((post: Post) => 
          <Link 
            href={`./blog/${post.id}`}
            key={post.id}
            className="block p_4 bg-gray-500 rounded-md p-4 hover:bg-gray-600 transition duration-200 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="font-thin">{post.body.slice(0,100)}</p>
          </Link>
        )  
        }

      </div>

    </main>
  )
   
}

export default page;
