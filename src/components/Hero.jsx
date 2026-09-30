import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-[#F7F9FC]">

      <div className="mx-auto max-w-[1200px] px-0 sm:px-4 lg:px-0">

        <div
          className="
            relative
            min-h-[620px]
            overflow-hidden
            rounded-b-[24px]
            bg-white
            sm:min-h-[650px]
            lg:min-h-[680px]
          "
        >

          {/* ================= HERO IMAGE ================= */}
          <div className="absolute inset-0 overflow-hidden">

            <img
              src="/assets/hero/hero.png"
              alt="Gdigit Infotech Digital Solutions"
              className="
                h-full
                w-full
                object-cover
                object-center
                scale-[1.04]
              "
            />

            {/* Text readability overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white
                via-white/90
                via-[48%]
                to-transparent
              "
            />

          </div>


          {/* ================= HERO CONTENT ================= */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[620px]
              items-center
              sm:min-h-[650px]
              lg:min-h-[680px]
            "
          >

            <div
              className="
                w-full
                px-6
                pt-28
                pb-14
                sm:px-10
                sm:pt-32
                lg:w-[55%]
                lg:px-12
                lg:pt-28
                lg:pb-16
              "
            >

              {/* Eyebrow */}
              <p
                className="
                  mb-4
                  text-sm
                  font-medium
                  text-[#475569]
                  sm:text-base
                "
              >
                Innovative Solutions.{" "}
                <span className="text-[#F97316]">
                  Real Growth
                </span>
              </p>


              {/* Heading */}
              <h1
                className="
                  max-w-[620px]
                  text-[38px]
                  font-bold
                  leading-[1.06]
                  tracking-[-1.5px]
                  text-[#1E1E1E]
                  sm:text-[48px]
                  lg:text-[58px]
                  xl:text-[62px]
                "
              >
                We Build Digital{" "}
                <span className="text-[#F97316]">
                  Solutions
                </span>{" "}
                That Drive Your Business.
              </h1>


              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-[530px]
                  text-sm
                  leading-7
                  text-[#475569]
                  sm:text-base
                "
              >
                From custom websites and software to mobile apps and
                digital marketing, we deliver end-to-end IT solutions
                that help businesses grow, scale, and succeed.
              </p>


              {/* CTA */}
              <div className="mt-8">

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-[#F97316]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    duration-200
                    hover:bg-[#EA580C]
                    hover:shadow-md
                    sm:text-base
                  "
                >
                  Get Free Consultation

                  <span className="text-lg leading-none">
                    ↗
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}