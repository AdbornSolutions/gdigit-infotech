import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-shadow hover:shadow-lg">
      <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-lg" aria-hidden="true">{service.icon}</span>
          <span className="rounded-full bg-brand-bg px-3 py-1 text-xs font-medium text-brand-slate">{service.tag}</span>
        </div>
        <h3 className="text-lg font-semibold text-brand-dark">{service.title}</h3>
        <div className="mt-auto flex justify-end pt-4">
          <Link to={`/services/${service.slug}`} aria-label={`View ${service.title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white transition-colors group-hover:bg-brand-orange-hover">→</Link>
        </div>
      </div>
    </article>
  );
}
