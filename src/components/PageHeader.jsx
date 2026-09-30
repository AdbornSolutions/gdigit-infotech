import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  // Prevent crash when service data is missing
  if (!service) {
    return null;
  }

  return (
    <article
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[13px]
        bg-white
        transition-all
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title || 'Service'}
          className="
            block
            h-[195px]
            w-full
            rounded-[13px]
            object-cover
          "
        />

        {/* LEFT TOP ICON */}
        <div
          className="
            absolute
            left-[-1px]
            top-[8px]
            flex
            h-[35px]
            w-[35px]
            items-center
            justify-center
            rounded-full
            bg-white
            text-[15px]
            shadow-[0_1px_5px_rgba(0,0,0,0.08)]
          "
        >
          {service.icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative px-[5px] pb-[5px] pt-[3px]">

        {/* TAG */}
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-[#F7F9FC]
            px-[7px]
            py-[3px]
            text-[8px]
            font-medium
            leading-none
            text-[#475569]
          "
        >
          {service.tag}
        </span>

        {/* TITLE + ARROW */}
        <div className="flex items-center justify-between gap-2">

          <h3
            className="
              text-[15px]
              font-medium
              leading-[21px]
              text-[#1E1E1E]
            "
          >
            {service.title}
          </h3>

          {/* ARROW */}
          <Link
            to={`/services/${service.slug}`}
            aria-label={`View ${service.title}`}
            className="
              flex
              h-[27px]
              w-[27px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-[15px]
              font-normal
              text-[#F97316]
              shadow-[0_1px_5px_rgba(0,0,0,0.10)]
              transition-all
              duration-200
              hover:bg-[#F97316]
              hover:text-white
            "
          >
            ↗
          </Link>

        </div>
      </div>
    </article>
  );
}