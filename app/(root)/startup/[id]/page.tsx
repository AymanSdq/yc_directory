import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { title } from 'process';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


export const experimental_ppr = true


const page = async ({params} : {params : Promise<{id : string}>}) => {

    const id = (await params).id;

    const post = await client.fetch(STARTUPS_BY_ID_QUERY, {id})

    if(!post) return notFound();

    return (

        <>
            <section className='pink_container !min-h-[280px]'>

                <p className='tag'>{formatDate(post?._createdAt)}</p>

                <h1 className='heading'>{post.title}</h1>

                <p className='sub-heading !max-x-5xl'>{post.description}</p>
            </section>

            <section className='section_container'>
                <img className='w-full h-auto rounded-xl' src={post.image} alt="thumbnail" />

                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>

                    <div className='flex-between gap-5 '>
                        <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                            <Image className='rounded-full drop-shadow-lg' src={post.author.image} alt="avatar" width={64} height={64} />

                            <div>
                                <p className='text-20-medium'>{post.author.name}</p>
                                <p className='text-16-medium !text-black-300'>@{post.author.username}</p>
                            </div>
                        </Link>

                        <p className='category-tag'>{post.category}</p>
                    </div>


                    <h3 className='text-30-bold'>Pitch Details</h3>
                </div>
            </section>

            
        </>
    )
}

export default page