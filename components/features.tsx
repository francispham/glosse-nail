import InstagramCard from "./ui/instagram-card";

export const INSTAGRAM_POSTS = [
  { id: 1, url: "https://www.instagram.com/p/DJaGMLkBg5H/" },
  { id: 2, url: "https://www.instagram.com/p/Cco5p1rrArQ/" },
  { id: 3, url: "https://www.instagram.com/p/DGT5f_WSne8" },
  { id: 4, url: "https://www.instagram.com/p/DIsnYpgOF9l/" },
  { id: 5, url: "https://www.instagram.com/p/DIF2Mvfxos0/" },
  { id: 6, url: "https://www.instagram.com/p/DILBz1LOhEh/" },
] as const;

export default function Features() {
  return (
    <section className="py-16 md:py-32" id="features">
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
        <div className="grid gap-12 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3  [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          {INSTAGRAM_POSTS.map((post) => (
            <InstagramCard key={post.id} url={post.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
