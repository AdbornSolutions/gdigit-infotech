export default function BlogCard({ blog }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-shadow hover:shadow-lg">
      <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs text-brand-orange">{blog.date}</time>
        <h3 className="mt-2 text-base font-semibold leading-snug text-brand-dark group-hover:text-brand-orange">{blog.title}</h3>
      </div>
    </article>
  );
}
