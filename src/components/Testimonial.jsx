export default function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-md md:grid md:grid-cols-2">
      <img src="/assets/testimonials/team.svg.png" alt="Happy customer team" className="h-56 w-full object-cover md:h-full" />
      <div className="p-6 sm:p-8">
        <span className="text-4xl leading-none text-brand-orange" aria-hidden="true">“</span>
        <div className="mb-2 text-brand-orange" aria-label="5 out of 5 stars">★★★★★</div>
        <p className="text-sm leading-relaxed sm:text-base">
          Gdigit Infotech delivered our website on time and the results speak for themselves. Communication was clear throughout, and the team is always available for support.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <img src="/assets/testimonials/avatar.svg" alt="Rahul Sharma" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-brand-dark">Rahul Sharma</p>
            <p className="text-xs">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
