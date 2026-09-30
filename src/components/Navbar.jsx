import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { services } from '../data/services';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-brand-orange ${
    isActive ? 'text-brand-orange' : 'text-brand-dark'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const close = () => {
    setOpen(false);
    setDropdown(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4">
      <div className="container-site">

        {/* ================= NAVBAR ================= */}
        <nav
          className="
            flex
            items-center
            justify-between
            rounded-full
            bg-white
            px-4
            py-2.5
            shadow-md
            sm:px-6
          "
          aria-label="Main"
        >

          {/* LOGO */}
          <Link
            to="/"
            onClick={close}
            className="shrink-0"
          >
            <img
              src="/assets/logo/digit-logo.png"
              alt="Gdigit Infotech logo"
              className="h-9 w-auto sm:h-10"
            />
          </Link>


          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-7 lg:flex">

            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass}>
                About Us
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <NavLink
                to="/services"
                className={`${linkClass} flex items-center gap-1`}
              >
                Services
                <span className="text-[10px]">▼</span>
              </NavLink>

              {dropdown && (
                <ul
                  className="
                    absolute
                    left-0
                    top-full
                    mt-2
                    w-64
                    rounded-2xl
                    border
                    border-brand-border
                    bg-white
                    p-2
                    shadow-lg
                  "
                >
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        onClick={close}
                        className="
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          text-brand-dark
                          transition-colors
                          hover:bg-brand-light
                          hover:text-brand-orange
                        "
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/blog" className={linkClass}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>

          </ul>


          {/* DESKTOP LET'S TALK BUTTON */}
          <Link
            to="/contact"
            className="
              hidden
              items-center
              gap-2
              rounded-[9px]
              bg-[#F97316]
              px-4
              py-2
              text-[12px]
              font-medium
              text-white
              transition
              duration-200
              hover:bg-[#FB923C]
              lg:inline-flex
            "
          >
            Let's Talk
            <span className="text-[14px] leading-none">
              ↗
            </span>
          </Link>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="rounded-lg p-2 text-brand-dark lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

        </nav>


        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="mt-2 rounded-3xl bg-white p-4 shadow-lg lg:hidden">

            <ul className="flex flex-col gap-1">

              {links.slice(0, 2).map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={close}
                    className={(s) =>
                      `block rounded-lg px-3 py-2 ${linkClass(s)}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}


              {/* MOBILE SERVICES */}
              <li>
                <button
                  type="button"
                  onClick={() => setDropdown(!dropdown)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-medium
                    text-brand-dark
                  "
                >
                  Services
                  <span>
                    {dropdown ? '▴' : '▾'}
                  </span>
                </button>

                {dropdown && (
                  <ul className="ml-3 border-l border-brand-border pl-3">

                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={close}
                          className="
                            block
                            py-1.5
                            text-sm
                            text-brand-text
                            hover:text-brand-orange
                          "
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}

                  </ul>
                )}
              </li>


              {links.slice(2).map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={close}
                    className={(s) =>
                      `block rounded-lg px-3 py-2 ${linkClass(s)}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}

            </ul>


            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={close}
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[9px]
                bg-[#F97316]
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                hover:bg-[#FB923C]
              "
            >
              Let's Talk
              <span>↗</span>
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}