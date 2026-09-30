import { Link } from 'react-router-dom';
import { stats } from '../data/features';

export default function About() {
  return (
    <section className="section-y bg-[#F7F9FC]">
      <div className="container-site">

        {/* Main About Layout */}
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-[#D9D9D9] bg-[#EFF1F3] lg:grid-cols-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-8">

            {/* Top Content */}
            <div className="grid gap-6 px-6 pt-6 sm:px-8 lg:grid-cols-2 lg:px-8">

              {/* Heading */}
              <div>
                <span className="inline-flex rounded-full border border-[#D9D9D9] bg-white px-4 py-1 text-xs font-medium text-[#3A506B]">
                  About Company
                </span>

                <h2 className="mt-6 max-w-xl text-2xl font-bold leading-tight text-[#1E1E1E] sm:text-3xl">
                  Gdigit Infotech Your
                  <br />
                  Trusted IT Company in Nagpur.
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-start">
                <p className="max-w-sm text-sm leading-relaxed text-[#475569]">
                  G Digit Infotech is your trusted IT service provider company
                  in Nagpur. With a commitment to delivering exceptional
                  solutions.
                </p>

                <Link
                  to="/about"
                  className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#FB923C]"
                >
                  Learn More
                  <span>↗</span>
                </Link>
              </div>

            </div>

            {/* Large Main Image */}
            <div className="mt-6 px-6 pb-6 sm:px-8">
              <img
                src="/assets/about/about.svg.png"
                alt="Gdigit Infotech team at work"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[350px] lg:h-[380px]"
              />
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col bg-white lg:col-span-4">

            {/* Team Image */}
            <div className="relative p-0">
              <img
                src="/assets/about/team.svg.png"
                alt="Gdigit Infotech team meeting"
                className="h-[300px] w-full object-cover sm:h-[350px] lg:h-[360px]"
              />

              {/* Logo Badge */}
              <div className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src="/assets/logo/digit-logo.svg"
                  alt="Gdigit Infotech"
                  className="h-9 w-9 object-contain"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-auto grid grid-cols-2 border-t border-[#D9D9D9]">

              {stats.slice(0, 2).map((s) => (
                <div
                  key={s.label}
                  className="px-5 py-6"
                >
                  <p className="text-2xl font-bold text-[#1E1E1E] sm:text-3xl">
                    {s.value}
                  </p>

                  <p className="mt-1 text-xs text-[#475569] sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}