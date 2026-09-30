import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import WhyChooseUs from '../components/WhyChooseUs';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="container-site section-y pt-32 text-center"><h1 className="h-section">Service not found</h1><Link to="/services" className="btn-primary mt-6">All Services</Link></div>;
  }

  return (
    <>
      <PageHeader title={service.title} crumbs={['Services', service.title]} />
      <section className="section-y">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <img src={service.image} alt={service.title} className="aspect-[16/7] w-full rounded-3xl object-cover" />
            <h2 className="h-section mt-6">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed sm:text-base">{service.intro}</p>
            <h3 className="mt-8 text-xl font-semibold text-brand-dark">G digit Infotech <span className="text-brand-orange">Services</span></h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.offerings.map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-brand-border bg-white p-4">
                  <h4 className="text-sm font-semibold text-brand-dark">{t}</h4>
                  <p className="mt-1 text-xs leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-brand-border bg-white p-4">
            <h3 className="mb-3 font-semibold text-brand-dark">All Services</h3>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${s.slug === slug ? 'bg-brand-orange text-white' : 'hover:bg-brand-light'}`}>
                    {s.title} <span>›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
}
