import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _created_at: new Date(),
      views: 53,
      author: { _id: 1, name: "Zee" },
      _id: 1,
      description: "This is a comment",
      image:
        "https://media.assettype.com/analyticsinsight%2F2024-07%2Fb20442aa-0dc3-40ed-a3bb-6e6083f933ca%2FTop_10_Personal_Robots_that_You_Can_Buy_in_2023.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
