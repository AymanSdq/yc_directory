import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true


const page = async ({params} : {params : Promise<{id : string}>}) => {

    const id = (await params).id;

    console.log(id)

    const post = await client.fetch(STARTUPS_BY_ID_QUERY, {id})

    if(!post) return notFound();

    return (
        <h3 className='text-3xl'>Startup : {post.title}</h3>
    )
}

export default page