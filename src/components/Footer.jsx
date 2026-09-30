import { Link } from 'react-router-dom';
import { services } from '../data/services';

const quick = [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Blog', '/blog'], ['Contact Us', '/contact']];
const footerServices = ['Digital Marketing', 'Web Development', 'Mobile App Development', 'E-Commerce Solutions', 'ERP/CRM Services'];
const socials = ['f', 'in', 'ig', 'x'];

export default function Footer() {
  const slugFor = (name) => services.find((s) => s.title.toLowerCase().replace(/[^a-z]/g, '') === name.toLowerCase().replace(/[^a-z]/g, ''))?.slug;
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/assets/logo/digit-logo.png" alt="Gdigit Infotech" className="h-10 rounded bg-white px-2 py-1" />
          <p className="mt-4 text-sm leading-relaxed">G Digit Infotech is your trusted IT services provider company in Nagpur.</p>
          <div className="mt-4 flex gap-2">
            {socials.map((s) => (
              <a key={s} href="#" aria-label={s} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark-2 text-xs uppercase text-white transition-colors hover:bg-brand-orange">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quick.map(([l, to]) => <li key={l}><Link to={to} className="hover:text-brand-orange">{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {footerServices.map((n) => { const slug = slugFor(n); return <li key={n}><Link to={slug ? `/services/${slug}` : '/services'} className="hover:text-brand-orange">{n}</Link></li>; })}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <address className="space-y-2 text-sm not-italic">
            <p>3rd Floor, Plot no. 47,<br />Kotwalnagar, Khamla,<br />Nagpur 440022, Maharashtra</p>
            <p><a href="mailto:hr-manager@gdigitinfotech.com" className="break-all hover:text-brand-orange">hr-manager@gdigitinfotech.com</a></p>
            <p><a href="tel:+917391081988" className="hover:text-brand-orange">73910 81988</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-dark-2">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-4 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} G Digit Infotech. All rights reserved.</p>
          <p className="space-x-4"><a href="#" className="hover:text-brand-orange">Privacy Policy</a><a href="#" className="hover:text-brand-orange">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
}
