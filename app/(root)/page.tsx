import SearchForm from "@/components/SearchForm";
import StartUpCard, { StartUpCardType } from "@/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import { startupsQuery } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(startupsQuery);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pich Your Startup <br /> Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Stratups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpCardType) => (
              <StartUpCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results"> No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
