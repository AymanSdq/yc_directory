import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams} : {searchParams : Promise<{query? : string}>}) {
  
  const query = (await searchParams).query;

  const posts = [{
    _createdAt : new Date(),
    views : 153,
    author : {_id : 1, name : "Ayman"},
    _id : 1,
    description : "How is AI will help us to be the best developers",
    image : "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category : "Developers",
    title : "AI + Developpement"

  }]
  
  return (
    <>
      <section className=" pink_container">

        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticeed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <div className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post : StartupCardType, index: number) => (
                <StartupCard key={post?._id} post={post}  />
              ))
            ) : (<p className="no-reesults">No Startups found!</p>)}
          </ul>
        </div>
      </section>
    </>
  );
}
