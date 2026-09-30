import { homeServices } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services({ items = homeServices, heading = 'We Walk With the Aspects of Digitalization Services' }) {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="badge">Our Services</span>
          <h2 className="h-section mt-4">{heading}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </div>
    </section>
  );
}