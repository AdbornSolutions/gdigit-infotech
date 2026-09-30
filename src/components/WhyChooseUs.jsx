import { Link } from 'react-router-dom';
import { features } from '../data/features';
import Testimonial from './Testimonial';

export default function WhyChooseUs() {
  return (
    <section className="section-y">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="badge">Why Choose Us</span>
            <h2 className="h-section mt-4">Why Businesses Choose <span className="text-brand-orange">Gdigit Infotech</span></h2>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">We combine technical skill with a business mindset so every project delivers real, measurable value.</p>
            <Link to="/contact" className="btn-primary mt-6">Contact Us</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-brand-border bg-white p-4">
                <span className="mb-2 block h-2 w-8 rounded-full bg-brand-orange" />
                <h3 className="text-sm font-semibold text-brand-dark">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12"><Testimonial /></div>
      </div>
    </section>
  );
}
