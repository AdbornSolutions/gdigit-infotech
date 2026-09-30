import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const cards = [
  ['Visit', '3rd Floor, Plot no. 47, Kotwalnagar, Khamla, Nagpur 440022'],
  ['Email', 'hr-manager@gdigitinfotech.com'],
  ['Phone', '73910 81988'],
  ['Hours', 'Mon – Sat, 10:00 AM – 7:00 PM'],
];
const field = 'w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-orange';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); e.target.reset(); };

  return (
    <>
      <PageHeader title="Contact Us" crumbs={['Contact']} />
      <section className="section-y">
        <div className="container-site">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-brand-border bg-white p-5">
                <h3 className="font-semibold text-brand-dark">{t}</h3>
                <p className="mt-1 break-words text-sm">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-brand-border bg-white p-6">
              <input required name="name" placeholder="Your name" aria-label="Name" className={field} />
              <input required type="email" name="email" placeholder="Email address" aria-label="Email" className={field} />
              <input name="phone" placeholder="Phone number" aria-label="Phone" className={field} />
              <textarea required name="message" rows="4" placeholder="How can we help?" aria-label="Message" className={field} />
              <button type="submit" className="btn-primary w-full">Send Message</button>
              {sent && <p role="status" className="text-sm text-brand-teal">Thanks! We'll get back to you shortly.</p>}
            </form>
            <iframe title="Gdigit Infotech location" className="h-72 w-full rounded-2xl border border-brand-border lg:h-full" loading="lazy"
              src="https://www.google.com/maps?q=Khamla,Nagpur&output=embed" />
          </div>
        </div>
      </section>
    </>
  );
}
