import React from 'react'
import Spinner from './Spinner';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Blog = () => {
    const {posts,loading} = useContext(AppContext);
    console.log('data');
    console.log(posts);
  return (

    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
        {
            loading ? (<Spinner/>):(
                posts.length === 0 ? (<div>
                    <p>No post Found</p>
                </div>):(posts.map((post)=>(
                    <div key={post.id}>
                        <p className='font-bold text-l'>{post.title}</p>
                        <p className='text-sm mt-[4px]'>
                            By<span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                        <p className='text-md mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index)=>{
                                return<span key={index} className='text-blue-600 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blog