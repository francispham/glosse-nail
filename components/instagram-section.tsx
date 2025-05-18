import InstagramCard from "./ui/instagram-card";

export const INSTAGRAM_POSTS = [
  { id: 1, url: "https://www.instagram.com/p/DJaGMLkBg5H/" },
  { id: 2, url: "https://www.instagram.com/p/Cco5p1rrArQ/" },
  { id: 3, url: "https://www.instagram.com/p/DGT5f_WSne8" },
] as const;

export default function InstagramSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
            repellendus.
          </p>
        </div>
        <div className="@min-4xl:gap-20 @min-4xl:grid-cols-3 max-w-full mx-auto mt-8 grid *:text-center md:mt-16">
          {INSTAGRAM_POSTS.map((post) => (
            <InstagramCard key={post.id} url={post.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
